import videojs from 'video.js';
import SubtitlesOctopus from 'libass-wasm';
import 'video.js/dist/video-js.min.css';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  const videoSrc = document.querySelector('meta[name="videosrc"]').content;
  const audioSrc = document.querySelector('meta[name="audiosrc"]').content;
  const subSrc = document.querySelector('meta[name="subsrc"]').content;
  const fontsSrc = Array.from(document.querySelectorAll('meta[name="fontsrc"]')).map(element => element.content);

  new SubtitlesOctopus({
    video: document.getElementById('video'),
    subUrl: subSrc,
    fonts: fontsSrc
  });

  document.getElementById('videosurce').src = videoSrc;
  document.getElementById('audiosource').src = audioSrc;

  const videoPlayer = videojs('video');
  const audioPlayer = videojs('audio');

  videoPlayer.on('play', () => {
    audioPlayer.currentTime(videoPlayer.currentTime());
    audioPlayer.play();
  });

  videoPlayer.on('pause', () => audioPlayer.pause());

  videoPlayer.on('stalled', () => audioPlayer.pause());

  audioPlayer.on('play', () => {
    videoPlayer.currentTime(audioPlayer.currentTime());
    videoPlayer.play();
  });

  audioPlayer.on('stalled', () => videoPlayer.pause());

  videoPlayer.on('volumechange', () => {
    audioPlayer.volume(videoPlayer.volume());
    audioPlayer.muted(videoPlayer.muted())
  });


  setInterval(() => {
    if (Math.abs(videoPlayer.currentTime() - audioPlayer.currentTime()) > 0.25)
      console.log(audioPlayer.paused()) || audioPlayer.currentTime(videoPlayer.currentTime());
  }, 100);

});
