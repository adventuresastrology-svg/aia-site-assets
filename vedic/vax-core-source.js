/* vax core: Vedic calculations on top of Astronomy Engine. ES5. Exposes VAXCORE(A) -> api */
function VAXCORE(A) {
  var D2R = Math.PI / 180;
  function norm(x) { x = x % 360; return x < 0 ? x + 360 : x; }
  function jd(d) { return d.getTime() / 86400000 + 2440587.5; }
  function lahiri(d) { var T = (jd(d) - 2451545.0) / 36525; return 23.85709 + (5028.796195 * T + 1.1054348 * T * T) / 3600; }
  function meanNode(d) { var T = (jd(d) - 2451545.0) / 36525; return norm(125.04452 - 1934.136261 * T + 0.0020708 * T * T + T * T * T / 450000); }
  function trop(key, d) {
    if (key === 'Sun') { return A.SunPosition(d).elon; }
    if (key === 'Moon') { return A.EclipticGeoMoon(d).lon; }
    if (key === 'Rahu') { return meanNode(d); }
    if (key === 'Ketu') { return norm(meanNode(d) + 180); }
    return A.Ecliptic(A.GeoVector(A.Body[key], d, true)).elon;
  }
  function sid(key, d) { return norm(trop(key, d) - lahiri(d)); }
  function asc(d, lat, lon) {
    var T = (jd(d) - 2451545.0) / 36525;
    var eps = (23.4392911 - 0.0130042 * T) * D2R;
    var ramc = norm(A.SiderealTime(d) * 15 + lon) * D2R, phi = lat * D2R;
    var a = Math.atan2(Math.cos(ramc), -(Math.sin(ramc) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))) / D2R;
    return norm(norm(a) - lahiri(d));
  }
  var KEYS = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'];
  function positions(d, lat, lon, hasTime) {
    var out = {}, i, k;
    for (i = 0; i < KEYS.length; i++) {
      k = KEYS[i];
      var l = sid(k, d);
      var retro = false;
      if (k !== 'Sun' && k !== 'Moon' && k !== 'Rahu' && k !== 'Ketu') {
        var l2 = sid(k, new Date(d.getTime() + 3600000));
        retro = norm(l2 - l + 180) - 180 < 0;
      } else if (k === 'Rahu' || k === 'Ketu') { retro = true; }
      out[k] = { lon: l, sign: Math.floor(l / 30), deg: l % 30, retro: retro };
    }
    if (hasTime && lat !== '' && lon !== '' && !isNaN(lat)) {
      var a = asc(d, lat, lon);
      out.Asc = { lon: a, sign: Math.floor(a / 30), deg: a % 30, retro: false };
    }
    return out;
  }
  /* ---------- reference names ---------- */
  var SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  var RASHI = ['Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya', 'Tula', 'Vrischika', 'Dhanu', 'Makara', 'Kumbha', 'Meena'];
  var SIGN_LORD = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];
  var NAK = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'];
  var NAKSPAN = 360 / 27;
  function nakOf(l) { var n = Math.floor(l / NAKSPAN); return { idx: n, name: NAK[n], pada: Math.floor((l - n * NAKSPAN) / (NAKSPAN / 4)) + 1 }; }

  /* ---------- search helpers ---------- */
  function crossing(f, target, start, maxHours) {
    /* first time after start when angle f(t) passes target (moving forward). */
    function g(t) { return norm(f(new Date(t)) - target + 180) - 180; }
    var t0 = start.getTime(), step = 3600000, prev = g(t0), t = t0;
    for (var i = 0; i < maxHours; i++) {
      var t1 = t + step, cur = g(t1);
      if (prev < 0 && cur >= 0 && cur - prev < 90) {
        var lo = t, hi = t1;
        for (var j = 0; j < 20; j++) { var mid = (lo + hi) / 2; if (g(mid) < 0) { lo = mid; } else { hi = mid; } }
        return new Date(hi);
      }
      prev = cur; t = t1;
    }
    return null;
  }
  /* ---------- Panchanga ---------- */
  var TITHI = ['Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami', 'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi'];
  function tithiName(i) {
    if (i === 14) { return { name: 'Purnima', paksha: 'Shukla Paksha (waxing)' }; }
    if (i === 29) { return { name: 'Amavasya', paksha: 'Krishna Paksha (waning)' }; }
    return { name: TITHI[i % 15], paksha: i < 15 ? 'Shukla Paksha (waxing)' : 'Krishna Paksha (waning)' };
  }
  var YOGA = ['Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma', 'Dhriti', 'Shula', 'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra', 'Siddhi', 'Vyatipata', 'Variyana', 'Parigha', 'Shiva', 'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma', 'Indra', 'Vaidhriti'];
  var KARANA_MOV = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Garaja', 'Vanija', 'Vishti (Bhadra)'];
  function karanaName(k) { if (k === 0) { return 'Kimstughna'; } if (k >= 57) { return ['Shakuni', 'Chatushpada', 'Naga'][k - 57]; } return KARANA_MOV[(k - 1) % 7]; }
  var VARA = ['Ravivara (Sunday, ruled by the Sun)', 'Somavara (Monday, ruled by the Moon)', 'Mangalavara (Tuesday, ruled by Mars)', 'Budhavara (Wednesday, ruled by Mercury)', 'Guruvara (Thursday, ruled by Jupiter)', 'Shukravara (Friday, ruled by Venus)', 'Shanivara (Saturday, ruled by Saturn)'];
  var RAHU_SEG = [8, 2, 7, 5, 6, 4, 3], YAMA_SEG = [5, 4, 3, 2, 1, 7, 6], GULI_SEG = [7, 6, 5, 4, 3, 2, 1];
  function elong(d) { return norm(trop('Moon', d) - trop('Sun', d)); }
  function yogaAngle(d) { return norm(sid('Sun', d) + sid('Moon', d)); }
  function panchanga(localMidnightUTC, lat, lon, weekday) {
    var obs = new A.Observer(lat, lon, 0);
    var rise = A.SearchRiseSet(A.Body.Sun, obs, +1, localMidnightUTC, 1);
    if (!rise) { return null; }
    var r = rise.date;
    var set = A.SearchRiseSet(A.Body.Sun, obs, -1, r, 1);
    var next = A.SearchRiseSet(A.Body.Sun, obs, +1, new Date(r.getTime() + 3600000), 1.2);
    var s = set ? set.date : null, n = next ? next.date : null;
    var e = elong(r), ti = Math.floor(e / 12), ml = sid('Moon', r), ni = Math.floor(ml / NAKSPAN), ya = yogaAngle(r), yi = Math.floor(ya / NAKSPAN), ki = Math.floor(e / 6);
    var out = {
      sunrise: r, sunset: s, nextSunrise: n, vara: VARA[weekday], weekday: weekday,
      tithi: { idx: ti, info: tithiName(ti), ends: crossing(elong, ((ti + 1) * 12) % 360, r, 40) },
      nakshatra: { idx: ni, name: NAK[ni], ends: crossing(function (d) { return sid('Moon', d); }, ((ni + 1) * NAKSPAN) % 360, r, 40) },
      yoga: { idx: yi, name: YOGA[yi], ends: crossing(yogaAngle, ((yi + 1) * NAKSPAN) % 360, r, 40) },
      karana: { idx: ki, name: karanaName(ki), ends: crossing(elong, ((ki + 1) * 6) % 360, r, 20) },
      moonSign: Math.floor(ml / 30), sunSign: Math.floor(sid('Sun', r) / 30), moonNak: nakOf(ml)
    };
    if (s) {
      var len = (s.getTime() - r.getTime()) / 8;
      var seg = function (k) { return [new Date(r.getTime() + (k - 1) * len), new Date(r.getTime() + k * len)]; };
      out.rahu = seg(RAHU_SEG[weekday]); out.yama = seg(YAMA_SEG[weekday]); out.gulika = seg(GULI_SEG[weekday]);
      var mu = (s.getTime() - r.getTime()) / 15;
      out.abhijit = [new Date(r.getTime() + 7 * mu), new Date(r.getTime() + 8 * mu)];
    }
    return out;
  }
  /* ---------- sign timeline (Saturn, Jupiter, nodes) ---------- */
  function signAt(key, t) { return Math.floor(sid(key, new Date(t)) / 30); }
  function signTimeline(key, from, to, stepDays) {
    var out = [], step = stepDays * 86400000, t = from.getTime(), s = signAt(key, t), start = t;
    while (t < to.getTime()) {
      var t1 = t + step, s1 = signAt(key, t1);
      if (s1 !== s) {
        var lo = t, hi = t1;
        for (var j = 0; j < 24; j++) { var mid = (lo + hi) / 2; if (signAt(key, mid) === s) { lo = mid; } else { hi = mid; } }
        out.push({ sign: s, start: new Date(start), end: new Date(hi) });
        s = s1; start = hi;
      }
      t = t1;
    }
    out.push({ sign: s, start: new Date(start), end: null });
    return out;
  }
  function sadeSati(moonSign, from, to) {
    var tl = signTimeline('Saturn', from, to, 4), eps = [], cur = null, i;
    var phaseOf = function (s) { var h = (s - moonSign + 12) % 12; return h === 11 ? 'rising' : (h === 0 ? 'peak' : (h === 1 ? 'setting' : null)); };
    for (i = 0; i < tl.length; i++) {
      var ph = phaseOf(tl[i].sign);
      if (ph) {
        if (!cur) { cur = { start: tl[i].start, end: tl[i].end, parts: [] }; eps.push(cur); }
        cur.end = tl[i].end;
        cur.parts.push({ phase: ph, sign: tl[i].sign, start: tl[i].start, end: tl[i].end });
      } else if (cur) {
        var gap = tl[i].end ? tl[i].end.getTime() - tl[i].start.getTime() : Infinity;
        var nextIn = i + 1 < tl.length && phaseOf(tl[i + 1].sign);
        if (!(gap < 400 * 86400000 && nextIn)) { cur = null; }
      }
    }
    return eps;
  }
  /* ---------- Ashtakoota ---------- */
  var VARNA_OF = [1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0]; /* 0 Brahmin, 1 Kshatriya, 2 Vaishya, 3 Shudra */
  var VARNA_NAME = ['Brahmin', 'Kshatriya', 'Vaishya', 'Shudra'];
  function vashyaOf(l) {
    var s = Math.floor(l / 30), d = l % 30;
    if (s === 0 || s === 1) { return 0; }
    if (s === 8) { return d < 15 ? 1 : 0; }
    if (s === 9) { return d < 15 ? 0 : 2; }
    if (s === 2 || s === 5 || s === 6 || s === 10) { return 1; }
    if (s === 3 || s === 11) { return 2; }
    if (s === 4) { return 3; }
    return 4;
  }
  var VASHYA_NAME = ['Chatushpada (four-footed)', 'Manava (human)', 'Jalachara (water)', 'Vanachara (wild)', 'Keeta (insect)'];
  var VASHYA_T = [[2, 1, 1, 0.5, 1], [1, 2, 0.5, 0, 1], [1, 0.5, 2, 1, 1], [0, 0, 0, 2, 0], [1, 1, 1, 0, 2]];
  var YONI_OF = [0, 1, 2, 3, 3, 4, 5, 2, 5, 6, 6, 7, 8, 9, 8, 9, 10, 10, 4, 11, 12, 11, 13, 0, 13, 7, 1];
  var YONI_NAME = ['Horse', 'Elephant', 'Sheep', 'Serpent', 'Dog', 'Cat', 'Rat', 'Cow', 'Buffalo', 'Tiger', 'Deer', 'Monkey', 'Mongoose', 'Lion'];
  var YONI_T = [
    [4, 2, 2, 3, 2, 2, 2, 1, 0, 1, 3, 3, 2, 1], [2, 4, 3, 3, 2, 2, 2, 2, 3, 1, 2, 3, 2, 0], [2, 3, 4, 2, 1, 2, 1, 3, 3, 1, 2, 0, 3, 1],
    [3, 3, 2, 4, 2, 1, 1, 1, 1, 2, 2, 2, 0, 2], [2, 2, 1, 2, 4, 2, 1, 2, 2, 1, 0, 2, 1, 1], [2, 2, 2, 1, 2, 4, 0, 2, 2, 1, 3, 3, 2, 1],
    [2, 2, 1, 1, 1, 0, 4, 2, 2, 2, 2, 2, 1, 2], [1, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 2, 1], [0, 3, 3, 1, 2, 2, 2, 3, 4, 1, 2, 2, 2, 1],
    [1, 1, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 1], [3, 2, 2, 2, 0, 3, 2, 3, 2, 1, 4, 2, 2, 1], [3, 3, 0, 2, 2, 3, 2, 2, 2, 1, 2, 4, 3, 2],
    [2, 2, 3, 0, 1, 2, 1, 2, 2, 2, 2, 3, 4, 2], [1, 0, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 4]];
  var REL = { /* natural friendship: f friend, n neutral, e enemy */
    Sun: { Moon: 'f', Mars: 'f', Jupiter: 'f', Mercury: 'n', Venus: 'e', Saturn: 'e' },
    Moon: { Sun: 'f', Mercury: 'f', Mars: 'n', Jupiter: 'n', Venus: 'n', Saturn: 'n' },
    Mars: { Sun: 'f', Moon: 'f', Jupiter: 'f', Venus: 'n', Saturn: 'n', Mercury: 'e' },
    Mercury: { Sun: 'f', Venus: 'f', Mars: 'n', Jupiter: 'n', Saturn: 'n', Moon: 'e' },
    Jupiter: { Sun: 'f', Moon: 'f', Mars: 'f', Saturn: 'n', Mercury: 'e', Venus: 'e' },
    Venus: { Mercury: 'f', Saturn: 'f', Mars: 'n', Jupiter: 'n', Sun: 'e', Moon: 'e' },
    Saturn: { Mercury: 'f', Venus: 'f', Jupiter: 'n', Sun: 'e', Moon: 'e', Mars: 'e' }
  };
  function maitri(a, b) {
    if (a === b) { return 5; }
    var x = REL[a][b], y = REL[b][a], k = [x, y].sort().join('');
    return { ff: 5, fn: 4, nn: 3, ef: 1, en: 0.5, ee: 0 }[k];
  }
  var GANA_OF = [0, 1, 2, 1, 0, 1, 0, 0, 2, 2, 1, 1, 0, 2, 0, 2, 0, 2, 2, 1, 1, 0, 2, 2, 1, 1, 0];
  var GANA_NAME = ['Deva', 'Manushya', 'Rakshasa'];
  var GANA_T = [[6, 6, 1], [5, 6, 0], [1, 0, 6]];
  var NADI_OF = [0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2];
  var NADI_NAME = ['Adi (Vata)', 'Madhya (Pitta)', 'Antya (Kapha)'];
  function taraScore(from, to) { var c = ((to - from + 27) % 27) + 1, t = ((c - 1) % 9) + 1; return { tara: t, ok: !(t === 3 || t === 5 || t === 7) }; }
  function koota(boyMoon, girlMoon) {
    var bs = Math.floor(boyMoon / 30), gs = Math.floor(girlMoon / 30), bn = Math.floor(boyMoon / NAKSPAN), gn = Math.floor(girlMoon / NAKSPAN);
    var res = [];
    var bv = VARNA_OF[bs], gv = VARNA_OF[gs];
    res.push({ key: 'Varna', max: 1, score: bv <= gv ? 1 : 0, detail: VARNA_NAME[bv] + ' and ' + VARNA_NAME[gv] });
    var bva = vashyaOf(boyMoon), gva = vashyaOf(girlMoon);
    res.push({ key: 'Vashya', max: 2, score: VASHYA_T[bva][gva], detail: VASHYA_NAME[bva] + ' and ' + VASHYA_NAME[gva] });
    var t1 = taraScore(gn, bn), t2 = taraScore(bn, gn);
    res.push({ key: 'Tara', max: 3, score: (t1.ok ? 1.5 : 0) + (t2.ok ? 1.5 : 0), detail: 'Tara ' + t1.tara + ' one way and ' + t2.tara + ' the other' });
    var by = YONI_OF[bn], gy = YONI_OF[gn];
    res.push({ key: 'Yoni', max: 4, score: YONI_T[by][gy], detail: YONI_NAME[by] + ' and ' + YONI_NAME[gy] });
    var bl = SIGN_LORD[bs], gl = SIGN_LORD[gs];
    res.push({ key: 'Graha Maitri', max: 5, score: maitri(bl, gl), detail: 'Moon sign lords ' + bl + ' and ' + gl });
    var bg = GANA_OF[bn], gg = GANA_OF[gn];
    res.push({ key: 'Gana', max: 6, score: GANA_T[bg][gg], detail: GANA_NAME[bg] + ' and ' + GANA_NAME[gg] });
    var dist = ((gs - bs + 12) % 12) + 1, back = ((bs - gs + 12) % 12) + 1, pair = [dist, back].sort(function (a, b) { return a - b; }).join('/');
    var badB = pair === '2/12' || pair === '5/9' || pair === '6/8';
    res.push({ key: 'Bhakoot', max: 7, score: badB ? 0 : 7, detail: 'Moon signs ' + pair + ' from each other' + (badB && bl === gl ? ' (same sign lord, which many astrologers treat as cancelling the dosha)' : '') });
    var bnd = NADI_OF[bn], gnd = NADI_OF[gn];
    res.push({ key: 'Nadi', max: 8, score: bnd === gnd ? 0 : 8, detail: NADI_NAME[bnd] + ' and ' + NADI_NAME[gnd] + (bnd === gnd && bn !== gn && bs === gs ? ' (same Moon sign but different nakshatras, a commonly cited cancellation)' : '') });
    var total = 0; for (var i = 0; i < res.length; i++) { total += res[i].score; }
    return { parts: res, total: total };
  }
  function mangal(pos) {
    var refs = [], M = pos.Mars.sign, check = function (label, s) { var h = ((M - s + 12) % 12) + 1; refs.push({ from: label, house: h, dosha: [1, 2, 4, 7, 8, 12].indexOf(h) > -1 }); };
    if (pos.Asc) { check('Lagna', pos.Asc.sign); }
    check('Moon', pos.Moon.sign); check('Venus', pos.Venus.sign);
    return { refs: refs, ownOrExalted: M === 0 || M === 7 || M === 9 };
  }
  /* ---------- Vargas ---------- */
  var VARGAS = [
    ['D1', 'Rashi', 'The birth chart itself: body, life direction and the whole picture.'],
    ['D2', 'Hora', 'Wealth and resources, divided between the Sun (Leo) and Moon (Cancer) halves.'],
    ['D3', 'Drekkana', 'Siblings, courage and initiative.'],
    ['D4', 'Chaturthamsa', 'Property, home, fixed assets and fortune.'],
    ['D7', 'Saptamsa', 'Children, creativity and legacy.'],
    ['D9', 'Navamsa', 'Marriage, partnership and the inner strength of each planet. Read alongside the D1.'],
    ['D10', 'Dasamsa', 'Career, status and public work.'],
    ['D12', 'Dwadasamsa', 'Parents and ancestry.'],
    ['D16', 'Shodasamsa', 'Vehicles, comforts and happiness.'],
    ['D20', 'Vimsamsa', 'Spiritual practice and devotion.'],
    ['D24', 'Chaturvimsamsa', 'Learning, education and knowledge.'],
    ['D27', 'Bhamsa', 'Strength, stamina and general vitality.'],
    ['D30', 'Trimsamsa', 'Challenges, misfortunes and how difficulty is met.'],
    ['D40', 'Khavedamsa', 'Auspicious and inauspicious effects through the maternal line.'],
    ['D45', 'Akshavedamsa', 'Character and conduct through the paternal line.'],
    ['D60', 'Shashtiamsa', 'Past karma; the finest division, so it needs an accurate birth time.']
  ];
  function varga(n, l) {
    var s = Math.floor(l / 30), d = l % 30, odd = s % 2 === 0, mod = s % 3; /* mod 0 movable, 1 fixed, 2 dual */
    var p = function (k) { return Math.floor(d / (30 / k)); };
    switch (n) {
      case 1: return s;
      case 2: return odd ? (d < 15 ? 4 : 3) : (d < 15 ? 3 : 4);
      case 3: return (s + 4 * p(3)) % 12;
      case 4: return (s + 3 * p(4)) % 12;
      case 7: return (s + (odd ? 0 : 6) + p(7)) % 12;
      case 9: return Math.floor(l / (30 / 9)) % 12;
      case 10: return (s + (odd ? 0 : 8) + p(10)) % 12;
      case 12: return (s + p(12)) % 12;
      case 16: return ([0, 4, 8][mod] + p(16)) % 12;
      case 20: return ([0, 8, 4][mod] + p(20)) % 12;
      case 24: return ((odd ? 4 : 3) + p(24)) % 12;
      case 27: return (s * 27 + p(27)) % 12;
      case 30:
        if (odd) { return d < 5 ? 0 : (d < 10 ? 10 : (d < 18 ? 8 : (d < 25 ? 2 : 6))); }
        return d < 5 ? 1 : (d < 12 ? 5 : (d < 20 ? 11 : (d < 25 ? 9 : 7)));
      case 40: return ((odd ? 0 : 6) + p(40)) % 12;
      case 45: return ([0, 4, 8][mod] + p(45)) % 12;
      case 60: return (s + p(60)) % 12;
    }
    return s;
  }
  var KARAKA = ['Atmakaraka', 'Amatyakaraka', 'Bhratrikaraka', 'Matrikaraka', 'Putrakaraka', 'Gnatikaraka', 'Darakaraka'];
  var KARAKA_MEAN = ['the soul and the central lesson of this life', 'career, counsel and the mind that serves the soul', 'siblings, courage and close allies', 'the mother, home and emotional grounding', 'children, students and creative intelligence', 'rivals, obstacles and health matters', 'the spouse and committed partners'];
  function charaKarakas(pos) {
    var g = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'].map(function (k) { return { k: k, d: pos[k].deg }; });
    g.sort(function (a, b) { return b.d - a.d; });
    return g.map(function (x, i) { return { planet: x.k, karaka: KARAKA[i], meaning: KARAKA_MEAN[i], deg: x.d }; });
  }
  return {
    norm: norm, lahiri: lahiri, sid: sid, trop: trop, asc: asc, positions: positions, KEYS: KEYS,
    SIGNS: SIGNS, RASHI: RASHI, SIGN_LORD: SIGN_LORD, NAK: NAK, nakOf: nakOf,
    panchanga: panchanga, signTimeline: signTimeline, sadeSati: sadeSati,
    koota: koota, mangal: mangal, VARGAS: VARGAS, varga: varga, charaKarakas: charaKarakas,
    YONI_T: YONI_T
  };
}
if (typeof module !== 'undefined') { module.exports = VAXCORE; }
