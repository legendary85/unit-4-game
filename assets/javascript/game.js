/*
At start of game a randomly generated number (19-120) will be displayed .

There will be 4 crystals will be assigned random numbers (1-12) that are hidden.

When the crystals a clicked number will be displayed in a "your number box".

As the crystals are clicked to corresponding number will be added the the previous
selected number.

If total is equal to the randomly generated number, user wins.

Number of wins will be dispalyed in the wins area.

Game resets and new numbers are randomly generated for both the 
computer display and crystals.

If total is not equal to the randomly generated number, user loses.

Number of losses will be displayed in the losses area.

Game resets and new numbers are randomly generated for both the 
computer display and crystals.


*/

// alert("Welcome to Crystal Collector, Enjoy!!!");
$(document).ready(function () {
    // console.log( "ready!" );

    // global variables set to recall later
    var wins = 0;
    var losses = 0;
    var score = 0;

    $('#wins').html(wins);
    $('#losses').html(losses);

// COMMENTED OUT THE START BUTTON AND CODE RAN FINE. NEED TO FIGURE OUT WHATS HAPPENING
// START BUTTON IS CLICKED.

    // $("#start").on('click', function () {
        // alert("test");
        // //random number generator that will be displayed for player to match.
        var computerNumberToGuess = Math.floor(Math.random() * 120) + 19;
        // computerNumberToGuess = parseInt(computerNumberToGuess);
        
        //console.log to see if the random numbers are being generated everytime I click start.
        console.log(computerNumberToGuess);
        // $( "#random-number" ).html(computerNumberToGuess);
        $('#random-number').html(computerNumberToGuess);
        
        // //random number generator for each crystal to generate and hide until clicked.
        var randomNumberGenerator1 = Math.floor(Math.random() * 12) + 1;
        console.log(randomNumberGenerator1);
        var randomNumberGenerator2 = Math.floor(Math.random() * 12) + 1;
        console.log(randomNumberGenerator2);
        var randomNumberGenerator3 = Math.floor(Math.random() * 12) + 1;
        console.log(randomNumberGenerator3);
        var randomNumberGenerator4 = Math.floor(Math.random() * 12) + 1;
        console.log(randomNumberGenerator4);
        
        
        function reset() {
            computerNumberToGuess = Math.floor(Math.random() * 129)+19;
            console.log('RANDOM-COMPUTER ' + computerNumberToGuess);
            $('#random-number').html(computerNumberToGuess);
            randomNumberGenerator1 = Math.floor(Math.random() * 12) + 1;
            console.log('PURPLE ' + randomNumberGenerator1);
             randomNumberGenerator2 = Math.floor(Math.random() * 12) + 1;
            console.log('YELLOW ' + randomNumberGenerator2);
            randomNumberGenerator3 = Math.floor(Math.random() * 12) + 1;
            console.log('RED ' + randomNumberGenerator3);
             randomNumberGenerator4 = Math.floor(Math.random() * 12) + 1;
            console.log('GREEN ' + randomNumberGenerator4);
            score = 0;
            $("#scoreCard").html(score);
        }

        //created a fucntion to call when ever player wins (win)
        function win() {
            alert("You Won! " +  score +" Was your score.");
            wins++;
            $("#wins").html(wins);
            reset();
        }

        //created a function to call whenever a player loses (loser)
        function loser() {
            alert("You lost! " +  score +" Was your score." + " You needed to match " + computerNumberToGuess + " to win.");
            losses++;
            $("#losses").html(losses);
            reset();
        }

        //console.log to see if random number are generating for all four crystals everytime I click start.
        $('.purple').on('click', function () {
            score = score + randomNumberGenerator1;
            console.log("New score= " + score);
            $("#scoreCard").html(score);
            if (score == computerNumberToGuess) {
                win();
            }
            else if (score > computerNumberToGuess) {
                loser();
            }
        })

        $('.yellow').on('click', function () {
            score = score + randomNumberGenerator2;
            console.log("New score= " + score);
            $("#scoreCard").html(score);
            if (score == computerNumberToGuess) {
                win();
            }
            else if (score > computerNumberToGuess) {
                loser();
            }
        })

        $('.red').on('click', function () {
            score = score + randomNumberGenerator3;
            console.log("New score= " + score);
            $("#scoreCard").html(score);
            //set conditional statements
            if (score == computerNumberToGuess) {
                win();
            }
            else if (score > computerNumberToGuess) {
                loser();
            }
        })

        $('.green').on('click', function () {
            score = score + randomNumberGenerator4;
            console.log("New score= " + score);
            $("#scoreCard").html(score);
            //set conditional statements
            if (score == computerNumberToGuess) {
                win();
            }
            else if (score > computerNumberToGuess) {
                loser();
            }
        })
    })

//  });


