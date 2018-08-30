//PURE JS

var randomtrue;
var randomwrong;
var rightsoundcount = 5;
var wrongsoundcount = 5;


// --------------------------------------------------------


var right1 = document.createElement('audio');
var right2 = document.createElement('audio');
var right3 = document.createElement('audio');
var right4 = document.createElement('audio');
var right5 = document.createElement('audio');
right1.src = 'audio/right1.mp3';
right2.src = 'audio/right2.mp3';
right3.src = 'audio/right3.mp3';
right4.src = 'audio/right4.mp3';
right5.src = 'audio/right5.mp3';
right1.volume = 0.5;
right2.volume = 0.5;
right3.volume = 0.5;
right4.volume = 0.5;
right5.volume = 0.5;


function playRight() {
  randomtrue = Math.floor((Math.random() * rightsoundcount) + 1);

  if (randomtrue == 1) {
    playright1();
    console.log("playright1");
  } else if (randomtrue == 2) {
    playright2();
    console.log("playright2");
  } else if (randomtrue == 3) {
    playright3();
    console.log("playright3");
  } else if (randomtrue == 4) {
    playright4();
    console.log("playright4");
  } else if (randomtrue == 5) {
    playright5();
    console.log("playright5");
  }
}

function playright1() {
  right1.currentTime = 0;
  right1.play();
}

function playright2() {
  right2.currentTime = 0;
  right2.play();
}

function playright3() {
  right3.currentTime = 0;
  right3.play();
}

function playright4() {
  right4.currentTime = 0;
  right4.play();
}
function playright5() {
  right5.currentTime = 0;
  right5.play();
}

function stopRight() {
  right1.pause();
  right2.pause();
  right3.pause();
  right4.pause();
  right5.pause();
}


// --------------------------------------------------------


var wrong1 = document.createElement('audio');
var wrong2 = document.createElement('audio');
var wrong3 = document.createElement('audio');
var wrong4 = document.createElement('audio');
var wrong5 = document.createElement('audio');
wrong1.src = 'audio/wrong1.mp3';
wrong2.src = 'audio/wrong2.mp3';
wrong3.src = 'audio/wrong3.mp3';
wrong4.src = 'audio/wrong4.mp3';
wrong5.src = 'audio/wrong5.mp3';
wrong1.volume = 0.5;
wrong2.volume = 0.5;
wrong3.volume = 0.5;
wrong4.volume = 0.5;
wrong5.volume = 0.5;


function playWrong() {
  randomwrong = Math.floor((Math.random() * wrongsoundcount) + 1);

  if (randomwrong == 1) {
    playWrong1();
    console.log("playWrong1");
  } else if (randomwrong == 2) {
    playWrong2();
    console.log("playWrong2");
  } else if (randomwrong == 3) {
    playWrong3();
    console.log("playWrong3");
  } else if (randomwrong == 4) {
    playWrong4();
    console.log("playWrong4");
  } else if (randomwrong == 5) {
    playWrong5();
    console.log("playWrong5");
  }
}

function playWrong1() {
  wrong1.currentTime = 0;
  wrong1.play();
}

function playWrong2() {
  wrong2.currentTime = 0;
  wrong2.play();
}

function playWrong3() {
  wrong3.currentTime = 0;
  wrong3.play();
}

function playWrong4() {
  wrong4.currentTime = 0;
  wrong4.play();
}

function playWrong5() {
  wrong5.currentTime = 0;
  wrong5.play();
}

function stopWrong() {
  wrong1.pause();
  wrong2.pause();
  wrong3.pause();
  wrong4.pause();
  wrong5.pause();
}
