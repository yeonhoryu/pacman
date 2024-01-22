var pos = 0;
const pacArray = [
   ['./PacMan1.jpg', './PacMan2.jpg'],
   ['./PacMan3.jpg', './PacMan4.jpg'],
];
let direction = 0;
const pacMen = [];   // this array holds all the pacMen.

function setToRandom(scale) {
   return {
      x: Math.random() * scale,
      y: Math.random() * scale,
   };
}

// Factory to make a PacMan
function makePac() {
   // return an object with values scaled {x: 33, y: 21}
   let velocity = setToRandom(120);
   let position = setToRandom(180);
   // Add image to div id = game
   let game = document.getElementById('game');
   let newImg = document.createElement('img');
   newImg.style.position = 'absolute';
   newImg.style.width = '10vw';
   newImg.style.height = '15vh';
   // setInterval(update, 20);
   // const i = Math.random()
   newImg.src = './PacMan1.png';
   newImg.width = 50;
   newImg.style.left = position.x + 'px';
   newImg.style.top = position.y + 'px';
   game.appendChild(newImg);
   // new style of creating an object
   return { position, velocity, newImg };
}

function update() {
   // loop over PacMan array and move each one and move image in DOM
   pacMen.forEach((item) => {
      checkCollisions(item);
      // console.log("check 3333")
   });
}

function checkCollisions(itemPacMan) {
   pacMen.forEach((item) => {
      if (item.newImg) {
         if (item.position.x + item.velocity.x + item.newImg.width > window.innerWidth ||
            item.position.x + item.velocity.x < 0) {
            item.velocity.x = -item.velocity.x;
         } else {
            item.position.x += item.velocity.x;
         }

         if (item.position.y + item.velocity.y + item.newImg.height > window.innerHeight ||
            item.position.y + item.velocity.y < 0) {
            item.velocity.y = -item.velocity.y;
         } else {
            item.position.y += item.velocity.y;
         }
         // Update the style of the image element
         item.newImg.style.left = item.position.x + 'px';
         item.newImg.style.top = item.position.y + 'px';
      }
   });
}


function startGame() {
   setInterval(update, 300);
}

function makeOne() {
   pacMen.push(makePac());
}