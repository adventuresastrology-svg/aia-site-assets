/* Moon Phase Station widget | Adventures In Astrology | aia-moon 1.0
   Paste on any website:
     <div class="aia-moon"></div>
     <script src="https://cdn.jsdelivr.net/gh/adventuresastrology-svg/aia-site-assets@main/moon/aia-moon.js" async></script>
   Options on the div: data-theme="light" or "dark", data-size="card" or "wide".
   Shows today's Moon phase, sign and degree (tropical zodiac), the next sign change, and the next New and Full Moon
   in the visitor's own time zone. Calculated in the browser (Meeus lunar theory); nothing is tracked or stored. */
(function () {
  if (window.__aiaMoonLoaded) { return; }
  window.__aiaMoonLoaded = true;
  var HOME = 'https://www.adventuresinastrology.com/moon-phase-station';
  var SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  var MOONSIGN = ['action and fresh starts', 'comfort and steadiness', 'conversation and curiosity', 'home and feelings', 'warmth and self-expression', 'routines and practical care', 'relationships and balance', 'depth and honesty', 'adventure and big ideas', 'goals and responsibility', 'friends and new ideas', 'rest and imagination'];
  var PHASES = [
    ['New Moon', 'The Sun and Moon meet. A traditional time to set intentions and begin.'],
    ['Waxing Crescent', 'The first sliver of light returns. A time to take the first small steps.'],
    ['First Quarter', 'The Moon is half lit and growing. A time to act and work through obstacles.'],
    ['Waxing Gibbous', 'Nearly full. A time to refine and adjust what you have started.'],
    ['Full Moon', 'The Sun and Moon stand opposite. A time of culmination, clarity and release.'],
    ['Waning Gibbous', 'The light begins to shrink. A time to share what you have learned.'],
    ['Last Quarter', 'Half lit and shrinking. A time to let go of what is not working.'],
    ['Waning Crescent', 'The last sliver before the New Moon. A time to rest and reflect.']
  ];
  var R = Math.PI / 180, DAY = 86400000, HOUR = 3600000;
  function rev(x) { x = x % 360; return x < 0 ? x + 360 : x; }
  function sind(x) { return Math.sin(x * R); }
  function cosd(x) { return Math.cos(x * R); }

  /* Sun and Moon from Meeus, Astronomical Algorithms (ch. 25 and 47, main terms): apparent ecliptic longitude of date */
  var MT = [[0,0,1,0,6288774],[2,0,-1,0,1274027],[2,0,0,0,658314],[0,0,2,0,213618],[0,1,0,0,-185116],[0,0,0,2,-114332],[2,0,-2,0,58793],[2,-1,-1,0,57066],[2,0,1,0,53322],[2,-1,0,0,45758],
    [0,1,-1,0,-40923],[1,0,0,0,-34720],[0,1,1,0,-30383],[2,0,0,-2,15327],[0,0,1,2,-12528],[0,0,1,-2,10980],[4,0,-1,0,10675],[0,0,3,0,10034],[4,0,-2,0,8548],[2,1,-1,0,-7888],
    [2,1,0,0,-6766],[1,0,-1,0,-5163],[1,1,0,0,4987],[2,-1,1,0,4036],[2,0,2,0,3994],[4,0,0,0,3861],[2,0,-3,0,3665],[0,1,-2,0,-2689],[2,0,-1,2,-2602],[2,-1,-2,0,2390],
    [1,0,1,0,-2348],[2,-2,0,0,2236],[0,1,2,0,-2120],[0,2,0,0,-2069],[2,-2,-1,0,2048],[2,0,1,-2,-1773],[2,0,0,2,-1595],[4,-1,-1,0,1215],[0,0,2,2,-1110],[3,0,-1,0,-892],
    [2,1,1,0,-810],[4,-1,-2,0,759],[0,2,-1,0,-713],[2,2,-1,0,-700],[2,1,-2,0,691],[2,-1,0,-2,596],[4,0,1,0,549],[0,0,4,0,537],[4,-1,0,0,520],[1,0,-2,0,-487]];
  function pos(ms) {
    var y = 1970 + ms / (365.25 * DAY), u = y - 2000, dt = 62.92 + 0.32217 * u + 0.005589 * u * u;
    var T = ((ms + dt * 1000) / DAY + 2440587.5 - 2451545.0) / 36525;
    var Lp = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841;
    var D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868;
    var M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
    var Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699;
    var F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T;
    var E = 1 - 0.002516 * T - 0.0000074 * T * T, sum = 0;
    for (var i = 0; i < MT.length; i++) {
      var t = MT[i], arg = t[0] * D + t[1] * M + t[2] * Mp + t[3] * F, c = t[4];
      if (t[1] === 1 || t[1] === -1) { c *= E; } else if (t[1] === 2 || t[1] === -2) { c *= E * E; }
      sum += c * sind(arg);
    }
    sum += 3958 * sind(119.75 + 131.849 * T) + 1962 * sind(Lp - F) + 318 * sind(53.09 + 479264.290 * T);
    var Om = 125.04452 - 1934.136261 * T, L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    var dpsi = (-17.20 * sind(Om) - 1.32 * sind(2 * L0) - 0.23 * sind(2 * Lp) + 0.21 * sind(2 * Om)) / 3600;
    var moon = rev(Lp + sum / 1e6 + dpsi);
    var Ms = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
    var C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * sind(Ms) + (0.019993 - 0.000101 * T) * sind(2 * Ms) + 0.000289 * sind(3 * Ms);
    var sun = rev(L0 + C - 0.00569 + dpsi);
    return { sun: sun, moon: moon };
  }
  function elong(ms) { var p = pos(ms); return rev(p.moon - p.sun); }
  function signed(x) { x = rev(x); return x > 180 ? x - 360 : x; }
  function bisect(f, a, b) { var fa = f(a); for (var i = 0; i < 40 && b - a > 30000; i++) { var m = (a + b) / 2, fm = f(m); if ((fa < 0) === (fm < 0)) { a = m; fa = fm; } else { b = m; } } return (a + b) / 2; }
  function nextPhase(ms, target) {
    var f = function (t) { return signed(elong(t) - target); };
    var t = ms, p = f(t);
    for (var i = 0; i < 80; i++) { var t2 = t + 0.5 * DAY, p2 = f(t2); if (p < 0 && p2 >= 0) { return bisect(f, t, t2); } t = t2; p = p2; }
    return null;
  }
  function nextIngress(ms) {
    var s0 = Math.floor(pos(ms).moon / 30), t = ms;
    for (var i = 0; i < 80; i++) { var t2 = t + 2 * HOUR; if (Math.floor(pos(t2).moon / 30) !== s0) { var b = (s0 + 1) * 30; return { t: bisect(function (x) { return signed(pos(x).moon - b); }, t, t2), sign: (s0 + 1) % 12 }; } t = t2; }
    return null;
  }
  function state(ms) {
    var p = pos(ms), el = rev(p.moon - p.sun), lit = (1 - cosd(el)) / 2;
    var idx = Math.floor(rev(el + 22.5) / 45) % 8;
    return { moon: p.moon, el: el, lit: lit, phase: idx, nm: nextPhase(ms, 0), fm: nextPhase(ms, 180), ing: nextIngress(ms) };
  }

  /* drawing */
  function moonSvg(el, size) {
    var r = size / 2 - 2, c = size / 2, k = cosd(el), waxing = el < 180, rx = Math.abs(k) * r;
    // lit limb: right side while waxing (as seen from the Northern Hemisphere)
    var sweepLimb = waxing ? 1 : 0, sweepTerm = (el < 90 || el > 270) ? (waxing ? 0 : 1) : (waxing ? 1 : 0);
    var path = 'M ' + c + ' ' + (c - r) + ' A ' + r + ' ' + r + ' 0 0 ' + sweepLimb + ' ' + c + ' ' + (c + r) + ' A ' + rx.toFixed(2) + ' ' + r + ' 0 0 ' + sweepTerm + ' ' + c + ' ' + (c - r) + ' Z';
    return '<svg viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '" role="img" aria-label="Moon phase illustration">' +
      '<circle cx="' + c + '" cy="' + c + '" r="' + r + '" fill="var(--dark)"/>' +
      '<path d="' + path + '" fill="var(--lit)"/>' +
      '<circle cx="' + c + '" cy="' + c + '" r="' + r + '" fill="none" stroke="var(--rim)" stroke-width="1.5"/></svg>';
  }
  function fmtDeg(l) { var s = Math.floor(l / 30), d = l - s * 30, g = Math.floor(d), m = Math.floor((d - g) * 60); return g + '°' + (m < 10 ? '0' : '') + m + '\' ' + SIGNS[s]; }
  function fmtWhen(t) {
    try { return new Date(t).toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }); }
    catch (e) { return new Date(t).toString().slice(0, 21); }
  }
  var CSS = ':host{all:initial;display:block}' +
    '.c{--bg:#F4EFE4;--ink:#16302A;--soft:#3E5650;--line:#CBBF9F;--acc:#0E6058;--lit:#F2E9CF;--dark:#2D3B38;--rim:#8C8270;' +
    'font-family:"EB Garamond",Georgia,"Times New Roman",serif;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:14px;padding:14px 16px;box-sizing:border-box;max-width:340px;line-height:1.4}' +
    '.c.dark{--bg:#16302A;--ink:#F4EFE4;--soft:#C9E1DD;--line:#3C5A52;--acc:#9FD3C7;--lit:#F4EFE4;--dark:#0B1A17;--rim:#6F8F86}' +
    '.c *{box-sizing:border-box}.k{font-family:Cinzel,"EB Garamond",Georgia,serif;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--acc);margin:0 0 8px}' +
    '.top{display:flex;gap:14px;align-items:center}.top svg{flex:0 0 auto}' +
    '.ph{font-family:Cinzel,"EB Garamond",Georgia,serif;font-size:19px;font-weight:700;margin:0;line-height:1.15}' +
    '.sg{font-size:16px;margin:4px 0 0}.pc{font-size:14px;color:var(--soft);margin:2px 0 0}' +
    '.mean{font-size:14.5px;margin:10px 0 0}.rows{margin:10px 0 0;padding:8px 0 0;border-top:1px solid var(--line);font-size:14.5px}' +
    '.rows div{display:flex;justify-content:space-between;gap:10px;margin:2px 0}.rows span{color:var(--soft)}' +
    '.ft{margin:10px 0 0;font-size:12.5px;text-align:right}.ft a{color:var(--acc);text-decoration:none}.ft a:hover{text-decoration:underline}' +
    '.c.wide{max-width:720px}.c.wide .body{display:grid;grid-template-columns:1fr 1fr;gap:16px}.c.wide .rows{margin:0;padding:0 0 0 16px;border-top:0;border-left:1px solid var(--line)}' +
    '@media (max-width:560px){.c.wide .body{grid-template-columns:1fr}.c.wide .rows{border-left:0;padding:8px 0 0;border-top:1px solid var(--line)}}';
  function render(host) {
    if (host.getAttribute('data-aia-built')) { return; }
    host.setAttribute('data-aia-built', '1');
    var sr = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
    var theme = host.getAttribute('data-theme') === 'dark' ? ' dark' : '', size = host.getAttribute('data-size') === 'wide' ? ' wide' : '';
    function draw() {
      var now = new Date().getTime(), s = state(now), ph = PHASES[s.phase], sg = Math.floor(s.moon / 30);
      var big = size ? 110 : 84;
      sr.innerHTML = '<style>' + CSS + '</style><div class="c' + theme + size + '"><p class="k">Moon Phase Station</p><div class="body"><div>' +
        '<div class="top">' + moonSvg(s.el, big) + '<div><p class="ph">' + ph[0] + '</p><p class="sg">Moon in ' + SIGNS[sg] + ' ' + fmtDeg(s.moon).split(' ')[0] + '</p><p class="pc">' + Math.round(s.lit * 100) + '% illuminated</p></div></div>' +
        '<p class="mean">' + ph[1] + ' The Moon in ' + SIGNS[sg] + ' puts the focus on ' + MOONSIGN[sg] + '.</p></div>' +
        '<div class="rows">' +
        (s.ing ? '<div><span>Enters ' + SIGNS[s.ing.sign] + '</span><b>' + fmtWhen(s.ing.t) + '</b></div>' : '') +
        (s.nm ? '<div><span>Next New Moon</span><b>' + fmtWhen(s.nm) + '</b></div>' : '') +
        (s.fm ? '<div><span>Next Full Moon</span><b>' + fmtWhen(s.fm) + '</b></div>' : '') +
        '</div></div><p class="ft"><a href="' + HOME + '" target="_blank" rel="noopener">Moon Phase Station | Adventures In Astrology</a></p></div>';
    }
    draw();
    setInterval(draw, 10 * 60000);
  }
  function scan() {
    var els = document.querySelectorAll('.aia-moon, [data-aia-moon]');
    for (var i = 0; i < els.length; i++) { render(els[i]); }
  }
  window.AIAMoon = { pos: pos, state: state, nextPhase: nextPhase, nextIngress: nextIngress, moonSvg: moonSvg, scan: scan };
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', scan); } else { scan(); }
  window.addEventListener('load', scan);
  window.addEventListener('mercury:load', scan);
})();
