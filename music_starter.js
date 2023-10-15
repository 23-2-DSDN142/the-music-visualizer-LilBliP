// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun=true;
let Torso,Arms,LegL,LegR;
let titanX;
let titanY;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(200)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  ellipseMode(RADIUS)
  textSize(24);
  noStroke();
  
  if(firstRun){
    imageMode(CENTER);
    //Torso = loadImage('titanTorso.png');
    Torso = loadImage('titanTorso.png');
    Arms = loadImage('titanArms.png');
    LegL = loadImage('titanlegL.png');
    LegR = loadImage('titanlegR.png');
    firstRun=false;
  }
  


 let vocalloud = map(vocal, 50, 100, 0, 100);
  let linex = map(other, 0, 100, width / 2, width);
  let liney = height;
  let otherthickness = map(other, 0, 100, 0, 20);
  let linexmirror = map(other, 0, 100, width / 2, 0);
let otheropacity = map(other, 0, 100, 0, 255);
  let explosion = map(drum, 0, 100, width-200, width);
  let titanY = map(counter,0,8000,height+80,height/2)+map(other,0,100,0,25)

//rect(linexmirror, height / 2, 20, height);

let titanX = width/2







// for(let i=1; i < 6; i++){
//   let ellipseMove = i*20
// ellipse(width/2+ellipseMove,height/2+ellipseMove,20,20)
// }

if(counter>1400){
  fill(0)
  push();
//https://www.youtube.com/watch?v=-MUOweQ6wac
radialGradient(
width/2, height/2, vocal,
width/2, height/2, vocal*5,
color(10, 10, 10, 255),
color(55, 55, 55, 0),  
);
ellipse(width/2, height/2, vocal*5, vocal*5);
pop();
}

push();
scale(1);
  image(Torso,titanX,titanY);
  image(Arms,titanX-10,titanY+145);
  image(LegL,titanX-150,titanY+310);
  image(LegR,titanX+165,titanY+340);
  pop();


fill(100,50,50);
rect(width/2, height, width, explosion);

  push();
  //https://www.youtube.com/watch?v=-MUOweQ6wac
radialGradient(
  width/2, height/2, 0,
  width/2, height/2, width+vocal*10,
  color(255, 255, 100, 10), 
  color(255, 255, 100, 150), 
);
ellipse(width/2, height/2, width, height);
pop();



let rectHeight = map(drum, 0, 100, 300, 700);
rectMode(CORNER)

//for(let i=0; i<100;i++){
  //push()
 
//pop()
  // liney = liney-10//-i}

}


function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;

}

