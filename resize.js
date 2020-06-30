var grabbing = false

document.addEventListener("mousemove", (e)=>{
	if(grabbing){
		e.preventDefault()
		textarea.style.width = e.clientX * 100 / window.innerWidth + "vw"
	}
})

border.addEventListener("mousedown", ()=>{
	grabbing = true
	textarea.style.cursor = "ew-resize"
})

document.addEventListener("mouseup", ()=>{
	grabbing = false
	textarea.style.cursor = ""
})