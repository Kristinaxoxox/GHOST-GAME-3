const ghost = document.querySelector('#ghost')
const coordinates = document.querySelector('#coordinates')

let currentX = 20
let currentY = 20

coordinates.textContent = `${currentX} ${currentY}`

function moveGhostLeft() {
  currentX += 20
  ghost.style.right = `${currentX}px`
  coordinates.textContent = `${currentX} ${currentY}`
}
function moveGhostRight() {
  currentX -= 20
  ghost.style.right = `${currentX}px`
  coordinates.textContent = `${currentX} ${currentY}`
}
function moveGhostUp() {
  currentY -= 20
  ghost.style.top = `${currentY}px`
  coordinates.textContent = `${currentX} ${currentY}`
}

function moveGhostDown() {
  currentY += 20
  ghost.style.top = `${currentY}px`
  coordinates.textContent = `${currentX} ${currentY}`
}

function startContinuousMovement(moveFunction) {
  moveInterval = setInterval(moveFunction, 100)
}

function stopContinuousMovement() {
  clearInterval(moveInterval)
}

// Add event listener on keydown
document.addEventListener(
  'keydown',
  (event) => {
    var name = event.key
    var code = event.code

    switch (name) {
      case 'ArrowLeft':
        moveGhostLeft()
        break

      case 'ArrowRight':
        moveGhostRight()
        break

      case 'ArrowDown':
        moveGhostDown()
        break

      case 'ArrowUp':
        moveGhostUp()
        break

      default:
        break
    }

    if (code === 'Space') {
      alert('boooo')
    }
    // Alert the key name and key code on keydown
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`)
  },
  false,
)
