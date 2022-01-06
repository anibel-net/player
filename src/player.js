import Plyr from 'plyr';
import SubtitlesOctopus from 'libass-wasm';
import 'plyr/dist/plyr.css';
import './player.css';

document.addEventListener('DOMContentLoaded', () => {

  const subSrc = document.querySelector('meta[property="subsrc"]').content;
  const fontsSrc = Array.from(document.querySelectorAll('meta[property="fontsrc"]')).map(element => element.content);

  const videoPlayer = new Plyr('#video', {
    controls: ['play-large', 'play', 'mute', 'volume', 'current-time', 'progress', 'pip', 'settings', 'fullscreen'],
    invertTime: false
  });
  const audioPlayer = new Plyr('#audio');

  new SubtitlesOctopus({
    video: document.getElementById('video'), subUrl: subSrc, fonts: fontsSrc
  });

  videoPlayer.on('play', () => {
    audioPlayer.currentTime = videoPlayer.currentTime;
    audioPlayer.play();
  });

  videoPlayer.on('pause', () => {
    audioPlayer.pause();
  });

  videoPlayer.on('volumechange', () => {
    audioPlayer.volume = videoPlayer.volume;
    audioPlayer.muted = videoPlayer.muted;
  });

  audioPlayer.on('stalled', () => {
    videoPlayer.pause();
  });

  setInterval(() => {
    if (videoPlayer.currentTime - audioPlayer.currentTime > 0.25) audioPlayer.currentTime = videoPlayer.currentTime;
  }, 3000);

});
