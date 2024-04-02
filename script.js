let bricks, tilesGroup;
let lambImage, img, startTime;
let vialStatus = 'uncollected';
let emmaColor = 'red'

function preload(){
    img = loadImage('media/mazeBg2.png');
}

function setup() {
  canvas = createCanvas(375, 480);
  canvas.parent('container');

  startTime = new Date();
  console.log(startTime)

lamb = new Sprite();
lamb.scale= 0.045
lamb.w = 20;
lamb.h = 18;
lamb.x = 38;
lamb.y = 167;

endMarker = new Sprite();
endMarker.w = 15;
endMarker.h = 15;
endMarker.x = 327;
endMarker.y = 460;
endMarker.colour = color('#446C7D')

noStroke();
allSprites.colour = color('#0E202D')

  bricks = new Group();
  bricks.collider = "static";
  bricks.w = 24;
  bricks.h = 24;
  bricks.tile = 'W'
  bricks.border = 'none'


  tilesGroup = new Tiles(
    [
      'WWWWWWWWWWWWWWW',
      'W       W  W  W',
      'WWW WWW   WWW W',
      'W   W   W   W W',
      'W WWW W W WWW W',
      'W W   W     W W',
      'W   WWWWWWW   W',
      'WWWWW     WWW W',
      'W   WW WW     W',
      'W W    WW WWWWW',
      'W   WW    W   W',
      'W W W WWWWW W W',
      'W   W W     W W',
      'W W     WW WW W',
      'WWWWWWWWWWWWW W'
    ],
    27,
    140,
    23,
    23
  );

  }


function draw() {
  clear();

  background('#446C7D');

  image(img, 0, 0)
  img.width = 375;

  lamb.image = 'media/lambStill.png';
  //lamb.debug = mouse.pressing();

  lamb.rotation = 0;
  
  if (lamb.overlaps(endMarker)) {
    //code from https://stackoverflow.com/questions/41632942/how-to-measure-time-elapsed-on-javascript
    let endTime = new Date();
    console.log(endTime)

    var timeDiff = endTime - startTime;
    timeDiff /= 1000;

    var seconds = Math.round(timeDiff);
    console.log("Time: " + seconds);

    lamb.remove()
    document.getElementById("buttons").style="animation-name: fade;"
    document.getElementById("container").style="animation-name: fade;"
    document.getElementById("buttons").style="animation-name: fade;"

    if (seconds <= 25) {
      document.getElementById("bonusMessage").innerHTML="<br>For your speed and navigation a gift you shall recieve. Give this secret code to Pythia for good blessings in your prophecy:<br><br><span style='font-size:2rem; color: yellow; '>YELLOW<span>"
    }

    showMessage()

  }


}

function moveLeft() {
  lamb.x -= 17;
  lamb.mirror.x = false
}
function moveRight() {
  lamb.x += 17;
  lamb.mirror.x = true
}
function moveUp() {
  lamb.y -= 17;
}
function moveDown() {
  lamb.y += 17;
}
function showMessage() {
  if (document.getElementById("buttons").style="animation-name: fade;"){
    //code from https://www.geeksforgeeks.org/javascript-call-a-function-after-a-fixed-time/
    setInterval(function() { 
      document.getElementById("endMessage").style="animation-name: showPls;"
    }, 1100); 
  }
}
