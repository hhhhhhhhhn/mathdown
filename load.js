var text = localStorage.getItem("md_text")
var file = localStorage.getItem("md_file")
var theme = localStorage.getItem("md_theme")

window.addEventListener("beforeunload", ()=>{
	localStorage.setItem("md_text", document.getElementById("textarea").value)
	localStorage.setItem("md_file", window.file)
	localStorage.setItem("md_theme", document.getElementById("theme").innerHTML)
})

if(file) window.file = file
if(theme) loadTheme(theme)
if(text){
	document.getElementById("textarea").value = text
	render()
	try{
		MathJax.typesetPromise()
	}
	catch{}
}