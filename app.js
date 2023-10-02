const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Include the routes
const routes = require('./routes/routes');
app.use('/', routes);

// Start the server
const port = process.env.PORT ||4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
