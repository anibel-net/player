import 'bootstrap/dist/css/bootstrap.min.css';
import qs from 'qs';

document.getElementById('submitBtn').addEventListener('click', e => {
  e.preventDefault();
  const form = document.getElementById('form');
  if (!form.reportValidity()) return;
  fetch(form.action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: qs.stringify({
      videoSrc: document.getElementById('videoSrc').value,
      audioSrc: document.getElementById('audioSrc').value,
      subSrc: document.getElementById('subSrc').value,
      fonts: document.getElementById('fonts').value.replace(/\r\n/g, '\n').split('\n'),
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      image: document.getElementById('image').value
    })
  }).then(response => response.text()).then(link => location.assign(new URL(link, window.location.href).href));
});