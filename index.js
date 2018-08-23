var dodger = document.getElementById('dodger')

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(leftNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
  
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerRight()
  }
})
  
}



