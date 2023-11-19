const generalidx = document.querySelector('#general')
const homeparaidx = document.querySelector('#home div div')
const homedcimgidx = document.querySelector('#home div div:nth-child(2)')

let mediaMMList = [
	window.matchMedia("(max-width: 360px)"),
	window.matchMedia("(min-width: 360px)"),
	window.matchMedia("(min-width: 414px)"),
	window.matchMedia("(min-width: 768px)")
]

const mqrmax360 = () => {
	console.log("360")
 	

generalidx.innerHTML = `<ul>
<li>
	<h2>Investment Fund Backed</h2>
	<p>Substantial Resources</p>
</li>
<li>
	<h2>Consulting</h2>
	<p>Over 100 years of experience</p>
</li>
						</ul>`
						
						
homeparaidx.innerHTML = `
	<p>'Delivering technical solutions and building a partnership that’s trustworthy.'</p>
`						
homedcimgidx.innerHTML = `<img class="dc" src="img/mobdc320.png" width="112" height="181" alt="Data Center">`

}



const mqr360 = () => {
	console.log("360")
	homeparaidx.innerHTML = `
		<p>'Delivering cutting edge technical solutions and building a partnership that’s trustworthy and valued.'</p>
	`						
homedcimgidx.innerHTML = `<img class="dc" src="img/mobdc320.png" width="112" height="181" alt="Data Center">`
	
	
	generalidx.innerHTML = `<ul>
	<li>
		<h2>Investment Fund Backed</h2>
		<p>Substantial Resources</p>
	</li>
	<li>
		<h2>Consulting</h2>
		<p>Over 100 years of experience</p>
	</li>
							</ul>`
	
}


const mqr414 = () => {
	console.log("414")	

generalidx.innerHTML = `<ul>
<li>
	<h2>Investment Fund Backed</h2>
	<p>Substantial Resources</p>
</li>
<li>
	<h2>Consulting</h2>
	<p>Over 100 years of experience</p>
</li>
<li>
	<h2>Expanded</h2>
	<p>Internationally</p>
</li>		
		
						</ul>`
						
homedcimgidx.innerHTML = `<img class="dc" src="img/mobdc320.png" width="112" height="181" alt="Data Center">`						

 } 
 
const mqr768 = () => {
	homedcimgidx.innerHTML = `<img class="dc" src="img/dcenter.png" width="350" height="350" alt="Data Center Image">`
} 
 
 
const mqresponse = (mediaMM) => {
	if (mediaMMList[0].matches){ 
	mqrmax360()
	
}
	if (mediaMMList[1].matches){ 
	mqr360()
	}
		
	if (mediaMMList[2].matches){ 
	mqr414()
	
	
	} 
	
	if (mediaMMList[3].matches){ 
	mqr768()
	
	
	} 	
	// if (!mediaMMList[0].matches && !mediaMMList[1].matches){ // neither queries matched
	// 	let genRemChild = generalList.lastChild
	// 	
	// 	generalList.removeChild(genRemChild)
	// 	
	// 	console.log(genRemChild)
	// }

 }
 
for (var i=0; i<mediaMMList.length; i++){
	mqresponse(mediaMMList[i]) // call listener function explicitly at run time
	mediaMMList[i].addListener(mqresponse) // attach listener function to listen in on state changes
}

