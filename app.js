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
	// header.style.transform = "translateY(-70%)"//old
	header.classList.add('hiddenHeader')   //new
	headerIsHidden = true
	// e.stopPropagation()
	header.onclick = ()=>{}
	setTimeout(()=>{
	header.onclick = unhideHeader
	})
	hedaerHider.onclick = unhideHeader
	hedaerHider.innerHTML = "v"

}

unhideHeader = ()=>{
	header.classList.remove('hiddenHeader')   //new
	header.style.transform = ""
	header.onclick = ()=>{}
	hedaerHider.onclick = hideHeader
	hedaerHider.innerHTML = "^"

}

header.onclick = unhideHeader



hedaerHider.onclick = hideHeader


/*Sticky header***************************************/

function maximizeHeader(){
			header.classList.remove("headerScrolled")
			wrapper.classList.remove("wrapperScrolled")
			unhideHeader()
}
function minimizeHeader(){
			header.classList.add("headerScrolled")
			headerBorder.classList.add("headerBorderScrolled")
			wrapper.classList.add("wrapperScrolled")
}

function checkScroll() {
	if (contentIsOpened) {
		if (window.pageYOffset > stickyOffset) {
			minimizeHeader()
		} else {
			maximizeHeader()
		}
	}
	let nampos = nameSlide.getBoundingClientRect();
	let namposr = nampos.top/window.innerHeight+0.2
	if (namposr>0){
			nameSlide.style.filter = `hue-rotate(${namposr*1000}deg)`
			nameSlide.children[0].style.marginLeft = (1-namposr)*100 +'%'
			// hide the name with scroll
			// nameSlide.style.width = namposr*100-50+'%'
			// nameSlide.style.opacity = namposr-0.2
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
	// g("#tel"),
	g("#tels"),
	g("#secondaryContacts"),
	// g("#instagram"),
	g("#patreon"),
	//g("#additionalInfo"),
]

function zoomOut(e) {
	contentIsOpened = false

	wrapper.classList.add("wrapperZoomedOut")
	content.classList.add("zoomOutFade")

	galleryBg.classList.remove("bgZoomedIn")

	zoomTogglers.forEach(toggler => (toggler.classList.add("displayNoneInator")))
  projectsButtonText.innerHTML = "back"

  setTimeout(()=>maximizeHeader())

  unhideHeader()

  zoomOutMenu.style.opacity=1
  zoomOutMenu.style.pointerEvents="all"
  zoomOutMenu.style.transform= 'translateX(0)'

  // e.stopPropagation()

  // minimizeHeader()

  // setTimeout(unhideHeader, 2000)
	// headerBorder.classList.add("headerBorderScrolled")

projectsButton.onclick = zoomIn

}

function zoomIn() {
	contentIsOpened = true
  projectsButtonText.innerHTML = "Projects"

	galleryBg.classList.add("bgZoomedIn")


  wrapper.classList.remove("wrapperZoomedOut")
  content.classList.remove("zoomOutFade")
  zoomTogglers.forEach(toggler => (toggler.classList.remove("displayNoneInator")))

  zoomOutMenu.style.opacity=0
  zoomOutMenu.style.pointerEvents="none"
zoomOutMenu.style.transform= 'translateX(100%)'

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



// zoomoutmenu
zoomOutMenu = g('#zoomOutMenu')




// projectsButton.click()



let nameSlide = g('#nameSlide')
// nameSlide.style.transform = 'translateX(200px)'
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! to complete

checkScroll()


// skills tab
let skillTabs = document.getElementsByClassName('skillTab')
let skillDescription = g('#skillDescription')
let activeSkillTab = skillTabs[0]
for (const skillTab of skillTabs){
		skillTab.itsDescription = g('#skill'+skillTab.innerHTML)
	skillTab.onclick = ()=>{
		activeSkillTab.itsDescription.style.display = 'none'
		activeSkillTab.classList.remove('activeSkillTab')
		// skillDescription.innerHTML = skillTab.innerHTML
		activeSkillTab = skillTab
		activeSkillTab.classList.add('activeSkillTab')
		// skillTab.itsDescription.style.opacity = 0.0
		// skillTab.itsDescription.style.letterSpacing = '4rem'
		skillTab.itsDescription.style.transform = 'scale(0)'
		skillTab.itsDescription.style.display = 'flex'
		setTimeout(()=>{
			// skillTab.itsDescription.style.opacity = 1;
			// skillTab.itsDescription.style.letterSpacing = '0.1rem'
		skillTab.itsDescription.style.transform = 'scale(1)'
		})
		console.log(skillTab.itsDescription)
	}
}

activeSkillTab.click()



// projects gallery reminder
let projectsReminder = g('#projectsReminder')
projectsReminder.onclick = ()=>{
	zoomOut()
	projectsReminder.style.display = 'none'
}


zoomIn()