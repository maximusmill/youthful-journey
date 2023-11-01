let navlinks = document.querySelectorAll("header nav ul li a")
let whatwecando = document.querySelector("#home .lft-cnt a")
let wwcdelement = document.getElementById("services")
let brandscontainer = document.querySelector("#brands")
const fragment = document.createDocumentFragment()


whatwecando.addEventListener('click',smoothScroll)

for (const link of navlinks) {
	link.addEventListener("click", smoothScroll)
}

 function smoothScroll(e) {
	 e.preventDefault()
	 const href = this.getAttribute("href") 
		document.querySelector(href).scrollIntoView({
		behavior: "smooth",
		block: "center"
	  }); 
 }


const isMob360 = window.matchMedia('(min-width: 360px)'); 
  console.log(MediaQueryList)
  console.log(isMob360)
  const handleResize = e => { 
	 console.log(e)
	
   if (e.matches) { 
	   
	  console.log(e.matches) 
	 console.log('viewport above 360px!'); 
	  let div = document.createElement('div')
 		 div.classList.add('brand-cnt')
	 	 div.innerHTML = `<img src="img/intuneicn.svg" width="111" height="25" alt="Micorsoft Intune Logo">`
	 	 fragment.appendChild(div)
	 	 brandscontainer.appendChild(fragment)

	 let div1 = document.createElement('div')
		 div1.classList.add('brand-cnt')
		 div1.innerHTML = `<img src="img/azureicn.svg" width="111" height="25" alt="Micorsoft Azure Logo">`
		 fragment.appendChild(div1)
   		 brandscontainer.appendChild(fragment)
   } else {
	   
	   const divreset = document.querySelector('#brands')
	   
	   divreset.innerHTML = `
		   <div class="brand-cnt">
			   <img src="img/365icn.svg" width="111" height="25" alt="Microsoft 365 Logo">
		   </div>
		   <div class="brand-cnt">
			   <img src="img/win11icn.svg" width="111" height="25" alt="Windows 11 Logo">
		   </div>	
	  `
	   
   }
 }; 
  console.log(brandscontainer)
 // handles our media query as/when it changes 
 isMob360.addEventListener('change', e => handleResize(e)); 
  
 // instantiates the media query at load-time 
 handleResize(isMob360) 