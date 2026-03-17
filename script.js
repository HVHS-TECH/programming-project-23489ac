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
	rectangle= new Sprite(212, 190, 217, 117, 'd');
    rectangle.color = 'green';
    rectangle.rotationSpeed = 2;
    
console.log("setup: ");

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightblue');
    if ( keyboard.pressing('left')){
        //set sprite's velocity to the left
    }
    else if ( keyboard.pressing('right')) {    
};

if ( keyboard.released('left')) {
    // Set sprite's velocity to zero
}

	
}

/*******************************************************/
//  END OF APP
/*******************************************************/