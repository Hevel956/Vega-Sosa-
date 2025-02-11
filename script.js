// Audio Player Functionality
const playButtons = document.querySelectorAll('.play-btn');
const pauseButtons = document.querySelectorAll('.pause-btn');
const stopButtons = document.querySelectorAll('.stop-btn');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const audioId = button.getAttribute('data-audio');
    const audio = document.getElementById(audioId);
    audio.play();
  });
});

pauseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const audioId = button.getAttribute('data-audio');
    const audio = document.getElementById(audioId);
    audio.pause();
  });
});

stopButtons.forEach(button => {
  button.addEventListener('click', () =>