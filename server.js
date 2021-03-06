const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname)));
app.use(require('./controllers/portfolio-routes'));

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
  