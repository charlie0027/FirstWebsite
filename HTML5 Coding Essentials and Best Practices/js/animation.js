var canvas, ctx;
var robotX=0, robotY=0;
var incrementX = 0;
var incrementY = 0;
var leftarrow, rightarrow, downarrow, uparrow;
function init2() {

    // This function is called after the page is loaded
    // 1 - Get the canvas
    canvas = document.querySelector('#myCanvas2');
    // 2 - Get the context
    ctx=canvas.getContext('2d');
    // 3 - we can draw
    drawMonster();
    leftArrow();
    rightArrow();
    downArrow();
    upArrow();
    letters();

    window.addEventListener('keydown', handleKeydown, false);
    window.addEventListener('keyup', handleKeyup, false);

    requestId = requestAnimationFrame(animationLoop);  
}

function handleKeydown(evt) {
    if (evt.keyCode === 37) {
        //left key 
        incrementX = -1;
        leftarrow = 'yellow';
    } else if (evt.keyCode === 39) {
        // right key
        incrementX = 1;
        rightarrow = 'yellow';
    } else if (evt.keyCode === 38) {
        // right key
        incrementY = -1;
        uparrow = 'yellow';
    }else if (evt.keyCode === 40) {
        // right key
        incrementY = 1;
        downarrow = 'yellow';
    }
}
function handleKeyup(evt) {
    incrementX = 0;
    incrementY = 0;
    leftarrow = 'black';
    rightarrow = 'black';
    downarrow = 'black';
    uparrow = 'black';
}

function animationLoop() {
    // 1 - Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 2 Draw the monster using variables for pos, angle, etc.
   drawMonster(robotX, robotY);
   leftArrow(0,0,0, leftarrow);
   rightArrow(0,0,0, rightarrow);
   downArrow(0,0,0, downarrow);
   upArrow(0,0,0, uparrow);
   letters();
   // 3 Move the monster (change pos, angle, size, etc.)
   robotX += incrementX;
   robotY += incrementY;

   requestId = requestAnimationFrame(animationLoop);
}

function drawMonster(x, y, angle) {   
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    ctx.save();

    // Moves the coordinate system so that the monster is drawn
    // at position (x, y)
    ctx.translate(x, y);
    ctx.rotate(angle);

    //antenna
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,10,5);
    ctx.fillStyle = "black";
    ctx.fillRect(10,15,10,70);
    ctx.fillStyle = "yellow";
    ctx.fillRect(100,10,10,5);
    ctx.fillStyle = "black";
    ctx.fillRect(100,15,10,70);

    //head
    ctx.fillStyle = "blue";
    ctx.fillRect(20,30,80,80);
    ctx.fillStyle = 'black';
    ctx.fillRect(24.5,100,70,20);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(44.5,115,30,10);

    //eyes
    ctx.fillStyle = "yellow";
    ctx.fillRect(29.5, 45, 20,3);
    ctx.fillRect(29.5, 50, 20,3);
    ctx.fillRect(69.5, 45, 20,3);
    ctx.fillRect(69.5, 50, 20,3);

    //nose
    ctx.beginPath();
    ctx.moveTo(59.5, 60);
    ctx.lineTo(69.5, 75);
    ctx.lineTo(49.5, 75);
    ctx.fill();

    //mouth
    ctx.beginPath();
    ctx.strokeStyle = 'yellow';
    ctx.moveTo(44.5, 87);
    ctx.lineTo(74.5, 87);
    ctx.lineWidth = 2;
    ctx.stroke();

    // GOOD PRACTICE !
    ctx.restore();
}

function leftArrow(x,y,angle, color){
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle);
    //arrows
    ctx.fillStyle = "black";
    ctx.fillStyle = color;
    ctx.fillRect(240,120,15,3);
    // GOOD PRACTICE !
    ctx.restore();
}

function rightArrow(x,y,angle, color){
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle);
    //arrows
    ctx.fillStyle = "black";
    ctx.fillStyle = color;
    ctx.fillRect(265,120,15,3);
    // GOOD PRACTICE !
    ctx.restore();
}

function downArrow(x,y,angle, color){
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle);
    //arrows
    ctx.fillStyle = "black";
    ctx.fillStyle = color;
    ctx.fillRect(259,125,3,15);
    // GOOD PRACTICE !
    ctx.restore();
}

function upArrow(x,y,angle, color){
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle);
    //arrows
    ctx.fillStyle = "black";
    ctx.fillStyle = color;
    ctx.fillRect(259,103,3,15);
    // GOOD PRACTICE !
    ctx.restore();
}

function letters(){
    ctx.font = "12pt Beyond The Mountains";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "red";
    ctx.fillText('This is my', 125, 30)
    ctx.font = "9pt Goudy Stout";
    ctx.fillText('Java', 185, 30);
    ctx.fillStyle = "blue";
    ctx.fillText('BOT', 247, 30);
}
