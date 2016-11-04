$(document).ready(function() {
  var $btn = $("button");

  // Function for the computer choice, returns value on function call
  function compChoice() {
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
      computerChoice = "Rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "Paper";
    } else {
      computerChoice = "Scissors";
    }

    return computerChoice;
  }

  // Rock Paper Scissors logic
  function result(user, comp) {
    console.log(user + '==' + comp);

    if (user === comp) {
      console.log('tie');
      return false;
    } else if (user === "Rock") {
      if (comp === "Scissors") {
        console.log("Rock beats Scissors");
      } else {
        console.log("Rock loses Paper");
      }
    } else if (user === "Paper") {
      if (comp === "Rock") {
        console.log("Paper beats Rock");
      } else {
        console.log("Paper loses Scissors");
      }
    } else if (user === "Scissors") {
      if (comp === "Paper") {
        console.log("Scissors beats Paper");
      } else {
        console.log("Scissors loses Rock");
      }
    }
  }

  // User btn click, and run result function passing user's choice and computers.
  $btn.click(function() {
    var userChoice = $(this).text();

    result(userChoice, compChoice());
  });
});
