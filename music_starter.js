// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  ellipseMode(RADIUS)
  textSize(24);
  noStroke()
  // let yellow = (247, 193, 12)
  // let red = (204, 47, 12)
 
  let lerpmap = map(drum, 0, 100, 0, 1);
  //let middleColour = lerpColor(red, yellow, lerpmap)
  var linex = map(bass / 2 + other / 3, 0, 100, width / 2, width);
  var linexmirror = map(bass / 2 + other / 3, 0, 100, width / 2, 0);
  var explosion = map(drum, 0, 100, height / 2, 0);
// fill(middleColour)
rect(linex, height / 2, 20, height);
rect(linexmirror, height / 2, 20, height);
rect(width / 2, height, explosion, explosion);

fill(100, 255, 100, 100);
rect(0, 0, 720, 1280)

}
function draw_one_frame(words, vocal, drum, bass, other, counter){

  
radialGradient(
  width/2, height/2, 0,
  width/2, height/2, 500,
  color(255, 255, 255, 0), 
  color(255, 255, 100, 100), 
);
ellipse(width/2, height/2, 400, 400);
}


function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;

  
}

//let bar_spacing = height / 10;
//  let bar_height = width / 12;
//  let bar_pos_x = width / 2;


//  // vocal bar is red
//  fill(200, 0, 0);
//  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//  fill(0);
//  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

//  // drum bar is green
//  fill(0, 200, 0);
//  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//  fill(0);
//  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

//  // bass bar is blue
//  fill(50, 50, 240);
//  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//  fill(0);
//  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

//  // other bar is white
//  fill(200, 200, 200);
//  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//  fill(0);
//  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//  fill(255, 255, 0);

//  // display "words"
//  textAlign(CENTER);
//  textSize(vocal);
//  text(words, width/2, height/3);



// fill(other+100,vocal+50,25)
//   rect(width/2+other*2,height/2,10,height)
//   rect(width/2+other*3,height/2,10,height)
//   rect(width/2+other*4,height/2,10,height)
//   rect(width/2+other*5,height/2,10,height)
//   rect(width/2-other*2,height/2,10,height)
//   rect(width/2-other*3,height/2,10,height)
//   rect(width/2-other*4,height/2,10,height)
//   rect(width/2-other*5,height/2,10,height)


//   fill(other,bass+vocal,other+bass)
// rect(0,0,5*drum,5*drum)
// rect(width,height,5*drum,5*drum)

// fill(vocal+other,bass+vocal,other+bass)
// ellipse(width/2,height/4,vocal,vocal)
//   ellipse(width/2,height/4*2,vocal,vocal)
// ellipse(width/2,height/4*3,vocal,vocal)

//  //display "words"
//     textAlign(CENTER);
//     textSize(vocal);
//    text(words, width/2, height/2.5);
//    text(words, width/2, height/1.5);