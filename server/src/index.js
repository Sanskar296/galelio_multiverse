const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static public images if needed directly from server
app.use('/images', express.static(path.join(__dirname, '../../client/public/images')));

// API Routes
app.use('/api/courses', require('./routes/courses'));
app.use('/api/events', require('./routes/events'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/contact', require('./routes/contact'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Galileo Multiverse API',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend build in production
const distPath = path.join(__dirname, '../../client/dist');
app.use(express.static(distPath));

// SPA fallback for client routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexHtml = path.join(distPath, 'index.html');
  res.sendFile(indexHtml, (err) => {
    if (err) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head><title>Galileo Multiverse API Server</title></head>
          <body style="font-family:sans-serif; background:#0b0f19; color:#f0f4f8; padding:40px; text-align:center;">
            <h1 style="color:#38bdf8;">Galileo Multiverse Backend API</h1>
            <p>API server is running successfully on port ${PORT}.</p>
            <p>Please run the React frontend with <code style="color:#a855f7;">npm run dev</code> or build it with <code style="color:#a855f7;">npm run build</code>.</p>
          </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(` Galileo Multiverse Server running on port ${PORT}`);
  console.log(` Health check: http://localhost:${PORT}/api/health`);
  console.log(`=================================================`);
});

