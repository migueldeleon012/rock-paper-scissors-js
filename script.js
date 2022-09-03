const moveSet = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => moveSet[Math.floor(Math.random() * moveSet.length)];

const playerPlay = () => {
  let playerMove = prompt('type: rock, paper, scissors.').toLowerCase();
  //checks if there is a valid moves
  while (!moveSet.some((move) => move === playerMove)) {
    playerMove = prompt(
      'wrong spelling: please enter rock paper scissors'
    ).toLowerCase();
  }
  return playerMove;
};

const play = (playerSelection, computerSelection) => {
  // //get the first letter of both computer and player
  let combinationMove = playerSelection[0] + computerSelection[0];
  //all possibilities
  switch (combinationMove) {
    case 'rs':
    case 'pr':
    case 'sp':
      playerScore++;
      return `you win!\n your choice: ${playerSelection} \n computer's choice: ${computerSelection} \n your score: ${playerScore} \n computer score: ${computerScore}`;
    case 'sr':
    case 'rp':
    case 'ps':
      computerScore++;
      return `you lose! \n your choice: ${playerSelection} \n computer's choice: ${computerSelection} \n your score: ${playerScore} \n computer score: ${computerScore}`;
    default:
      return `draw \n your choice: ${playerSelection} \n computer's choice: ${computerSelection} \n your score: ${playerScore} \n computer score: ${computerScore}`;
  }
};

const getGame = () => {
  let playerSelection;
  let computerSelection;
  for (let i = 0; i < 5; i++) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(play(playerSelection, computerSelection));
  }
  computerScore > playerScore
    ? console.log(
        `you lose. score is: player ${playerScore} | computer: ${computerScore}`
      )
    : playerScore > computerScore
    ? console.log(
        `you win!. score is: player ${playerScore} | computer: ${computerScore}`
      )
    : console.log(
        `draw. score is: player ${playerScore} | computer: ${computerScore}`
      );
};

getGame();
