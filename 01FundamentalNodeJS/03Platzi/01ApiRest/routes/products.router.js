const express = require('express');
const faker = require('faker');
const router = express.Router();

// get total products
router.get('/', (req, res) => {
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

// get unic product
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'product2', price: '$1500' });
});

// new product =>
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

// edit product =>
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

// delete product =>
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
