/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(850, 850);
	world.gravity.y = 10;
	bird= new Sprite(width/8, height/4, 80, 'd');
    bird.color = 'blue';
    bird.rotationSpeed = 2;
    bird.vel.x = 2;
 
    for (i = 0; i <4; i++) 
    pipe1 = new Sprite(600,150,70,300,'k');
    pipe1.color = 'green'
    pipe1.vel.x = 1;
    pipe1.bounciness = 1;
    pipe1.friction = 0;
    pipe2 =new Sprite(50,700,70,300,'k');
    pipe2.color = 'green'
    pipe2.vel.x = 1;
    pipe3 =new Sprite(700,700,70,300,'k');
    pipe3.color = 'green'
    pipe3.vel.x = 1;
    pipe4 =new Sprite(700,200,70,400,'k');
    pipe4.color = 'green' 
    pipe4.vel.x = 1;
    pipe5 =new Sprite(500,700,70,300,'k');
    pipe5.color = 'green'
    pipe5.vel.x = 1;


    }

console.log("setup: ");

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightblue');
if (kb.presses('space')){
    bird.vel.y= -5
}

	
}

/*******************************************************/
//  END OF APP
/*******************************************************/