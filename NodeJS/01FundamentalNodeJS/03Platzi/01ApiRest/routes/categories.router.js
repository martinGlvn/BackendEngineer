const express = require('express');
// const faker = require('faker');
const router = express.Router();

router.get('/:categorieId/products/:productsId', (req, res) => {
  const { categoriaId, productosId } = req.params;
  res.json({ categoriaId, productosId });
});

module.exports = router;
