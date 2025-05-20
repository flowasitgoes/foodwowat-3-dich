const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/oraniths', (req, res) => {
  res.sendFile(path.join(__dirname, 'oraniths.html'));
});

app.get('/anturax', (req, res) => {
  res.sendFile(path.join(__dirname, 'anturax.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 