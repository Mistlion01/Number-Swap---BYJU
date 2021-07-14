var Hello=prompt ("HelloEnteranumber")
var Hi=prompt ("HiEntersecondnumber")

function setup() {
  var button=createButton ("[Click!!]")
  button.mousePressed(Swap)
  createCanvas(400, 400);
}


function draw() {
  
  background(220);
}

function Swap () {
  [Hello,Hi]=[Hi,Hello]

  console.log ("firstnumber"+Hello)

console.log ("secondnumber"+Hi)
}


