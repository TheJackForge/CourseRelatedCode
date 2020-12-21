const btns = document.querySelectorAll('.faq-toggle')


btns.forEach( (button) => {
    button.addEventListener('click', () => {
        const btnParent = button.parentNode;
        btnParent.classList.toggle('active');
    })
})
