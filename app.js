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
	zoomTogglers.forEach(toggler => (toggler.classList.add("displayNoneInator")))
  projectsButtonText.innerHTML = "back"
	// headerBorder.classList.add("headerBorderScrolled")

projectsButton.onclick = zoomIn

}

function zoomIn() {
  projectsButtonText.innerHTML = "Projects"

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
