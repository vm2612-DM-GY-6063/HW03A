function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0); 
  
  let largeDotSize = 30;
  let smallDotSize = 15;
  let spacing = 40;
  
  // Drawing the larger dots in a pattern
  for (let y = 0; y < height; y += spacing * 2) {
    for (let x = 0; x < width; x += spacing * 2) {
      fill(0);
      noStroke();
      ellipse(x, y, largeDotSize, largeDotSize); // Larger dots
    }
  }
  
  // Translate for the shifted rows of large dots
  for (let y = spacing; y < height; y += spacing * 2) {
    for (let x = spacing; x < width; x += spacing * 2) {
      fill(0);
      noStroke();
      ellipse(x, y, largeDotSize, largeDotSize); 
    }
  }
  
  // Drawing the smaller dots
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      fill(0);
      noStroke();
      ellipse(x, y, smallDotSize, smallDotSize); 
    }
  }
}


