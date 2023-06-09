import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(saveCurrentTime,1000));

function saveCurrentTime (data) {
	let currentTime = data.seconds;
	localStorage.setItem("videoplayer-current-time", currentTime);
};

player.setCurrentTime(Number(localStorage.getItem(STORAGE_KEY)));