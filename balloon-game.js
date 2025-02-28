// Balloon messages
const balloonMessages = [
    "Happy Anniversary! I love you so much alwaysssss!",
    "You're my sunshine on cloudy days.",
    "Every moment with you is a treasure ikaw lang sapat na walang ng hihilingin pa nyaaaa sapmo.",
    "You make my heart smile every day my babycat.",
    "I can't wait for all the memories we'll create together.",
    "You're my best friend, enemy, ninang, my babycat, my greatest love and ako si paga na mahal na mahal ka.",
    "Mahal na mahal kita kahit inaaway kita palagi.",
    "You are my everything, today and always.",
    "With you, life is so much better. boom english HAHAHAHAHA",
    "Sobrang ganda mo love ko inside and out.",
    "I cherish every moment we share.",
    "Here's to many more anniversaries with you! kanpai!!"
];

// Function to create and display balloons
function createBalloons() {
    const balloonContainer = document.querySelector('.balloon-container');
    
    balloonMessages.forEach((message, index) => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.setAttribute('data-message', message);
        balloon.setAttribute('data-index', index);
        balloon.addEventListener('click', popBalloon);
        
        balloonContainer.appendChild(balloon);
    });
}

// Function to handle popping a balloon
function popBalloon(event) {
    const balloon = event.target;
    const message = balloon.getAttribute('data-message');
    
    balloon.classList.add('pop');
    
    // Show the message
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = message;
    messageContainer.style.display = 'block';

    // Optionally, you can hide the balloon completely after it pops
    setTimeout(() => {
        balloon.style.display = 'none';
    }, 500);
}

// Start the game by creating balloons
createBalloons();

// Function to redirect to message.html
function redirectToMessage() {
    window.location.href = "message.html"; // Redirect to the message page
}
