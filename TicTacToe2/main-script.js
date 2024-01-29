let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];
// ... (Your existing code above)

// Background color variables
let blueColor = "#3498db";
let orangeColor = "#e67e22";
let currentColor;

// Determine the first player's turn randomly
let firstPlayer = Math.random() < 0.5 ? "X" : "O";

// Player 'X' plays first
let xTurn = firstPlayer === "X";
let count = 0;

// Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  // Enable popup
  popupRef.classList.remove("hide");
};

// Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  // Disable popup
  popupRef.classList.add("hide");
  
  // Determine the background color based on the first player
  currentColor = xTurn ? orangeColor : blueColor;
  document.body.style.backgroundColor = currentColor;
};

// ... (The rest of your existing code below)


// This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

// Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

// New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Restart Game
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Win Logic
const winChecker = () => {
  // Loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    // Check if elements are filled
    // If 3 empty elements are same and would give win as would
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        // If all 3 buttons have the same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

// Display X/O on click and toggle background color
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.innerText === "") {
        // Check if the button has not been clicked
        if (xTurn) {
          xTurn = false;
          // Display X
          element.innerText = "X";
        } else {
          xTurn = true;
          // Display O
          element.innerText = "O";
        }
  
        // Increment count on each click
        count += 1;
        winChecker();
  
        // Toggle background color after the turn
        currentColor = xTurn ? blueColor : orangeColor;
        document.body.style.backgroundColor = currentColor;
      }
    });
  });
  


// Enable Buttons and disable popup on page load
window.onload = enableButtons;
