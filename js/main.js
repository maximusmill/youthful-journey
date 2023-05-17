const eye = document.querySelector('.eye')
const work = document.querySelector('.work')
const portfolio = document.querySelector('.portfolio')
const portimg1 = document.querySelector('.portfolio img')
const modal = document.querySelector('.modal')
const modalcontent = document.querySelector('.modal-content')
const closemodal = document.querySelector('.closemodal')
const digits = document.querySelectorAll('#digits span')


const showDigits = () => {
    digits[8].classList.add('digitcolor')
    digits[18].classList.add('digitcolor')
    digits[20].classList.add('digitcolor')
    digits[29].classList.add('digitcolor')
    digits[23].classList.add('digitcolor')
 }

setTimeout(showDigits, 3500)

eye.addEventListener('click', () => {
    work.classList.toggle('work-visible')
    portfolio.classList.toggle('work-visible')
})

portimg1.addEventListener('click', () => {
    modal.classList.add('open-modal')
    modalcontent.classList.add('open-content')
})

closemodal.addEventListener('click', () => {
    modal.classList.remove('open-modal')
    modalcontent.classList.remove('open-content')
})




