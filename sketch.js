function setup(){
    createCanvas(600,400);
    background(0);

}

function draw(){
   strokeWeight(5);
   stroke(255);


var x = 0;
while(x < 650){
    fill(23, 57, 112);
    ellipse(x, 255, 25, 25);
    x = x + 50;
}

for(var x = 0; x < 650; x = x + 75){
    fill(33, 188, 18);
    ellipse(200, x, 25, 25);
}
}