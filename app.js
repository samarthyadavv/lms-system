const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (if any, like CSS or JS) from the 'public' directory
app.use(express.static('public'));

// Render index.ejs when the app loads
app.get('/', (req, res) => {
  res.render('index');  // Renders views/index.ejs
});

// Route for the login page
app.get('/login', (req, res) => {
  res.render('login'); // Render login.ejs
});

// Route for the signup page
app.get('/signup', (req, res) => {
  res.render('signup'); // Render signup.ejs
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
