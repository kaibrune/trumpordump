var points = 0;
var trumphead = true;
var score = 0;

function countRightAnswers() {
  points = points + 100;
  console.log(points);
  score = '+100';
}

function countWrongAnswers() {
  points = points - 50;
  console.log(points);
    score = '-50';
}

function countTrumpHead() {
  if (trumphead == true) {
    points = points + 1000000;
    console.log(points);
    score = '+1000000';
    $('#totalscore').addClass('animated fadeOut');
    $('#score').html(score).addClass('animated fadeInUp');
    $('#totalscore').html(points).addClass('animated fadeInUp');
    setTimeout(() => {
      $('#score').removeClass('animated fadeInUp');
      $('#totalscore').removeClass('animated fadeInUp');
      $('#score').addClass('animated fadeOutDown');

  }, 2000);
  } else {
    // Trump saying "No... Don't do this again!"
    console.log(points);
  }
  trumphead = false;
}





