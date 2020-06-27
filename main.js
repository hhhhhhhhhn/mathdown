const md = markdownit().use(markdownitMath)

const textarea = document.getElementById("textarea")
const out = document.getElementById("out")

//https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(file, text) {
  var element = document.createElement("a")
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text))
  element.setAttribute("download", file)
  element.style.display = "none"
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

async function render(){
	out.innerHTML = md.render(textarea.value)
}

var renderTimeout = null

textarea.addEventListener("input", ()=>{
	clearTimeout(renderTimeout)
	var renderTimeout = setTimeout(()=>{render(); MathJax.typesetPromise()}, 1000)
})

