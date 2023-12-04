let mobileMenu = document.querySelector(".header_nav")
let burger = document.querySelector(".header_icon")
let xMark = document.querySelector(".header_icon1")

burger.addEventListener("click", ()=>{
    mobileMenu.classList.add("show")
    burger.style.display = "none";
    xMark.style.display = "flex";
})

xMark.addEventListener("click", ()=>{
    mobileMenu.classList.remove("show")
    burger.style.display = "flex";
    xMark.style.display = "none";
})