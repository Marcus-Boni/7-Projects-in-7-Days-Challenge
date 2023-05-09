const playButton = document.querySelector(".composer .btn");
const audios = document.querySelectorAll("audio");

const keyPressed = (e) => {
  playSound(e.code.toLowerCase());
};

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
};

const musicalComposition = () => {
  let song = document.querySelector("#input").value;
  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
};

const playComposition = (array) => {
  let wait = 0;

  array.forEach((songItem) => {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);

    wait += 250;
  });
};

document.body.addEventListener("keyup", keyPressed);
playButton.addEventListener("click", musicalComposition);

/* 
const keyPressed = (e) => {
  playSound(e.code.toLowerCase());
};

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`[data-key="${sound}"]`);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout( () => {
      
    })
  }
};

document.body.addEventListener("keyup", keyPressed);
 */
