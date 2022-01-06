const router = require('express').Router();
const Player = require('../models/Player');

router.get('/player', (req, res) => res.render('player', {
  ...req.query, fonts: Array.isArray(req.query.fonts) ? req.query.fonts : req.query.fonts ? [req.query.fonts] : []
}));

router.get('/:shortLink', async (req, res) => {
  const playerData = await Player.findOne({ shortLink: req.params.shortLink });
  if (!playerData) return res.sendStatus(404);
  return res.render('player', playerData);
});

module.exports = router;