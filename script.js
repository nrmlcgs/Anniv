let pin = "";

// Function to handle PIN input
function addToPin(number) {
    if (pin.length < 6) {
        pin += number;
        document.getElementById("pinDisplay").innerText = pin;
    }
}

function clearPin() {
    pin = "";
    document.getElementById("pinDisplay").innerText = pin;
}

function validatePin() {
    const correctPin = "030124";
    const errorMessage = document.getElementById("errorMessage");
    const surpriseContainer = document.getElementById("surpriseContainer");
    
    if (pin === correctPin) {
        surpriseContainer.style.display = "block";
        document.querySelector(".pin-container").style.display = "none";
        generatePuzzle();
    } else {
        errorMessage.style.display = "block";
    }
}

// Puzzle Game Functions
const puzzlePieces = [
    { id: 1, src: '1.jpg' },
    { id: 2, src: '2.jpg' },
    { id: 3, src: '3.jpg' },
    { id: 4, src: '4.jpg' },
    { id: 5, src: '5.jpg' },
    { id: 6, src: '6.jpg' }
];

function generatePuzzle() {
    const container = document.getElementById('puzzleContainer');
    container.innerHTML = ''; // Clear the container
    
    puzzlePieces.forEach(piece => {
        const puzzlePiece = document.createElement('div');
        puzzlePiece.classList.add('puzzle-piece');
        puzzlePiece.setAttribute('draggable', true);
        puzzlePiece.setAttribute('id', `piece-${piece.id}`);
        puzzlePiece.style.backgroundImage = `url(${piece.src})`;
        puzzlePiece.setAttribute('data-id', piece.id);
        puzzlePiece.addEventListener('dragstart', dragStart);
        puzzlePiece.addEventListener('dragover', dragOver);
        puzzlePiece.addEventListener('dragenter', dragEnter);
        puzzlePiece.addEventListener('dragleave', dragLeave);
        puzzlePiece.addEventListener('drop', drop);
        puzzlePiece.addEventListener('dragend', dragEnd);
        
        container.appendChild(puzzlePiece);
    });
}

// Drag and drop event handlers
let draggedPiece = null;

function dragStart(e) {
    draggedPiece = e.target;
    setTimeout(() => {
        e.target.classList.add('dragging');
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.target.classList.add('over');
}

function dragLeave(e) {
    e.target.classList.remove('over');
}

function drop(e) {
    e.preventDefault();
    if (e.target.classList.contains('puzzle-piece') && draggedPiece !== e.target) {
        const draggedId = draggedPiece.getAttribute('data-id');
        const targetId = e.target.getAttribute('data-id');
        
        // Swap the images
        const tempSrc = draggedPiece.style.backgroundImage;
        draggedPiece.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = tempSrc;
    }
    e.target.classList.remove('over');
    
    // Check if the puzzle is complete
    checkPuzzleCompletion();
}

function checkPuzzleCompletion() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    let completed = true;
    
    pieces.forEach(piece => {
        const pieceId = piece.getAttribute('data-id');
        const currentBackground = piece.style.backgroundImage;
        const correctBackground = `url(image${pieceId}.jpg)`;
        
        if (currentBackground !== correctBackground) {
            completed = false;
        }
    });
    
    if (completed) {
        setTimeout(() => {
            alert("Congratulations! You completed the puzzle!");
            document.getElementById("resetButton").style.display = "inline-block";
            document.getElementById("redirectButton").style.display = "inline-block"; // Show redirect button
        }, 500);
    }
}

function resetPuzzle() {
    generatePuzzle();
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("redirectButton").style.display = "none"; // Hide redirect button after reset
}

function redirectToBalloonGame() {
    window.location.href = "balloon-game.html"; // Redirect to balloon game page
}
