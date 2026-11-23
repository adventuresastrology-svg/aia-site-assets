/* Adventures In Astrology: "Make a report" bridge (ES5).
   Adds a button to any birth-data calculator on the site (inputs named <prefix>date, <prefix>time,
   <prefix>city or <prefix>place, <prefix>name, <prefix>notime, <prefix>lat/lon/tz). The button hands the
   birth details to the Practitioner Center through this browser only; nothing is sent anywhere. */
(function(){
  if (location.pathname.indexOf('/practitioner-center') === 0) return;
  var CENTER = '/practitioner-center';
  function byId(id){ return document.getElementById(id); }
  function first(prefix, names){ for (var i = 0; i < names.length; i++) { var el = byId(prefix + names[i]); if (el) return el; } return null; }
  function val(el){ return el ? String(el.value || '').trim() : ''; }
  function sourceName(el){
    var block = el.closest('.sqs-block, section'), h = block ? block.querySelector('h1, h2, h3') : null;
    var t = h ? h.textContent.replace(/\s+/g, ' ').trim() : '';
    return t && t.length < 60 ? t : (document.title.split(/[—|\-]/)[0] || 'your calculator').trim();
  }
  function style(){
    if (byId('pcb-style')) return;
    var st = document.createElement('style'); st.id = 'pcb-style';
    st.textContent = '.pcb-btn{display:inline-flex;align-items:center;gap:6px;margin:8px 0 0 8px;padding:9px 14px;border-radius:10px;border:2px solid #7b4fc9;background:#fff;color:#4a2a8a;font:600 14px/1.2 Lora,Georgia,serif;cursor:pointer}.pcb-btn:hover{background:#efe6ff}.pcb-btn small{font:400 11px "Space Mono",monospace;color:#6b5f73}';
    document.head.appendChild(st);
  }
  function add(dateEl){
    if (dateEl.getAttribute('data-pcb')) return;
    var prefix = dateEl.id.slice(0, -4);                       /* strip "date" */
    var place = first(prefix, ['city', 'place', 'b-place', 'location']);
    if (!place) return;                                        /* not a birth chart form */
    dateEl.setAttribute('data-pcb', '1');
    style();
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'pcb-btn';
    btn.innerHTML = '✦︎ Make a report <small>Practitioner Center</small>';
    btn.addEventListener('click', function(e){
      e.preventDefault(); e.stopPropagation();
      var date = val(dateEl);
      if (!date) { btn.innerHTML = 'Add a birth date first'; setTimeout(function(){ btn.innerHTML = '✦︎ Make a report <small>Practitioner Center</small>'; }, 2200); return; }
      var nt = first(prefix, ['notime', 'no-time', 'unknown-time']);
      var d = {ts: Date.now(), source: sourceName(dateEl), name: val(first(prefix, ['name', 'b-name'])), date: date,
        time: val(first(prefix, ['time', 'b-time'])), notime: !!(nt && nt.checked), place: val(place),
        lat: val(first(prefix, ['lat', 'b-lat'])), lon: val(first(prefix, ['lon', 'b-lon'])), tz: val(first(prefix, ['tz', 'b-tz']))};
      if (!d.time) d.notime = true;
      try { localStorage.setItem('pc-handoff', JSON.stringify(d)); } catch (err) {}
      location.href = CENTER;
    });
    var form = dateEl.closest('form'), scope = form || dateEl.closest('.sqs-block-content') || dateEl.parentNode;
    var go = scope.querySelector('[id$="-go"], button[type="submit"], input[type="submit"]');
    if (go && go.parentNode) go.parentNode.insertBefore(btn, go.nextSibling); else scope.appendChild(btn);
  }
  function scan(){
    var list = document.querySelectorAll('input[type="date"][id$="date"]');
    for (var i = 0; i < list.length; i++) add(list[i]);
  }
  var n = 0, timer = setInterval(function(){ scan(); if (++n > 30) clearInterval(timer); }, 1000);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
})();
