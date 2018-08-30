$.getScript('js/sound.js');

var sound = true;
$(function (){

    $('#right').hide();
    $('#wrong').hide();
    $('#right2').hide();
    $('#wrong2').hide();
    $('#info').hide();

    var $tweetcontainer= $('#inhalt');//variabel für den div mit der id inhalt wird asynchron mit dem dom geladen

    var dates = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dez."];
    var date2 = dates[Math.floor(Math.random() * dates.length)];
    var years = ["2017", "2018", "2016"];
    var year = years[Math.floor(Math.random() * years.length)];
    var randomheart1 = Math.floor(Math.random()*999) + 1;
    var randomheart2 = Math.floor(Math.random()*9) + 1;
    var randomcomment1 = Math.floor(Math.random()*90) + 1;
    var randomcomment2 = Math.floor(Math.random()*9) + 1;
    var clock1 = Math.floor(Math.random()*24) + 1;
    var clock2 = Math.floor(Math.random()*15) + 1;
    if (clock2 < 10) {
      clock2 = "0" + clock2.toString();
    }
    var date1 = Math.floor(Math.random()*12) + 1;
    
    $('#heart').html(randomheart1 +','+ randomheart2 +'K');
    $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
    $('#clock').html(clock1 +':'+ clock2);
    $('#date').html(date1 +' '+ date2 +' '+ year);

    $( "#infoimg" ).click(function() { $('#info').slideToggle({direction: "up"}, 4000);});
    $( "#exit" ).click(function() { $('#info').slideToggle({direction: "down"}, 4000);});

    $( "#speaker" ).click(function() { sound = false; if (sound == false) { sound=true;} });

        $.ajax({ // startet ajax
        type: 'GET', //modus
        url: 'tweets.json', //json datei
        success: function(data) { //wenn verfügbar dann
            var r = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0); //random object generieren für den ersten wurf
            $tweetcontainer.html('<p>'+ data[r].text +'</p>'), //ersten wurf in container schreiben
            status = parseInt(data[r].status); //status abfragen und in int convertieren
            console.log(status); //status ausgeben

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
                $('#right').slideToggle({direction: "up"}, 4000);
                $('#right').delay(2500).slideToggle({direction: "down"}, 4000);
                playRightSound();
                setTimeout(() => {//timeout setzen für 1s
                $tweetcontainer.css('color', 'black');  //farbe wieder auf schwarz ändern
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); //neuen wurf in container schreiben
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
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
                $('#wrong').slideToggle({direction: "up"}, 4000);
                $('#wrong').delay(2500).slideToggle({direction: "down"}, 4000);
                playWrongSound();
                setTimeout(() => {
                $tweetcontainer.css('color', 'black');  
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); 
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
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
                $('#right2').slideToggle({direction: "up"}, 4000);
                $('#right2').delay(2500).slideToggle({direction: "down"}, 4000);
                playRightSound();
                setTimeout(() => {
/*                 $tweetcontainer.css('color', 'black');   */
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); 
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
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
                $('#wrong2').slideToggle({direction: "up"}, 4000);
                $('#wrong2').delay(2500).slideToggle({direction: "down"}, 4000);
                playWrongSound();
                setTimeout(() => {
                $tweetcontainer.css('color', 'black');  
                $tweetcontainer.html('<p>'+ data[r].text +'</p>'); 
                $('#heart').html(randomheart1 +','+ randomheart2+'K');
                $('#comment').html(randomcomment1 +','+ randomcomment2 +'K');
                $('#clock').html(clock1 +':'+ clock2);
                $('#date').html(date1 +' '+ date2 +' '+ year);
                }, 1000);
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


