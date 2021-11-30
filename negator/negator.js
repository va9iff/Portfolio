const Negator = {
	init: () => {
		let inverting = document.querySelector(".fakeInverted")
		let invertable = document.querySelector(".realInvertable")
		inverting.innerHTML = invertable.innerHTML
		invertable.addEventListener("mousemove", e => {
			inverting.style.left = e.pageX + "px"
			inverting.style.top = e.pageY + "px"
			// inverting.style.top = e.pageY + "px"
			inverting.children[0].style.left = inverting.offsetWidth/2 - e.pageX + "px"
			inverting.children[0].style.top = inverting.offsetHeight/2 - e.pageY + "px"
			// inverting.children[0].style.top = -e.pageY/2 + "px"

		})
		invertable.addEventListener("mouseleave", e => {
			inverting.style.transitionDuration = 1500+'ms'
			inverting.style.transform = 'scale(0) translate(-50%, -50%)'}
			)
		invertable.addEventListener("mouseenter", e => {
			setTimeout(()=>inverting.style.transitionDuration = 0+'ms')
			inverting.style.transform = 'scale(1.5) translate(-50%, -50%)'
		})

		// console.log(document.querySelector(".realInvertable"))
	},
}

Negator.init()
