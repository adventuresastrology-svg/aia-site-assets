/* vax member and public-mode additions. Appended after vax-ui.js. ES5. */
(function () {
  var MEMBER_URL = '/vedic-advanced-study';
  var PUBLIC_URL = '/vedic-classroom-hub';
  var BAV = { /* Parashari benefic points: for each planet's ashtakavarga, houses counted from each contributor */
    Sun: { Sun: [1, 2, 4, 7, 8, 9, 10, 11], Moon: [3, 6, 10, 11], Mars: [1, 2, 4, 7, 8, 9, 10, 11], Mercury: [3, 5, 6, 9, 10, 11, 12], Jupiter: [5, 6, 9, 11], Venus: [6, 7, 12], Saturn: [1, 2, 4, 7, 8, 9, 10, 11], Asc: [3, 4, 6, 10, 11, 12] },
    Moon: { Sun: [3, 6, 7, 8, 10, 11], Moon: [1, 3, 6, 7, 10, 11], Mars: [2, 3, 5, 6, 9, 10, 11], Mercury: [1, 3, 4, 5, 7, 8, 10, 11], Jupiter: [1, 4, 7, 8, 10, 11, 12], Venus: [3, 4, 5, 7, 9, 10, 11], Saturn: [3, 5, 6, 11], Asc: [3, 6, 10, 11] },
    Mars: { Sun: [3, 5, 6, 10, 11], Moon: [3, 6, 11], Mars: [1, 2, 4, 7, 8, 10, 11], Mercury: [3, 5, 6, 11], Jupiter: [6, 10, 11, 12], Venus: [6, 8, 11, 12], Saturn: [1, 4, 7, 8, 9, 10, 11], Asc: [1, 3, 6, 10, 11] },
    Mercury: { Sun: [5, 6, 9, 11, 12], Moon: [2, 4, 6, 8, 10, 11], Mars: [1, 2, 4, 7, 8, 9, 10, 11], Mercury: [1, 3, 5, 6, 9, 10, 11, 12], Jupiter: [6, 8, 11, 12], Venus: [1, 2, 3, 4, 5, 8, 9, 11], Saturn: [1, 2, 4, 7, 8, 9, 10, 11], Asc: [1, 2, 4, 6, 8, 10, 11] },
    Jupiter: { Sun: [1, 2, 3, 4, 7, 8, 9, 10, 11], Moon: [2, 5, 7, 9, 11], Mars: [1, 2, 4, 7, 8, 10, 11], Mercury: [1, 2, 4, 5, 6, 9, 10, 11], Jupiter: [1, 2, 3, 4, 7, 8, 10, 11], Venus: [2, 5, 6, 9, 10, 11], Saturn: [3, 5, 6, 12], Asc: [1, 2, 4, 5, 6, 7, 9, 10, 11] },
    Venus: { Sun: [8, 11, 12], Moon: [1, 2, 3, 4, 5, 8, 9, 11, 12], Mars: [3, 5, 6, 9, 11, 12], Mercury: [3, 5, 6, 9, 11], Jupiter: [5, 8, 9, 10, 11], Venus: [1, 2, 3, 4, 5, 8, 9, 10, 11], Saturn: [3, 4, 5, 8, 9, 10, 11], Asc: [1, 2, 3, 4, 5, 8, 9, 11] },
    Saturn: { Sun: [1, 2, 4, 7, 8, 10, 11], Moon: [3, 6, 11], Mars: [3, 5, 6, 10, 11, 12], Mercury: [6, 8, 9, 10, 11, 12], Jupiter: [5, 6, 11, 12], Venus: [6, 11, 12], Saturn: [3, 5, 6, 11], Asc: [1, 3, 4, 6, 10, 11] }
  };
  var SEVEN = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
  function ashtakavarga(pos) {
    var out = {}, sav = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], useAsc = !!pos.Asc;
    for (var i = 0; i < SEVEN.length; i++) {
      var pl = SEVEN[i], row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], tbl = BAV[pl];
      for (var c in tbl) {
        if (!tbl.hasOwnProperty(c)) { continue; }
        if (c === 'Asc' && !useAsc) { continue; }
        var from = c === 'Asc' ? pos.Asc.sign : pos[c].sign;
        for (var k = 0; k < tbl[c].length; k++) { row[(from + tbl[c][k] - 1) % 12]++; }
      }
      out[pl] = row;
      for (var s = 0; s < 12; s++) { sav[s] += row[s]; }
    }
    out.SAV = sav;
    return out;
  }
  function arudha(pos) {
    if (!pos.Asc) { return null; }
    var L = pos.Asc.sign, LORD = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'][L];
    var ls = pos[LORD].sign, n = ((ls - L + 12) % 12) + 1, al = (ls + n - 1) % 12, h = ((al - L + 12) % 12) + 1;
    if (h === 1 || h === 7) { al = (al + 9) % 12; }
    return { lord: LORD, lordSign: ls, sign: al };
  }
  window.VAXMEMBER = { ashtakavarga: ashtakavarga, arudha: arudha, BAV: BAV };

  var LESSONS = [
    { id: 'varga', title: 'Reading the navamsa and the vargas',
      body: '<p>The rashi chart (D1) shows what is promised; the navamsa (D9) shows how strong that promise is underneath. A planet that is exalted, in its own sign or in a friend\'s sign in the navamsa holds up over a lifetime, while a planet that looks strong in the D1 but is debilitated in the D9 tends to deliver less than it first appears. When a planet occupies the same sign in both charts it is vargottama, and it is read as unusually steady and reliable.</p>' +
        '<p>Read each varga for its own subject, and always from its own Lagna: the 10th house of the D10 for career, the 5th of the D7 for children, the 7th of the D9 for the spouse. Then ask whether the planets that matter for that subject in the D1 are supported or weakened in that varga. The finer the division, the more the birth time matters; the D60 changes every two minutes.</p>',
      tasks: ['List any vargottama planets (same sign in D1 and D9). What do they signify for you?', 'Find the lord of your D1 Lagna in the navamsa. Is it exalted, own sign, friendly, neutral, enemy or debilitated there?', 'In the D10, which sign holds the 10th house and where is its lord?', 'Choose one varga for a question you care about and write two sentences on what it adds to the D1.'],
      go: [['vxvarga', 'Open your divisional charts']] },
    { id: 'jaimini', title: 'Jaimini essentials: karakas and the Arudha Lagna',
      body: '<p>Jaimini astrology, from the Jaimini Sutras, works with signs more than houses. Its chara (movable) karakas are assigned by degree: the graha furthest through its sign becomes the Atmakaraka, the soul indicator, and the others follow in order down to the Darakaraka, the spouse indicator. The navamsa sign of the Atmakaraka is the Karakamsa, read for the deepest aims of the soul.</p>' +
        '<p>The Arudha Lagna (AL) is the image of the self as the world sees it. Count from the Lagna to its lord, then count the same number of signs again from the lord; if the result falls in the 1st or 7th from the Lagna, move to the 10th from that sign. Planets in and aspecting the AL color reputation and visible status, while the Lagna itself describes the person as they are.</p>',
      tasks: ['Which graha is your Atmakaraka, and what is your Karakamsa sign?', 'Which graha is your Darakaraka, and how does its condition compare with your 7th house?', 'Find your Arudha Lagna below. How does the world\'s picture of you differ from your Lagna?', 'Note any planets in the 12th from your Arudha Lagna and what they suggest about expenses or what is hidden from view.'],
      go: [['vxvarga', 'See your chara karakas']], arudha: true },
    { id: 'ashtaka', title: 'Ashtakavarga: measuring support sign by sign',
      body: '<p>Ashtakavarga is a point system. For each of the seven grahas, eight reference points (the seven grahas and the Lagna) each give a benefic point, a bindu, to certain signs counted from where they sit. The planet\'s own table is its Bhinnashtakavarga (BAV), out of 8 per sign. Adding all seven gives the Sarvashtakavarga (SAV), which totals 337 points across the twelve signs, an average of about 28 per sign.</p>' +
        '<p>Signs with 28 or more SAV points support the houses they hold; signs well below 25 need more care. In transits, a planet moving through a sign where its own BAV has 4 or more bindus tends to give good results, and 3 or fewer tends to strain. That is why two people can feel the same Saturn transit very differently. Use the Ashtakavarga tab to see your own numbers.</p>',
      tasks: ['Which three signs have your highest SAV totals, and which houses do they hold?', 'Which sign has your lowest SAV total? What does that house cover in your life?', 'Find the sign Saturn is transiting now. How many bindus does it have in Saturn\'s own BAV for you?', 'Compare your 10th and 11th house SAV totals. Classically, an 11th stronger than the 10th favors gains over effort.'],
      go: [['vxashtaka', 'Open your Ashtakavarga'], ['vxsade', 'See current transits']] },
    { id: 'strength', title: 'Planetary strength: dignity, combustion and Shadbala',
      body: '<p>A graha gives results according to its strength. The first layer is dignity: exaltation, moolatrikona, own sign, friend, neutral, enemy and debilitation. Next come the conditions that modify it: combustion (too close to the Sun), retrogression (which many astrologers read as added strength, though it turns the planet\'s effort inward), planetary war (two planets within a degree), and directional strength, where the Sun and Mars are strongest in the 10th, the Moon and Venus in the 4th, Mercury and Jupiter in the 1st, and Saturn in the 7th.</p>' +
        '<p>Shadbala, the sixfold strength of Parashara, turns these ideas into numbers: positional, directional, temporal, motional, natural and aspectual strength. You do not need to compute Shadbala by hand to use its logic. Ask of every planet: is it dignified, is it free of combustion, is it directionally strong, and is it aspected by benefics? A planet that passes most of these tests can carry its dasha well.</p>',
      tasks: ['Which of your planets is directionally strong (Sun or Mars in the 10th, Moon or Venus in the 4th, Mercury or Jupiter in the 1st, Saturn in the 7th)?', 'Is any planet within about 10 degrees of the Sun (combust)? How might that show?', 'Pick the lord of your current mahadasha and rate its dignity in the D1 and the D9.', 'Which planet in your chart seems strongest overall, and why?'],
      go: [['chart', 'Open your chart'], ['dasha', 'Open your dasha timeline']] },
    { id: 'muhurta', title: 'Muhurta: choosing a good time',
      body: '<p>Muhurta is electional astrology in the Jyotish tradition. It starts with the Panchanga: a supportive tithi (many avoid the 4th, 9th and 14th, Amavasya, and Vishti karana for beginnings), a nakshatra suited to the activity, and a favorable weekday. Rahu Kalam, Yamaganda and Gulika Kalam are set aside. Then the Lagna of the moment is chosen so that benefics are angular and the Moon is strong and well placed from the person\'s natal Moon.</p>' +
        '<p>Nakshatras are grouped by nature: fixed (dhruva) ones such as Rohini and the Uttaras suit foundations and lasting commitments; movable (chara) ones such as Swati and Shravana suit travel and change; light and swift (laghu) ones such as Ashwini, Pushya and Hasta suit learning, trade and healing; gentle (mridu) ones such as Mrigashira, Chitra, Anuradha and Revati suit art, friendship and romance.</p>',
      tasks: ['Look at today\'s Panchanga. Which limb would you change first for an important beginning, and why?', 'Name an activity you are planning and choose a nakshatra group that fits it.', 'Find the next Abhijit Muhurta and note whether Rahu Kalam overlaps any time you had in mind.', 'Write the three conditions you would check first for a muhurta of your own.'],
      go: [['vxpanch', 'Open Today\'s Panchanga']] }
  ];
  var WS_KEY = 'aia-vas-ws';
  function wsLoad() { try { return JSON.parse(localStorage.getItem(WS_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function wsSave(o) { try { localStorage.setItem(WS_KEY, JSON.stringify(o)); } catch (e) {} }

  function mod() { return window.VAX_MODE === 'member' ? 'member' : 'public'; }
  function waitFor(fn, n) { n = n || 0; if (fn()) { return; } if (n < 120) { setTimeout(function () { waitFor(fn, n + 1); }, 250); } }

  function publicMode(ROOT) {
    var learn = ROOT.querySelector('.vac-panel[data-panel="learn"]');
    if (!learn || learn.getAttribute('data-vax-public')) { return; }
    learn.setAttribute('data-vax-public', '1');
    var tab = ROOT.querySelector('.vac-tab[data-tab="learn"]'); if (tab) { tab.textContent = 'Start Here'; }
    learn.innerHTML =
      '<div class="vac-card"><h3>How to use this center</h3><p>Every tool here works from the sidereal zodiac with the Lahiri ayanamsa, the standard in Jyotish. Start with your chart, then follow the tabs in order.</p>' +
      '<div class="vx-grid">' +
      '<div class="vx-stat"><b>Your Chart</b><small>Cast your rashi and navamsa charts in North or South Indian style.</small><button type="button" class="vx-ghost" data-go="chart" style="margin-top:8px">Cast your chart</button></div>' +
      '<div class="vx-stat"><b>Moon and Nakshatras</b><small>Your janma nakshatra and pada, plus all 27 nakshatras.</small><button type="button" class="vx-ghost" data-go="moon" style="margin-top:8px">Find your nakshatra</button></div>' +
      '<div class="vx-stat"><b>Dasha Timeline</b><small>Your Vimshottari mahadashas and antardashas, with today marked.</small><button type="button" class="vx-ghost" data-go="dasha" style="margin-top:8px">See your dashas</button></div>' +
      '<div class="vx-stat"><b>Sade Sati and Transits</b><small>Saturn, Jupiter and the nodes from your Moon, and every Sade Sati of your life.</small><button type="button" class="vx-ghost" data-go="vxsade" style="margin-top:8px">Check Sade Sati</button></div>' +
      '<div class="vx-stat"><b>Yogas and Divisional Charts</b><small>Classical yogas, the sixteen vargas and your Atmakaraka.</small><button type="button" class="vx-ghost" data-go="vxvarga" style="margin-top:8px">Open the vargas</button></div>' +
      '<div class="vx-stat"><b>Compatibility</b><small>The 36-point Ashtakoota match and Mangal dosha for two charts.</small><button type="button" class="vx-ghost" data-go="vxmatch" style="margin-top:8px">Compare two charts</button></div>' +
      '<div class="vx-stat"><b>Today\'s Panchanga</b><small>Tithi, nakshatra, yoga, karana and Rahu Kalam for any city.</small><button type="button" class="vx-ghost" data-go="vxpanch" style="margin-top:8px">See today</button></div>' +
      '<div class="vx-stat"><b>Report</b><small>A free written summary of your Vedic chart.</small><button type="button" class="vx-ghost" data-go="report" style="margin-top:8px">Write my report</button></div>' +
      '</div></div>' +
      '<div class="vac-card"><h3>Learn Jyotish step by step</h3><p>The six-level Learning Pathway, the Quick Check quizzes, an Ashtakavarga calculator and the Advanced Vedic Study lessons with worksheets are in the Adventures Member Zone. Joining is free.</p>' +
      '<div class="vx-row"><a class="vac-btn" href="' + MEMBER_URL + '" style="text-decoration:none">Open Advanced Vedic Study</a></div></div>';
    var ps = ROOT.querySelectorAll('p');
    for (var i = 0; i < ps.length && i < 4; i++) {
      if (/six-level learning pathway/.test(ps[i].textContent)) { ps[i].textContent = 'Jyotish tools in one place: your sidereal chart, the 27 nakshatras, dasha timing, Sade Sati, divisional charts, compatibility, today\'s Panchanga and a written report.'; }
    }
  }

  function memberMode(ROOT, C) {
    if (ROOT.getAttribute('data-vax-member')) { return; }
    ROOT.setAttribute('data-vax-member', '1');
    var hs = ROOT.querySelectorAll('h2'), ps0 = ROOT.querySelectorAll('p'), q0;
    for (q0 = 0; q0 < hs.length; q0++) { if (/^\s*Adventures in Vedic Astrology\s*$/i.test(hs[q0].textContent)) { hs[q0].textContent = 'Adventures in Vedic Astrology: Advanced Study'; break; } }
    for (q0 = 0; q0 < ps0.length && q0 < 4; q0++) {
      if (/^\s*Adventures in Astrology\s*$/i.test(ps0[q0].textContent)) { ps0[q0].textContent = 'Member Zone | Adventures in Astrology'; }
      if (/six-level learning pathway/.test(ps0[q0].textContent)) { ps0[q0].innerHTML = 'The six-level Learning Pathway, Quick Check quizzes, Advanced Study lessons with worksheets and an Ashtakavarga calculator, plus every tool from the free center. The free public version is <a href="' + PUBLIC_URL + '" style="color:#6E1F1F">Adventures in Vedic Astrology</a>.'; }
    }
    var bar = ROOT.querySelector('.vac-tabs');
    function add(id, label, after, html) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'vac-tab'; b.setAttribute('data-tab', id); b.textContent = label;
      var ref = bar.querySelector('[data-tab="' + after + '"]'); if (ref && ref.nextSibling) { bar.insertBefore(b, ref.nextSibling); } else { bar.appendChild(b); }
      var pRef = ROOT.querySelector('.vac-panel[data-panel="' + after + '"]');
      var p = document.createElement('div'); p.className = 'vac-panel'; p.setAttribute('data-panel', id); p.innerHTML = html;
      pRef.parentNode.insertBefore(p, pRef.nextSibling); return p;
    }
    add('vxashtaka', 'Ashtakavarga', 'vxvarga', '<h3>Ashtakavarga</h3><p>Your Bhinnashtakavarga for each graha and your Sarvashtakavarga across the twelve signs. Uses the birth details from the Sade Sati, Divisional Charts and Compatibility tabs.</p><div class="vx-slot"></div><div id="vx-ashtaka-out" class="vx-res"></div>');
    var ws = wsLoad(), h = '<h3>Advanced Vedic Study</h3><p>Five lessons that go past the Learning Pathway. Each ends with a worksheet; your answers are saved on this device, and the Print button gives you a clean copy.</p>';
    for (var i = 0; i < LESSONS.length; i++) {
      var L = LESSONS[i], t = '';
      for (var j = 0; j < L.tasks.length; j++) {
        var key = L.id + '-' + j;
        t += '<li><label for="vas-' + key + '">' + L.tasks[j] + '</label><textarea id="vas-' + key + '" data-ws="' + key + '" rows="2" style="width:100%;box-sizing:border-box;font-family:\'EB Garamond\',Georgia,serif;font-size:16px;border:1px solid #B9A88F;border-radius:6px;padding:6px;margin-top:4px;background:#FFFDF8;color:#1C1814">' + (ws[key] ? String(ws[key]).replace(/&/g, '&amp;').replace(/</g, '&lt;') : '') + '</textarea></li>';
      }
      var go = ''; for (var g = 0; g < L.go.length; g++) { go += '<button type="button" class="vx-ghost" data-go="' + L.go[g][0] + '">' + L.go[g][1] + '</button>'; }
      h += '<details class="vac-card vas-lesson" id="vas-' + L.id + '"' + (i === 0 ? ' open' : '') + '><summary style="cursor:pointer;font-family:Cinzel,Georgia,serif;font-size:18px;color:#6E1F1F">' + (i + 1) + ' | ' + L.title + '</summary>' + L.body +
        (L.arudha ? '<div id="vas-arudha" class="vx-who">Enter your birth details on the Sade Sati tab to see your Arudha Lagna here.</div>' : '') +
        '<h4 style="font-family:Cinzel,Georgia,serif;font-size:15px;color:#1C1814;margin:14px 0 6px">Worksheet</h4><ol style="margin:0 0 8px 18px;padding:0">' + t + '</ol>' +
        '<div class="vx-row">' + go + '<button type="button" class="vx-ghost" data-print="' + L.id + '">Print this lesson</button></div></details>';
    }
    add('vxlessons', 'Advanced Study', 'learn', h);
    ROOT.addEventListener('input', function (e) {
      var k = e.target && e.target.getAttribute && e.target.getAttribute('data-ws');
      if (!k) { return; }
      var o = wsLoad(); o[k] = e.target.value; wsSave(o);
    });
    ROOT.addEventListener('click', function (e) {
      var b = e.target && e.target.closest ? e.target.closest('[data-print]') : null;
      if (!b) { return; }
      var id = b.getAttribute('data-print'), el = document.getElementById('vas-' + id);
      var w = window.open('', '_blank'); if (!w) { return; }
      var clone = el.cloneNode(true), tas = clone.querySelectorAll('textarea'), src = el.querySelectorAll('textarea');
      for (var q = 0; q < tas.length; q++) { var d = document.createElement('div'); d.style.cssText = 'border:1px solid #999;min-height:60px;padding:6px;margin:4px 0 10px;white-space:pre-wrap'; d.textContent = src[q].value; tas[q].parentNode.replaceChild(d, tas[q]); }
      var btns = clone.querySelectorAll('button'); for (q = 0; q < btns.length; q++) { btns[q].parentNode.removeChild(btns[q]); }
      w.document.write('<!DOCTYPE html><html><head><title>Advanced Vedic Study | Adventures In Astrology</title><style>body{font-family:Georgia,serif;max-width:720px;margin:30px auto;color:#1C1814;line-height:1.5}summary{font-size:20px;font-weight:bold;list-style:none}</style></head><body>' + clone.outerHTML.replace('<details', '<details open') + '<p style="font-size:12px;color:#666">Adventures In Astrology | Advanced Vedic Study</p></body></html>');
      w.document.close(); w.focus(); setTimeout(function () { w.print(); }, 400);
    });
    var hookRender = function () {
      var r = window.__vaxLastA;
      if (!r) { return; }
      var av = ashtakavarga(r.pos), rows = '', s, pl, i2;
      var head = '<tr><th>Sign</th>'; for (i2 = 0; i2 < SEVEN.length; i2++) { head += '<th>' + SEVEN[i2].slice(0, 3) + '</th>'; } head += '<th>SAV</th><th>House</th></tr>';
      var lag = r.pos.Asc ? r.pos.Asc.sign : null, max = 0; for (s = 0; s < 12; s++) { if (av.SAV[s] > max) { max = av.SAV[s]; } }
      for (s = 0; s < 12; s++) {
        rows += '<tr' + (av.SAV[s] >= 28 ? ' class="vx-now"' : '') + '><td><b>' + C.SIGNS[s] + '</b></td>';
        for (i2 = 0; i2 < SEVEN.length; i2++) { pl = SEVEN[i2]; rows += '<td>' + av[pl][s] + '</td>'; }
        rows += '<td><b>' + av.SAV[s] + '</b> <span style="display:inline-block;height:8px;width:' + Math.round(av.SAV[s] / max * 60) + 'px;background:#6E1F1F;border-radius:4px;vertical-align:middle"></span></td><td>' + (lag !== null ? ((s - lag + 12) % 12) + 1 : '') + '</td></tr>';
      }
      var tot = 0; for (s = 0; s < 12; s++) { tot += av.SAV[s]; }
      var now = new Date(), sat = Math.floor(C.sid('Saturn', now) / 30), jup = Math.floor(C.sid('Jupiter', now) / 30);
      $id('vx-ashtaka-out').innerHTML = '<div class="vac-card"><h3>Your Ashtakavarga</h3>' + (lag === null ? '<p class="vx-msg">No birth time: the Lagna\'s points are left out, so totals are lower than the usual 337 and houses cannot be numbered.</p>' : '') +
        '<div style="overflow-x:auto"><table class="vx-table"><thead>' + head + '</thead><tbody>' + rows + '</tbody></table></div>' +
        '<p class="vx-note">Total SAV ' + tot + (lag !== null ? ' (always 337 with the Lagna included)' : '') + '. Highlighted rows have 28 or more points. Saturn is transiting ' + C.SIGNS[sat] + ' now, where its own BAV gives you ' + av.Saturn[sat] + ' of 8; Jupiter is in ' + C.SIGNS[jup] + ' with ' + av.Jupiter[jup] + ' of 8. Four or more bindus in a planet\'s own BAV usually means an easier transit.</p></div>';
      var al = arudha(r.pos), box = $id('vas-arudha');
      if (box) { box.innerHTML = al ? 'Your Lagna lord is ' + al.lord + ' in ' + C.SIGNS[al.lordSign] + '. Your Arudha Lagna is <b>' + C.SIGNS[al.sign] + '</b>' + (lag !== null ? ', the ' + (((al.sign - lag + 12) % 12) + 1) + 'th sign from your Lagna.' : '.') : 'The Arudha Lagna needs a birth time.'; }
    };
    window.__vaxOnA = hookRender;
    hookRender();
    ROOT.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-tab],[data-go]') : null;
      if (t && (t.getAttribute('data-tab') || t.getAttribute('data-go')) === 'vxashtaka') {
        var slot = ROOT.querySelector('.vac-panel[data-panel="vxashtaka"] .vx-slot'), f = document.getElementById('vx-birth');
        if (slot && f && f.parentNode !== slot) { slot.appendChild(f); }
      }
    });
  }
  function $id(i) { return document.getElementById(i); }
  waitFor(function () {
    var ROOT = document.getElementById('vacCenter');
    if (!ROOT || !ROOT.getAttribute('data-vax') || !window.VAXCORE || !window.Astronomy) { return false; }
    var lp = ROOT.querySelector('.vac-panel[data-panel="learn"]');
    if (!lp || lp.textContent.length < 200) { return false; }
    var C = window.VAXCORE(window.Astronomy);
    if (mod() === 'member') { memberMode(ROOT, C); } else if (location.pathname.replace(/\/$/, '') === PUBLIC_URL) {
      publicMode(ROOT);
      var checks = 0, again = setInterval(function () {
        checks++;
        var l2 = ROOT.querySelector('.vac-panel[data-panel="learn"]');
        if (l2 && /The Learning Pathway/.test(l2.textContent) && !/How to use this center/.test(l2.textContent)) { l2.removeAttribute('data-vax-public'); publicMode(ROOT); }
        if (checks > 15) { clearInterval(again); }
      }, 1000);
    }
    return true;
  });
})();
