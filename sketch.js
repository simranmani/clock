function setup() {
  createCanvas(1000,1000);
  noFill();
  angleMode(DEGREES);  // Set angle mode to degrees
}

function draw() {
  background(162, 218, 252);  // Set background to blue
  translate(width / 2, height / 2);  // Move origin to the center of the canvas
  
  let sec = second();  // Get the current second

  stroke(255);  // Set stroke color to white
  strokeWeight(2);

  for (let i = 0; i < sec; i++) {
    let radius = i * 5 + 10;  
    // Increase radius by 10 for each second
    let angle = map(i, 0, 60, 0, 360);  
    // Map second to an angle between 0 and 360 degrees
    let x = radius * cos(angle);  // Calculate x position
    let y = radius * sin(angle);  // Calculate y position
    
    ellipse(x, y, 20, 20);  // Draw a circle at the calculated position
  }
}