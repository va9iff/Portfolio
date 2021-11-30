var contentIsOpened = true
var header = document.querySelector("#realHeader")
var headerBorder = document.querySelector("#headerBorder")
var wrapper = document.querySelector("#wrapper")
var stickyOffset = window.innerHeight * 0.05


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






window.onscroll =  checkScroll