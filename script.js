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
    bird.vel.x= 0

 
    pipe1Top = new Sprite(300, 100, 80, 350, 'k'); 
    pipe1Top.color = 'green'; 
    pipe1Top.vel.x = -3;
    pipe1Bottom = new Sprite(300, 750, 80, 550, 'k'); 
    pipe1Bottom.color = 'green'; 
    pipe1Bottom.vel.x = -3;

    pipe2Top = new Sprite(550, 120, 80, 280, 'k'); 
    pipe2Top.color = 'green'; 
    pipe2Top.vel.x = -3;
    pipe2Bottom = new Sprite(550, 750, 80, 300, 'k'); 
    pipe2Bottom.color = 'green'; 
    pipe2Bottom.vel.x = -3;

    pipe3Top = new Sprite(800, 90, 80, 380, 'k'); 
    pipe3Top.color = 'green'; 
    pipe3Top.vel.x = -3;
    pipe3Bottom = new Sprite(800, 770, 80, 250, 'k'); 
    pipe3Bottom.color = 'green'; 
    pipe3Bottom.vel.x = -3;

    pipe4Top = new Sprite(1050, 150, 80, 300, 'k'); 
    pipe4Top.color = 'green'; 
    pipe4Top.vel.x = -3;
    pipe4Bottom = new Sprite(1050, 700, 80, 280, 'k'); 
    pipe4Bottom.color = 'green'; 
    pipe4Bottom.vel.x = -3;

    pipe5Top = new Sprite(1300, 100, 80, 320, 'k'); 
    pipe5Top.color = 'green'; 
    pipe5Top.vel.x = -3;
    pipe5Bottom = new Sprite(1300, 750, 80, 250, 'k'); 
    pipe5Bottom.color = 'green'; 
    pipe5Bottom.vel.x = -3;

   




    }

console.log("setup: ");

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightblue')
    

    if(started == false){ 

    }
    textSize(60);
    fill ('yellow');
    textAlign(CENTER, CENTER);
    text('FLAPPY BIRD',400, 300);

    rect(300,250,70,10);
    fill('green');
    textSize (35);
    fill('white');
    text(START , 400,400)
    if (mouse.presses()) {
			return;
    }
if (kb.presses('space')){
     bird.vel.y= -7;
}
     
}



/*******************************************************/
//  END OF APP
/*******************************************************/