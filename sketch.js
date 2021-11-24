let radius;
let centerY;
let centerX;
let angle;
let radiusNoise = 0.2;
let colorList = [[224, 71, 90], 
                [224, 39, 74], 
                [218, 4, 54]]

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  centerX = 2.5*windowWidth/4;
  centerY = 2.5*windowHeight/4;
  
  angle = 0
  radius = 2;
  background(220,220,220, 100);
  
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(1);
  var c = colorList[round(random(0, 2))];
  stroke(c[0], c[1], c[2], 0.2)
  
  let temp_ang = 0;
  
  for (let i = 0; i < 1500; i++) {
      
    c = colorList[round(random(0, 2))];
    stroke(c[0], c[1], c[2], 0.05);

    centerX -= 0.09;
    centerY -= 0.09;

    radiusNoise += 0.01;
    radius = (noise(radiusNoise)*100) + 1;
    angle += noise(radiusNoise)*6 - 3;

    let rad = radians(angle);
    let x1 = centerX + radius * cos(rad);
    let y1 = centerY + radius * sin(rad);

    let oppositeRad = rad + PI;

    let x2 = centerX + radius * cos(oppositeRad);
    let y2 = centerY + radius * sin(oppositeRad);

    line(x1,y1,x2,y2);
    temp_ang += 1;
    
    if (x2 >= (windowWidth - 10) ||  y2 >= (windowHeight - 10) || x1 <= 100 || y1 <= 100) {
    break;
  }
  } 
}
