const express = require('express');
const router = express.Router();
const courses = require('../data/courses.json');

// GET all courses
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: courses.length,
    data: courses
  });
});

// GET course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === req.params.id);
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }
  res.json({ success: true, data: course });
});

module.exports = router;

