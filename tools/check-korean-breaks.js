// Usage: replace __URL__ with a page URL, then: aside repl --file <copy>. Prints mid-word Hangul line breaks per viewport.
// Finds lines that break between two Hangul syllables (mid-word) in visible text.
const pk = await openTab('about:blank');
const out = [];
for (const w of [1440, 1024, 768, 390]) {
  await pk.setViewportSize({ width: w, height: 900 });
  await pk.goto('__URL__', { waitUntil: 'load' });
  await sleep(600);
  const hits = await pk.evaluate(() => {
    const isH = (c) => /[가-힣]/.test(c || '');
    const res = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      const t = n.textContent;
      if (!t.trim() || !n.parentElement || n.parentElement.closest('script,style,[aria-hidden="true"],details:not([open]) .mnav-body')) continue;
      const r = document.createRange();
      let prevTop = null;
      for (let i = 0; i < t.length; i++) {
        r.setStart(n, i); r.setEnd(n, i + 1);
        const rect = r.getClientRects()[0];
        if (!rect || rect.width === 0) continue;
        if (prevTop !== null && rect.top > prevTop + 4 && isH(t[i]) && isH(t[i - 1])) {
          res.push(t.slice(Math.max(0, i - 6), i) + '/' + t.slice(i, i + 6) + '  <' + n.parentElement.className + '>');
        }
        prevTop = rect.top;
      }
    }
    return [...new Set(res)];
  });
  out.push(`[${w}px] ${hits.length}` + (hits.length ? '\n  ' + hits.slice(0, 12).join('\n  ') : ''));
}
console.log(out.join('\n'));
await closeTab(pk);
