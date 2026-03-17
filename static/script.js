fetch("site.json")
.then(res => res.json())
.then(data => {

const container = document.getElementById("siteList")

data.forEach(site => {

const div = document.createElement("div")
div.className = "site"

div.innerHTML = `
<h3>${site.name}</h3>
<p>${site.desc}</p>
<a href="${site.url}" target="_blank">${site.url}</a>
`

container.appendChild(div)

})

})
document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

if(link.hostname === window.location.hostname){

e.preventDefault()

document.body.style.opacity = "0"
document.body.style.transform = "translateY(10px)"

setTimeout(()=>{
window.location = link.href
},200)

}

})

})

})
