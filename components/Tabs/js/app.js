const tabs = document.querySelectorAll(".tab")
const tabs_content = document.querySelectorAll('.tab-content')

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', _ => {
		for (let j = 0; j < tabs_content.length; j++) {
			j === i ? tabs_content[j].classList.add('visible') : tabs_content[j].classList.remove('visible')
			j === i ? tabs[j].classList.add('active') : tabs[j].classList.remove('active')
		}
	})
}