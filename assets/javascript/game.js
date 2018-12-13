$(document).ready(function() {
//Variable declaration
var counter = 0;
var randomNum = Math.floor(Math.random() * 101) + 19;
var wins = 0;
var losses = 0;
var numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
var pictureOptions = ["assets/images/Blue.jpg", "assets/images/Green.jpg", "assets/images/Purple.jpg", "assets/images/Pink.png"]


//for loop to create my images with random values assigned to each

for (var i = 0; i<numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image gem");
    imageCrystal.attr("src", pictureOptions[i]);
    imageCrystal.attr("data-crystalValue", numberOptions[i]);
    imageCrystal.attr("data-key", i);
    $("#crystals").append(imageCrystal);
}

//random number replaces text in randomNumber id
$("#randomNumber").text(randomNum);


//on crystal-image class click, counter adds random number
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    counter += crystalValue;
    $("#score").text(" " + counter);
    
    if (counter === randomNum) {

        // wins =+ 1;
        // $("#win").text(wins);
        results();
    } else if (counter > randomNum) {
        // losses =+ 1;
        // $("#loss").text(losses);
        results();
    }
});

function results () {
    
    if (counter === randomNum) {
        randomNum = Math.floor(Math.random() * 101) + 19;
        numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
        for (var i = 0; i<numberOptions.length; i++) {
            var selector = ".gem[data-key="+i+"]";
            var $gem = $(selector);
            console.log($gem);
            $gem.attr("data-crystalValue", numberOptions[i]);
        }
        wins++;
        $("#win").text(wins);
        counter = 0;
        $("#randomNumber").text(randomNum);
        $("#score").text(" " + counter);

    } else if (counter > randomNum) {
        randomNum = Math.floor(Math.random() * 101) + 19;
        numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
        for (i = 0; i<numberOptions.length; i++) {
            var selector = ".gem[data-key="+i+"]";
            var $gem = $(selector);
            $gem.attr("data-crystalValue", numberOptions[i]);
        }
        losses++;
        $("#loss").text(losses);
        counter = 0;
        $("#randomNumber").text(randomNum);
        $("#score").text(" " + counter);
    }
}



});