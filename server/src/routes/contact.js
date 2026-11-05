const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const submissionsFile = path.join(__dirname, '../data/submissions.json');

// Ensure submissions file exists
if (!fs.existsSync(submissionsFile)) {
  fs.writeFileSync(submissionsFile, JSON.stringify({ contacts: [], trialBookings: [] }, null, 2));
}

function getSubmissions() {
  try {
    const raw = fs.readFileSync(submissionsFile, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { contacts: [], trialBookings: [] };
  }
}

function saveSubmissions(data) {
  fs.writeFileSync(submissionsFile, JSON.stringify(data, null, 2));
}

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email, and message.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  const newEntry = {
    id: 'contact_' + Date.now(),
    name,
    email,
    phone: phone || '',
    subject: subject || 'General Inquiry',
    message,
    createdAt: new Date().toISOString()
  };

  const data = getSubmissions();
  data.contacts.push(newEntry);
  saveSubmissions(data);

  console.log(`[Contact Submission] from ${name} (${email}): ${subject}`);

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out to Galileo Multiverse! Our support team will get back to you within 24-48 hours.',
    submissionId: newEntry.id
  });
});

// POST /api/contact/book-trial
router.post('/book-trial', (req, res) => {
  const { studentName, parentName, email, phone, age, level, preferredSlot } = req.body;

  if (!studentName || !email || !phone || !level) {
    return res.status(400).json({
      success: false,
      message: 'Please provide student name, email, phone number, and program level.'
    });
  }

  const newBooking = {
    id: 'trial_' + Date.now(),
    studentName,
    parentName: parentName || '',
    email,
    phone,
    age: age || '',
    level,
    preferredSlot: preferredSlot || 'Next available weekend session',
    createdAt: new Date().toISOString()
  };

  const data = getSubmissions();
  data.trialBookings.push(newBooking);
  saveSubmissions(data);

  console.log(`[Trial Booking] for ${studentName}, Level: ${level}, Email: ${email}`);

  res.status(201).json({
    success: true,
    message: `Free trial session confirmed for ${studentName} in ${level}! Check your email (${email}) for meeting link and preparation guidelines.`,
    bookingId: newBooking.id
  });
});

module.exports = router;

