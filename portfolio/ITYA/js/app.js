let navlinks = document.querySelectorAll("nav uk li a")

for (const link of navlinks) {
	link.addEventListener("click", smoothScroll)
}

 function smoothScroll(e) {
	 e.preventDefault()
	 const hreft = this.getAttribute("href") {
		 behavior: "smooth"
	 }
 }