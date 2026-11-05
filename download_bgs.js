const fs = require('fs');
const path = require('path');
const https = require('https');
const urlMod = require('url');

const BASE_URL = 'https://galileomultiverse.weebly.com';

const bgList = [
  '/uploads/1/4/9/6/149694416/background-images/1436807259.jpg',
  '/uploads/1/4/9/6/149694416/background-images/1697625486.png',
  '/uploads/1/4/9/6/149694416/background-images/695697909.jpg',
  '/uploads/1/4/9/6/149694416/background-images/1936583217.jpg',
  '/uploads/1/4/9/6/149694416/background-images/736515775.jpg',
  '/uploads/1/4/9/6/149694416/background-images/1686011681.jpg'
];

function fetchUrl(targetUrl) {
  return new Promise((resolve, reject) => {
    let fullUrl = BASE_URL + targetUrl;
    const parsed = new urlMod.URL(fullUrl);
    const options = {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8'
      }
    };

    https.get(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to load ${fullUrl}: status ${res.statusCode}`));
      }
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function main() {
  const bgDir = path.join(__dirname, 'raw_images', 'backgrounds');
  if (!fs.existsSync(bgDir)) fs.mkdirSync(bgDir, { recursive: true });

  for (const bg of bgList) {
    const basename = path.basename(bg);
    console.log(`Downloading background ${basename}...`);
    try {
      const buf = await fetchUrl(bg);
      fs.writeFileSync(path.join(bgDir, basename), buf);
      console.log(`Saved ${basename} (${buf.length} bytes)`);
    } catch (e) {
      console.error(`Failed ${basename}:`, e.message);
    }
  }
}

main();

