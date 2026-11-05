const http = require('http');
const path = require('path');

// Start express server
const app = require('./src/index.js');

function request(options, postData) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });

    req.on('error', reject);
    if (postData) {
      req.write(typeof postData === 'string' ? postData : JSON.stringify(postData));
    }
    req.end();
  });
}

async function runTests() {
  console.log('\n--- Running Verification Suite ---');
  let passed = 0;
  let total = 0;

  async function test(name, fn) {
    total++;
    try {
      await fn();
      console.log(`[PASS] ${name}`);
      passed++;
    } catch (err) {
      console.error(`[FAIL] ${name}:`, err);
    }
  }

  // 1. Health
  await test('GET /api/health', async () => {
    const res = await request({ hostname: 'localhost', port: 5000, path: '/api/health', method: 'GET' });
    if (res.statusCode !== 200) throw new Error(`Status ${res.statusCode}`);
    const json = JSON.parse(res.body);
    if (json.status !== 'ok') throw new Error(`Unexpected status ${json.status}`);
  });

  // 2. Courses
  await test('GET /api/courses', async () => {
    const res = await request({ hostname: 'localhost', port: 5000, path: '/api/courses', method: 'GET' });
    if (res.statusCode !== 200) throw new Error(`Status ${res.statusCode}`);
    const json = JSON.parse(res.body);
    if (!json.success || json.count !== 3) throw new Error(`Expected 3 courses, got ${json.count}`);
  });

  // 3. Events
  await test('GET /api/events', async () => {
    const res = await request({ hostname: 'localhost', port: 5000, path: '/api/events', method: 'GET' });
    if (res.statusCode !== 200) throw new Error(`Status ${res.statusCode}`);
    const json = JSON.parse(res.body);
    if (!json.success || json.count < 2) throw new Error(`Expected events, got ${json.count}`);
  });

  // 4. Contact submission
  await test('POST /api/contact', async () => {
    const res = await request(
      {
        hostname: 'localhost',
        port: 5000,
        path: '/api/contact',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      {
        name: 'Test Astronomer',
        email: 'astronomer@test.com',
        phone: '+91 9999999999',
        subject: 'Program Inquiry',
        message: 'Interested in Junior Astronomer course'
      }
    );
    if (res.statusCode !== 201) throw new Error(`Status ${res.statusCode}: ${res.body}`);
    const json = JSON.parse(res.body);
    if (!json.success) throw new Error('Failed contact submission');
  });

  // 5. Trial booking
  await test('POST /api/contact/book-trial', async () => {
    const res = await request(
      {
        hostname: 'localhost',
        port: 5000,
        path: '/api/contact/book-trial',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      {
        studentName: 'Aarav',
        parentName: 'Rohan',
        email: 'rohan@test.com',
        phone: '+91 9888888888',
        level: 'Level-1',
        age: 10
      }
    );
    if (res.statusCode !== 201) throw new Error(`Status ${res.statusCode}: ${res.body}`);
    const json = JSON.parse(res.body);
    if (!json.success) throw new Error('Failed booking submission');
  });

  // 6. SPA fallback React frontend
  await test('GET / and /about (React SPA HTML delivery)', async () => {
    const res1 = await request({ hostname: 'localhost', port: 5000, path: '/', method: 'GET' });
    if (res1.statusCode !== 200 || !res1.body.includes('<div id="root"></div>')) {
      throw new Error(`Failed / SPA html deliver: ${res1.statusCode}`);
    }

    const res2 = await request({ hostname: 'localhost', port: 5000, path: '/about', method: 'GET' });
    if (res2.statusCode !== 200 || !res2.body.includes('<div id="root"></div>')) {
      throw new Error(`Failed /about SPA html fallback: ${res2.statusCode}`);
    }
  });

  console.log(`\nVerification Results: ${passed}/${total} tests passed!`);
  setTimeout(() => process.exit(0), 500);
}

// Give server 500ms to open port then test
setTimeout(runTests, 500);
