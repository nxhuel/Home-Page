const navBarra = document.querySelector(".nav-barra")
const navMenu = document.querySelector(".nav-menu")

navBarra.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})


const fullImgBox = document.getElementById("fullImgBox"),
fullImg = document.getElementById("fullImg");

function openFullImg(reference) { 
    fullImgBox.style.display = "flex";
    fullImg.src = reference
}

function closeImg() {
    fullImgBox.style.display = "none";
}