const express = require('express');
const faker = require('faker');

const router = express.Router();

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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'product2', price: '$1500' });
});

module.exports = router;
