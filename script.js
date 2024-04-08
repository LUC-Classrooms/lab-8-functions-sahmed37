function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width/2, height/2, 50, 50);
  myShape(100, 200, 20, 40);
  myShape(400, 200, 10, 60);
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, w, h) {
  push(); // make a separate layer
  // make this function more interesting
  translate(); // move the origin point
  fill(200, 200, 244);
  ellipse(x, y, w, h); // simple ellipse at the translated origin (0,0)
  rectMode(CENTER); 
  rect(x, y - h/2, w, h)
  fill(0);
  pop(); // dispose of the layer
}
