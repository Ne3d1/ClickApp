(() => {
  const area = document.getElementById('tap-area');
  const scoreEl = document.getElementById('score');
  const hintEl = document.getElementById('hint');

  // Arc de Sant Martí: cada color dura 100 punts.
  const colors = [
    ['#ff4d4d', '#d93b3b'], // vermell
    ['#ff9638', '#d97722'], // taronja
    ['#ffe34d', '#cbb52b'], // groc
    ['#55d66b', '#2eaa46'], // verd
    ['#42c9d9', '#2695a3'], // blau clar
    ['#4387ff', '#2c60c6'], // blau
    ['#a66bff', '#7942c9']  // violeta
  ];

  const RESET_HOLD_MS = 5000;
  const RESET_ZONE_PX = 64;
  let score = 0;
  let holdTimer = null;
  let holdPointerId = null;
  let resetTriggered = false;

  try {
    const saved = Number.parseInt(localStorage.getItem('click-arc-score') || '0', 10);
    if (Number.isFinite(saved) && saved >= 0) score = saved;
  } catch (_) {}

  function render() {
    scoreEl.textContent = score.toLocaleString('ca-ES');
    const colorIndex = Math.floor(score / 100) % colors.length;
    area.style.setProperty('--bg', colors[colorIndex][0]);
    area.style.setProperty('--ink', colors[colorIndex][1]);
    hintEl.textContent = 'TOCA';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colors[colorIndex][0]);
  }

  function save() {
    try { localStorage.setItem('click-arc-score', String(score)); } catch (_) {}
  }

  function cancelResetHold() {
    if (holdTimer !== null) {
      clearTimeout(holdTimer);
      holdTimer = null;
    }
    holdPointerId = null;
  }

  area.addEventListener('pointerdown', (event) => {
    event.preventDefault();

    const rect = area.getBoundingClientRect();
    const nearTopLeft = event.clientX <= rect.left + RESET_ZONE_PX &&
                        event.clientY <= rect.top + RESET_ZONE_PX;

    if (nearTopLeft) {
      cancelResetHold();
      holdPointerId = event.pointerId;
      resetTriggered = false;
      holdTimer = setTimeout(() => {
        score = 0;
        save();
        render();
        resetTriggered = true;
        holdTimer = null;
        // Short visual confirmation without adding permanent UI.
        hintEl.textContent = 'REINICIAT!';
        window.setTimeout(() => {
          if (score === 0) hintEl.textContent = 'TOCA';
        }, 1200);
      }, RESET_HOLD_MS);
      try { area.setPointerCapture(event.pointerId); } catch (_) {}
      return;
    }

    score += 1;
    save();
    render();
  });

  function endPointer(event) {
    if (holdPointerId !== null && event.pointerId === holdPointerId) {
      cancelResetHold();
    }
  }
  area.addEventListener('pointerup', endPointer);
  area.addEventListener('pointercancel', endPointer);
  area.addEventListener('lostpointercapture', endPointer);

  render();

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
  }
})();
