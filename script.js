console.log('Welocome to spotify');

//variables initialization
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Katiya Karun", filePath: "song/1.mp3", coverPath: "cover1.jpg" },
    { songName: "Jo bhi Main", filePath: "song/2.mp3", coverPath: "cover1.jpg" },
    { songName: "Phir se Udd Chala", filePath: "song/3.mp3", coverPath: "cover1.jpg" },
    { songName: "Kun Faya Kun", filePath: "song/4.mp3", coverPath: "cover1.jpg" },
    { songName: "Sadda Haqq", filePath: "song/5.mp3", coverPath: "cover1.jpg" },
    { songName: "Tum Ho", filePath: "song/6.mp3", coverPath: "cover1.jpg" },
    { songName: "Nadaan Parinde", filePath: "song/7.mp3", coverPath: "cover1.jpg" },
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-cicle-pause');
        element.classList.add('fa-cicle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-cicle-play');
        e.target.classList.add('fa-cicle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongname.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 1;
    }
    else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 7;
    }
    else {
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongname.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})