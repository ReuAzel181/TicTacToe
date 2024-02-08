let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");


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

let blueColor = "#3498db";
let orangeColor = "#e67e22";
let currentColor;

// Random player selector
let firstPlayer = Math.random() < 0.5 ? "X" : "O";

// If Player 'X' plays first
let xTurn = firstPlayer === "X";
let count = 0;

// Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  popupRef.classList.remove("hide");
};

// Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
  
  // Determinign the bg based on the first player
  currentColor = xTurn ? orangeColor : blueColor;
  document.body.style.backgroundColor = currentColor;
};


// Determine who wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
   
  }
};


// For Draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

// New Game Button
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Restart button element
const restartButton = document.getElementById('restart');

//Restart event listner
restartButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Your restart logic here
  count = 0;
  enableButtons();
});

// Add event listener for the Back button
document.getElementById('Back').addEventListener('click', () => {
  try {
    // Click Sound Play
    var clickSound = document.getElementById("clickSound");
    if (clickSound) {
      clickSound.play();
    } else {
      throw new Error('Could not find clickSound element');
    }

    // Delay the redirection by 1 second
    setTimeout(() => {
      window.location.href = "enter.html";
    }, 1000);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
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
    if (element1 !== "" && element2 !== "" && element3 !== "") {
      if (element1 === element2 && element2 === element3) {
        // If all 3 buttons have the same values then pass the value to winFunction
        winFunction(element1);
        return; // Exit if a winner is found
      }
    }
  }

  // Check for a draw
  if (count === 9) {
    drawFunction();
  }
};

const showNotification = (message) => {
  const turnNotification = document.getElementById('turn-notification');
  turnNotification.textContent = message;
  turnNotification.style.opacity = '1';

  // Disable all buttons during the notification display
  btnRef.forEach((element) => {
      element.disabled = true;
  });

  // Hide the notification after 2 seconds
  setTimeout(() => {
      turnNotification.style.opacity = '0';

      // Re-enable all buttons once the notification disappears
      btnRef.forEach((element) => {
          element.disabled = false;
      });
  }, 700);
};
const buttonOptions = document.querySelectorAll('.button-option');

// Add click event listener to each button option
buttonOptions.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the 'clicked' class
    button.classList.toggle('clicked');
  });
});


// Display X/O on click and toggle background color
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerText === "") {
      if (xTurn) {
        xTurn = false;
        // Display X and set color to orange
        element.innerText = "X";
        element.style.color = orangeColor;
      } else {
        xTurn = true;
        // Display O and set color to blue
        element.innerText = "O";
        element.style.color = blueColor;
      }

      // Increment count on each click
      count += 1;
      winChecker();

      // Check for a winner before showing notification
      if (!element.disabled) {
        // Toggle background color after the turn
        currentColor = xTurn ? blueColor : orangeColor;
        document.body.style.backgroundColor = currentColor;

        // Show notification for the next player's turn
        if (xTurn) {
          showNotification("It's O's turn");
        } else {
          showNotification("It's X's turn");
        }
      }
    }
  });
});

// Enable Buttons and disable popup on page load
window.onload = enableButtons;
