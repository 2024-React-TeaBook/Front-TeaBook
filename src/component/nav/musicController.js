// musicController.js
let audio = new Audio();

const playMusic = (url) => {
    audio.src = url;
    audio.play();
};

const stopMusic = () => {
    audio.pause(); 
};

const setMusicTime = (time) => {
    audio.currentTime = time;
};

export { playMusic, stopMusic, setMusicTime };
