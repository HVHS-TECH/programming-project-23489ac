// ---------- DOM ELEMENTS ----------
const bird = document.getElementById("bird");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const gameOverScreen = document.getElementById("game-over");
const scoreDisplay = document.getElementById("score");


// ---------- GAME SETTINGS ----------
const gravity = 0.5;
const jumpPower = -11;

const birdSize = 60;
const pipeWidth = 70;
const pipeGap = 200;

const pipeSpeed = 3;
const spawnTime = 2000;


// ---------- GAME VARIABLES ----------
let birdTop = 200;
let birdSpeed = 0;

let pipes = [];
let score = 0;

let gameStarted = false;
let pipeIndex = 0;


// Fixed pipe layout (always same pattern)
const pipeLayout = [200, 260, 180, 240, 220, 260];


// ---------- BUTTON EVENTS ----------
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);


// ---------- SPACEBAR JUMP ----------
document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && gameStarted) {
        birdSpeed = jumpPower;
    }
});


// ---------- START GAME ----------
function startGame() {

    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";

    // reset bird
    birdTop = 200;
    birdSpeed = 0;
    bird.style.top = birdTop + "px";

    // reset pipes
    pipes.forEach(pipe => {
        pipe.top.remove();
        pipe.bottom.remove();
    });

    pipes = [];
    pipeIndex = 0;

    // reset score
    score = 0;
    scoreDisplay.textContent = score;

    gameStarted = true;

    gameLoop();
    spawnPipe();
}


// ---------- GAME LOOP ----------
function gameLoop() {

    if (!gameStarted) return;

    // bird physics
    birdSpeed += gravity;
    birdTop += birdSpeed;

    bird.style.top = birdTop + "px";

    // move pipes
    pipes.forEach((pipePair, index) => {

        pipePair.x -= pipeSpeed;

        pipePair.top.style.left = pipePair.x + "px";
        pipePair.bottom.style.left = pipePair.x + "px";

        const birdLeft = 100;
        const birdRight = birdLeft + birdSize;
        const birdBottom = birdTop + birdSize;

        const pipeLeft = pipePair.x;
        const pipeRight = pipeLeft + pipeWidth;

        const topPipeBottom = pipePair.topHeight;
        const bottomPipeTop = topPipeBottom + pipeGap;

        // COLLISION
        if (
            (birdTop < topPipeBottom && birdRight > pipeLeft && birdLeft < pipeRight) ||
            (birdBottom > bottomPipeTop && birdRight > pipeLeft && birdLeft < pipeRight)
        ) {
            endGame();
        }

        // SCORING (2 points per pipe pair)
        if (!pipePair.scored && pipeRight < birdLeft) {

            score += 2;
            scoreDisplay.textContent = score;

            pipePair.scored = true;
        }

        // remove pipes when off screen
        if (pipePair.x < -pipeWidth) {

            pipePair.top.remove();
            pipePair.bottom.remove();

            pipes.splice(index, 1);
        }
    });


    // ground collision
    if (birdTop > window.innerHeight - birdSize) {
        endGame();
    }

    requestAnimationFrame(gameLoop);
}


// ---------- SPAWN PIPES ----------
function spawnPipe() {

    if (!gameStarted) return;

    const topHeight = pipeLayout[pipeIndex];

    pipeIndex++;
    if (pipeIndex >= pipeLayout.length) {
        pipeIndex = 0;
    }

    // TOP PIPE
    const topPipe = document.createElement("img");
    topPipe.src = "toppipe.png";
    topPipe.className = "pipe";

    topPipe.style.height = topHeight + "px";
    topPipe.style.width = pipeWidth + "px";
    topPipe.style.top = "0px";
    topPipe.style.left = window.innerWidth + "px";

    document.body.appendChild(topPipe);


    // BOTTOM PIPE
    const bottomPipe = document.createElement("img");
    bottomPipe.src = "bottompipe.png";
    bottomPipe.className = "pipe";

    bottomPipe.style.width = pipeWidth + "px";
    bottomPipe.style.top = (topHeight + pipeGap) + "px";
    bottomPipe.style.left = window.innerWidth + "px";

    document.body.appendChild(bottomPipe);


    pipes.push({
        top: topPipe,
        bottom: bottomPipe,
        x: window.innerWidth,
        topHeight: topHeight,
        scored: false
    });


    setTimeout(spawnPipe, spawnTime);
}


// ---------- END GAME ----------
function endGame() {

    gameStarted = false;
    gameOverScreen.style.display = "block";
}