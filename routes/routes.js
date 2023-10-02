const express = require('express');
const path = require('path'); 
const router = express.Router();

// Serve the HTML pages
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../about.html'));
});

router.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '../projects.html'));
});

router.get('/Services', (req, res) => {
  res.sendFile(path.join(__dirname, '../Services.html'));
});

router.get('/Contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../Contact.html'));
});

// Define routes for other pages similarly

module.exports = router;
