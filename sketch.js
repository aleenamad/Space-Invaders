////////////////////////////////////////////
//////////Testing Area////////////////////

//
// var element2 = document.createElement('p')
// element2.innerHTML = "hello world";
// console.log(element2);
// var element = document.getElementById('ship');
// element.append(element2);


////////////////////////////////////////////
//////////Testing Area////////////////////

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', handleKeyPress)
})


// ship variable give position
var ship = {
  left: 575,
  top: 750
}

// the missile
var missles= [];


// where the invaders will be


var invaders= [
  { left:200, top: 100 }, // 1
  { left:300, top: 100 }, // 2
  { left:400, top: 100 }, // 3
  { left:500, top: 100 }, // 4
  { left:600, top: 100 }, // 5
  { left:700, top: 100 }, // 6
  { left:800, top: 100 }, // 7
  { left:900, top: 100 }, // 8
  { left:200, top: 175 }, // 9
  { left:200, top: 175 }, // 1
  { left:300, top: 175 }, // 2
  { left:400, top: 175 }, // 3
  { left:500, top: 175 }, // 4
  { left:600, top: 175 }, // 5
  { left:700, top: 175 }, // 6
  { left:800, top: 175 }, // 7
  { left:900, top: 175 }, // 8

];



function drawShip() {
  document.getElementById('ship').style.left = ship.left + 'px';
  document.getElementById('ship').style.top = ship.top + 'px';
}


function drawMissiles() {
  document.getElementById('missiles')
}



// get ship to move and fire missiles
function handleKeyPress (e) {
  if (e.which == 39) {
    ship.left = ship.left + 10;
  }
  if (e.which == 37) {
    ship.left = ship.left - 10;
  }
  if (e.which == 32) {
    missiles.push( {
      left: hero.left + 20,
      top: hero.top - 20
    });
    drawMissiles()
  }
  drawShip();
}
