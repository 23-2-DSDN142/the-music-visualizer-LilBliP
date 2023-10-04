// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  ellipseMode(RADIUS)
  textSize(24);
  noStroke()

 let vocalloud = map(vocal, 50, 100, 0, 100)
  let linex = map(other, 0, 100, width / 2, width);
  let liney = height
  let otherthickness = map(other, 0, 100, 0, 20);
  let linexmirror = map(other, 0, 100, width / 2, 0);
let otheropacity = map(other, 0, 100, 0, 255);
  let explosion = map(drum, 0, 100, 0, height / 2);

//rect(linexmirror, height / 2, 20, height);

//fill(100)
//rect(width/2, height/2, explosion, explosion);



// for(let i=1; i < 6; i++){
//   let ellipseMove = i*20
// ellipse(width/2+ellipseMove,height/2+ellipseMove,20,20)
// }

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

let rectHeight = map(drum, 0, 100, 300, 700);
rectMode(CORNER)

//for(let i=0; i<100;i++){
  //push()
  fill(10,10,10,otheropacity);
  rect(linex, liney, otherthickness, -rectHeight);
  rect(linex, liney, otherthickness, -height/3);
  rect(linex, liney, otherthickness, -height/4);
//pop()
  liney = liney-10//-i}


}


function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;

}

