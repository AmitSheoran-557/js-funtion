// Get the bubble container
const bubbleContainer = document.querySelector('.bubble-container');

// Function to create a bubble
function createBubble(size, x, y) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.top = `${y}px`;
    bubble.style.left = `${x}px`;
    bubbleContainer.appendChild(bubble);
}

// Create bubbles of different sizes
for (let i = 0; i < 20; i++) {
    const size = Math.random() * 100 + 20; // Random size between 20 and 120
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createBubble(size, x, y);
}