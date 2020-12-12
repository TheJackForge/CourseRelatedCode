const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let width = 0;
let circleNode = 1;



nextBtn.addEventListener('click', () => {
    if (circleNode < 4) {
        circle = circles[circleNode];
        circleNode++;
        circle.classList.add('active');
    } 
    if (circleNode > 1) {
        prevBtn.disabled = false;
    } if (circleNode < 2) {
        prevBtn.setAttribute(disabled, true);
    }
    if (width >= 99) {
        width = 99.9;
    }
    width += 33.3;
    progress.style.width = width + '%';
    console.log(circleNode)
})

prevBtn.addEventListener('click', () => {
    if (circleNode > 1) {
    circle = circles[circleNode-1];
    circleNode--;
    circle.classList.remove('active');
    width -= 33.3;
    progress.style.width = width + '%';
    console.log(circleNode)
    }
})

