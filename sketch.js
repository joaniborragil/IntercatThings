let circle1, circle2;
let circle1Color, circle2Color;

function setup() {
  createCanvas(400, 400);
  resetSketch();
}

function draw() {
  background(220);

  
  circle1.x += circle1.dx;
  circle1.y += circle1.dy;
  circle2.x += circle2.dx;
  circle2.y += circle2.dy;


  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    circle1Color = color(random(255), random(255), random(255));
    circle2Color = color(random(255), random(255), random(255));// Collision and change color
  }

  
  fill(circle1Color);
  ellipse(circle1.x, circle1.y, circle1.size);
  fill(circle2Color);
  ellipse(circle2.x, circle2.y, circle2.size);

 
  if (circle1.x < 0 || circle1.x > width) circle1.dx *= -1;
  if (circle1.y < 0 || circle1.y > height) circle1.dy *= -1;
  if (circle2.x < 0 || circle2.x > width) circle2.dx *= -1;
  if (circle2.y < 0 || circle2.y > height) circle2.dy *= -1;
}


function resetSketch() {
  circle1 = {
    x: random(width),
    y: random(height),
    size: 50,
    dx: random(-4, 4),
    dy: random(-2, 4)
  };
  
  circle2 = {
    x: random(width),
    y: random(height),
    size: 50,
    dx: random(-4, 4),
    dy: random(-2, 4)
  };
  
  circle1Color = color(255, 0, 0);
  circle2Color = color(0, 0, 255);
}


function keyPressed() {
  if (key === ' ') {
    resetSketch();
  }
}
