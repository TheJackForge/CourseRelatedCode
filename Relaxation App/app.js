const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In'
    container.classList.remove('grow')
    container.classList.add('shrink');   
    setTimeout(() => {
        text.innerText = 'Hold'
        setTimeout( () => {
            text.innerText = 'Breath Out'
            container.classList.remove('shrink');  
            container.classList.add('grow')
        }, holdTime)
    }, breatheTime)
}

setInterval(breathAnimation, totalTime);