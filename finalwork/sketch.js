// 最終課題を制作しよう
let cx, cy, r;

function setup(){
  let green = color(127, 255, 212);
  let red = color(255, 0, 0);
  let black = color(0);
  let brown = color(148,134,51);
  createCanvas(400, 400);
  background(16, 16, 32);
  drawCircle(brown, r);
  // Gcircle1(8,220,130,150);
  // Gcircle2(8,265,110,100);
  Gcircle(8, cx, cy, r);
  Ccircle(290, 115, 120);
  Gbar(296,110,75,20);
  ITmoji(300,10);
}

function drawCircle(c, r){
  fill(255);
  ellipse(200, 200, 400);
}
function Gcircle(n, cx, cy, r) {
  for(let i=0; i<2; i++){
    beginShape();
    noStroke();
    cx = 220 + i*45
    cy = 130 - i*20
    a = 8.3 + i*361.7
    r = 150 - i*50;
    rotate(PI / a);
    if(i<1){fill('green');}
    else{fill('cream')}
    for(var  j= 0; j < n ; j++){
    let theta = TWO_PI * j  / n- HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);}
    endShape();}
  }

//
// function Gcircle1(n, cx, cy, r){
//   beginShape();
//   fill('red');
//   rotate(PI / 8.3);
//   noStroke();
//   for(var i = 0; i < n ; i++){
//     let theta = TWO_PI * i  / n- HALF_PI;
//     let x = cx + cos(theta) * r;
//     let y = cy + sin(theta) * r;
//     vertex(x,y);
//   }
//   endShape();
// }
//
// function Gcircle2(n, cx, cy, r){
//   beginShape();
//   fill('white');
//   rotate(PI / 370);
//   // noStroke();
//   for(var i = 0; i < n ; i++){
//     let theta = TWO_PI * i  / n- HALF_PI;
//     let x = cx + cos(theta) * r;
//     let y = cy + sin(theta) * r;
//     vertex(x,y);
//   }
//   endShape();
// }
function Ccircle(x, y, size){
    push();
    noFill();
    stroke('brown');
    strokeWeight(size * 0.2);
    strokeCap(SQUARE);
    arc(x + size * 0.25, y, size, size, QUARTER_PI, QUARTER_PI * 3 + PI);
    // BLANK[1]
    pop();
  }
function Gbar(x, y, w, h){
    rotate(PI/ 2000)
    fill('green');
    rect(x, y, w, h)
  }
function ITmoji(x, y){
    fill('blue');
    const textSize = mouseIsPressed ? 100 : 50;
    text('IT', x, y) ;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
