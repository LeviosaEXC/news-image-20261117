// news-image-20261117 entry (Node 22, standard library only): copies the image beside
// this file to $MAKEFUN_OUTPUT_DIR/entry.png. The image sums up the world news of
// Tuesday 17 November 2026: the Kerch Bridge strike, the Kyiv bridges, the Gulf tanker
// mines, the Shenzhen summit, the Pentagon audit, the jets scrambled over Japan —
// plus a numbers strip and a ticker of the day's other stories.
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Gate: output must be a whole PNG or JPEG, <=1 MiB (1,048,576 B), <=1024x1024.
// The bundled entry.png is a 1024x1024 JPEG, 196,544 bytes — inside the gate.
// The copy is byte-for-byte, so two runs always write identical bytes.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
