const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const urlMod = require('url');

const BASE_URL = 'https://galileomultiverse.weebly.com';

const pages = [
  '/',
  '/about.html',
  '/space-club.html',
  '/cancelation-and-refund-policy.html',
  '/return-policy.html',
  '/terms-of-service.html',
  '/contact-us.html'
];

function fetchUrl(targetUrl) {
  return new Promise((resolve, reject) => {
    let fullUrl = targetUrl;
    if (targetUrl.startsWith('//')) {
      fullUrl = 'https:' + targetUrl;
    } else if (targetUrl.startsWith('/')) {
      fullUrl = BASE_URL + targetUrl;
    } else if (!targetUrl.startsWith('http')) {
      fullUrl = BASE_URL + '/' + targetUrl;
    }

    const parsed = new urlMod.URL(fullUrl);
    const client = parsed.protocol === 'https:' ? https : http;

    const options = {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    };

    client.get(options, (res) => {
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
  const pagesDir = path.join(__dirname, 'raw_pages');
  const imagesDir = path.join(__dirname, 'raw_images');
  if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

  const allImages = new Set();

  for (const page of pages) {
    const filename = page === '/' ? 'index.html' : page.replace(/^\//, '');
    console.log(`Fetching page ${page}...`);
    try {
      const buffer = await fetchUrl(page);
      fs.writeFileSync(path.join(pagesDir, filename), buffer);
      console.log(`Saved ${filename} (${buffer.length} bytes)`);

      const html = buffer.toString('utf8');
      const imgRegex = /(?:src|href|background|url\()=["']?([^"')\s]+\.(?:png|jpg|jpeg|gif|webp|svg|ico)(?:\?[^"')\s]*)?)/gi;
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        const imgUrl = match[1];
        if (!imgUrl.includes('google') && !imgUrl.includes('facebook') && !imgUrl.includes('doubleclick') && !imgUrl.includes('analytics') && !imgUrl.includes('editmysite.com/fonts')) {
          allImages.add(imgUrl);
        }
      }
    } catch (err) {
      console.error(`Error fetching page ${page}:`, err.message);
    }
  }

  console.log(`\nFound ${allImages.size} unique image URLs across pages.`);
  for (const img of allImages) {
    const cleanImg = img.split('?')[0];
    const basename = path.basename(cleanImg);
    console.log(`Fetching image: ${img} -> ${basename}`);
    try {
      const imgBuffer = await fetchUrl(img);
      fs.writeFileSync(path.join(imagesDir, basename), imgBuffer);
      console.log(`Saved ${basename} (${imgBuffer.length} bytes)`);
    } catch (err) {
      console.error(`Error fetching image ${img}:`, err.message);
    }
  }

  // Also fetch CSS
  const cssUrl = '/files/main_style.css';
  try {
    const cssBuf = await fetchUrl(cssUrl);
    fs.writeFileSync(path.join(pagesDir, 'main_style.css'), cssBuf);
    console.log(`Saved main_style.css (${cssBuf.length} bytes)`);
  } catch (err) {
    console.error('Error fetching main_style.css:', err.message);
  }

  console.log('All downloads complete.');
}

main();
