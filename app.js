const express = require('express');
const path = require('path');
const app = express();

// Set the 'views' directory for EJS templates (if needed)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve the 'index.html' file as the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Add routes for other pages (About, Projects, Services, Contact) here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
