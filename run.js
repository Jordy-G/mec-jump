const westly = document.getElementById('westly');
const yellow = document.getElementById('yellowf');
const score = document.getElementById('score');

function jump() {
 westly.classList.add('jump-animation');
 setTimeout(() => {
    westly.classList.remove('jump-animation');
 }, 500);
}

document.addEventListener('keypress', () => {
    if (!westly.classList.contains('jump-animation')) {
    jump();
  }
});

setInterval(() => {
    score.innerText++;
    const westlyTop = parseInt(window.getComputedStyle(westly).getPropertyValue('top'));
    // console.log(westlyTop)
    const yellowfLeft = parseInt(window.getComputedStyle(yellowf).getPropertyValue('left'));
    // console.log(yellowfLeft)

    if (yellowfLeft < 0) {
        yellowf.style.display = 'none';
    } else {
        yellowf.style.display ='';
    }

    if (yellowfLeft < 50 && yellowfLeft > 0 && westlyTop > 100 ) {
        alert("You got a score: " + score.innerText + "!" +" Play Again?");
        location.reload();
    }

}, 50);
