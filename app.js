const express = require('express');
const app = express();

console.log("Express app is initializing...");

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('GET request to /');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
