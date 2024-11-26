const words = ['circle', 'square', 'triangle', 'pentagon', 'hexagon', 'octagon', 'rectangle', 'ellipse', 'rhombus', 'parallelogram', 'trapezoid', 'star'];
let currentWord = '';
let score = 0;
let username = document.getElementById("username");

function lowercase() {
    var input = document.getElementById("word-input"); input.value = input.value.toLowerCase();
} 

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayNewWord() {
    currentWord = getRandomWord();
    document.getElementById('word-display').textContent = currentWord;
    
}

document.getElementById('word-input').addEventListener('input', function() {
    const typedWord = this.value.toLowerCase();
    if (typedWord === currentWord) {
        score += 10; 
        document.getElementById('score').textContent = `Score: ${score}`;
        this.value = ''; 
        displayNewWord(); 
    }
});

displayNewWord();


let timeLeft = 30;
let timerElement = document.getElementById('timer'); 

function startTimer() {
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    let timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer); 
            alert("Time's up");
            timeLeft = 30;
        }
    }, 1000); 
}


// add a timer function 

// add a score board function 

// make it so if they spell it wrong there score reduces by ten

// add a timer feature

// add levels of complexity - different length shapes, different speeds

// levels of complexity - names of shapes disappear? 