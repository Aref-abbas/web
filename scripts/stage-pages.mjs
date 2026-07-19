import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const distDir = path.join(repoRoot, 'dist');
const pagesDir = path.join(repoRoot, 'docs');

const distEntries = await readdir(distDir);

if (!distEntries.includes('index.html') || !distEntries.includes('CNAME') || !distEntries.includes('.nojekyll')) {
  throw new Error('Build output is incomplete: index.html, CNAME or .nojekyll is missing.');
}

await rm(pagesDir, { recursive: true, force: true });
await mkdir(pagesDir, { recursive: true });
await cp(distDir, pagesDir, { recursive: true });

console.log('Static GitHub Pages output staged in docs/.');
