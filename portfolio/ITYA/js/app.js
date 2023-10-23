let navlinks = document.querySelectorAll("header div nav ul li a")
let whatwecando = document.querySelector(".btn-cnt a")

whatwecando.addEventListener('click', () => {
document.getElementById("services").scrollIntoView({ 
  behavior: 'smooth', 
  behavior: "smooth",
  block: "center"
})

})

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

