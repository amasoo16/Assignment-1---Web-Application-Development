const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

module.exports = router;

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});
