// Array of image objects with their respective correct answers
const images = [
    { src: 'assets/1936.png', answers: ['1936', '36', 'berlim', 'berlin', 'alemanha'] },
    { src: 'assets/1948.png', answers: ['1948', '48', 'londres', 'london', 'inglaterra'] },
    { src: 'assets/1952.png', answers: ['1952', '52', 'helsinki', 'helsinque', 'helsinqui', 'finlandia'] },
    { src: 'assets/1956.png', answers: ['1956', '56','melbourne', 'australia'] },
    { src: 'assets/1960.png', answers: ['1960', '60','roma', 'rome', 'italia'] },
    { src: 'assets/1964.png', answers: ['1964', '64','tokyo', 'toquio', 'tokio', 'japao'] },
    { src: 'assets/1968.png', answers: ['1968', '68', 'mexico city', 'ciudad de mexico', 'cidade do mexico'] },
    { src: 'assets/1972.svg', answers: ['1972', '72', 'munich', 'munchen', 'munique', 'alemanha'] },
    { src: 'assets/1976.png', answers: ['1976', '76', 'montreal', 'canada'] },
    { src: 'assets/1980.png', answers: ['1980', '80', 'moscou', 'moscow', 'russia', 'uniao sovietica', 'urss'] },
    { src: 'assets/1984.png', answers: ['1984', '84', 'los angeles', 'la', 'estados unidos', 'usa', 'eua'] },
    { src: 'assets/1988.png', answers: ['1988', '88', 'seoul', 'seul', 'coreia', 'coreia do sul'] },
    { src: 'assets/1992.png', answers: ['1992', '92', 'barcelona', 'espanha'] },
    { src: 'assets/1996.png', answers: ['1996', '96', 'atlanta', 'estados unidos', 'usa', 'eua'] },
    { src: 'assets/2000.png', answers: ['2000', '00', 'sidnei', 'sydney', 'sidney', 'sydnei', 'australia'] },
    { src: 'assets/2004.png', answers: ['2004', '04', 'atenas', 'athens', 'grecia'] },
    { src: 'assets/2008.png', answers: ['2008', '08', 'pequim', 'pequin', 'beijing', 'china'] },
    { src: 'assets/2012.png', answers: ['2012', '12', 'londres', 'london', 'inglaterra'] },
    { src: 'assets/2016.png', answers: ['2016', '16', 'rio', 'rio de janeiro', 'rj', 'brasil'] },
    { src: 'assets/2020.png', answers: ['2020', '20', '2021', 'tokyo', 'toquio', 'tokio', 'japao'] },
    { src: 'assets/2024.png', answers: ['2024', '24','paris', 'frança'] }
    // Add more images as needed
];

let remainingImages = [...images]; // Copy of the images array to keep track of remaining images
let score = 0; // Initialize score
let timer; // Timer for countdown
const timerDuration = 15; // Timer duration in seconds

// Select elements from the DOM
const imageElement = document.getElementById('random-image');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('timer'); // Assuming there's an element for displaying the timer

// Function to load a random image
function loadRandomImage() {
    if (remainingImages.length === 0) {
        showCompletionPopup();
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    const randomImage = remainingImages.splice(randomIndex, 1)[0]; // Remove the image from remainingImages
    imageElement.src = randomImage.src;
    imageElement.dataset.answers = JSON.stringify(randomImage.answers);

    startTimer();
}

// Function to check the user's guess
function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();
    const correctAnswers = JSON.parse(imageElement.dataset.answers);
    
    if (correctAnswers.includes(userGuess)) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        score++; // Increment score on correct guess
        clearTimeout(timer); // Clear the timer
        guessInput.value = ''; // Clear the input field
        loadRandomImage(); // Load a new random image
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.style.color = 'red';
    }
}

// Function to show the completion popup
function showCompletionPopup() {
    const popup = document.createElement('div');
    popup.id = 'completion-popup';
    popup.innerHTML = `
        <p>Parabéns! Sua pontuação foi ${score}/21.</p>
        <button id="start-again-btn">Jogar Novamente</button>
    `;
    document.body.appendChild(popup);

    const startAgainBtn = document.getElementById('start-again-btn');
    startAgainBtn.addEventListener('click', function() {
        location.reload(); // Refresh the page to start the game again
    });
}

// Function to start the countdown timer
function startTimer() {
    let timeLeft = timerDuration;
    timerElement.textContent = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            resultElement.textContent = 'Time\'s up!';
            resultElement.style.color = 'red';
            guessInput.value = ''; // Clear the input field
            loadRandomImage(); // Load a new random image
        }
    }, 1000);
}

// Event listener for the submit button
submitBtn.addEventListener('click', checkGuess);

// Event listener for the Enter key on the input field
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if within a form
        checkGuess();
    }
});

// Load a random image on page load
window.onload = loadRandomImage;
