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
