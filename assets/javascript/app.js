$(document).ready(function() {
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Game</a></p>" + "<img class='center-block img-start'width = '200' src='https://media.giphy.com/media/l3UcqjMBeQzXaoqGI/giphy.gif'>";
        $(".mainArea").html(startScreen);
    }
    initialScreen();
    
    $("body").on("click", ".start-button", function(event){
        generateHTML();
        timerWrapper();
    }); 

    $("body").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            clearInterval(theClock);
            generateWin();
        }
        else {
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); 
    
    }); 
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong'width = '370' src='https://media.giphy.com/media/3ornjXizVZDbngmjRK/giphy-downsized.gif'>";
      
        letsWait();  
        function letsWait() {
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 3000);
        }
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];

        letsWait();  
        function letsWait() {
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 5000);
        }
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong'width = '370' src='https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy-downsized.gif'>";

        letsWait(); 
        function letsWait() {
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 3000);
        }
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Done! Here is your score:" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Game!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }  
    var startScreen;
    var gameHTML;
    var counter = 30;

    var questionArray = ["What is the smallest country in the world?", "Which is the biggest city in the world?", "Which was the happiest country in the world in 2017?", "What is the highest mountain on Earth?", "What is the capital of China?", "What is the longest river in the United States?", "What is the capital of Colombia?", "What is the The world’s saltiest body of water?"];
    var answerArray = [["Andorra", "Vatican", "Monaco", "Malta"], ["Tokio", "San Paolo", "New York","Moscow"], ["Denmark", "USA", "India", "Norway"], ["Lhotse", "K2", "Mount Everest", "Makalu"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Missouri River", "Mississippi River", "Yukon River", "Rio Grande"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Dead Sea", "Great Salt Lake","Lake Baikal","Don Juan"]];
    var imageArray = ["<img class='center-block img-right' width = '370' src='https://media.giphy.com/media/4LwE9QnEakfcs/giphy.gif'>", "<img class='center-block img-right' width = '370' src='https://media.giphy.com/media/K4ofgLuTbQ8Uw/giphy-downsized.gif'>", "<img class='center-block img-right' width = '370' src='https://media.giphy.com/media/11sBLVxNs7v6WA/giphy-downsized.gif'>", "<img class='center-block img-right' width = '370' src='https://media.giphy.com/media/grxBXF3i3NyjS/giphy.gif'>", "<img class='center-block img-right'width = '370' src='https://media.giphy.com/media/3o6nUQlg4TSA9Hi7ss/giphy-downsized.gif'>", "<img class='center-block img-right'width = '370' src='https://media.giphy.com/media/vBzDAe90oDE3u/giphy-tumblr.gif'>", "<img class='center-block img-right'width = '370' src='https://media.giphy.com/media/kiUVzHKCx0amQ/giphy-downsized.gif'>", "<img class='center-block img-right'width = '370' height = '450' src='https://media.giphy.com/media/NT3YYTxuyxQWc/giphy-downsized.gif'>"];

    var correctAnswers = ["B. Vatican", "A. Tokio", "D. Norway", "C. Mount Everest", "D. Beijing", "A. Missouri River", "B. Bogota", "D. Don Juan"];
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    