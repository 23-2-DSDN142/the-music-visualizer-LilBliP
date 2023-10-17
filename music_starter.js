// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true;
let Torso, Arms, LegL, LegR;
let titanX, titanY;
let sunSize, sunOuterC, sunInnerC;
let weaponY = 800
let plasX = 600
let gatX = 140

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(50, 40, 50)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  ellipseMode(RADIUS)
  angleMode(DEGREES)
  textSize(24);
  noStroke();

  if (firstRun) {
    imageMode(CENTER);
    //Torso = loadImage('titanTorso.png');
    Torso = loadImage('titanTorso.png');
    Arms = loadImage('titanArms.png');
    LegL = loadImage('titanlegL.png');
    LegR = loadImage('titanlegR.png');
    firstRun = false;
  }
//old code for line/filmgrain (doesnt work)
 //  let linex = map(other, 0, 100, width / 2, width);
  //  let liney = height;
  //  let otherthickness = map(other, 0, 100, 0, 20);
  //  let linexmirror = map(other, 0, 100, width / 2, 0);
  // let otheropacity = map(other, 0, 100, 0, 255);

  let titanX = width / 2
  let gatO = map(bass, 0, 100, 0, 200);
  let gatO1 = map(bass, 50, 100, 0, 70);
  let explosion = map(drum, 0, 100, width - 200, width);
  let legM = map(bass, 0, 100, 0, 10)
  let legM2 = map(other, 0, 100, 0, 5)
  let plasWeight = map(bass, 0, 100, 10, 15)
  push()
  if (counter > 6000) {
    titanY = height / 2 + map(other, 0, 100, 0, 25)
    sunInnerC = vocal
    sunOuterC = vocal * 5
    sunSize = vocal * 8
  } else {
    titanY = map(counter, 0, 6000, height + 80, height / 2) + map(other, 0, 100, 0, 25)
    sunInnerC = vocal
    sunOuterC = vocal * 8
    sunSize = vocal * 10
  }
  pop()

  //rect(linexmirror, height / 2, 20, height);



  //sun behind titan
  if (counter > 1400) {
    fill(0)
    push();
    //https://www.youtube.com/watch?v=-MUOweQ6wac
    radialGradient(
      width / 2, titanY, sunInnerC,
      width / 2, titanY, sunOuterC,
      color(252, 148, 3, 255),
      color(200, 150, 100, 0),
    );
    ellipse(width / 2, height / 2, sunSize, sunSize);
    pop();
  }
  //titan
  push();
  scale(1);
  image(Torso, titanX, titanY);
  image(Arms, titanX - 10, titanY + 145);
  image(LegL, titanX - 150, titanY + 310 - legM + legM2);
  image(LegR, titanX + 165, titanY + 340 + legM - legM2);
  pop();
  //weapon firing 
  if (counter > 7200) {
    push();
    //https://www.youtube.com/watch?v=-MUOweQ6wac
    radialGradient(//leftside gat cannon
      gatX, 800, 0,
      gatX, 800, 20 + bass,
      color(255, 255, 150, gatO),
      color(200, 200, 100, 0),
    );
    ellipse(gatX, 800, 150, 150)
    pop();
    push()
    strokeWeight(plasWeight)
    stroke(200, 200, 100, gatO1)
    line(gatX, weaponY, gatX - 100, 820)
    line(gatX, weaponY, gatX - 80, 825)
    line(gatX, weaponY, gatX - 60, 830)
    line(gatX, weaponY, gatX - 80, 810)
    line(gatX, weaponY, gatX - 60, 815)
    stroke(200, 200, 100, gatO1)
    line(gatX - 120, 825, gatX - 200, 830)
    line(gatX - 100, 830, gatX - 120, 835)
    line(gatX - 80, 835, gatX - 100, 840)
    line(gatX - 100, 815, gatX - 120, 820)
    line(gatX - 80, 820, gatX - 100, 825)
    pop()
    push()//rightside weapon plasma
    radialGradient(
      plasX, weaponY, 5,
      plasX, weaponY, 20 + bass * 2,
      color(100, 255, 255, gatO),
      color(3, 252, 215, 0),
    );
    ellipse(plasX, weaponY, bass * 3)
    pop()
    push()
    strokeWeight(plasWeight)
    stroke(3, 252, 215, gatO)
    line(plasX, weaponY, plasX + 150, weaponY + 20)
    pop()

  }
  if (counter > 8500) {//titan eyes
    push()
    radialGradient(
      titanX, titanY, 0,
      titanX, titanY, other,
      color(200, 50, 50, gatO1 + 30),
      color(184, 17, 6, 0),
    );
    ellipse(titanX - 25, titanY, 20 + other, 20 + other), ellipse(titanX + 25, titanY, 20 + other, 20 + other)
    arc(titanX + 15, titanY, 15, 10, 0, 170), arc(titanX - 15, titanY, 15, 10, 10, 180)
    pop()

  }

  fill(30, 0, 20);//ground
  rect(width / 2, height, width, explosion);

  push();//vinette
  radialGradient(
    width / 2, height / 2, 0,
    width / 2, height / 2, width + vocal * 10,
    color(255, 255, 100, 10),
    color(255, 255, 100, 150),
  );
  ellipse(width / 2, height / 2, width, height);
  pop();
}


function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;

}