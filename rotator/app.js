Rotator = {
	getRotationElements: function () {
		Rotator.rotators = Array.from(
			document.getElementsByClassName("HoverRotator")
		)
	},
	addListener: function () {
		// document.addEventListener("mouseover", (e) => Rotator.rotateRotators(e))
		document.addEventListener("mousemove", e => Rotator.rotateRotators(e))
	},
	rotateRotators: function (e) {
		Rotator.rotators.forEach(rotator => Rotator.rotateRotator(rotator, e))
	},
	rotateRotator: function (rotator, e) {
		// rotator.angle = mouse.pos.vectorTo(rotator)/someConst
		// console.log(e.pageX)
		// console.log(rotator.offsetLeft-e.pageX)
		let diogonal = Math.sqrt(window.innerHeight ** 2 + window.innerWidth ** 2)
		let distance = Math.sqrt(
			(rotator.offsetLeft - e.pageX) ** 2 + (rotator.offsetTop - e.pageY) ** 2
		)
		let ratio = distance / diogonal

		rotator.style.transform = `rotate(${
			0 + (270 / diogonal) * (distance - 100)
		}deg) translate(-50%, -50%)`
		rotator.style.width = 1*((3 * diogonal) / (distance + 150)) * 1 + 60 + "px"
		rotator.style.height = (diogonal / (distance + 150)) * 1 + 20 + "px"
		rotator.style.opacity = (diogonal / distance) * 0.2

		// rotator.style.height = 1.5 / (distance+window.innerHeight) + "rem"
		// console.log((
		// 	1/(rotator.offsetLeft-e.pageX)**2+
		// 	(rotator.offsetTop-e.pageY)**2
		// 	))
	},
	rotators: [],
	init: function () {
		Rotator.getRotationElements()
		Rotator.addListener()
	},
}

Rotator.init()
