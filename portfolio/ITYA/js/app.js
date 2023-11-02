let navlinks = document.querySelectorAll("header nav ul li a")
let whatwecando = document.querySelector("#home .lft-cnt a")
let wwcdelement = document.getElementById("services")
let brandscontainer = document.querySelector("#brands")
let homecontainer = document.querySelector("#home")
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



// function updateSize() {
// 	viewportsize = window.innerWidth
// }
// 
// window.addEventListener("resize", updateSize);
// updateSize();
// 
// 
// switch(viewportsize) {
//   case 360:
// 	 // code block
// 	 break;
//   case y:
// 	 // code block
// 	 break;
//   default:
// 	 // code block
// }


const isMob360 = window.matchMedia('(min-width: 360px)'); 
const isMob457 = window.matchMedia('(min-width: 457px)'); 
const isMob900 = window.matchMedia('(min-width: 900px)'); 

  const handleResize360 = e => { 
	
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

 const handleResize457 = e => { 
	 
	 if (e.matches) {   
	  console.log(e.matches) 
	  console.log('viewport above 457px!'); 
		let div = document.createElement('div')
			div.classList.add('brand-cnt')
			div.innerHTML = `<img src="img/knoxicn.svg" width="111" height="25" alt="Samsung Knox Logo">`
			fragment.appendChild(div)
			brandscontainer.appendChild(fragment)
 
	  
	 } else {
		 
		 const divreset = document.querySelectorAll('#brands div')[4]
		 console.log(divreset)
		 divreset.parentNode.removeChild(divreset)
		 
	 }
  }; 

const handleResize900 = e => { 
		
		if (e.matches) {   
		 console.log(e.matches) 
		 console.log('viewport above 900px!'); 
		  let div = document.createElement('div')
			  div.classList.add('rgt-cnt')
			  div.innerHTML = ` <img src="img/dcenter.png" width="380" height="380" alt="Data Center Image">
			  <img class="knoxicn shadow" src="img/knoxicn.svg" alt="Samsung Know Logo">
			  <img class="m365icn shadow" src="img/365icn.svg" alt="Microsoft 365 Logo">
			  <img class="azureicn shadow" src="img/azureicn.svg" alt="Microsoft Azure Logo">
			  <img class="intuneicn shadow" src="img/intuneicn.svg" alt="Microsoft Intune Logo">
			  <img class="win11icn shadow" src="img/win11icn.svg" alt="Microsoft Windows 11 logo"> `
			  fragment.appendChild(div)
			  homecontainer.appendChild(fragment)
	
		 
		} else {
			
			const divreset = document.querySelector('#home .rgt-cnt')
			console.log(divreset)
			divreset.parentNode.removeChild(divreset)
			
		}
	 }; 

 // handles our media query as/when it changes 
 isMob360.addEventListener('change', e => handleResize360(e)); 
 isMob457.addEventListener('change', e => handleResize457(e));  
 isMob900.addEventListener('change', e => handleResize900(e)); 
 
 // instantiates the media query at load-time 
 handleResize360(isMob360) 
 handleResize457(isMob457) 
 handleResize457(isMob900) 
 
 
 

 
 

 