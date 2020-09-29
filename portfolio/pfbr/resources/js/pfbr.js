const about = document.querySelector('.menudtab');
const dogs = document.querySelector('.menudtdo');
const liitems = document.querySelectorAll('ul,li,a')

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
//
// const menuButton = document.getElementById('mobilemenu');
// const menuCon = document.querySelector('.mobmenucon');
// const onresize = (event) => {
//     let width = event.target.outerWidth;
//     if(width === 852 && menuCon.classList.contains('menuDis')) {
//         menuCon.classList.remove('menuDis');
//         window.removeEventListener("resize", onresize);
//     }
// }
//
// menuButton.addEventListener('click', () =>{
//     menuCon.classList.toggle('menuDis');
//     window.addEventListener("resize", onresize);
// })
