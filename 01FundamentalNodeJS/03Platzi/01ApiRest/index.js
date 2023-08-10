const express = require('express');
const app = express();
const PORT = 5000;

// Routing
app.get('/', (req, res) => {
  res.send('sv in express');
});

app.get('/ruta', (req, res) => {
  res.send('ruta');
});

app.get('/productos', (req, res) => {
  res.json({ name: 'product1', price: '$500' });
});

// App listen port
app.listen(PORT, () => {
  console.log('running sv on port 5000');
});
