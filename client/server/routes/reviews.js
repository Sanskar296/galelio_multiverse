const express = require('express');
const router = express.Router();
const reviews = require('../data/reviews.json');

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: reviews
  });
});

module.exports = router;

