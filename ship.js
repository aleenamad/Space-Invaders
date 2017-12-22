// create the ship
function ship () {
  // put the ship in the middle.
  this.x = width/2;




  this.show = function () {
    rect(this.x, height-20, 20, 60);
    fill(blue);
  }

}
