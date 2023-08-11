const express = require('express');
const app = express();
const PORT = 5000;

// Routing => GET
app.get('/', (req, res) => {
  res.send('sv in express');
});

app.get('/ruta', (req, res) => {
  res.send('ruta');
});

app.get('/productos', (req, res) => {
  res.json([
    { name: 'product1', price: '$500' },
    { name: 'product2', price: '$1500' },
  ]);
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'product2', price: '$1500' });
});

app.get('/categorias/:categoriaId/productos/:productosId', (req, res) => {
  const { categoriaId, productosId } = req.params;
  res.json({ categoriaId, productosId });
});

// App listen port
app.listen(PORT, () => {
  console.log('running sv on port 5000');
});
