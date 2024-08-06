const container = document.getElementById('container');
const colors = ['#ff6b6b', '#feca57', '#ff9f43', '#1dd1a1', '#48dbfb', '#5f27cd', '#c8d6e5'];
const SQUARES = 400;  // Increase number of squares to maintain density
const STAY_TIME = 3000; // Time in milliseconds the color stays before fading out

// Generates squares
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => setTimeout(() => removeColor(square), STAY_TIME));

    // Append squares into the container
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = `linear-gradient(45deg, ${color}, #fff)`;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    element.classList.add('pulse');
}

function removeColor(element) {
    element.style.background = '#1e1e1e';
    element.style.boxShadow = '0 0 2px #000';
    element.classList.remove('pulse');
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Adding pulse effect using CSS animations
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.pulse {
    animation: pulse 1s infinite;
}
`;
document.head.appendChild(style);

