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
  left: 490,
  top: 700
}

// the missile
var missiles= [];


// where the invaders will be and create where they will be


var invaders= [
  { left:100, top: 115 }, // 1
  { left:200, top: 115 }, // 2
  { left:300, top: 115 }, // 3
  { left:400, top: 115 }, // 4
  { left:500, top: 115 }, // 5
  { left:600, top: 115 }, // 6
  { left:700, top: 115 }, // 7
  { left:800, top: 115 }, // 8

  { left:100, top: 175 }, // 1
  { left:200, top: 175 }, // 2
  { left:300, top: 175 }, // 3
  { left:400, top: 175 }, // 4
  { left:500, top: 175 }, // 5
  { left:600, top: 175 }, // 6
  { left:700, top: 175 }, // 7
  { left:800, top: 175 }, // 8

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
  for (var missile = 0; missile<missiles.length; missile++) {

    // added another div tag that specifies the missiles pistols
    // document.getElementById('missles').innerHTML
    // youre appeneding it to the array, have to use the back tick, in the missiles[i] is just putting the number and showing us the left and right property
    document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px'></div>`;
  }
}
// so this is gonna be put in the game loop in order to make it to move
function moveMissiles() {
  for(var missile = 0 ; missile < missiles.length ; missile++ ) {
  missiles[missile].top = missiles[missile].top - 8
  }
}



//
function drawInvaders() {
    document.getElementById('invaders').innerHTML = "";
    for(var invader = 0 ; invader < invaders.length ; invader++ ) {
    document.getElementById('invaders').innerHTML += `<div class='invaderz' style='left:${invaders[invader].left}px; top:${invaders[invader].top}px'></div>`;
  }
}


// allow the invaders to move down
  function moveInvaders() {
      for(var invader = 0 ; invader < invaders.length; invader++ ) {
      invaders[invader].top = invaders[invader].top + 1;
  }
}



// we have to create a game loop so the missiles actually move
function gameLoop () {
// use the javascript set timeout function
  setTimeout(gameLoop , 65)
// so you want to move the missile then re draw it in the new spot
  drawMissiles();
  moveMissiles();
  drawInvaders();
  moveInvaders();

}

gameLoop();

// get ship to move and fire missiles
function handleKeyPress (e) {
  if (e.which == 39) {
    console.log("right");
    ship.left = ship.left + 18;
  }
  if (e.which == 37) {
    console.log("left");
    ship.left = ship.left - 18;
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








// how to make things hit each
function hitThings() {
  for(var invader = 0 ; invader < invaders.length; invader++ ) {
    for(var missile = 0 ; missile < missiles.length ; missile++ ) {

      if(
        (missiles[missile].top <= invaders[invader].top + 75) &&
        (missiles[missile].top >= invaders[invader].top) &&
        (missiles[missile].left >= invaders[invader].left) &&
        (missiles[missile].left <= invaders[invader].left + 75)
      ){
        invaders.splice(invader, 1);
        missiles.splice(missile, 1);
        }

    }
  }
}


// make pause button
function myPauseAlert () {
  alert("Game Is Paused!");
}

// make alert

  function checkElem(){

  var element = document.getElementById('invaders');
  if(element.innerHTML==''){
    console.log('Empty Element')

    myStop();
    alert("Congrats Cadet! You Completed the Mission!")

  }

}


var timer

function runLoop () {
  timer = setTimeout( runLoop, 100)

  hitThings();
  checkElem();

}

runLoop();


function myStop () {
  clearTimeout(timer);
}
