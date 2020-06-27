const link = Array.from(document.getElementsByTagName("link")).filter(el => el.href.includes("github"))[0]

function loadTheme(theme){
	document.getElementById("theme").innerHTML = theme
}

function defaultTheme(){
	document.getElementById("theme").innerHTML = ""
}

function toggleGHCSS(){
	if(link.href.includes("DISABLED")) link.href = link.href.slice(0, -8)
	else link.href += "DISABLED"
}