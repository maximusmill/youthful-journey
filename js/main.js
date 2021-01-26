const eye = document.querySelector('.eye')
const work = document.querySelector('.work')


eye.addEventListener('click', () => {
    work.classList.toggle('work-visible')
})

