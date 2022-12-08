`
--- Day 2: Rock Paper Scissors ---
The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?

`;

//Outcome

const win = 6;
const draw = 3;
const loose = 0;

//Rock, Paper or Scissors

// rock  // X, A
// paper  // Y, B
// scissors // Z, C

// A > Z || X > C - Rock beats Scissors
// B > X || Y > A - Paper beats Rock
// C > Y || Z > B - Scissors beats Paper

/*

(outcome is 0 extra points for loosing so is not added on)

Loosing Combinations:

A > Z  - points = 3
B > X  - points = 1
C > Y  - points = 2

Winning Combinations:

X > C  - points 1 + 6 (win) = 7
Y > A  - points 2 + 6 (win) = 8
Z > B  - points 3 + 6 (win) = 9

Draw Combinations:

A > X - points 1 + 3 (draw) = 4
B > Y - points 2 + 3 (draw) = 5
C > Z - points 3 + 3 (draw) = 6

Method-
// Store each to values in separate arrays
// Find index of each letter
// Assign score to each letter based on the outcomes listed above 

*/

let score = 0;

function combinationsInSeparateArrays(combos) {
  const combinations_array = combos.split(/\n/);
  combinations_array.splice(0, 1); // removing empty ""
  combinations_array.splice(-1, 1); // removing empty ""
  console.log("combinations_array:", combinations_array);
  combinations_array.forEach((el, index) => {
    let elfUserOne = el[0];
    let humanUserTwo = el[2];
    loosingCombinations(elfUserOne, humanUserTwo);
    winningCombinations(elfUserOne, humanUserTwo);
    drawCombinations(elfUserOne, humanUserTwo);
  });
  console.log("total score:", score);
}

function drawCombinations(elf, human) {
  if (elf == "A" && human == "X") {
    score += 4;
  } else if (elf == "B" && human == "Y") {
    score += 5;
  } else if (elf == "C" && human == "Z") {
    score += 6;
  }
}

function loosingCombinations(elf, human) {
  if (elf == "A" && human == "Z") {
    score += 3;
  } else if (elf == "B" && human == "X") {
    score += 1;
  } else if (elf == "C" && human == "Y") {
    score += 2;
  }
}

function winningCombinations(elf, human) {
  if (elf == "C" && human == "X") {
    score += 7;
  } else if (elf == "A" && human == "Y") {
    score += 8;
  } else if (elf == "B" && human == "Z") {
    score += 9;
  }
}

function getIndex(combo_array) {
  combo_array.forEach((el) => {
    let elfUserOne = el[0];
    let humanUserTwo = elf[2];
  });
}

`
Your puzzle answer was 12156.

The first half of this puzzle is complete! It provides one gold star: *
``
--- Part Two ---
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.
`;

let combinations = `
C Z
C Z
A Y
A X
C Z
C Z
A X
C X
A X
C X
A X
A X
A X
A X
C Y
A X
A X
A Y
C Z
C X
C Z
C Y
B Y
C Y
C X
C X
A Z
C Y
A Z
A Z
B X
A Y
A X
B Y
C X
A X
A X
C Z
C Y
B X
A Y
C Z
C Y
C Z
C Z
A X
C Z
C Y
C X
C Z
A X
C Z
A Y
A X
A X
A X
A X
C X
A X
A X
C X
A X
C Y
C Y
A X
C Z
C Y
A X
C Z
C Y
C Z
C Z
B X
C Z
C X
C X
B Z
A X
A X
C Z
C X
C X
A X
A Y
C X
C Y
A X
C Z
A Z
C Z
A Z
A Z
C X
A X
A X
C Z
C Y
C Z
A X
A X
C X
A X
C X
A X
A Z
A Y
C Y
A Y
C Z
A X
A Y
C X
A Z
C Y
C Z
C Z
A Y
C Z
A Z
C Z
A Z
A Z
A X
C X
A Y
A X
C Z
A X
C Z
C Z
A X
C Z
C X
A Z
A X
A Z
A X
C Z
A X
C X
A X
A X
C X
C Z
C Y
C Z
A Y
C Z
C Z
A X
C X
B X
C X
A X
C Y
C Z
C Z
C Z
A Z
C Y
A X
C X
B X
B X
C Y
C X
A X
C X
C X
A Y
C Z
A X
A X
A X
C Z
A X
C Z
C Y
C Z
C X
A X
C Z
A X
C Z
C X
C X
A X
C Z
C Z
C X
A Y
B X
B Z
A Z
C Z
A X
A X
A X
C X
C X
C Y
C Z
A Y
B Z
A X
C X
C X
C X
C Y
C X
A X
A X
A Z
A X
A X
C Z
C Z
C Z
A X
C X
C X
C Y
A X
C Z
A Z
C X
A X
C X
C Z
A X
A X
C Z
C X
C Y
A X
C Y
C Z
A Z
C X
A X
A X
A X
A Z
C X
C X
A X
A X
B X
C Y
C X
C Z
C Y
A X
C X
C Z
C Y
C Y
C X
C Y
B X
C X
C Y
A X
C Z
C Y
A X
A X
C X
A X
A X
A Z
C X
A Z
C X
C X
C X
C Y
A Z
C Z
A X
B X
C X
A X
A Z
C X
C Z
B X
C X
A X
A Y
A Z
C Z
C Z
C X
A Z
C Z
C Z
C X
C Y
C Z
C Z
C X
A Z
C Z
C X
A X
A X
A X
A Z
A Z
C Z
A X
C X
A X
C X
C Z
C X
C X
A X
C X
B Y
A X
B X
A X
C X
C Z
A X
C X
A X
A X
C Z
C X
C X
C X
C Z
A X
B X
A Z
C X
B Z
C Z
B Z
C Z
A Y
A X
B Y
A X
A X
C Z
C X
A X
B X
C X
B Z
C Z
A X
A X
A X
A X
A X
A X
A X
C Y
A Y
C X
C Z
C X
C Y
C Z
C X
A X
C Z
A X
A Z
C X
C Z
C Y
A X
C X
C Z
A X
A Y
C X
A X
C Y
A Y
C Y
A Z
C Z
A X
C Z
C Z
A X
C Z
A Z
C X
C Z
B X
C X
A X
A Y
A X
C Z
A Y
A Y
C X
B Z
C X
A X
A X
A X
A X
A X
C X
C Z
A Z
A X
C Y
C Z
A X
A Z
B Z
A Z
A X
C Y
C X
C X
C X
B Z
A X
C Y
A X
A X
A X
C Y
A X
B X
C X
C X
C Z
C Z
A X
C Y
A Z
A X
C X
A X
C X
C X
C Z
A X
C Y
C Y
A X
A Z
A Z
A X
C X
A X
C Y
B X
A X
C Y
C X
B X
C Z
A X
A X
C X
C Z
C Z
C X
C Y
C Y
A X
C Z
C X
C Y
C X
A X
A X
A X
B Y
C X
A X
C X
C X
A X
C Z
C Z
C X
B X
A Y
A Y
C Z
C Y
C X
C Y
B Y
A Z
C X
A X
A Z
A Y
C X
A Z
C Z
C Y
C Z
A X
C X
C Z
C X
C X
A X
C Z
A Z
C X
C Y
C X
A X
A Z
C Z
C X
A Z
B Z
C Y
B X
A Y
B X
B Y
A Y
A X
A Z
C X
C X
A X
C X
C Z
C Y
A Z
A X
C Z
A X
A X
A Z
A X
A X
C Z
A X
C X
A X
A X
A Y
C Z
A X
C Z
A Z
A X
A X
A Y
C Z
A Z
A Z
A X
C X
A X
A X
C Z
C X
C X
C X
C Y
C X
A X
B X
B X
C Z
C Z
C Z
C X
B Y
A Y
B X
B X
C X
C X
C X
A X
C Y
A Z
A X
C X
A X
A X
A X
B X
C Y
A X
C Z
A X
C X
A X
C Z
C X
A X
A Z
A X
A X
A X
C Z
A Y
B X
A X
B X
C Z
A X
A X
C Y
C Z
C Z
A X
C X
A X
A X
A X
A X
A X
C X
A X
C Y
C X
B X
A X
C Y
C Z
A X
A X
C X
A Z
A X
A Z
A X
C Z
A X
B X
C X
A X
C X
A X
C Y
C Z
A X
C Z
C Z
C X
B X
C Z
A X
A Z
C X
A X
C X
C Z
C Z
C Y
C Z
A X
C X
C Z
A Z
C Z
A Z
C X
C Z
A X
A X
B X
A Z
B X
C Y
C Z
C X
A X
C Z
C Z
C Z
B X
C X
C X
A Z
A X
C Y
A X
B Z
B X
A X
C Y
B X
C Z
C Y
C Z
A X
C Y
A X
A X
A Z
A X
A X
C X
C Y
C Z
C Z
C Y
B Y
C Z
A X
A X
C X
C X
C X
A X
C Y
A X
A Y
A X
C X
C Y
C Y
B X
A X
C Z
A X
C Z
C X
A X
A Z
C X
C Y
A X
A Z
A Z
C Y
A X
C Z
C Z
A X
A Z
B X
A X
C Y
C X
B Z
C Z
A X
C Y
A X
C Y
A Z
A X
C X
C Y
B X
A X
B X
A X
A X
B Y
A X
A X
C X
A X
C X
A X
A X
C Y
A X
C Z
C Z
A Z
C X
A Z
C Y
C Z
C X
A X
C Z
A X
C Y
A X
A Z
C Y
C X
C X
C Z
B X
A X
A X
A Z
C Z
C X
A X
C X
A Z
A Z
A X
C X
C Z
B Z
C X
C X
A X
A X
A X
C Y
C X
A X
C Z
A X
B Y
A X
A X
C X
B X
A X
C X
B Y
A Z
C X
C X
A X
A X
A X
C Y
C X
A Z
C X
A X
C Z
C Z
C Y
A X
A X
B Z
C Y
C Z
A X
C Z
A X
C Z
B X
A Z
A Z
C X
A X
C Z
C X
A X
A X
C X
C Z
C X
A X
C X
A X
A X
C Z
C X
A X
A X
A X
A X
C Y
A X
C X
C Z
C Y
C Z
C X
C Z
A X
C X
C Z
C Z
C Z
B X
C X
A Z
A Z
A X
C X
C Z
B Z
C Z
C Z
A Y
A Y
C X
A X
A X
A Z
A X
A Y
A Z
A X
A X
C Z
C Z
A Y
A X
B X
A X
A X
C X
A X
A Z
C Z
C X
C Z
C X
A Z
B X
A X
A X
C X
B Y
A X
C Z
A X
A Y
A Z
A X
C Z
A Z
B X
C Z
C Y
A X
C Y
A X
C X
C X
C X
A X
C X
C Z
C Y
A Z
C X
C Y
A X
A X
C Z
A X
C X
C X
A X
A X
A Z
C X
C Z
A Z
A Z
A X
B X
B X
A X
C Z
A Z
C Z
C X
C Z
B X
C X
C X
B Z
A X
A Z
B Z
B Z
C X
A Z
A X
A Y
C X
A X
C Z
A X
C X
A X
C Z
C X
C X
C X
C Z
B Z
A X
A X
A X
C Z
A X
A X
C X
B Z
C X
C X
A X
B Y
C X
C X
C X
A X
C X
A Z
C Y
B Z
A X
C Z
C Z
C Z
C Z
A Y
C Z
A X
A X
C X
C X
A X
C X
A Z
A X
C Z
C X
A X
C Z
C X
C Z
B Z
A X
C Y
C Z
A X
A X
C Y
A Z
C X
C Z
C Z
C Y
C Z
A X
C X
A X
A X
C X
A X
C Z
A X
A Z
A X
C Z
C Z
B X
C Z
A Y
A Z
A X
C Y
C X
C Y
A X
A Z
A X
A X
A X
C X
B X
C X
A Y
A Y
C Z
A X
A X
A Z
C X
A X
A Z
C Z
C Z
C X
C X
A X
A X
C Z
A X
C Z
C Z
B Z
A X
A X
C Z
A X
C Z
C Y
C X
A X
A Z
A X
A X
A X
C Y
C Z
A X
C Y
C Z
C Z
A X
A Z
A X
C Z
C Y
C Z
C Y
A X
C X
A X
A X
A X
C X
A X
A X
C Y
C X
A X
C X
A Z
A X
C Z
C X
B Z
C Z
A X
C Y
C Z
C X
A X
A X
B Y
A X
B X
C X
A X
A X
C X
C Y
A X
A X
A X
C X
C Z
A X
B X
C Y
C Y
A X
C Y
C X
A X
C X
A X
A X
A X
C X
C X
B Z
A X
C X
A X
C Z
A X
C Y
A X
C Z
C Z
C Y
A X
A Z
A X
C X
C Z
A X
C Z
C X
C Z
A X
C Y
A X
C Z
C Y
C X
A X
A Y
B X
A X
A Y
A X
A X
A X
A X
C Z
C Y
B X
A X
C X
A X
C X
A X
A Y
A X
C Z
A Z
C X
A X
A X
A X
C Z
C Z
C Y
C X
A X
C X
C Y
A Z
C X
A X
C Y
C Z
C Z
A X
A X
C Z
C Z
C X
C X
C X
C Z
C Y
C X
B Z
C Z
A X
C Z
A X
A X
C X
C X
C Y
A Y
A X
C X
A X
C X
C X
A X
A X
A Y
C Z
C Y
A X
A X
A X
A X
C X
C Y
A X
A Y
A X
A X
C X
A Z
C Z
C Z
C Z
C Z
A X
C Z
C X
C X
B X
C X
C Z
C X
A Z
C Z
B X
B Z
C Y
A X
B X
A X
A X
A X
C X
C X
A X
C Y
A X
C Y
B Y
C Y
A X
C X
C Y
C Z
C X
A X
A X
C X
B X
C Z
C X
A X
A Z
A X
C Z
C X
B X
A Z
A X
B Z
C Z
A X
C Y
A X
C Z
B X
C X
C X
C Y
A X
A X
A X
C Z
C X
B Z
C Z
B X
B Z
A X
A Z
A X
C X
C X
C Z
C X
C X
B Y
A X
A X
A X
A X
A X
A X
C X
A Z
A Z
C X
C X
A X
B Y
C X
C X
A Z
A X
B X
A X
C X
C Z
C Y
C Z
C Z
B X
C Y
C X
A X
A X
C X
C Y
C Z
A X
C X
A X
B Z
A X
C Y
C X
C X
A X
C Z
C Z
A X
C X
C X
C X
A X
A Z
C X
A X
C Z
A X
C Z
C Z
A X
C Z
A Z
C X
A X
A X
C Z
A X
A X
A X
C X
A X
A X
C Z
C X
C Y
B X
C X
C Y
C X
A X
A Y
A X
A X
A Z
C Z
A X
C X
C X
C X
C X
B Z
A X
B Y
C X
C X
C Y
C X
C Z
C Z
A X
C X
A X
C X
A Z
C Y
B X
A X
C X
C Z
C Y
B X
C Y
A X
C X
A X
A X
A Z
A X
B X
C X
A X
A Y
A X
C X
C Z
A Z
A X
A X
C Z
A X
C X
A X
C X
A X
C Z
C Y
A X
C X
A X
C Z
A Y
B X
C Z
C Z
A X
A X
A Y
A Z
A X
C X
C Y
C Z
A X
C Z
C Z
B X
A X
A X
A X
C Y
A Z
C Z
C Z
A Z
A X
A X
B X
C X
B X
A X
C Z
A Y
C Z
A X
C X
C Z
C X
A X
C X
A X
A X
C Z
A Z
C X
C X
B Z
C Z
A Y
A X
C X
C Z
A X
C Z
C X
C Y
C X
A Y
C Z
C Z
A X
A X
A X
C Z
C Y
C Z
A X
C Z
A X
C X
A X
A Y
A X
A Z
A X
A Y
A X
A X
A X
A Z
A X
C Z
C Z
C Z
C X
A X
A Z
C X
C Z
A X
C X
C Y
A X
C X
A X
C Y
A X
A X
C Z
C X
A X
C Z
A X
A X
C Z
C X
C Z
C Y
A Y
C Z
C X
B X
A X
A X
A Z
A X
A X
C X
C Z
A X
C X
A Z
B X
A Z
C Z
C Z
A X
B X
A X
A Y
A X
A X
C Z
A X
C Y
C Z
C Y
A X
A X
A X
A X
B Z
B Z
A X
C X
C X
A X
C X
C Y
B X
C Y
B X
A X
B Z
C Z
A X
A X
C X
A Z
A X
C X
C Z
A X
C X
C X
C X
C Z
C Y
A X
A X
A X
C Z
C Z
C X
C Z
B X
A X
C Z
C Z
C Y
A X
A X
C Z
A Z
C X
C Z
C Y
C Z
C Z
A X
C Z
C Y
C X
B X
C Z
A Y
C Z
C X
C X
A X
A X
A X
C Z
B Z
A X
A Z
B X
A Z
A Z
C Z
C Z
C X
C Y
C Y
C Z
A Z
C Y
C X
C Y
A Z
B Y
A X
C Y
A X
A X
A Z
C Z
C Z
C Z
C X
C X
C Z
C Z
A X
C X
A Y
A Y
A X
B Z
A X
C X
A X
C X
A X
A X
A X
C X
C Y
C Z
C Z
A X
C Z
A X
C X
C X
C Z
A X
A X
A X
C X
C Z
A X
A X
A X
A X
C Z
B Y
A X
A X
A X
C Y
A X
A X
A Z
C X
A Z
C Z
A Z
C Z
A X
A Z
A X
A X
A X
A X
A Y
C X
C Z
A X
A Z
C X
A Y
C Z
C Y
A X
B X
A Y
C X
A X
C Z
C X
A X
C Z
C X
A X
C X
C X
C Z
A X
A Y
C Y
C Y
A X
A X
A X
A X
A X
C X
A Y
C Z
C Z
C Y
A X
C Z
C Z
A X
C X
C X
C Y
A X
A X
C X
C X
A Z
A X
C Z
A X
C Z
A X
B X
A Z
B X
C Z
C Z
C X
A X
A Z
C X
A X
A X
C X
C Y
C Z
C X
C X
A X
C Z
C Z
C X
B X
C Z
A X
B X
A Z
C X
A Z
A X
A X
C X
A X
C Z
A X
A X
C Z
C Z
C Z
A X
C X
A Y
C Y
A X
A X
A X
A X
C X
C Z
A X
A X
A X
C X
C Z
A X
C Z
A X
A Y
C Y
C X
C X
A X
A X
A X
A Z
A X
C Z
A X
C Y
B Z
B X
A X
C X
C Z
A X
A X
C Z
B X
B X
C X
C Y
C X
B X
A X
A X
C X
A Z
A X
C X
C X
C X
A X
C Z
A Y
A X
C Y
A X
A X
C Z
A Z
A Z
C X
C X
C Y
C Y
C X
C X
C Z
A X
C X
A X
A X
A X
A X
C Y
C Z
A X
C Z
C X
C X
A X
A X
A Z
C Y
C X
A X
C X
A X
A Z
A X
A Z
A X
A X
A X
C X
A Z
A X
C X
C Y
A Z
A X
B X
C X
C Y
C Z
C X
C Y
C X
C X
A X
C Y
B X
A Z
C Z
B Z
C X
A X
C Z
A X
C X
A X
A X
A X
C Z
C Y
B Z
A X
C X
A Y
C Z
A X
A X
A Z
A Z
A Y
C X
C Z
C X
A Z
C X
C Z
C X
B X
A X
C Z
A X
A X
C Z
A Z
C X
C Y
C X
C X
C Y
A X
A X
C X
A Z
C X
C Z
C X
A Z
A X
A Y
A X
A X
B Z
C Z
C Z
A Y
C X
A X
B X
A X
A Z
C Y
C Z
C X
C Z
C Z
C X
C X
A X
C X
A Z
C Z
C Z
C Z
C Y
C X
A X
C Z
A Z
C Z
C Z
A X
C X
A X
C Z
A X
B X
A X
C Z
C X
C X
A X
C Y
A X
C Z
B X
C Z
C X
A X
C X
C X
C Z
A X
A X
C Z
C Z
C X
C Z
C X
A X
A X
C Z
C X
C X
A X
C Z
A Z
C Z
B X
C X
C Y
C X
C Z
A X
B X
C Z
A X
C Z
A Z
C Z
C X
A X
C Z
C Z
A X
A X
C Z
A X
C Y
A Z
C X
C Z
A X
B Z
B X
A X
A Z
A X
A Z
A X
A X
C Y
A X
C Y
C X
C Y
C Y
C X
A X
A Z
A Z
C X
C Z
B X
A X
C Z
A Z
C X
C Z
C Y
A X
A X
C Z
C Z
C Y
A Z
C Z
C Y
A X
C X
A X
C X
C Z
A Z
B Z
A X
A X
A X
C X
C X
A Y
A Z
C X
C Z
A X
B X
A X
A X
C X
C X
B X
A X
B X
C Z
A Z
C Z
A X
C X
C Z
C Y
A Y
A Z
C Y
C Z
A X
A X
C X
A X
C Z
C Y
A X
C Z
A X
A X
B X
A X
A Z
C X
C Y
A Z
C Z
A X
A Z
C X
C Z
C X
C Z
A X
A X
A X
C X
A X
C Z
C X
C X
C X
C X
A X
C X
B Y
A Z
A Z
C Z
C X
A Y
C X
A X
C X
C Z
B Z
C Z
B X
A X
A Z
A X
C X
A X
C Z
C Z
C Z
A X
C Z
A X
C Z
C X
C X
C X
B X
A X
A X
B X
C X
A X
C Z
A Z
C Y
C Z
A Z
B Z
A Z
C Z
C Z
C X
A X
A X
C X
C X
C Y
A Y
A Z
A X
C Z
C Z
C Y
C X
A X
A X
C Y
A Z
C X
C X
C X
A X
C X
C X
A Z
C X
C Y
A Z
C Z
C Y
A Z
C Z
A X
C X
C Y
C X
C X
C Z
C X
C X
C Z
C X
A X
B Y
A X
C X
B Z
C Z
C X
C Z
C Z
A Y
A Y
A X
A Z
C Z
A X
C X
C Z
A Z
A X
A X
A X
B X
A X
B Z
C X
A X
C X
A Z
C X
A X
C Y
A X
C X
C Y
A Z
C Z
C Z
B X
A X
C X
A X
C X
C Y
A X
C Y
A X
B X
C Y
A X
A X
C X
A X
B Y
C Y
C Y
C Y
C X
A Y
C X
C Z
A X
A Z
A X
A X
C Z
A Z
A Z
C X
A X
A X
B X
C X
C Y
C X
B Z
A X
C X
C Y
C X
C Z
C Y
A X
C X
A X
A X
A Y
C Z
C Z
C Z
A X
A X
A Z
A X
A X
A Z
A X
C Y
C Y
A X
A X
A Z
C X
A X
C Z
A Z
C Z
C Y
C Z
A X
C Z
C X
C Z
A X
C Y
C Y
B X
A X
A Z
C X
A X
A X
C Z
A X
C X
C Z
A Z
A Y
A Y
A X
C X
A Y
A X
A X
B Z
A X
C X
C X
C X
A X
C X
C Z
C Z
A Z
C X
C X
C Y
A X
C X
A X
A X
C Y
C X
A X
C Y
C X
C X
A Y
C Z
C X
C X
C Y
C Z
A Y
A X
C Z
C Z
C Z
C X
C Z
A X
A X
A Z
A X
C Y
C X
C Z
A X
A X
C Z
A X
C X
A X
A Y
C X
`;

combinationsInSeparateArrays(combinations);
