const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Starts the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //computer options
    const computerOptions = ["rock", "scissors", "paper"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
          //Call compareHands
          compareHands(this.textContent, computerChoice);
          //Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector(".winner");
    //Check for tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //Inner functions
  startGame();
  playMatch();
};

//Starts the game
game();
