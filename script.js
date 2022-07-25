


var editor = ace.edit("editor");
editor.setTheme("ace/theme/chaos");
editor.session.setMode("ace/mode/javascript");


let fileBtn = document.getElementById("fileBtn")
let searchBtn = document.getElementById("search-btn")
let sourceControl = document.getElementById("source-control")
let debug = document.getElementById("debug")
let union = document.getElementById("union")






fileBtn.addEventListener("click", ()=>{
    fileBtn.classList.toggle("active")

    debug.classList.remove("active")
    sourceControl.classList.remove("active")
    searchBtn.classList.remove("active")
    union.classList.remove("active")
})

searchBtn.addEventListener("click", ()=>{
    searchBtn.classList.toggle("active")

    debug.classList.remove("active")
    sourceControl.classList.remove("active")
    union.classList.remove("active")
    fileBtn.classList.remove("active")
})

sourceControl.addEventListener("click", ()=>{
    sourceControl.classList.toggle("active")

    debug.classList.remove("active")
    union.classList.remove("active")
    searchBtn.classList.remove("active")
    fileBtn.classList.remove("active")
    
})

debug.addEventListener("click", ()=>{
    debug.classList.toggle("active")

    
    union.classList.remove("active")
    sourceControl.classList.remove("active")
    searchBtn.classList.remove("active")
    fileBtn.classList.remove("active")


})

union.addEventListener("click", ()=>{
    union.classList.toggle("active")
    debug.classList.remove("active")
    sourceControl.classList.remove("active")
    searchBtn.classList.remove("active")
    fileBtn.classList.remove("active")



})

