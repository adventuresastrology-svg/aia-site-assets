/* AIA Vedic center tools | vax 1.0 | Adds Sade Sati and Transits, Divisional Charts, Compatibility and Today's Panchanga to Adventures in Vedic Astrology (/vedic-classroom-hub). Requires Astronomy Engine (window.Astronomy). */
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
window.VAXCORE = VAXCORE;

/* vax UI: adds Sade Sati and Transits, Divisional Charts, Compatibility and Today's Panchanga tabs to #vacCenter. ES5. */
(function () {
  if (window.__vaxLoaded) { return; }
  window.__vaxLoaded = true;
  var GEO = 'https://geocoding-api.open-meteo.com/v1/search?count=6&language=en&format=json&name=';
  var C = null, ROOT = null;
  var PLACE_KEY = 'aia-vax-place';
  var CSS = [
    '#vacCenter .vx-form{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px 14px;margin:0 0 12px}',
    '#vacCenter .vx-form label{display:block;font-family:"EB Garamond",Georgia,serif !important;font-size:15px;color:#3B3229 !important;margin:0 0 3px}',
    '#vacCenter .vx-form input,#vacCenter .vx-form select{width:100%;box-sizing:border-box;font-family:"EB Garamond",Georgia,serif !important;font-size:16px;color:#1C1814 !important;background:#FFFDF8 !important;border:1px solid #B9A88F;border-radius:6px;padding:7px 8px}',
    '#vacCenter .vx-check{display:flex;align-items:center;gap:6px;font-size:15px;color:#3B3229 !important}',
    '#vacCenter .vx-check input{width:auto}',
    '#vacCenter .vx-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:4px 0 10px}',
    '#vacCenter .vx-ghost{font-family:Cinzel,Georgia,serif !important;font-size:13px;background:#FBF6EA !important;color:#6E1F1F !important;border:1px solid rgba(110,31,31,.55);border-radius:6px;padding:9px 14px;cursor:pointer}',
    '#vacCenter .vx-ghost:hover{background:#F3E7D3 !important}',
    '#vacCenter .vx-msg{font-size:15px;color:#6E1F1F !important;margin:4px 0 0;min-height:1em}',
    '#vacCenter .vx-note{font-size:15px;color:#3B3229 !important;margin:8px 0 0}',
    '#vacCenter .vx-who{font-size:15.5px;color:#3B3229 !important;background:#F3E7D3;border-radius:6px;padding:8px 12px;margin:0 0 12px}',
    '#vacCenter .vx-table{width:100%;border-collapse:collapse;font-size:16px;margin:6px 0 4px}',
    '#vacCenter .vx-table th,#vacCenter .vx-table td{text-align:left;padding:7px 8px;border-bottom:1px solid #E4D8C2;color:#1C1814 !important;vertical-align:top}',
    '#vacCenter .vx-table th{font-family:Cinzel,Georgia,serif !important;font-size:12.5px;letter-spacing:.06em;color:#6E1F1F !important;font-weight:600}',
    '#vacCenter .vx-table tr.vx-now td{background:#F3E7D3}',
    '#vacCenter .vx-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:8px 0}',
    '#vacCenter .vx-stat{background:#FFFDF8;border:1px solid #E4D8C2;border-radius:8px;padding:12px 14px}',
    '#vacCenter .vx-stat b{display:block;font-family:Cinzel,Georgia,serif !important;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:#6E1F1F !important;margin:0 0 4px;font-weight:600}',
    '#vacCenter .vx-stat span{display:block;font-size:18px;color:#1C1814 !important;line-height:1.3}',
    '#vacCenter .vx-stat small{display:block;font-size:14.5px;color:#3B3229 !important;margin-top:3px}',
    '#vacCenter .vx-chips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 12px}',
    '#vacCenter .vx-chip{font-family:Cinzel,Georgia,serif !important;font-size:12.5px;background:#FBF6EA !important;color:#6E1F1F !important;border:1px solid rgba(110,31,31,.55);border-radius:6px;padding:6px 10px;cursor:pointer}',
    '#vacCenter .vx-chip[aria-pressed=true]{background:#6E1F1F !important;color:#FBF6EA !important}',
    '#vacCenter .vx-two{display:grid;grid-template-columns:minmax(260px,420px) 1fr;gap:18px;align-items:start}',
    '#vacCenter .vx-big{font-family:Cinzel,Georgia,serif !important;font-size:40px;color:#6E1F1F !important;margin:0;line-height:1}',
    '#vacCenter .vx-bar{height:8px;background:#E4D8C2;border-radius:99px;overflow:hidden;margin:8px 0}',
    '#vacCenter .vx-bar span{display:block;height:100%;background:#6E1F1F}',
    '#vacCenter .vx-res{margin-top:14px}',
    '#vacCenter .vx-res h4{font-family:Cinzel,Georgia,serif !important;font-size:16px;color:#1C1814 !important;margin:16px 0 6px}',
    '#vacCenter .vx-res ul{margin:4px 0 8px 18px;padding:0}#vacCenter .vx-res li{margin:0 0 5px;font-size:16px;color:#1C1814 !important}',
    '#vacCenter .vx-pick{margin-top:6px}',
    '@media (max-width:760px){#vacCenter .vx-two{grid-template-columns:1fr}#vacCenter .vx-table{font-size:15px}}'
  ].join('\n');

  /* ---------- small helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dms(d) { var a = Math.floor(d), m = Math.floor((d - a) * 60); return a + '\u00B0' + pad(m) + '\''; }
  function signTxt(i) { return C.SIGNS[i] + ' (' + C.RASHI[i] + ')'; }
  function store(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function load(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function tzOffsetMin(tz, t) {
    if (!tz || !window.Intl) { return null; }
    try {
      var f = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      var p = f.formatToParts(new Date(t)), o = {};
      for (var i = 0; i < p.length; i++) { o[p[i].type] = parseInt(p[i].value, 10); }
      var asUTC = Date.UTC(o.year, o.month - 1, o.day, o.hour === 24 ? 0 : o.hour, o.minute, o.second);
      return Math.round((asUTC - t) / 60000);
    } catch (e) { return null; }
  }
  function toUTC(dateStr, timeStr, tz, manualMin) {
    var d = dateStr.split('-'), t = (timeStr || '12:00').split(':');
    var guess = Date.UTC(+d[0], +d[1] - 1, +d[2], +t[0], +t[1]);
    var off = manualMin !== null && manualMin !== undefined && manualMin !== '' ? +manualMin : tzOffsetMin(tz, guess);
    if (off === null || isNaN(off)) { off = 0; }
    var u = guess - off * 60000;
    if (manualMin === null || manualMin === undefined || manualMin === '') { var off2 = tzOffsetMin(tz, u); if (off2 !== null && off2 !== off) { u = guess - off2 * 60000; } }
    return new Date(u);
  }
  function fmt(d, tz, withDate) {
    if (!d) { return 'not within the next day'; }
    var o = { hour: 'numeric', minute: '2-digit' };
    if (withDate) { o.weekday = 'short'; o.month = 'short'; o.day = 'numeric'; }
    if (tz) { o.timeZone = tz; }
    try { return d.toLocaleString('en-US', o); } catch (e) { return d.toUTCString(); }
  }
  function fmtDate(d) { if (!d) { return 'ongoing'; } return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }); }
  function geocode(q, cb) {
    var x = new XMLHttpRequest();
    x.open('GET', GEO + encodeURIComponent(q));
    x.onload = function () { try { var r = JSON.parse(x.responseText); cb(r.results || []); } catch (e) { cb([]); } };
    x.onerror = function () { cb([]); };
    x.send();
  }
  function placeLabel(r) { return [r.name, r.admin1, r.country].filter(function (s) { return !!s; }).join(', '); }
  function cityPicker(prefix, onPick) {
    var input = $(prefix + '-city'), sel = $(prefix + '-pick'), msg = $(prefix + '-msg'), timer = null, results = [];
    function run() {
      var q = input.value.replace(/^\s+|\s+$/g, '');
      if (q.length < 2) { return; }
      msg.textContent = 'Searching...';
      geocode(q, function (res) {
        results = res; sel.innerHTML = '';
        if (!res.length) { msg.textContent = 'No match yet. Try adding the state or country.'; sel.hidden = true; return; }
        msg.textContent = '';
        for (var i = 0; i < res.length; i++) { var o = document.createElement('option'); o.value = i; o.textContent = placeLabel(res[i]); sel.appendChild(o); }
        sel.hidden = false; pick(0);
      });
    }
    function pick(i) { var r = results[i]; if (!r) { return; } onPick({ place: placeLabel(r), lat: r.latitude, lon: r.longitude, tz: r.timezone }); }
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 450); });
    sel.addEventListener('change', function () { pick(+sel.value); });
    return { search: run };
  }
  function birthFormHTML(p, title) {
    return '<div class="vx-form">' +
      '<div><label for="' + p + '-name">Name (optional)</label><input id="' + p + '-name" type="text" maxlength="60"></div>' +
      '<div><label for="' + p + '-date">Birth date</label><input id="' + p + '-date" type="date"></div>' +
      '<div><label for="' + p + '-time">Birth time</label><input id="' + p + '-time" type="time"><span class="vx-check"><input id="' + p + '-notime" type="checkbox"> <label for="' + p + '-notime" style="margin:0">I don\'t know the birth time</label></span></div>' +
      '<div><label for="' + p + '-city">Birth city (type, then pick)</label><input id="' + p + '-city" type="text" autocomplete="off"><select id="' + p + '-pick" class="vx-pick" hidden aria-label="Choose the matching city"></select></div>' +
      '</div><p class="vx-msg" id="' + p + '-msg" aria-live="polite"></p>';
  }
  function readPerson(p, place) {
    var date = $(p + '-date').value, noTime = $(p + '-notime').checked, time = noTime ? '' : $(p + '-time').value;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) { return { err: 'Please enter a birth date.' }; }
    if (!place) { return { err: 'Please type the birth city and pick it from the list.' }; }
    var hasTime = !!time;
    var t = toUTC(date, hasTime ? time : '12:00', place.tz, place.manual);
    return { name: $(p + '-name').value.replace(/^\s+|\s+$/g, '') || '', date: date, time: time, hasTime: hasTime, place: place, utc: t, pos: C.positions(t, place.lat, place.lon, hasTime) };
  }

  /* ---------- shared birth details (Sade Sati, Divisional Charts, Compatibility person A) ---------- */
  var A_PLACE = null, A_PICKER = null;
  function sharedForm() {
    return '<div class="vac-card" id="vx-birth"><h3>Your birth details</h3>' +
      '<p>Enter these once; the Sade Sati, Divisional Charts and Compatibility tabs all use them.</p>' +
      birthFormHTML('vxa') +
      '<div class="vx-row"><button type="button" class="vac-btn" id="vxa-go">Calculate</button>' +
      '<button type="button" class="vx-ghost" id="vxa-pass" hidden>Use my Passport</button>' +
      '<button type="button" class="vx-ghost" id="vxa-copy">Use the details from Your Chart</button></div></div>';
  }
  function setA(place) { A_PLACE = place; }
  function fillFrom(p, d) {
    if (d.name !== undefined) { $(p + '-name').value = d.name || ''; }
    if (d.date) { $(p + '-date').value = d.date; }
    $(p + '-notime').checked = !!d.noTime;
    $(p + '-time').value = d.noTime ? '' : (d.time || '');
    if (d.city) { $(p + '-city').value = d.city; }
  }
  function usePassport() {
    var P = window.AIAPassport && window.AIAPassport.get ? window.AIAPassport.get() : null;
    if (!P) { $('vxa-msg').textContent = 'No saved Passport yet. Tap My Sky in the corner to save your birth details once.'; return; }
    fillFrom('vxa', { name: P.name, date: P.date, time: P.time, noTime: P.noTime, city: P.place });
    if (P.lat !== '' && P.lon !== '' && P.tz) { setA({ place: P.place, lat: +P.lat, lon: +P.lon, tz: P.tz }); $('vxa-msg').textContent = 'Passport details loaded for ' + (P.place || 'your saved place') + '.'; runAll(); }
    else if (P.place) { A_PICKER.search(); }
  }
  function copyChart() {
    var v = function (id) { var e = $(id); return e ? e.value : ''; };
    if (!v('vacDate')) { $('vxa-msg').textContent = 'The Your Chart tab has no birth details yet.'; return; }
    var nt = $('vacNoTime') && $('vacNoTime').checked;
    fillFrom('vxa', { name: v('vacName'), date: v('vacDate'), time: v('vacTime'), noTime: nt, city: v('vacCity') });
    var lat = parseFloat(v('vacLat')), lon = parseFloat(v('vacLon')), tzSel = v('vacTz');
    if (!isNaN(lat) && !isNaN(lon) && tzSel && tzSel !== 'auto') { setA({ place: v('vacCity'), lat: lat, lon: lon, tz: '', manual: tzSel }); $('vxa-msg').textContent = 'Copied from Your Chart.'; runAll(); return; }
    if (v('vacCity')) { $('vxa-msg').textContent = 'Copied. Pick the city from the list to confirm it.'; A_PICKER.search(); }
  }
  var LAST_A = null;
  function getA(quiet) {
    var r = readPerson('vxa', A_PLACE);
    if (r.err) { if (!quiet) { $('vxa-msg').textContent = r.err; } return null; }
    $('vxa-msg').textContent = '';
    LAST_A = r;
    store('aia-vax-a', { name: r.name, date: r.date, time: r.time, noTime: !r.hasTime, city: $('vxa-city').value, place: A_PLACE });
    return r;
  }
  function whoLine(r) {
    var mo = r.pos.Moon, nk = C.nakOf(mo.lon);
    return '<p class="vx-who">' + (r.name ? '<b>' + esc(r.name) + '</b> | ' : '') + esc(r.date) + (r.hasTime ? ' ' + esc(r.time) : ' (no birth time)') + ' | ' + esc(r.place.place || '') +
      '<br>Moon (Chandra) in ' + signTxt(mo.sign) + ' ' + dms(mo.deg) + ', ' + nk.name + ' pada ' + nk.pada + (r.pos.Asc ? ' | Lagna ' + signTxt(r.pos.Asc.sign) + ' ' + dms(r.pos.Asc.deg) : '') + '</p>';
  }
  function runAll() {
    var r = getA(false); if (!r) { return; }
    renderSade(r); renderVarga(r); renderMatchIfReady();
    var cur = ROOT.querySelector('.vac-tab.vac-on');
    var name = cur ? cur.getAttribute('data-tab') : '';
    var out = { vxsade: 'vx-sade-out', vxvarga: 'vx-varga-out', vxmatch: 'vx-match-out' }[name];
    if (out && $(out) && $(out).scrollIntoView) { try { $(out).scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }
  }

  /* ---------- Sade Sati and Transits ---------- */
  var GOOD = { Jupiter: [2, 5, 7, 9, 11], Saturn: [3, 6, 11], Rahu: [3, 6, 11], Ketu: [3, 6, 11] };
  function nth(n) { var s = ['th', 'st', 'nd', 'rd']; var v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  function renderSade(r) {
    var now = new Date(), moon = r.pos.Moon.sign, lag = r.pos.Asc ? r.pos.Asc.sign : null;
    var rows = '', keys = ['Saturn', 'Jupiter', 'Rahu', 'Ketu'], i;
    for (i = 0; i < keys.length; i++) {
      var k = keys[i], l = C.sid(k, now), s = Math.floor(l / 30), fromMoon = ((s - moon + 12) % 12) + 1;
      var tl = C.signTimeline(k, now, new Date(now.getTime() + 4 * 365.25 * 86400000), 3);
      var nextCh = tl.length > 1 ? tl[0].end : null, nextSign = tl.length > 1 ? tl[1].sign : null;
      var good = GOOD[k].indexOf(fromMoon) > -1;
      rows += '<tr><td><b>' + k + '</b></td><td>' + signTxt(s) + ' ' + dms(l % 30) + '</td><td>' + nth(fromMoon) + (good ? ' (classically supportive)' : '') + '</td>' +
        (lag !== null ? '<td>' + nth(((s - lag + 12) % 12) + 1) + '</td>' : '') +
        '<td>' + (nextCh ? 'Enters ' + C.SIGNS[nextSign] + ' ' + fmtDate(nextCh) : 'Not within 4 years') + '</td></tr>';
    }
    var birth = r.utc, end = new Date(birth.getTime() + 100 * 365.25 * 86400000);
    var eps = C.sadeSati(moon, birth, end), list = '', status = 'You are not in Sade Sati now.', curPhase = null;
    var phaseName = { rising: 'Rising phase (Saturn in the 12th from the Moon)', peak: 'Peak phase (Saturn over the natal Moon sign)', setting: 'Setting phase (Saturn in the 2nd from the Moon)' };
    for (i = 0; i < eps.length; i++) {
      var e = eps[i], firsts = {}, j;
      for (j = 0; j < e.parts.length; j++) { if (!firsts[e.parts[j].phase]) { firsts[e.parts[j].phase] = e.parts[j].start; } }
      var isNow = e.start <= now && (!e.end || e.end > now);
      if (isNow) { for (j = 0; j < e.parts.length; j++) { var pp = e.parts[j]; if (pp.start <= now && (!pp.end || pp.end > now)) { curPhase = pp.phase; } } }
      list += '<tr' + (isNow ? ' class="vx-now"' : '') + '><td>' + nth(i + 1) + (isNow ? ' (now)' : '') + '</td><td>' + fmtDate(e.start) + ' to ' + fmtDate(e.end) + '</td><td>' +
        (firsts.rising ? 'Rising ' + fmtDate(firsts.rising) : '') + (firsts.peak ? '<br>Peak ' + fmtDate(firsts.peak) : '') + (firsts.setting ? '<br>Setting ' + fmtDate(firsts.setting) : '') + '</td></tr>';
    }
    var satNow = Math.floor(C.sid('Saturn', now) / 30), h = ((satNow - moon + 12) % 12) + 1;
    if (curPhase) { status = 'You are in Sade Sati now: ' + phaseName[curPhase] + '.'; }
    else if (h === 8) { status = 'Saturn is in the 8th from your Moon now (Ashtama Shani), a transit often read like a short, intense Sade Sati.'; }
    else if (h === 4) { status = 'Saturn is in the 4th from your Moon now (Kantaka or Ardhashtama Shani), a transit associated with pressure around home and inner peace.'; }
    $('vx-sade-out').innerHTML = whoLine(r) +
      '<div class="vac-card"><h3>Sade Sati now</h3><p class="vx-big" style="font-size:22px">' + status + '</p>' +
      '<p class="vx-note">Sade Sati is the roughly seven and a half years Saturn takes to move through the sign before your natal Moon sign, the Moon sign itself, and the sign after it. Jyotish reads it as a period of pressure, responsibility and maturing, and it varies a great deal with Saturn\'s strength and role in your own chart.</p></div>' +
      '<div class="vac-card"><h3>Your Sade Sati periods</h3><table class="vx-table"><thead><tr><th>Cycle</th><th>Dates</th><th>Phases begin</th></tr></thead><tbody>' + (list || '<tr><td colspan="3">None found in the 100 years from birth.</td></tr>') + '</tbody></table>' +
      '<p class="vx-note">Saturn sometimes turns retrograde back into the previous sign, so a phase can begin, pause and begin again; the dates above show when each phase first begins. Sidereal positions, Lahiri ayanamsa.</p></div>' +
      '<div class="vac-card"><h3>Slow planets now (Gochara)</h3><table class="vx-table"><thead><tr><th>Graha</th><th>Now in</th><th>From your Moon</th>' + (lag !== null ? '<th>From Lagna</th>' : '') + '<th>Next sign change</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p class="vx-note">Gochara (transits) are counted from the natal Moon sign. Classically, Jupiter is supportive in the 2nd, 5th, 7th, 9th and 11th from the Moon, and Saturn, Rahu and Ketu in the 3rd, 6th and 11th. Read transits together with your dasha period: the dasha shows which themes are active, and transits show when they are triggered.</p>' +
      '<div class="vx-row"><button type="button" class="vx-ghost" data-go="dasha">See your dasha timeline</button></div></div>';
  }

  /* ---------- Divisional charts ---------- */
  var VSEL = 9, ABBR = { Sun: 'Su', Moon: 'Mo', Mars: 'Ma', Mercury: 'Me', Jupiter: 'Ju', Venus: 'Ve', Saturn: 'Sa', Rahu: 'Ra', Ketu: 'Ke', Asc: 'La' };
  var SOUTH = [[11, 0, 1, 2], [10, -1, -1, 3], [9, -1, -1, 4], [8, 7, 6, 5]];
  function chartSVG(signsOf, title) {
    var cell = 86, w = cell * 4, s = '<svg viewBox="0 0 ' + w + ' ' + w + '" width="100%" style="max-width:420px;display:block" role="img" aria-label="' + esc(title) + ' chart, South Indian style">';
    s += '<rect x="0" y="0" width="' + w + '" height="' + w + '" fill="#FFFDF8" stroke="#6E1F1F" stroke-width="2"/>';
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        var si = SOUTH[r][c]; if (si < 0) { continue; }
        s += '<rect x="' + c * cell + '" y="' + r * cell + '" width="' + cell + '" height="' + cell + '" fill="none" stroke="#B9A88F"/>';
        s += '<text x="' + (c * cell + 5) + '" y="' + (r * cell + 14) + '" font-size="10" fill="#7A6A55" font-family="Georgia,serif">' + C.SIGNS[si].slice(0, 3) + '</text>';
        var items = signsOf[si] || [];
        for (var k = 0; k < items.length; k++) {
          var lx = c * cell + 8 + (k % 3) * 26, ly = r * cell + 34 + Math.floor(k / 3) * 18;
          s += '<text x="' + lx + '" y="' + ly + '" font-size="14" font-weight="' + (items[k] === 'La' ? '700' : '600') + '" fill="' + (items[k] === 'La' ? '#6E1F1F' : '#1C1814') + '" font-family="Georgia,serif">' + items[k] + '</text>';
        }
      }
    }
    s += '<text x="' + w / 2 + '" y="' + (w / 2 - 4) + '" text-anchor="middle" font-size="16" fill="#6E1F1F" font-family="Cinzel,Georgia,serif">' + esc(title.split(' ')[0]) + '</text>';
    s += '<text x="' + w / 2 + '" y="' + (w / 2 + 16) + '" text-anchor="middle" font-size="12" fill="#3B3229" font-family="Georgia,serif">' + esc(title.split(' ').slice(1).join(' ')) + '</text>';
    return s + '</svg>';
  }
  function renderVarga(r) {
    var chips = '', i;
    for (i = 0; i < C.VARGAS.length; i++) { var n = +C.VARGAS[i][0].slice(1); chips += '<button type="button" class="vx-chip" data-varga="' + n + '" aria-pressed="' + (n === VSEL ? 'true' : 'false') + '">' + C.VARGAS[i][0] + ' ' + C.VARGAS[i][1] + '</button>'; }
    var info = null; for (i = 0; i < C.VARGAS.length; i++) { if (+C.VARGAS[i][0].slice(1) === VSEL) { info = C.VARGAS[i]; } }
    var keys = ['Asc'].concat(C.KEYS), signsOf = {}, rows = '';
    for (i = 0; i < keys.length; i++) {
      var k = keys[i], p = r.pos[k]; if (!p) { continue; }
      var vs = C.varga(VSEL, p.lon);
      (signsOf[vs] = signsOf[vs] || []).push(ABBR[k]);
      rows += '<tr><td><b>' + (k === 'Asc' ? 'Lagna' : k) + '</b></td><td>' + signTxt(p.sign) + ' ' + dms(p.deg) + (p.retro && k !== 'Rahu' && k !== 'Ketu' ? ' R' : '') + '</td><td>' + signTxt(vs) + '</td></tr>';
    }
    var warn = '';
    if (!r.hasTime) { warn = '<p class="vx-msg">No birth time: the Lagna is left out, and the Moon may sit in a different division than shown. Treat divisional charts as a sketch.</p>'; }
    else if (VSEL >= 10) { warn = '<p class="vx-note">Finer divisions change sign every few minutes of birth time, so ' + info[0] + ' is only as reliable as the recorded time.</p>'; }
    var ck = C.charaKarakas(r.pos), ckRows = '';
    for (i = 0; i < ck.length; i++) { ckRows += '<tr><td><b>' + ck[i].karaka + '</b></td><td>' + ck[i].planet + ' (' + dms(ck[i].deg) + ' in its sign)</td><td>' + ck[i].meaning + '</td></tr>'; }
    var ak = ck[0].planet, kms = C.varga(9, r.pos[ak].lon);
    $('vx-varga-out').innerHTML = whoLine(r) +
      '<div class="vac-card"><h3>Divisional charts (Vargas)</h3><p>Each varga divides every sign into smaller parts to study one area of life in detail. Pick a chart:</p><div class="vx-chips" id="vx-vchips">' + chips + '</div>' +
      '<div class="vx-two"><div>' + chartSVG(signsOf, info[0] + ' ' + info[1]) + '</div><div><p><b>' + info[0] + ' ' + info[1] + ':</b> ' + info[2] + '</p>' + warn +
      '<table class="vx-table"><thead><tr><th>Graha</th><th>Birth chart (D1)</th><th>In the ' + info[0] + '</th></tr></thead><tbody>' + rows + '</tbody></table></div></div>' +
      '<p class="vx-note">South Indian layout: the signs stay fixed, Pisces in the top left and moving clockwise. La marks the Lagna. Parashari varga rules, Lahiri ayanamsa.</p></div>' +
      '<div class="vac-card"><h3>Chara karakas (Jaimini)</h3><table class="vx-table"><thead><tr><th>Karaka</th><th>Graha</th><th>Signifies</th></tr></thead><tbody>' + ckRows + '</tbody></table>' +
      '<p class="vx-note">The seven-karaka scheme ranks the seven visible grahas by how far they have travelled through their signs. The highest is the Atmakaraka, the soul indicator. Your Atmakaraka, ' + ak + ', sits in ' + signTxt(kms) + ' in the navamsa; that sign is your Karakamsa, read in Jaimini astrology for the soul\'s deeper purpose. Some astrologers use an eight-karaka scheme that includes Rahu.</p></div>';
    var cs = $('vx-vchips').querySelectorAll('.vx-chip');
    for (i = 0; i < cs.length; i++) { cs[i].onclick = function (ev) { VSEL = +ev.currentTarget.getAttribute('data-varga'); if (LAST_A) { renderVarga(LAST_A); } }; }
  }

  /* ---------- Compatibility ---------- */
  var B_PLACE = null, SWAP = false;
  var KMEAN = {
    'Varna': 'spiritual and working temperament',
    'Vashya': 'natural influence and mutual attraction',
    'Tara': 'birth star harmony, read as wellbeing and fortune together',
    'Yoni': 'instinctive and physical compatibility',
    'Graha Maitri': 'friendship between the Moon sign lords, read as mental rapport',
    'Gana': 'temperament: Deva (gentle), Manushya (human), Rakshasa (intense)',
    'Bhakoot': 'how the Moon signs sit from each other, read for prosperity and family life',
    'Nadi': 'constitution and health, the most heavily weighted koota'
  };
  function renderMatchIfReady() { if (LAST_A && B_PLACE && $('vxb-date').value) { renderMatch(); } }
  function renderMatch() {
    var a = getA(false); if (!a) { $('vx-match-out').innerHTML = '<p class="vx-msg">Enter your own birth details at the top of this tab first.</p>'; return; }
    var b = readPerson('vxb', B_PLACE);
    if (b.err) { $('vxb-msg').textContent = b.err; return; }
    $('vxb-msg').textContent = '';
    store('aia-vax-b', { name: b.name, date: b.date, time: b.time, noTime: !b.hasTime, city: $('vxb-city').value, place: B_PLACE });
    var boy = SWAP ? b : a, girl = SWAP ? a : b;
    var k = C.koota(boy.pos.Moon.lon, girl.pos.Moon.lon), rows = '', i;
    for (i = 0; i < k.parts.length; i++) {
      var p = k.parts[i];
      rows += '<tr><td><b>' + p.key + '</b><br><small>' + KMEAN[p.key] + '</small></td><td>' + p.score + ' of ' + p.max + '</td><td>' + esc(p.detail) + '</td></tr>';
    }
    var t = k.total, band = t < 18 ? 'Below 18: traditionally not recommended without a deeper look at both charts.' : (t < 25 ? '18 to 24: traditionally acceptable.' : (t < 33 ? '25 to 32: traditionally a very good match.' : '33 and above: traditionally an excellent match.'));
    var dos = [];
    if (k.parts[7].score === 0) { dos.push('Nadi dosha: both Moons share the same nadi. It is the most discussed dosha in matching; several cancellations exist, so an astrologer reads it with the full charts.'); }
    if (k.parts[6].score === 0) { dos.push('Bhakoot dosha: the Moon signs are 2/12, 5/9 or 6/8 from each other. It is often considered cancelled when the two Moon signs share a lord or the lords are friends.'); }
    function mtxt(r, who) {
      var m = C.mangal(r.pos), parts = [], has = false;
      for (var j = 0; j < m.refs.length; j++) { parts.push(nth(m.refs[j].house) + ' from ' + m.refs[j].from + (m.refs[j].dosha ? ' (dosha)' : '')); if (m.refs[j].dosha) { has = true; } }
      return '<li><b>' + esc(who) + ':</b> Mars is ' + parts.join(', ') + '. ' + (has ? 'Mangal dosha is present by at least one reference' + (m.ownOrExalted ? ', though Mars is in its own or exalted sign, a common cancellation' : '') + '.' : 'No Mangal dosha by these references.') + (r.hasTime ? '' : ' (No birth time, so the Lagna reference is left out.)') + '</li>';
    }
    var an = a.name || 'You', bnm = b.name || 'Partner';
    $('vx-match-out').innerHTML =
      '<div class="vac-card"><h3>Ashtakoota score</h3><p class="vx-big">' + t + ' <span style="font-size:20px">of 36</span></p><div class="vx-bar"><span style="width:' + Math.round(t / 36 * 100) + '%"></span></div><p>' + band + '</p>' +
      (dos.length ? '<ul>' + dos.map(function (d) { return '<li>' + d + '</li>'; }).join('') + '</ul>' : '') +
      '<table class="vx-table"><thead><tr><th>Koota</th><th>Score</th><th>Your two charts</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p class="vx-note">Traditional direction: ' + esc(boy === a ? an : bnm) + ' is read in the role the texts give the groom and ' + esc(girl === a ? an : bnm) + ' in the role of the bride. This only changes Varna and Vashya. <button type="button" class="vx-ghost" id="vx-swap">Swap the roles</button></p></div>' +
      '<div class="vac-card"><h3>Mangal dosha (Kuja dosha)</h3><ul>' + mtxt(a, an) + mtxt(b, bnm) + '</ul><p class="vx-note">Mangal dosha is counted when Mars falls in the 1st, 2nd, 4th, 7th, 8th or 12th house from the Lagna, Moon or Venus. Tradition treats it as balanced when both partners have it, and many cancellations are recognized.</p></div>' +
      '<p class="vx-note">Ashtakoota compares the two Moons only. It is one classical screening method, not a verdict on a relationship; a full Vedic reading compares the whole charts, the navamsa and the dashas. For Western synastry and composite charts, visit <a href="/love">Adventures in Love</a>.</p>';
    $('vx-swap').onclick = function () { SWAP = !SWAP; renderMatch(); };
  }

  /* ---------- Panchanga ---------- */
  var P_PLACE = null;
  function todayIn(tz) {
    var d = new Date();
    try { var f = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }); return f.format(d); } catch (e) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  }
  function renderPanch() {
    if (!P_PLACE) { $('vxp-msg').textContent = 'Type a city and pick it from the list.'; return; }
    var ds = $('vxp-date').value || todayIn(P_PLACE.tz);
    $('vxp-date').value = ds;
    store(PLACE_KEY, { place: P_PLACE, city: $('vxp-city').value });
    var mid = toUTC(ds, '00:00', P_PLACE.tz), p = ds.split('-'), wd = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])).getUTCDay();
    var r = C.panchanga(mid, P_PLACE.lat, P_PLACE.lon, wd), tz = P_PLACE.tz;
    if (!r) { $('vx-panch-out').innerHTML = '<p class="vx-msg">The Sun does not rise at this place on this date, so a sunrise-based Panchanga cannot be drawn.</p>'; return; }
    function stat(label, main, sub) { return '<div class="vx-stat"><b>' + label + '</b><span>' + main + '</span>' + (sub ? '<small>' + sub + '</small>' : '') + '</div>'; }
    var range = function (x) { return x ? fmt(x[0], tz) + ' to ' + fmt(x[1], tz) : 'not available'; };
    var vishti = r.karana.name.indexOf('Vishti') === 0 ? ' Vishti (Bhadra) is traditionally avoided for new beginnings.' : '';
    $('vx-panch-out').innerHTML =
      '<div class="vac-card"><h3>Panchanga for ' + esc(new Date(Date.UTC(+p[0], +p[1] - 1, +p[2], 12)).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })) + '</h3>' +
      '<p class="vx-note" style="margin-top:0">' + esc(P_PLACE.place) + ' | Times are local to that place. Each limb is taken at sunrise, as in a traditional almanac.</p>' +
      '<div class="vx-grid">' +
      stat('Vara (weekday)', r.vara.split(' (')[0], r.vara.split(' (')[1].replace(')', '')) +
      stat('Tithi (lunar day)', r.tithi.info.name, r.tithi.info.paksha + ' | ends ' + fmt(r.tithi.ends, tz, true)) +
      stat('Nakshatra', r.nakshatra.name, 'Ends ' + fmt(r.nakshatra.ends, tz, true)) +
      stat('Yoga', r.yoga.name, 'Ends ' + fmt(r.yoga.ends, tz, true)) +
      stat('Karana (half tithi)', r.karana.name, 'Ends ' + fmt(r.karana.ends, tz, true) + '.' + vishti) +
      stat('Sunrise and sunset', fmt(r.sunrise, tz) + ' | ' + fmt(r.sunset, tz), 'Next sunrise ' + fmt(r.nextSunrise, tz, true)) +
      stat('Moon and Sun (sidereal)', 'Moon in ' + C.SIGNS[r.moonSign], 'Sun in ' + C.SIGNS[r.sunSign] + ' | Moon nakshatra pada ' + r.moonNak.pada) +
      '</div></div>' +
      '<div class="vac-card"><h3>Times of the day</h3><div class="vx-grid">' +
      stat('Rahu Kalam', range(r.rahu), 'Traditionally avoided for starting new ventures.') +
      stat('Yamaganda', range(r.yama), 'Traditionally avoided for important beginnings.') +
      stat('Gulika Kalam', range(r.gulika), 'Whatever begins now is said to repeat, so it is avoided for losses and favored for nothing that should not recur.') +
      stat('Abhijit Muhurta', range(r.abhijit), 'The eighth of fifteen daytime muhurtas, around local noon, traditionally favored for beginnings (often set aside on Wednesdays).') +
      '</div><p class="vx-note">Rahu Kalam, Yamaganda and Gulika Kalam each take one eighth of the time from sunrise to sunset, in an order set by the weekday. Lahiri ayanamsa; the tithi and karana use the Sun and Moon\'s distance, which is the same in either zodiac.</p></div>';
  }

  /* ---------- build ---------- */
  function addTab(id, label, afterTab, html) {
    var bar = ROOT.querySelector('.vac-tabs');
    var b = document.createElement('button'); b.type = 'button'; b.className = 'vac-tab'; b.setAttribute('data-tab', id); b.textContent = label;
    var ref = bar.querySelector('[data-tab="' + afterTab + '"]');
    if (ref && ref.nextSibling) { bar.insertBefore(b, ref.nextSibling); } else { bar.appendChild(b); }
    var pRef = ROOT.querySelector('.vac-panel[data-panel="' + afterTab + '"]') || ROOT.querySelector('.vac-panel:last-of-type');
    var p = document.createElement('div'); p.className = 'vac-panel'; p.setAttribute('data-panel', id); p.innerHTML = html;
    pRef.parentNode.insertBefore(p, pRef.nextSibling);
    return p;
  }
  function moveBirthTo(id) {
    var slot = ROOT.querySelector('.vac-panel[data-panel="' + id + '"] .vx-slot'), f = $('vx-birth');
    if (slot && f && f.parentNode !== slot) { slot.appendChild(f); }
  }
  function build() {
    ROOT = $('vacCenter');
    if (!ROOT || !ROOT.querySelector('.vac-tabs') || ROOT.getAttribute('data-vax')) { return !!(ROOT && ROOT.getAttribute('data-vax')); }
    if (!window.Astronomy || !window.VAXCORE) { return false; }
    C = window.VAXCORE(window.Astronomy);
    ROOT.setAttribute('data-vax', '1');
    var st = document.createElement('style'); st.id = 'vax-style'; st.textContent = CSS; document.head.appendChild(st);
    addTab('vxsade', 'Sade Sati and Transits', 'dasha',
      '<h3>Sade Sati and Transits</h3><p>Where Saturn, Jupiter, Rahu and Ketu are now, counted from your natal Moon, and every Sade Sati of your life with its rising, peak and setting phases.</p><div class="vx-slot"></div><div id="vx-sade-out" class="vx-res"></div>');
    addTab('vxvarga', 'Divisional Charts', 'yogas',
      '<h3>Divisional Charts</h3><p>The sixteen Parashari vargas, from the D2 Hora to the D60 Shashtiamsa, plus your Jaimini chara karakas and Atmakaraka.</p><div class="vx-slot"></div><div id="vx-varga-out" class="vx-res"></div>');
    addTab('vxmatch', 'Compatibility', 'vxvarga',
      '<h3>Vedic Compatibility</h3><p>The classical Ashtakoota match, scored out of 36 from the two Moons, plus a Mangal dosha check for both charts.</p><div class="vx-slot"></div>' +
      '<div class="vac-card"><h3>Partner\'s birth details</h3>' + birthFormHTML('vxb') + '<div class="vx-row"><button type="button" class="vac-btn" id="vxb-go">Compare our charts</button></div></div><div id="vx-match-out" class="vx-res"></div>');
    addTab('vxpanch', 'Today\'s Panchanga', 'vxmatch',
      '<h3>Today\'s Panchanga</h3><p>The five limbs of the Vedic almanac for any day and place: vara, tithi, nakshatra, yoga and karana, with sunrise, sunset, Rahu Kalam and Abhijit Muhurta.</p>' +
      '<div class="vac-card"><div class="vx-form"><div><label for="vxp-city">City</label><input id="vxp-city" type="text" autocomplete="off"><select id="vxp-pick" class="vx-pick" hidden aria-label="Choose the matching city"></select></div>' +
      '<div><label for="vxp-date">Date</label><input id="vxp-date" type="date"></div></div><p class="vx-msg" id="vxp-msg" aria-live="polite"></p>' +
      '<div class="vx-row"><button type="button" class="vac-btn" id="vxp-go">Show the Panchanga</button><button type="button" class="vx-ghost" id="vxp-today">Today</button></div></div><div id="vx-panch-out" class="vx-res"></div>');
    var holder = document.createElement('div'); holder.innerHTML = sharedForm();
    ROOT.querySelector('.vac-panel[data-panel="vxsade"] .vx-slot').appendChild(holder.firstChild);
    A_PICKER = cityPicker('vxa', setA);
    cityPicker('vxb', function (p) { B_PLACE = p; });
    cityPicker('vxp', function (p) { P_PLACE = p; renderPanch(); });
    $('vxa-go').onclick = runAll;
    $('vxb-go').onclick = function () { if (!LAST_A && !getA(false)) { $('vxb-msg').textContent = 'Enter your own birth details above first.'; return; } renderMatch(); };
    $('vxp-go').onclick = renderPanch;
    $('vxp-today').onclick = function () { $('vxp-date').value = P_PLACE ? todayIn(P_PLACE.tz) : ''; renderPanch(); };
    $('vxa-copy').onclick = copyChart;
    if (window.AIAPassport && window.AIAPassport.get && window.AIAPassport.get()) { $('vxa-pass').hidden = false; }
    $('vxa-pass').onclick = usePassport;
    ROOT.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-tab],[data-go]') : null;
      if (!t) { return; }
      var id = t.getAttribute('data-tab') || t.getAttribute('data-go');
      if (id === 'vxsade' || id === 'vxvarga' || id === 'vxmatch') { moveBirthTo(id); }
      if (id === 'vxpanch' && P_PLACE && !$('vx-panch-out').innerHTML) { renderPanch(); }
    });
    var sa = load('aia-vax-a');
    if (sa && sa.place) { fillFrom('vxa', sa); A_PLACE = sa.place; if (getA(true)) { renderSade(LAST_A); renderVarga(LAST_A); } }
    var sb = load('aia-vax-b');
    if (sb && sb.place) { fillFrom('vxb', sb); B_PLACE = sb.place; }
    var sp = load(PLACE_KEY);
    if (sp && sp.place) { P_PLACE = sp.place; $('vxp-city').value = sp.city || sp.place.place; }
    var h = (location.hash || '').replace('#', '');
    if (h === 'panchanga' || h === 'sade-sati' || h === 'divisional-charts' || h === 'compatibility') {
      var map = { panchanga: 'vxpanch', 'sade-sati': 'vxsade', 'divisional-charts': 'vxvarga', compatibility: 'vxmatch' };
      var want = map[h], n = 0;
      var go = function () {
        n++;
        var tb = ROOT.querySelector('[data-tab="' + want + '"]');
        if (tb && !/vac-on/.test(tb.className)) { tb.click(); }
        if (tb && !/vac-on/.test(tb.className)) {
          var bs = ROOT.querySelectorAll('.vac-tab'), ps = ROOT.querySelectorAll('.vac-panel'), i;
          for (i = 0; i < bs.length; i++) { bs[i].className = 'vac-tab' + (bs[i].getAttribute('data-tab') === want ? ' vac-on' : ''); }
          for (i = 0; i < ps.length; i++) { ps[i].className = 'vac-panel' + (ps[i].getAttribute('data-panel') === want ? ' vac-on' : ''); }
          if (want !== 'vxpanch') { moveBirthTo(want); } else if (P_PLACE && !$('vx-panch-out').innerHTML) { renderPanch(); }
        }
        if (n < 6) { setTimeout(go, 500); }
      };
      setTimeout(go, 300);
    }
    return true;
  }
  var tries = 0;
  function boot() { tries++; if (build()) { return; } if (tries < 120) { setTimeout(boot, 250); } }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', boot); } else { boot(); }
})();
