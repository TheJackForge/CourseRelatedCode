const musicContainer = document.getElementById('music-container');
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['hey', 'summer', 'ukulele']

let songIndex = 2;

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    // loadSong(songs[songIndex]);
    console.log(audio.src);
    musicContainer.classList.add('play');
    playBtn.firstElementChild.classList.remove('fa-play')
    playBtn.firstElementChild.classList.add('fa-pause')
}

function pauseSong() {
    console.log('PAUSE');
    musicContainer.classList.remove('play');
    playBtn.firstElementChild.classList.remove('fa-pause')
    playBtn.firstElementChild.classList.add('fa-play')
}

// function prevMusic() {
//     loadSong(songs[songIndex]);
//     songIndex--;
//     console.log(songs[songIndex])
//     if (songIndex === 0) {
//         songIndex = 3;
//     }
// }



// function nextMusic() {
//     loadSong(songs[songIndex]);
//     songIndex++;
//     console.log(songs[songIndex])
//     if (songIndex === songs.length-1) {
//         songIndex = 0 - 1;
//     }
// }



// Event Listeners
// prevBtn.addEventListener('click', prevMusic)

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

// nextBtn.addEventListener('click', nextMusic)