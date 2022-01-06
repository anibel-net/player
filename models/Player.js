const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  shortLink: { type: String, required: true },
  videoSrc: { type: String, required: true },
  audioSrc: String,
  subSrc: String,
  fonts: [String],
  title: String,
  description: String,
  imageSrc: String
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player