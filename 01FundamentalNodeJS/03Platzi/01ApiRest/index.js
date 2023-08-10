const express = require('express');
const app = express();
const PORT = 5000;

// methods => get
app.get('/', (req, res) => {
  res.send('sv in express');
});

// App listen port
app.listen(PORT, () => {
  console.log('running sv on port 5000');
});
