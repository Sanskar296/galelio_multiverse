const express = require('express');
const router = express.Router();
const events = require('../data/events.json');

// GET all events
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: events.length,
    data: events
  });
});

// GET event by ID
router.get('/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) {
    return res.status(404).json({ success: false, message: 'Event not found' });
  }
  res.json({ success: true, data: event });
});

module.exports = router;

