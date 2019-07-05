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
    const maxComputerNumber = 121;
    const minCompuetNumber = 19;
    const maxRandomNumber = 13;
    const minRandomNumber = 1;

    var computerNumberToGuess;
    var crystal1Number;
    var crystal2Number;
    var crystal3Number;
    var crystal4Number;

    $('#wins').html(wins);
    $('#losses').html(losses);

    reset();

    // get a random number between max and min.
    function getRandomNumber(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    // intitalize variables and start game.    
    function reset() {
        computerNumberToGuess = getRandomNumber(maxComputerNumber, minCompuetNumber);
        // console.log('RANDOM-COMPUTER ' + computerNumberToGuess);
        $('#random-number').html(computerNumberToGuess);
        crystal1Number = getRandomNumber(maxRandomNumber, minRandomNumber);
        console.log('PURPLE ' + crystal1Number);
        crystal2Number = getRandomNumber(maxRandomNumber, minRandomNumber);
        // console.log('YELLOW ' + randomNumberGenerator2);
        crystal3Number = getRandomNumber(maxRandomNumber, minRandomNumber);
        // console.log('RED ' + randomNumberGenerator3);
        crystal4Number = getRandomNumber(maxRandomNumber, minRandomNumber);
        // console.log('GREEN ' + randomNumberGenerator4);
        score = 0;
        $("#scoreCard").html(score);
        $('#random-number').html(computerNumberToGuess);
    }

    //created a fucntion to call when ever player wins (win)
    function win() {
        alert("You Won! " + score + " Was your score.");
        wins++;
        $("#wins").html(wins);
        reset();
    }

    //created a function to call whenever a player loses (loser)
    function loser() {
        alert("You lost! " + score + " Was your score." + " You needed to match " + computerNumberToGuess + " to win.");
        losses++;
        $("#losses").html(losses);
        reset();
    }
    //fuction to check for score
    /**
     * 
     * @param {*} crystalNumber : assumes the value of each crystal random number. 
     * Changes depending on who the caller is. 
     */
    function checkStatus(crystalNumber) {
        score = score + crystalNumber;
        console.log("New score= " + score);
        $("#scoreCard").html(score);
        if (score == computerNumberToGuess) {
            win();
        }
        else if (score > computerNumberToGuess) {
            loser();
        }

    }

    $("#start").on('click', function () {
        reset();
    });

    //console.log to see if random number are generating for all four crystals everytime I click start.
    $('.purple').on('click', function () {
        checkStatus(crystal1Number);

    })

    $('.yellow').on('click', function () {
        checkStatus(crystal2Number);
    })

    $('.red').on('click', function () {
        checkStatus(crystal3Number);

    })

    $('.green').on('click', function () {
        checkStatus(crystal4Number);
    })
})



