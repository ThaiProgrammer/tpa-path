import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Copy root assets/ to public/assets/
const srcAssets = path.join(rootDir, 'assets');
const destAssets = path.join(rootDir, 'public', 'assets');
fs.mkdirSync(destAssets, { recursive: true });
for (const file of fs.readdirSync(srcAssets)) {
  fs.copyFileSync(path.join(srcAssets, file), path.join(destAssets, file));
  console.log(`✓ Copied asset to public/assets/${file}`);
}

// 2. Copy paths/wordpress/images/ to public/paths/wordpress/images/
const srcWpImages = path.join(rootDir, 'paths', 'wordpress', 'images');
const destWpImages = path.join(rootDir, 'public', 'paths', 'wordpress', 'images');
fs.mkdirSync(destWpImages, { recursive: true });
for (const file of fs.readdirSync(srcWpImages)) {
  fs.copyFileSync(path.join(srcWpImages, file), path.join(destWpImages, file));
  console.log(`✓ Copied WP image to public/paths/wordpress/images/${file}`);
}

// 3. Download official SVGs into public/logos/
const logosDir = path.join(rootDir, 'public', 'logos');
fs.mkdirSync(logosDir, { recursive: true });

const downloads = [
  {
    name: 'typescript.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  {
    name: 'dotnet.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg'
  },
  {
    name: 'java.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
  },
  {
    name: 'azure.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg'
  },
  {
    name: 'wordpress.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg'
  },
  {
    name: 'github.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
  },
  {
    name: 'devops.svg',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
  }
];

function fetchFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchFile(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

for (const item of downloads) {
  const destPath = path.join(logosDir, item.name);
  try {
    await fetchFile(item.url, destPath);
    const size = fs.statSync(destPath).size;
    console.log(`✓ Downloaded ${item.name} (${size} bytes)`);
  } catch (err) {
    console.error(`✕ Failed to download ${item.name}: ${err.message}`);
  }
}

console.log('All assets and logos successfully updated!');
