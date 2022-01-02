const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('static'));

app.get('/player', (req, res) => res.render('player', req.query));

app.listen(5000);