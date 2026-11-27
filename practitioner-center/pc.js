/* Adventures In Astrology - Practitioner Center (pc-). No client data or library text lives in this file. */
(function(){var st=document.getElementById("pc-style");if(!st){st=document.createElement("style");st.id="pc-style";st.textContent="@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Lora:ital,wght@0,400;0,600;1,400&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&family=Cormorant+Garamond:wght@600;700&family=Cinzel:wght@600;700&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');\n#pc-root{--pc-scale:1;--cream:#fffaf1;--paper:#ffffff;--ink:#2b2135;--soft:#6b5f73;--line:#eadfcc;--teal:#0f9e94;--teal-l:#d9f4f1;--terra:#e0663f;--terra-l:#fde6dc;--gold:#e8a923;--gold-l:#fff1cc;--plum:#7b4fc9;--plum-l:#efe6ff;\n  font-family:'Lora',Georgia,serif;color:var(--ink);background:var(--cream);font-size:calc(16px * var(--pc-scale));line-height:1.55;border-radius:18px;overflow:hidden;box-shadow:0 2px 18px rgba(60,40,20,.08);max-width:1280px;margin:0 auto;text-align:left}\n#pc-root *{box-sizing:border-box}\n#pc-root h1,#pc-root h2,#pc-root h3,#pc-root h4{font-family:'Fraunces',Georgia,serif;color:var(--ink);margin:0 0 .4em;line-height:1.2;letter-spacing:0;text-transform:none}\n#pc-root p{margin:0 0 .7em;font-size:1em}\n#pc-root button,#pc-root input,#pc-root select,#pc-root textarea{font:inherit;color:inherit}\n#pc-root .pc-mono{font-family:'Space Mono',monospace}\n#pc-root .pc-muted{color:var(--soft);font-size:.92em}\n#pc-root .pc-hide{display:none!important}\n\n/* top bar */\n#pc-root .pc-top{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:14px 20px;background:var(--paper);border-bottom:2px solid var(--line)}\n#pc-root .pc-brand{font-family:'Fraunces',serif;font-weight:700;font-size:1.25em;margin-right:auto}\n#pc-root .pc-brand small{display:block;font-family:'Space Mono',monospace;font-size:.55em;color:var(--teal);letter-spacing:.12em;text-transform:uppercase;font-weight:400}\n#pc-root .pc-steps{display:flex;gap:6px}\n#pc-root .pc-step{border:2px solid var(--line);background:var(--cream);border-radius:999px;padding:8px 16px;cursor:pointer;font-weight:600}\n#pc-root .pc-step b{display:inline-block;width:1.6em;height:1.6em;line-height:1.6em;text-align:center;border-radius:50%;background:var(--line);margin-right:6px;font-family:'Space Mono',monospace;font-size:.85em}\n#pc-root .pc-step.is-on{border-color:var(--teal);background:var(--teal-l)}\n#pc-root .pc-step.is-on b{background:var(--teal);color:#fff}\n#pc-root .pc-step:disabled{opacity:.45;cursor:not-allowed}\n#pc-root .pc-tools{display:flex;gap:6px;align-items:center}\n#pc-root .pc-ic{border:2px solid var(--line);background:#fff;border-radius:10px;padding:6px 10px;cursor:pointer;font-weight:700}\n\n/* buttons */\n#pc-root .pc-btn{display:inline-flex;align-items:center;gap:8px;border:none;border-radius:12px;padding:11px 18px;font-weight:700;cursor:pointer;background:var(--teal);color:#fff;font-size:1em;text-decoration:none}\n#pc-root .pc-btn:hover{filter:brightness(1.06)}\n#pc-root .pc-btn.alt{background:var(--terra)}\n#pc-root .pc-btn.plum{background:var(--plum)}\n#pc-root .pc-btn.ghost{background:#fff;color:var(--ink);border:2px solid var(--line)}\n#pc-root .pc-btn.big{font-size:1.1em;padding:14px 22px}\n#pc-root .pc-btn.small{padding:6px 12px;font-size:.9em;border-radius:9px}\n#pc-root .pc-btn:disabled{opacity:.5;cursor:wait}\n#pc-root .pc-link{background:none;border:none;color:var(--teal);font-weight:700;cursor:pointer;padding:0;text-decoration:underline}\n\n/* layout */\n#pc-root .pc-screen{padding:22px}\n#pc-root .pc-two{display:grid;grid-template-columns:300px 1fr;gap:22px}\n#pc-root .pc-build{display:grid;grid-template-columns:minmax(380px,440px) 1fr;gap:22px}\n@media (max-width:900px){#pc-root .pc-two,#pc-root .pc-build{grid-template-columns:1fr}}\n#pc-root .pc-card{background:var(--paper);border:2px solid var(--line);border-radius:16px;padding:18px}\n#pc-root .pc-card+.pc-card{margin-top:16px}\n#pc-root .pc-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n#pc-root .pc-spacer{flex:1}\n\n/* forms */\n#pc-root label.pc-f{display:block;margin-bottom:12px;font-weight:600}\n#pc-root label.pc-f span{display:block;font-size:.9em;margin-bottom:4px}\n#pc-root .pc-in{width:100%;border:2px solid var(--line);border-radius:10px;padding:10px 12px;background:#fff}\n#pc-root .pc-in:focus{outline:none;border-color:var(--teal);box-shadow:0 0 0 3px var(--teal-l)}\n#pc-root textarea.pc-in{min-height:90px;resize:vertical}\n#pc-root .pc-time{display:flex;gap:6px}\n#pc-root .pc-time select{width:auto;flex:1}\n#pc-root .pc-check{display:flex;gap:8px;align-items:center;font-weight:600;cursor:pointer;margin:6px 0 12px}\n#pc-root .pc-check input{width:20px;height:20px;accent-color:var(--teal)}\n#pc-root .pc-sugg{border:2px solid var(--teal);border-radius:10px;background:#fff;margin-top:4px;overflow:hidden}\n#pc-root .pc-sugg button{display:block;width:100%;text-align:left;padding:9px 12px;border:none;background:#fff;cursor:pointer;border-bottom:1px solid var(--line)}\n#pc-root .pc-sugg button:hover{background:var(--teal-l)}\n#pc-root .pc-picked{background:var(--teal-l);border-radius:10px;padding:8px 12px;margin-top:6px;font-size:.92em}\n#pc-root .pc-err{background:var(--terra-l);color:#8a2c0c;border-radius:10px;padding:10px 12px;margin:10px 0;font-weight:600}\n#pc-root .pc-ok{background:var(--teal-l);color:#075e57;border-radius:10px;padding:10px 12px;margin:10px 0;font-weight:600}\n\n/* auth */\n#pc-root .pc-auth{max-width:440px;margin:30px auto}\n#pc-root .pc-auth h2{font-size:1.7em}\n#pc-root .pc-soon{margin-top:18px;padding:12px 14px;border:1px solid var(--plum-l);border-radius:12px;background:var(--plum-l);color:var(--plum);font-size:.92em;line-height:1.5}\n#pc-root .pc-soon a{color:var(--plum);font-weight:700;text-decoration:underline}\n#pc-root .pc-lock{display:inline-block;background:var(--plum-l);color:var(--plum);border-radius:999px;padding:4px 12px;font-family:'Space Mono',monospace;font-size:.75em;margin-bottom:10px}\n\n/* client list */\n#pc-root .pc-clist{max-height:520px;overflow:auto;margin-top:10px}\n#pc-root .pc-citem{display:block;width:100%;text-align:left;border:2px solid transparent;background:none;border-radius:12px;padding:10px 12px;cursor:pointer}\n#pc-root .pc-citem:hover{background:var(--cream)}\n#pc-root .pc-citem.is-on{border-color:var(--teal);background:var(--teal-l)}\n#pc-root .pc-citem b{display:block}\n#pc-root .pc-citem small{color:var(--soft)}\n#pc-root .pc-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin:12px 0}\n#pc-root .pc-fact{background:var(--cream);border-radius:12px;padding:10px 12px}\n#pc-root .pc-fact small{display:block;font-family:'Space Mono',monospace;font-size:.72em;color:var(--soft);text-transform:uppercase;letter-spacing:.08em}\n#pc-root .pc-sess{border-left:4px solid var(--gold);background:var(--gold-l);border-radius:0 12px 12px 0;padding:10px 14px;margin-bottom:10px}\n#pc-root .pc-sess h4{margin:0}\n#pc-root .pc-rep{display:flex;gap:10px;align-items:center;border:2px solid var(--line);border-radius:12px;padding:10px 12px;margin-bottom:8px}\n#pc-root .pc-empty{text-align:center;padding:40px 20px;color:var(--soft)}\n\n/* build */\n#pc-root .pc-themes{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 4px}\n#pc-root .pc-theme{border:2px solid var(--plum);background:var(--plum-l);color:#4a2a8a;border-radius:999px;padding:7px 14px;cursor:pointer;font-weight:700;animation:pcPop .45s cubic-bezier(.2,1.6,.4,1) both}\n#pc-root .pc-theme.is-in{background:var(--plum);color:#fff}\n@keyframes pcPop{0%{transform:scale(.4);opacity:0}100%{transform:scale(1);opacity:1}}\n#pc-root .pc-pop{position:fixed;inset:0;background:rgba(43,33,53,.45);display:flex;align-items:center;justify-content:center;z-index:99999;padding:16px}\n#pc-root .pc-pop-box{background:#fff;border-radius:18px;max-width:560px;width:100%;max-height:85vh;overflow:auto;padding:22px;border-top:8px solid var(--plum)}\n#pc-root .pc-group{margin-bottom:14px}\n#pc-root .pc-group h4{font-size:.95em;margin-bottom:6px;font-family:'Space Mono',monospace;text-transform:uppercase;letter-spacing:.08em;color:var(--soft)}\n#pc-root .pc-pick{display:flex;flex-wrap:wrap;gap:6px}\n#pc-root .pc-sec-btn{border:2px solid var(--line);background:#fff;border-radius:10px;padding:7px 11px;cursor:pointer;font-weight:600}\n#pc-root .pc-sec-btn.is-in{border-color:var(--teal);background:var(--teal);color:#fff}\n#pc-root .pc-sec-btn.is-off{opacity:.4;cursor:not-allowed;text-decoration:line-through}\n#pc-root .pc-switch{display:flex;background:var(--cream);border:2px solid var(--line);border-radius:12px;padding:3px;gap:3px}\n#pc-root .pc-switch button{border:none;background:none;padding:8px 12px;border-radius:9px;cursor:pointer;font-weight:700;color:var(--soft)}\n#pc-root .pc-switch button.is-on{background:#fff;color:var(--ink);box-shadow:0 1px 4px rgba(0,0,0,.12)}\n#pc-root .pc-switch.arch button.is-on{background:var(--plum);color:#fff}\n#pc-root .pc-preview{background:#fff;border:2px solid var(--line);border-radius:16px;padding:26px 30px;max-height:900px;overflow:auto}\n\n/* report */\n#pc-root .pc-r-sec,.pcr .pc-r-sec{padding:6px 0 18px;border-bottom:2px dashed var(--line);margin-bottom:18px}\n.pc-r-sec header{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px;margin-bottom:8px}\n.pc-r-sec h3{font-size:1.35em;margin:0}\n.pc-r-sec h3 small{display:block;font-family:'Space Mono',monospace;font-size:.55em;color:var(--soft);font-weight:400;margin-top:3px}\n.pc-r-sec h4{font-size:1.05em;margin:.6em 0 .3em}\n.pc-deg{font-family:'Space Mono',monospace;font-size:.8em;color:var(--teal)}\n.pc-flag{font-family:'Space Mono',monospace;font-size:.68em;border-radius:999px;padding:2px 9px;text-transform:uppercase;letter-spacing:.06em}\n.pc-flag-proof{background:var(--teal-l);color:#075e57}\n.pc-flag-time{background:var(--gold-l);color:#7a5200}\n.pc-r-lab{font-family:'Space Mono',monospace;font-size:.72em;text-transform:uppercase;letter-spacing:.08em;color:var(--terra);margin-top:6px}\n.pc-r-field p{margin:.15em 0 .55em}\n.pc-r-arch{background:var(--plum-l);border-left:4px solid var(--plum);border-radius:0 12px 12px 0;padding:10px 14px;margin:6px 0 10px}\n.pc-r-arch div{margin:2px 0}\n.pc-r-arch-q{font-size:1.08em;color:#4a2a8a}\n.pc-chips{margin-top:6px}\n.pc-chip{display:inline-block;background:#fff;border:1px solid var(--plum);color:#4a2a8a;border-radius:999px;padding:1px 9px;margin:2px 4px 2px 0;font-size:.82em}\n.pc-note{background:var(--gold-l);border-radius:10px;padding:8px 12px;font-size:.95em}\n.pc-orb{font-family:'Space Mono',monospace;font-size:.7em;color:var(--soft);font-weight:400}\n.pc-big3{display:grid;grid-template-columns:150px 1fr;gap:12px;padding:10px 0;border-bottom:1px solid var(--line)}\n.pc-big3-l{font-family:'Space Mono',monospace;font-size:.78em;text-transform:uppercase;color:var(--teal)}\n.pc-bars{margin:6px 0 12px}\n.pc-bar-row{display:grid;grid-template-columns:70px 1fr 30px;align-items:center;gap:8px;margin:4px 0}\n.pc-bar{height:14px;border-radius:7px;display:block}\n.pc-el-fire{background:var(--terra)}.pc-el-earth{background:#5a9a3c}.pc-el-air{background:var(--gold)}.pc-el-water{background:var(--teal)}\n.pc-cast{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}\n.pc-cast-card{background:var(--cream);border-radius:12px;padding:10px 12px;border:1px solid var(--line)}\n.pc-cast-card b{display:block;font-family:'Fraunces',serif}\n.pc-cast-card small{font-family:'Space Mono',monospace;font-size:.72em;color:var(--soft)}\n.pc-cast-card p{font-style:italic;font-size:.9em;margin:.3em 0 0}\n.pc-cast-g{font-size:1.4em;color:var(--plum);font-family:'Segoe UI Symbol','Apple Symbols',sans-serif}\n.pc-table{width:100%;border-collapse:collapse;font-size:.93em}\n.pc-table th,.pc-table td{border-bottom:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:top}\n.pc-table th{font-family:'Space Mono',monospace;font-size:.75em;text-transform:uppercase;color:var(--soft)}\n.pc-num{display:flex;gap:12px;align-items:flex-start;margin-bottom:10px}\n.pc-num-n{flex:none;width:2.4em;height:2.4em;border-radius:50%;background:var(--gold);color:#fff;font-family:'Fraunces',serif;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:1.2em}\n.pc-kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}\n.pc-kv div{background:var(--cream);border-radius:10px;padding:8px 10px}\n.pc-kv b{display:block;font-family:'Space Mono',monospace;font-size:.72em;text-transform:uppercase;color:var(--teal)}\n.pc-centers{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px}\n.pc-center{border-radius:12px;padding:9px 11px;border:2px solid var(--line)}\n.pc-center span{font-family:'Space Mono',monospace;font-size:.7em;text-transform:uppercase}\n.pc-center small{display:block;color:var(--soft)}\n.pc-center p{font-size:.9em;margin:.3em 0 0}\n.pc-center.is-def{background:var(--gold-l);border-color:var(--gold)}\n.pc-tcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:10px}\n.pc-tcard{border:2px solid var(--plum);border-radius:14px;padding:12px;text-align:center;background:linear-gradient(180deg,var(--plum-l),#fff)}\n.pc-tcard-n{font-family:'Fraunces',serif;font-size:1.6em;color:var(--plum);font-weight:700}\n.pc-tcard b{display:block;font-family:'Fraunces',serif}\n.pc-tcard small{display:block;font-family:'Space Mono',monospace;font-size:.7em;color:var(--soft)}\n.pc-tcard p{font-size:.9em;margin:.4em 0 0}\n.pc-r-asp,.pc-r-theme{margin-bottom:10px}\n#pc-root .pc-toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--ink);color:#fff;border-radius:12px;padding:12px 18px;z-index:99999;font-weight:600}\n.pc-tree-wrap{display:grid;grid-template-columns:minmax(220px,300px) 1fr;gap:20px;align-items:start}\n@media (max-width:700px){.pc-tree-wrap{grid-template-columns:1fr}}\n.pc-tree-svg{width:100%;height:auto;display:block}\n.pc-lvl{font-family:'Space Mono',monospace;font-size:.62em;text-transform:uppercase;border-radius:999px;padding:2px 8px;vertical-align:middle;color:#fff}\n.pc-lvl-radiant{background:#c48a10}.pc-lvl-steady{background:var(--teal)}.pc-lvl-growing{background:var(--terra)}\n.pc-path{display:flex;gap:12px;align-items:flex-start;margin-bottom:12px;page-break-inside:avoid}\n.pc-path-n{flex:none;width:2.3em;height:2.3em;border-radius:12px;background:var(--plum-l);color:var(--plum);border:2px solid var(--plum);display:flex;align-items:center;justify-content:center;font-size:1.25em;font-weight:700}\n.pc-path h4{margin:0 0 .2em}\n.pc-mx-svg{width:100%;height:auto;display:block}\n#pc-root .pc-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px}\n#pc-root .pc-tile{border:none;border-radius:18px;padding:22px 18px;background:var(--teal);color:#fff;font-weight:700;font-size:1.1em;cursor:pointer;text-align:left;box-shadow:0 2px 10px rgba(0,0,0,.08)}\n#pc-root .pc-tile b{display:block;font-family:'Fraunces',serif;font-size:2.2em;line-height:1.1;margin-bottom:4px}\n#pc-root .pc-tile.alt{background:var(--terra)}#pc-root .pc-tile.plum{background:var(--plum)}\n#pc-root .pc-tile:hover{filter:brightness(1.06)}\n/* ---------- professional shell ---------- */\n#pc-root .pc-shell{display:grid;grid-template-columns:230px 1fr;min-height:640px}\n#pc-root .pc-side{background:#2b2135;color:#fff;display:flex;flex-direction:column;padding:18px 12px;gap:14px}\n#pc-root .pc-side-brand{display:flex;gap:10px;align-items:center;padding:4px 6px 14px;border-bottom:1px solid rgba(255,255,255,.14)}\n#pc-root .pc-side-brand b{display:block;font-family:'Fraunces',serif;font-size:1.02em;line-height:1.2;color:#fff}\n#pc-root .pc-side-brand small{color:#cbbfd6;font-size:.8em}\n#pc-root .pc-side-brand small.pc-who{display:block;margin-top:6px;color:#e9e2f0;font-size:.72em;line-height:1.35;word-break:break-all;opacity:.9}\n#pc-root .pc-logo{flex:none;width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-weight:700;font-size:1.3em;color:#fff}\n#pc-root .pc-side nav{display:flex;flex-direction:column;gap:4px}\n#pc-root .pc-nav{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:none;border:none;color:#e9e2f0;padding:10px 12px;border-radius:10px;cursor:pointer;font-weight:600}\n#pc-root .pc-nav span{width:1.4em;text-align:center;opacity:.9}\n#pc-root .pc-nav em{margin-left:auto;font-style:normal;font-size:.75em;background:rgba(255,255,255,.14);border-radius:999px;padding:1px 8px}\n#pc-root .pc-nav:hover{background:rgba(255,255,255,.08)}\n#pc-root .pc-nav.is-on{background:#fff;color:#2b2135}\n#pc-root .pc-nav:disabled{opacity:.35;cursor:not-allowed}\n#pc-root .pc-side-foot{margin-top:auto;border-top:1px solid rgba(255,255,255,.14);padding-top:10px}\n#pc-root .pc-side-foot small{display:block;color:#9f93ab;font-size:.72em;padding:6px 12px 0;font-family:'Space Mono',monospace}\n#pc-root .pc-main{min-width:0;background:var(--cream)}\n@media (max-width:860px){#pc-root .pc-shell{grid-template-columns:1fr}#pc-root .pc-side nav{flex-direction:row;flex-wrap:wrap}#pc-root .pc-side-foot{margin-top:0}}\n#pc-root .pc-rcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}\n#pc-root .pc-rcard{position:relative;text-align:left;background:#fff;border:2px solid var(--line);border-radius:14px;padding:12px;cursor:pointer;display:flex;flex-direction:column;gap:4px;transition:transform .12s}\n#pc-root .pc-rcard:hover{transform:translateY(-2px);border-color:var(--rc)}\n#pc-root .pc-rcard b{font-family:'Fraunces',serif;font-size:1em;line-height:1.2}\n#pc-root .pc-rcard small{color:var(--soft);font-size:.8em;line-height:1.35}\n#pc-root .pc-rcard-i{width:34px;height:34px;border-radius:10px;background:var(--rc);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.1em}\n#pc-root .pc-rcard.is-on{border-color:var(--rc);box-shadow:0 0 0 3px color-mix(in srgb,var(--rc) 22%,transparent);background:color-mix(in srgb,var(--rc) 7%,#fff)}\n#pc-root .pc-rcard-n{position:absolute;top:10px;right:10px;width:24px;height:24px;border-radius:50%;background:var(--rc);color:#fff;font-weight:700;font-size:.8em;display:flex;align-items:center;justify-content:center}\n#pc-root .pc-optrow{display:flex;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap}\n#pc-root .pc-optrow>span{width:60px;font-weight:700;font-size:.9em}\n#pc-root .pc-clienthead{display:flex;align-items:center;gap:12px;margin-bottom:16px}\n#pc-root .pc-stick{position:sticky;top:10px;z-index:2;margin-bottom:12px}\n#pc-root .pc-stepcard{display:flex;gap:14px;align-items:flex-start}\n#pc-root .pc-stepnum{flex:none;width:38px;height:38px;border-radius:50%;background:var(--teal);color:#fff;font-family:'Fraunces',serif;font-weight:700;font-size:1.2em;display:flex;align-items:center;justify-content:center}\n#pc-root .pc-stepnum.alt{background:var(--terra)}\n#pc-root .pc-swatch{width:34px;height:34px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 2px var(--line);cursor:pointer}\n#pc-root .pc-swatch.is-on{box-shadow:0 0 0 3px var(--ink)}\n.pc-toc{list-style:none;padding:0;margin:8px 0 0;display:grid;gap:6px}\n.pc-toc li{display:flex;align-items:center;gap:8px;font-family:'Fraunces',serif}\n.pc-toc-i{width:24px;height:24px;border-radius:7px;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:.8em}\n.pc-toc-box{background:var(--cream);border:2px solid var(--line);border-radius:14px;padding:14px 16px;margin-bottom:18px}\n.pc-chapter{margin-bottom:10px}\n.pc-chapter-head{display:flex;gap:14px;align-items:center;border-left:6px solid;padding:10px 14px;margin:6px 0 16px;background:var(--cream);border-radius:0 14px 14px 0}\n.pc-chapter-head h2{margin:0;font-size:1.5em}\n.pc-chapter-head p{margin:2px 0 0;color:var(--soft);font-size:.92em}\n.pc-chapter-i{flex:none;width:44px;height:44px;border-radius:12px;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.3em}\n.pc-chapter-k{font-family:'Space Mono',monospace;font-size:.7em;text-transform:uppercase;letter-spacing:.1em;color:var(--soft)}\n.pc-cover{position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:center;text-align:center;border:2px solid var(--line);border-radius:20px;padding:46px 40px;background:#fffaf1}\n.pc-cover-band{position:absolute;left:0;right:0;top:0;height:14px;background:var(--brand)}\n.pc-cover h1{font-family:'Fraunces',serif;font-size:2.1em;margin:.3em 0;color:#2b2135}\n.pc-cover-k{font-family:'Space Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:var(--brand);font-size:.75em;font-weight:700}\n.pc-cover-who{font-size:1.15em}\n.pc-cover-by{margin-top:26px;color:#6b5f73;font-size:.9em}\n.pc-cover-toc{margin:22px auto 0;text-align:left;display:inline-block}\n.pc-cover-mini{padding:30px 22px}\n.pc-cover-mini h1{font-size:1.5em}\n/* ---------- wheel ---------- */\n.pc-wheel-wrap{display:grid;grid-template-columns:minmax(260px,1.3fr) 1fr;gap:20px;align-items:start}\n@media (max-width:760px){.pc-wheel-wrap{grid-template-columns:1fr}}\n.pc-wheel{width:100%;height:auto;display:block}\n.pc-pos td{font-size:.9em;padding:4px 6px}\n/* ---------- AIA attribution ---------- */\n.pc-powered{display:flex;gap:12px;align-items:center;border-top:2px solid var(--line);margin-top:22px;padding-top:14px;page-break-inside:avoid}\n.pc-powered img{height:40px;width:auto;border-radius:8px}\n.pc-powered b{display:block;font-family:'Fraunces',serif;font-size:.95em}\n.pc-powered span{display:block;color:var(--soft);font-size:.78em}\n.pc-cover-aia{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:22px;font-family:'Space Mono',monospace;font-size:.72em;color:#6b5f73;letter-spacing:.06em;text-transform:uppercase}\n.pc-cover-aia img{height:30px;width:auto;border-radius:6px}\n/* ---------- design pickers ---------- */\n#pc-root .pc-designs{display:flex;gap:8px;flex-wrap:wrap}\n#pc-root .pc-dchip{display:flex;align-items:center;gap:7px;border:2px solid var(--line);background:#fff;border-radius:10px;padding:6px 10px;cursor:pointer;font-weight:600;font-size:.88em}\n#pc-root .pc-dchip i{width:22px;height:22px;border-radius:6px;display:block}\n#pc-root .pc-dchip-classic i{background:linear-gradient(135deg,#fffaf1 50%,#e8a923 50%);border:1px solid #d8c9b0}\n#pc-root .pc-dchip-modern i{background:linear-gradient(135deg,#ffffff 50%,#2b2135 50%);border:1px solid #ccc}\n#pc-root .pc-dchip-starlight i{background:radial-gradient(circle at 30% 30%,#fff 1px,transparent 2px),radial-gradient(circle at 70% 60%,#fff 1px,transparent 2px),#2b2135}\n#pc-root .pc-dchip.is-on{border-color:var(--ink);box-shadow:0 0 0 2px var(--ink)}\n/* ---------- design: Modern Clean ---------- */\n.pc-d-modern{font-family:'DM Sans','Helvetica Neue',Arial,sans-serif}\n.pc-d-modern h1,.pc-d-modern h2,.pc-d-modern h3,.pc-d-modern h4,.pc-d-modern .pc-cast-card b,.pc-d-modern .pc-tcard b{font-family:'DM Sans','Helvetica Neue',Arial,sans-serif!important;font-weight:700;letter-spacing:-.01em}\n.pc-d-modern .pc-r-lab{color:var(--brand)}\n.pc-d-modern .pc-r-sec{border-bottom:1px solid #e6e6ea}\n.pc-d-modern .pc-chapter-head{background:#fff;border-left-width:0;border-bottom:4px solid;border-radius:0;padding:10px 0}\n.pc-d-modern .pc-chapter-i{border-radius:50%}\n.pc-d-modern .pc-r-arch{background:#f4f4f7;border-left-color:var(--brand)}\n.pc-d-modern .pc-note{background:#f4f4f7}\n.pc-d-modern .pc-toc-box,.pc-d-modern .pc-kv div,.pc-d-modern .pc-cast-card,.pc-d-modern .pc-big3{background:#fafafb}\n.pc-d-modern .pc-cover{background:#fff;border:1px solid #e6e6ea;text-align:left;padding:60px 48px}\n.pc-d-modern .pc-cover-band{height:auto;top:0;bottom:auto;left:0;width:14px;right:auto;height:100%}\n.pc-d-modern .pc-cover h1{font-size:2.4em}\n.pc-d-modern .pc-cover-aia{justify-content:flex-start}\n.pc-d-modern .pc-cover-toc{margin-left:0}\n/* ---------- design: Starlight ---------- */\n.pc-d-starlight h1,.pc-d-starlight h2,.pc-d-starlight h3{font-family:'Cormorant Garamond','Fraunces',Georgia,serif!important;font-weight:700}\n.pc-d-starlight h3{font-size:1.55em;color:#4a2a8a}\n.pc-d-starlight .pc-r-lab{color:#b07d12}\n.pc-d-starlight .pc-chapter-head{background:radial-gradient(circle at 12% 30%,rgba(255,255,255,.9) 1px,transparent 2px),radial-gradient(circle at 70% 70%,rgba(255,255,255,.7) 1px,transparent 2px),radial-gradient(circle at 88% 20%,rgba(255,255,255,.8) 1px,transparent 2px),#2b2135;color:#f3e6c4;border-left-color:#e8a923!important;border-radius:16px}\n.pc-d-starlight .pc-chapter-head h2{color:#f6d98b}\n.pc-d-starlight .pc-chapter-head p,.pc-d-starlight .pc-chapter-k{color:#d8cbe6}\n.pc-d-starlight .pc-r-sec{border-bottom:1px solid #e3d6f2}\n.pc-d-starlight .pc-cover{background:radial-gradient(circle at 15% 20%,#fff 1px,transparent 2px),radial-gradient(circle at 80% 30%,#fff 1.2px,transparent 2.4px),radial-gradient(circle at 40% 75%,#fff 1px,transparent 2px),radial-gradient(circle at 65% 55%,rgba(255,255,255,.7) 1px,transparent 2px),radial-gradient(circle at 90% 85%,#fff 1px,transparent 2px),linear-gradient(160deg,#2b2135,#3d2a5c);border:none;color:#efe6ff}\n.pc-d-starlight .pc-cover h1{color:#f6d98b}\n.pc-d-starlight .pc-cover-k{color:#f6d98b}\n.pc-d-starlight .pc-cover-by,.pc-d-starlight .pc-cover-aia{color:#d8cbe6}\n.pc-d-starlight .pc-cover-band{background:#e8a923}\n.pc-d-starlight .pc-toc li{color:inherit}\n#pc-root .pc-libfirst{display:flex;gap:16px;align-items:flex-start;border-color:var(--terra);background:var(--terra-l);margin-bottom:16px}\n#pc-root .pc-libfirst ol{margin:0 0 12px 18px;padding:0}\n#pc-root .pc-libfirst li{margin:4px 0}\n#pc-root .pc-radio{display:flex;gap:10px;align-items:flex-start;border:2px solid var(--line);border-radius:12px;padding:10px 12px;margin-bottom:8px;cursor:pointer;background:#fff}\n#pc-root .pc-radio input{margin-top:4px;width:18px;height:18px;accent-color:var(--teal)}\n#pc-root .pc-radio small{color:var(--soft)}\n#pc-root .pc-ownbox{border-left:4px solid var(--teal);padding:6px 0 4px 12px;margin-top:6px}\n.pc-src{font-family:'Space Mono',monospace;font-size:.62em;border-radius:999px;padding:2px 8px;text-transform:uppercase;letter-spacing:.05em}\n.pc-src-own{background:var(--teal);color:#fff}\n.pc-src-aia{background:var(--plum-l);color:#4a2a8a}\n/* AIA Standard fonts for the Classic design */\n.pc-d-classic{font-family:'EB Garamond','Lora',Georgia,serif}\n.pc-d-classic h1,.pc-d-classic h2,.pc-d-classic h3,.pc-d-classic .pc-cast-card b,.pc-d-classic .pc-tcard b{font-family:'Cinzel','Fraunces',Georgia,serif!important;letter-spacing:.02em}\n.pc-d-classic h4{font-family:'EB Garamond','Fraunces',Georgia,serif;font-size:1.12em}\n/* ---------- reading board ---------- */\n#pc-root .pc-rchips{display:flex;flex-wrap:wrap;gap:8px}\n#pc-root .pc-rchip{display:flex;align-items:center;gap:8px;border:2px solid var(--line);background:#fff;border-radius:999px;padding:6px 14px 6px 6px;cursor:pointer;font-weight:700;font-size:.92em}\n#pc-root .pc-rchip b{color:var(--rc)}\n#pc-root .pc-rchip.is-on{border-color:var(--rc);background:color-mix(in srgb,var(--rc) 10%,#fff)}\n#pc-root .pc-rchip-i{width:28px;height:28px;border-radius:50%;background:var(--rc);color:#fff;display:inline-flex;align-items:center;justify-content:center;flex:none}\n#pc-root .pc-toolbar{display:flex;flex-direction:column;gap:10px}\n#pc-root .pc-bar-row{display:flex;gap:14px;align-items:center;flex-wrap:wrap}\n#pc-root .pc-toolbar .pc-optrow{margin:0}\n#pc-root .pc-count{font-family:'Space Mono',monospace;font-size:.85em;color:var(--soft)}\n#pc-root .pc-compare{display:flex;flex-direction:column;gap:4px;font-weight:600;font-size:.85em}\n#pc-root .pc-compare select{min-width:200px}\n#pc-root .pc-board{display:flex;flex-direction:column;gap:18px;margin:16px 0}\n#pc-root .pc-bhead{display:flex;align-items:center;gap:12px;padding:0 4px 8px;border-bottom:3px solid var(--rc);margin-bottom:12px}\n#pc-root .pc-bhead h3{margin:0}\n#pc-root .pc-bhead small{color:var(--soft)}\n#pc-root .pc-bhead .pc-rchip-i{width:36px;height:36px;font-size:1.1em}\n#pc-root .pc-bcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}\n#pc-root .pc-bcard{position:relative;background:#fff;border:2px solid var(--line);border-top:6px solid var(--rc);border-radius:14px;padding:12px 14px 12px;display:flex;flex-direction:column;gap:4px;transition:transform .12s,box-shadow .12s}\n#pc-root .pc-bcard:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(43,33,53,.08)}\n#pc-root .pc-bcard.is-in{border-color:color-mix(in srgb,var(--rc) 55%,#fff);border-top-color:var(--rc)}\n#pc-root .pc-bcard.is-out{opacity:.62;background:#faf7f2}\n#pc-root .pc-bcard.is-na{opacity:.5;background:#f6f3ee}\n#pc-root .pc-bcard-k{font-family:'Space Mono',monospace;font-size:.68em;text-transform:uppercase;letter-spacing:.08em;color:var(--rc)}\n#pc-root .pc-bcard-t{font-family:'Fraunces',serif;font-weight:700;font-size:1.02em;line-height:1.25;padding-right:30px}\n#pc-root .pc-bcard-d{font-family:'Space Mono',monospace;font-size:.72em;color:var(--soft)}\n#pc-root .pc-bcard p{font-size:.86em;color:#4a4052;margin:4px 0 6px;line-height:1.45}\n#pc-root .pc-bcard .pc-link{align-self:flex-start;margin-top:auto;font-size:.88em}\n#pc-root .pc-bcheck{position:absolute;top:10px;right:10px;width:28px;height:28px;border-radius:50%;border:2px solid var(--rc);background:#fff;color:var(--rc);font-weight:700;cursor:pointer;line-height:1}\n#pc-root .pc-bcard.is-in .pc-bcheck{background:var(--rc);color:#fff}\n#pc-root .pc-pop-wide{max-width:900px}\n#pc-root .pc-docprev{max-height:none}\n";document.head.appendChild(st);}})();
var PC_ARCH = {"CAST": {"Sun": {"archetype": "The Sovereign", "question": "Who am I becoming?", "domain": "identity, vitality, the thing you are here to shine", "light": "wholeness, warmth, the courage to be seen as yourself", "shadow": "performing a self instead of inhabiting one"}, "Moon": {"archetype": "The Keeper", "question": "What do I need in order to feel safe?", "domain": "instinct, memory, comfort, the private inner weather", "light": "deep attunement, the ability to hold and be held", "shadow": "mistaking familiarity for safety"}, "Mercury": {"archetype": "The Messenger", "question": "How do I make sense of things?", "domain": "mind, language, learning, exchange", "light": "clarity, curiosity, the gift of making things understandable", "shadow": "thinking about it as a substitute for living it"}, "Venus": {"archetype": "The Lover", "question": "What is worth having, and worth keeping?", "domain": "value, beauty, attraction, what you move toward", "light": "genuine delight, generous taste, real intimacy", "shadow": "earning affection instead of receiving it"}, "Mars": {"archetype": "The Warrior", "question": "What will I fight for?", "domain": "drive, courage, appetite, the will to act", "light": "clean effort, honest wanting, protective strength", "shadow": "force where patience was needed, or stillness where force was"}, "Jupiter": {"archetype": "The Explorer", "question": "How far can I go?", "domain": "expansion, meaning, faith, the appetite for more", "light": "generosity, perspective, contagious enthusiasm", "shadow": "more as an escape from enough"}, "Saturn": {"archetype": "The Architect", "question": "What am I responsible for?", "domain": "structure, limit, mastery, the long build", "light": "durable work, real authority, the patience to finish", "shadow": "the blueprint that never gets built because it isn't perfect"}, "Uranus": {"archetype": "The Rebel", "question": "What must be freed?", "domain": "awakening, disruption, the sudden turn", "light": "originality, honesty, the nerve to leave what doesn't fit", "shadow": "breaking things to feel free rather than to become free"}, "Neptune": {"archetype": "The Mystic", "question": "What am I longing toward?", "domain": "imagination, longing, dissolution, the unseen", "light": "compassion, artistry, access to what can't be measured", "shadow": "the fog that protects you from having to choose"}, "Pluto": {"archetype": "The Alchemist", "question": "What must end so that I can grow?", "domain": "power, depth, buried material, transformation", "light": "regenerative strength, the courage to look directly at it", "shadow": "control disguised as depth"}, "Chiron": {"archetype": "The Wounded Guide", "question": "Where does my pain become my gift?", "domain": "the tender place, and the teaching that grows from it", "light": "hard-won compassion, the ability to reach people others can't", "shadow": "tending everyone else's version of your own wound"}, "North Node": {"archetype": "The Frontier", "question": "Where am I being asked to go?", "domain": "the unfamiliar direction that grows you", "light": "expansion into what you are not yet fluent in", "shadow": "waiting to feel ready before you go"}, "South Node": {"archetype": "The Homeland", "question": "What am I already fluent in?", "domain": "the old skill, so practiced it feels like nothing", "light": "a genuine gift you can lean on and give away", "shadow": "retreating into what is easy and calling it your nature"}}, "SIGN_EPITHET": {"Aries": "Blazing", "Taurus": "Rooted", "Gemini": "Quicksilver", "Cancer": "Shell-Armored", "Leo": "Radiant", "Virgo": "Fine-Tuned", "Libra": "Even-Handed", "Scorpio": "Deepwater", "Sagittarius": "Far-Roaming", "Capricorn": "Summit-Bound", "Aquarius": "Signal-Sending", "Pisces": "Fog-Walking"}, "SIGN_STYLE": {"Aries": "directly, immediately, and without waiting for permission", "Taurus": "slowly, sensually, and only once it feels solid", "Gemini": "quickly, curiously, and in more than one direction at once", "Cancer": "protectively, indirectly, and through what it cares about", "Leo": "warmly, visibly, and with the whole heart on display", "Virgo": "precisely, usefully, and by refining the details", "Libra": "relationally, gracefully, and by weighing both sides", "Scorpio": "intensely, privately, and all the way to the bottom", "Sagittarius": "expansively, honestly, and by going further out", "Capricorn": "patiently, structurally, and with the long view in mind", "Aquarius": "unusually, independently, and with the whole group in view", "Pisces": "permeably, imaginatively, and without hard edges"}, "TERRAIN": {"Fire": {"name": "The Wildlands", "gift": "you generate your own heat and you move before you are certain", "void": "The Firekeeper Without Fire. Spontaneous combustion is not issued to you. You choose your spark deliberately, and you build the hearth that holds it for everyone else. Different job, arguably a better one."}, "Earth": {"name": "The Bedrock", "gift": "you want it real, usable, and able to hold weight", "void": "The Untethered. Form does not come naturally, so you get to invent your own. The invitation is not discipline for its own sake. It is finding the one container that actually fits you, rather than borrowing someone else's."}, "Air": {"name": "The Open Sky", "gift": "you think in connections and you need room to move between ideas", "void": "The One Who Knows Without Explaining. Understanding arrives whole rather than in sentences. Your growth edge is translation: trusting that putting it into words doesn't flatten it."}, "Water": {"name": "The Deep", "gift": "you read the room before anyone speaks and you feel your way forward", "void": "The Clear-Eyed. You are not swamped by atmosphere, which makes you steady when others are not. The practice is remembering that a feeling doesn't have to be justified to be real."}}, "PACE": {"Cardinal": ["The Starter", "you begin things; the opening move is yours"], "Fixed": ["The Holder", "you sustain things; you stay when others leave"], "Mutable": ["The Shapeshifter", "you adapt things; you change form to keep moving"]}, "HOUSE_STAGE": {"1": ["The Threshold", "how you arrive, and what people meet first"], "2": ["The Storehouse", "what you own, value, and can rely on"], "3": ["The Crossroads", "everyday talk, siblings, short journeys, learning"], "4": ["The Hearth", "home, lineage, the private root system"], "5": ["The Stage", "play, creation, romance, what you make for the joy of it"], "6": ["The Workshop", "daily craft, service, health, the repeating hours"], "7": ["The Mirror", "partnership, and who you become in close company"], "8": ["The Undercroft", "shared resources, intimacy, what is buried and shared"], "9": ["The Far Country", "belief, travel, higher study, the search for meaning"], "10": ["The Summit", "public life, vocation, what you are known for"], "11": ["The Gathering", "community, networks, the future you build with others"], "12": ["The Quiet Room", "solitude, the unconscious, retreat and release"]}, "DOMICILE": {"Sun": ["Leo"], "Moon": ["Cancer"], "Mercury": ["Gemini", "Virgo"], "Venus": ["Libra", "Taurus"], "Mars": ["Aries", "Scorpio"], "Jupiter": ["Pisces", "Sagittarius"], "Saturn": ["Aquarius", "Capricorn"], "Uranus": ["Aquarius"], "Neptune": ["Pisces"], "Pluto": ["Scorpio"]}, "EXALTATION": {"Sun": "Aries", "Moon": "Taurus", "Mercury": "Virgo", "Venus": "Pisces", "Mars": "Capricorn", "Jupiter": "Cancer", "Saturn": "Libra"}, "MODERN_RULER": {"Aries": "Mars", "Taurus": "Venus", "Gemini": "Mercury", "Cancer": "Moon", "Leo": "Sun", "Virgo": "Mercury", "Libra": "Venus", "Scorpio": "Pluto", "Sagittarius": "Jupiter", "Capricorn": "Saturn", "Aquarius": "Uranus", "Pisces": "Neptune"}};
/* ===== pc reference data (ES5). Starter text for HD / tarot / transits written in AIA growth voice; edit freely. ===== */
var PC_HD_ORDER = [41,19,13,49,30,55,37,63,22,36,25,17,21,51,42,3,27,24,2,23,8,20,16,35,45,12,15,52,39,53,62,56,31,33,7,4,29,59,40,64,47,6,46,18,48,57,32,50,28,44,1,43,14,34,9,5,26,11,10,58,38,54,61,60];
var PC_HD_CENTERS = {
  Head:[64,61,63], Ajna:[47,24,4,17,43,11], Throat:[62,23,56,35,12,45,33,8,31,20,16],
  G:[7,1,13,25,46,2,15,10], Heart:[21,40,26,51], Sacral:[34,5,14,29,59,9,3,42,27],
  'Solar Plexus':[36,22,37,6,49,55,30], Spleen:[48,57,44,50,32,28,18], Root:[53,60,52,19,39,41,58,38,54]
};
var PC_HD_CHANNELS = [[64,47],[61,24],[63,4],[17,62],[43,23],[11,56],[16,48],[20,57],[20,34],[20,10],[31,7],[8,1],[33,13],[45,21],[35,36],[12,22],[10,34],[10,57],[25,51],[46,29],[2,14],[15,5],[26,44],[40,37],[34,57],[59,6],[9,52],[3,60],[42,53],[27,50],[49,19],[55,39],[30,41],[32,54],[28,38],[18,58]];
var PC_HD_TYPES = {
  'Generator': {strategy:'Wait to respond', signature:'Satisfaction', notSelf:'Frustration',
    text:'Generators carry steady, renewable life force. Your energy works best when something in your world sparks a gut-level "yes" first, rather than forcing a plan from your head. When you follow what genuinely lights you up, you build mastery and feel deeply satisfied at the end of the day.',
    short:'You have steady, renewable energy. Let life bring you things to respond to, and follow your gut "yes."'},
  'Manifesting Generator': {strategy:'Wait to respond, then inform', signature:'Satisfaction and peace', notSelf:'Frustration and anger',
    text:'Manifesting Generators are multi-passionate and fast-moving. You often find shortcuts others miss, and skipping steps is part of your design. Respond to what lights you up, then let the people around you know what you are doing so your speed lands smoothly.',
    short:'You are fast and multi-passionate. Respond to what excites you, and give people a heads-up before you move.'},
  'Projector': {strategy:'Wait for the invitation', signature:'Success', notSelf:'Bitterness',
    text:'Projectors are natural guides who see how people and systems work. Your gift is focused insight, not nonstop output. Your wisdom lands best when you are recognized and invited in, and rest is part of the job, not a reward you have to earn.',
    short:'You are a natural guide. Your insight lands best when people invite it, and rest is part of your design.'},
  'Manifestor': {strategy:'Inform before acting', signature:'Peace', notSelf:'Anger',
    text:'Manifestors are initiators. You are built to start things and set change in motion. Telling the people affected before you act clears the path, reduces resistance, and leaves you with more freedom, not less.',
    short:'You are an initiator. Let people know before you act, and doors open more easily.'},
  'Reflector': {strategy:'Wait a lunar cycle for big decisions', signature:'Surprise', notSelf:'Disappointment',
    text:'Reflectors are rare mirrors of their environment. You sample the energy around you and show a community how healthy it is. The right places and people matter enormously, and giving big decisions about a month lets your clarity arrive.',
    short:'You mirror your surroundings. Choose your environment with care and give big decisions about a month.'}
};
var PC_HD_AUTH = {
  'Emotional': 'Clarity comes over time. Ride your emotional wave and decide once you feel calm and steady, not at the peak or the dip. "Let me sleep on it" is wisdom for you.',
  'Sacral': 'Your gut answers in the moment with an "uh-huh" or "uh-uh." Yes or no questions help you hear it. Trust the body\'s response over the mind\'s list of reasons.',
  'Splenic': 'Your knowing is quiet and instant, a one-time intuitive hit about what is healthy or safe. It speaks once and softly, so honoring it in the moment matters.',
  'Ego Manifested': 'Your willpower speaks through what you say. Listen to what comes out of your mouth about what you truly want and what you are willing to commit to.',
  'Ego Projected': 'Ask yourself what is in it for you and whether your heart wants it. Talking it through with someone you trust helps you hear your own will.',
  'Self-Projected': 'Talk it out. Hearing yourself speak to a trusted listener reveals your direction and what feels like a true expression of who you are.',
  'Mental (Sounding Board)': 'Your clarity comes through conversation and environment. Talk decisions over with trusted people in places that feel right, and listen for what you keep returning to.',
  'Lunar': 'Give important decisions a full Moon cycle (about 28 days). Notice how you feel about the choice across the month before you commit.'
};
var PC_HD_PROFILE_LINE = {
  1:'Investigator: needs a solid foundation of knowledge to feel secure',
  2:'Hermit: natural talent that flourishes with alone time until called out',
  3:'Martyr: learns by trial and error, discovering what works by trying',
  4:'Opportunist: thrives through friendships and its network',
  5:'Heretic: others project hopes onto you; you offer practical solutions',
  6:'Role Model: lives in three phases, maturing into wisdom by example'
};
var PC_HD_CENTER_TEXT = {
  Head:['Inspiration and mental pressure','You have a steady way of being inspired and asking questions.','You take in lots of inspiration from others. Not every question is yours to answer.'],
  Ajna:['Thinking and making sense of things','You process information in a consistent, reliable way.','Your mind is flexible and open. You do not have to be certain to be wise.'],
  Throat:['Communication and action','Your voice has a consistent way of speaking and acting.','Your expression is versatile. Timing your words lets them land beautifully.'],
  G:['Identity, love and direction','You have a steady sense of who you are and where you are headed.','Your identity is adaptable. The right places and people help you feel at home.'],
  Heart:['Willpower and self-worth','You have consistent willpower and can keep promises you choose with care.','You have nothing to prove. Your worth is not measured by effort.'],
  Sacral:['Life force and work energy','You carry sustainable energy for work you love.','You do not have endless energy. Knowing when enough is enough is your gift.'],
  'Solar Plexus':['Emotions and feelings','You move through emotional waves. Patience brings clarity.','You feel others\' emotions deeply. Not every feeling in the room is yours.'],
  Spleen:['Intuition, health and safety','You have a steady intuitive radar for what is healthy.','You may hold on to what feels familiar. Notice what you are ready to release.'],
  Root:['Pressure and drive','You handle pressure in a consistent, steady way.','You feel outside pressure strongly. You do not have to rush to relieve it.']
};

var PC_TAROT = [
  ['The Fool','Fresh starts, trust and the courage to leap into the unknown.'],
  ['The Magician','Turning ideas into reality. You have the tools you need.'],
  ['The High Priestess','Inner knowing, intuition and the wisdom of quiet listening.'],
  ['The Empress','Creativity, abundance, nurturing and enjoying life through the senses.'],
  ['The Emperor','Structure, leadership and building something stable that lasts.'],
  ['The Hierophant','Learning, teaching, tradition and finding meaningful mentors.'],
  ['The Lovers','Values-based choices, connection and alignment of heart and mind.'],
  ['The Chariot','Willpower, focus and steering competing forces toward a goal.'],
  ['Strength','Gentle courage, patience and the power of a soft, steady heart.'],
  ['The Hermit','Inner guidance, reflection and the wisdom you find in solitude.'],
  ['Wheel of Fortune','Cycles, turning points and learning to move with change.'],
  ['Justice','Truth, fairness, accountability and clear, honest decisions.'],
  ['The Hanged Man','New perspective, pause and surrender that unlocks insight.'],
  ['Death','Endings that make room for beginnings. Transformation and renewal.'],
  ['Temperance','Balance, patience, healing and blending opposites into harmony.'],
  ['The Devil','Noticing what binds you so you can choose freedom.'],
  ['The Tower','Sudden clarity that clears away what was not built to last.'],
  ['The Star','Hope, healing and reconnecting with your sense of purpose.'],
  ['The Moon','Dreams, intuition and finding your way through uncertainty.'],
  ['The Sun','Joy, vitality, confidence and being seen as your true self.'],
  ['Judgement','Awakening, a calling and rising into a new version of yourself.'],
  ['The World','Completion, wholeness and celebrating how far you have come.']
];
var PC_SIGN_TAROT = {Aries:4,Taurus:5,Gemini:6,Cancer:7,Leo:8,Virgo:9,Libra:11,Scorpio:13,Sagittarius:14,Capricorn:15,Aquarius:17,Pisces:18};
var PC_PLANET_TAROT = {Sun:19,Moon:2,Mercury:1,Venus:3,Mars:16,Jupiter:10,Saturn:21,Uranus:0,Neptune:12,Pluto:20};

var PC_TRANSIT_THEME = {
  Jupiter:'growth, opportunity and widening your world',
  Saturn:'structure, responsibility and building something solid',
  Uranus:'change, freedom and surprising new directions',
  Neptune:'dreams, intuition and softening old boundaries',
  Pluto:'deep transformation and reclaiming personal power'
};
var PC_ASPECT_PLAIN = {
  conjunction:'joins forces with', sextile:'opens a door for', square:'challenges and motivates',
  trine:'flows easily with', opposition:'asks for balance with'
};
var PC_NUMBER_WORD = {1:'leadership and independence',2:'partnership and sensitivity',3:'creativity and expression',4:'stability and hard work',5:'freedom and adventure',6:'care, home and responsibility',7:'wisdom, study and inner depth',8:'power, ambition and abundance',9:'compassion and completion',11:'intuition and inspiration',22:'master building and big vision',33:'master teaching and healing'};

/* ===== pc astro engine (ES5) ===== */
var PC_SIGNS = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
var PC_GLYPH = {Sun:'☉',Moon:'☽',Mercury:'☿',Venus:'♀',Mars:'♂',Jupiter:'♃',Saturn:'♄',Uranus:'♅',Neptune:'♆',Pluto:'♇','North Node':'☊','South Node':'☋',Lilith:'⚸',Chiron:'⚷',Ascendant:'AC',Midheaven:'MC'};
var PC_BODIES = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];

function pcNorm(x){ x = x % 360; return x < 0 ? x + 360 : x; }
function pcRad(d){ return d * Math.PI / 180; }
function pcDeg(r){ return r * 180 / Math.PI; }
function pcSignOf(lon){ return PC_SIGNS[Math.floor(pcNorm(lon) / 30)]; }
function pcFmtDeg(lon){
  var l = pcNorm(lon), inSign = l % 30, d = Math.floor(inSign), m = Math.floor((inSign - d) * 60);
  return d + '°' + (m < 10 ? '0' : '') + m + '′ ' + pcSignOf(l);
}
function pcSep(a, b){ var d = Math.abs(pcNorm(a) - pcNorm(b)); return d > 180 ? 360 - d : d; }

/* Wall-clock time in an IANA zone -> UTC Date. Iterates so DST edges resolve. */
function pcZoneOffsetMin(tz, date){
  try {
    var f = new Intl.DateTimeFormat('en-US', {timeZone: tz, hour12: false, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'});
    var parts = f.formatToParts(date), o = {};
    for (var i = 0; i < parts.length; i++) o[parts[i].type] = parts[i].value;
    var hr = +o.hour === 24 ? 0 : +o.hour;
    var asUTC = Date.UTC(+o.year, +o.month - 1, +o.day, hr, +o.minute, +o.second);
    return Math.round((asUTC - date.getTime()) / 60000);
  } catch (e) { return null; }
}
function pcLocalToUTC(y, mo, d, h, mi, tz, fallbackOffsetMin){
  var guess = new Date(Date.UTC(y, mo - 1, d, h, mi));
  var off = pcZoneOffsetMin(tz, guess);
  if (off === null) off = fallbackOffsetMin || 0;
  var t = new Date(guess.getTime() - off * 60000);
  var off2 = pcZoneOffsetMin(tz, t);
  if (off2 !== null && off2 !== off) t = new Date(guess.getTime() - off2 * 60000);
  return t;
}

function pcJulCent(date){ return (date.getTime() / 86400000 + 2440587.5 - 2451545.0) / 36525; }
function pcObliquity(date){ var T = pcJulCent(date); return 23.439291 - 0.0130042 * T - 1.64e-7 * T * T + 5.04e-7 * T * T * T; }

function pcBodyLon(name, date){
  var A = window.Astronomy;
  if (name === 'Moon') return pcNorm(A.EclipticGeoMoon(date).lon);
  if (name === 'Sun') return pcNorm(A.SunPosition(date).elon);
  return pcNorm(A.Ecliptic(A.GeoVector(A.Body[name], date, true)).elon);
}
function pcLunarArgs(date){
  var T = pcJulCent(date);
  return {
    T: T,
    D: pcNorm(297.8501921 + 445267.1114034 * T),
    M: pcNorm(357.5291092 + 35999.0502909 * T),
    Mp: pcNorm(134.9633964 + 477198.8675055 * T),
    F: pcNorm(93.2720950 + 483202.0175233 * T)
  };
}
function pcTrueNode(date){
  var a = pcLunarArgs(date), T = a.T;
  var om = 125.04452 - 1934.136261 * T + 0.0020708 * T * T + T * T * T / 450000;
  om += -1.4979 * Math.sin(pcRad(2 * (a.D - a.F))) - 0.15 * Math.sin(pcRad(a.M)) + 0.1226 * Math.sin(pcRad(2 * a.D)) + 0.1176 * Math.sin(pcRad(2 * a.F)) - 0.0801 * Math.sin(pcRad(2 * (a.Mp - a.F)));
  return pcNorm(om);
}
function pcLilith(date){
  var T = pcJulCent(date);
  return pcNorm(83.3532465 + 4069.0137287 * T - 0.01032 * T * T - T * T * T / 80053 + 180);
}

function pcAngles(date, lat, lon){
  var A = window.Astronomy;
  var lst = pcNorm(A.SiderealTime(date) * 15 + lon);
  var eps = pcRad(pcObliquity(date)), ramc = pcRad(lst), phi = pcRad(lat);
  var mc = pcNorm(pcDeg(Math.atan2(Math.sin(ramc), Math.cos(ramc) * Math.cos(eps))));
  var asc = pcNorm(pcDeg(Math.atan2(Math.cos(ramc), -(Math.sin(ramc) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps)))));
  return {asc: asc, mc: mc, ramc: lst, eps: pcObliquity(date)};
}
function pcRaToLon(raDeg, epsDeg){
  var ra = pcRad(raDeg), e = pcRad(epsDeg);
  return pcNorm(pcDeg(Math.atan2(Math.sin(ra), Math.cos(ra) * Math.cos(e))));
}
function pcPlacidus(ang, lat){
  if (Math.abs(lat) > 66) return null;
  var eps = ang.eps, phi = pcRad(lat);
  function cusp(f, below){
    var ra = ang.ramc + (below ? 180 : 0), lonE, dec, sda, i;
    for (i = 0; i < 40; i++) {
      lonE = pcRaToLon(ra, eps);
      dec = Math.asin(Math.sin(pcRad(eps)) * Math.sin(pcRad(lonE)));
      var x = -Math.tan(phi) * Math.tan(dec);
      if (x < -1 || x > 1) return null;
      sda = pcDeg(Math.acos(x));
      var next = below ? ang.ramc + 180 - f * (180 - sda) : ang.ramc + f * sda;
      if (Math.abs(pcNorm(next - ra + 180) - 180) < 1e-7) { ra = next; break; }
      ra = next;
    }
    return pcRaToLon(ra, eps);
  }
  var c11 = cusp(1/3, false), c12 = cusp(2/3, false), c2 = cusp(2/3, true), c3 = cusp(1/3, true);
  if (c11 === null || c12 === null || c2 === null || c3 === null) return null;
  var c = [ang.asc, c2, c3, pcNorm(ang.mc + 180), pcNorm(c11 + 180), pcNorm(c12 + 180), pcNorm(ang.asc + 180), pcNorm(c2 + 180), pcNorm(c3 + 180), ang.mc, c11, c12];
  return c;
}
function pcCusps(ang, lat, system){
  var c = [], i;
  if (system === 'P') { var p = pcPlacidus(ang, lat); if (p) return {cusps: p, system: 'P'}; system = 'E'; }
  if (system === 'W') { var s = Math.floor(ang.asc / 30) * 30; for (i = 0; i < 12; i++) c.push(pcNorm(s + 30 * i)); return {cusps: c, system: 'W'}; }
  for (i = 0; i < 12; i++) c.push(pcNorm(ang.asc + 30 * i));
  return {cusps: c, system: 'E'};
}
function pcHouseOf(lon, cusps){
  for (var i = 0; i < 12; i++) {
    var a = cusps[i], b = cusps[(i + 1) % 12], span = pcNorm(b - a), d = pcNorm(lon - a);
    if (d < span) return i + 1;
  }
  return 1;
}

var PC_ASPECTS = [
  {key:'conjunction', name:'Conjunction', angle:0, orb:8},
  {key:'sextile', name:'Sextile', angle:60, orb:5},
  {key:'square', name:'Square', angle:90, orb:7},
  {key:'trine', name:'Trine', angle:120, orb:7},
  {key:'opposition', name:'Opposition', angle:180, orb:8}
];

/* input: {y,mo,d,h,mi,timeKnown,lat,lon,tz,house:'E'|'W'|'P'} */
function pcCalcChart(inp){
  var known = !!inp.timeKnown;
  var h = known ? inp.h : 12, mi = known ? inp.mi : 0;
  var date = pcLocalToUTC(inp.y, inp.mo, inp.d, h, mi, inp.tz, inp.offsetMin);
  var chart = {date: date, timeKnown: known, bodies: {}, list: [], input: inp};
  var later = new Date(date.getTime() + 86400000);
  for (var i = 0; i < PC_BODIES.length; i++) {
    var n = PC_BODIES[i], lon = pcBodyLon(n, date), lon2 = pcBodyLon(n, later);
    var speed = pcNorm(lon2 - lon + 180) - 180;
    chart.bodies[n] = {name: n, lon: lon, sign: pcSignOf(lon), retro: n !== 'Sun' && n !== 'Moon' && speed < 0, speed: speed};
  }
  var nn = pcTrueNode(date);
  chart.bodies['North Node'] = {name:'North Node', lon: nn, sign: pcSignOf(nn)};
  chart.bodies['South Node'] = {name:'South Node', lon: pcNorm(nn + 180), sign: pcSignOf(nn + 180)};
  var li = pcLilith(date);
  chart.bodies.Lilith = {name:'Lilith', lon: li, sign: pcSignOf(li)};
  if (inp.chironLon !== undefined && inp.chironLon !== null) chart.bodies.Chiron = {name:'Chiron', lon: inp.chironLon, sign: pcSignOf(inp.chironLon)};

  if (!known) {
    /* Moon range across the whole birth day (local midnight to 23:59) */
    var d0 = pcLocalToUTC(inp.y, inp.mo, inp.d, 0, 0, inp.tz, inp.offsetMin), d1 = new Date(d0.getTime() + 86340000);
    var m0 = pcBodyLon('Moon', d0), m1 = pcBodyLon('Moon', d1);
    chart.moonRange = {from: m0, to: m1, fromSign: pcSignOf(m0), toSign: pcSignOf(m1), changes: pcSignOf(m0) !== pcSignOf(m1)};
  } else {
    var ang = pcAngles(date, inp.lat, inp.lon);
    var hs = pcCusps(ang, inp.lat, inp.house || 'E');
    chart.angles = ang; chart.cusps = hs.cusps; chart.houseSystem = hs.system;
    chart.bodies.Ascendant = {name:'Ascendant', lon: ang.asc, sign: pcSignOf(ang.asc)};
    chart.bodies.Midheaven = {name:'Midheaven', lon: ang.mc, sign: pcSignOf(ang.mc)};
    for (var k in chart.bodies) if (chart.bodies.hasOwnProperty(k)) chart.bodies[k].house = pcHouseOf(chart.bodies[k].lon, hs.cusps);
  }
  for (var k2 in chart.bodies) if (chart.bodies.hasOwnProperty(k2)) chart.list.push(chart.bodies[k2]);
  chart.aspects = pcFindAspects(chart);
  return chart;
}

function pcFindAspects(chart){
  var names = PC_BODIES.slice(0);
  if (chart.bodies.Chiron) names.push('Chiron');
  names.push('North Node');
  if (chart.timeKnown) { names.push('Ascendant'); names.push('Midheaven'); }
  var out = [];
  for (var i = 0; i < names.length; i++) for (var j = i + 1; j < names.length; j++) {
    var a = chart.bodies[names[i]], b = chart.bodies[names[j]];
    if ((a.name === 'Ascendant' && b.name === 'Midheaven')) continue;
    var sep = pcSep(a.lon, b.lon);
    for (var k = 0; k < PC_ASPECTS.length; k++) {
      var as = PC_ASPECTS[k], orb = as.orb;
      if (a.name === 'North Node' || b.name === 'North Node') orb = 3;
      if (!chart.timeKnown && (a.name === 'Moon' || b.name === 'Moon')) orb = Math.min(orb, 4);
      var diff = Math.abs(sep - as.angle);
      if (diff <= orb) out.push({a: a.name, b: b.name, key: as.key, name: as.name, orb: diff});
    }
  }
  out.sort(function(x, y){ return x.orb - y.orb; });
  return out;
}

/* Sun-arc search: the moment the Sun was `back` degrees behind its natal place (Human Design uses 88). */
function pcSunArcBack(date, back){
  var target = pcNorm(pcBodyLon('Sun', date) - back);
  var lo = date.getTime() - 100 * 86400000, hi = date.getTime() - 80 * 86400000;
  for (var i = 0; i < 60; i++) {
    var mid = (lo + hi) / 2, l = pcBodyLon('Sun', new Date(mid));
    if (pcNorm(l - target + 180) - 180 < 0) lo = mid; else hi = mid;
  }
  return new Date((lo + hi) / 2);
}

/* ===== pc systems: numerology, human design, tarot, transits, themes (ES5) ===== */
function pcDigitSum(n){ var s = 0; n = Math.abs(n); while (n > 0) { s += n % 10; n = Math.floor(n / 10); } return s; }
function pcReduce(n, keepMaster){
  while (n > 9) { if (keepMaster && (n === 11 || n === 22 || n === 33)) return n; n = pcDigitSum(n); }
  return n;
}

/* ---------- Numerology ---------- */
var PC_PYTH = {a:1,j:1,s:1,b:2,k:2,t:2,c:3,l:3,u:3,d:4,m:4,v:4,e:5,n:5,w:5,f:6,o:6,x:6,g:7,p:7,y:7,h:8,q:8,z:8,i:9,r:9};
function pcNumerology(c, today){
  var lp = pcReduce(pcReduce(c.mo, true) + pcReduce(c.d, true) + pcReduce(c.y, true), true);
  var yr = (today || new Date()).getFullYear();
  var py = pcReduce(pcReduce(c.mo, false) + pcReduce(c.d, false) + pcReduce(yr, false), false);
  var name = (c.name || '').toLowerCase().replace(/[^a-z]/g, ''), all = 0, vow = 0, con = 0;
  for (var i = 0; i < name.length; i++) {
    var ch = name.charAt(i), v = PC_PYTH[ch] || 0; all += v;
    if ('aeiou'.indexOf(ch) >= 0) vow += v; else con += v;
  }
  return {lifePath: lp, personalYear: py, year: yr, birthday: pcReduce(c.d, true),
    expression: name ? pcReduce(all, true) : null, soulUrge: name ? pcReduce(vow, true) : null, personality: name ? pcReduce(con, true) : null};
}

/* ---------- Human Design ---------- */
function pcGateLine(lon){
  var off = pcNorm(lon - 302), idx = Math.floor(off / 5.625);
  return {gate: PC_HD_ORDER[idx], line: Math.floor((off % 5.625) / 0.9375) + 1};
}
function pcHDActivations(date){
  var out = {}, sun = pcBodyLon('Sun', date), nn = pcTrueNode(date);
  out.Sun = pcGateLine(sun); out.Earth = pcGateLine(sun + 180);
  out['North Node'] = pcGateLine(nn); out['South Node'] = pcGateLine(nn + 180);
  var list = ['Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];
  for (var i = 0; i < list.length; i++) out[list[i]] = pcGateLine(pcBodyLon(list[i], date));
  return out;
}
function pcCenterOf(g){ for (var c in PC_HD_CENTERS) if (PC_HD_CENTERS[c].indexOf(g) >= 0) return c; return null; }
function pcHumanDesign(chart){
  var pDate = chart.date, dDate = pcSunArcBack(pDate, 88);
  var pers = pcHDActivations(pDate), des = pcHDActivations(dDate), gates = {}, k;
  for (k in pers) gates[pers[k].gate] = true;
  for (k in des) gates[des[k].gate] = true;
  var channels = [], defined = {}, adj = {};
  for (var i = 0; i < PC_HD_CHANNELS.length; i++) {
    var ch = PC_HD_CHANNELS[i];
    if (gates[ch[0]] && gates[ch[1]]) {
      var a = pcCenterOf(ch[0]), b = pcCenterOf(ch[1]);
      channels.push({gates: ch, centers: [a, b]});
      defined[a] = defined[b] = true;
      (adj[a] = adj[a] || []).push(b); (adj[b] = adj[b] || []).push(a);
    }
  }
  function connected(from, to){
    if (!defined[from] || !defined[to]) return false;
    var seen = {}, stack = [from];
    while (stack.length) { var c = stack.pop(); if (c === to) return true; if (seen[c]) continue; seen[c] = 1; var n = adj[c] || []; for (var j = 0; j < n.length; j++) stack.push(n[j]); }
    return false;
  }
  var motorToThroat = connected('Heart','Throat') || connected('Solar Plexus','Throat') || connected('Root','Throat') || connected('Sacral','Throat');
  var type;
  if (!channels.length) type = 'Reflector';
  else if (defined.Sacral) type = motorToThroat ? 'Manifesting Generator' : 'Generator';
  else type = motorToThroat ? 'Manifestor' : 'Projector';
  var auth;
  if (type === 'Reflector') auth = 'Lunar';
  else if (defined['Solar Plexus']) auth = 'Emotional';
  else if (defined.Sacral) auth = 'Sacral';
  else if (defined.Spleen) auth = 'Splenic';
  else if (defined.Heart) auth = connected('Heart','Throat') ? 'Ego Manifested' : 'Ego Projected';
  else if (defined.G && connected('G','Throat')) auth = 'Self-Projected';
  else auth = 'Mental (Sounding Board)';
  var centers = [];
  for (var c in PC_HD_CENTERS) centers.push({name: c, defined: !!defined[c]});
  return {type: type, authority: auth, profile: pers.Sun.line + '/' + des.Sun.line, profileLines: [pers.Sun.line, des.Sun.line],
    personality: pers, design: des, designDate: dDate, channels: channels, centers: centers,
    incarnationCross: [pers.Sun.gate, pers.Earth.gate, des.Sun.gate, des.Earth.gate]};
}

/* ---------- Tarot ---------- */
function pcTarotCards(n){
  var cards = [];
  while (n > 22) n = pcDigitSum(n);
  if (n === 22) return [0, 4];
  cards.push(n);
  while (n > 9) { n = pcDigitSum(n); cards.push(n); }
  return cards;
}
function pcTarot(c, chart, today){
  var yr = (today || new Date()).getFullYear();
  var birth = pcTarotCards(pcDigitSum(c.mo + c.d + c.y));
  var year = pcTarotCards(pcDigitSum(c.mo + c.d + yr));
  var big = {Sun: PC_SIGN_TAROT[chart.bodies.Sun.sign]};
  if (!chart.timeKnown && chart.moonRange && chart.moonRange.changes) big.Moon = null; else big.Moon = PC_SIGN_TAROT[chart.bodies.Moon.sign];
  if (chart.timeKnown) big.Rising = PC_SIGN_TAROT[chart.bodies.Ascendant.sign];
  return {birth: birth, year: year, yearNum: yr, big3: big};
}

/* ---------- Transits: next 12 months, Jupiter to Pluto onto personal points ---------- */
function pcTransits(chart, startDate, days){
  var movers = ['Jupiter','Saturn','Uranus','Neptune','Pluto'];
  var targets = ['Sun','Moon','Mercury','Venus','Mars'];
  if (chart.timeKnown) { targets.push('Ascendant'); targets.push('Midheaven'); }
  var start = startDate || new Date(), hits = {}, i, j, k, d;
  days = days || 365;
  for (d = -30; d <= days; d += 2) {
    var t = new Date(start.getTime() + d * 86400000);
    for (i = 0; i < movers.length; i++) {
      var tl = pcBodyLon(movers[i], t);
      for (j = 0; j < targets.length; j++) {
        if (targets[j] === 'Moon' && !chart.timeKnown) continue;
        var nl = chart.bodies[targets[j]].lon, sep = pcSep(tl, nl);
        for (k = 0; k < PC_ASPECTS.length; k++) {
          var asp = PC_ASPECTS[k], orb = movers[i] === 'Jupiter' ? 2 : 1.5;
          var diff = Math.abs(sep - asp.angle);
          if (diff <= orb) {
            var key = movers[i] + '|' + asp.key + '|' + targets[j];
            var h = hits[key] || (hits[key] = {mover: movers[i], key: asp.key, name: asp.name, target: targets[j], start: t, end: t, best: diff, exact: t});
            if (t < h.start) h.start = t;
            if (t > h.end) h.end = t;
            if (diff < h.best) { h.best = diff; h.exact = t; }
          }
        }
      }
    }
  }
  var out = [], now = start.getTime();
  for (var key2 in hits) if (hits.hasOwnProperty(key2)) {
    var x = hits[key2];
    if (x.end.getTime() < now - 86400000 * 3) continue;
    x.active = x.start.getTime() <= now && x.end.getTime() >= now;
    out.push(x);
  }
  out.sort(function(a, b){ return a.start - b.start; });
  return out;
}

/* ---------- Profection ---------- */
function pcProfection(chart, c, today){
  if (!chart.timeKnown) return null;
  var now = today || new Date(), age = now.getFullYear() - c.y;
  if (now.getMonth() + 1 < c.mo || (now.getMonth() + 1 === c.mo && now.getDate() < c.d)) age--;
  var house = (age % 12) + 1, ascIdx = PC_SIGNS.indexOf(chart.bodies.Ascendant.sign);
  var sign = PC_SIGNS[(ascIdx + age) % 12];
  return {age: age, house: house, sign: sign};
}

/* ---------- Themes (pop-up patterns) ---------- */
var PC_ELEM = {Aries:'Fire',Leo:'Fire',Sagittarius:'Fire',Taurus:'Earth',Virgo:'Earth',Capricorn:'Earth',Gemini:'Air',Libra:'Air',Aquarius:'Air',Cancer:'Water',Scorpio:'Water',Pisces:'Water'};
var PC_MODE = {Aries:'Cardinal',Cancer:'Cardinal',Libra:'Cardinal',Capricorn:'Cardinal',Taurus:'Fixed',Leo:'Fixed',Scorpio:'Fixed',Aquarius:'Fixed',Gemini:'Mutable',Virgo:'Mutable',Sagittarius:'Mutable',Pisces:'Mutable'};
function pcBalance(chart){
  var el = {Fire:0,Earth:0,Air:0,Water:0}, mo = {Cardinal:0,Fixed:0,Mutable:0};
  for (var i = 0; i < PC_BODIES.length; i++) { var s = chart.bodies[PC_BODIES[i]].sign; el[PC_ELEM[s]]++; mo[PC_MODE[s]]++; }
  return {elements: el, modes: mo};
}
function pcThemes(chart){
  var themes = [], b = chart.bodies, i, j, k;
  var bal = pcBalance(chart);
  var maxE = null, maxM = null;
  for (var e in bal.elements) { if (bal.elements[e] >= 4 && (!maxE || bal.elements[e] > bal.elements[maxE])) maxE = e; if (bal.elements[e] === 0) themes.push({id:'void-' + e, kind:'void', title:'No ' + e + ': ' + PC_ARCH.TERRAIN[e].void.split('.')[0], element: e}); }
  if (maxE) themes.push({id:'elem-' + maxE, kind:'element', title: maxE + ' leads: ' + PC_ARCH.TERRAIN[maxE].name, element: maxE, count: bal.elements[maxE]});
  for (var m in bal.modes) if (bal.modes[m] >= 5 && (!maxM || bal.modes[m] > bal.modes[maxM])) maxM = m;
  if (maxM) themes.push({id:'mode-' + maxM, kind:'mode', title: PC_ARCH.PACE[maxM][0] + ' (' + maxM + ' emphasis)', mode: maxM});
  /* stelliums by sign (and house if known) */
  var bySign = {}, byHouse = {};
  for (i = 0; i < PC_BODIES.length; i++) {
    var p = b[PC_BODIES[i]];
    if (PC_BODIES[i] === 'Moon' && !chart.timeKnown && chart.moonRange && chart.moonRange.changes) continue;
    (bySign[p.sign] = bySign[p.sign] || []).push(p.name);
    if (chart.timeKnown) (byHouse[p.house] = byHouse[p.house] || []).push(p.name);
  }
  for (var s2 in bySign) if (bySign[s2].length >= 3) themes.push({id:'stel-' + s2, kind:'stellium', title:'Stellium in ' + s2, planets: bySign[s2], where: s2});
  for (var h in byHouse) if (byHouse[h].length >= 3) themes.push({id:'stelh-' + h, kind:'stellium', title:'Stellium in the ' + pcOrd(+h) + ' house', planets: byHouse[h], where: pcOrd(+h) + ' house', timed: true});
  /* aspect patterns */
  var asp = chart.aspects, has = {};
  for (i = 0; i < asp.length; i++) { has[asp[i].a + '|' + asp[i].b + '|' + asp[i].key] = 1; has[asp[i].b + '|' + asp[i].a + '|' + asp[i].key] = 1; }
  var P = PC_BODIES.slice(0); if (b.Chiron) P.push('Chiron');
  function A(x, y, kk){ return has[x + '|' + y + '|' + kk]; }
  var seen = {};
  for (i = 0; i < P.length; i++) for (j = i + 1; j < P.length; j++) for (k = 0; k < P.length; k++) {
    if (k === i || k === j) continue;
    var x = P[i], y = P[j], z = P[k], tag;
    if (A(x, y, 'opposition') && A(x, z, 'square') && A(y, z, 'square')) {
      tag = 'tsq' + [x, y, z].sort().join(); if (!seen[tag]) { seen[tag] = 1; themes.push({id: tag, kind:'tSquare', title:'T-Square with ' + z + ' at the apex', planets:[x, y, z], apex: z}); }
    }
    if (A(x, y, 'sextile') && pcNear(b[x].lon, b[z].lon, 150, 3) && pcNear(b[y].lon, b[z].lon, 150, 3)) {
      tag = 'yod' + [x, y, z].sort().join(); if (!seen[tag]) { seen[tag] = 1; themes.push({id: tag, kind:'yod', title:'Yod pointing to ' + z, planets:[x, y, z], apex: z}); }
    }
    if (k > j && A(x, y, 'trine') && A(x, z, 'trine') && A(y, z, 'trine')) {
      tag = 'gt' + [x, y, z].sort().join(); if (!seen[tag]) { seen[tag] = 1; themes.push({id: tag, kind:'grandTrine', title:'Grand Trine in ' + PC_ELEM[b[x].sign], planets:[x, y, z]}); }
    }
  }
  /* angular spotlight + dignity + retrogrades */
  if (chart.timeKnown) {
    for (i = 0; i < PC_BODIES.length; i++) {
      var q = b[PC_BODIES[i]];
      if (pcSep(q.lon, b.Ascendant.lon) < 6 || pcSep(q.lon, b.Midheaven.lon) < 6) themes.push({id:'ang-' + q.name, kind:'angular', title: q.name + ' in the spotlight (on an angle)', planets:[q.name], timed: true});
    }
  }
  for (i = 0; i < PC_BODIES.length; i++) {
    var r = b[PC_BODIES[i]], dom = PC_ARCH.DOMICILE[r.name] || [];
    if (dom.indexOf(r.sign) >= 0) themes.push({id:'dom-' + r.name, kind:'home', title: r.name + ' at home in ' + r.sign, planets:[r.name]});
    else if (PC_ARCH.EXALTATION[r.name] === r.sign) themes.push({id:'ex-' + r.name, kind:'home', title: r.name + ' exalted in ' + r.sign, planets:[r.name]});
  }
  var retro = [];
  for (i = 2; i < 7; i++) if (b[PC_BODIES[i]].retro) retro.push(PC_BODIES[i]);
  if (retro.length >= 2) themes.push({id:'retro', kind:'retro', title:'Inner-planet retrogrades: ' + retro.join(', '), planets: retro});
  return themes;
}
function pcNear(a, b, angle, orb){ return Math.abs(pcSep(a, b) - angle) <= orb; }
function pcOrd(n){ var s = ['th','st','nd','rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }

/* ===== pc Tree of Life (Golden Dawn / Hermetic Qabalah) calculator (ES5) ===== */
var PC_SEPH = {
  kether:   {n:1,  name:'Kether',    title:'The Crown',      x:150, y:40,  pillar:'middle',   planet:'Neptune', classic:'Primum Mobile', arch:'The Source',
    text:'Kether is pure potential, the first spark of being before anything takes form. It is the quiet sense that your life is connected to something larger.',
    gift:'a felt connection to purpose and the bigger picture', edge:'staying grounded while reaching for the highest ideal', practice:'Begin the day with one minute of stillness and ask, "What wants to come through me today?"'},
  chokmah:  {n:2,  name:'Chokmah',   title:'Wisdom',         x:250, y:100, pillar:'mercy',    planet:'Uranus',  classic:'The Zodiac', arch:'The Visionary',
    text:'Chokmah is the first flash of insight, raw creative force that has not yet taken shape. It is the lightning bolt of a new idea.',
    gift:'original insight and the courage to begin something new', edge:'giving bright ideas enough form to last', practice:'Keep an idea notebook and choose one spark each month to give a real shape.'},
  binah:    {n:3,  name:'Binah',     title:'Understanding',  x:50,  y:100, pillar:'severity', planet:'Saturn',  arch:'The Great Mother',
    text:'Binah gives form to force. It is the patient, shaping intelligence that turns inspiration into something that can actually exist in time.',
    gift:'depth, patience and the ability to build lasting structure', edge:'letting structure support you rather than confine you', practice:'Pick one commitment and give it a steady weekly rhythm.'},
  daath:    {n:0,  name:'Daath',     title:'Knowledge',      x:150, y:155, pillar:'middle',   planet:'Pluto', hidden:true, arch:'The Threshold',
    text:'Daath is the hidden sphere in the Abyss, the place where what you think you know is surrendered so true knowing can arrive.',
    gift:'transformation through honest self-knowledge', edge:'releasing certainty and control', practice:'Journal on one belief you are ready to outgrow.'},
  chesed:   {n:4,  name:'Chesed',    title:'Mercy',          x:250, y:210, pillar:'mercy',    planet:'Jupiter', arch:'The Generous Ruler',
    text:'Chesed is loving-kindness and expansion. It is the part of you that builds, blesses, shares and makes room for others to grow.',
    gift:'generosity, faith and the ability to grow what you touch', edge:'saying yes with limits, so kindness stays sustainable', practice:'Offer one act of generosity this week that also honors your own needs.'},
  geburah:  {n:5,  name:'Geburah',   title:'Strength',       x:50,  y:210, pillar:'severity', planet:'Mars',    arch:'The Warrior-Judge',
    text:'Geburah is healthy strength, discernment and the courage to cut away what no longer serves. It balances Chesed\'s kindness with clear boundaries.',
    gift:'courage, focus and clean boundaries', edge:'using strength with care rather than force', practice:'Name one thing to release this month and release it kindly.'},
  tiphareth:{n:6,  name:'Tiphareth', title:'Beauty',         x:150, y:270, pillar:'middle',   planet:'Sun',     arch:'The Radiant Heart',
    text:'Tiphareth sits at the heart of the Tree. It is harmony, the Higher Self and the place where every part of you can meet in balance.',
    gift:'a centered heart that brings the whole self into harmony', edge:'shining as yourself rather than as who others expect', practice:'Ask daily, "What would my most whole self choose here?"'},
  netzach:  {n:7,  name:'Netzach',   title:'Victory',        x:250, y:370, pillar:'mercy',    planet:'Venus',   arch:'The Artist-Lover',
    text:'Netzach is feeling, desire, art and the endurance of love. It is what moves you and keeps you going for what you value.',
    gift:'creativity, devotion and emotional endurance', edge:'feeling deeply without being carried away', practice:'Make something with your hands, just for the joy of it.'},
  hod:      {n:8,  name:'Hod',       title:'Splendour',      x:50,  y:370, pillar:'severity', planet:'Mercury', arch:'The Magician-Scholar',
    text:'Hod is the brilliant mind: language, learning, symbols and systems. It names and organizes what Netzach feels.',
    gift:'clear thinking, teaching and the magic of words', edge:'letting the mind serve the heart, not replace it', practice:'Write one sentence each evening about what you learned today.'},
  yesod:    {n:9,  name:'Yesod',     title:'Foundation',     x:150, y:430, pillar:'middle',   planet:'Moon',    arch:'The Dreamer',
    text:'Yesod is the foundation beneath the surface: dreams, imagination, habits and the inner world that shapes what shows up outside.',
    gift:'intuition, imagination and emotional memory', edge:'noticing which old patterns are running the show', practice:'Track your dreams or moods for one Moon cycle.'},
  malkuth:  {n:10, name:'Malkuth',   title:'The Kingdom',    x:150, y:500, pillar:'middle',   planet:'Earth',   arch:'The Embodied Gardener',
    text:'Malkuth is the physical world: the body, home, money and daily life. It is where everything above becomes real.',
    gift:'groundedness and the power to make things real', edge:'treating everyday life as sacred, not separate from spirit', practice:'Tend one physical space or body ritual daily for a week.'}
};
var PC_SEPH_ORDER = ['kether','chokmah','binah','daath','chesed','geburah','tiphareth','netzach','hod','yesod','malkuth'];
/* Golden Dawn paths: number, letter, hebrew, trump index (RWS numbering), attribution, from, to, meaning */
var PC_PATHS = [
  [11,'Aleph','א',0,'Air','kether','chokmah','trusting the leap into new life'],
  [12,'Beth','ב',1,'Mercury','kether','binah','turning inspiration into skill and intention'],
  [13,'Gimel','ג',2,'Moon','kether','tiphareth','listening to quiet inner knowing'],
  [14,'Daleth','ד',3,'Venus','chokmah','binah','love that gives birth to form and abundance'],
  [15,'Heh','ה',4,'Aries','chokmah','tiphareth','leading with vision and healthy authority'],
  [16,'Vav','ו',5,'Taurus','chokmah','chesed','learning from teachers and becoming one'],
  [17,'Zayin','ז',6,'Gemini','binah','tiphareth','choosing from the heart and uniting opposites'],
  [18,'Cheth','ח',7,'Cancer','binah','geburah','steering with will while protecting what matters'],
  [19,'Teth','ט',8,'Leo','chesed','geburah','gentle strength that tames big feelings'],
  [20,'Yod','י',9,'Virgo','chesed','tiphareth','the inner light found through reflection'],
  [21,'Kaph','כ',10,'Jupiter','chesed','netzach','moving gracefully with life\'s cycles'],
  [22,'Lamed','ל',11,'Libra','geburah','tiphareth','balance, honesty and fair choices'],
  [23,'Mem','מ',12,'Water','geburah','hod','a new view that comes from surrender'],
  [24,'Nun','נ',13,'Scorpio','tiphareth','netzach','transformation that makes room for new growth'],
  [25,'Samekh','ס',14,'Sagittarius','tiphareth','yesod','blending opposites into healing balance'],
  [26,'Ayin','ע',15,'Capricorn','tiphareth','hod','seeing what binds you and choosing freedom'],
  [27,'Pe','פ',16,'Mars','netzach','hod','breakthroughs that clear away what is false'],
  [28,'Tzaddi','צ',17,'Aquarius','netzach','yesod','hope, healing and renewed purpose'],
  [29,'Qoph','ק',18,'Pisces','netzach','malkuth','finding your way through dreams and the unknown'],
  [30,'Resh','ר',19,'Sun','hod','yesod','joyful clarity and being seen'],
  [31,'Shin','ש',20,'Fire','hod','malkuth','awakening to a calling'],
  [32,'Tav','ת',21,'Saturn','yesod','malkuth','completing a cycle and bringing spirit fully into life']
];
var PC_SIGN_SEPH_RULER = {Aries:'Mars',Taurus:'Venus',Gemini:'Mercury',Cancer:'Moon',Leo:'Sun',Virgo:'Mercury',Libra:'Venus',Scorpio:'Mars',Sagittarius:'Jupiter',Capricorn:'Saturn',Aquarius:'Saturn',Pisces:'Jupiter'};
var PC_FALL = {Sun:'Libra',Moon:'Scorpio',Mercury:'Pisces',Venus:'Virgo',Mars:'Cancer',Jupiter:'Capricorn',Saturn:'Aries'};

function pcOpp(sign){ return PC_SIGNS[(PC_SIGNS.indexOf(sign) + 6) % 12]; }
function pcDignity(planet, sign){
  var dom = PC_ARCH.DOMICILE[planet] || [];
  if (dom.indexOf(sign) >= 0) return {score: 2, label: 'at home in ' + sign};
  if (PC_ARCH.EXALTATION[planet] === sign) return {score: 2, label: 'exalted in ' + sign};
  for (var i = 0; i < dom.length; i++) if (pcOpp(dom[i]) === sign) return {score: -1, label: 'working outside its comfort zone in ' + sign};
  if (PC_FALL[planet] === sign) return {score: -1, label: 'learning humility in ' + sign};
  return {score: 0, label: 'in ' + sign};
}
function pcSephForNumber(n){ var k = n > 9 ? pcReduce(n, false) : n; for (var key in PC_SEPH) if (PC_SEPH[key].n === k) return key; return 'malkuth'; }

function pcTree(ctx){
  var ch = ctx.chart, b = ch.bodies, known = ch.timeKnown, bal = pcBalance(ch);
  var moonUnsure = !known && ch.moonRange && ch.moonRange.changes;
  var seph = {}, k, i;
  for (k in PC_SEPH) {
    var S = PC_SEPH[k], planet = S.planet, rec = {key: k, planet: planet, score: 0, notes: []};
    if (planet === 'Earth') {
      var earthSign = pcSignOf(b.Sun.lon + 180), ec = bal.elements.Earth;
      rec.sign = earthSign; rec.score = ec >= 3 ? 2 : ec === 0 ? -1 : (ec >= 2 ? 1 : 0);
      rec.notes.push(ec + ' planet' + (ec === 1 ? '' : 's') + ' in Earth signs');
    } else {
      var body = b[planet]; rec.sign = body.sign;
      var dg = pcDignity(planet, body.sign); rec.score += dg.score; rec.notes.push(planet + ' ' + dg.label);
      if (known && (pcSep(body.lon, b.Ascendant.lon) < 7 || pcSep(body.lon, b.Midheaven.lon) < 7)) { rec.score += 1; rec.notes.push('on an angle of the chart'); }
      if (body.retro && (planet === 'Mercury' || planet === 'Venus' || planet === 'Mars')) rec.notes.push('retrograde, so it works inward first');
      if (moonUnsure && planet === 'Moon') rec.unsure = true;
    }
    rec.level = rec.score >= 2 ? 'radiant' : rec.score < 0 ? 'growing' : 'steady';
    seph[k] = rec;
  }
  /* rulers of the Big 3 strengthen the planetary paths */
  var bigRulers = {}; bigRulers[PC_SIGN_SEPH_RULER[b.Sun.sign]] = 'your Sun sign';
  if (!moonUnsure) bigRulers[PC_SIGN_SEPH_RULER[b.Moon.sign]] = bigRulers[PC_SIGN_SEPH_RULER[b.Moon.sign]] || 'your Moon sign';
  if (known) bigRulers[PC_SIGN_SEPH_RULER[b.Ascendant.sign]] = 'your Rising sign (chart ruler)';
  var elemOf = {Air:'Air', Water:'Water', Fire:'Fire'};
  var paths = [];
  for (i = 0; i < PC_PATHS.length; i++) {
    var p = PC_PATHS[i], attr = p[4], score = 0, why = [];
    if (PC_SIGNS.indexOf(attr) >= 0) {
      var who = [];
      for (var j = 0; j < PC_BODIES.length; j++) { var nm = PC_BODIES[j]; if (nm === 'Moon' && moonUnsure) continue; if (b[nm].sign === attr) who.push(nm); }
      if (known && b.Ascendant.sign === attr) who.push('Rising');
      score = who.length; if (who.length) why.push(who.join(', ') + ' in ' + attr);
    } else if (elemOf[attr]) {
      var c = bal.elements[attr]; if (c >= 3) { score = c - 1; why.push(c + ' planets in ' + attr + ' signs'); }
    } else {
      var pl = b[attr], d2 = pcDignity(attr, pl.sign);
      if (d2.score > 0) { score += 1; why.push(attr + ' ' + d2.label); }
      if (bigRulers[attr]) { score += 1; why.push(attr + ' rules ' + bigRulers[attr]); }
      if (known && (pcSep(pl.lon, b.Ascendant.lon) < 7 || pcSep(pl.lon, b.Midheaven.lon) < 7)) { score += 1; why.push(attr + ' on an angle'); }
      if (attr === 'Saturn' && bal.elements.Earth >= 3) { score += 1; why.push('strong Earth (Tav is also the path of Earth)'); }
    }
    paths.push({num: p[0], letter: p[1], hebrew: p[2], trump: p[3], attr: attr, from: p[5], to: p[6], meaning: p[7], score: score, why: why});
  }
  /* pillars */
  var pill = {mercy: 0, severity: 0, middle: 0};
  for (k in seph) if (k !== 'daath') pill[PC_SEPH[k].pillar] += seph[k].score + 1;
  var lead = 'middle';
  if (pill.mercy > pill.severity + 1 && pill.mercy >= pill.middle - 1) lead = 'mercy';
  else if (pill.severity > pill.mercy + 1 && pill.severity >= pill.middle - 1) lead = 'severity';
  /* numerology + tarot ties */
  var N = ctx.num, T = ctx.tarot;
  var birthPaths = [];
  for (i = 0; i < T.birth.length; i++) birthPaths.push(paths[T.birth[i]]);
  return {seph: seph, paths: paths, pillars: pill, leadPillar: lead,
    soul: {key: pcSephForNumber(N.lifePath), num: N.lifePath}, year: {key: pcSephForNumber(N.personalYear), num: N.personalYear, yr: N.year},
    birthPaths: birthPaths, yearPath: paths[T.year[0]]};
}

/* ---------- SVG tree ---------- */
function pcTreeSVG(tree){
  var col = {radiant: '#e8a923', steady: '#0f9e94', growing: '#e0663f'};
  var out = '<svg class="pc-tree-svg" viewBox="0 0 300 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree of Life map">';
  out += '<rect x="0" y="0" width="300" height="560" rx="16" fill="#fffaf1"/>';
  var i, p;
  for (i = 0; i < tree.paths.length; i++) {
    p = tree.paths[i]; var a = PC_SEPH[p.from], c = PC_SEPH[p.to], lit = p.score > 0;
    out += '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + c.x + '" y2="' + c.y + '" stroke="' + (lit ? '#7b4fc9' : '#e3d7c3') + '" stroke-width="' + (lit ? Math.min(2 + p.score * 1.6, 8) : 2) + '" stroke-linecap="round" opacity="' + (lit ? 0.85 : 1) + '"/>';
  }
  for (i = 0; i < tree.paths.length; i++) {
    p = tree.paths[i]; if (p.score <= 0) continue;
    var a2 = PC_SEPH[p.from], c2 = PC_SEPH[p.to], mx = (a2.x + c2.x) / 2, my = (a2.y + c2.y) / 2;
    out += '<circle cx="' + mx + '" cy="' + my + '" r="9" fill="#fff" stroke="#7b4fc9" stroke-width="1.5"/><text x="' + mx + '" y="' + (my + 4) + '" text-anchor="middle" font-size="10" font-family="Space Mono,monospace" fill="#4a2a8a">' + p.num + '</text>';
  }
  for (var k in PC_SEPH) {
    var S = PC_SEPH[k], r = tree.seph[k], fill = r.unsure ? '#ffffff' : col[r.level];
    var glyph = S.planet === 'Earth' ? '⊕' : PC_GLYPH[S.planet];
    if (S.hidden) out += '<circle cx="' + S.x + '" cy="' + S.y + '" r="20" fill="#fff" stroke="#6b5f73" stroke-width="1.5" stroke-dasharray="4 3"/>';
    else out += '<circle cx="' + S.x + '" cy="' + S.y + '" r="25" fill="' + fill + '" stroke="#2b2135" stroke-width="' + (r.level === 'radiant' ? 3 : 1.5) + '"' + (r.unsure ? ' stroke-dasharray="4 3"' : '') + '/>';
    out += '<text x="' + S.x + '" y="' + (S.y - 2) + '" text-anchor="middle" font-size="9.5" font-family="Fraunces,Georgia,serif" font-weight="700" fill="' + (S.hidden || r.unsure ? '#2b2135' : '#fff') + '">' + S.name + '</text>';
    out += '<text x="' + S.x + '" y="' + (S.y + 12) + '" text-anchor="middle" font-size="12" fill="' + (S.hidden || r.unsure ? '#2b2135' : '#fff') + '">' + glyph + '</text>';
  }
  out += '<g font-family="Space Mono,monospace" font-size="9" fill="#6b5f73"><circle cx="18" cy="546" r="5" fill="#e8a923"/><text x="27" y="549">radiant</text><circle cx="88" cy="546" r="5" fill="#0f9e94"/><text x="97" y="549">steady</text><circle cx="152" cy="546" r="5" fill="#e0663f"/><text x="161" y="549">growth edge</text><line x1="226" y1="546" x2="242" y2="546" stroke="#7b4fc9" stroke-width="4"/><text x="246" y="549">lit path</text></g>';
  return out + '</svg>';
}

/* ===== pc Destiny Matrix (22 arcana octagram) + Annual Profection helpers (ES5) ===== */
function pcR22(n){ n = Math.abs(n); while (n > 22) n = pcDigitSum(n); return n === 0 ? 22 : n; }
var PC_ARCANA = {
  1:['The Magician','starting things, skill, confident self-expression','scattered energy, talking more than doing'],
  2:['The High Priestess','intuition, quiet wisdom, inner knowing','self-doubt, hiding your knowing, withdrawing'],
  3:['The Empress','creativity, abundance, beauty, nurturing','over-giving, comfort-seeking, creative blocks'],
  4:['The Emperor','leadership, structure, steady responsibility','control, rigidity, carrying everything alone'],
  5:['The Hierophant','teaching, mentoring, meaningful tradition','preaching, fixed beliefs, needing approval'],
  6:['The Lovers','heart-led choices, connection, harmony','people-pleasing, indecision, relying on others'],
  7:['The Chariot','drive, focus, movement toward goals','pushing too hard, restlessness, burnout'],
  8:['Justice','fairness, honesty, clear agreements','judging, rigid rules, guilt'],
  9:['The Hermit','wisdom, depth, guidance found within','isolation, overthinking, closing off'],
  10:['Wheel of Fortune','flow, luck, moving with change','fear of change, feeling stuck in cycles'],
  11:['Strength','gentle power, stamina, warm courage','pushing through, anger, wearing yourself out'],
  12:['The Hanged Man','new perspective, service, creative surrender','martyrdom, waiting, feeling stuck'],
  13:['Death','transformation, release, fresh chapters','clinging to the past, fear of endings'],
  14:['Temperance','balance, healing, creative blending','extremes, impatience, all or nothing'],
  15:['The Devil','magnetism, ambition, owning your desires','attachment, control, old habits that bind'],
  16:['The Tower','breakthroughs, building on truth','sudden upheaval, holding on to what is not working'],
  17:['The Star','hope, inspiration, being seen for your gifts','self-doubt, hiding your light'],
  18:['The Moon','imagination, intuition, dreams','fear, confusion, avoiding what is unclear'],
  19:['The Sun','joy, warmth, leadership with heart','burnout, needing to shine, ego'],
  20:['Judgement','awakening, family wisdom, a calling','old family patterns, harsh self-judgment'],
  21:['The World','completion, wide horizons, belonging everywhere','feeling limited, unfinished cycles'],
  22:['The Fool','freedom, curiosity, fresh starts','avoiding commitment, recklessness']
};
var PC_MX_POS = {
  A:['Your personal portrait','How you show up in the world and the energy people meet first.'],
  B:['Your talents','Natural gifts and inspiration that come easily to you.'],
  C:['Your material path','Work, money and what you build in the physical world.'],
  D:['Your karmic tail','Lessons you came in with. Working with this energy consciously turns it into a strength.'],
  E:['Your comfort zone','The center of your matrix: where you feel most like yourself.'],
  F:['Father line, gifts','Strengths passed down through your father\'s side.'],
  G:['Mother line, gifts','Strengths passed down through your mother\'s side.'],
  Y:['Father line, lessons','Patterns from your father\'s side that you are here to heal or transform.'],
  K:['Mother line, lessons','Patterns from your mother\'s side that you are here to heal or transform.']
};
function pcMatrix(c){
  var A = pcR22(c.d), B = pcR22(c.mo), C = pcR22(pcDigitSum(c.y)), D = pcR22(A + B + C), E = pcR22(A + B + C + D);
  var F = pcR22(A + B), G = pcR22(B + C), Y = pcR22(C + D), K = pcR22(D + A);
  var sky = pcR22(B + D), earth = pcR22(A + C), personal = pcR22(sky + earth);
  var male = pcR22(F + Y), female = pcR22(G + K), social = pcR22(male + female);
  var spiritual = pcR22(personal + social);
  var B1 = pcR22(B + E), D1 = pcR22(D + E), D2 = pcR22(D + D1);
  return {A: A, B: B, C: C, D: D, E: E, F: F, G: G, Y: Y, K: K, B1: B1, D1: D1, D2: D2,
    sky: sky, earth: earth, personal: personal, male: male, female: female, social: social, spiritual: spiritual};
}
function pcMatrixSVG(m){
  var P = {A:[40,180], B:[180,40], C:[320,180], D:[180,320], E:[180,180], F:[81,81], G:[279,81], Y:[279,279], K:[81,279], B1:[180,110], D1:[180,250]};
  var col = {A:'#7b4fc9', B:'#0f9e94', C:'#e8a923', D:'#e0663f', E:'#2b2135', F:'#5a9a3c', G:'#5a9a3c', Y:'#5a9a3c', K:'#5a9a3c', B1:'#0f9e94', D1:'#e0663f'};
  var s = '<svg class="pc-mx-svg" viewBox="0 0 360 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Destiny Matrix chart"><rect width="360" height="380" rx="16" fill="#fffaf1"/>';
  s += '<polygon points="40,180 180,40 320,180 180,320" fill="none" stroke="#d8c9b0" stroke-width="2"/>';
  s += '<polygon points="81,81 279,81 279,279 81,279" fill="none" stroke="#d8c9b0" stroke-width="2"/>';
  s += '<line x1="40" y1="180" x2="320" y2="180" stroke="#eadfcc" stroke-width="1.5"/><line x1="180" y1="40" x2="180" y2="320" stroke="#eadfcc" stroke-width="1.5"/>';
  s += '<line x1="81" y1="81" x2="279" y2="279" stroke="#eadfcc" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="279" y1="81" x2="81" y2="279" stroke="#eadfcc" stroke-width="1.5" stroke-dasharray="4 4"/>';
  for (var k in P) {
    var r = (k === 'E') ? 26 : (k === 'B1' || k === 'D1') ? 15 : 21;
    s += '<circle cx="' + P[k][0] + '" cy="' + P[k][1] + '" r="' + r + '" fill="' + (k === 'B1' || k === 'D1' ? '#fff' : col[k]) + '" stroke="' + col[k] + '" stroke-width="2.5"/>';
    s += '<text x="' + P[k][0] + '" y="' + (P[k][1] + (r > 20 ? 6 : 5)) + '" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-weight="700" font-size="' + (r > 20 ? 17 : 13) + '" fill="' + (k === 'B1' || k === 'D1' ? col[k] : '#fff') + '">' + m[k] + '</text>';
  }
  s += '<g font-family="Space Mono,monospace" font-size="9" fill="#6b5f73"><text x="40" y="214" text-anchor="middle">you</text><text x="180" y="14" text-anchor="middle">talents</text><text x="320" y="214" text-anchor="middle">material</text><text x="180" y="356" text-anchor="middle">karmic tail</text><text x="208" y="168">core</text><text x="20" y="372">green = ancestral lines (father: top-left and bottom-right; mother: top-right and bottom-left)</text></g>';
  return s + '</svg>';
}

/* Annual profection: whole-sign from the Ascendant; solar (from the Sun sign) when the birth time is unknown */
var PC_TRAD_RULER = {Aries:'Mars',Taurus:'Venus',Gemini:'Mercury',Cancer:'Moon',Leo:'Sun',Virgo:'Mercury',Libra:'Venus',Scorpio:'Mars',Sagittarius:'Jupiter',Capricorn:'Saturn',Aquarius:'Saturn',Pisces:'Jupiter'};
function pcProfectionFull(chart, c, today){
  var now = today || new Date(), age = now.getFullYear() - c.y;
  if (now.getMonth() + 1 < c.mo || (now.getMonth() + 1 === c.mo && now.getDate() < c.d)) age--;
  var solar = !chart.timeKnown, base = solar ? chart.bodies.Sun.sign : chart.bodies.Ascendant.sign, bi = PC_SIGNS.indexOf(base);
  function yearFor(a){
    var sign = PC_SIGNS[(bi + a) % 12], lord = PC_TRAD_RULER[sign], acts = [];
    for (var i = 0; i < PC_BODIES.length; i++) { var nm = PC_BODIES[i]; if (nm === 'Moon' && solar && chart.moonRange.changes) continue; if (chart.bodies[nm].sign === sign) acts.push(nm); }
    return {age: a, house: (a % 12) + 1, sign: sign, lord: lord, activated: acts, from: c.y + a, to: c.y + a + 1};
  }
  var cur = yearFor(age), cycle = [];
  for (var j = 0; j < 12; j++) cycle.push(yearFor(age + j));
  cur.solar = solar; cur.base = base; cur.lordBody = chart.bodies[cur.lord]; cur.cycle = cycle; cur.next = cycle[1];
  return cur;
}

/* ===== pc natal chart wheel (SVG, ES5) ===== */
var PC_SIGN_GLYPH = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
var PC_ELEM_FILL = {Fire:'#fde6dc', Earth:'#e4f0da', Air:'#fff1cc', Water:'#d9f4f1'};
var PC_ELEM_INK = {Fire:'#c4502b', Earth:'#4f8a33', Air:'#a87b0c', Water:'#0b7f77'};
var PC_AIA = {name: 'Adventures In Astrology', url: 'adventuresinastrology.com', logo: 'https://images.squarespace-cdn.com/content/v1/640a524a5e8f3400468c0362/1740894114072-SCEYVGO5M7MZI8GUAZ5H/public.jpeg?format=500w'};

function pcWheelSVG(chart, size){
  size = size || 520;
  var C = size / 2, R1 = C - 20, R2 = R1 - 36, R3 = R2 - 6, RP = R3 - 38, RA = RP - 24;
  var known = chart.timeKnown, b = chart.bodies;
  var asc = known ? b.Ascendant.lon : 0;
  function ang(lon){ return pcRad(180 + (lon - asc)); }               /* Ascendant on the left, zodiac runs counter-clockwise */
  function pt(lon, r){ var a = ang(lon); return [C + r * Math.cos(a), C - r * Math.sin(a)]; }
  function f(n){ return Math.round(n * 10) / 10; }
  var s = '<svg class="pc-wheel" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Natal chart wheel">';
  s += '<circle cx="' + C + '" cy="' + C + '" r="' + R1 + '" fill="#fff" stroke="#2b2135" stroke-width="1.6"/>';
  var i, p, q;
  /* zodiac band */
  for (i = 0; i < 12; i++) {
    var a0 = i * 30, a1 = a0 + 30, el = PC_ELEM[PC_SIGNS[i]];
    var o0 = pt(a0, R1), o1 = pt(a1, R1), n1 = pt(a1, R2), n0 = pt(a0, R2);
    s += '<path d="M' + f(o0[0]) + ' ' + f(o0[1]) + ' A' + R1 + ' ' + R1 + ' 0 0 0 ' + f(o1[0]) + ' ' + f(o1[1]) + ' L' + f(n1[0]) + ' ' + f(n1[1]) + ' A' + R2 + ' ' + R2 + ' 0 0 1 ' + f(n0[0]) + ' ' + f(n0[1]) + ' Z" fill="' + PC_ELEM_FILL[el] + '" stroke="#2b2135" stroke-width="0.8"/>';
    var g = pt(a0 + 15, (R1 + R2) / 2);
    s += '<text x="' + f(g[0]) + '" y="' + f(g[1] + 7) + '" text-anchor="middle" font-size="20" fill="' + PC_ELEM_INK[el] + '" font-family="Segoe UI Symbol,Apple Symbols,Noto Sans Symbols2,sans-serif">' + PC_SIGN_GLYPH[i] + '︎</text>';
  }
  /* degree ticks */
  for (i = 0; i < 360; i += 5) { p = pt(i, R2); q = pt(i, R2 - (i % 10 === 0 ? 7 : 4)); s += '<line x1="' + f(p[0]) + '" y1="' + f(p[1]) + '" x2="' + f(q[0]) + '" y2="' + f(q[1]) + '" stroke="#9f93ab" stroke-width="0.6"/>'; }
  s += '<circle cx="' + C + '" cy="' + C + '" r="' + R3 + '" fill="none" stroke="#d8c9b0" stroke-width="0.8"/>';
  s += '<circle cx="' + C + '" cy="' + C + '" r="' + RA + '" fill="#fffaf1" stroke="#2b2135" stroke-width="1"/>';
  /* houses */
  if (known && chart.cusps) {
    for (i = 0; i < 12; i++) {
      var cu = chart.cusps[i], angular = i % 3 === 0;
      p = pt(cu, R2); q = pt(cu, RA);
      s += '<line x1="' + f(p[0]) + '" y1="' + f(p[1]) + '" x2="' + f(q[0]) + '" y2="' + f(q[1]) + '" stroke="' + (angular ? '#2b2135' : '#b9ab98') + '" stroke-width="' + (angular ? 1.8 : 0.8) + '"/>';
      var mid = cu + pcNorm(chart.cusps[(i + 1) % 12] - cu) / 2, hn = pt(mid, RA + 9);
      s += '<text x="' + f(hn[0]) + '" y="' + f(hn[1] + 4) + '" text-anchor="middle" font-size="10" font-family="Space Mono,monospace" fill="#6b5f73">' + (i + 1) + '</text>';
    }
    var labels = [['AC', b.Ascendant.lon], ['MC', b.Midheaven.lon]];
    for (i = 0; i < 2; i++) { p = pt(labels[i][1], R1 + 11); s += '<text x="' + f(p[0]) + '" y="' + f(p[1] + 4) + '" text-anchor="middle" font-size="11" font-weight="700" font-family="Space Mono,monospace" fill="#2b2135">' + labels[i][0] + '</text>'; }
  }
  /* aspects */
  var draw = PC_BODIES.slice(0); if (b.Chiron) draw.push('Chiron'); draw.push('North Node');
  for (i = 0; i < chart.aspects.length; i++) {
    var A = chart.aspects[i];
    if (A.key === 'conjunction' || draw.indexOf(A.a) < 0 || draw.indexOf(A.b) < 0) continue;
    if (!known && (A.a === 'Moon' || A.b === 'Moon') && chart.moonRange && chart.moonRange.changes) continue;
    p = pt(b[A.a].lon, RA - 2); q = pt(b[A.b].lon, RA - 2);
    var hard = A.key === 'square' || A.key === 'opposition';
    s += '<line x1="' + f(p[0]) + '" y1="' + f(p[1]) + '" x2="' + f(q[0]) + '" y2="' + f(q[1]) + '" stroke="' + (hard ? '#e0663f' : '#0f9e94') + '" stroke-width="' + (A.orb < 2 ? 1.5 : 0.9) + '" opacity="0.75"' + (A.key === 'sextile' ? ' stroke-dasharray="4 3"' : '') + '/>';
  }
  /* planets with simple collision spreading */
  var list = draw.concat(['Lilith']).filter(function(n){ return b[n]; }).map(function(n){ return {n: n, lon: b[n].lon, pos: b[n].lon}; });
  list.sort(function(x, y){ return x.lon - y.lon; });
  for (var pass = 0; pass < 30; pass++) {
    list.sort(function(x, y){ return x.pos - y.pos; });
    var moved = false;
    for (i = 0; i < list.length; i++) {
      var cur = list[i], nx = list[(i + 1) % list.length];
      var gap = i === list.length - 1 ? nx.pos + 360 - cur.pos : nx.pos - cur.pos;
      if (list.length > 1 && gap < 8.5) { var d = (8.5 - gap) / 2 + 0.05; cur.pos -= d; nx.pos += d; moved = true; }
    }
    for (i = 0; i < list.length; i++) list[i].pos = pcNorm(list[i].pos);
    if (!moved) break;
  }
  for (i = 0; i < list.length; i++) {
    var it = list[i], body = b[it.n], unsure = it.n === 'Moon' && !known && chart.moonRange && chart.moonRange.changes;
    var gp = pt(it.pos, RP), tick0 = pt(it.lon, R3), tick1 = pt(it.lon, R3 - 6), dp = pt(it.pos, R3 - 15);
    s += '<line x1="' + f(tick0[0]) + '" y1="' + f(tick0[1]) + '" x2="' + f(tick1[0]) + '" y2="' + f(tick1[1]) + '" stroke="#2b2135" stroke-width="1.2"/>';
    s += '<text x="' + f(gp[0]) + '" y="' + f(gp[1] + 7) + '" text-anchor="middle" font-size="19" fill="' + (unsure ? '#9f93ab' : '#2b2135') + '" font-family="Segoe UI Symbol,Apple Symbols,Noto Sans Symbols2,sans-serif">' + PC_GLYPH[it.n] + '︎</text>';
    s += '<text x="' + f(dp[0]) + '" y="' + f(dp[1] + 3) + '" text-anchor="middle" font-size="8.5" font-family="Space Mono,monospace" fill="#6b5f73">' + Math.floor(body.lon % 30) + '°' + (body.retro ? 'R' : '') + '</text>';
  }
  if (!known) s += '<text x="' + C + '" y="' + (C + 4) + '" text-anchor="middle" font-size="10" font-family="Space Mono,monospace" fill="#9f93ab">no birth time: no houses</text>';
  return s + '</svg>';
}

/* ===== pc extra chart types: Solar Return, Secondary Progressions, Draconic, Synastry (ES5) ===== */
function pcBirthDate(c){ return pcLocalToUTC(c.y, c.mo, c.d, c.timeKnown ? c.h : 12, c.timeKnown ? c.mi : 0, c.tz); }
function pcChartAt(date, lat, lon, house, timeKnown){
  /* build a chart object for an exact UTC moment (used for returns and progressions) */
  var chart = {date: date, timeKnown: timeKnown, bodies: {}, list: []}, later = new Date(date.getTime() + 86400000), i;
  for (i = 0; i < PC_BODIES.length; i++) {
    var n = PC_BODIES[i], l = pcBodyLon(n, date), sp = pcNorm(pcBodyLon(n, later) - l + 180) - 180;
    chart.bodies[n] = {name: n, lon: l, sign: pcSignOf(l), retro: n !== 'Sun' && n !== 'Moon' && sp < 0};
  }
  var nn = pcTrueNode(date);
  chart.bodies['North Node'] = {name: 'North Node', lon: nn, sign: pcSignOf(nn)};
  chart.bodies['South Node'] = {name: 'South Node', lon: pcNorm(nn + 180), sign: pcSignOf(nn + 180)};
  chart.bodies.Lilith = {name: 'Lilith', lon: pcLilith(date), sign: pcSignOf(pcLilith(date))};
  if (timeKnown) {
    var ang = pcAngles(date, lat, lon), hs = pcCusps(ang, lat, house || 'E');
    chart.angles = ang; chart.cusps = hs.cusps; chart.houseSystem = hs.system;
    chart.bodies.Ascendant = {name: 'Ascendant', lon: ang.asc, sign: pcSignOf(ang.asc)};
    chart.bodies.Midheaven = {name: 'Midheaven', lon: ang.mc, sign: pcSignOf(ang.mc)};
    for (var k in chart.bodies) if (chart.bodies.hasOwnProperty(k)) chart.bodies[k].house = pcHouseOf(chart.bodies[k].lon, hs.cusps);
  }
  for (var k2 in chart.bodies) if (chart.bodies.hasOwnProperty(k2)) chart.list.push(chart.bodies[k2]);
  chart.aspects = pcFindAspects(chart);
  return chart;
}

/* ---------- Solar Return: the moment the Sun returns to its natal degree this year ---------- */
function pcSolarReturn(ctx){
  var natal = ctx.chart, c = ctx.client, now = new Date(), year = now.getFullYear();
  var bday = new Date(Date.UTC(year, c.mo - 1, c.d, 12));
  if (bday.getTime() > now.getTime() + 86400000) year--;            /* the return that started the current birthday year */
  var target = natal.bodies.Sun.lon, guess = new Date(Date.UTC(year, c.mo - 1, c.d, 12));
  var lo = guess.getTime() - 3 * 86400000, hi = guess.getTime() + 3 * 86400000;
  for (var i = 0; i < 60; i++) {
    var mid = (lo + hi) / 2, d = pcNorm(pcBodyLon('Sun', new Date(mid)) - target + 180) - 180;
    if (d < 0) lo = mid; else hi = mid;
  }
  var when = new Date((lo + hi) / 2);
  var sr = pcChartAt(when, c.lat, c.lon, ctx.opts.house || c.house || 'E', true);
  sr.returnYear = year; sr.when = when;
  /* natal houses the return planets fall in */
  if (natal.timeKnown) for (var k in sr.bodies) if (sr.bodies.hasOwnProperty(k)) sr.bodies[k].natalHouse = pcHouseOf(sr.bodies[k].lon, natal.cusps);
  return sr;
}

/* ---------- Secondary progressions: a day for a year ---------- */
function pcProgressed(ctx){
  var natal = ctx.chart, c = ctx.client, born = natal.date, now = new Date();
  var ageYears = (now.getTime() - born.getTime()) / (365.2422 * 86400000);
  var pDate = new Date(born.getTime() + ageYears * 86400000);
  var p = pcChartAt(pDate, c.lat, c.lon, ctx.opts.house || c.house || 'E', false);
  p.age = ageYears; p.pDate = pDate;
  if (natal.timeKnown) for (var k in p.bodies) if (p.bodies.hasOwnProperty(k)) p.bodies[k].natalHouse = pcHouseOf(p.bodies[k].lon, natal.cusps);
  /* progressed Moon: when it next changes sign (moves about 1 degree a month) */
  var m = p.bodies.Moon, toNext = 30 - (m.lon % 30), speed = pcNorm(pcBodyLon('Moon', new Date(pDate.getTime() + 86400000)) - m.lon);
  p.moonNextSignIn = speed > 0 ? toNext / speed : null;                   /* in years */
  /* progressed Sun / Moon aspects to natal planets, within 1 degree */
  var hits = [], movers = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'], targets = PC_BODIES.concat(natal.timeKnown ? ['Ascendant', 'Midheaven'] : []);
  for (var i = 0; i < movers.length; i++) for (var j = 0; j < targets.length; j++) {
    var a = p.bodies[movers[i]], b = natal.bodies[targets[j]]; if (!a || !b) continue;
    var sep = pcSep(a.lon, b.lon);
    for (var q = 0; q < PC_ASPECTS.length; q++) { var df = Math.abs(sep - PC_ASPECTS[q].angle); if (df <= 1) hits.push({mover: movers[i], target: targets[j], key: PC_ASPECTS[q].key, name: PC_ASPECTS[q].name, orb: df}); }
  }
  hits.sort(function(x, y){ return x.orb - y.orb; });
  p.hits = hits;
  /* progressed lunation phase */
  var ph = pcNorm(p.bodies.Moon.lon - p.bodies.Sun.lon);
  p.phase = ph < 45 ? 'New Moon' : ph < 90 ? 'Crescent' : ph < 135 ? 'First Quarter' : ph < 180 ? 'Gibbous' : ph < 225 ? 'Full Moon' : ph < 270 ? 'Disseminating' : ph < 315 ? 'Last Quarter' : 'Balsamic';
  return p;
}
var PC_PHASE_TEXT = {
  'New Moon': 'A seeding chapter. Something new is beginning, often before you can name it. Trust instinct and plant intentions.',
  'Crescent': 'A pushing-through chapter. The new direction meets old habits, and steady effort builds momentum.',
  'First Quarter': 'An action chapter. Decisions and visible steps; this is a time to build the structure for what you started.',
  'Gibbous': 'A refining chapter. Study, adjust and improve. The work is almost ready to be seen.',
  'Full Moon': 'A harvest and awareness chapter. What you built becomes visible, and relationships mirror you clearly.',
  'Disseminating': 'A sharing chapter. You teach, pass on and spread what you have learned.',
  'Last Quarter': 'A releasing chapter. Old structures no longer fit; you re-evaluate and let go with purpose.',
  'Balsamic': 'A resting and dreaming chapter. Endings, reflection and quiet preparation for the next cycle.'
};

/* ---------- Draconic: the soul chart, zodiac measured from the North Node ---------- */
function pcDraconic(ctx){
  var natal = ctx.chart, nn = natal.bodies['North Node'].lon, d = {bodies: {}, list: [], timeKnown: natal.timeKnown, cusps: null};
  for (var k in natal.bodies) if (natal.bodies.hasOwnProperty(k)) {
    var b = natal.bodies[k], l = pcNorm(b.lon - nn);
    d.bodies[k] = {name: k, lon: l, sign: pcSignOf(l), retro: b.retro, house: b.house};
    d.list.push(d.bodies[k]);
  }
  if (natal.timeKnown) { d.cusps = natal.cusps.map(function(cu){ return pcNorm(cu - nn); }); d.houseSystem = natal.houseSystem; }
  d.aspects = natal.aspects;   /* aspects are identical in the draconic chart */
  d.date = natal.date;
  return d;
}

/* ---------- Synastry: two charts side by side ---------- */
function pcSynastry(ctxA, chartB){
  var A = ctxA.chart, B = chartB, hits = [], list = PC_BODIES.concat(['North Node']);
  if (A.timeKnown) list = list.concat(['Ascendant']);
  var listB = PC_BODIES.concat(['North Node']).concat(B.timeKnown ? ['Ascendant'] : []);
  for (var i = 0; i < list.length; i++) for (var j = 0; j < listB.length; j++) {
    var a = A.bodies[list[i]], b = B.bodies[listB[j]]; if (!a || !b) continue;
    var sep = pcSep(a.lon, b.lon);
    for (var q = 0; q < PC_ASPECTS.length; q++) {
      var orb = (list[i] === 'Sun' || list[i] === 'Moon' || listB[j] === 'Sun' || listB[j] === 'Moon') ? 6 : 4;
      if (list[i] === 'North Node' || listB[j] === 'North Node') orb = 2;
      var df = Math.abs(sep - PC_ASPECTS[q].angle);
      if (df <= orb) hits.push({a: list[i], b: listB[j], key: PC_ASPECTS[q].key, name: PC_ASPECTS[q].name, orb: df});
    }
  }
  /* weight: personal planets and tight orbs first */
  var W = {Sun: 3, Moon: 3, Venus: 3, Mars: 2.5, Mercury: 2, Ascendant: 2.5, Jupiter: 1.5, Saturn: 2, 'North Node': 1.5, Uranus: 1, Neptune: 1, Pluto: 1.2};
  hits.forEach(function(h){ h.score = (W[h.a] || 1) * (W[h.b] || 1) / (1 + h.orb); });
  hits.sort(function(x, y){ return y.score - x.score; });
  var overlays = [];
  if (A.timeKnown) for (var k = 0; k < PC_BODIES.length; k++) overlays.push({planet: PC_BODIES[k], house: pcHouseOf(B.bodies[PC_BODIES[k]].lon, A.cusps)});
  return {hits: hits, overlays: overlays};
}

/* ===== pc report sections (ES5). Every section renders in full / client-short, standard / archetype. ===== */
function pcEsc(s){ return String(s === undefined || s === null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function pcSentences(s, n){
  if (!s) return '';
  var parts = String(s).match(/[^.!?]+[.!?]+(\s|$)/g);
  if (!parts) return s;
  return parts.slice(0, n).join('').trim();
}
function pcP(s){ return s ? '<p>' + pcEsc(s) + '</p>' : ''; }
function pcLabel(label, s){ return s ? '<div class="pc-r-field"><div class="pc-r-lab">' + pcEsc(label) + '</div><p>' + pcEsc(s) + '</p></div>' : ''; }
function pcFlag(timed){ return timed ? '<span class="pc-flag pc-flag-time">Birth-time sensitive</span>' : '<span class="pc-flag pc-flag-proof">Time-proof</span>'; }
function pcLow(s){ return String(s || '').toLowerCase(); }

function pcCharacter(planet, sign){
  var cast = PC_ARCH.CAST[planet], epi = PC_ARCH.SIGN_EPITHET[sign];
  if (!cast) return '';
  return cast.archetype.replace('The ', 'The ' + (epi ? epi + ' ' : ''));
}
function pcArchBox(ctx, planet, sign, entry){
  var cast = PC_ARCH.CAST[planet]; if (!cast) return '';
  var chips = '';
  if (entry && entry.archetypes) for (var i = 0; i < entry.archetypes.length; i++) chips += '<span class="pc-chip">' + pcEsc(entry.archetypes[i]) + '</span>';
  if (ctx.opts.short) return '<div class="pc-r-arch"><b>' + pcEsc(pcCharacter(planet, sign)) + '</b> asks: <i>' + pcEsc(cast.question) + '</i></div>';
  return '<div class="pc-r-arch"><div class="pc-r-arch-q"><i>' + pcEsc(cast.question) + '</i></div>' +
    '<div><b>At its best:</b> ' + pcEsc(cast.light) + '.</div><div><b>Growth edge:</b> ' + pcEsc(cast.shadow) + '.</div>' +
    (PC_ARCH.SIGN_STYLE[sign] ? '<div><b>How it moves:</b> ' + pcEsc(PC_ARCH.SIGN_STYLE[sign]) + '.</div>' : '') +
    (chips ? '<div class="pc-chips">' + chips + '</div>' : '') + '</div>';
}
function pcHouseLine(ctx, body){
  if (!ctx.chart.timeKnown || !body.house) return '';
  var st = PC_ARCH.HOUSE_STAGE[String(body.house)], e = ctx.lib.houses && ctx.lib.houses.entries[String(body.house)];
  var label = ctx.opts.archetype && st ? 'On the stage of ' + st[0] : 'Where it shows up: your ' + pcOrd(body.house) + ' house';
  var txt = (st ? st[1].charAt(0).toUpperCase() + st[1].slice(1) + '. ' : '') + (e && !ctx.opts.short ? pcSentences(e.text, 2) : '');
  return pcLabel(label, txt);
}
function pcPlacementTitle(ctx, body, fallbackTitle){
  var base = body.name + ' in ' + body.sign;
  if (ctx.opts.archetype && PC_ARCH.CAST[body.name]) return pcCharacter(body.name, body.sign) + '<small>' + pcEsc(base) + '</small>';
  return pcEsc(fallbackTitle || base);
}
function pcPlacementBody(ctx, entry){
  if (!entry) return '<p class="pc-muted">No library text for this placement yet.</p>';
  if (ctx.opts.short) return pcP(pcSentences(entry.plainEnglish, 2)) + pcLabel('Try this', pcSentences(entry.whatHelps, 2));
  return pcLabel('In plain English', entry.plainEnglish) + pcLabel('Your strength', entry.strength) +
    pcLabel('Growth edge', entry.shadow || entry.growthPattern) + pcLabel('In real life', entry.realLife || entry.theGift) + pcLabel('What helps', entry.whatHelps);
}

function pcSecPlanet(name){
  return function(ctx){
    var b = ctx.chart.bodies[name], key = pcLow(name), D = ctx.lib, html = '', entry;
    if (!b) return null;
    var timed = name === 'Moon' && !ctx.chart.timeKnown && ctx.chart.moonRange && ctx.chart.moonRange.changes;
    if (D[key] && D[key].signs) {
      entry = D[key].signs[pcLow(b.sign)];
      if (timed) {
        var mr = ctx.chart.moonRange, e1 = D.moon.signs[pcLow(mr.fromSign)], e2 = D.moon.signs[pcLow(mr.toSign)];
        html += '<p class="pc-note">Without a birth time, the Moon could be in <b>' + mr.fromSign + '</b> or <b>' + mr.toSign + '</b> (it changed signs that day). Both are shown; the one that feels most like home is usually it.</p>';
        html += '<h4>If the Moon is in ' + mr.fromSign + '</h4>' + pcP(pcSentences(e1.plainEnglish, ctx.opts.short ? 2 : 4)) + pcLabel('Try this', pcSentences(e1.whatHelps, 2));
        html += '<h4>If the Moon is in ' + mr.toSign + '</h4>' + pcP(pcSentences(e2.plainEnglish, ctx.opts.short ? 2 : 4)) + pcLabel('Try this', pcSentences(e2.whatHelps, 2));
        return {title: 'Moon in ' + mr.fromSign + ' or ' + mr.toSign, flag: pcFlag(true), html: html};
      }
      if (ctx.opts.archetype) html += pcArchBox(ctx, name, b.sign, entry);
      html += pcPlacementBody(ctx, entry);
    } else if (D[key] && D[key].signsGenerational) {
      if (ctx.opts.archetype) html += pcArchBox(ctx, name, b.sign, null);
      var gen = D[key].signsGenerational[pcLow(b.sign)];
      html += ctx.opts.short ? pcP(pcSentences(gen || D[key].intro, 2)) : pcP(D[key].intro) + pcLabel('Your generation', gen);
      if (ctx.chart.timeKnown && D[key].houses && D[key].houses[String(b.house)]) {
        html += pcLabel('Personally, in your ' + pcOrd(b.house) + ' house', ctx.opts.short ? pcSentences(D[key].houses[String(b.house)].text, 2) : D[key].houses[String(b.house)].text);
      }
    }
    if (!(D[key] && D[key].houses)) html += pcHouseLine(ctx, b);
    if (b.retro && !ctx.opts.short) html += '<p class="pc-note">' + name + ' was retrograde at birth: its energy tends to work inward first, reflecting and revisiting before it acts.</p>';
    var timedFlag = name === 'Moon' && !ctx.chart.timeKnown;
    return {title: pcPlacementTitle(ctx, b), deg: pcFmtDeg(b.lon) + (b.retro ? ' Rx' : '') + (ctx.chart.timeKnown ? ' · ' + pcOrd(b.house) + ' house' : ''), flag: pcFlag(timedFlag), html: html};
  };
}
function pcSecRising(ctx){
  if (!ctx.chart.timeKnown) return null;
  var b = ctx.chart.bodies.Ascendant, e = ctx.lib.rising.signs[pcLow(b.sign)], html = '';
  if (ctx.opts.archetype) html += '<div class="pc-r-arch"><b>' + pcEsc(e.primaryArchetype) + '</b> at the threshold: how you arrive and what people meet first.</div>';
  html += pcPlacementBody(ctx, e);
  if (e.chartRuler && !ctx.opts.short) html += pcLabel('Your chart ruler', e.chartRuler);
  return {title: ctx.opts.archetype ? pcEsc(e.primaryArchetype) + '<small>Rising in ' + b.sign + '</small>' : 'Rising in ' + b.sign, deg: pcFmtDeg(b.lon), flag: pcFlag(true), html: html};
}
function pcSecBig3(ctx){
  var B = ctx.chart.bodies, D = ctx.lib, rows = '';
  function row(label, planetKey, sign, note){
    var e = D[planetKey].signs[pcLow(sign)];
    var who = ctx.opts.archetype ? (e.primaryArchetype || '') : '';
    return '<div class="pc-big3"><div class="pc-big3-l">' + label + '</div><div><b>' + sign + (who ? ' · ' + pcEsc(who) : '') + '</b>' + (note || '') + '<p>' + pcEsc(pcSentences(e.plainEnglish, 2)) + '</p></div></div>';
  }
  rows += row('Sun · your core', 'sun', B.Sun.sign);
  if (!ctx.chart.timeKnown && ctx.chart.moonRange.changes) rows += '<div class="pc-big3"><div class="pc-big3-l">Moon · your needs</div><div><b>' + ctx.chart.moonRange.fromSign + ' or ' + ctx.chart.moonRange.toSign + '</b><p>Birth time unknown, so the Moon could be in either sign. See the Moon page for both.</p></div></div>';
  else rows += row('Moon · your needs', 'moon', B.Moon.sign);
  if (ctx.chart.timeKnown) rows += row('Rising · how you arrive', 'rising', B.Ascendant.sign);
  else rows += '<div class="pc-big3"><div class="pc-big3-l">Rising</div><div><b>Needs a birth time</b><p>The rising sign changes about every two hours. Add a birth time later to unlock it.</p></div></div>';
  return {title: ctx.opts.archetype ? 'Your Three Core Characters' : 'Your Big 3', html: rows};
}
function pcSecIntro(ctx){
  var t = ctx.lib.templates && ctx.lib.templates.intro, ps = t ? t.paragraphs : [], html = '';
  var arr = []; for (var k in ps) if (ps.hasOwnProperty(k)) arr.push(ps[k]);
  html += ctx.opts.short ? pcP(pcSentences(arr[0], 3)) : arr.map(pcP).join('');
  if (!ctx.chart.timeKnown) html += '<p class="pc-note">This reading was made without a birth time. Everything marked <b>Time-proof</b> holds no matter when you were born. Rising sign, houses and house-based timing need a birth time and are left out.</p>';
  return {title: 'Welcome', html: html};
}
function pcSecNodes(ctx){
  var n = ctx.chart.bodies['North Node'], e = ctx.lib.nodes.axisPairs[pcLow(n.sign)], html = '';
  if (!e) return null;
  if (ctx.opts.archetype && e.archetypeOfGrowth) html += '<div class="pc-r-arch">Growing toward <b>' + pcEsc(e.archetypeOfGrowth[0]) + '</b>. ' + pcEsc(PC_ARCH.CAST['North Node'].question) + '</div>';
  html += ctx.opts.short ? pcP(pcSentences(e.plainEnglish, 2)) + pcLabel('Try this', pcSentences(e.whatHelps, 2)) :
    pcP(pcSentences(ctx.lib.nodes.intro, 2)) + pcLabel('Your axis', e.plainEnglish) + pcLabel('The growth arc', e.growthArc) + pcLabel('What helps', e.whatHelps);
  return {title: 'North Node in ' + n.sign + ' · South Node in ' + ctx.chart.bodies['South Node'].sign, deg: pcFmtDeg(n.lon), flag: pcFlag(false), html: html};
}
function pcSecSimpleSigns(libKey, name){
  return function(ctx){
    var b = ctx.chart.bodies[name]; if (!b || !ctx.lib[libKey]) return null;
    var e = ctx.lib[libKey].signs[pcLow(b.sign)], html = '';
    if (ctx.opts.archetype) html += '<div class="pc-r-arch"><b>' + pcEsc(e.primaryArchetype) + '</b>' + (PC_ARCH.CAST[name] ? ' asks: <i>' + pcEsc(PC_ARCH.CAST[name].question) + '</i>' : '') + '</div>';
    html += pcPlacementBody(ctx, e) + pcHouseLine(ctx, b);
    return {title: name + ' in ' + b.sign, deg: pcFmtDeg(b.lon), flag: pcFlag(false), html: html};
  };
}
function pcAspectUsable(v){
  if (v && typeof v === 'object') v = v.text || v.reading || null;
  if (typeof v !== 'string' || !v) return null;
  if (/^\s*(note|n\/a)\b/i.test(v) || /not (astronomically )?possible|impossible|cannot (occur|form|happen)/i.test(v.slice(0, 160))) return null;
  return v;
}
function pcAspectText(ctx, a){
  var D = ctx.lib, tbls = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Uranus','Neptune','Pluto'], i, v;
  for (i = 0; i < tbls.length; i++) {
    var T = D['aspects' + tbls[i]]; if (!T) continue;
    if (a.a === tbls[i] && T[pcLow(a.b)]) { v = pcAspectUsable(T[pcLow(a.b)][a.key]); if (v) return v; }
    if (a.b === tbls[i] && T[pcLow(a.a)]) { v = pcAspectUsable(T[pcLow(a.a)][a.key]); if (v) return v; }
  }
  var t = D.aspectsSaturnStructural;
  if (t && a.a === 'Saturn' && t[pcLow(a.b)]) { v = pcAspectUsable(t[pcLow(a.b)][a.key]); if (v) return v; }
  if (t && a.b === 'Saturn' && t[pcLow(a.a)]) { v = pcAspectUsable(t[pcLow(a.a)][a.key]); if (v) return v; }
  return null;
}
function pcSecAspects(ctx){
  var list = ctx.chart.aspects, html = '', n = 0, max = ctx.opts.short ? 5 : 12;
  for (var i = 0; i < list.length && n < max; i++) {
    var a = list[i], txt = pcAspectText(ctx, a), def = ctx.lib.aspectDefinitions[a.key];
    if (!ctx.chart.timeKnown && (a.a === 'Moon' || a.b === 'Moon') && ctx.chart.moonRange.changes) continue;
    if (!txt && a.orb > 4) continue;
    if (!txt) {
      var ca = PC_ARCH.CAST[a.a], cb = PC_ARCH.CAST[a.b];
      if (!ca || !cb) continue;
      txt = ca.archetype + ' (' + ca.domain + ') ' + PC_ASPECT_PLAIN[a.key] + ' ' + cb.archetype + ' (' + cb.domain + '). ' + (def ? pcSentences(def.howItFeels, 1) : '');
    }
    var head = ctx.opts.archetype && PC_ARCH.CAST[a.a] && PC_ARCH.CAST[a.b] ? PC_ARCH.CAST[a.a].archetype + ' ' + PC_ASPECT_PLAIN[a.key] + ' ' + PC_ARCH.CAST[a.b].archetype : a.a + ' ' + a.name + ' ' + a.b;
    html += '<div class="pc-r-asp"><h4>' + pcEsc(head) + ' <span class="pc-orb">' + a.orb.toFixed(1) + '°</span></h4>' + pcP(ctx.opts.short ? pcSentences(txt, 2) : txt) + '</div>';
    n++;
  }
  if (!html) return null;
  return {title: ctx.opts.archetype ? 'Conversations Between Your Characters' : 'Your Major Aspects', html: (ctx.opts.short ? '' : pcP(pcSentences(ctx.lib.aspectDefinitions.intro, 2))) + html};
}
function pcSecBalance(ctx){
  var bal = pcBalance(ctx.chart), html = '<div class="pc-bars">', e;
  for (e in bal.elements) html += '<div class="pc-bar-row"><span>' + e + '</span><span class="pc-bar pc-el-' + pcLow(e) + '" style="width:' + (bal.elements[e] * 10 + 2) + '%"></span><b>' + bal.elements[e] + '</b></div>';
  html += '</div>';
  var top = null; for (e in bal.elements) if (!top || bal.elements[e] > bal.elements[top]) top = e;
  var T = PC_ARCH.TERRAIN[top];
  html += pcP((ctx.opts.archetype ? 'Your home terrain is ' + T.name + ': ' : 'Your strongest element is ' + top + ': ') + T.gift + '.');
  var EB = ctx.lib.elementalBalance;
  function ebText(el, kind){
    if (!EB) return null; var x = EB[pcLow(el)] || EB[el]; if (!x) return null;
    if (typeof x === 'string') return kind === 'strong' ? x : null;
    var keys = kind === 'strong' ? ['dominant','strong','high','emphasis','text'] : ['lacking','missing','low','absent','void'];
    for (var q = 0; q < keys.length; q++) if (typeof x[keys[q]] === 'string') return x[keys[q]];
    return null;
  }
  var ebTop = ebText(top, 'strong'); if (ebTop) html += pcLabel('Your element story', ctx.opts.short ? pcSentences(ebTop, 2) : ebTop);
  for (e in bal.elements) if (bal.elements[e] === 0) { var ebv = ebText(e, 'lack'); html += pcLabel('Missing ' + e, ctx.opts.short ? pcSentences(ebv || PC_ARCH.TERRAIN[e].void, 2) : (ebv || PC_ARCH.TERRAIN[e].void)); }
  var topM = null; for (var m in bal.modes) if (!topM || bal.modes[m] > bal.modes[topM]) topM = m;
  html += pcP((ctx.opts.archetype ? PC_ARCH.PACE[topM][0] + ': ' : 'Your pace is mostly ' + topM + ': ') + PC_ARCH.PACE[topM][1] + '.');
  return {title: ctx.opts.archetype ? 'Your Terrain and Pace' : 'Elements and Pace', html: html};
}
function pcThemeHTML(ctx, t){
  var P = ctx.lib.patterns, txt = '';
  if (t.kind === 'stellium' || t.kind === 'tSquare' || t.kind === 'grandTrine' || t.kind === 'yod') {
    var p = P[t.kind];
    txt = '<p class="pc-muted">' + pcEsc(t.planets.join(', ')) + '</p>';
    txt += ctx.opts.short ? pcP(pcSentences(p.howItFeels, 2)) + pcLabel('The gift', pcSentences(p.theGift, 1)) :
      pcLabel('What it is', p.whatItIs) + pcLabel('How it feels', p.howItFeels) + pcLabel('The gift', p.theGift) + pcLabel('The work', p.theWork) + pcLabel('What helps', p.whatHelps);
  } else if (t.kind === 'void') txt = pcP(PC_ARCH.TERRAIN[t.element].void);
  else if (t.kind === 'element') txt = pcP('With ' + t.count + ' planets in ' + t.element + ', ' + PC_ARCH.TERRAIN[t.element].gift + '.');
  else if (t.kind === 'mode') txt = pcP(PC_ARCH.PACE[t.mode][1].charAt(0).toUpperCase() + PC_ARCH.PACE[t.mode][1].slice(1) + '.');
  else if (t.kind === 'home') { var c = PC_ARCH.CAST[t.planets[0]]; txt = pcP('This planet works in its most natural setting, so ' + (c ? c.domain : 'its themes') + ' come through clearly and with ease. At its best: ' + (c ? c.light : '') + '.'); }
  else if (t.kind === 'angular') { var c2 = PC_ARCH.CAST[t.planets[0]]; txt = pcP('Planets on the angles are loud. ' + (c2 ? c2.archetype + ' is one of the main voices in this chart, so ' + c2.domain + ' becomes a defining theme.' : '')); }
  else if (t.kind === 'retro') txt = pcP('Several personal planets were retrograde at birth. These parts of you tend to process inward first, revisit, and refine. A slower, reflective rhythm is a strength, not a delay.');
  return txt;
}
function pcSecThemes(ctx){
  var picked = ctx.pickedThemes || [], html = '';
  for (var i = 0; i < ctx.themes.length; i++) {
    var t = ctx.themes[i];
    if (picked.length && picked.indexOf(t.id) < 0) continue;
    if (t.timed && !ctx.chart.timeKnown) continue;
    html += '<div class="pc-r-theme"><h4>' + pcEsc(t.title) + '</h4>' + pcThemeHTML(ctx, t) + '</div>';
  }
  if (!html) return null;
  return {title: ctx.opts.archetype ? 'The Big Themes in Your Story' : 'Chart Themes', html: html};
}
function pcSecCast(ctx){
  var html = '<div class="pc-cast">', list = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];
  for (var i = 0; i < list.length; i++) {
    var b = ctx.chart.bodies[list[i]], c = PC_ARCH.CAST[list[i]];
    var sign = (list[i] === 'Moon' && !ctx.chart.timeKnown && ctx.chart.moonRange.changes) ? null : b.sign;
    html += '<div class="pc-cast-card"><div class="pc-cast-g">' + PC_GLYPH[list[i]] + '</div><b>' + pcEsc(sign ? pcCharacter(list[i], sign) : c.archetype) + '</b><small>' + list[i] + (sign ? ' in ' + sign : '') + '</small><p>' + pcEsc(c.question) + '</p></div>';
  }
  return {title: 'Meet Your Cast of Characters', html: '<p>Each planet is a character in your story. The sign is the costume it wears.</p>' + html + '</div>'};
}
function pcSecHouses(ctx){
  if (!ctx.chart.timeKnown) return null;
  var html = '<table class="pc-table"><tr><th>House</th><th>Sign</th><th>Planets</th><th>Life area</th></tr>';
  for (var h = 1; h <= 12; h++) {
    var ps = [];
    for (var i = 0; i < ctx.chart.list.length; i++) { var b = ctx.chart.list[i]; if (b.house === h && b.name !== 'Ascendant' && b.name !== 'Midheaven' && b.name !== 'South Node') ps.push(b.name); }
    var st = PC_ARCH.HOUSE_STAGE[String(h)], e = ctx.lib.houses.entries[String(h)];
    html += '<tr><td>' + (ctx.opts.archetype ? st[0] : pcOrd(h)) + '</td><td>' + pcSignOf(ctx.chart.cusps[h - 1]) + '</td><td>' + (ps.join(', ') || 'None') + '</td><td>' + pcEsc(e ? e.lifeAreas : st[1]) + '</td></tr>';
  }
  var sys = {E:'Equal', W:'Whole Sign', P:'Placidus'}[ctx.chart.houseSystem];
  return {title: ctx.opts.archetype ? 'The Stages of Your Life' : 'Your Houses', flag: pcFlag(true), html: '<p class="pc-muted">House system: ' + sys + '</p>' + html + '</table>'};
}
function pcSecNumLP(ctx){
  var N = ctx.num, L = ctx.lib.numerology, e = L.lifePaths[String(N.lifePath)], html = '';
  if (!ctx.opts.short) html += pcP(pcSentences(L.standardFraming, 2));
  html += ctx.opts.short ? pcP(pcSentences(e.theme, 2)) + pcLabel('Your life task', e.lifeTask) :
    pcLabel('The theme', e.theme) + pcLabel('Gifts', e.gifts) + pcLabel('Growth edges', e.challenges) + pcLabel('Life task', e.lifeTask);
  return {title: 'Life Path ' + N.lifePath, flag: pcFlag(false), html: html};
}
function pcSecNumYear(ctx){
  var N = ctx.num, e = ctx.lib.numerology.personalYears[String(N.personalYear)];
  return {title: 'Personal Year ' + N.personalYear + ' (' + N.year + ')', flag: pcFlag(false), html: pcLabel('This year', ctx.opts.short ? pcSentences(e.theme, 2) : e.theme) + pcLabel('What helps', ctx.opts.short ? pcSentences(e.whatHelps, 2) : e.whatHelps)};
}
function pcSecNumName(ctx){
  var N = ctx.num; if (!N.expression) return null;
  function row(label, n, what){ var e = ctx.lib.numerology.lifePaths[String(n)]; return '<div class="pc-num"><div class="pc-num-n">' + n + '</div><div><b>' + label + '</b> <span class="pc-muted">' + what + '</span><p>The energy of ' + PC_NUMBER_WORD[n] + '. ' + pcEsc(ctx.opts.short ? '' : pcSentences(e.theme, 1)) + '</p></div></div>'; }
  return {title: 'Your Name Numbers', html: row('Expression', N.expression, 'your natural talents') + row('Soul Urge', N.soulUrge, 'what your heart wants') + row('Personality', N.personality, 'how others first see you') + row('Birthday', N.birthday, 'a special gift you carry')};
}
function pcSecHDType(ctx){
  var H = ctx.hd, T = PC_HD_TYPES[H.type];
  var html = ctx.opts.short ? pcP(T.short) : pcP(T.text) + '<div class="pc-kv"><div><b>Strategy</b>' + T.strategy + '</div><div><b>When aligned you feel</b>' + T.signature + '</div><div><b>Signal to slow down</b>' + T.notSelf + '</div></div>';
  return {title: 'Human Design: ' + H.type, flag: ctx.chart.timeKnown ? '' : '<span class="pc-flag pc-flag-time">Best with birth time</span>', html: html};
}
function pcSecHDAuth(ctx){ return {title: 'Your Decision Style: ' + ctx.hd.authority + ' Authority', html: pcP(PC_HD_AUTH[ctx.hd.authority])}; }
function pcSecHDProfile(ctx){
  var l = ctx.hd.profileLines;
  return {title: 'Profile ' + ctx.hd.profile, html: pcLabel('Conscious line ' + l[0], PC_HD_PROFILE_LINE[l[0]]) + pcLabel('Unconscious line ' + l[1], PC_HD_PROFILE_LINE[l[1]])};
}
function pcSecHDCenters(ctx){
  var html = '<div class="pc-centers">';
  for (var i = 0; i < ctx.hd.centers.length; i++) {
    var c = ctx.hd.centers[i], t = PC_HD_CENTER_TEXT[c.name];
    html += '<div class="pc-center ' + (c.defined ? 'is-def' : 'is-open') + '"><b>' + c.name + '</b> <span>' + (c.defined ? 'Defined' : 'Open') + '</span><small>' + t[0] + '</small>' + (ctx.opts.short ? '' : '<p>' + pcEsc(c.defined ? t[1] : t[2]) + '</p>') + '</div>';
  }
  var ch = ctx.hd.channels.map(function(x){ return x.gates.join('-') + ' (' + x.centers.join(' to ') + ')'; }).join('; ');
  return {title: 'Your Energy Centers', html: html + '</div>' + (ch ? '<p class="pc-muted">Defined channels: ' + ch + '</p>' : '')};
}
function pcCardHTML(n, label){ var c = PC_TAROT[n]; return '<div class="pc-tcard"><div class="pc-tcard-n">' + (n === 0 ? '0' : n) + '</div><b>' + c[0] + '</b>' + (label ? '<small>' + label + '</small>' : '') + '<p>' + c[1] + '</p></div>'; }
function pcSecTarotBirth(ctx){
  var T = ctx.tarot, html = '<p>Your birth cards are the Major Arcana that walk with you for life' + (T.birth.length > 1 ? ': a pair (or trio) that work as a team.' : '.') + '</p><div class="pc-tcards">';
  for (var i = 0; i < T.birth.length; i++) html += pcCardHTML(T.birth[i], i === 0 ? 'Soul card' : 'Personality card');
  return {title: 'Tarot Birth Cards', flag: pcFlag(false), html: html + '</div>'};
}
function pcSecTarotYear(ctx){
  var T = ctx.tarot, html = '<div class="pc-tcards">';
  for (var i = 0; i < T.year.length; i++) html += pcCardHTML(T.year[i], T.yearNum);
  return {title: 'Your ' + T.yearNum + ' Year Card', html: html + '</div>'};
}
function pcSecTarotBig3(ctx){
  var B = ctx.tarot.big3, html = '<div class="pc-tcards">';
  html += pcCardHTML(B.Sun, 'Sun in ' + ctx.chart.bodies.Sun.sign);
  if (B.Moon !== null && B.Moon !== undefined) html += pcCardHTML(B.Moon, 'Moon in ' + ctx.chart.bodies.Moon.sign);
  if (B.Rising !== undefined) html += pcCardHTML(B.Rising, 'Rising in ' + ctx.chart.bodies.Ascendant.sign);
  return {title: 'Your Big 3 in the Tarot', html: html + '</div>'};
}
function pcFmtDate(d){ return d.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'}); }
function pcTransitHTML(ctx, t){
  var mc = PC_ARCH.CAST[t.mover], tc = PC_ARCH.CAST[t.target];
  var head = ctx.opts.archetype && tc ? mc.archetype + ' ' + PC_ASPECT_PLAIN[t.key] + ' your ' + (t.target === 'Ascendant' || t.target === 'Midheaven' ? t.target : pcCharacter(t.target, ctx.chart.bodies[t.target].sign)) : t.mover + ' ' + t.name + ' your ' + t.target;
  var area = tc ? tc.domain : (t.target === 'Ascendant' ? 'how you show up and your personal direction' : 'career, reputation and public path');
  var body = 'A season of ' + PC_TRANSIT_THEME[t.mover] + ', touching ' + area + '.';
  var def = ctx.lib.aspectDefinitions[t.key];
  if (!ctx.opts.short && def) body += ' ' + pcSentences(def.howItFeels, 1);
  return '<div class="pc-r-asp"><h4>' + pcEsc(head) + '</h4><div class="pc-muted">' + pcFmtDate(t.start) + ' to ' + pcFmtDate(t.end) + ' · strongest around ' + pcFmtDate(t.exact) + '</div>' + pcP(body) + '</div>';
}
function pcSecTransitsNow(ctx){
  var html = ''; for (var i = 0; i < ctx.transits.length; i++) if (ctx.transits[i].active) html += pcTransitHTML(ctx, ctx.transits[i]);
  if (!html) html = pcP('No major outer-planet transits are exact to your personal planets right now. A quieter stretch is a good time to build.');
  return {title: 'What Is Active Now', html: html};
}
function pcSecTransitsYear(ctx){
  var html = '', n = 0; for (var i = 0; i < ctx.transits.length; i++) if (!ctx.transits[i].active && n < (ctx.opts.short ? 5 : 12)) { html += pcTransitHTML(ctx, ctx.transits[i]); n++; }
  if (!html) return null;
  return {title: 'The Year Ahead', html: html};
}
function pcSecProfection(ctx){
  var P = ctx.prof; if (!P) return null;
  var L = ctx.lib.profection, lordKey = L.rulers[pcLow(P.sign)].traditional, lord = lordKey.charAt(0).toUpperCase() + lordKey.slice(1);
  var e = ctx.lib.houses.entries[String(P.house)], c = PC_ARCH.CAST[lord];
  var html = (ctx.opts.short ? '' : pcP(L.standardFraming)) + pcLabel('Age ' + P.age + ': your ' + pcOrd(P.house) + ' house year (' + P.sign + ')', ctx.opts.short ? pcSentences(e.text, 1) : e.text) +
    pcLabel('Your guide this year: ' + lord + (ctx.opts.archetype && c ? ', ' + c.archetype : ''), c ? 'Themes of ' + c.domain + ' come forward. ' + c.question : '');
  return {title: 'Your Year Theme (Profection)', flag: pcFlag(true), html: html};
}
function pcSecClosing(ctx){
  var note = ctx.note || '';
  var html = note ? note.split(/\n\n+/).map(function(p){ return '<p>' + pcEsc(p).replace(/\n/g, '<br>') + '</p>'; }).join('') : pcP('Thank you for exploring your chart with me. Take what resonates, leave what does not, and come back to these pages as you grow. Your chart is a map for learning, not a box.');
  return {title: 'A Note From ' + pcEsc(ctx.practitionerName || 'Your Reader'), html: html};
}


/* ---------- Tree of Life sections ---------- */
var PC_LEVEL_WORD = {radiant:'Radiant', steady:'Steady', growing:'Growth edge'};
function pcSephName(ctx, k){ var S = PC_SEPH[k]; return ctx.opts.archetype ? S.arch + ' (' + S.name + ')' : S.name + ', ' + S.title; }
function pcSecTreeMap(ctx){
  var T = ctx.tree, lit = T.paths.filter(function(p){ return p.score > 0; }).length;
  var html = '<div class="pc-tree-wrap">' + pcTreeSVG(T) + '<div>';
  html += pcP('The Tree of Life is the master map of the Hermetic Qabalah: ten spheres (Sephiroth) joined by twenty-two paths. Each sphere holds a planet, and each path holds a Hebrew letter, a tarot trump and a sign, planet or element.');
  if (!ctx.opts.short) html += pcP('Your birth chart lights this map up. A sphere glows gold when its planet is strong in your chart, teal when it is steady, and coral where it is a growth edge. Purple paths are the journeys your chart emphasizes.');
  html += '<div class="pc-kv"><div><b>Lit paths</b>' + lit + ' of 22</div><div><b>Soul Sephira</b>' + PC_SEPH[T.soul.key].name + '</div><div><b>Leading pillar</b>' + {mercy:'Mercy', severity:'Severity', middle:'Balance'}[T.leadPillar] + '</div></div>';
  if (!ctx.chart.timeKnown) html += '<p class="pc-note">Made without a birth time. The map is time-proof except for angle bonuses' + (ctx.chart.moonRange.changes ? ', and Yesod (the Moon) is drawn dotted because the Moon changed signs that day' : '') + '.</p>';
  return {title: ctx.opts.archetype ? 'Your Tree of Life Map' : 'Tree of Life: Your Map', flag: pcFlag(false), html: html + '</div></div>'};
}
function pcSecTreeSeph(ctx){
  var T = ctx.tree, html = '', order = ['radiant','steady','growing'];
  for (var o = 0; o < order.length; o++) {
    var group = '';
    for (var i = 0; i < PC_SEPH_ORDER.length; i++) {
      var k = PC_SEPH_ORDER[i], S = PC_SEPH[k], r = T.seph[k];
      if (S.hidden || r.level !== order[o]) continue;
      if (ctx.opts.short && order[o] === 'steady') continue;
      var head = '<h4><span class="pc-lvl pc-lvl-' + r.level + '">' + PC_LEVEL_WORD[r.level] + '</span> ' + S.n + '. ' + pcEsc(pcSephName(ctx, k)) + ' <span class="pc-orb">' + (S.planet === 'Earth' ? 'Earth' : S.planet) + (r.sign ? ' in ' + r.sign : '') + '</span></h4>';
      var body = ctx.opts.short ? pcP(pcSentences(S.text, 1) + ' ' + (r.level === 'growing' ? 'Your growth edge: ' + S.edge + '.' : 'Your gift: ' + S.gift + '.')) :
        pcP(S.text) + (r.unsure ? '<p class="pc-note">The Moon changed signs on this birthday, so this sphere\'s strength is uncertain without a birth time.</p>' : '') +
        '<p class="pc-muted">Why: ' + pcEsc(r.notes.join('; ')) + '</p>' + pcLabel('Your gift', S.gift.charAt(0).toUpperCase() + S.gift.slice(1) + '.') + pcLabel('Your growth edge', S.edge.charAt(0).toUpperCase() + S.edge.slice(1) + '.') + pcLabel('Try this', S.practice);
      group += '<div class="pc-r-asp">' + head + body + '</div>';
    }
    html += group;
  }
  var dk = T.seph.daath;
  if (!ctx.opts.short) html += '<div class="pc-r-asp"><h4>The hidden sphere: ' + (ctx.opts.archetype ? 'The Threshold (Daath)' : 'Daath, Knowledge') + ' <span class="pc-orb">Pluto in ' + dk.sign + '</span></h4>' + pcP(PC_SEPH.daath.text) + pcLabel('Try this', PC_SEPH.daath.practice) + '</div>';
  return {title: ctx.opts.archetype ? 'The Spheres of Your Tree' : 'Your Sephiroth', html: (ctx.opts.short ? '' : pcP('Each sphere is a quality of life, carried by a planet. Uranus, Neptune and Pluto follow the modern placements (Chokmah, Kether and the hidden Daath); the seven classical planets follow the Golden Dawn.')) + html};
}
function pcPathHTML(ctx, p, extra){
  var card = PC_TAROT[p.trump];
  var head = 'Path ' + p.num + ' · ' + p.hebrew + ' ' + p.letter + ' · ' + card[0];
  return '<div class="pc-path"><div class="pc-path-n">' + p.hebrew + '</div><div><h4>' + pcEsc(head) + ' <span class="pc-orb">' + p.attr + '</span></h4>' +
    '<p>From ' + pcEsc(pcSephName(ctx, p.from)) + ' to ' + pcEsc(pcSephName(ctx, p.to)) + ': ' + pcEsc(p.meaning) + '.' + (ctx.opts.short ? '' : ' ' + pcEsc(card[1])) + '</p>' +
    (extra ? '<p class="pc-muted">' + pcEsc(extra) + '</p>' : (p.why.length ? '<p class="pc-muted">Lit by: ' + pcEsc(p.why.join('; ')) + '</p>' : '')) + '</div></div>';
}
function pcSecTreePaths(ctx){
  var list = ctx.tree.paths.filter(function(p){ return p.score > 0; }).sort(function(a, b){ return b.score - a.score || a.num - b.num; });
  if (!list.length) return null;
  var max = ctx.opts.short ? 4 : 12, html = '';
  for (var i = 0; i < list.length && i < max; i++) html += pcPathHTML(ctx, list[i]);
  return {title: ctx.opts.archetype ? 'The Journeys Your Chart Walks' : 'Your Lit Paths', html: (ctx.opts.short ? '' : pcP('The paths are the journeys between spheres. Your chart lights a path when planets sit in its sign, when its planet is strong, or when its element is emphasized. The brightest come first.')) + html};
}
function pcSecTreeSoul(ctx){
  var T = ctx.tree, s = PC_SEPH[T.soul.key], y = PC_SEPH[T.year.key], html = '';
  html += '<div class="pc-r-asp"><h4>Soul Sephira: ' + pcEsc(pcSephName(ctx, T.soul.key)) + ' <span class="pc-orb">Life Path ' + T.soul.num + '</span></h4>' + pcP(ctx.opts.short ? pcSentences(s.text, 1) + ' Your gift: ' + s.gift + '.' : s.text + ' Your Life Path number places your soul\'s home base here. Your gift: ' + s.gift + '.') + '</div>';
  if (T.soul.num > 9) html += '<p class="pc-note">Master number ' + T.soul.num + ': it reduces to ' + pcSephName(ctx, T.soul.key) + ', carrying a higher octave of that sphere\'s work.</p>';
  html += '<div class="pc-r-asp"><h4>This year\'s sphere: ' + pcEsc(pcSephName(ctx, T.year.key)) + ' <span class="pc-orb">Personal Year ' + T.year.num + ' (' + T.year.yr + ')</span></h4>' + pcP('This year invites you to practice ' + y.gift + '. ' + (ctx.opts.short ? '' : 'Try this: ' + y.practice)) + '</div>';
  html += '<h4>Your birth card on the Tree</h4>';
  for (var i = 0; i < T.birthPaths.length; i++) html += pcPathHTML(ctx, T.birthPaths[i], i === 0 ? 'Your soul card\'s path' : 'Your personality card\'s path');
  if (!ctx.opts.short) html += pcPathHTML(ctx, T.yearPath, 'Your ' + T.year.yr + ' year card\'s path');
  return {title: 'Your Soul Sphere and Birth-Card Paths', flag: pcFlag(false), html: html};
}
function pcSecTreePillars(ctx){
  var P = ctx.tree.pillars, tot = P.mercy + P.severity + P.middle || 1, html = '<div class="pc-bars">';
  var rows = [['Mercy','mercy','#0f9e94'],['Balance','middle','#e8a923'],['Severity','severity','#e0663f']];
  for (var i = 0; i < rows.length; i++) html += '<div class="pc-bar-row"><span>' + rows[i][0] + '</span><span class="pc-bar" style="width:' + Math.round(P[rows[i][1]] / tot * 100) + '%;background:' + rows[i][2] + '"></span><b>' + Math.round(P[rows[i][1]] / tot * 100) + '%</b></div>';
  html += '</div>';
  var txt = {
    mercy: 'The Pillar of Mercy (Chokmah, Chesed, Netzach) leads. You grow through expansion, generosity, inspiration and feeling. Your growth practice is adding gentle structure so all that energy has a shape to flow into.',
    severity: 'The Pillar of Severity (Binah, Geburah, Hod) leads. You grow through focus, form, discernment and understanding. Your growth practice is softening into receiving, play and kindness toward yourself.',
    middle: 'The Middle Pillar of Balance (Kether, Tiphareth, Yesod, Malkuth) leads, or your pillars are fairly even. You grow by staying centered and bringing spirit down into everyday life. Your growth practice is letting yourself lean fully into one side when life calls for it.'
  }[ctx.tree.leadPillar];
  return {title: 'Your Pillar Balance', html: html + pcP(ctx.opts.short ? pcSentences(txt, 2) : txt)};
}


/* ---------- Destiny Matrix sections ---------- */
function pcArc(n){ return PC_ARCANA[n]; }
function pcMxRow(ctx, key, n){
  var a = pcArc(n), pos = PC_MX_POS[key];
  if (ctx.opts.short) return '<div class="pc-num"><div class="pc-num-n" style="background:var(--plum)">' + n + '</div><div><b>' + pcEsc(pos[0]) + ': ' + pcEsc(a[0]) + '</b><p>' + pcEsc(a[1].charAt(0).toUpperCase() + a[1].slice(1)) + '.</p></div></div>';
  return '<div class="pc-num"><div class="pc-num-n" style="background:var(--plum)">' + n + '</div><div><b>' + pcEsc(pos[0]) + ': ' + pcEsc(a[0]) + '</b><p class="pc-muted">' + pcEsc(pos[1]) + '</p>' +
    pcLabel('In balance', a[1].charAt(0).toUpperCase() + a[1].slice(1) + '.') + pcLabel('Growth edge', a[2].charAt(0).toUpperCase() + a[2].slice(1) + '.') + '</div></div>';
}
function pcSecMxMap(ctx){
  var m = ctx.matrix;
  var html = '<div class="pc-tree-wrap">' + pcMatrixSVG(m) + '<div>' + pcP('The Destiny Matrix maps your birth date onto the 22 Major Arcana. Each point is an energy you carry, with a balanced side to grow into and a growth edge to work with.') +
    '<div class="pc-kv"><div><b>Comfort zone</b>' + m.E + ' · ' + pcArc(m.E)[0] + '</div><div><b>Talents</b>' + m.B + ' · ' + pcArc(m.B)[0] + '</div><div><b>Karmic tail</b>' + m.D + '-' + m.D1 + '-' + m.D2 + '</div><div><b>Life purpose</b>' + m.personal + ' · ' + pcArc(m.personal)[0] + '</div></div></div></div>';
  return {title: 'Destiny Matrix: Your Chart', flag: pcFlag(false), html: html};
}
function pcSecMxCore(ctx){
  var m = ctx.matrix;
  return {title: 'Your Core Energies', html: pcMxRow(ctx, 'E', m.E) + pcMxRow(ctx, 'A', m.A) + pcMxRow(ctx, 'B', m.B) + pcMxRow(ctx, 'C', m.C)};
}
function pcSecMxKarma(ctx){
  var m = ctx.matrix, html = pcP('Your karmic tail is ' + m.D + '-' + m.D1 + '-' + m.D2 + ': the lessons you came in with, read from the outside in.');
  html += pcMxRow(ctx, 'D', m.D);
  if (!ctx.opts.short) html += pcLabel('Inner steps', m.D1 + ' (' + pcArc(m.D1)[0] + ') and ' + m.D2 + ' (' + pcArc(m.D2)[0] + '): ' + pcArc(m.D1)[1] + '; ' + pcArc(m.D2)[1] + '.');
  return {title: 'Your Karmic Tail', html: html};
}
function pcSecMxAncestors(ctx){
  var m = ctx.matrix;
  return {title: 'Your Ancestral Lines', html: (ctx.opts.short ? '' : pcP('The outer square shows what flows through your family lines: gifts to use and patterns to transform.')) + pcMxRow(ctx, 'F', m.F) + pcMxRow(ctx, 'G', m.G) + pcMxRow(ctx, 'Y', m.Y) + pcMxRow(ctx, 'K', m.K)};
}
function pcSecMxPurpose(ctx){
  var m = ctx.matrix;
  function row(label, when, n, parts){ var a = pcArc(n); return '<div class="pc-num"><div class="pc-num-n" style="background:var(--teal)">' + n + '</div><div><b>' + label + ': ' + pcEsc(a[0]) + '</b> <span class="pc-muted">' + when + '</span><p>' + pcEsc(a[1].charAt(0).toUpperCase() + a[1].slice(1)) + '.' + (ctx.opts.short || !parts ? '' : ' <span class="pc-muted">(' + parts + ')</span>') + '</p></div></div>'; }
  return {title: 'Your Life Purposes', html: (ctx.opts.short ? '' : pcP('Your matrix shows three purposes that unfold over a lifetime. They build on each other.')) +
    row('Personal purpose', 'finding yourself, about ages 20 to 40', m.personal, 'sky ' + m.sky + ' + earth ' + m.earth) +
    row('Social purpose', 'your place among people, about ages 40 to 60', m.social, 'father line ' + m.male + ' + mother line ' + m.female) +
    row('Spiritual purpose', 'your deepest calling, 60 and beyond', m.spiritual, null)};
}

/* ---------- Annual Profection sections ---------- */
function pcProfNote(ctx){ var P = ctx.prof2; return P.solar ? '<p class="pc-note">Birth time unknown, so this uses a <b>solar profection</b>: counted from the Sun sign (' + P.base + ') instead of the rising sign.</p>' : ''; }
function pcSecProfYear(ctx){
  var P = ctx.prof2, L = ctx.lib.profection, e = ctx.lib.houses.entries[String(P.house)], c = PC_ARCH.CAST[P.lord], st = PC_ARCH.HOUSE_STAGE[String(P.house)];
  var html = pcProfNote(ctx) + (ctx.opts.short ? '' : pcP(L.standardFraming));
  html += '<div class="pc-kv"><div><b>Age</b>' + P.age + '</div><div><b>Year</b>' + P.from + ' to ' + P.to + ' birthdays</div><div><b>Activated house</b>' + pcOrd(P.house) + (ctx.opts.archetype ? ', ' + st[0] : '') + '</div><div><b>Year sign</b>' + P.sign + '</div><div><b>Lord of the Year</b>' + P.lord + '</div></div>';
  html += pcLabel('Theme of the year', ctx.opts.short ? pcSentences(e.text, 1) : e.text);
  if (P.activated.length) html += pcLabel('Planets switched on this year', P.activated.join(', ') + ' (already in ' + P.sign + ' in your chart, so their themes come forward too).');
  return {title: ctx.opts.archetype ? 'Your Year on the Stage of ' + st[0] : 'Annual Profection: Your Year at a Glance', flag: P.solar ? '' : pcFlag(true), html: html};
}
function pcSecProfLord(ctx){
  var P = ctx.prof2, b = P.lordBody, c = PC_ARCH.CAST[P.lord], key = pcLow(P.lord), D = ctx.lib, e = D[key] && D[key].signs ? D[key].signs[pcLow(b.sign)] : null, html = '';
  html += pcP(P.lord + ' guides this year. Its placement in your birth chart shows how the year wants to unfold for you.');
  if (ctx.opts.archetype && c) html += '<div class="pc-r-arch"><b>' + pcEsc(pcCharacter(P.lord, b.sign)) + '</b> leads this year and asks: <i>' + pcEsc(c.question) + '</i></div>';
  html += pcLabel('Where it lives in your chart', P.lord + ' in ' + b.sign + (ctx.chart.timeKnown ? ', ' + pcOrd(b.house) + ' house' : '') + (b.retro ? ', retrograde' : '') + '.');
  if (e) html += ctx.opts.short ? pcP(pcSentences(e.plainEnglish, 2)) : pcLabel('What that means', pcSentences(e.plainEnglish, 3)) + pcLabel('Lean into', pcSentences(e.strength, 2)) + pcLabel('Watch for', pcSentences(e.shadow, 2));
  if (c) html += pcLabel('Make the most of it', 'Give energy to ' + c.domain + '. At its best this brings ' + c.light + '.');
  var tr = (ctx.transits || []).filter(function(t){ return t.target === P.lord; });
  if (tr.length && !ctx.opts.short) html += pcLabel('Big transits to your year lord', tr.slice(0, 4).map(function(t){ return t.mover + ' ' + t.name + ' ' + P.lord + ' (strongest ' + pcFmtDate(t.exact) + ')'; }).join('; ') + '. These are peak moments of the year.');
  return {title: (ctx.opts.archetype && c ? c.archetype : P.lord) + ': Lord of Your Year', html: html};
}
function pcSecProfCycle(ctx){
  var P = ctx.prof2, html = pcProfNote(ctx) + '<table class="pc-table"><tr><th>Age</th><th>Birthday year</th><th>House</th><th>Sign</th><th>Lord</th></tr>';
  for (var i = 0; i < P.cycle.length; i++) {
    var y = P.cycle[i];
    html += '<tr' + (i === 0 ? ' style="background:var(--gold-l);font-weight:700"' : '') + '><td>' + y.age + (i === 0 ? ' (now)' : '') + '</td><td>' + y.from + '</td><td>' + (ctx.opts.archetype ? PC_ARCH.HOUSE_STAGE[String(y.house)][0] : pcOrd(y.house)) + '</td><td>' + y.sign + '</td><td>' + y.lord + '</td></tr>';
  }
  html += '</table>';
  var n = P.next, ne = ctx.lib.houses.entries[String(n.house)];
  html += pcLabel('Next year (from your ' + n.from + ' birthday)', 'Your ' + pcOrd(n.house) + ' house year, guided by ' + n.lord + '. ' + pcSentences(ne.text, 1));
  return {title: 'Your 12-Year Profection Cycle', html: html};
}

function pcSecWheel(ctx){
  var ch = ctx.chart, rows = '', order = PC_BODIES.concat(['North Node','Chiron','Lilith']);
  if (ch.timeKnown) order = order.concat(['Ascendant','Midheaven']);
  for (var i = 0; i < order.length; i++) {
    var b = ch.bodies[order[i]]; if (!b) continue;
    var unsure = order[i] === 'Moon' && !ch.timeKnown && ch.moonRange.changes;
    rows += '<tr><td>' + PC_GLYPH[order[i]] + '︎ ' + order[i] + '</td><td>' + (unsure ? ch.moonRange.fromSign + ' or ' + ch.moonRange.toSign : pcFmtDeg(b.lon) + (b.retro ? ' R' : '')) + '</td>' + (ch.timeKnown ? '<td>' + (b.house ? pcOrd(b.house) : '') + '</td>' : '') + '</tr>';
  }
  var sys = {E:'Equal', W:'Whole Sign', P:'Placidus'}[ch.houseSystem];
  return {title: 'Your Birth Chart', html: '<div class="pc-wheel-wrap">' + pcWheelSVG(ch, 520) + '<div><table class="pc-table pc-pos"><tr><th>Point</th><th>Position</th>' + (ch.timeKnown ? '<th>House</th>' : '') + '</tr>' + rows + '</table>' +
    '<p class="pc-muted">' + (ch.timeKnown ? sys + ' houses. ' : 'No birth time, so the chart is drawn from 0° Aries without houses. ') + 'Teal lines flow easily (trines, sextiles); coral lines ask for work (squares, oppositions).</p></div></div>'};
}


/* ---------- Solar Return ---------- */
function pcSR(ctx){ if (!ctx._sr) ctx._sr = pcSolarReturn(ctx); return ctx._sr; }
function pcSecSRWheel(ctx){
  var sr = pcSR(ctx), when = sr.when.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
  return {title: 'Solar Return ' + sr.returnYear + ' to ' + (sr.returnYear + 1), html: '<div class="pc-wheel-wrap">' + pcWheelSVG(sr, 520) + '<div>' +
    pcP('Your Solar Return chart is cast for the moment the Sun comes back to the exact degree it held when you were born. It describes the themes of your birthday year, from one birthday to the next.') +
    '<div class="pc-kv"><div><b>Return moment</b>' + when + '</div><div><b>Year Rising</b>' + sr.bodies.Ascendant.sign + '</div><div><b>Year Sun house</b>' + pcOrd(sr.bodies.Sun.house) + '</div><div><b>Year Moon</b>' + sr.bodies.Moon.sign + ', ' + pcOrd(sr.bodies.Moon.house) + ' house</div></div>' +
    '<p class="pc-muted">Cast for the birth location.</p></div></div>'};
}
function pcSecSRThemes(ctx){
  var sr = pcSR(ctx), D = ctx.lib, b = sr.bodies, html = '';
  var re = D.rising && D.rising.signs[pcLow(b.Ascendant.sign)];
  if (re) html += pcLabel('The tone of the year: ' + b.Ascendant.sign + ' rising', ctx.opts.short ? pcSentences(re.plainEnglish, 2) : pcSentences(re.plainEnglish, 3) + ' ' + pcSentences(re.whatHelps, 1));
  var sh = D.houses.entries[String(b.Sun.house)];
  html += pcLabel('Where your energy goes: Sun in the ' + pcOrd(b.Sun.house) + ' house', (sh ? pcSentences(sh.text, ctx.opts.short ? 1 : 2) : '') + ' This area of life is where the year asks you to shine and grow.');
  var mh = D.houses.entries[String(b.Moon.house)], me = D.moon.signs[pcLow(b.Moon.sign)];
  html += pcLabel('What you need this year: Moon in ' + b.Moon.sign + ', ' + pcOrd(b.Moon.house) + ' house', (me ? pcSentences(me.plainEnglish, 1) + ' ' : '') + (mh ? pcSentences(mh.text, 1) : ''));
  var ang = [];
  for (var i = 0; i < PC_BODIES.length; i++) { var x = b[PC_BODIES[i]]; if (x.house === 1 || x.house === 4 || x.house === 7 || x.house === 10) ang.push(PC_BODIES[i] + ' (' + pcOrd(x.house) + ')'); }
  if (ang.length) html += pcLabel('Loudest voices of the year', ang.join(', ') + '. Planets on the angles of a return chart show up strongly and visibly in the year.');
  return {title: ctx.opts.archetype ? 'Your Birthday Year Story' : 'Solar Return Themes', html: html};
}
/* ---------- Progressions ---------- */
function pcProg(ctx){ if (!ctx._prog) ctx._prog = pcProgressed(ctx); return ctx._prog; }
function pcSecProgMoon(ctx){
  var p = pcProg(ctx), m = p.bodies.Moon, D = ctx.lib, e = D.moon.signs[pcLow(m.sign)], html = '';
  html += pcP('Your progressed Moon moves about one sign every two and a half years. It shows the emotional chapter you are living right now.');
  html += pcLabel('Your current chapter: progressed Moon in ' + m.sign + (m.natalHouse ? ', ' + pcOrd(m.natalHouse) + ' house' : ''), e ? (ctx.opts.short ? pcSentences(e.plainEnglish, 2) : pcSentences(e.plainEnglish, 3) + ' ' + pcSentences(e.whatHelps, 2)) : '');
  if (m.natalHouse) { var h = D.houses.entries[String(m.natalHouse)]; if (h) html += pcLabel('Where it shows up', pcSentences(h.text, 1)); }
  if (p.moonNextSignIn !== null) { var months = Math.round(p.moonNextSignIn * 12); html += pcLabel('Next chapter', 'It moves into ' + PC_SIGNS[(PC_SIGNS.indexOf(m.sign) + 1) % 12] + ' in about ' + months + ' month' + (months === 1 ? '' : 's') + '.'); }
  html += pcLabel('Life cycle phase: ' + p.phase, PC_PHASE_TEXT[p.phase]);
  return {title: 'Progressed Moon: Your Emotional Chapter', flag: pcFlag(false), html: html};
}
function pcSecProgSun(ctx){
  var p = pcProg(ctx), s = p.bodies.Sun, n = ctx.chart.bodies.Sun, D = ctx.lib, e = D.sun.signs[pcLow(s.sign)], html = '';
  html += pcLabel('Your evolving identity: progressed Sun in ' + s.sign, (s.sign !== n.sign ? 'Your Sun has grown from ' + n.sign + ' into ' + s.sign + '. ' : 'Your progressed Sun is still in ' + n.sign + ', deepening its themes. ') + (e ? pcSentences(e.plainEnglish, ctx.opts.short ? 1 : 2) : ''));
  if (p.hits.length) {
    var rows = '';
    for (var i = 0; i < p.hits.length && i < (ctx.opts.short ? 3 : 6); i++) {
      var h = p.hits[i], cm = PC_ARCH.CAST[h.mover], ct = PC_ARCH.CAST[h.target];
      rows += '<div class="pc-r-asp"><h4>Progressed ' + h.mover + ' ' + h.name + ' natal ' + h.target + ' <span class="pc-orb">' + h.orb.toFixed(1) + '°</span></h4>' + pcP((cm ? cm.archetype + ' ' : '') + PC_ASPECT_PLAIN[h.key] + ' ' + (ct ? ct.archetype + ' (' + ct.domain + ')' : 'your ' + h.target) + '. A slow, meaningful theme that unfolds over about a year.') + '</div>';
    }
    html += '<h4>Active progressions</h4>' + rows;
  }
  return {title: 'Secondary Progressions: How You Are Growing', html: html};
}
/* ---------- Draconic ---------- */
function pcDrac(ctx){ if (!ctx._drac) ctx._drac = pcDraconic(ctx); return ctx._drac; }
function pcSecDracWheel(ctx){
  var d = pcDrac(ctx);
  return {title: 'Your Draconic (Soul) Chart', html: '<div class="pc-wheel-wrap">' + pcWheelSVG(d, 520) + '<div>' + pcP('The draconic chart measures the zodiac from your North Node instead of from the spring equinox. Many astrologers read it as the soul\'s intention: the deeper motivation underneath the personality shown in the birth chart.') +
    '<div class="pc-kv"><div><b>Soul Sun</b>' + d.bodies.Sun.sign + '</div><div><b>Soul Moon</b>' + d.bodies.Moon.sign + '</div>' + (d.timeKnown ? '<div><b>Soul Rising</b>' + d.bodies.Ascendant.sign + '</div>' : '') + '</div></div></div>'};
}
function pcSecDracBig3(ctx){
  var d = pcDrac(ctx), D = ctx.lib, html = '';
  function row(label, key, body, libKey){
    var e = D[libKey].signs[pcLow(body.sign)]; if (!e) return '';
    return '<div class="pc-r-asp"><h4>' + label + ' in ' + body.sign + (e.primaryArchetype ? ' <span class="pc-orb">' + pcEsc(e.primaryArchetype) + '</span>' : '') + '</h4>' + pcP(pcSentences(e.plainEnglish, ctx.opts.short ? 1 : 2) + (ctx.opts.short ? '' : ' At soul level, this is a quality you came here to grow into.')) + '</div>';
  }
  html += row('Soul Sun', 'sun', d.bodies.Sun, 'sun') + row('Soul Moon', 'moon', d.bodies.Moon, 'moon');
  if (d.timeKnown) html += row('Soul Rising', 'rising', d.bodies.Ascendant, 'rising');
  var n = ctx.chart.bodies, diff = [];
  ['Sun','Moon','Mercury','Venus','Mars'].forEach(function(k){ diff.push(k + ': ' + n[k].sign + ' (birth) to ' + d.bodies[k].sign + ' (soul)'); });
  if (!ctx.opts.short) html += pcLabel('Birth chart and soul chart side by side', diff.join('; ') + '.');
  return {title: 'Soul Purpose Placements', html: html};
}
/* ---------- Synastry ---------- */
function pcSynCtx(ctx){
  if (!ctx.partner) return null;
  if (!ctx._syn) { var pc = ctx.partner; ctx._pchart = pcCalcChart({y: pc.y, mo: pc.mo, d: pc.d, h: pc.h, mi: pc.mi, timeKnown: pc.timeKnown, lat: pc.lat, lon: pc.lon, tz: pc.tz, house: pc.house || 'E'}); ctx._syn = pcSynastry(ctx, ctx._pchart); }
  return ctx._syn;
}
function pcSecSynOverview(ctx){
  var syn = pcSynCtx(ctx); if (!syn) return {title: 'Synastry', html: '<p class="pc-note">Choose a second client in "Compare with" to add synastry.</p>'};
  var A = ctx.chart, B = ctx._pchart, a1 = ctx.client.name.split(' ')[0], b1 = ctx.partner.name.split(' ')[0];
  var ba = pcBalance(A).elements, bb = pcBalance(B).elements, rows = '';
  for (var e in ba) rows += '<tr><td>' + e + '</td><td>' + ba[e] + '</td><td>' + bb[e] + '</td></tr>';
  var soft = 0, hard = 0; syn.hits.forEach(function(h){ if (h.key === 'trine' || h.key === 'sextile') soft++; else if (h.key === 'square' || h.key === 'opposition') hard++; });
  var html = pcP('Synastry lays two birth charts side by side to see how two people\'s energies meet: where it flows, where it sparks, and where it asks both people to grow.') +
    '<div class="pc-kv"><div><b>' + pcEsc(a1) + '</b>Sun ' + A.bodies.Sun.sign + ', Moon ' + A.bodies.Moon.sign + '</div><div><b>' + pcEsc(b1) + '</b>Sun ' + B.bodies.Sun.sign + ', Moon ' + B.bodies.Moon.sign + '</div><div><b>Easy flows</b>' + soft + '</div><div><b>Growth sparks</b>' + hard + '</div></div>' +
    '<table class="pc-table" style="margin-top:10px"><tr><th>Element</th><th>' + pcEsc(a1) + '</th><th>' + pcEsc(b1) + '</th></tr>' + rows + '</table>';
  return {title: pcEsc(a1) + ' and ' + pcEsc(b1) + ': How You Meet', html: html};
}
function pcSecSynAspects(ctx){
  var syn = pcSynCtx(ctx); if (!syn) return null;
  var a1 = ctx.client.name.split(' ')[0], b1 = ctx.partner.name.split(' ')[0], html = '', n = 0, max = ctx.opts.short ? 5 : 10;
  for (var i = 0; i < syn.hits.length && n < max; i++) {
    var h = syn.hits[i], ca = PC_ARCH.CAST[h.a], cb = PC_ARCH.CAST[h.b], def = ctx.lib.aspectDefinitions[h.key];
    var lib = pcAspectText(ctx, {a: h.a, b: h.b, key: h.key});
    var head = ctx.opts.archetype && ca && cb ? a1 + '\'s ' + ca.archetype.replace(/^The /, '') + ' ' + PC_ASPECT_PLAIN[h.key] + ' ' + b1 + '\'s ' + cb.archetype.replace(/^The /, '') : a1 + '\'s ' + h.a + ' ' + h.name + ' ' + b1 + '\'s ' + h.b;
    var txt = (ca && cb ? 'This connects ' + a1 + '\'s ' + ca.domain + ' with ' + b1 + '\'s ' + cb.domain + '. ' : '') + (def ? pcSentences(def.howItFeels, 1) + ' ' : '') + (lib && !ctx.opts.short ? 'How these energies meet: ' + pcSentences(lib, 2) : '');
    html += '<div class="pc-r-asp"><h4>' + pcEsc(head) + ' <span class="pc-orb">' + h.orb.toFixed(1) + '°</span></h4>' + pcP(txt) + '</div>'; n++;
  }
  return {title: 'Your Strongest Connections', html: html || pcP('No close contacts between the personal planets.')};
}
function pcSecSynHouses(ctx){
  var syn = pcSynCtx(ctx); if (!syn || !syn.overlays.length) return null;
  var a1 = ctx.client.name.split(' ')[0], b1 = ctx.partner.name.split(' ')[0], html = pcP('Where ' + b1 + '\'s planets land in ' + a1 + '\'s houses: the areas of ' + a1 + '\'s life that ' + b1 + ' lights up.'), by = {};
  syn.overlays.forEach(function(o){ (by[o.house] = by[o.house] || []).push(o.planet); });
  for (var h = 1; h <= 12; h++) if (by[h]) { var st = PC_ARCH.HOUSE_STAGE[String(h)]; html += pcLabel(pcOrd(h) + ' house (' + st[0] + '): ' + by[h].join(', '), st[1].charAt(0).toUpperCase() + st[1].slice(1) + '.'); }
  return {title: b1 + ' in ' + a1 + '\'s Houses', flag: pcFlag(true), html: html};
}

var PC_SECTIONS = [
  {group:'Start here', items:[['intro','Welcome', pcSecIntro],['wheel','Chart wheel', pcSecWheel],['big3','Big 3 summary', pcSecBig3],['cast','Archetype cast', pcSecCast]]},
  {group:'Birth chart', items:[['sun','Sun', pcSecPlanet('Sun')],['moon','Moon', pcSecPlanet('Moon')],['rising','Rising', pcSecRising, 1],['mercury','Mercury', pcSecPlanet('Mercury')],['venus','Venus', pcSecPlanet('Venus')],['mars','Mars', pcSecPlanet('Mars')],['jupiter','Jupiter', pcSecPlanet('Jupiter')],['saturn','Saturn', pcSecPlanet('Saturn')],['uranus','Uranus', pcSecPlanet('Uranus')],['neptune','Neptune', pcSecPlanet('Neptune')],['pluto','Pluto', pcSecPlanet('Pluto')],['nodes','Nodes', pcSecNodes],['chiron','Chiron', pcSecSimpleSigns('chiron','Chiron')],['lilith','Lilith', pcSecSimpleSigns('lilith','Lilith')]]},
  {group:'Chart patterns', items:[['balance','Elements and pace', pcSecBalance],['aspects','Major aspects', pcSecAspects],['themes','Themes', pcSecThemes],['houses','Houses', pcSecHouses, 1]]},
  {group:'Numerology', items:[['lifepath','Life Path', pcSecNumLP],['peryear','Personal Year', pcSecNumYear],['namenums','Name numbers', pcSecNumName]]},
  {group:'Human Design', items:[['hdtype','Type and strategy', pcSecHDType],['hdauth','Authority', pcSecHDAuth],['hdprofile','Profile', pcSecHDProfile],['hdcenters','Centers', pcSecHDCenters]]},
  {group:'Tree of Life', items:[['tolmap','Tree map', pcSecTreeMap],['tolseph','Sephiroth', pcSecTreeSeph],['tolpaths','Lit paths', pcSecTreePaths],['tolsoul','Soul sphere', pcSecTreeSoul],['tolpillars','Pillars', pcSecTreePillars]]},
  {group:'Tarot', items:[['tbirth','Birth cards', pcSecTarotBirth],['tyear','Year card', pcSecTarotYear],['tbig3','Big 3 cards', pcSecTarotBig3]]},
  {group:'Destiny Matrix', items:[['mxmap','Matrix chart', pcSecMxMap],['mxcore','Core energies', pcSecMxCore],['mxkarma','Karmic tail', pcSecMxKarma],['mxancestors','Ancestral lines', pcSecMxAncestors],['mxpurpose','Life purposes', pcSecMxPurpose]]},
  {group:'Annual Profection', items:[['profection','Year at a glance', pcSecProfYear],['proflord','Lord of the Year', pcSecProfLord],['profcycle','12-year cycle', pcSecProfCycle]]},
  {group:'Solar Return', items:[['srwheel','Return chart', pcSecSRWheel, 1],['srthemes','Year themes', pcSecSRThemes, 1]]},
  {group:'Progressions', items:[['progmoon','Progressed Moon', pcSecProgMoon],['progsun','Progressed Sun', pcSecProgSun]]},
  {group:'Draconic', items:[['dracwheel','Soul chart', pcSecDracWheel],['dracbig3','Soul placements', pcSecDracBig3]]},
  {group:'Synastry', items:[['synoverview','How you meet', pcSecSynOverview],['synaspects','Connections', pcSecSynAspects],['synhouses','House overlays', pcSecSynHouses, 1]]},
  {group:'Transits', items:[['tnow','Active now', pcSecTransitsNow],['tyearahead','Year ahead', pcSecTransitsYear]]},
  {group:'Finish', items:[['closing','Closing note', pcSecClosing]]}
];
var PC_SECTION_BY_ID = {};
(function(){ for (var i = 0; i < PC_SECTIONS.length; i++) for (var j = 0; j < PC_SECTIONS[i].items.length; j++) { var it = PC_SECTIONS[i].items[j]; PC_SECTION_BY_ID[it[0]] = {id: it[0], label: it[1], fn: it[2], needsTime: !!it[3], group: PC_SECTIONS[i].group}; } })();
var PC_PRESETS = {
  quick: ['big3','sun','moon','rising','lifepath','hdtype','tnow','closing'],
  full: ['intro','big3','sun','moon','rising','mercury','venus','mars','jupiter','saturn','nodes','balance','aspects','themes','houses','closing'],
  matrix: ['mxmap','mxcore','mxkarma','mxancestors','mxpurpose','closing'],
  year: ['profection','proflord','profcycle','tnow','tyearahead','peryear','tyear','closing'],
  tree: ['tolmap','tolseph','tolpaths','tolsoul','tolpillars','closing'],
  everything: null
};

function pcBuildContext(client, lib, opts){
  var inp = {y: client.y, mo: client.mo, d: client.d, h: client.h, mi: client.mi, timeKnown: client.timeKnown, lat: client.lat, lon: client.lon, tz: client.tz, house: opts.house || client.house || 'E', chironLon: client.chironLon};
  var chart = pcCalcChart(inp), today = new Date();
  var ctx = {client: client, chart: chart, lib: lib, opts: opts, themes: pcThemes(chart), num: pcNumerology(client, today),
    hd: pcHumanDesign(chart), tarot: pcTarot(client, chart, today), transits: pcTransits(chart, today), prof: pcProfection(chart, client, today)};
  ctx.tree = pcTree(ctx);
  ctx.matrix = pcMatrix(client);
  ctx.prof2 = pcProfectionFull(chart, client, today);
  return ctx;
}
function pcRenderReport(ctx, ids){
  var out = [], i;
  for (i = 0; i < ids.length; i++) {
    var s = PC_SECTION_BY_ID[ids[i]]; if (!s) continue;
    if (s.needsTime && !ctx.chart.timeKnown) continue;
    var r; try { r = s.fn(ctx); } catch (e) { r = {title: s.label, html: '<p class="pc-muted">This section could not be built (' + pcEsc(e.message) + ').</p>'}; }
    if (!r) continue;
    var src = ctx.showSource ? pcSectionSource(ctx, s.id) : null;
    out.push('<section class="pc-r-sec" data-sec="' + s.id + '"><header><h3>' + r.title + '</h3>' + (src ? '<span class="pc-src pc-src-' + src + '">' + (src === 'own' ? 'Your text' : 'AIA text') + '</span>' : '') + (r.deg ? '<span class="pc-deg">' + pcEsc(r.deg) + '</span>' : '') + (r.flag && !ctx.chart.timeKnown ? r.flag : '') + '</header>' + r.html + '</section>');
  }
  return out.join('');
}

/* ===== pc report library + bundles (ES5) ===== */
var PC_REPORTS = [
  {id:'natal', name:'Birth Chart Reading', icon:'\u2609\uFE0E', color:'#0f9e94', tagline:'The full natal chart in everyday language: planets, houses, aspects and themes.',
    sections:['wheel','big3','sun','moon','rising','mercury','venus','mars','jupiter','saturn','uranus','neptune','pluto','nodes','balance','aspects','themes','houses'], snap:['wheel','big3','themes']},
  {id:'big3', name:'Big 3 Snapshot', icon:'\u2726\uFE0E', color:'#e0663f', tagline:'Sun, Moon and Rising: the core self, emotional needs and first impression.',
    sections:['wheel','big3','sun','moon','rising'], snap:['wheel','big3']},
  {id:'archetypes', name:'Archetype Cast', icon:'\u2655\uFE0E', color:'#7b4fc9', archetype:true, tagline:'Meet the characters running the show: every planet as a named archetype.',
    sections:['cast','big3','sun','moon','mercury','venus','mars','aspects'], snap:['cast','big3']},
  {id:'year', name:'Year Ahead', icon:'\u2644\uFE0E', color:'#e8a923', tagline:'Annual profection, Lord of the Year, transits and the 12-year cycle.',
    sections:['profection','proflord','tnow','tyearahead','profcycle','peryear','tyear'], snap:['profection','tnow']},
  {id:'matrix', name:'Destiny Matrix', icon:'\u2735\uFE0E', color:'#c0398a', tagline:'Talents, comfort zone, karmic tail, ancestral lines and life purposes.',
    sections:['mxmap','mxcore','mxkarma','mxancestors','mxpurpose'], snap:['mxmap','mxpurpose']},
  {id:'tree', name:'Tree of Life', icon:'\u2721\uFE0E', color:'#4b6bd6', tagline:'Your chart on the Qabalistic Tree: spheres, lit paths, soul sphere and pillars.',
    sections:['tolmap','tolseph','tolpaths','tolsoul','tolpillars'], snap:['tolmap','tolsoul']},
  {id:'numerology', name:'Numerology Profile', icon:'#', color:'#5a9a3c', tagline:'Life Path, Personal Year and the numbers in your name.',
    sections:['lifepath','peryear','namenums'], snap:['lifepath']},
  {id:'hd', name:'Human Design', icon:'\u25B3\uFE0E', color:'#2b8fbd', tagline:'Type, strategy, authority, profile and energy centers.',
    sections:['hdtype','hdauth','hdprofile','hdcenters'], snap:['hdtype','hdauth']},
  {id:'tarot', name:'Tarot Birth Cards', icon:'\u2660\uFE0E', color:'#8a5a2b', tagline:'Soul and personality cards, the year card and the Big 3 in the tarot.',
    sections:['tbirth','tyear','tbig3'], snap:['tbirth']},
  {id:'solar', name:'Solar Return', icon:'\u2609\uFE0E', color:'#d4881a', tagline:'Your birthday year chart: the tone of the year, where energy goes, what you need.',
    sections:['srwheel','srthemes'], snap:['srthemes']},
  {id:'prog', name:'Progressions', icon:'\u263D\uFE0E', color:'#5b6fd6', tagline:'Your current emotional chapter, evolving identity and life-cycle phase.',
    sections:['progmoon','progsun'], snap:['progmoon']},
  {id:'draconic', name:'Draconic Soul Chart', icon:'\u260A\uFE0E', color:'#8a3fa8', tagline:'The soul chart: deeper motivations beneath the birth chart.',
    sections:['dracwheel','dracbig3'], snap:['dracbig3']},
  {id:'synastry', name:'Synastry', icon:'\u2661\uFE0E', color:'#d6456f', needsPartner:true, tagline:'Two charts together: how you meet, strongest connections and house overlays.',
    sections:['synoverview','synaspects','synhouses'], snap:['synoverview','synaspects']},
  {id:'soul', name:'Soul Growth', icon:'\u260A\uFE0E', color:'#3c7a6b', tagline:'North Node path, Chiron, Lilith, karmic tail and soul sphere.',
    sections:['nodes','chiron','lilith','mxkarma','tolsoul'], snap:['nodes','mxkarma']}
];
var PC_REPORT_BY_ID = {};
(function(){ for (var i = 0; i < PC_REPORTS.length; i++) PC_REPORT_BY_ID[PC_REPORTS[i].id] = PC_REPORTS[i]; })();
var PC_DESIGNS = {classic: ['Classic Parchment', 'Warm cream pages, serif type, soft color.'], modern: ['Modern Clean', 'Crisp white pages, clean sans-serif, bold brand color.'], starlight: ['Starlight', 'Night-sky cover and chapter banners, elegant serif headings.']};
var PC_LENGTHS = {full: 'Full', concise: 'Concise', snapshot: 'Snapshot'};

function pcWithOpts(ctx, over){
  var c = {}, k; for (k in ctx) if (ctx.hasOwnProperty(k)) c[k] = ctx[k];
  var o = {}; for (k in ctx.opts) o[k] = ctx.opts[k]; for (k in over) o[k] = over[k];
  c.opts = o; return c;
}
/* plan = {reports:[ids], length, archetype, welcome, closing, extra:[section ids], removed:[section ids]} */
function pcBundleChapters(plan, ctx){
  var used = {}, chapters = [], i, j, extra = plan.extra || [], removed = plan.removed || [];
  for (i = 0; i < plan.reports.length; i++) {
    var R = PC_REPORT_BY_ID[plan.reports[i]]; if (!R) continue;
    if (R.needsPartner && !ctx.partner) continue;
    var ids = [];
    for (j = 0; j < R.sections.length; j++) {
      var sid = R.sections[j], S = PC_SECTION_BY_ID[sid];
      if (!S || used[sid] || removed.indexOf(sid) >= 0) continue;
      if (plan.length === 'snapshot' && R.snap.indexOf(sid) < 0 && extra.indexOf(sid) < 0) continue;
      if (S.needsTime && !ctx.chart.timeKnown) continue;
      if (sid === 'chiron' && !ctx.chart.bodies.Chiron) continue;
      used[sid] = 1; ids.push(sid);
    }
    if (ids.length) chapters.push({report: R, ids: ids});
  }
  var rest = extra.filter(function(sid){ return !used[sid] && PC_SECTION_BY_ID[sid] && sid !== 'intro' && sid !== 'closing'; });
  if (rest.length) chapters.push({report: {id: 'extra', name: 'Additional Insights', icon: '+', color: '#6b5f73', tagline: 'Extra cards added by your reader.'}, ids: rest});
  return chapters;
}
function pcRenderBundle(plan, ctx, forPrint){
  var short = plan.length !== 'full', base = pcWithOpts(ctx, {short: short, archetype: !!plan.archetype});
  var chapters = pcBundleChapters(plan, base), html = '', toc = '';
  if (plan.welcome) html += pcRenderReport(base, ['intro']);
  for (var i = 0; i < chapters.length; i++) {
    var ch = chapters[i], R = ch.report, cctx = R.archetype ? pcWithOpts(base, {archetype: true}) : base;
    toc += '<li><span class="pc-toc-i" style="background:' + R.color + '">' + R.icon + '</span>' + pcEsc(R.name) + '</li>';
    html += '<div class="pc-chapter' + (i === 0 ? ' pc-ch-first' : '') + '"><div class="pc-chapter-head" style="border-color:' + R.color + '"><span class="pc-chapter-i" style="background:' + R.color + '">' + R.icon + '</span><div><div class="pc-chapter-k">Part ' + (i + 1) + '</div><h2>' + pcEsc(R.name) + '</h2><p>' + pcEsc(R.tagline) + '</p></div></div>' +
      pcRenderReport(cctx, ch.ids) + '</div>';
  }
  if (plan.closing) html += pcRenderReport(base, ['closing']);
  html += pcPoweredHTML();
  return {html: html, toc: chapters.length > 1 ? '<ol class="pc-toc">' + toc + '</ol>' : '', count: chapters.length};
}

function pcPoweredHTML(){
  return '<div class="pc-powered"><img src="' + PC_AIA.logo + '" alt="Adventures In Astrology"><div><b>Powered by Adventures In Astrology</b><span>Interpretations \u00A9 ' + new Date().getFullYear() + ' Adventures In Astrology LLC \u00B7 ' + PC_AIA.url + '. Shared under license for this client only.</span></div></div>';
}

/* ===== pc library sources: AIA default + optional practitioner library with per-entry fallback (ES5) ===== */
var PC_LIB_SECTIONS = ['sun','moon','rising','mercury','venus','mars','jupiter','saturn','uranus','neptune','pluto','chiron','nodes','lilith','houses','patterns','aspectDefinitions','templates','aspectsSun','aspectsMoon','aspectsVenus','aspectsMars','aspectsSaturnStructural','karmic','profection','numerology','astroPsychology','medical','equalHouse'];
var PC_LIB_EXTRA = ['elementalBalance','coreProfile','aspectsMercury','aspectsJupiter','aspectsUranus','aspectsNeptune','aspectsPluto'];
var PC_ENTRY_FIELDS = ['plainEnglish','strength','shadow','realLife','whatHelps'];
function pcIsObj(x){ return x && typeof x === 'object' && !(x instanceof Array); }
/* Deep merge: own values override AIA values; every overridden leaf path is recorded. */
function pcMergeLibrary(aia, own){
  var paths = {};
  function merge(a, o, path){
    if (!pcIsObj(o)) { paths[path] = 1; return o; }
    var out = {}, k;
    if (pcIsObj(a)) for (k in a) if (a.hasOwnProperty(k)) out[k] = a[k];
    for (k in o) if (o.hasOwnProperty(k)) {
      var v = o[k]; if (v === null || v === '' ) continue;
      out[k] = (pcIsObj(v) && pcIsObj(a ? a[k] : null)) ? merge(a[k], v, path ? path + '.' + k : k) : (paths[path ? path + '.' + k : k] = 1, v);
    }
    return out;
  }
  return {lib: merge(aia || {}, own || {}, ''), ownPaths: paths};
}
/* Check an uploaded library against the expected shape. */
function pcValidateLibrary(lib){
  var missing = [], incomplete = [], present = 0, i, s;
  for (i = 0; i < PC_LIB_SECTIONS.length; i++) { s = PC_LIB_SECTIONS[i]; if (!lib[s]) missing.push(s); else present++; }
  var signSections = ['sun','moon','rising','mercury','venus','mars','jupiter','saturn'];
  for (i = 0; i < signSections.length; i++) {
    s = signSections[i]; if (!lib[s]) continue;
    var signs = lib[s].signs || {};
    for (var j = 0; j < PC_SIGNS.length; j++) {
      var e = signs[pcLow(PC_SIGNS[j])];
      if (!e) { incomplete.push(s + ' in ' + PC_SIGNS[j]); continue; }
      for (var f = 0; f < PC_ENTRY_FIELDS.length; f++) if (!e[PC_ENTRY_FIELDS[f]]) { incomplete.push(s + ' in ' + PC_SIGNS[j] + ' (' + PC_ENTRY_FIELDS[f] + ')'); break; }
    }
  }
  var extras = []; for (i = 0; i < PC_LIB_EXTRA.length; i++) if (lib[PC_LIB_EXTRA[i]]) extras.push(PC_LIB_EXTRA[i]);
  var known = {}; for (i = 0; i < PC_LIB_SECTIONS.length; i++) known[PC_LIB_SECTIONS[i]] = 1; for (i = 0; i < PC_LIB_EXTRA.length; i++) known[PC_LIB_EXTRA[i]] = 1;
  var unknown = []; for (var k in lib) if (lib.hasOwnProperty(k) && !known[k]) unknown.push(k);
  return {present: present, missing: missing, incomplete: incomplete, extras: extras, unknown: unknown};
}
/* Library paths a section reads for this chart (used to show where its text came from). */
function pcSectionPaths(ctx, id){
  var b = ctx.chart.bodies, L = pcLow;
  function sign(n){ return b[n] ? L(b[n].sign) : ''; }
  switch (id) {
    case 'sun': case 'moon': case 'mercury': case 'venus': case 'mars': case 'jupiter': case 'saturn': return [id + '.signs.' + sign(id.charAt(0).toUpperCase() + id.slice(1))];
    case 'uranus': case 'neptune': case 'pluto': var P = id.charAt(0).toUpperCase() + id.slice(1); return [id + '.signsGenerational.' + sign(P), id + '.houses.' + (b[P].house || ''), id + '.intro'];
    case 'rising': return ctx.chart.timeKnown ? ['rising.signs.' + sign('Ascendant')] : [];
    case 'big3': return ['sun.signs.' + sign('Sun'), 'moon.signs.' + sign('Moon')].concat(ctx.chart.timeKnown ? ['rising.signs.' + sign('Ascendant')] : []);
    case 'nodes': return ['nodes.axisPairs.' + sign('North Node'), 'nodes.intro'];
    case 'chiron': return b.Chiron ? ['chiron.signs.' + sign('Chiron')] : [];
    case 'lilith': return ['lilith.signs.' + sign('Lilith')];
    case 'aspects': return ['aspectsSun','aspectsMoon','aspectsMercury','aspectsVenus','aspectsMars','aspectsJupiter','aspectsSaturnStructural','aspectsUranus','aspectsNeptune','aspectsPluto','aspectDefinitions'];
    case 'themes': return ['patterns'];
    case 'houses': return ['houses'];
    case 'intro': return ['templates.intro'];
    case 'lifepath': return ['numerology.lifePaths.' + ctx.num.lifePath, 'numerology.standardFraming'];
    case 'peryear': return ['numerology.personalYears.' + ctx.num.personalYear];
    case 'profection': case 'proflord': case 'profcycle': return ['profection', 'houses.entries'];
    case 'balance': return ['elementalBalance'];
  }
  return [];
}
function pcSectionSource(ctx, id){
  if (!ctx.ownPaths) return null;
  var ps = pcSectionPaths(ctx, id); if (!ps.length) return 'aia';
  for (var k in ctx.ownPaths) if (ctx.ownPaths.hasOwnProperty(k)) for (var i = 0; i < ps.length; i++) if (k === ps[i] || k.indexOf(ps[i] + '.') === 0) return 'own';
  return 'aia';
}

/* ===== pc store: Supabase (live) or in-memory demo (ES5, Promise-based) ===== */
function pcRowToClient(r){
  var p = String(r.birth_date).split('-');
  return {id: r.id, name: r.name, pronouns: r.pronouns || '', email: r.email || '', y: +p[0], mo: +p[1], d: +p[2],
    h: r.birth_hour, mi: r.birth_minute, timeKnown: !!r.time_known, placeLabel: r.place_label || '', lat: r.lat, lon: r.lon, tz: r.tz,
    house: r.house_system || 'E', chironLon: r.chiron_lon, notes: r.private_notes || '', updated: r.updated_at};
}
function pcPad(n){ return (n < 10 ? '0' : '') + n; }
function pcClientToRow(c){
  return {name: c.name, pronouns: c.pronouns || '', email: c.email || '', birth_date: c.y + '-' + pcPad(c.mo) + '-' + pcPad(c.d),
    birth_hour: c.timeKnown ? c.h : null, birth_minute: c.timeKnown ? c.mi : null, time_known: !!c.timeKnown, place_label: c.placeLabel || '',
    lat: c.lat, lon: c.lon, tz: c.tz, house_system: c.house || 'E', chiron_lon: (c.chironLon === undefined ? null : c.chironLon), private_notes: c.notes || '', updated_at: new Date().toISOString()};
}

function PcSupaStore(url, key){
  this.sb = window.supabase.createClient(url, key, {auth: {persistSession: true, storageKey: 'pc-auth'}});
  this.user = null;
}
PcSupaStore.prototype = {
  live: true,
  _u: function(r){ if (r.error) throw r.error; return r.data; },
  session: function(){ var s = this; return s.sb.auth.getSession().then(function(r){ s.user = r.data && r.data.session ? r.data.session.user : null; return s.user; }); },
  signIn: function(email, pw){ var s = this; return s.sb.auth.signInWithPassword({email: email, password: pw}).then(function(r){ if (r.error) throw r.error; s.user = r.data.user; return s.user; }); },
  signUp: function(email, pw, name){
    return this.sb.auth.signUp({email: email, password: pw, options: {data: {display_name: name}, emailRedirectTo: window.location.href.split('#')[0]}}).then(function(r){ if (r.error) throw r.error; return r.data; });
  },
  resetPassword: function(email){ return this.sb.auth.resetPasswordForEmail(email, {redirectTo: window.location.href.split('#')[0]}).then(function(r){ if (r.error) throw r.error; }); },
  signOut: function(){ this.user = null; return this.sb.auth.signOut(); },
  profile: function(){
    var s = this;
    return s.sb.from('pc_practitioners').select('*').eq('id', s.user.id).maybeSingle().then(function(r){
      if (r.error) throw r.error;
      if (r.data) return r.data;
      var name = (s.user.user_metadata && s.user.user_metadata.display_name) || s.user.email.split('@')[0];
      return s.sb.from('pc_practitioners').insert({id: s.user.id, display_name: name}).select().single().then(function(r2){ if (r2.error) throw r2.error; return r2.data; });
    });
  },
  saveProfile: function(p){ var s = this; return s.sb.from('pc_practitioners').update({display_name: p.display_name, business_name: p.business_name, closing_note: p.closing_note, tagline: p.tagline || '', brand_color: p.brand_color || '', design: p.design || 'classic', library_source: p.library_source || 'aia'}).eq('id', s.user.id).then(function(r){ if (r.error) throw r.error; }); },
  library: function(){
    return this.sb.from('pc_library').select('section,data').then(function(r){
      if (r.error) throw r.error; var lib = {};
      for (var i = 0; i < r.data.length; i++) lib[r.data[i].section] = r.data[i].data;
      return lib;
    });
  },
  saveLibrary: function(lib){
    var rows = []; for (var k in lib) if (lib.hasOwnProperty(k)) rows.push({section: k, data: lib[k], updated_at: new Date().toISOString()});
    return this.sb.from('pc_library').upsert(rows).then(function(r){ if (r.error) throw r.error; return rows.length; });
  },
  clients: function(){ return this.sb.from('pc_clients').select('*').order('name').then(function(r){ if (r.error) throw r.error; return r.data.map(pcRowToClient); }); },
  saveClient: function(c){
    var row = pcClientToRow(c), q = c.id ? this.sb.from('pc_clients').update(row).eq('id', c.id) : this.sb.from('pc_clients').insert(row);
    return q.select().single().then(function(r){ if (r.error) throw r.error; return pcRowToClient(r.data); });
  },
  deleteClient: function(id){ return this.sb.from('pc_clients').delete().eq('id', id).then(function(r){ if (r.error) throw r.error; }); },
  sessions: function(cid){ return this.sb.from('pc_sessions').select('*').eq('client_id', cid).order('session_date', {ascending: false}).then(function(r){ if (r.error) throw r.error; return r.data; }); },
  saveSession: function(x){
    var row = {client_id: x.client_id, session_date: x.session_date, topic: x.topic, notes: x.notes};
    var q = x.id ? this.sb.from('pc_sessions').update(row).eq('id', x.id) : this.sb.from('pc_sessions').insert(row);
    return q.select().single().then(function(r){ if (r.error) throw r.error; return r.data; });
  },
  deleteSession: function(id){ return this.sb.from('pc_sessions').delete().eq('id', id).then(function(r){ if (r.error) throw r.error; }); },
  reports: function(cid){ return this.sb.from('pc_reports').select('*').eq('client_id', cid).order('updated_at', {ascending: false}).then(function(r){ if (r.error) throw r.error; return r.data; }); },
  saveReport: function(x){
    var row = {client_id: x.client_id, title: x.title, sections: x.sections, themes: x.themes, short_version: x.short_version, archetype_mode: x.archetype_mode, closing_note: x.closing_note, plan: x.plan || null, updated_at: new Date().toISOString()};
    var q = x.id ? this.sb.from('pc_reports').update(row).eq('id', x.id) : this.sb.from('pc_reports').insert(row);
    return q.select().single().then(function(r){ if (r.error) throw r.error; return r.data; });
  },
  ownLibrary: function(){
    return this.sb.from('pc_own_library').select('section,data').then(function(r){ if (r.error) return {}; var lib = {}; for (var i = 0; i < r.data.length; i++) lib[r.data[i].section] = r.data[i].data; return lib; });
  },
  saveOwnLibrary: function(lib){
    var s = this, rows = []; for (var k in lib) if (lib.hasOwnProperty(k)) rows.push({section: k, data: lib[k], updated_at: new Date().toISOString()});
    return s.sb.from('pc_own_library').delete().eq('practitioner_id', s.user.id).then(function(r){ if (r.error) throw r.error; return s.sb.from('pc_own_library').insert(rows); }).then(function(r){ if (r.error) throw r.error; return rows.length; });
  },
  clearOwnLibrary: function(){ var s = this; return s.sb.from('pc_own_library').delete().eq('practitioner_id', s.user.id).then(function(r){ if (r.error) throw r.error; }); },
  allReports: function(){ return this.sb.from('pc_reports').select('id,client_id,title,sections,short_version,archetype_mode,plan,updated_at').order('updated_at', {ascending: false}).limit(30).then(function(r){ if (r.error) throw r.error; return r.data; }); },
  recentSessions: function(){ return this.sb.from('pc_sessions').select('id,client_id,session_date,topic').order('session_date', {ascending: false}).limit(8).then(function(r){ if (r.error) throw r.error; return r.data; }); },
  deleteReport: function(id){ return this.sb.from('pc_reports').delete().eq('id', id).then(function(r){ if (r.error) throw r.error; }); },
  charts: function(cid){ return this.sb.from('pc_charts').select('id,client_id,title,chart_type,settings,note,updated_at').eq('client_id', cid).order('updated_at', {ascending: false}).then(function(r){ if (r.error) throw r.error; return r.data; }); },
  saveChart: function(x){
    var row = {client_id: x.client_id, title: x.title, chart_type: x.chart_type, settings: x.settings, note: x.note || '', updated_at: new Date().toISOString()};
    var q = x.id ? this.sb.from('pc_charts').update(row).eq('id', x.id) : this.sb.from('pc_charts').insert(row);
    return q.select().single().then(function(r){ if (r.error) throw r.error; return r.data; });
  },
  deleteChart: function(id){ return this.sb.from('pc_charts').delete().eq('id', id).then(function(r){ if (r.error) throw r.error; }); }
};

/* Demo store: nothing leaves the page and nothing is kept after closing it. */
function PcDemoStore(lib){ this.lib = lib; this.user = null; this.db = {clients: [], sessions: [], reports: []}; this.prof = {display_name: 'Demo Practitioner', business_name: '', approved: true, closing_note: ''}; }
function pcId(){ return 'd' + Math.random().toString(36).slice(2, 10); }
function pcP_(v){ return Promise.resolve(v); }
PcDemoStore.prototype = {
  live: false,
  session: function(){ return pcP_(this.user); },
  signIn: function(email){ this.user = {id: 'demo', email: email || 'demo@example.com'}; return pcP_(this.user); },
  signUp: function(email){ return this.signIn(email); },
  resetPassword: function(){ return pcP_(); },
  signOut: function(){ this.user = null; return pcP_(); },
  profile: function(){ return pcP_(this.prof); },
  saveProfile: function(p){ var k; for (k in p) this.prof[k] = p[k]; return pcP_(); },
  library: function(){ return pcP_(this.lib); },
  saveLibrary: function(lib){ this.lib = lib; return pcP_(Object.keys(lib).length); },
  clients: function(){ return pcP_(this.db.clients.slice(0).sort(function(a, b){ return a.name.localeCompare(b.name); })); },
  saveClient: function(c){ var copy = JSON.parse(JSON.stringify(c)); if (!copy.id) { copy.id = pcId(); this.db.clients.push(copy); } else { for (var i = 0; i < this.db.clients.length; i++) if (this.db.clients[i].id === copy.id) this.db.clients[i] = copy; } return pcP_(copy); },
  deleteClient: function(id){ this.db.clients = this.db.clients.filter(function(c){ return c.id !== id; }); return pcP_(); },
  sessions: function(cid){ return pcP_(this.db.sessions.filter(function(s){ return s.client_id === cid; })); },
  saveSession: function(x){ var c = JSON.parse(JSON.stringify(x)); if (!c.id) { c.id = pcId(); this.db.sessions.unshift(c); } else { for (var i = 0; i < this.db.sessions.length; i++) if (this.db.sessions[i].id === c.id) this.db.sessions[i] = c; } return pcP_(c); },
  deleteSession: function(id){ this.db.sessions = this.db.sessions.filter(function(s){ return s.id !== id; }); return pcP_(); },
  reports: function(cid){ return pcP_(this.db.reports.filter(function(s){ return s.client_id === cid; })); },
  saveReport: function(x){ var c = JSON.parse(JSON.stringify(x)); c.updated_at = new Date().toISOString(); if (!c.id) { c.id = pcId(); this.db.reports.unshift(c); } else { for (var i = 0; i < this.db.reports.length; i++) if (this.db.reports[i].id === c.id) this.db.reports[i] = c; } return pcP_(c); },
  ownLibrary: function(){ return pcP_(this.own || {}); },
  saveOwnLibrary: function(lib){ this.own = lib; return pcP_(Object.keys(lib).length); },
  clearOwnLibrary: function(){ this.own = {}; return pcP_(); },
  allReports: function(){ return pcP_(this.db.reports.slice(0).sort(function(a, b){ return a.updated_at < b.updated_at ? 1 : -1; })); },
  recentSessions: function(){ return pcP_(this.db.sessions.slice(0).sort(function(a, b){ return a.session_date < b.session_date ? 1 : -1; }).slice(0, 8)); },
  deleteReport: function(id){ this.db.reports = this.db.reports.filter(function(s){ return s.id !== id; }); return pcP_(); },
  charts: function(cid){ return pcP_((this.db.charts || []).filter(function(x){ return x.client_id === cid; }).sort(function(a, b){ return a.updated_at < b.updated_at ? 1 : -1; })); },
  saveChart: function(x){ var c = JSON.parse(JSON.stringify(x)); c.updated_at = new Date().toISOString(); this.db.charts = this.db.charts || []; if (!c.id) { c.id = pcId(); this.db.charts.unshift(c); } else { for (var i = 0; i < this.db.charts.length; i++) if (this.db.charts[i].id === c.id) this.db.charts[i] = c; } return pcP_(c); },
  deleteChart: function(id){ this.db.charts = (this.db.charts || []).filter(function(x){ return x.id !== id; }); return pcP_(); }
};

/* ===== pc app (ES5) ===== */
(function(){
  var CFG = window.PC_CONFIG || {};
  var root = document.getElementById('pc-root');
  var S = {step: 'home', ctab: 'overview', homeReports: [], homeSessions: [], clients: [], cur: null, sessions: [], reports: [], editing: null, sessEdit: null, build: null, msg: null, scale: 1};
  var IDLE_MIN = CFG.idleMinutes || 20, idleTimer = null;

  function $(sel){ return root.querySelector(sel); }
  function esc(s){ return pcEsc(s); }
  function toast(t){ var d = document.createElement('div'); d.className = 'pc-toast'; d.textContent = t; root.appendChild(d); setTimeout(function(){ if (d.parentNode) d.parentNode.removeChild(d); }, 2600); }
  function fail(e){ S.busy = false; S.msg = {err: (e && (e.message || e.error_description)) || String(e)}; render(); }
  function today(){ var d = new Date(); return d.getFullYear() + '-' + pcPad(d.getMonth() + 1) + '-' + pcPad(d.getDate()); }

  /* ---------- privacy: auto-lock after inactivity ---------- */
  function poke(){ if (!S.user) return; clearTimeout(idleTimer); idleTimer = setTimeout(function(){ lock('Locked after ' + IDLE_MIN + ' minutes of no activity, to keep client files private.'); }, IDLE_MIN * 60000); }
  ['click','keydown','scroll','touchstart'].forEach(function(ev){ root.addEventListener(ev, poke, true); });
  function lock(reason){
    unmountCharts();
    S.store.signOut();
    S.user = null; S.profile = null; S.lib = null; S.clients = []; S.cur = null; S.sessions = []; S.reports = []; S.build = null; S.editing = null; S.step = 'home';
    S.msg = reason ? {ok: reason} : null; render();
  }

  /* ---------- boot ---------- */
  function boot(){
    if (!window.Astronomy) { root.innerHTML = '<div class="pc-screen"><p>Loading the chart engine…</p></div>'; return setTimeout(boot, 300); }
    if (CFG.demo) S.store = new PcDemoStore(window.PC_DEMO_LIB);
    else {
      if (!window.supabase) { root.innerHTML = '<div class="pc-screen"><p>Connecting securely…</p></div>'; return setTimeout(boot, 300); }
      S.store = new PcSupaStore(CFG.supabaseUrl, CFG.supabaseKey);
    }
    if (S.store.live) S.store.sb.auth.onAuthStateChange(function(ev){ if (ev === 'PASSWORD_RECOVERY') { S.recovery = true; render(); } });
    S.store.session().then(function(u){ if (u) afterLogin(u); else render(); }).catch(function(){ render(); });
  }
  function afterLogin(u){
    S.user = u; S.msg = null; poke();
    S.store.profile().then(function(p){
      S.profile = p;
      if (!p.approved) { render(); return; }
      return Promise.all([S.store.library(), S.store.ownLibrary()]).then(function(r){
        S.aiaLib = r[0]; S.ownLib = r[1] || {};
        applyLibrary();
        if (!libCount()) { S.lib = null; if (p.is_admin) { S.lib = {}; S.step = 'settings'; S.msg = {ok: 'Welcome! First, load your interpretation library below.'}; } }
        return S.store.clients();
      }).then(function(cl){ S.clients = cl; return loadHome(); }).then(function(){ render(); var h = libCount() ? readHandoff() : null; if (h) applyHandoff(h); });
    }).catch(fail);
  }

  /* ---------- render ---------- */
  function render(){
    root.style.setProperty('--pc-scale', S.scale);
    var on = S.user && S.profile && S.profile.approved && S.lib;
    var body;
    if (S.recovery) body = recoveryView();
    else if (!S.user) body = authView();
    else if (!S.profile) body = '<div class="pc-screen"><p>Opening your files\u2026</p></div>';
    else if (!S.profile.approved) body = pendingView();
    else if (!S.lib) body = '<div class="pc-screen"><div class="pc-card pc-empty"><h3>Opening your library\u2026</h3><p>If this stays here, the interpretation library has not been loaded yet. Please check back soon.</p></div></div>';
    else if (!libCount() && S.step !== 'settings') { S.step = 'settings'; body = settingsView(); }
    else if (S.step === 'settings') body = settingsView();
    else if (S.step === 'home') body = homeView();
    else if (S.step === 'reports') body = reportsView();
    else if (S.step === 'charts') body = '<div class="pc-screen pc-cds-screen"><div id="pc-cds-slot"></div></div>';
    else if (S.step === 'build' && S.cur) body = buildView();
    else if (S.step === 'send' && S.cur && S.build) body = sendView();
    else body = clientsView();
    root.innerHTML = on ? '<div class="pc-shell">' + sideBar() + '<div class="pc-main">' + headBar() + body + '</div></div>' : headBar() + body;
    if (S.step === 'build' && S.build && S.user) renderPreview();
    if (S.step === 'charts' && on) mountCharts();
  }

  /* ---------- Chart Design Station (loads cds.js beside this file, only after sign-in and approval) ---------- */
  function cdsSrc(){
    if (CFG.cdsSrc) return CFG.cdsSrc;
    var ss = document.getElementsByTagName('script');
    for (var i = 0; i < ss.length; i++) { var u = ss[i].src || ''; if (u.indexOf('/practitioner-center/pc.js') > 0) return u.replace(/pc\.js(\?.*)?$/, 'cds.js'); }
    return 'https://cdn.jsdelivr.net/gh/adventuresastrology-svg/aia-site-assets@main/practitioner-center/cds.js';
  }
  function loadCds(cb){
    if (window.CDS_MOUNT) return cb();
    var s = document.getElementById('pc-cds-js');
    if (!s) { s = document.createElement('script'); s.id = 'pc-cds-js'; s.src = cdsSrc(); s.async = true; document.head.appendChild(s); }
    var tries = 0;
    (function wait(){ if (window.CDS_MOUNT) return cb(); if (++tries > 200) { var sl = document.getElementById('pc-cds-slot'); if (sl) sl.innerHTML = '<div class="pc-err">The chart designer could not load. Please check your connection and try again.</div>'; return; } setTimeout(wait, 100); })();
  }
  function cdsChartsHost(){
    return {
      list: function(cid){ return S.store.charts(cid); },
      save: function(rec){ return S.store.saveChart(rec); },
      remove: function(id){ return S.store.deleteChart(id); }
    };
  }
  function mountCharts(){
    var slot = document.getElementById('pc-cds-slot');
    if (!slot) return;
    if (!S.cdsNode) { S.cdsNode = document.createElement('div'); S.cdsNode.id = 'cds-mount'; S.cdsNode.setAttribute('data-host', 'pc'); S.cdsMounted = false; }
    slot.appendChild(S.cdsNode);
    if (!S.cdsMounted) {
      S.cdsNode.innerHTML = '<div class="pc-card pc-empty"><p>Opening the chart designer\u2026</p></div>';
      loadCds(function(){
        if (S.cdsMounted || !S.cdsNode) return;
        S.cdsMounted = true;
        window.CDS_MOUNT(S.cdsNode, {clients: S.clients, brand: {name: (S.profile.business_name || S.profile.display_name || ''), tagline: S.profile.tagline || '', color: S.profile.brand_color || ''}, current: S.cur, charts: cdsChartsHost(), practitionerId: S.user && S.user.id});
      });
    } else if (window.CDS_STUDIO) window.CDS_STUDIO.configure({clients: S.clients, charts: cdsChartsHost(), brand: {name: (S.profile.business_name || S.profile.display_name || ''), tagline: S.profile.tagline || '', color: S.profile.brand_color || ''}});
  }
  function unmountCharts(){
    if (window.CDS_STUDIO) window.CDS_STUDIO.clear();
    if (S.cdsNode && S.cdsNode.parentNode) S.cdsNode.parentNode.removeChild(S.cdsNode);
    S.cdsNode = null; S.cdsMounted = false;
  }
  function msgHTML(){ if (!S.msg) return ''; return S.msg.err ? '<div class="pc-err">' + esc(S.msg.err) + '</div>' : '<div class="pc-ok">' + esc(S.msg.ok) + '</div>'; }
  function brandName(){ return (S.profile && S.profile.business_name) || 'Practitioner Center'; }
  function navBtn(step, icon, label, disabled){
    var onNow = S.step === step || (step === 'clients' && S.step === 'clients');
    return '<button class="pc-nav' + (onNow ? ' is-on' : '') + '" data-act="go" data-v="' + step + '"' + (disabled ? ' disabled' : '') + '><span>' + icon + '</span>' + label + '</button>';
  }
  function sideBar(){
    return '<aside class="pc-side"><div class="pc-side-brand"><div class="pc-logo" style="background:' + esc(S.profile.brand_color || '#7b4fc9') + '">' + esc(brandName().charAt(0)) + '</div><div><b>' + esc(brandName()) + '</b><small>' + esc(S.profile.display_name || '') + '</small>' + (S.user && S.user.email ? '<small class="pc-who" title="The account you are signed in to">Signed in as<br>' + esc(S.user.email) + '</small>' : '') + '</div></div>' +
      '<nav>' + navBtn('home', '\u2302', 'Dashboard') + navBtn('clients', '\u263A', 'Clients') + navBtn('charts', '\u2609', 'Chart Design') +
      navBtn('build', '\u2726', 'Report Library' + (S.cur ? '<em>' + esc(S.cur.name.split(' ')[0]) + '</em>' : ''), !S.cur) +
      navBtn('reports', '\u2630', 'Saved Reports') + navBtn('settings', '\u2699', 'Settings & Branding') + '</nav>' +
      '<div class="pc-side-foot"><button class="pc-nav" data-act="lock"><span>\u2716</span>Lock &amp; sign out</button><small>Powered by Adventures In Astrology</small></div></aside>';
  }
  function headBar(){
    var title = {home: 'Dashboard', clients: S.cur && !S.editing ? S.cur.name : 'Clients', build: 'Report Library', send: 'Deliver Report', reports: 'Saved Reports', settings: 'Settings & Branding', charts: 'Chart Design'}[S.step] || 'Practitioner Center';
    if (!(S.user && S.profile && S.profile.approved && S.lib)) title = 'Practitioner Center';
    return '<div class="pc-top"><div class="pc-brand"><small>' + (CFG.demo ? 'Demo mode \u00B7 ' : '') + 'Professional Reading Suite</small>' + esc(title) + '</div><div class="pc-tools"><button class="pc-ic" data-act="font" data-v="-1" title="Smaller text">A\u2212</button><button class="pc-ic" data-act="font" data-v="1" title="Bigger text">A+</button></div></div>';
  }

  /* ---------- auth ---------- */
  function authView(){
    var mode = S.authMode || 'in';
    var h = '<div class="pc-screen"><div class="pc-auth pc-card"><span class="pc-lock">Private practitioner area</span>';
    if (mode === 'in') h += '<h2>Welcome back</h2><p class="pc-muted">Sign in to see your clients. Each practitioner sees only their own files.</p>';
    else if (mode === 'up') h += '<h2>Create your practitioner account</h2><p class="pc-muted">After you confirm your email, Risa approves new practitioners before client files open.</p>';
    else h += '<h2>Reset your password</h2><p class="pc-muted">We will email you a reset link.</p>';
    h += msgHTML();
    if (mode === 'up') h += '<label class="pc-f"><span>Your name (shown on reports)</span><input class="pc-in" id="pc-a-name" autocomplete="name"></label>';
    h += '<label class="pc-f"><span>Email</span><input class="pc-in" id="pc-a-email" type="email" autocomplete="email"></label>';
    if (mode !== 'reset') h += '<label class="pc-f"><span>Password' + (mode === 'up' ? ' (8+ characters)' : '') + '</span><input class="pc-in" id="pc-a-pw" type="password" autocomplete="' + (mode === 'up' ? 'new-password' : 'current-password') + '"></label>';
    h += '<button class="pc-btn big" data-act="auth"' + (S.busy ? ' disabled' : '') + '>' + (mode === 'in' ? 'Sign in' : mode === 'up' ? 'Create account' : 'Send reset link') + '</button>';
    h += '<p style="margin-top:14px">' + (mode !== 'in' ? '<button class="pc-link" data-act="authmode" data-v="in">Back to sign in</button>' : '<button class="pc-link" data-act="authmode" data-v="up">New here? Create an account</button> · <button class="pc-link" data-act="authmode" data-v="reset">Forgot password</button>') + '</p>';
    h += '<p class="pc-soon"><strong>Coming soon:</strong> $23/month for practitioners. <a href="/practitioner-reports">Join the waitlist</a></p>';
    if (CFG.demo) h += '<p class="pc-note">Demo mode: type anything to sign in. Nothing you enter is saved or sent anywhere, and it all disappears when you close the page.</p>';
    return h + '</div></div>';
  }
  function doAuth(){
    var mode = S.authMode || 'in', email = ($('#pc-a-email') || {}).value || '', pw = ($('#pc-a-pw') || {}).value || '';
    S.busy = true; S.msg = null;
    if (mode === 'in') S.store.signIn(email.trim(), pw).then(function(u){ S.busy = false; afterLogin(u); }).catch(fail);
    else if (mode === 'up') {
      var name = ($('#pc-a-name') || {}).value || '';
      if (!name.trim()) return fail('Please add your name.');
      if (pw.length < 8) return fail('Please use a password with at least 8 characters.');
      S.store.signUp(email.trim(), pw, name.trim()).then(function(d){
        S.busy = false;
        if (d && d.session) return afterLogin(d.user);
        if (!S.store.live) return afterLogin(S.store.user);
        S.authMode = 'in'; S.msg = {ok: 'Check your email to confirm your account, then sign in here.'}; render();
      }).catch(fail);
    } else S.store.resetPassword(email.trim()).then(function(){ S.busy = false; S.msg = {ok: 'If that email has an account, a reset link is on its way.'}; render(); }).catch(fail);
    render();
  }
  function recoveryView(){
    return '<div class="pc-screen"><div class="pc-auth pc-card"><h2>Choose a new password</h2>' + msgHTML() + '<label class="pc-f"><span>New password (8+ characters)</span><input class="pc-in" id="pc-r-pw" type="password" autocomplete="new-password"></label><button class="pc-btn big" data-act="setpw">Save new password</button></div></div>';
  }
  function pendingView(){
    return '<div class="pc-screen"><div class="pc-auth pc-card"><span class="pc-lock">Almost there</span><h2>Your account is waiting for approval</h2><p>Thank you for joining, ' + esc(S.profile.display_name) + '! Risa reviews each new practitioner before client files and the interpretation library open. You will be able to sign in and start right away once you are approved.</p><button class="pc-btn ghost" data-act="recheck">Check again</button></div></div>';
  }

  /* ---------- settings ---------- */
  var PC_BRAND_COLORS = ['#7b4fc9','#0f9e94','#e0663f','#c48a10','#2b8fbd','#c0398a','#3c7a6b','#2b2135'];
  function settingsView(){
    var p = S.profile, sw = '';
    for (var i = 0; i < PC_BRAND_COLORS.length; i++) sw += '<button class="pc-swatch' + ((p.brand_color || '#7b4fc9') === PC_BRAND_COLORS[i] ? ' is-on' : '') + '" style="background:' + PC_BRAND_COLORS[i] + '" data-act="brandcolor" data-v="' + PC_BRAND_COLORS[i] + '" title="' + PC_BRAND_COLORS[i] + '"></button>';
    var libHTML = p.is_admin ? (libCount() ? '<div class="pc-card"><h3>Interpretation library</h3><p>Loaded: <b>' + libCount() + ' sections</b>' + (S.aiaLib.aspectsMercury ? ', including the Additions' : '') + '. To update it or add the Additions, choose the file here (.json or .js, such as <span class="pc-mono">BCR_DATA_Additions.js</span>). Uploads add or replace only the sections inside the file.</p><input type="file" accept=".json,.js,application/json,text/javascript" id="pc-lib-file" class="pc-in"></div>' :
      '<div class="pc-card pc-libfirst"><span class="pc-stepnum alt">1</span><div><h2>One-time setup: load your interpretation library</h2><p>The reports are written from your library, so it needs to be loaded once before anything else opens.</p><ol><li>Click <b>Choose File</b> below.</li><li>Open your <b>Desktop</b> and pick <span class="pc-mono">practitioner-center-library.json</span> (your Full Tier library). You can add <span class="pc-mono">BCR_DATA_Additions.js</span> the same way afterward.</li><li>Wait for the green "Library loaded" message. Then every tab in the menu opens.</li></ol><input type="file" accept=".json,.js,application/json,text/javascript" id="pc-lib-file" class="pc-in"></div></div>') : '';
    return '<div class="pc-screen">' + msgHTML() + (libCount() ? '' : libHTML) + (libCount() ? librarySourceCard() : '') + '<div class="pc-two"><div class="pc-card"><h3>Your branding</h3><p class="pc-muted">This appears on every PDF you send.</p>' +
      '<label class="pc-f"><span>Your name (shown as "Prepared by")</span><input class="pc-in" id="pc-s-name" value="' + esc(p.display_name) + '"></label>' +
      '<label class="pc-f"><span>Business name</span><input class="pc-in" id="pc-s-biz" value="' + esc(p.business_name || '') + '" placeholder="e.g. Moonlit Path Astrology"></label>' +
      '<label class="pc-f"><span>Tagline or website (optional)</span><input class="pc-in" id="pc-s-tag" value="' + esc(p.tagline || '') + '" placeholder="e.g. moonlitpath.com"></label>' +
      '<div class="pc-f"><span style="display:block;font-weight:600;font-size:.9em;margin-bottom:6px">Brand color</span><div class="pc-row">' + sw + '</div></div>' +
      '<div class="pc-f"><span style="display:block;font-weight:600;font-size:.9em;margin-bottom:6px">Default report design</span><div class="pc-designs">' + ['classic','modern','starlight'].map(function(k){ return '<button class="pc-dchip pc-dchip-' + k + ((p.design || 'classic') === k ? ' is-on' : '') + '" data-act="defdesign" data-v="' + k + '"><i></i>' + PC_DESIGNS[k][0] + '</button>'; }).join('') + '</div></div>' +
      '<label class="pc-f"><span>Your usual closing note (starts every new report; you can edit it each time)</span><textarea class="pc-in" id="pc-s-note" rows="5">' + esc(p.closing_note || '') + '</textarea></label>' +
      '<button class="pc-btn" data-act="savesettings">Save settings</button></div>' +
      '<div class="pc-card"><h3>PDF cover preview</h3>' + coverHTML({title: 'Birth Chart Reading', client: 'Client Name', line: 'Born Mar 14, 1992 \u00B7 7:45 AM \u00B7 Portland', toc: ''}, true) + '</div></div>' + (libCount() ? libHTML : '') +
'</div>';
  }
  function coverHTML(o, mini){
    var p = S.profile, col = p.brand_color || '#7b4fc9';
    var dz = o.design || (S.build && S.build.design) || p.design || 'classic';
    return '<div class="pc-design pc-d-' + dz + '" style="--brand:' + col + '"><div class="pc-cover' + (mini ? ' pc-cover-mini' : '') + '"><div class="pc-cover-band"></div><div class="pc-cover-k">' + esc(p.business_name || p.display_name || 'Your Reader') + '</div><h1>' + esc(o.title) + '</h1><p class="pc-cover-who">Prepared for <b>' + esc(o.client) + '</b></p><p>' + o.line + '</p>' + (o.flag || '') + (o.toc ? '<div class="pc-cover-toc"><div class="pc-cover-k">Inside this reading</div>' + o.toc + '</div>' : '') +
      '<p class="pc-cover-by">Prepared by ' + esc(p.display_name || '') + (p.tagline ? ' \u00B7 ' + esc(p.tagline) : '') + ' \u00B7 ' + new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}) + '</p><div class="pc-cover-aia"><img src="' + PC_AIA.logo + '" alt="Adventures In Astrology"><span>Powered by Adventures In Astrology</span></div></div></div>';
  }

  function countKeys(o){ var n = 0; if (o) for (var k in o) if (o.hasOwnProperty(k)) n++; return n; }
  function libCount(){ return countKeys(S.aiaLib); }
  function usingOwn(){ return S.profile && S.profile.library_source === 'own' && countKeys(S.ownLib) > 0; }
  function applyLibrary(){
    if (usingOwn()) { var m = pcMergeLibrary(S.aiaLib, S.ownLib); S.lib = m.lib; S.ownPaths = m.ownPaths; }
    else { S.lib = S.aiaLib; S.ownPaths = null; }
    S._qc = null; S._ctx = null;
  }
  function loadOwnLibraryFile(file){
    var rd = new FileReader();
    rd.onload = function(){
      var lib; try { lib = JSON.parse(rd.result); } catch (e) { return fail('That file could not be read as a library (it needs to be a .json file).'); }
      if (lib && lib.BCR_DATA) lib = lib.BCR_DATA;
      var v = pcValidateLibrary(lib);
      if (!v.present && !v.extras.length) return fail('That file does not use the library section names (sun, moon, rising and so on), so nothing could be used.');
      S.msg = {ok: 'Saving your library\u2026'}; render();
      S.store.saveOwnLibrary(lib).then(function(n){
        S.ownLib = lib; S.ownCheck = v; S.profile.library_source = 'own'; return S.store.saveProfile(S.profile).then(function(){ return n; });
      }).then(function(n){ applyLibrary(); S.msg = {ok: 'Your library is saved (' + n + ' sections). Anything it does not cover uses the Adventures In Astrology text.'}; render(); }).catch(fail);
    };
    rd.readAsText(file);
  }
  function librarySourceCard(){
    var p = S.profile, own = countKeys(S.ownLib), src = p.library_source === 'own' ? 'own' : 'aia', v = S.ownCheck || (own ? pcValidateLibrary(S.ownLib) : null);
    var h = '<div class="pc-card"><h3>Library source</h3><p class="pc-muted">Where report text comes from.</p>' +
      '<label class="pc-radio"><input type="radio" name="pc-libsrc" data-act="libsrc" data-v="aia"' + (src === 'aia' ? ' checked' : '') + '><span><b>Adventures In Astrology library</b> (default)<br><small>Every report is written from the AIA interpretation library.</small></span></label>' +
      '<label class="pc-radio"><input type="radio" name="pc-libsrc" data-act="libsrc" data-v="own"' + (src === 'own' ? ' checked' : '') + '><span><b>My own library</b> (optional)<br><small>Upload your own text in the same format. Anything you leave out uses the AIA text, and the builder labels which is which.</small></span></label>';
    if (src === 'own') {
      h += '<div class="pc-ownbox">' + (own ? '<p><b>' + own + ' sections uploaded.</b></p>' : '<p>No library uploaded yet, so reports use the AIA text.</p>');
      if (v) {
        if (v.missing.length) h += '<p class="pc-muted">Not in your file (AIA text is used): ' + esc(v.missing.join(', ')) + '</p>';
        if (v.incomplete.length) h += '<p class="pc-muted">Incomplete entries (AIA text fills the gaps): ' + esc(v.incomplete.slice(0, 12).join('; ')) + (v.incomplete.length > 12 ? ' and ' + (v.incomplete.length - 12) + ' more' : '') + '</p>';
        if (v.unknown.length) h += '<p class="pc-muted">Not used (unknown section names): ' + esc(v.unknown.join(', ')) + '</p>';
      }
      h += '<label class="pc-f"><span>' + (own ? 'Replace with a newer file' : 'Upload your library (.json, same section names and fields)') + '</span><input type="file" accept=".json,application/json" id="pc-own-file" class="pc-in"></label>' +
        (own ? '<button class="pc-btn ghost small" data-act="clearown">Remove my library</button>' : '') + '</div>';
    }
    return h + '</div>';
  }
  function parseLibraryText(text, allowJs){
    var t = String(text).replace(/^\uFEFF/, '');
    try { var j = JSON.parse(t); return j && j.BCR_DATA ? j.BCR_DATA : j; } catch (e) {}
    if (!allowJs) throw new Error('Please choose a .json library file.');
    var fakeWin = {BCR_DATA: {}};
    /* admin-only: reads Risa's own library file (window.BCR_DATA = ...) into a sandbox object */
    (new Function('window', 'var BCR_DATA = window.BCR_DATA;\n' + t + '\n;return window;'))(fakeWin);
    return fakeWin.BCR_DATA;
  }
  function loadLibraryFile(file){
    var rd = new FileReader();
    rd.onload = function(){
      var lib; try { lib = parseLibraryText(rd.result, true); } catch (e) { return fail('That file could not be read as a library (' + e.message + ').'); }
      var v = pcValidateLibrary(lib || {});
      if (!v.present && !v.extras.length) return fail('That file does not contain any library sections (sun, moon, rising, aspectsMercury and so on).');
      var adds = v.present < PC_LIB_SECTIONS.length;
      S.msg = {ok: 'Uploading your library\u2026'}; render();
      S.store.saveLibrary(lib).then(function(n){
        var merged = {}, k; for (k in S.aiaLib) if (S.aiaLib.hasOwnProperty(k)) merged[k] = S.aiaLib[k]; for (k in lib) if (lib.hasOwnProperty(k)) merged[k] = lib[k];
        S.aiaLib = merged; applyLibrary();
        S.msg = {ok: (adds ? 'Added or updated ' + n + ' sections' : 'Library loaded: ' + n + ' sections') + '. Library now holds ' + libCount() + ' sections. You are ready to go!'}; render();
      }).catch(fail);
    };
    rd.readAsText(file);
  }
  function readHandoff(){
    var raw = null, d = null;
    try { raw = window.localStorage.getItem('pc-handoff'); } catch (e) { return null; }
    if (!raw) return null;
    try { window.localStorage.removeItem('pc-handoff'); d = JSON.parse(raw); } catch (e) { return null; }
    if (!d || !d.ts || Date.now() - d.ts > 30 * 60000 || !d.date) return null;
    return d;
  }
  function applyHandoff(d){
    var p = String(d.date).split('-'), c = {house: 'E', name: d.name || '', y: +p[0], mo: +p[1], d: +p[2]};
    if (!d.notime && d.time) { var t = String(d.time).split(':'); c.timeKnown = true; c.h = +t[0]; c.mi = +(t[1] || 0); } else c.timeKnown = false;
    if (d.lat !== undefined && d.lat !== null && d.lat !== '' && d.tz) { c.lat = +d.lat; c.lon = +d.lon; c.tz = d.tz; c.placeLabel = d.place || 'From calculator'; }
    else c.placeLabel = d.place || '';
    c._fromCalc = true; c._noTime = !c.timeKnown;
    S.step = 'clients'; S.cur = null; S.editing = c; S.formErr = null;
    S.msg = {ok: 'Filled in from ' + (d.source || 'your calculator') + '. Check the details' + (c.lat === undefined ? ', pick the birth city from the list' : '') + ', then save the client to build the reading.'};
    render();
    if (c.lat === undefined && c.placeLabel) { var pl = $('#pc-c-place'); if (pl) { pl.value = c.placeLabel; geoSearch(c.placeLabel, true); } }
  }
  function loadHome(){
    return Promise.all([S.store.allReports(), S.store.recentSessions()]).then(function(r){ S.homeReports = r[0]; S.homeSessions = r[1]; }).catch(function(){ S.homeReports = []; S.homeSessions = []; });
  }
  function clientName(id){ for (var i = 0; i < S.clients.length; i++) if (S.clients[i].id === id) return S.clients[i].name; return 'Client'; }
  function homeView(){
    var first = (S.profile.display_name || '').split(' ')[0];
    var h = '<div class="pc-screen">' + msgHTML() + '<h2 style="margin-bottom:14px">Welcome, ' + esc(first) + '</h2>';
    h += '<div class="pc-tiles"><button class="pc-tile alt" data-act="newclient"><b>+</b>New client</button>' +
      '<button class="pc-tile" data-act="go" data-v="clients"><b>' + S.clients.length + '</b>My clients</button>' +
      '<button class="pc-tile plum" data-act="go" data-v="reports"><b>' + S.homeReports.length + '</b>Saved reports</button></div>';
    h += '<div class="pc-two" style="margin-top:18px"><div class="pc-card"><h3>Recent sessions</h3>';
    if (!S.homeSessions.length) h += '<p class="pc-muted">No sessions logged yet.</p>';
    for (var i = 0; i < S.homeSessions.length; i++) { var x = S.homeSessions[i]; h += '<button class="pc-citem" data-act="opensessclient" data-v="' + x.client_id + '"><b>' + esc(clientName(x.client_id)) + '</b><small>' + esc(x.session_date) + (x.topic ? ' \u00B7 ' + esc(x.topic) : '') + '</small></button>'; }
    h += '</div><div class="pc-card"><h3>Recent reports</h3>' + reportRows(S.homeReports.slice(0, 6), true) + (S.homeReports.length > 6 ? '<button class="pc-btn ghost small" data-act="go" data-v="reports">See all reports</button>' : '') + '</div></div></div>';
    return h;
  }
  function reportRows(list, withClient){
    if (!list.length) return '<p class="pc-muted">No saved reports yet. Open a client and click <b>Open Report Library</b>.</p>';
    var h = '';
    for (var j = 0; j < list.length; j++) { var r = list[j]; h += '<div class="pc-rep"><div><b>' + esc(r.title) + '</b><br><small class="pc-muted">' + (withClient ? esc(clientName(r.client_id)) + ' \u00B7 ' : '') + (r.sections || []).length + ' sections \u00B7 ' + (r.short_version ? 'client version' : 'full version') + (r.archetype_mode ? ' \u00B7 archetypes' : '') + ' \u00B7 ' + esc(String(r.updated_at || '').slice(0, 10)) + '</small></div><span class="pc-spacer"></span><button class="pc-btn small" data-act="openany" data-v="' + r.id + '" data-c="' + r.client_id + '">Open</button></div>'; }
    return h;
  }
  function reportsView(){
    var q = (S.rsearch || '').toLowerCase();
    var list = S.homeReports.filter(function(r){ return !q || (r.title + ' ' + clientName(r.client_id)).toLowerCase().indexOf(q) >= 0; });
    return '<div class="pc-screen">' + msgHTML() + '<div class="pc-card"><div class="pc-row"><h2 style="margin:0">All saved reports</h2><span class="pc-spacer"></span><input class="pc-in" style="max-width:280px" id="pc-rsearch" placeholder="Search by client or title" value="' + esc(S.rsearch || '') + '"></div><div style="margin-top:14px">' + reportRows(list, true) + '</div></div></div>';
  }

  /* ---------- clients ---------- */
  function clientsView(){
    var q = (S.search || '').toLowerCase(), list = '';
    for (var i = 0; i < S.clients.length; i++) {
      var c = S.clients[i]; if (q && c.name.toLowerCase().indexOf(q) < 0) continue;
      list += '<button class="pc-citem' + (S.cur && S.cur.id === c.id ? ' is-on' : '') + '" data-act="pick" data-v="' + c.id + '"><b>' + esc(c.name) + '</b><small>' + birthLine(c, true) + '</small></button>';
    }
    if (!list) list = '<p class="pc-muted" style="padding:10px">' + (S.clients.length ? 'No match.' : 'No clients yet. Add your first one!') + '</p>';
    var left = '<div class="pc-card"><button class="pc-btn alt big" style="width:100%;justify-content:center" data-act="newclient">+ New client</button>' +
      (S.clients.length > 6 ? '<input class="pc-in" style="margin-top:10px" placeholder="Search clients" id="pc-search" value="' + esc(S.search || '') + '">' : '') +
      '<div class="pc-clist">' + list + '</div></div>';
    var right = S.editing ? clientForm() : S.cur ? clientDetail() : '<div class="pc-card pc-empty"><h3>Pick a client or add a new one</h3><p>Client files are private to you. Then click <b>Open Report Library</b>.</p></div>';
    return '<div class="pc-screen">' + msgHTML() + '<div class="pc-two"><div>' + left + '</div><div>' + right + '</div></div></div>';
  }
  function hour12(h){ var ap = h < 12 ? 'AM' : 'PM', hh = h % 12; if (hh === 0) hh = 12; return {h: hh, ap: ap}; }
  function birthLine(c, compact){
    var d = new Date(Date.UTC(c.y, c.mo - 1, c.d, 12)).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC'});
    var t = c.timeKnown ? (function(){ var x = hour12(c.h); return x.h + ':' + pcPad(c.mi) + ' ' + x.ap; })() : 'time unknown';
    return esc(d + ' · ' + t + (compact ? '' : ' · ' + (c.placeLabel || '')));
  }
  function clientDetail(){
    var c = S.cur, ctx = quickCtx(c);
    var b = ctx.chart.bodies, big3 = 'Sun ' + b.Sun.sign + ' · Moon ' + (!c.timeKnown && ctx.chart.moonRange.changes ? ctx.chart.moonRange.fromSign + '/' + ctx.chart.moonRange.toSign : b.Moon.sign) + (c.timeKnown ? ' · Rising ' + b.Ascendant.sign : '');
    var h = '<div class="pc-card"><div class="pc-row"><div><h2 style="margin:0">' + esc(c.name) + '</h2>' + (c.pronouns ? '<span class="pc-muted">' + esc(c.pronouns) + '</span>' : '') + '</div><span class="pc-spacer"></span>' +
      '<button class="pc-btn ghost small" data-act="editclient">Edit</button><button class="pc-btn big" data-act="go" data-v="build">Open Report Library →</button></div>' +
      '<div class="pc-facts"><div class="pc-fact"><small>Born</small>' + birthLine(c, true) + '</div><div class="pc-fact"><small>Place</small>' + esc(c.placeLabel || 'Not added') + '</div><div class="pc-fact"><small>Big 3</small>' + esc(big3) + '</div>' +
      '<div class="pc-fact"><small>Life Path · HD</small>' + ctx.num.lifePath + ' · ' + esc(ctx.hd.type) + ' ' + ctx.hd.profile + '</div>' +
      '<div class="pc-fact"><small>Tree of Life</small>Soul sphere ' + PC_SEPH[ctx.tree.soul.key].name + ' · ' + ctx.tree.paths.filter(function(p){ return p.score > 0; }).length + ' lit paths</div></div>' +
      (c.notes ? '<div class="pc-note"><b>Private notes:</b> ' + esc(c.notes).replace(/\n/g, '<br>') + '</div>' : '') +
      '<div class="pc-switch" style="margin-top:14px;display:inline-flex"><button class="' + (S.ctab === 'overview' ? 'is-on' : '') + '" data-act="ctab" data-v="overview">Overview</button><button class="' + (S.ctab === 'sessions' ? 'is-on' : '') + '" data-act="ctab" data-v="sessions">Sessions (' + S.sessions.length + ')</button><button class="' + (S.ctab === 'reports' ? 'is-on' : '') + '" data-act="ctab" data-v="reports">Reports (' + S.reports.length + ')</button></div></div>';
    if (S.ctab === 'overview') {
      h += '<div class="pc-card"><h3>Quick look</h3><div class="pc-facts">' +
        '<div class="pc-fact"><small>Destiny Matrix</small>Comfort zone ' + ctx.matrix.E + ' \u00B7 ' + PC_ARCANA[ctx.matrix.E][0] + '</div>' +
        '<div class="pc-fact"><small>Year theme</small>' + pcOrd(ctx.prof2.house) + ' house \u00B7 ' + ctx.prof2.lord + ' year' + (ctx.prof2.solar ? ' (solar)' : '') + '</div>' +
        '<div class="pc-fact"><small>Last session</small>' + (S.sessions[0] ? esc(S.sessions[0].session_date) + (S.sessions[0].topic ? ' \u00B7 ' + esc(S.sessions[0].topic) : '') : 'None yet') + '</div>' +
        '<div class="pc-fact"><small>Last report</small>' + (S.reports[0] ? esc(S.reports[0].title) : 'None yet') + '</div></div>' +
        '<div class="pc-row"><button class="pc-btn" data-act="newsess">+ Log a session</button><button class="pc-btn plum" data-act="go" data-v="build">Open Report Library \u2192</button></div></div>';
      return h;
    }
    if (S.ctab === 'reports') {
      return h + '<div class="pc-card"><h3>Saved reports</h3>' + reportRows(S.reports, false) + '</div>';
    }
    /* sessions */
    h += '<div class="pc-card"><div class="pc-row"><h3 style="margin:0">Sessions</h3><span class="pc-spacer"></span><button class="pc-btn small" data-act="newsess">+ Log a session</button></div><p class="pc-muted">Private session notes, like a therapist\'s file. Only you can see these.</p>';
    if (S.sessEdit) {
      var x = S.sessEdit;
      h += '<div class="pc-card" style="background:var(--gold-l)"><div class="pc-row"><label class="pc-f" style="flex:1"><span>Date</span><input class="pc-in" type="date" id="pc-x-date" value="' + esc(x.session_date) + '"></label><label class="pc-f" style="flex:2"><span>Topic</span><input class="pc-in" id="pc-x-topic" value="' + esc(x.topic || '') + '" placeholder="e.g. career crossroads, Saturn return"></label></div>' +
        '<label class="pc-f"><span>Notes</span><textarea class="pc-in" id="pc-x-notes" rows="5">' + esc(x.notes || '') + '</textarea></label><div class="pc-row"><button class="pc-btn" data-act="savesess">Save session</button><button class="pc-btn ghost" data-act="cancelsess">Cancel</button>' + (x.id ? '<span class="pc-spacer"></span><button class="pc-btn ghost small" data-act="delsess" data-v="' + x.id + '">Delete</button>' : '') + '</div></div>';
    }
    if (!S.sessions.length && !S.sessEdit) h += '<p class="pc-muted">No sessions logged yet.</p>';
    for (var i = 0; i < S.sessions.length; i++) { var s = S.sessions[i]; h += '<div class="pc-sess"><div class="pc-row"><h4>' + esc(s.session_date) + (s.topic ? ' · ' + esc(s.topic) : '') + '</h4><span class="pc-spacer"></span><button class="pc-link" data-act="editsess" data-v="' + s.id + '">Edit</button></div>' + (s.notes ? '<p style="margin:.3em 0 0">' + esc(s.notes).replace(/\n/g, '<br>') + '</p>' : '') + '</div>'; }
    h += '</div>';
    return h;
  }
  function quickCtx(c){
    if (S._qc && S._qc.key === JSON.stringify(c)) return S._qc.ctx;
    var ctx = pcBuildContext(c, S.lib, {});
    S._qc = {key: JSON.stringify(c), ctx: ctx}; return ctx;
  }
  function selectOpts(from, to, sel, pad){ var o = ''; for (var i = from; i <= to; i++) o += '<option value="' + i + '"' + (i === sel ? ' selected' : '') + '>' + (pad ? pcPad(i) : i) + '</option>'; return o; }
  function clientForm(){
    var c = S.editing, t = c.timeKnown ? hour12(c.h) : {h: 12, ap: 'PM'};
    var h = '<div class="pc-card"><h2>' + (c.id ? 'Edit ' + esc(c.name) : 'New client') + '</h2>' + (S.formErr ? '<div class="pc-err">' + esc(S.formErr) + '</div>' : '') +
      '<div class="pc-row"><label class="pc-f" style="flex:2"><span>Name (full birth name helps numerology)</span><input class="pc-in" id="pc-c-name" value="' + esc(c.name || '') + '"></label><label class="pc-f" style="flex:1"><span>Pronouns</span><input class="pc-in" id="pc-c-pro" value="' + esc(c.pronouns || '') + '"></label></div>' +
      '<label class="pc-f"><span>Email (optional, for sending their report)</span><input class="pc-in" type="email" id="pc-c-email" value="' + esc(c.email || '') + '"></label>' +
      '<label class="pc-f"><span>Birth date</span><input class="pc-in" type="date" id="pc-c-date" value="' + (c.y ? c.y + '-' + pcPad(c.mo) + '-' + pcPad(c.d) : '') + '"></label>' +
      '<label class="pc-check"><input type="checkbox" id="pc-c-unk"' + ((c.id || c._fromCalc) && !c.timeKnown ? ' checked' : '') + ' data-act="toggleunk"> Birth time unknown</label>' +
      '<div id="pc-c-timewrap" class="' + ((c.id || c._fromCalc) && !c.timeKnown ? 'pc-hide' : '') + '"><label class="pc-f"><span>Birth time</span><div class="pc-time"><select class="pc-in" id="pc-c-h">' + selectOpts(1, 12, t.h) + '</select><select class="pc-in" id="pc-c-m">' + selectOpts(0, 59, c.timeKnown ? c.mi : 0, true) + '</select><select class="pc-in" id="pc-c-ap"><option' + (t.ap === 'AM' ? ' selected' : '') + '>AM</option><option' + (t.ap === 'PM' ? ' selected' : '') + '>PM</option></select></div></label></div>' +
      '<label class="pc-f"><span>Birth place (type a city, then pick it from the list)</span><input class="pc-in" id="pc-c-place" autocomplete="off" value="' + esc(c.placeLabel || '') + '"></label><div id="pc-c-sugg"></div>' +
      '<div id="pc-c-picked">' + (c.lat !== undefined && c.lat !== null ? pickedHTML(c) : '') + '</div>' +
      '<details style="margin:8px 0 12px"><summary class="pc-muted" style="cursor:pointer">Can\'t find the place? Enter it by hand</summary><div class="pc-row" style="margin-top:8px"><label class="pc-f"><span>Latitude</span><input class="pc-in" id="pc-c-lat" value="' + (c.lat !== undefined && c.lat !== null ? c.lat : '') + '"></label><label class="pc-f"><span>Longitude (west is minus)</span><input class="pc-in" id="pc-c-lon" value="' + (c.lon !== undefined && c.lon !== null ? c.lon : '') + '"></label><label class="pc-f"><span>Time zone (e.g. America/Chicago)</span><input class="pc-in" id="pc-c-tz" value="' + esc(c.tz || '') + '"></label></div></details>' +
      '<label class="pc-f"><span>House system</span><select class="pc-in" id="pc-c-house"><option value="E"' + (c.house === 'E' || !c.house ? ' selected' : '') + '>Equal</option><option value="P"' + (c.house === 'P' ? ' selected' : '') + '>Placidus</option><option value="W"' + (c.house === 'W' ? ' selected' : '') + '>Whole Sign</option></select></label>' +
      '<label class="pc-f"><span>Private notes (only you see these)</span><textarea class="pc-in" id="pc-c-notes">' + esc(c.notes || '') + '</textarea></label>' +
      '<div class="pc-row"><button class="pc-btn big" data-act="saveclient"' + (S.busy ? ' disabled' : '') + '>Save client</button><button class="pc-btn ghost" data-act="cancelclient">Cancel</button>' + (c.id ? '<span class="pc-spacer"></span><button class="pc-btn ghost small" data-act="delclient">Delete client</button>' : '') + '</div></div>';
    return h;
  }
  function pickedHTML(c){ return '<div class="pc-picked">✓ ' + esc(c.placeLabel || 'Custom place') + ' <span class="pc-mono">(' + (+c.lat).toFixed(2) + ', ' + (+c.lon).toFixed(2) + ', ' + esc(c.tz) + ')</span></div>'; }

  var geoTimer = null;
  function geoSearch(q, autoPick){
    clearTimeout(geoTimer);
    if (q.length < 2) { $('#pc-c-sugg').innerHTML = ''; return; }
    geoTimer = setTimeout(function(){
      fetch('https://geocoding-api.open-meteo.com/v1/search?count=8&language=en&format=json&name=' + encodeURIComponent(q.split(',')[0].trim()))
        .then(function(r){ return r.json(); })
        .then(function(d){
          var box = $('#pc-c-sugg'); if (!box) return;
          var res = (d && d.results) || [], h = '';
          S._geo = res;
          for (var i = 0; i < res.length; i++) h += '<button data-act="geopick" data-v="' + i + '">' + esc([res[i].name, res[i].admin1, res[i].country].filter(Boolean).join(', ')) + '</button>';
          box.innerHTML = h ? '<div class="pc-sugg">' + h + '</div>' : '<p class="pc-muted">No match yet. Try just the city name, or enter it by hand below.</p>';
          if (autoPick && res.length) { var want = String(q).toLowerCase(), best = 0; for (var k = 0; k < res.length; k++) { var lab = [res[k].name, res[k].admin1, res[k].country].join(' ').toLowerCase(); var parts = want.split(/,\s*/); if (parts.length > 1 && lab.indexOf(parts[1]) >= 0) { best = k; break; } } var bt = box.querySelector('[data-v="' + best + '"]'); if (bt) bt.click(); }
        }).catch(function(){ var box = $('#pc-c-sugg'); if (box) box.innerHTML = '<p class="pc-muted">Place search is not reachable right now. Enter latitude, longitude and time zone by hand below.</p>'; });
    }, 280);
  }
  function readClientForm(){
    var c = S.editing, v = function(id){ var el = $('#' + id); return el ? el.value : ''; };
    c.name = v('pc-c-name').trim(); c.pronouns = v('pc-c-pro').trim(); c.email = v('pc-c-email').trim(); c.notes = v('pc-c-notes'); c.house = v('pc-c-house');
    var dt = v('pc-c-date').split('-'); c.y = +dt[0]; c.mo = +dt[1]; c.d = +dt[2];
    c.timeKnown = !$('#pc-c-unk').checked;
    if (c.timeKnown) { var hh = +v('pc-c-h') % 12; if (v('pc-c-ap') === 'PM') hh += 12; c.h = hh; c.mi = +v('pc-c-m'); } else { c.h = null; c.mi = null; }
    var lat = v('pc-c-lat'), lon = v('pc-c-lon'), tz = v('pc-c-tz').trim();
    if (lat !== '' && lon !== '' && tz) { c.lat = +lat; c.lon = +lon; c.tz = tz; if (!c.placeLabel || c._manual) { c.placeLabel = v('pc-c-place').trim() || 'Custom place'; c._manual = true; } }
    if (!c.name) return 'Please add the client\'s name.';
    if (!c.y || !c.mo || !c.d) return 'Please add the birth date.';
    if (c.lat === undefined || c.lat === null || isNaN(c.lat) || !c.tz) return 'Please pick the birth place from the list (or enter it by hand).';
    if (pcZoneOffsetMin(c.tz, new Date()) === null) return 'That time zone name was not recognized. Try a name like America/New_York.';
    return null;
  }
  function fetchChiron(c){
    if (!CFG.swissApi || !c.lat) return Promise.resolve(null);
    var ctrl = window.AbortController ? new AbortController() : null; if (ctrl) setTimeout(function(){ ctrl.abort(); }, 25000);
    return fetch(CFG.swissApi.replace(/\/$/, '') + '/chart', {method: 'POST', headers: {'Content-Type': 'application/json'}, signal: ctrl ? ctrl.signal : undefined,
      body: JSON.stringify({date: c.y + '-' + pcPad(c.mo) + '-' + pcPad(c.d), time: c.timeKnown ? pcPad(c.h) + ':' + pcPad(c.mi) : '12:00', timezone: c.tz, latitude: c.lat, longitude: c.lon})})
      .then(function(r){ return r.json(); }).then(function(d){
        var bs = (d && d.bodies) || [];
        for (var i = 0; i < bs.length; i++) if (String(bs[i].name).toLowerCase() === 'chiron') {
          var b = bs[i];
          if (typeof b.longitude === 'number') return b.longitude;
          if (typeof b.lon === 'number') return b.lon;
          var si = PC_SIGNS.indexOf(b.sign); if (si >= 0) return si * 30 + (+b.degree || 0) + (+b.minute || 0) / 60 + (+b.second || 0) / 3600;
        }
        return null;
      }).catch(function(){ return null; });
  }
  function saveClient(){
    var err = readClientForm(); S.formErr = err;
    if (err) return render();
    S.busy = true; render();
    var c = S.editing; delete c._manual;
    var birthKey = [c.y, c.mo, c.d, c.h, c.mi, c.lat, c.lon].join('|');
    var needChiron = c.chironLon === undefined || c.chironLon === null || c._birthKey !== birthKey;
    (needChiron ? fetchChiron(c) : Promise.resolve(c.chironLon)).then(function(ch){
      c.chironLon = ch; delete c._birthKey;
      return S.store.saveClient(c);
    }).then(function(saved){
      S.busy = false; S.editing = null; S.formErr = null;
      return S.store.clients().then(function(cl){ S.clients = cl; openClient(saved.id); toast('Client saved'); });
    }).catch(fail);
  }
  function openClient(id, then){
    S.cur = null; for (var i = 0; i < S.clients.length; i++) if (S.clients[i].id === id) S.cur = S.clients[i];
    S.sessEdit = null; S.build = null; S.msg = null;
    if (!S.cur) return render();
    Promise.all([S.store.sessions(id), S.store.reports(id)]).then(function(r){ S.sessions = r[0]; S.reports = r[1]; if (then) then(); else render(); }).catch(fail);
  }

  /* ---------- build ---------- */
  function allIds(){ var a = []; for (var i = 0; i < PC_SECTIONS.length; i++) for (var j = 0; j < PC_SECTIONS[i].items.length; j++) a.push(PC_SECTIONS[i].items[j][0]); return a; }
  function newBuild(){
    S.build = {id: null, design: S.profile.design || 'classic', reports: ['natal'], length: 'concise', archetype: false, welcome: true, closing: true, extra: [], removed: [], themes: [], house: S.cur.house || 'E', title: '', note: (S.profile.closing_note || '')};
  }
  function planOf(b){ return {partnerId: b.partnerId || '', design: b.design || 'classic', reports: b.reports, length: b.length, archetype: b.archetype, welcome: b.welcome, closing: b.closing, extra: b.extra, removed: b.removed}; }
  function autoTitle(){
    var b = S.build; if (b.title) return b.title;
    if (!b.reports.length) return S.cur.name + ' \u00B7 Reading';
    if (b.reports.length === 1) return PC_REPORT_BY_ID[b.reports[0]].name;
    return 'Combined Reading: ' + b.reports.map(function(r){ return PC_REPORT_BY_ID[r].name; }).join(' + ');
  }
  function ctxFor(){
    var b = S.build, key = JSON.stringify([S.cur, b.house, b.partnerId || '']);
    if (!S._ctx || S._ctxKey !== key) { S._ctx = pcBuildContext(S.cur, S.lib, {short: false, archetype: false, house: b.house}); S._ctx.partner = partnerClient(); S._ctxKey = key; }
    S._ctx.pickedThemes = b.themes.length ? b.themes : null;
    S._ctx.ownPaths = S.ownPaths || null;
    S._ctx.note = b.note; S._ctx.practitionerName = S.profile.display_name;
    return S._ctx;
  }
  function bundleIds(){ var ch = pcBundleChapters(planOf(S.build), ctxFor()), out = []; for (var i = 0; i < ch.length; i++) out = out.concat(ch[i].ids); return out; }
  function partnerClient(){ var id = S.build && S.build.partnerId; if (!id) return null; for (var i = 0; i < S.clients.length; i++) if (S.clients[i].id === id && id !== S.cur.id) return S.clients[i]; return null; }
  function cardInfo(id){
    var b = S.build, key = JSON.stringify([S.cur.id, b.house, b.length, b.archetype, b.partnerId || '', b.themes.join(',')]);
    if (S._cardKey !== key) { S._cards = {}; S._cardKey = key; }
    if (S._cards[id]) return S._cards[id];
    var sec = PC_SECTION_BY_ID[id], cx = pcWithOpts(ctxFor(), {short: b.length !== 'full', archetype: !!b.archetype}), r = null;
    try { r = sec.fn(cx); } catch (e) { r = null; }
    var info = {title: sec.label, teaser: '', deg: '', html: ''};
    if (r) {
      var tmp = document.createElement('div'); tmp.innerHTML = r.title; info.title = (tmp.textContent || sec.label).replace(/\s+/g, ' ');
      var small = tmp.querySelector('small'); if (small) { info.deg = small.textContent; small.parentNode.removeChild(small); info.title = tmp.textContent; }
      tmp.innerHTML = r.html;
      var junk = tmp.querySelectorAll('svg,table,.pc-kv,.pc-bars,.pc-chips,.pc-muted,.pc-note,.pc-r-lab,.pc-num-n,.pc-tcard-n,.pc-path-n,.pc-cast-g,.pc-big3-l');
      for (var q = 0; q < junk.length; q++) if (junk[q].parentNode) junk[q].parentNode.removeChild(junk[q]);
      var firstP = tmp.querySelector('p'), tx = ((firstP && firstP.textContent.length > 30 ? firstP.textContent : tmp.textContent) || '').replace(/\s+/g, ' ').trim();
      info.teaser = tx.length > 150 ? tx.slice(0, 147).replace(/\s+\S*$/, '') + '…' : tx;
      info.deg = r.deg || info.deg; info.html = r.html;
    }
    S._cards[id] = info; return info;
  }
  function cardState(id, R){
    var ctx = ctxFor(), sec = PC_SECTION_BY_ID[id];
    if (sec.needsTime && !ctx.chart.timeKnown) return 'na-time';
    if (id === 'chiron' && !ctx.chart.bodies.Chiron) return 'na-chiron';
    if (R && R.needsPartner && !ctx.partner) return 'na-partner';
    return bundleIds().indexOf(id) >= 0 ? 'in' : 'out';
  }
  function buildView(){
    if (!S.build) newBuild();
    var b = S.build, ctx = ctxFor(), known = ctx.chart.timeKnown, c = S.cur, bb = ctx.chart.bodies;
    var others = S.clients.filter(function(x){ return x.id !== c.id; });
    var head = '<div class="pc-card pc-clienthead"><div><small class="pc-muted">Reading for</small><h2 style="margin:0">' + esc(c.name) + '</h2><span class="pc-muted">' + birthLine(c, true) + ' · Sun ' + bb.Sun.sign + (known ? ' · Rising ' + bb.Ascendant.sign : '') + '</span></div><span class="pc-spacer"></span>' +
      '<label class="pc-compare"><span>Compare with</span><select class="pc-in" id="pc-b-partner"><option value="">Nobody (single chart)</option>' + others.map(function(o){ return '<option value="' + o.id + '"' + (b.partnerId === o.id ? ' selected' : '') + '>' + esc(o.name) + '</option>'; }).join('') + '</select></label></div>';
    var chips = '';
    for (var i = 0; i < PC_REPORTS.length; i++) {
      var R = PC_REPORTS[i], on = b.reports.indexOf(R.id) >= 0;
      chips += '<button class="pc-rchip' + (on ? ' is-on' : '') + '" style="--rc:' + R.color + '" data-act="report" data-v="' + R.id + '" title="' + esc(R.tagline) + '"><span class="pc-rchip-i">' + R.icon + '</span>' + esc(R.name) + (on ? '<b>✓</b>' : '') + '</button>';
    }
    var bar = '<div class="pc-card pc-stick pc-toolbar"><div class="pc-bar-row"><div class="pc-optrow"><span>Length</span><div class="pc-switch">' + ['full','concise','snapshot'].map(function(k){ return '<button class="' + (b.length === k ? 'is-on' : '') + '" data-act="length" data-v="' + k + '">' + {full: 'Full', concise: 'Concise', snapshot: 'Key cards'}[k] + '</button>'; }).join('') + '</div></div>' +
      '<div class="pc-optrow"><span>Voice</span><div class="pc-switch arch"><button class="' + (!b.archetype ? 'is-on' : '') + '" data-act="arch" data-v="0">Standard</button><button class="' + (b.archetype ? 'is-on' : '') + '" data-act="arch" data-v="1">Archetypes</button></div></div>' +
      '<div class="pc-optrow"><span>Design</span><div class="pc-designs">' + ['classic','modern','starlight'].map(function(k){ return '<button class="pc-dchip pc-dchip-' + k + ((b.design || 'classic') === k ? ' is-on' : '') + '" data-act="design" data-v="' + k + '" title="' + PC_DESIGNS[k][1] + '"><i></i>' + PC_DESIGNS[k][0] + '</button>'; }).join('') + '</div></div></div>' +
      '<div class="pc-bar-row"><input class="pc-in" id="pc-b-title" style="flex:1;min-width:220px" value="' + esc(autoTitle()) + '"><b class="pc-count">' + bundleIds().length + ' cards</b><button class="pc-btn ghost" data-act="saverep"' + (S.busy ? ' disabled' : '') + '>Save</button><button class="pc-btn plum" data-act="previewdoc"' + (bundleIds().length ? '' : ' disabled') + '>Preview reading</button><button class="pc-btn alt" data-act="go" data-v="send"' + (bundleIds().length ? '' : ' disabled') + '>Deliver</button></div></div>';
    var th = '', anim = S._animFor !== c.id; S._animFor = c.id;
    for (var t = 0; t < ctx.themes.length; t++) {
      var tt = ctx.themes[t]; if (tt.timed && !known) continue;
      th += '<button class="pc-theme' + (b.themes.indexOf(tt.id) >= 0 ? ' is-in' : '') + '" style="' + (anim ? 'animation-delay:' + (t * 0.09) + 's' : 'animation:none') + '" data-act="theme" data-v="' + tt.id + '">✦︎ ' + esc(tt.title) + '</button>';
    }
    var board = '';
    var open = b.reports.map(function(id){ return PC_REPORT_BY_ID[id]; }).filter(Boolean);
    if (!open.length) board = '<div class="pc-card pc-empty"><h3>Choose a reading above</h3><p>Its cards spread out here. Tick the cards you want, tap any card to read it, then preview and deliver.</p></div>';
    var shown = {};
    for (var g = 0; g < open.length; g++) {
      var Rg = open[g], cards = '';
      for (var j = 0; j < Rg.sections.length; j++) {
        var sid = Rg.sections[j]; if (shown[sid]) continue; shown[sid] = 1;
        var st = cardState(sid, Rg), info = (st.indexOf('na') === 0) ? {title: PC_SECTION_BY_ID[sid].label, teaser: '', deg: ''} : cardInfo(sid);
        var na = {'na-time': 'Needs a birth time', 'na-chiron': 'Chiron not available for this chart', 'na-partner': 'Choose "Compare with" above'}[st];
        cards += '<div class="pc-bcard is-' + (na ? 'na' : st) + '" style="--rc:' + Rg.color + '">' +
          (na ? '' : '<button class="pc-bcheck" data-act="sec" data-v="' + sid + '" title="' + (st === 'in' ? 'Remove from reading' : 'Add to reading') + '">' + (st === 'in' ? '✓' : '+') + '</button>') +
          '<div class="pc-bcard-k">' + esc(PC_SECTION_BY_ID[sid].label) + '</div><div class="pc-bcard-t">' + esc(info.title) + '</div>' + (info.deg ? '<div class="pc-bcard-d">' + esc(info.deg) + '</div>' : '') +
          (na ? '<p class="pc-muted">' + na + '</p>' : '<p>' + esc(info.teaser) + '</p><button class="pc-link" data-act="readcard" data-v="' + sid + '">Read card</button>') + '</div>';
      }
      board += '<div class="pc-bgroup"><div class="pc-bhead" style="--rc:' + Rg.color + '"><span class="pc-rchip-i">' + Rg.icon + '</span><div><h3>' + esc(Rg.name) + '</h3><small>' + esc(Rg.tagline) + '</small></div><span class="pc-spacer"></span><button class="pc-link" data-act="report" data-v="' + Rg.id + '">Remove</button></div><div class="pc-bcards">' + cards + '</div></div>';
    }
    var extraIds = (b.extra || []).filter(function(x){ return !shown[x] && PC_SECTION_BY_ID[x] && x !== 'intro' && x !== 'closing'; });
    if (extraIds.length) {
      var ec = ''; extraIds.forEach(function(x){ var inf = cardInfo(x); ec += '<div class="pc-bcard is-in" style="--rc:#6b5f73"><button class="pc-bcheck" data-act="sec" data-v="' + x + '">✓</button><div class="pc-bcard-k">' + esc(PC_SECTION_BY_ID[x].label) + '</div><div class="pc-bcard-t">' + esc(inf.title) + '</div><p>' + esc(inf.teaser) + '</p><button class="pc-link" data-act="readcard" data-v="' + x + '">Read card</button></div>'; });
      board += '<div class="pc-bgroup"><div class="pc-bhead" style="--rc:#6b5f73"><span class="pc-rchip-i">+</span><div><h3>Additional cards</h3><small>Cards you added one by one.</small></div></div><div class="pc-bcards">' + ec + '</div></div>';
    }
    var finish = '<div class="pc-card"><h3>Finishing touches</h3>' +
      (known ? '<div class="pc-optrow"><span>Houses</span><select class="pc-in" style="width:auto" id="pc-b-house"><option value="E"' + (b.house === 'E' ? ' selected' : '') + '>Equal</option><option value="P"' + (b.house === 'P' ? ' selected' : '') + '>Placidus</option><option value="W"' + (b.house === 'W' ? ' selected' : '') + '>Whole Sign</option></select></div>' : '<p class="pc-note">No birth time: rising, houses and the Solar Return are left out, and the year ahead uses a solar profection.</p>') +
      '<label class="pc-check"><input type="checkbox" data-act="welcome"' + (b.welcome ? ' checked' : '') + '> Include welcome page</label>' +
      '<label class="pc-check"><input type="checkbox" data-act="closingtog"' + (b.closing ? ' checked' : '') + '> Include my closing note</label>' +
      (b.closing ? '<textarea class="pc-in" id="pc-b-note" rows="4" placeholder="A personal message to your client">' + esc(b.note) + '</textarea>' : '') +
      '<details style="margin-top:12px"><summary style="cursor:pointer;font-weight:700">Add any single card</summary>' + allCardsPicker() + '</details></div>';
    return '<div class="pc-screen">' + msgHTML() + head +
      '<div class="pc-card"><h3 style="margin-bottom:8px">Choose readings</h3><div class="pc-rchips">' + chips + '</div>' + (th ? '<div style="margin-top:12px"><small class="pc-muted">Themes found in this chart (tap to read and add):</small><div class="pc-themes">' + th + '</div></div>' : '') + '</div>' +
      bar + '<div class="pc-board">' + board + '</div>' + finish + '</div>';
  }
  function allCardsPicker(){
    var inIds = bundleIds(), ctx = ctxFor(), out = '';
    for (var g = 0; g < PC_SECTIONS.length; g++) {
      var grp = PC_SECTIONS[g], btns = '';
      for (var j = 0; j < grp.items.length; j++) {
        var it = grp.items[j]; if (it[0] === 'intro' || it[0] === 'closing') continue;
        var off = (it[3] && !ctx.chart.timeKnown) || (it[0] === 'chiron' && !ctx.chart.bodies.Chiron) || (grp.group === 'Synastry' && !ctx.partner);
        btns += '<button class="pc-sec-btn' + (inIds.indexOf(it[0]) >= 0 ? ' is-in' : '') + (off ? ' is-off' : '') + '" data-act="sec" data-v="' + it[0] + '"' + (off ? ' disabled' : '') + '>' + esc(it[1]) + '</button>';
      }
      out += '<div class="pc-group"><h4>' + esc(grp.group) + '</h4><div class="pc-pick">' + btns + '</div></div>';
    }
    return out;
  }
  function renderPreview(){}
  function openModal(inner, wide){
    var d = document.createElement('div'); d.className = 'pc-pop';
    d.innerHTML = '<div class="pc-pop-box' + (wide ? ' pc-pop-wide' : '') + '">' + inner + '</div>';
    root.appendChild(d); return d;
  }
  function readCard(id){
    var info = cardInfo(id), st = cardState(id, null);
    var box = '<div class="pc-row" style="margin-bottom:10px"><b class="pc-muted">' + esc(PC_SECTION_BY_ID[id].label) + '</b><span class="pc-spacer"></span><button class="pc-btn ' + (st === 'in' ? 'ghost' : 'plum') + ' small" data-act="sec" data-v="' + id + '" data-close="1">' + (st === 'in' ? 'Remove from reading' : '+ Add to reading') + '</button><button class="pc-btn ghost small" data-act="popclose">Close</button></div>' +
      '<div class="pcr pc-design pc-d-' + (S.build.design || 'classic') + '" style="--brand:' + esc(S.profile.brand_color || '#7b4fc9') + '"><section class="pc-r-sec"><header><h3>' + esc(info.title) + '</h3>' + (info.deg ? '<span class="pc-deg">' + esc(info.deg) + '</span>' : '') + '</header>' + info.html + '</section></div>';
    openModal(box, true);
  }
  function previewDoc(){
    var cx = ctxFor(); cx.showSource = !!S.ownPaths;
    var r = pcRenderBundle(planOf(S.build), cx); cx.showSource = false;
    var box = '<div class="pc-row" style="margin-bottom:10px"><b>' + esc(autoTitle()) + '</b><span class="pc-spacer"></span><button class="pc-btn alt small" data-act="go" data-v="send" data-close="1">Deliver</button><button class="pc-btn ghost small" data-act="popclose">Close</button></div>' +
      '<div class="pcr pc-design pc-d-' + (S.build.design || 'classic') + ' pc-docprev" style="--brand:' + esc(S.profile.brand_color || '#7b4fc9') + '">' + (r.toc ? '<div class="pc-toc-box"><b>Inside this reading</b>' + r.toc + '</div>' : '') + r.html + '</div>';
    openModal(box, true);
  }
  function themePopup(id){
    var ctx = ctxFor(), t = null; for (var i = 0; i < ctx.themes.length; i++) if (ctx.themes[i].id === id) t = ctx.themes[i];
    if (!t) return;
    var inR = S.build.themes.indexOf(id) >= 0;
    var d = document.createElement('div'); d.className = 'pc-pop';
    d.innerHTML = '<div class="pc-pop-box pcr"><h3>\u2726\uFE0E ' + esc(t.title) + '</h3>' + pcThemeHTML(pcWithOpts(ctx, {short: false, archetype: S.build.archetype}), t) + '<div class="pc-row" style="margin-top:14px"><button class="pc-btn plum" data-act="themeadd" data-v="' + id + '">' + (inR ? 'Remove from reading' : '+ Add to reading') + '</button><button class="pc-btn ghost" data-act="popclose">Close</button></div></div>';
    root.appendChild(d);
  }
  function captureBuildInputs(){
    if (!S.build) return;
    var n = $('#pc-b-note'), t = $('#pc-b-title');
    if (n) S.build.note = n.value;
    if (t && t.value !== autoTitle()) S.build.title = t.value;
  }
  function saveReport(){
    captureBuildInputs();
    var b = S.build; S.busy = true; render();
    var plan = planOf(b); plan.house = b.house;
    S.store.saveReport({id: b.id, client_id: S.cur.id, title: autoTitle(), sections: bundleIds(), themes: b.themes, short_version: b.length !== 'full', archetype_mode: b.archetype, closing_note: b.note, plan: plan})
      .then(function(r){ b.id = r.id; S.busy = false; return S.store.reports(S.cur.id); }).then(function(list){ S.reports = list; loadHome(); render(); toast('Saved to ' + S.cur.name + '\'s file'); }).catch(fail);
  }
  function openReport(id){
    var r = null; for (var i = 0; i < S.reports.length; i++) if (S.reports[i].id === id) r = S.reports[i];
    if (!r) return;
    var p = r.plan || {reports: [], length: r.short_version ? 'concise' : 'full', archetype: !!r.archetype_mode, welcome: (r.sections || []).indexOf('intro') >= 0, closing: (r.sections || []).indexOf('closing') >= 0, extra: (r.sections || []).filter(function(x){ return x !== 'intro' && x !== 'closing'; }), removed: []};
    S.build = {id: r.id, partnerId: p.partnerId || '', design: p.design || S.profile.design || 'classic', reports: p.reports || [], length: p.length || 'concise', archetype: !!p.archetype, welcome: p.welcome !== false, closing: p.closing !== false, extra: p.extra || [], removed: p.removed || [], themes: (r.themes || []).slice(0), house: p.house || S.cur.house || 'E', title: r.title, note: r.closing_note || ''};
    S.step = 'build'; render();
  }
  function sendView(){
    var b = S.build, c = S.cur, r = pcRenderBundle(planOf(b), ctxFor());
    var mail = 'mailto:' + encodeURIComponent(c.email || '') + '?subject=' + encodeURIComponent('Your reading: ' + autoTitle()) + '&body=' + encodeURIComponent('Hi ' + c.name.split(' ')[0] + ',\n\nYour reading is attached as a PDF. Take your time with it, and reach out with any questions.\n\n' + S.profile.display_name + (S.profile.business_name ? '\n' + S.profile.business_name : ''));
    return '<div class="pc-screen">' + msgHTML() + '<div class="pc-two"><div class="pc-card">' + coverHTML({title: autoTitle(), client: c.name, line: birthLine(c, true), toc: r.toc}, true) + '</div><div>' +
      '<div class="pc-card"><h3>' + esc(autoTitle()) + '</h3><p class="pc-muted">' + r.count + ' part' + (r.count === 1 ? '' : 's') + ' \u00B7 ' + PC_LENGTHS[b.length] + (b.archetype ? ' \u00B7 archetype voice' : '') + '</p></div>' +
      '<div class="pc-card pc-stepcard"><span class="pc-stepnum">1</span><div><h3>Download the PDF</h3><p>Click below, then choose <b>Save as PDF</b> as the printer.</p><button class="pc-btn big" data-act="pdf">Download PDF</button></div></div>' +
      '<div class="pc-card pc-stepcard"><span class="pc-stepnum alt">2</span><div><h3>Email your client</h3><p>Opens a ready-to-send email' + (c.email ? ' to ' + esc(c.email) : '') + '. Attach the PDF you saved.</p><a class="pc-btn alt big" href="' + mail + '">Open email</a></div></div>' +
      '<div class="pc-row"><button class="pc-btn ghost" data-act="go" data-v="build">\u2190 Back to the library</button>' + (b.id ? '' : '<button class="pc-btn" data-act="saverep">Save to client file</button>') + '</div></div></div></div>';
  }
  function printPDF(){
    var c = S.cur, b = S.build, r = pcRenderBundle(planOf(b), ctxFor(), true), col = S.profile.brand_color || '#7b4fc9';
    var css = ''; var styleEl = document.getElementById('pc-style'); if (styleEl) css = styleEl.textContent;
    var footText = (c.name + ' \u00B7 Powered by Adventures In Astrology \u00B7 ' + PC_AIA.url + ' \u00B7 page ').replace(/["\\]/g, '') + '" counter(page) "';
    var place = c.placeLabel && c.placeLabel !== 'Custom place' ? ' \u00B7 ' + esc(c.placeLabel) : '';
    var cover = coverHTML({title: autoTitle(), client: c.name, line: birthLine(c, true) + place, toc: r.toc, flag: !c.timeKnown ? '<p><span class="pc-flag pc-flag-time">Made without a birth time</span></p>' : ''}, false);
    var doc = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + esc(autoTitle()) + ' - ' + esc(c.name) + '</title><style>' + css +
      '@page{size:letter;margin:.7in .75in .85in;@bottom-center{content:"' + footText + '";font-family:Space Mono,monospace;font-size:7.5pt;color:#9f93ab}}body{margin:0;font-family:Lora,Georgia,serif;color:#2b2135;font-size:11.5pt;line-height:1.55;--brand:' + col + ';--cream:#fffaf1;--ink:#2b2135;--soft:#6b5f73;--line:#eadfcc;--teal:#0f9e94;--teal-l:#d9f4f1;--terra:#e0663f;--terra-l:#fde6dc;--gold:#e8a923;--gold-l:#fff1cc;--plum:#7b4fc9;--plum-l:#efe6ff;-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
      'h1,h2,h3,h4{font-family:Fraunces,Georgia,serif}.pc-chapter{page-break-before:always}.pc-ch-first{page-break-before:auto!important;break-before:auto!important}' +
      '.pc-r-sec{page-break-inside:auto}.pc-r-sec header{page-break-after:avoid}.pc-r-field,.pc-r-arch,.pc-tcard,.pc-center,.pc-cast-card,.pc-big3,.pc-r-asp,.pc-num,.pc-path{page-break-inside:avoid}.pc-foot{text-align:center;color:var(--soft);font-size:9pt;margin-top:24px}' +
      '.pc-cover{height:9.3in;min-height:0;box-sizing:border-box;overflow:hidden;page-break-after:always;break-after:page}' +
      '</style></head><body class="pcr pc-design pc-d-' + (b.design || 'classic') + '">' + cover + r.html + '<p class="pc-foot">Prepared by ' + esc(S.profile.display_name) + (S.profile.business_name ? ', ' + esc(S.profile.business_name) : '') + '. This reading is for reflection and personal growth. It is not medical, legal or financial advice.</p></body></html>';
    if (CFG.demo) window.__pcLastDoc = doc;
    var f = document.createElement('iframe');
    f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    document.body.appendChild(f);
    var w = f.contentWindow; w.document.open(); w.document.write(doc); w.document.close();
    setTimeout(function(){ try { w.focus(); w.print(); } catch (e) { toast('Could not open the print window'); } setTimeout(function(){ if (f.parentNode) f.parentNode.removeChild(f); }, 60000); }, 900);
  }

  /* ---------- events ---------- */
  root.addEventListener('click', function(e){
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el || !root.contains(el)) { if (e.target.classList && e.target.classList.contains('pc-pop')) e.target.parentNode.removeChild(e.target); return; }
    var a = el.getAttribute('data-act'), v = el.getAttribute('data-v');
    if (el.getAttribute('data-close')) { var mp = root.querySelector('.pc-pop'); if (mp) mp.parentNode.removeChild(mp); }
    if (a === 'welcome' || a === 'closingtog') { captureBuildInputs(); if (a === 'welcome') S.build.welcome = el.checked; else S.build.closing = el.checked; render(); return; }
    if (a === 'house' || a === 'toggleunk') { if (a === 'toggleunk') $('#pc-c-timewrap').className = el.checked ? 'pc-hide' : ''; return; }
    if (el.tagName === 'BUTTON' || el.tagName === 'A') { if (a !== 'pdf' && el.tagName === 'BUTTON') e.preventDefault(); }
    switch (a) {
      case 'auth': doAuth(); break;
      case 'authmode': S.authMode = v; S.msg = null; render(); break;
      case 'recheck': afterLogin(S.user); break;
      case 'lock': lock('Signed out. Client files are locked.'); break;
      case 'font': S.scale = Math.max(0.85, Math.min(1.4, S.scale + (+v) * 0.08)); render(); break;
      case 'go':
        if (S.lib && !libCount() && v !== 'settings') { S.step = 'settings'; S.msg = {err: 'Load your interpretation library first (one-time step below). Then all the tabs open.'}; render(); return; }
        captureBuildInputs(); S.msg = null;
        if (v === 'build' && S.cur && !S.build) newBuild();
        S.step = v;
        if (v === 'home' || v === 'reports') { loadHome().then(render); } else render();
        break;
      case 'savesettings':
        S.profile.display_name = $('#pc-s-name').value.trim() || S.profile.display_name; S.profile.business_name = $('#pc-s-biz').value.trim(); S.profile.tagline = $('#pc-s-tag').value.trim(); S.profile.closing_note = $('#pc-s-note').value;
        S.store.saveProfile(S.profile).then(function(){ S.msg = {ok: 'Settings saved.'}; render(); }).catch(fail); break;
      case 'pick': S._animFor = null; S.ctab = 'overview'; openClient(v); break;
      case 'newclient': S.step = 'clients'; S.editing = {house: 'E'}; S.formErr = null; S.cur = null; render(); var n = $('#pc-c-name'); if (n) n.focus(); break;
      case 'editclient': S.editing = JSON.parse(JSON.stringify(S.cur)); S.editing._birthKey = [S.cur.y, S.cur.mo, S.cur.d, S.cur.h, S.cur.mi, S.cur.lat, S.cur.lon].join('|'); S.formErr = null; render(); break;
      case 'cancelclient': S.editing = null; S.formErr = null; render(); break;
      case 'saveclient': saveClient(); break;
      case 'delclient':
        if (S.confirmDel !== S.editing.id) { S.confirmDel = S.editing.id; el.textContent = 'Tap again to delete forever'; el.style.background = '#e0663f'; el.style.color = '#fff'; return; }
        S.store.deleteClient(S.editing.id).then(function(){ S.editing = null; S.cur = null; S.confirmDel = null; return S.store.clients(); }).then(function(cl){ S.clients = cl; render(); toast('Client deleted'); }).catch(fail); break;
      case 'geopick':
        var g = S._geo[+v]; S.editing.lat = g.latitude; S.editing.lon = g.longitude; S.editing.tz = g.timezone; S.editing.placeLabel = [g.name, g.admin1, g.country].filter(Boolean).join(', '); S.editing._manual = false;
        $('#pc-c-place').value = S.editing.placeLabel; $('#pc-c-sugg').innerHTML = ''; $('#pc-c-picked').innerHTML = pickedHTML(S.editing);
        $('#pc-c-lat').value = g.latitude; $('#pc-c-lon').value = g.longitude; $('#pc-c-tz').value = g.timezone; break;
      case 'newsess': S.ctab = 'sessions'; S.sessEdit = {client_id: S.cur.id, session_date: today(), topic: '', notes: ''}; render(); break;
      case 'editsess': for (var i = 0; i < S.sessions.length; i++) if (S.sessions[i].id === v) S.sessEdit = JSON.parse(JSON.stringify(S.sessions[i])); render(); break;
      case 'cancelsess': S.sessEdit = null; render(); break;
      case 'savesess':
        var x = S.sessEdit; x.session_date = $('#pc-x-date').value || today(); x.topic = $('#pc-x-topic').value; x.notes = $('#pc-x-notes').value;
        S.store.saveSession(x).then(function(){ S.sessEdit = null; return S.store.sessions(S.cur.id); }).then(function(s){ S.sessions = s; render(); toast('Session saved'); }).catch(fail); break;
      case 'delsess':
        if (S.confirmDel !== v) { S.confirmDel = v; el.textContent = 'Tap again to delete'; return; }
        S.store.deleteSession(v).then(function(){ S.sessEdit = null; S.confirmDel = null; return S.store.sessions(S.cur.id); }).then(function(s){ S.sessions = s; render(); }).catch(fail); break;
      case 'openrep': openReport(v); break;
      case 'ctab': S.ctab = v; S.sessEdit = null; render(); break;
      case 'opensessclient': S.step = 'clients'; S.ctab = 'sessions'; openClient(v); break;
      case 'openany': var cid = el.getAttribute('data-c'); S.step = 'clients'; openClient(cid, function(){ openReport(v); }); break;
      case 'delrep':
        if (S.confirmDel !== v) { S.confirmDel = v; el.textContent = 'Tap again to delete'; return; }
        S.store.deleteReport(v).then(function(){ S.confirmDel = null; return S.store.reports(S.cur.id); }).then(function(r){ S.reports = r; render(); }).catch(fail); break;
      case 'sec':
        captureBuildInputs(); var bi = bundleIds(), bx = S.build;
        if (bi.indexOf(v) >= 0) { var ei = bx.extra.indexOf(v); if (ei >= 0) bx.extra.splice(ei, 1); else bx.removed.push(v); }
        else { var ri = bx.removed.indexOf(v); if (ri >= 0) bx.removed.splice(ri, 1); else bx.extra.push(v); }
        render(); break;
      case 'report':
        captureBuildInputs(); var rl = S.build.reports, rk = rl.indexOf(v); if (rk >= 0) rl.splice(rk, 1); else rl.push(v);
        if (rl.length > 1 && S.build.length === 'full' && !S._lenTouched) S.build.length = 'concise';
        render(); break;
      case 'libsrc': S.profile.library_source = v; S.store.saveProfile(S.profile).then(function(){ applyLibrary(); S.msg = {ok: v === 'own' ? 'Using your own library where you have one, and AIA text for the rest.' : 'Using the Adventures In Astrology library.'}; render(); }).catch(fail); return;
      case 'clearown': S.store.clearOwnLibrary().then(function(){ S.ownLib = {}; S.ownCheck = null; applyLibrary(); S.msg = {ok: 'Your library was removed. Reports use the AIA text.'}; render(); }).catch(fail); break;
      case 'design': captureBuildInputs(); S.build.design = v; render(); break;
      case 'defdesign': S.profile.design = v; S.profile.display_name = $('#pc-s-name').value.trim() || S.profile.display_name; S.profile.business_name = $('#pc-s-biz').value.trim(); S.profile.tagline = $('#pc-s-tag').value.trim(); S.profile.closing_note = $('#pc-s-note').value; render(); break;
      case 'length': captureBuildInputs(); S.build.length = v; S._lenTouched = true; render(); break;
      case 'welcome': captureBuildInputs(); S.build.welcome = el.checked; render(); return;
      case 'closingtog': captureBuildInputs(); S.build.closing = el.checked; render(); return;
      case 'brandcolor': S.profile.brand_color = v; S.profile.display_name = $('#pc-s-name').value.trim() || S.profile.display_name; S.profile.business_name = $('#pc-s-biz').value.trim(); S.profile.tagline = $('#pc-s-tag').value.trim(); S.profile.closing_note = $('#pc-s-note').value; render(); break;
      case 'arch': captureBuildInputs(); S.build.archetype = v === '1'; render(); break;
      case 'theme': captureBuildInputs(); themePopup(v); break;
      case 'themeadd':
        var th = S.build.themes, ti = th.indexOf(v); if (ti >= 0) th.splice(ti, 1); else th.push(v);
        if (th.length && bundleIds().indexOf('themes') < 0) { var rmi = S.build.removed.indexOf('themes'); if (rmi >= 0) S.build.removed.splice(rmi, 1); else S.build.extra.push('themes'); }
        render(); toast(ti >= 0 ? 'Theme removed' : 'Theme added to the report'); break;
      case 'popclose': var p = root.querySelector('.pc-pop'); if (p) p.parentNode.removeChild(p); break;
      case 'readcard': captureBuildInputs(); readCard(v); break;
      case 'previewdoc': captureBuildInputs(); previewDoc(); break;
      case 'saverep': saveReport(); break;
      case 'pdf': printPDF(); break;
      case 'setpw':
        var npw = $('#pc-r-pw').value; if (npw.length < 8) return fail('Please use at least 8 characters.');
        S.store.sb.auth.updateUser({password: npw}).then(function(r){ if (r.error) throw r.error; S.recovery = false; S.msg = {ok: 'Password updated.'}; return S.store.session(); }).then(function(u){ if (u) afterLogin(u); else render(); }).catch(fail); break;
    }
  });
  root.addEventListener('input', function(e){
    if (e.target.id === 'pc-c-place' && S.editing) { S.editing.lat = null; S.editing.placeLabel = ''; $('#pc-c-picked').innerHTML = ''; geoSearch(e.target.value); }
    if (e.target.id === 'pc-rsearch') { S.rsearch = e.target.value; var rp = e.target.selectionStart; render(); var rs = $('#pc-rsearch'); if (rs) { rs.focus(); rs.setSelectionRange(rp, rp); } }
    if (e.target.id === 'pc-search') { S.search = e.target.value; var pos = e.target.selectionStart; render(); var s = $('#pc-search'); if (s) { s.focus(); s.setSelectionRange(pos, pos); } }
  });
  root.addEventListener('change', function(e){
    if (e.target.id === 'pc-lib-file' && e.target.files && e.target.files[0]) loadLibraryFile(e.target.files[0]);
    if (e.target.id === 'pc-own-file' && e.target.files && e.target.files[0]) loadOwnLibraryFile(e.target.files[0]);
    if (e.target.id === 'pc-b-house') { captureBuildInputs(); S.build.house = e.target.value; render(); }
    if (e.target.id === 'pc-b-partner') { captureBuildInputs(); S.build.partnerId = e.target.value; if (e.target.value && S.build.reports.indexOf('synastry') < 0) S.build.reports.push('synastry'); render(); }
  });
  root.addEventListener('keydown', function(e){ if (e.key === 'Enter' && e.target.id && e.target.id.indexOf('pc-a-') === 0) doAuth(); });
  boot();
})();
