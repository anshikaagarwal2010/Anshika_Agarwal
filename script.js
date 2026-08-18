/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilsWidth = 22;
let pupilsHeight = 25;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400);

  //sets the background color
  background(255,192,203);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Directions for mouse press.
    textSize(14);
  textAlign(RIGHT, BOTTOM);
  text("Click to see me blink and Smile", width - 10, height - 10);

  //Face
  fill(245, 222, 179)
  stroke(255, 255, 51)
  strokeWeight(4)
  ellipse(width/2, height/2, 175, 200);

  // hair
 noStroke();
fill(20);
arc(width/2, height/2 - 140, 30, 80, 80, 0, PI + QUARTER_PI, CHORD);
  
  // Hair - side strands (drawn first, behind the face)
  fill(20);
  noStroke();
  rect(width/2  -105, height/2 - 5, 30, 160, 8); // left strand
  rect(width/2 + 100, height/2 - 10, 30, 160, 8);  // right strand

  //Eyes
  if (mouseIsPressed){
  //Eye closed
  fill(0);
  ellipse(170, 170, eyeWidth, eyeHeight/8);
  ellipse(230, 170, eyeWidth, eyeHeight/8);
  } 
  else{
    //Eye Open
    fill(169, 169, 169)
   ellipse(170, 170, eyeWidth, eyeHeight);
   ellipse(230, 170, eyeWidth, eyeHeight);
    fill(0, 0, 0)
  ellipse(170, 170, pupilsWidth, pupilsHeight);
  ellipse(230, 170, pupilsWidth, pupilsHeight);

    
  }

  //nose
  fill(73,255,47);
  triangle(190, 220, 200, 200, 210, 220);
  
  //fill(169, 169, 169)
  //ellipse(170, 170, eyeWidth, eyeHeight);
  //ellipse(230, 170, eyeWidth, eyeHeight);

  //Pupils
  //fill(0, 0, 0)
  //ellipse(170, 170, pupilsWidth, pupilsHeight);
  //ellipse(230, 170, pupilsWidth, pupilsHeight);

  //Mouth
  if(mouseIsPressed){
    //mouth color change
    fill(255,255,0)
    arc(200, 230, 50, 50, 0, 180);
  }
  else
  {
  fill(139, 0, 0)
  arc(200, 230, 50, 50, 0, 180);
   }
 // fill(139, 0, 0)
  //arc(200, 230, 50, 50, 0, 180);

  //Text
   textAlign(LEFT,TOP);
  textSize(15);
  text('What I am is the gift\n of GOD for me \n,but what I will \n became is \n my gift to GOD.', 20, 20);
}