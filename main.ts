#!/usr/bin/env node
// Copies POST.json to /output for make.fun submission
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const post = readFileSync('POST.json', 'utf-8');
const outputDir = '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), post);
console.log('POST.json copied to /output');
