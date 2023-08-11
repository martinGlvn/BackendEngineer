const express = require('express');
const faker = require('faker');
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
  const productos = [];
  const { tamaño } = req.query;
  const limite = tamaño || 10;
  for (let i = 0; i < limite; i++) {
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }
  res.json(productos);
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'product2', price: '$1500' });
});

app.get('/categorias/:categoriaId/productos/:productosId', (req, res) => {
  const { categoriaId, productosId } = req.params;
  res.json({ categoriaId, productosId });
});

app.get('/usuarios', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json(limit, offset);
  } else {
    res.send('no hay parametros');
  }
});

// App listen port =>
app.listen(PORT, () => {
  console.log('running sv on port 5000');
});
