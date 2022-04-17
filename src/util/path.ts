import fs from 'fs';
import path from 'path';

const fileName = require?.main?.filename;

let rootDir = '';
if (fileName) {
  rootDir = path.dirname(fileName);
}

export const dataProjectsFile = path.join(
  rootDir,
  '..',
  'src',
  'data',
  'projects.json'
);
