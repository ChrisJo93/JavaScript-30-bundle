// Get Video Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
function updateToggle() {
  const button = video.paused ? '►' : '❚ ❚';
  toggle.textContent = button;
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgressUpdate() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
//function full screen

//Hook up event listenerds
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);
video.addEventListener('timeupdate', handleProgressUpdate);

toggle.addEventListener('click', togglePlay);
ranges.forEach((range) => range.addEventListener('change', handleRange));
ranges.forEach((range) => range.addEventListener('mousemove', handleRange));
skipButtons.forEach((button) => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
