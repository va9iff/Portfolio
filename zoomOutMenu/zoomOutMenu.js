var zoomOutMenu = {
	init: () => {
		let main = document.querySelector("#main")
		let projectsBtn = document.querySelector("#projects")
		let content = document.querySelector("#content")

		projectsBtn.onclick = zoomOutMenu.cfun
	},
	cfun: () => {
		// main.style.height = 80 + "px"
		main.classList.add('mainZoomedOut')
		content.classList.add('contentZoomedOut')
	},
}

zoomOutMenu.init()
