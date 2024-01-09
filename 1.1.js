const someconst = document.getElementById("someimage");
const somebutton = document.getElementById("pressme");



somebutton.addEventListener("mousedown", () => {
	someconst.classList.add("active")
})

somebutton.addEventListener("mouseup", () => {
	someconst.classList.remove("active")
	})
