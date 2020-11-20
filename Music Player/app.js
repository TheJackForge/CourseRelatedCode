const musicContainer = document.getElementById('music-container');
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')

const songs = ['hey', 'summer', 'ukulele']

let songIndex = 0;

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    
    musicContainer.classList.add('play');
    playBtn.firstElementChild.classList.remove('fa-play')
    playBtn.firstElementChild.classList.add('fa-pause')
    audio.play();

    progressBar();
}

function progressBar() {
    
    const percentage = (audio.currentTime / audio.duration) * 100
    progress.style.width = `${percentage}%`

    if (percentage === 100) {
        nextSong();
    }
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.firstElementChild.classList.remove('fa-pause')
    playBtn.firstElementChild.classList.add('fa-play')
    audio.pause();
}
 

// Event Listeners / Buttons
prevBtn.addEventListener('click', () => {
    
    songIndex--;
    
    if (songIndex < 0) {
        songIndex = songs.length -1 ;
    }
    
    loadSong(songs[songIndex])
    if (musicContainer.classList.contains('play')) {
    audio.play();
    audio.currentTime = 0;
    }
})

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

function nextSong() {
    songIndex++;
    
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    
    progress.style.width = 0;

    loadSong(songs[songIndex])
    if (musicContainer.classList.contains('play')) {
        audio.play();
        audio.currentTime = 0;
    }
}

function scrub(e) {
    const scrubTime = (e.offsetX / progressContainer.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
    console.log(e)
}

nextBtn.addEventListener('click', nextSong)

progressContainer.addEventListener('click', scrub)

audio.addEventListener('timeupdate', progressBar)