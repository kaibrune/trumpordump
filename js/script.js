$.getScript('js/sound.js');
$.getScript('js/points.js');

var sound = true;
$(function (){

    $('#right').hide();
    $('#wrong').hide();
    $('#right2').hide();
    $('#wrong2').hide();
    $('.imprint').hide();
    $('.imprint_text').hide();

    $('#right').removeClass('hide');
    $('#wrong').removeClass('hide');
    $('#right2').removeClass('hide');
    $('#wrong2').removeClass('hide');
    $('#imprint').removeClass('hide');
    $('#imprint_text').removeClass('hide');
/*     $('#score').hide(); */

    var $tweetcontainer= $('#inhalt');//variabel für den div mit der id inhalt wird asynchron mit dem dom geladen

    var dates = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dez."];
    var date2 = dates[Math.floor(Math.random() * dates.length)];
    var years = ["2017", "2019" ,"2018", "2016", "2015", "2014"];
    var year = years[Math.floor(Math.random() * years.length)];
    var randomheart1 = Math.floor(Math.random()*999) + 1;
    var randomheart2 = Math.floor(Math.random()*9) + 1;
    var randomcomment1 = Math.floor(Math.random()*90) + 1;
    var randomcomment2 = Math.floor(Math.random()*9) + 1;
    var clock1 = Math.floor(Math.random() * 24) + 1;
    var clock2a = Math.floor(Math.random() * 15) + 1;
    if (clock2a < 10) {
      var clock2 = "0" + clock2a;
    } else {
      var clock2 = clock2a;
    }
    var date1 = Math.floor(Math.random()*12) + 1;
    
    
    $('#heart').html(randomheart1 +','+ randomheart2 +'K');
    $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
    $('#clock').html(clock1 +':'+ clock2);
    $('#date').html(date1 +' '+ date2 +' '+ year);

    $( "#infoimg" ).click(function() { $('.imprint').fadeIn(1500); $('.imprint_text').delay(1700).fadeIn(600); $('body').css('overflow','hidden')});    
    $( "#imprint" ).click(function() { $('.imprint_text').fadeOut(600); $('.imprint').delay(600).fadeOut(1500); $('body').css('overflow','visible') });
    
    $('#imprint').on("mousemove", function(evt) {
        $('#closer').css({left: evt.pageX, top: evt.pageY});
      });

    $( "#speaker" ).click(function() {  if(sound == true){sound = false;} else if(sound == false){sound = true;}; $("#info").slideUp();});
    $( ".profil_img" ).click(function() { countTrumpHead();});

    var $mydiv = $('.tweet_text');
    $mydiv.css('height', $mydiv.height() );

    function resizeDiv(){
        $mydiv.wrapInner('<div/>');
        var newheight = $('div:first',$mydiv).height();
        $mydiv.animate( {height: newheight},600 );
    }
    

        $.ajax({ // startet ajax
        type: 'GET', //modus
        url: 'tweets.json', //json datei
        success: function(data) { //wenn verfügbar dann
            var r = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0); //random object generieren für den ersten wurf
            $tweetcontainer.html('<p>'+ data[r].text +'</p>'), //ersten wurf in container schreiben
            resizeDiv();
            status = parseInt(data[r].status); //status abfragen und in int convertieren
            console.log(status); //status ausgeben
            setTimeout(() => {
                $('.loader').fadeOut();
            }, 500);

            $( "#yes" ).click(function() { //wenn yes geclickt dann
            if (status == 1) { //und status 1 ist
                var r = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0); //random object für den nächsten wurf generieren
                status = parseInt(data[r].status);//status abfragen für nächsten wurf
                var year = years[Math.floor(Math.random() * years.length)];
                var date2 = dates[Math.floor(Math.random() * dates.length)];
                var randomheart1 = Math.floor(Math.random()*999) + 1;
                var randomheart2 = Math.floor(Math.random()*9) + 1;
                var randomcomment1 = Math.floor(Math.random()*90) + 1;
                var randomcomment2 = Math.floor(Math.random()*9) + 1;
                var clock1 = Math.floor(Math.random()*24) + 1;
                var clock2 = Math.floor(Math.random()*59) + 1;
                var date1 = Math.floor(Math.random()*12) + 1;
                console.log('Right Answer!');//richtige antwort ausgeben
                console.log(status);//status für nächsten wurf ausgeben
/*                 $tweetcontainer.css('color', 'green');//schrift auf grün färben zu veranschaulichung */
                $('#right').slideToggle({direction: "up"}, 2500);
                $('#right').delay(2000).slideToggle({direction: "down"}, 2500);
                playRightSound();
                countRightAnswers();
                $('#totalscore').addClass('animated fadeOut');
                setTimeout(() => {
                $('#score').removeClass('animated fadeOutDown');
                $('#score').html(score).addClass('animated fadeInUp');
                $('#totalscore').html(points).addClass('animated fadeInUp');
                }, 700);

                setTimeout(() => {//timeout setzen für 1s
                $tweetcontainer.css('color', 'black');  //farbe wieder auf schwarz ändern
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); //neuen wurf in container schreiben
                resizeDiv();
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
                setTimeout(() => {
                    $('#score').removeClass('animated fadeInUp');
                    $('#totalscore').removeClass('animated fadeInUp');
                    $('#score').addClass('animated fadeOutDown');
                    $('#totalscore').removeClass('animated fadeOut');

                }, 2000);
            } else if (status == 0) {//gleiches spiel nur anders rum
                var r = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0);
                status = parseInt(data[r].status);
                var year = years[Math.floor(Math.random() * years.length)];
                var date2 = dates[Math.floor(Math.random() * dates.length)];
                var randomheart1 = Math.floor(Math.random()*999) + 1;
                var randomheart2 = Math.floor(Math.random()*9) + 1;
                var randomcomment1 = Math.floor(Math.random()*90) + 1;
                var randomcomment2 = Math.floor(Math.random()*9) + 1;
                var clock1 = Math.floor(Math.random()*24) + 1;
                var clock2 = Math.floor(Math.random()*59) + 1;
                var date1 = Math.floor(Math.random()*12) + 1;
                console.log('Wrong Answer!');
                console.log(status);
/*                 $tweetcontainer.css('color', 'red'); */
                $('#wrong').slideToggle({direction: "up"}, 2500);
                $('#wrong').delay(2000).slideToggle({direction: "down"}, 2500);
                playWrongSound();
                countWrongAnswers();
                $('#totalscore').addClass('animated fadeOut');
                setTimeout(() => {
                $('#score').removeClass('animated fadeOutDown');
                $('#score').html(score).addClass('animated fadeInUp');
                $('#totalscore').html(points).addClass('animated fadeInUp');
                }, 700);
                setTimeout(() => {
                $tweetcontainer.css('color', 'black');  
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); 
                resizeDiv();
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
                setTimeout(() => {
                    $('#score').removeClass('animated fadeInUp');
                    $('#totalscore').removeClass('animated fadeInUp');
                    $('#score').addClass('animated fadeOutDown');
                    $('#totalscore').removeClass('animated fadeOut');

                }, 2000);
            } else {
                console.log("Error!");
            }
            })
            
            $( "#no" ).click(function() {//falls no gecklickt wird dann
            if (status == 0) {
                var r = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0);
                status = parseInt(data[r].status);
                var year = years[Math.floor(Math.random() * years.length)];
                var date2 = dates[Math.floor(Math.random() * dates.length)];
                var randomheart1 = Math.floor(Math.random()*999) + 1;
                var randomheart2 = Math.floor(Math.random()*9) + 1;
                var randomcomment1 = Math.floor(Math.random()*90) + 1;
                var randomcomment2 = Math.floor(Math.random()*9) + 1;
                var clock1 = Math.floor(Math.random()*24) + 1;
                var clock2 = Math.floor(Math.random()*59) + 1;
                var date1 = Math.floor(Math.random()*12) + 1;
                console.log('Right Answer!');
                console.log(status);
/*                 $tweetcontainer.css('color', 'green'); */
                $('#right2').slideToggle({direction: "up"}, 2500);
                $('#right2').delay(2000).slideToggle({direction: "down"}, 2500);
                playRightSound();
                countRightAnswers();
                $('#totalscore').addClass('animated fadeOut');
                setTimeout(() => {
                $('#score').removeClass('animated fadeOutDown');
                $('#score').html(score).addClass('animated fadeInUp');
                $('#totalscore').html(points).addClass('animated fadeInUp');
                }, 700);
                setTimeout(() => {
/*                 $tweetcontainer.css('color', 'black');   */
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); 
                resizeDiv();
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
                setTimeout(() => {
                    $('#score').removeClass('animated fadeInUp');
                    $('#totalscore').removeClass('animated fadeInUp');
                    $('#score').addClass('animated fadeOutDown');
                    $('#totalscore').removeClass('animated fadeOut');

                }, 2000);
            } else if (status == 1) {
                var r = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0);
                status = parseInt(data[r].status);
                var year = years[Math.floor(Math.random() * years.length)];
                var date2 = dates[Math.floor(Math.random() * dates.length)];
                var randomheart1 = Math.floor(Math.random()*999) + 1;
                var randomheart2 = Math.floor(Math.random()*9) + 1;
                var randomcomment1 = Math.floor(Math.random()*90) + 1;
                var randomcomment2 = Math.floor(Math.random()*9) + 1;
                var clock1 = Math.floor(Math.random()*24) + 1;
                var clock2 = Math.floor(Math.random()*59) + 1;
                var date1 = Math.floor(Math.random()*12) + 1;
                console.log('Wrong Answer!');
                console.log(status);
/*                 $tweetcontainer.css('color', 'red'); */
                $('#wrong2').slideToggle({direction: "up"}, 2500);
                $('#wrong2').delay(2000).slideToggle({direction: "down"}, 2500);
                playWrongSound();
                countWrongAnswers();
                $('#totalscore').addClass('animated fadeOut');
                setTimeout(() => {
                $('#score').removeClass('animated fadeOutDown');
                $('#score').html(score).addClass('animated fadeInUp');
                $('#totalscore').html(points).addClass('animated fadeInUp');
                }, 700);
                setTimeout(() => {
                $tweetcontainer.css('color', 'black');  
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); 
                resizeDiv();
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
                setTimeout(() => {
                    $('#score').removeClass('animated fadeInUp');
                    $('#totalscore').removeClass('animated fadeInUp');
                    $('#score').addClass('animated fadeOutDown');
                    $('#totalscore').removeClass('animated fadeOut');

                }, 2000);
            } else {
                console.log("Error!");
            }
            })
            
        },
        error: function (){//falls es einen error gibt beim laden der json
            alert('error loading content')
        }
    });
    });




