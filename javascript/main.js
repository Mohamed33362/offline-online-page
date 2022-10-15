let title = document.querySelector(".title")
let ul = document.querySelector("ul")
let btn = document.querySelector(".reload")

window.onload = function(){
    if (window.navigator.onLine) {
        online()
    }else {
        offline()
    }
}

window.addEventListener("online",function(){
    online()
})
window.addEventListener("offline",function(){
    offline()
})

btn.onclick = function(){
    window.location.reload()
    console.log("clicked")
}

function online(params) {
    title.innerHTML = `Online Now`
    title.style.color = "green"
    ul.classList.add("hide")
    btn.classList.add("hide")
}
function offline(params) {
    title.innerHTML = `Offline Now`
    title.style.color = "#666"
    ul.classList.remove("hide")
    btn.classList.remove("hide")
}