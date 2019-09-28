var colors = ["blue", "black", "green", "red", "white", "yellow"];
colors = colors.sort();
var guess_input;
var finished = false;
var guesses =1;
var target;
var guess_input_text;

function do_game() {
    var random_number = Math.random() * colors.length;
    var random_number_interger = Math.floor(random_number);
    target = colors[random_number_interger];

        while(!finished) {
            guess_input_text = prompt("Guess what color I am thinking: " + colors.join());
            guess_input = (guess_input_text)
            finished = check_game();
        }
}
function check_game() { 
      if(colors.indexOf(guess_input) == -1) {
        alert("the color is not in the list");
        return false;
      }
      if (guess_input > target) {
      alert("Sorry, your guess is not correct! \n\n Hint: Your color is alphabetically higher than mine.\n\n Please try again.");
      guesses += 1;
      return false;
      } 
      if (guess_input < target) {
        alert("Sorry, your guess is not correct!\n\n Hint: Your color is alphabetically lower than mine.\n\n Please try again.");
        guesses += 1;
        return false;
      } else if(guess_input ===target) {
        alert("Congratulations! You have guessed the color!\n\n It took you " + guesses + " guesses to finish the game!\n\n You can see the color in the background.")
        document.body.style.backgroundColor = guess_input;
        return true;

      }

    }     
        
  