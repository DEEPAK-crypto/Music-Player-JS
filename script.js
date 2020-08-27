const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = [
	{
		name: 'Bare',
		displayName: 'Bare',
		artist: 'WILDES'
	},
	{
		name: 'Blinding Lights',
		displayName: 'Blinding Lights',
		artist: 'The Weeknd'
	},
	{
		name: 'I Just Died In Your Arms',
		displayName: '(I Just) Died In Your Arms',
		artist: 'Cutting Crew'
	},
	{
		name: "Nature's Law",
		displayName: "Nature's Law",
		artist: 'Embrace'
	},
	{
		name: 'With Or Without You',
		displayName: 'With Or Without You',
		artist: 'U2'
	}
];

let isPlaying = false;

function playSong() {
	isPlaying = true;
	playBtn.classList.replace('fa-play', 'fa-pause');
	playBtn.setAttribute('title', 'Pause');
	image.classList.toggle('img-play');
	music.play();
}

function pauseSong() {
	isPlaying = false;
	playBtn.classList.replace('fa-pause', 'fa-play');
	playBtn.setAttribute('title', 'Play');
	image.classList.toggle('img-play');
	music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

function loadSong(song) {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.name}.mp3`;
	image.src = `img/${song.name}.jpg`;
}

let songIndex = 0;

function nextSong() {
	songIndex++;
	loadSong(songs[songIndex]);
	playSong();
}

loadSong(songs[songIndex]);

// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);
