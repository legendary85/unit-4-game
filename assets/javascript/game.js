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
$(document).ready(function() {
    // console.log( "ready!" );


var wins = 0;
var losses= 0;
var randomNumber = 0;
var score = 0;



$("#start").on('click',function(){
    // alert("test");
// //random number generator that will be displayed for player to match.
var computerNumberToGuess = Math.floor(Math.random() * 88) + 20;
//console.log to see if the random numbers are being generated everytime I click start.
console.log(computerNumberToGuess);
$( "#random-number" ).html(computerNumberToGuess);
// $('#random-number').text(computerNumberToGuess);

// //random number generator for each crystal to generate and hide until clicked.
var randomNumberGenerator1 = Math.floor(Math.random() * 12) + 1;
var randomNumberGenerator2 = Math.floor(Math.random() * 12) + 1;
var randomNumberGenerator3 = Math.floor(Math.random() * 12) + 1;
var randomNumberGenerator4 = Math.floor(Math.random() * 12) + 1;


//console.log to see if random number are generating for all four crystals everytime I click start.

$('.purple').on('click',function(){
    randomNumberGenerator1 += randomNumberGenerator1;
    alert('Your new score is ' + randomNumberGenerator1);
    $( "#scoreCard" ).html(randomNumberGenerator1);
    // console.log(randomNumberGenerator1);
});


$('.yellow').on('click',function(){
    randomNumberGenerator2 += randomNumberGenerator2;
    alert('Your new score is ' + randomNumberGenerator2);
    $( "#scoreCard" ).html(randomNumberGenerator2);
    // console.log(randomNumberGenerator2);
    
});

$('.red').on('click',function(){
    randomNumberGenerator3 += randomNumberGenerator3;
    alert('Your new score is ' + randomNumberGenerator3);
    $( "#scoreCard" ).html(randomNumberGenerator3);
    // console.log(randomNumberGenerator3);
    
});

$('.green').on('click',function(){
    randomNumberGenerator4 += randomNumberGenerator4;
    alert('Your new score is ' + randomNumberGenerator4);
    $( "#scoreCard" ).html(randomNumberGenerator2);
    // console.log(randomNumberGenerator4);
    
});

// // document.getElementById("playerScore").innerHTML= score;


        // var numberGenerator = function(){
            // randomNumber=computerNumberToGuess;
//             console.log(computerNumberToGuess);
            

            
            
//         }
});
    });
    



