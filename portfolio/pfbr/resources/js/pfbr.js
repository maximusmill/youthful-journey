const about = document.querySelector('.menudtab');
const dogs = document.querySelector('.menudtdo');
const liitems = document.querySelectorAll('ul,li,a')
const menuButton = document.getElementById('mobilemenu');
const mobileNav = document.getElementById('nav')

/** Desktop Dropdown Menu **/
liitems.forEach(item => item.addEventListener('click', (event) => {
    if (event.target.className === 'aboutli') {
         about.classList.toggle('menuDisp')
         about.addEventListener('mouseleave', (event) => {
         about.classList.remove('menuDisp')
         })
    }
    else {
         about.classList.remove('menuDisp')
    }
    if (event.target.className === 'dogli') {
         dogs.classList.toggle('menuDisp')
         dogs.addEventListener('mouseleave', (event) => {
         dogs.classList.remove('menuDisp')
         })
    }
    else {
         dogs.classList.remove('menuDisp')
    }
}))

/** Mobile Dropdown **/

menuButton.addEventListener('click', (event) => {
    mobileNav.classList.toggle('menuDisp')
    console.log('guff')
})

