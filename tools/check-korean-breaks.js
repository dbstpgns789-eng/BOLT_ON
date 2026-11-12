// Usage: replace __URL__ with a page URL, then: aside repl --file <copy>. Prints mid-word Hangul line breaks per viewport.
// Finds lines that break inside a word in visible text: between two Hangul syllables, or right after a middle dot
// joining two words (신·/증축), or with the dot starting the new line (배관/·배선). The build's word joiners are skipped.
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
      if (!t.trim() || !n.parentElement || n.parentElement.closest('script,style,.slide[aria-hidden="true"],details:not([open]) .mnav-body')) continue;
      const r = document.createRange();
      let prevTop = null;
      for (let i = 0; i < t.length; i++) {
        r.setStart(n, i); r.setEnd(n, i + 1);
        const rect = r.getClientRects()[0];
        if (!rect || rect.width === 0) continue;
        const prev = t[i - 1] === '\u2060' ? t[i - 2] : t[i - 1];
        if (prevTop !== null && rect.top > prevTop + 4 && ((isH(t[i]) && (isH(prev) || prev === '·')) || (t[i] === '·' && isH(prev)))) {
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
