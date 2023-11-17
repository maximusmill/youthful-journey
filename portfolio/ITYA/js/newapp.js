const generalList = document.querySelectorAll('#general ul')
// let mediaMMList = [
// 	window.matchMedia("(max-width: 360px)"),
// 	window.matchMedia("(max-width: 414px)"),
// 	window.matchMedia("(max-width: 768px)")
// ]
// [
	// window.matchMedia("(max-width: 360px)"),
	// window.matchMedia("(max-width: 414px)"),

// ]

// for(i = 0; i < mediaMMList.length; i++) {
// 	
// 	console.log(mediaMMList[i])
// 	
// 	
// 	// if(event.matches) { 
// 	// 	//		alert()mediaMMList.addEventListener
// 	// alert("true")
// 	// console.log(mediaMMList.matches)
// }
// }


// console.log(mediaMMList)
// function mediaQResp(mediaMMList){
// 	if (mediaMMList[0].matches){ 
// 		alert("360")
// 	}
// 	if (mqls[1].matches){ // {max-width: 600px} query matched
// 		alert("414")
// 	}
// 	if (!mediaMMList[0].matches && !mediaMMList[1].matches){ // neither queries matched
// 		alert("not 360 or 414")
// 	}
// }
//  
// for (var i=0; i<mediaMMList.length; i++){
// 	mediaQResp(mediaMMList[i]) // call listener function explicitly at run time
// 	mediaMMList[i].addEventListener(mediaQResp) // attach listener function to listen in on state changes
// }

let mediaMMList = [
	window.matchMedia("(max-width: 840px)"),
	window.matchMedia("(max-width: 600px)")
]
 
console.log(mediaMMList) 
 
function mediaqueryresponse(mediaMM){
	if (mediaMMList[0].matches){ // {max-width: 840px} query matched
	console.log("840")
	}
	if (mediaMMList[1].matches){ // {max-width: 600px} query matched
	console.log("600")
	}
	if (!mediaMMList[0].matches && !mediaMMList[1].matches){ // neither queries matched
		console.log("neither")
	}
}
 
for (var i=0; i<mediaMMList.length; i++){
	mediaqueryresponse(mediaMMList[i]) // call listener function explicitly at run time
	mediaMMList[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
}


// mediaMMList.forEach(function (item) {
//  mediaqueryresponse(mediaMMList[item]) // call listener function explicitly at run time
//  mediaMMList[item, index].addEventListener(mediaqueryresponse) // attach listener function to listen in on state changes
// })











