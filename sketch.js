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

  //give it it's properties, position the element
  left: 575,
  top: 750
}

// the missile
var missiles= [];


// where the invaders will be and create where they will be


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
  { left:900, top: 175 } // 8

];


// allow it to move because redraw
function drawShip() {
  // add px to make sure its pixel
  document.getElementById('ship').style.left = ship.left + 'px';
  document.getElementById('ship').style.top = ship.top + 'px';
}

// so we can see the missiles but they wont move
function drawMissiles() {
  // clear out
  document.getElementById('missiles').innerHTML = ""
  for (var i = 0; i<missiles.length; i++) {

    // added another div tag that specifies the missiles pistols
    // document.getElementById('missles').innerHTML
    // youre appeneding it to the array, have to use the back tick, in the missiles[i] is just putting the number and showing us the left and right property
    document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
  }
}
// so this is gonna be put in the game loop in order to make it to move
function moveMissiles() {
  for(var i = 0 ; i < missiles.length ; i++ ) {
  missiles[i].top = missiles[i].top - 8
  }
}



//
function drawInvaders() {
    document.getElementById('invaders').innerHTML = "";
    for(var i = 0 ; i < invaders.length ; i++ ) {
    document.getElementById('invaders').innerHTML += `<div class='invader' style='left:${invaders[i].left}px; top:${invaders[i].top}px'></div>`;
  }
}


// allow the invaders to move down
  function moveInvaders() {
      for(var i = 0 ; i < invaders.length; i++ ) {
      invaders[i].top = invaders[i].top + 1;
  }
}



// we have to create a game loop so the missiles actually move
function gameLoop () {
// use the javascript set timeout function
  setTimeout(gameLoop , 125)
// so you want to move the missile then re draw it in the new spot
  drawMissiles();
  moveMissiles();
  drawInvaders();
  moveInvaders()
}

gameLoop();

// get ship to move and fire missiles
function handleKeyPress (e) {
  if (e.which == 39) {
    console.log("right");
    ship.left = ship.left + 10;
  }
  if (e.which == 37) {
    console.log("left");
    ship.left = ship.left - 10;
  }

  // add missile into array
  if (e.which == 32) {
    console.log("shoot");
    missiles.push( {
      left: ship.left + 20,
      top: ship.top - 20
    });
    console.log(missiles);
    drawMissiles()
  }
  drawShip();
}
