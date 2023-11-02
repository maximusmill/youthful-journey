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
