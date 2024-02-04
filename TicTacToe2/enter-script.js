document.getElementById('playButton').addEventListener('click', () => {
    // Redirect to the main game page
    window.location.href = 'main-game.html';
});


//FROM: TeenageProgrammer

const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}