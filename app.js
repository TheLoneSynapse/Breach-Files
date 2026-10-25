/* The Breach Files — interaction layer */

(function () {
  'use strict';

  // Merge the three datasets into one timeline.
  const ALL = INCIDENTS.concat(AI_INCIDENTS, P2P_INCIDENTS)
    .sort((a, b) => a.year - b.year);

  const ALL_PEOPLE = PEOPLE.concat(MORE_PEOPLE);

  const byId = {};
  ALL.forEach(i => { byId[i.id] = i; });

  const state = {
    cats: new Set(),
    q: '',
    sort: 'asc',
    hat: 'all'
  };

  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Only ever emit http(s) URLs: a stray javascript: (or data:) value in a
  // href/src would otherwise be able to run script when clicked or rendered.
  const safeUrl = u => {
    try {
      const x = new URL(String(u), location.href);
      return (x.protocol === 'https:' || x.protocol === 'http:') ? x.href : '#';
    } catch (e) { return '#'; }
  };

  // Attach an image error fallback without inline handlers (they are blocked by the CSP).
  function watchImg(img, onErr) {
    if (!img) return;
    let done = false;
    const go = () => { if (done) return; done = true; onErr(img); };
    img.addEventListener('error', go, { once: true });
    if (img.complete && img.naturalWidth === 0) go();
  }

  const initials = name => name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

  // First sentence of a field, trimmed so cards never end with a double period.
  const first = s => s.split('. ')[0].replace(/\.\s*$/, '').trim();

  /* ---------------- filter chips ---------------- */
  function renderChips() {
    const box = $('#chips');
    box.innerHTML = Object.entries(CATEGORIES).map(([key, c]) =>
      `<button class="chip" data-cat="${key}" style="--chip:${c.color}"><span class="swatch" style="background:${c.color}"></span>${esc(c.label)}</button>`
    ).join('');
    box.addEventListener('click', e => {
      const b = e.target.closest('.chip');
      if (!b) return;
      const k = b.dataset.cat;
      state.cats.has(k) ? state.cats.delete(k) : state.cats.add(k);
      b.classList.toggle('on');
      render();
    });
  }

  /* ---------------- filtering ---------------- */
  function matches(i) {
    if (state.cats.size && !state.cats.has(i.cat)) return false;
    if (!state.q) return true;
    const hay = [i.title, i.actor, i.motive, i.flaw, i.impact, i.fix, i.lesson, i.date,
      String(i.year), CATEGORIES[i.cat].label, i.id].join(' ').toLowerCase();
    return state.q.split(/\s+/).every(t => hay.includes(t));
  }

  function current() {
    const list = ALL.filter(matches);
    list.sort((a, b) => state.sort === 'asc' ? a.year - b.year : b.year - a.year);
    return list;
  }

  /* ---------------- timeline ---------------- */
  function cardHTML(i) {
    const c = CATEGORIES[i.cat];
    const sev = [1, 2, 3, 4, 5].map(n => `<i class="${n <= i.sev ? 'on' : ''}"></i>`).join('');
    return `
      <div class="tl-item" style="--c:${c.color}">
        <div class="tl-year"><b>${i.year}</b>${esc(i.date)}</div>
        <span class="tl-node"></span>
        <article class="card" data-id="${i.id}" tabindex="0" role="button" aria-label="Open ${esc(i.title)}">
          <div class="card-top">
            <span class="tag">${esc(c.label)}</span>
            <span class="tag-plain">severity</span>
            <span class="sev">${sev}</span>
          </div>
          <h3>${esc(i.title)}</h3>
          <p class="actor">${esc(i.actor)}</p>
          <p class="teaser">${esc(first(i.flaw))}.</p>
          <div class="card-more"><span>OPEN FULL FILE &middot; who / why / flaw / fix</span><span>&rarr;</span></div>
        </article>
      </div>`;
  }

  function renderTimeline() {
    const list = current();
    const box = $('#timelineList');
    box.innerHTML = list.map(cardHTML).join('');
    $('#emptyState').hidden = list.length > 0;
    $('#resultCount').textContent = list.length + ' / ' + ALL.length + ' cases';
    return list;
  }

  function renderMini(list, target) {
    $(target).innerHTML = list.map(i => {
      const c = CATEGORIES[i.cat];
      return `<article class="mini-card" data-id="${i.id}" style="--c:${c.color}" tabindex="0" role="button">
        <span class="mc-year">${i.year} &middot; ${esc(c.label)}</span>
        <h4>${esc(i.title)}</h4>
        <p>${esc(first(i.flaw))}.</p>
      </article>`;
    }).join('');
  }

  /* ---------------- gallery ---------------- */
  function renderHatChips() {
    const box = $('#hatChips');
    if (!box) return;
    const order = [['all', 'All hats'], ['white', 'White hat'], ['grey', 'Grey hat'], ['black', 'Black hat']];
    box.innerHTML = order.map(([k, label]) => {
      const n = k === 'all' ? ALL_PEOPLE.length : ALL_PEOPLE.filter(p => p.hat === k).length;
      return `<button class="hat-chip ${k} ${state.hat === k ? 'on' : ''}" data-hat="${k}">` +
             `<span class="hat-dot"></span>${label}<b>${n}</b></button>`;
    }).join('');
    box.addEventListener('click', e => {
      const b = e.target.closest('.hat-chip');
      if (!b) return;
      state.hat = b.dataset.hat;
      box.querySelectorAll('.hat-chip').forEach(x => x.classList.toggle('on', x === b));
      renderPeople();
    });
  }

  function renderPeople() {
    const list = ALL_PEOPLE.filter(p => state.hat === 'all' || p.hat === state.hat);
    const box = $('#peopleGrid');
    box.innerHTML = list.map(p => {
      const fb = esc(p.glyph || initials(p.name));
      const photo = p.img
        ? `<img src="https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p.img).replace(/%2F/g, '/')}?width=420"
                 alt="${esc(p.name)}" loading="lazy" data-fallback="${fb}">`
        : `<span class="glyph">${fb}</span>`;
      const hasVid = typeof LEGAL !== 'undefined' && LEGAL[p.id] && LEGAL[p.id].video;
      return `<article class="person" data-person="${p.id}" tabindex="0" role="button">
        <div class="person-img ${p.img ? '' : 'noimg' + (p.theme ? ' t-' + p.theme : '')}">
          <span class="role-badge">${esc(p.role.split('—')[0].trim())}</span>
          <span class="hat-badge ${p.hat}">${HAT_LABELS[p.hat] || 'Grey hat'}</span>
          ${photo}
          <div class="person-meta"><h4>${esc(p.name)}</h4><p>${esc(p.life)}</p></div>
        </div>
        <div class="person-body">
          <p>${esc(first(p.bio))}.</p>
          ${hasVid ? '<span class="person-flag vid">&#9654; video &middot; laws &middot; sentence</span>' : ''}
          <span class="person-flag ${p.img ? '' : 'no'}">${p.img ? '&#9634; licensed portrait' : '&#9888; symbol stands in · no free portrait'}</span>
        </div>
      </article>`;
    }).join('');
    box.querySelectorAll('img[data-fallback]').forEach(img => watchImg(img, () => {
      const holder = img.parentNode;
      if (!holder) return;
      holder.classList.add('noimg');
      const s = document.createElement('span');
      s.className = 'glyph';
      s.textContent = img.dataset.fallback || '';
      holder.appendChild(s);
      img.remove();
    }));
    const c = $('#peopleCount');
    if (c) c.textContent = list.length + ' / ' + ALL_PEOPLE.length + ' profiles';
  }

  /* ---------------- games ---------------- */
  function renderGames() {
    $('#milestones').innerHTML = GAME_MILESTONES.map(m => `
      <div class="ms">
        <div class="ms-year">${esc(m.year)}</div>
        <div class="ms-card">
          <span class="ms-tag">${esc(m.tag)}</span>
          <h4>${esc(m.title)}</h4>
          <p>${esc(m.body)}</p>
        </div>
      </div>`).join('');

    $('#glossary').innerHTML = GLOSSARY.map(g =>
      `<dl class="term"><dt>${esc(g.term)}</dt><dd>${esc(g.def)}</dd></dl>`).join('');
  }

  /* ---------------- modals ---------------- */
  function openIncident(id) {
    const i = byId[id];
    if (!i) return;
    const c = CATEGORIES[i.cat];
    const sev = [1, 2, 3, 4, 5].map(n => `<i class="${n <= i.sev ? 'on' : ''}"></i>`).join('');

    const imgSrc = i.img ? safeUrl(i.img.u) : '#';
    const img = (i.img && imgSrc !== '#') ? `<figure class="m-img">
        <img src="${imgSrc}" alt="${esc(i.img.cap)}" loading="lazy">
        <figcaption>${esc(i.img.cap)} &middot; ${esc(i.img.credit)} &middot;
          <a href="${safeUrl(i.img.src)}" target="_blank" rel="noopener">source file</a></figcaption>
      </figure>` : '';

    $('#modalBody').innerHTML = `
      <div class="m-head" style="--c:${c.color}">
        <span class="m-cat">${esc(c.label)}</span>
        <h2 id="modalTitle">${esc(i.title)}</h2>
        <div class="m-meta">
          <span><b>When</b> ${esc(i.date)}</span>
          <span><b>Severity</b> <span class="sev" style="--c:${c.color}">${sev}</span></span>
        </div>
      </div>
      ${img}
      <div class="m-block" style="--c:${c.color}"><h5>Who did it</h5><p>${esc(i.actor)}</p></div>
      <div class="m-block" style="--c:${c.color}"><h5>Why they did it</h5><p>${esc(i.motive)}</p></div>
      <div class="m-block" style="--c:${c.color}"><h5>The flaw that let them in</h5><p>${esc(i.flaw)}</p></div>
      <div class="m-block" style="--c:${c.color}"><h5>What it cost</h5><p>${esc(i.impact)}</p></div>
      <div class="m-block" style="--c:${c.color}"><h5>What was done about it</h5><p>${esc(i.fix)}</p></div>
      <div class="m-lesson"><h5>The takeaway</h5><p>${esc(i.lesson)}</p></div>
      <div class="m-src">${(i.src || []).map(s => `<a href="${safeUrl(s.u)}" target="_blank" rel="noopener">source: ${esc(s.t)}</a>`).join('')}</div>`;

    show('#modal');
  }

  function openPerson(id) {
    const p = ALL_PEOPLE.find(x => x.id === id);
    if (!p) return;
    const photo = p.img
      ? `<img src="https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p.img).replace(/%2F/g, '/')}?width=520" alt="${esc(p.name)}" loading="lazy" data-modal-img>`
      : `<span class="glyph">${esc(p.glyph || initials(p.name))}</span>`;

    const psrc = safeUrl(p.src);
    const plabel = psrc === '#' ? String(p.src).replace(/^https?:\/\//, '') : psrc.replace(/^https?:\/\//, '');

    const leg = (typeof LEGAL !== 'undefined' && LEGAL[p.id]) || null;
    const vid = leg && leg.video ? leg.video : null;
    const vidHTML = vid ? `
      <div class="m-block m-video" style="--c:#ff5c6c"><h5>Video &mdash; watch it for yourself</h5>
        <div class="vid" data-vid="${encodeURIComponent(vid.id)}" data-title="${esc(vid.title)}" role="button" tabindex="0" aria-label="Play video: ${esc(vid.title)}">
          <span class="vid-thumb">
            <img src="https://i.ytimg.com/vi/${encodeURIComponent(vid.id)}/hqdefault.jpg" alt="" loading="lazy">
            <span class="vid-play" aria-hidden="true">&#9654;</span>
          </span>
          <span class="vid-cap"><b>${esc(vid.title)}</b><i>${esc(vid.by)} &middot; YouTube</i></span>
        </div>
      </div>` : '';

    const lawsHTML = leg && leg.laws
      ? `<div class="m-block" style="--c:#ff5c6c"><h5>Laws violated</h5><p>${esc(leg.laws)}</p></div>`
      : '';
    const punishHTML = leg && leg.punishment
      ? `<div class="m-block" style="--c:#ff9d45"><h5>Charges &amp; punishment</h5><p>${esc(leg.punishment)}</p></div>`
      : '';

    $('#personBody').innerHTML = `
      <div class="p-top">
        <div class="p-photo ${p.img ? '' : 'noimg ' + (p.theme ? 't-' + p.theme : '')}">${photo}</div>
        <div class="p-info">
          <span class="m-cat" style="--c:#3ddc97">${esc(p.role)}</span>
        <span class="hat-badge big ${p.hat}">${HAT_LABELS[p.hat] || 'Grey hat'}</span>
          <h2 id="personTitle">${esc(p.name)}</h2>
          ${p.alias ? `<p class="p-alias">"${esc(p.alias)}"</p>` : ''}
          <div class="p-facts"><span><b>Active</b> ${esc(p.life)}</span></div>
          ${p.credit ? `<p class="p-facts" style="margin-top:10px"><b>Image</b> ${esc(p.credit)}</p>` : '<p class="p-facts" style="margin-top:10px;color:#ffd166"><b>Image</b> none available under a free licence</p>'}
        </div>
      </div>
      ${vidHTML}
      <div class="m-block" style="--c:#3ddc97"><h5>The story</h5><p>${esc(p.bio)}</p></div>
      <div class="p-fields">
        <div class="m-block" style="--c:#5b8cff"><h5>Notable works</h5><p>${esc(p.known)}</p></div>
        <div class="m-block" style="--c:#ffd166"><h5>Method</h5><p>${esc(p.method)}</p></div>
        <div class="m-block" style="--c:#ff5c6c"><h5>Where they ended up</h5><p>${esc(p.fate)}</p></div>
        ${lawsHTML}
        ${punishHTML}
        <div class="m-block" style="--c:#94a3b8"><h5>Profile source</h5><p><a href="${psrc}" target="_blank" rel="noopener">${esc(plabel)}</a></p></div>
      </div>`;
    watchImg($('#personBody').querySelector('img[data-modal-img]'), img => img.remove());
    show('#personModal');
  }

  function show(sel) {
    const el = $(sel);
    el.hidden = false;
    document.body.classList.add('locked');
  }
  function hide(sel) {
    $(sel).hidden = true;
    if ($$('.modal:not([hidden])').length === 0) document.body.classList.remove('locked');
  }

  // Swap a video thumbnail for the real YouTube player, with an ID check first.
  function playVideo(box) {
    const id = box.dataset.vid || '';
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    box.classList.add('playing');
    box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" title="${box.dataset.title || 'video'}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }

  /* ---------------- events ---------------- */
  function bind() {
    // open cards (timeline + mini grids)
    document.addEventListener('click', e => {
      const vid = e.target.closest('.vid');
      if (vid) { playVideo(vid); return; }
      const card = e.target.closest('.card, .mini-card');
      if (card && card.dataset.id) { openIncident(card.dataset.id); return; }
      const person = e.target.closest('[data-person]');
      if (person) { openPerson(person.dataset.person); return; }
      if (e.target.closest('[data-close]')) hide('#modal');
      if (e.target.closest('[data-close-person]')) hide('#personModal');
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { hide('#modal'); hide('#personModal'); }
      if (e.key === '/' && document.activeElement !== $('#search')) {
        e.preventDefault(); $('#search').focus();
      }
      if ((e.key === 'Enter' || e.key === ' ') && document.activeElement) {
        const el = document.activeElement;
        if (el.dataset && el.classList.contains('vid')) { e.preventDefault(); playVideo(el); }
        else if (el.dataset.id) { e.preventDefault(); openIncident(el.dataset.id); }
        else if (el.dataset.person) { e.preventDefault(); openPerson(el.dataset.person); }
      }
    });

    let t;
    $('#search').addEventListener('input', e => {
      clearTimeout(t);
      t = setTimeout(() => { state.q = e.target.value.trim().toLowerCase(); render(); }, 130);
    });

    $('#sortBtn').addEventListener('click', () => {
      state.sort = state.sort === 'asc' ? 'desc' : 'asc';
      $('#sortBtn').textContent = state.sort === 'asc' ? 'Oldest ↑ newest' : 'Newest ↓ oldest';
      render();
    });

    const clear = () => {
      state.cats.clear(); state.q = ''; $('#search').value = '';
      $$('.chip').forEach(c => c.classList.remove('on'));
      render();
    };
    $('#clearBtn').addEventListener('click', clear);
    $('#emptyReset').addEventListener('click', clear);

    $('#randomBtn').addEventListener('click', () => {
      const list = current().length ? current() : ALL;
      openIncident(list[Math.floor(Math.random() * list.length)].id);
    });

    $('#navToggle').addEventListener('click', () => $('#nav').classList.toggle('open'));
    $$('.nav a').forEach(a => a.addEventListener('click', () => $('#nav').classList.remove('open')));

    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight;
      const pct = denom > 0 ? (h.scrollTop / denom) * 100 : 0;
      $('#progress span').style.width = Math.min(100, Math.max(0, pct)) + '%';
    }, { passive: true });
  }

  /* ---------------- hero terminal ---------------- */
  function terminal() {
    const lines = [
      ['dim', '> loading archive ...'],
      ['ok', '  1971  creeper            first program to move'],
      ['ok', '  1988  morris worm         10% of the internet'],
      ['bad', '  2000  iloveyou            45m machines'],
      ['bad', '  2010  stuxnet             first worm to break things'],
      ['warn', '  2014  heartbleed          two years undetected'],
      ['warn', '  2017  notpetya            $10bn collateral'],
      ['ok', '  2021  log4shell           everyone had it'],
      ['ok', '  2025  echoleak            zero-click prompt injection'],
      ['dim', '> ai-assisted discovery ONLINE'],
      ['ok', '  2024  big sleep           found a bug in sqlite'],
      ['dim', '> p2p botnets: no server to seize']
    ];
    const el = $('#terminal');
    let n = 0;
    (function step() {
      if (n >= lines.length) { el.innerHTML = '> ready. press [ / ] to search<span class="cur"></span>'; return; }
      const [cls, text] = lines[n++];
      el.innerHTML += `<span class="${cls}">${esc(text)}</span>\n`;
      setTimeout(step, 340);
    })();
  }

  function counters() {
    const years = 2026 - 1971;
    animate($('#statYears'), years);
    animate($('#statPeople'), ALL_PEOPLE.length);
    animate($('#statCats'), Object.keys(CATEGORIES).length);
    animate($('#entryCount'), ALL.length);
  }

  function animate(el, to) {
    let n = 0;
    const t = setInterval(() => {
      n += Math.max(1, Math.round(to / 26));
      if (n >= to) { n = to; clearInterval(t); }
      el.textContent = n;
    }, 40);
  }

  /* ---------------- render ---------------- */
  function render() {
    renderTimeline();
    renderMini(ALL.filter(i => i.cat === 'ai'), '#aiGrid');
    renderMini(ALL.filter(i => i.cat === 'p2p'), '#p2pGrid');
  }

  renderChips();
  render();
  renderHatChips();
  renderPeople();
  renderGames();
  bind();
  terminal();
  counters();
})();
