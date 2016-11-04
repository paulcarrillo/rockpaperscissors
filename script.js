$(document).ready(function() {
  var $btn = $("button"),
    $resultBox = $('.result-item'),
    $user = $('#user'),
    $computer = $('#computer'),
    win = 'win',
    tie = 'tie',
    lose = 'lose',
    total = 'win lose tie';

  // Adds class if the user is a winner
  function winner() {
    $user.addClass(win);
    $computer.addClass(lose);
  }

  function tied() {
    $resultBox.addClass(tie);
  }

  // Adds class if the user is a loser
  function loser() {
    $user.addClass(lose);
    $computer.addClass(win);
  }

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

    // Checks if the results are tied, replace images with corresponding.
    if (user === comp) {
      tied();
      if (comp === "Rock") {
        $resultBox.find('img').attr('src', 'images/Rock.png');
      } else if (comp === "Paper") {
        $resultBox.find('img').attr('src', 'images/Paper.png');
      } else {
        $resultBox.find('img').attr('src', 'images/Scissors.png');
      }

      // Checks if the user inputs Rock, replace images with corresponding.
    } else if (user === "Rock") {
      $user.find('img').attr('src', 'images/Rock.png');
      if (comp === "Scissors") {
        $computer.find('img').attr('src', 'images/Scissors.png');
        winner();
      } else if (comp === "Paper") {
        $computer.find('img').attr('src', 'images/Paper.png');
        loser();
      }

      // Checks if the user inputs Paper, replace images with corresponding.
    } else if (user === "Paper") {
      $user.find('img').attr('src', 'images/Paper.png');
      if (comp === "Rock") {
        $computer.find('img').attr('src', 'images/Rock.png');
        winner();
      } else {
        $computer.find('img').attr('src', 'images/Scissors.png');
        loser();
      }

      // Checks if the user inputs Scissors, replace images with corresponding.
    } else if (user === "Scissors") {
      $user.find('img').attr('src', 'images/Scissors.png');
      if (comp === "Paper") {
        $computer.find('img').attr('src', 'images/Paper.png');
        winner();
      } else {
        $computer.find('img').attr('src', 'images/Rock.png');
        loser();
      }
    }
  }

  // User btn click, and run result function passing user's choice and computers.
  $btn.click(function() {
    var userChoice = $(this).text();
    $resultBox.removeClass(total);
    result(userChoice, compChoice());
  });
});
