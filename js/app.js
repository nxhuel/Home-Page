const navBarra = document.querySelector(".nav-barra")
const navMenu = document.querySelector(".nav-menu")

navBarra.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})