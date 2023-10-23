let navlinks = document.querySelectorAll("header div nav ul li a")

for (const link of navlinks) {
	link.addEventListener("click", smoothScroll)
}

 function smoothScroll(e) {
	 console.log(e)
	 e.preventDefault()
	 const href = this.getAttribute("href") 
	
	document.querySelector(href).scrollIntoView({
	
	    behavior: "smooth",
		block: "center"
	  });
	 
	
 }

