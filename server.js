const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('dist'));

app.get('/player', (req, res) => res.render('player', {
  ...req.query,
  fonts: Array.isArray(req.query.fonts) ? req.query.fonts : req.query.fonts ? [req.query.fonts] : []
}));

app.listen(5000);