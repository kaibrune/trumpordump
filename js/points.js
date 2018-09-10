var points = 0;
var trumphead = true;

function countRightAnswers() {
  points = points + 100;
  console.log(points);
}

function countWrongAnswers() {
  points = points - 50;
  console.log(points);
}

function countTrumpHead() {
  if (trumphead == true) {
    points = points + 1000000;
    console.log(points);
  } else {
    // Trump saying "No... Don't do this again!"
    console.log(points);
  }
  trumphead = false;
}