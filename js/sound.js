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
('audio');
wrong1 = document.createElement('audio');
wrong2 = document.createElement('audio');
wrong3 = document.createElement('audio');
wrong4 = document.createElement('audio');
wrong5 = document.createElement('audio');
wrong1.src = 'audio/wrong1.mp3';
wrong2.src = 'audio/wrong2.mp3';
wrong3.src = 'audio/wrong3.mp3';
wrong4.src = 'audio/wrong4.mp3';
wrong5.src = 'audio/wrong5.mp3';
wrong1.volume = 1;
wrong2.volume = 1;
wrong3.volume = 1;
wrong4.volume = 1;
wrong5.volume = 1;

wrongaudio = 5;

function playWrongSound() {
  if (sound) {
    wrongsound = [Math.floor((Math.random() * wrongaudio) + 1)];

    if (wrongsound == 1) {
      wrong1.currentTime = 0;
      wrong1.play();
    } else if (wrongsound == 2) {
      wrong2.currentTime = 0;
      wrong2.play();
    } else if (wrongsound == 3) {
      wrong3.currentTime = 0;
      wrong3.play();
    } else if (wrongsound == 4) {
      wrong4.currentTime = 0;
      wrong4.play();
    } else if (wrongsound == 5) {
      wrong5.currentTime = 0;
      wrong5.play();
    }

    console.log(wrongsound);
  }
}

function stopWrongSound() {
  wrongsound.pause();
}



// var rightsound; // Actual audio-file, which is gonna be played
// var rightaudio; // Audio-files / -sources [Array]
// var randomrightaudio; // Actual audio-source, which is gonna be played

// rightaudio = [
//   'audio/right1.mp3',
//   'audio/right2.mp3',
//   'audio/right3.mp3',
//   'audio/right4.mp3',
//   'audio/right5.mp3'
// ]

// function playRightSound() {
//   if (sound == true) {
//     randomrightaudio = rightaudio[Math.floor(Math.random() * rightaudio.length)];
//     rightsound = document.createElement('audio');
//     rightsound.src = randomrightaudio;
//     rightsound.volume = 1;

//     rightsound.currentTime = 0;
//     rightsound.play();

//     console.log(randomrightaudio);
//   }
// }

// function stopRightSound() {
//   rightsound.pause();
// }

// // -----------------------------

// var wrongsound; // Actual audio-file, which is gonna be played
// var wrongaudio; // Audio-files / -sources [Array]
// var randomwrongaudio; // Actual audio-source, which is gonna be played

// wrongaudio = [
//   'audio/wrong1.mp3',
//   'audio/wrong2.mp3',
//   'audio/wrong3.mp3',
//   'audio/wrong4.mp3',
//   'audio/wrong5.mp3'
// ]

// function playWrongSound() {
//   if (sound == true) {
//     randomwrongaudio = wrongaudio[Math.floor(Math.random() * wrongaudio.length)];
//     wrongsound = document.createElement('audio');
//     wrongsound.src = randomwrongaudio;
//     wrongsound.volume = 1;

//     wrongsound.currentTime = 0;
//     wrongsound.play();

//     console.log(randomwrongaudio);
//   }
// }

// function stopWrongSound() {
//   wrongsound.pause();
// }
