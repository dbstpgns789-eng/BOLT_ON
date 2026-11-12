import { defineConfig } from 'astro/config';
import { readFile, writeFile, glob } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Korean copy joins words with a middle dot (신·증축, 증설·승압). word-break: keep-all still lets a line end right
// after the dot (신·/증축) or, once that is blocked, just before it (배관/·배선). After the build, put a WORD JOINER
// (U+2060, invisible) on both sides of every middle dot that sits between two letters or digits, in page text
// only (tags, attributes, scripts, styles and <title> are left alone). The dev server does not run this; check line
// breaks on the built site.
const WJ = '\u2060';
const keepMiddotWords = {
  name: 'keep-middot-words',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      for await (const rel of glob('**/*.html', { cwd: root })) {
        const file = join(root, rel);
        const html = await readFile(file, 'utf8');
        let skip = false;
        const out = html.split(/(<[^>]*>)/).map((part) => {
          if (part.startsWith('<')) {
            if (/^<(script|style|title)\b/i.test(part)) skip = true;
            else if (/^<\/(script|style|title)>/i.test(part)) skip = false;
            return part;
          }
          return skip ? part : part.replace(/([\p{L}\p{N}])·(?=[\p{L}\p{N}])/gu, `$1${WJ}·${WJ}`);
        }).join('');
        if (out !== html) await writeFile(file, out);
      }
    },
  },
};

export default defineConfig({
  site: 'https://voltonenc.com',
  integrations: [keepMiddotWords],
});
