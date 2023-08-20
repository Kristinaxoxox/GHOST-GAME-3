
const ghost = document.querySelector("#ghost");
let currentGhost = 20;

function moveGhostLeft(){

    ghost.style.position = "relative";
    currentGhost += 20;
    ghost.style.right = `${currentGhost}px`;
    
}
function moveGhostRight(){

    ghost.style.position = "relative";
    currentGhost -= 20;
    ghost.style.right = `${currentGhost}px`;
    
}
function moveGhostUp() {
    ghost.style.position = "relative"; 
    currentGhost -= 20;
    ghost.style.top = `${currentGhost}px`;
}

function moveGhostDown() {
    ghost.style.position = "relative"; 
    currentGhost += 20;
    ghost.style.top = `${currentGhost}px`;
}


function moveLeft(){
    moveGhostLeft();
}

function moveRight(){
    moveGhostRight();
}


function moveUp(){
    moveGhostUp();
}


function moveDown(){
    moveGhostDown();
}

function startContinuousMovement(moveFunction) {
    moveInterval = setInterval(moveFunction, 100);
}

function stopContinuousMovement() {
    clearInterval(moveInterval);
}

   