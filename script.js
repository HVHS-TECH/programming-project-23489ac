// DOM elements
const bird = document.getElementById('bird');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over');
const scoreDisplay = document.getElementById('score');

// Game variables
let birdTop = 200;
let birdSpeed = 0;
const gravity = 0.5;
let pipes = [];
let gameStarted = false;
let score = 0;
const pipeGap = 150;
const birdSize = 150;
const pipeWidth = 50;

// Start / restart game
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Spacebar jump
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameStarted) {
        birdSpeed = -11;
    }
});

// Start game function
function startGame() {
    startScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    birdTop = 200;
    bird.style.top = birdTop + 'px';
    birdSpeed = 0;

    // Remove old pipes
    pipes.forEach(p => {
        p.top.remove();
        p.bottom.remove();
    });
    pipes = [];

    score = 0;
    scoreDisplay.textContent = score;
    gameStarted = true;

    gameLoop();
    spawnPipe();
}

// Game loop
function gameLoop() {
    if (!gameStarted) return;

    // Bird physics
    birdSpeed += gravity;
    birdTop += birdSpeed;
    if (birdTop < 0) birdTop = 0;
    bird.style.top = birdTop + 'px';

    // Move pipes and check collisions
    pipes.forEach((pipePair, index) => {
        pipePair.x -= 3;
        pipePair.top.style.left = pipePair.x + 'px';
        pipePair.bottom.style.left = pipePair.x + 'px';

        const birdBottom = birdTop + birdSize;
        const birdLeft = 100;
        const birdRight = birdLeft + birdSize;

        const topPipeBottom = pipePair.topHeight;
        const topPipeLeft = pipePair.x;
        const topPipeRight = topPipeLeft + pipeWidth;

        const bottomPipeTop = topPipeBottom + pipeGap;
        const bottomPipeLeft = pipePair.x;
        const bottomPipeRight = bottomPipeLeft + pipeWidth;

        // Collision detection
        if (
            (birdTop < topPipeBottom && birdRight > topPipeLeft && birdLeft < topPipeRight) ||
            (birdBottom > bottomPipeTop && birdRight > bottomPipeLeft && birdLeft < bottomPipeRight)
        ) {
            endGame();
        }

        // --- SCORING: 1 point per pipe pair ---
        if (!pipePair.scored && birdLeft > pipePair.x + pipeWidth) {
            score++;
            scoreDisplay.textContent = score;
            pipePair.scored = true;
        }

        // Remove offscreen pipes
        if (pipePair.x < -pipeWidth) {
            pipePair.top.remove();
            pipePair.bottom.remove();
            pipes.splice(index, 1);
        }
    });

    // Hit ground
    if (birdTop > window.innerHeight - birdSize) {
        endGame();
    }

    requestAnimationFrame(gameLoop);
}

// Spawn pipes
function spawnPipe() {
    if (!gameStarted) return;

    // Fixed pipe heights so they don't change wildly
    const heights = [150, 200, 250, 300];
    const topHeight = heights[Math.floor(Math.random() * heights.length)];

    // Top pipe
    const topPipe = document.createElement('img');
    topPipe.src = 'toppipe.png';
    topPipe.className = 'pipe';
    topPipe.style.height = topHeight + 'px';
    topPipe.style.width = pipeWidth + 'px';
    topPipe.style.top = '0px';
    topPipe.style.left = window.innerWidth + 'px';
    document.body.appendChild(topPipe);

    // Bottom pipe
    const bottomPipe = document.createElement('img');
    bottomPipe.src = 'bottompipe.png';
    bottomPipe.className = 'pipe';
    bottomPipe.style.width = pipeWidth + 'px';
    bottomPipe.style.top = topHeight + pipeGap + 'px';
    bottomPipe.style.left = window.innerWidth + 'px';
    document.body.appendChild(bottomPipe);

    pipes.push({
        top: topPipe,
        bottom: bottomPipe,
        x: window.innerWidth,
        topHeight: topHeight,
        scored: false
    });

    setTimeout(spawnPipe, 2200);
}

// End game
function endGame() {
    gameStarted = false;
    gameOverScreen.style.display = 'block';
}