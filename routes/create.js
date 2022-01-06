const router = require('express').Router();
const bodyParser = require('body-parser');
const Player = require('./../models/Player');

router.use(bodyParser.urlencoded({ extended: true }));

function generateShortLink(length = 4) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; ++i) result += charset.charAt(Math.floor(Math.random() * charset.length));
  return result;
}

router.post('/create', async (req, res) => {
  let linkLength = 4;
  let shortLink = generateShortLink(linkLength);
  while (await Player.findOne({ shortLink })) shortLink = generateShortLink(++linkLength);
  await Player.create({
    shortLink,
    videoSrc: req.body.videoSrc,
    audioSrc: req.body.audioSrc,
    subSrc: req.body.subSrc,
    fonts: Array.isArray(req.body.fonts) ? [...req.body.fonts] : [],
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  }, (err, doc) => {
    if (err) return res.sendStatus(500);
    return res.send(doc.shortLink);
  });
});

module.exports = router;