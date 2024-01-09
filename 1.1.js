const someconst = document.getElementById("someimage");
const somebutton = document.getElementById("pressme");



somebutton.addEventListener("pointerdown", () => {
	someconst.classList.add("active")
})

somebutton.addEventListener("pointerup", () => {
	someconst.classList.remove("active")
	})
