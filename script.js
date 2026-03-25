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
	bird= new Sprite(100,400, 80, 'd');
    bird.color = 'blue';
    bird.vel.x = 2;
 
    pipe1Top = new Sprite(200, 100, 80, 300, 'k'); 
    pipe1Top.color = 'green'; 
    pipe1Top.vel.x = 4;
    pipe1Bottom = new Sprite(200, 750, 80, 250, 'k'); 
    pipe1Bottom.color = 'green'; 
    pipe1Bottom.vel.x = 4;

    pipe2Top = new Sprite(350, 120, 80, 280, 'k'); 
    pipe2Top.color = 'green'; 
    pipe2Top.vel.x = 1;
    pipe2Bottom = new Sprite(350, 750, 80, 300, 'k'); 
    pipe2Bottom.color = 'green'; 
    pipe2Bottom.vel.x = 1;

     pipe3Top = new Sprite(500, 90, 80, 380, 'k'); 
    pipe3Top.color = 'green'; 
    pipe3Top.vel.x = 1;
    pipe3Bottom = new Sprite(500, 770, 80, 250, 'k'); 
    pipe3Bottom.color = 'green'; 
    pipe3Bottom.vel.x = 1;

    pipe4Top = new Sprite(650, 150, 80, 300, 'k'); 
    pipe4Top.color = 'green'; 
    pipe4Top.vel.x = 1;
    pipe4Bottom = new Sprite(650, 700, 80, 280, 'k'); 
    pipe4Bottom.color = 'green'; 
    pipe4Bottom.vel.x = 1;

    pipe5Top = new Sprite(800, 100, 80, 320, 'k'); 
    pipe5Top.color = 'green'; 
    pipe5Top.vel.x = 1;
    pipe5Bottom = new Sprite(800, 750, 80, 250, 'k'); 
    pipe5Bottom.color = 'green'; 
    pipe5Bottom.vel.x = 1;


    }

console.log("setup: ");

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightblue');
if (kb.presses('space')){
    bird.vel.y= -7

}
}



/*******************************************************/
//  END OF APP
/*******************************************************/