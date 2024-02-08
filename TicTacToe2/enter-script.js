document.getElementById('playButton').addEventListener('click', () => {
    // Play the click sound
    var clickSound = document.getElementById("clickSound");
    clickSound.play();

    // Delay the redirection by 1 second 
    setTimeout(() => {
        // Redirect to the main game page
        window.location.href = 'main-game.html';
    }, 1100); // Adjust the delay time as needed
});

//FROM: TeenageProgrammer

const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 120;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
