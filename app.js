var log = console.log
var g = function () {
	return document.querySelector(...arguments)
}
/****************************************/

var contentIsOpened = true
var header = g("#realHeader")
var headerBorder = g("#headerBorder")
var wrapper = g("#wrapper")
var stickyOffset = window.innerHeight * 0.05

var hedaerHider = g('#headerHider')
var headerIsHidden = false

hideHeader=function(e){
	header.style.transform = "translateY(-70%)"
	headerIsHidden = true
	e.stopPropagation()
	header.onclick = unhideHedaer
	hedaerHider.onclick = unhideHedaer
	hedaerHider.innerHTML = "v"

}

unhideHedaer = ()=>{
	header.style.transform = ""
	header.onclick = ()=>{}
	hedaerHider.onclick = hideHeader
	hedaerHider.innerHTML = "^"

}

header.onclick = unhideHedaer



hedaerHider.onclick = hideHeader


/*Sticky header***************************************/

function checkScroll() {
	if (contentIsOpened) {
		if (window.pageYOffset > stickyOffset) {
			header.classList.add("headerScrolled")
			headerBorder.classList.add("headerBorderScrolled")
			wrapper.classList.add("wrapperScrolled")
		} else {
			header.classList.remove("headerScrolled")
			wrapper.classList.remove("wrapperScrolled")
		}
	}
}

window.onscroll = checkScroll

/*Zoom out menu***************************************/

var galleryBg = g('#galleryBg')
var content = g("#content")

zoomTogglers = [
	g("#myImage"),
	g("#crucialContacts"),
	g("#location"),
	g("#gmail"),
	g("#tel"),
	g("#tels"),
	g("#secondaryContacts"),
	g("#instagram"),
	g("#patreon"),
	g("#additionalInfo"),
]

function zoomOut() {
	wrapper.classList.add("wrapperZoomedOut")
	content.classList.add("zoomOutFade")

	galleryBg.classList.remove("bgZoomedIn")

	zoomTogglers.forEach(toggler => (toggler.classList.add("displayNoneInator")))
  projectsButtonText.innerHTML = "back"

  unhideHedaer()
	// headerBorder.classList.add("headerBorderScrolled")

projectsButton.onclick = zoomIn

}

function zoomIn() {
  projectsButtonText.innerHTML = "Projects"

	galleryBg.classList.add("bgZoomedIn")


  wrapper.classList.remove("wrapperZoomedOut")
  content.classList.remove("zoomOutFade")
  zoomTogglers.forEach(toggler => (toggler.classList.remove("displayNoneInator")))

projectsButton.onclick = zoomOut

}

var projectsButton = g("#buttonWrapper")
var projectsButtonText = g("#projectsOrBackButton")
var wrapper = g("#wrapper")
// log(projectsButton)
projectsButton.onclick = zoomOut


// touch response
////////////////////////////////////////////////////

var touchResponse = g('#touchResponse')
// var touchBlob = g('.touchBlob')

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.onclick = (e)=>
{
	let t = [e.clientX, e.clientY]
	let touchBlob = document.createElement('div')
	touchBlob.className='touchBlob'

	console.log(touchBlob)
	// touchBlob.offsetLeft
	touchBlob.style.left = t[0] + 'px'
	touchBlob.style.top = t[1] + 'px'
	touchResponse.appendChild(touchBlob)
	// setTimeout(()=>touchBlob.style.transform = 'scale(3)')
	setTimeout(()=>{
		touchBlob.style.opacity = 0
		touchBlob.style.transform = 'scale(3) translate(-50%, -50%)'
	})
	setTimeout(()=>touchBlob.remove(), 800)
	console.log(t)
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

projectsButton.click()