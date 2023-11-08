let navlinks = document.querySelectorAll("header nav ul li a")
let whatwecando = document.querySelector("#home .lft-cnt a")
let wwcdelement = document.getElementById("services")
let brandscontainer = document.querySelector("#brands")
let homecontainer = document.querySelector("#home")
const fragment = document.createDocumentFragment()

let isMob360Html



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
const isMob457 = window.matchMedia('(min-width: 457px)'); 
const isMob768 = window.matchMedia('(min-width: 768px)'); 

  const handleResize360 = e => { 
	
   if (e.matches) {   
	 console.log(e.matches) 
	 console.log('viewport above 360px!'); 
	
	brandscontainer.innerHTML +=  `
	   <div class="brand-cnt">
		   <img src="img/intuneicn.svg" width="111" height="25" alt="Micorsoft Intune Logo">
	   </div>
	   <div class="brand-cnt">
		   <img src="img/azureicn.svg" width="111" height="25" alt="Micorsoft Azure Logo">
	   </div>	
  `

   } else {
	   
	
	   
	   brandscontainer.innerHTML = `
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
 
 	brandscontainer.innerHTML += `<div class="brand-cnt">
	 <img src="img/knoxicn.svg" width="111" height="25" alt="Samsung Knox Logo">
	 </div>`
	  
	 } else {
		 
		 brandscontainer.innerHTML = `
				<div class="brand-cnt">
					<img src="img/intuneicn.svg" width="111" height="25" alt="Micorsoft Intune Logo">
				</div>
				<div class="brand-cnt">
					<img src="img/azureicn.svg" width="111" height="25" alt="Micorsoft Azure Logo">
				</div>	
				<div class="brand-cnt">
					   <img src="img/365icn.svg" width="111" height="25" alt="Microsoft 365 Logo">
				   </div>
				   <div class="brand-cnt">
					   <img src="img/win11icn.svg" width="111" height="25" alt="Windows 11 Logo">
				   </div>	
		   `
		 
	 }
  }; 

const handleResize768 = e => { 
		
		if (e.matches) {   
		 console.log(e.matches) 
		 console.log('viewport above 768px!'); 
		  let div = document.createElement('div')
			  div.classList.add('rgt-cnt')
			  div.innerHTML = ` 
			  <img src="img/dcenter.png" width="296" height="296" alt="Data Center Image">
				
			  `
			  fragment.appendChild(div)
			  homecontainer.appendChild(fragment)
			  
		     brandscontainer.innerHTML = ""
		 
		} else {
			
			const div768reset = document.querySelector('#home .rgt-cnt')
			console.log(div768reset)
		div768reset.parentNode.removeChild(div768reset)

			brandscontainer.innerHTML = `
					<div class="brand-cnt">
						<img src="img/intuneicn.svg" width="111" height="25" alt="Micorsoft Intune Logo">
					</div>
					<div class="brand-cnt">
						<img src="img/azureicn.svg" width="111" height="25" alt="Micorsoft Azure Logo">
					</div>	
					<div class="brand-cnt">
						   <img src="img/365icn.svg" width="111" height="25" alt="Microsoft 365 Logo">
					   </div>
					   <div class="brand-cnt">
						   <img src="img/win11icn.svg" width="111" height="25" alt="Windows 11 Logo">
					   </div>	
					   <div class="brand-cnt">
						<img src="img/knoxicn.svg" width="111" height="25" alt="Samsung Knox Logo">
						</div>
			   `
		}
	 }; 

 // handles our media query as/when it changes 
 isMob360.addEventListener('change', e => handleResize360(e)); 
 isMob457.addEventListener('change', e => handleResize457(e));  
 isMob768.addEventListener('change', e => handleResize768(e)); 
 
 // instantiates the media query at load-time 
 handleResize360(isMob360) 
 handleResize457(isMob457) 
 handleResize768(isMob768) 
 
 
 

 
 

 