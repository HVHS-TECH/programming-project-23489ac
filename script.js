
let bird = document.getElementById("bird")
let game = document.getElementById("game")
let scoreText = document.getElementById("score")
let message = document.getElementById("message")

let birdY = 200
let velocity = 0

let gravity = 0.5
let jump = -8

let gameStarted = false
let score = 0

document.addEventListener("keydown", function(e){

if(e.code === "Space"){

if(!gameStarted){
startGame()
}

velocity = jump
}

})

function startGame(){

gameStarted = true
message.style.display = "none"

setInterval(createPipe,2000)

}

function createPipe(){

let gap = 150
let pipeTopHeight = Math.random()*200 + 50

let pipeTop = document.createElement("div")
pipeTop.classList.add("pipe")
pipeTop.style.height = pipeTopHeight + "px"
pipeTop.style.top = "0px"
pipeTop.style.right = "-60px"

let pipeBottom = document.createElement("div")
pipeBottom.classList.add("pipe")
pipeBottom.style.height = (500 - pipeTopHeight - gap) + "px"
pipeBottom.style.bottom = "0px"
pipeBottom.style.right = "-60px"

game.appendChild(pipeTop)
game.appendChild(pipeBottom)

movePipe(pipeTop,pipeBottom)

}

function movePipe(top,bottom){

let pipeX = 400

let move = setInterval(function(){

pipeX -= 2

top.style.right = (400-pipeX)+"px"
bottom.style.right = (400-pipeX)+"px"

if(pipeX === 100){
score++
scoreText.innerHTML = "Score: " + score
}

if(pipeX < -60){
clearInterval(move)
top.remove()
bottom.remove()
}

if(checkCollision(top,bottom)){
gameOver()
clearInterval(move)
}

},20)

}

function checkCollision(top,bottom){

let birdTop = birdY
let birdBottom = birdY + 40

let pipeTopHeight = top.offsetHeight
let pipeBottomTop = 500 - bottom.offsetHeight

if(birdTop < pipeTopHeight || birdBottom > pipeBottomTop){

let pipeRight = parseInt(top.style.right)

if(pipeRight > 220 && pipeRight < 300){
return true
}

}

if(birdY > 460){
return true
}

return false

}

function gameOver(){

gameStarted = false
message.style.display = "block"
message.innerHTML = "Game Over<br>Refresh to Restart"

}

function gameLoop(){

if(gameStarted){

velocity += gravity
birdY += velocity
bird.style.top = birdY + "px"

}

requestAnimationFrame(gameLoop)

}

gameLoop()
