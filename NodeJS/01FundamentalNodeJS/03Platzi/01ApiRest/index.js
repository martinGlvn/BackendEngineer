const express = require('express');
const routerApi = require('./routes');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
});

//
routerApi(app);

// App listen port =>
app.listen(PORT, () => {
  console.log('running sv on port 5000');
});
