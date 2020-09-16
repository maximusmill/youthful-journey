const menuButton = document.getElementById('mobilemenu');
const menuCon = document.querySelector('.mobmenucon');
const onresize = (event) => {
     let width = event.target.outerWidth;
          if(width === 852 && menuCon.classList.contains('menuDis')) {
            menuCon.classList.remove('menuDis');
            window.removeEventListener("resize", onresize);
         }
}

menuButton.addEventListener('click', () =>{
    menuCon.classList.toggle('menuDis');
    window.addEventListener("resize", onresize);
})
