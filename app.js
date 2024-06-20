console.log("Welcome to spotify - Web Player");

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
});

let card = document.getElementById("card");
let btnplay = document.querySelectorAll(".btnplay");
let masterplay = document.getElementById("masterplay");

card.addEventListener("mousemove", function () {
  btnplay.style.display = "flex";
  card.style.transition = "1s";
});

masterplay.addEventListener("click", function (e) {
  masterplay.classList.add("fa-solid fa-pause");
});
