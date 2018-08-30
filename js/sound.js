var rightsound; // Actual audio-file, which is gonna be played
var rightaudio; // Audio-files / -sources [Array]
var randomrightaudio; // Actual audio-source, which is gonna be played

rightaudio = [
  'audio/right1.mp3',
  'audio/right2.mp3',
  'audio/right3.mp3',
  'audio/right4.mp3',
  'audio/right5.mp3'
]

function playRightSound() {
  if (sound == true) {
    randomrightaudio = rightaudio[Math.floor(Math.random() * rightaudio.length)];
    rightsound = document.createElement('audio');
    rightsound.src = randomrightaudio;
    rightsound.volume = 1;

    rightsound.currentTime = 0;
    rightsound.play();

    console.log(randomrightaudio);
  }
}

function stopRightSound() {
  rightsound.pause();
}

// -----------------------------

var wrongsound; // Actual audio-file, which is gonna be played
var wrongaudio; // Audio-files / -sources [Array]
var randomwrongaudio; // Actual audio-source, which is gonna be played

wrongaudio = [
  'audio/wrong1.mp3',
  'audio/wrong2.mp3',
  'audio/wrong3.mp3',
  'audio/wrong4.mp3',
  'audio/wrong5.mp3'
]

function playWrongSound() {
  if (sound == true) {
    randomwrongaudio = wrongaudio[Math.floor(Math.random() * wrongaudio.length)];
    wrongsound = document.createElement('audio');
    wrongsound.src = randomwrongaudio;
    wrongsound.volume = 1;

    wrongsound.currentTime = 0;
    wrongsound.play();

    console.log(randomwrongaudio);
  }
}

function stopWrongSound() {
  wrongsound.pause();
}
