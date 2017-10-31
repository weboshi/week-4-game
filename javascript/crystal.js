
        $(document).ready(function() {

            var diamond1;
            var diamond2;
            var diamond3;
            var diamond4;
            var userScore = 0;
            var mainTarget;
            var wins = 0;
            var losses = 0;

            function randomGenerate() {
                return Math.floor(Math.random() * 12) + 1;
                
            }
            //Reset game function
            reset = function() {
                mainTarget = Math.floor(Math.random() * 120) + 19;
                diamond1 = randomGenerate();
                diamond2 = randomGenerate();
                diamond3 = randomGenerate();
                diamond4 = randomGenerate();
                $("#score").html("Score:");
            }

            // Gameover function that resets game when score is met or passed 
            function gameOver() {
                if (userScore == mainTarget) {
                    wins = wins + 1;
                    $("#wins").text("Wins: " + wins);
                    alert("You win!");
                    reset();
                    
                    
                }
                if (userScore > mainTarget) {
                    losses = losses +1;
                    $("#losses").text("Losses: " + losses);
                    alert("You lose!");
                    reset();

                    
                }
            }


            //Assigning random numbers to variables
            mainTarget = Math.floor(Math.random() * 120) + 19;
            diamond1 = randomGenerate();
            diamond2 = randomGenerate();
            diamond3 = randomGenerate();
            diamond4 = randomGenerate();

            //Shows Target Number
            $("#maintarget").text("Target Number: " + mainTarget);


            //Click functions

            $("#diamond1").on("click", function() {

                userScore = userScore + diamond1;
                $("#score").html("Score:" + userScore);
                gameOver();
                
            })

            $("#diamond2").on("click", function() {

                userScore = userScore + diamond2;
                $("#score").html("Score:" + userScore);
                gameOver();
      
            })

            $("#diamond3").on("click", function() {

                userScore = userScore + diamond3;
                $("#score").html("Score:" + userScore);
                gameOver();
            })

            $("#diamond4").on("click", function() {

                userScore = userScore + diamond4;
                $("#score").html("Score:" + userScore);
                gameOver();
     


            })
            })
 