const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const date = document.getElementById("date");
const year = new Date().getFullYear()

date.innerHTML=year;

navBtn.addEventListener("click", () => {
  console.log("working")
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
