let navlinks = document.querySelectorAll("header nav ul li a")
let whatwecando = document.querySelector("#home .lft-cnt a")
let wwcdelement = document.getElementById("services")


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
  
 const handleResize = e => { 
   if (e.matches) { 
	 console.log('viewport above 360px!'); 
   } 
 }; 
  
 // handles our media query as/when it changes 
 isMob360.addEventListener('change', e => handleResize(e)); 
  
 // instantiates the media query at load-time 
 handleResize(isMob360) 