var W2, H2;
var half = 2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  W2 = windowWidth / half;
  H2 = windowHeight / half;
}

function draw() {
  clear();
  dda(0, 0, windowWidth, windowHeight);
  dda(W2, 0, W2,windowHeight);
  dda(windowWidth, 0, 0, windowHeight);
  dda(0, H2, windowWidth, H2);
  noLoop();
}

function dda(ejeX1, ejeY1, ejeX2, ejeY2) {

  let dx = ejeX2 - ejeX1;
  let dy = ejeY2 - ejeY1;

  let finish;
  if(Math.abs(dx) > Math.abs(dy))
    finish = Math.abs(dx);
  else
    finish = Math.abs(dy);

  let xi = dx / finish;
  let yi = dy / finish;
  let x = ejeX1;
  let y = ejeY1;
  
  for(let i=0; i < finish; i++)
  {
    //clear();
    point(x, y);
    x += xi;
    y += yi;
  }
}