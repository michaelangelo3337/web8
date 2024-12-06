import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const peasantKey = JSON.parse(fs.readFileSync(path.resolve('./pages/api/id.json')));
  res.status(200).json(peasantKey);
}