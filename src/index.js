import createNavbar from "./navbar";
import createHome from "./home";
import { createMenu } from "./menu";
import createContact from "./contact";
import "./css/index.css";
import homeImage from "./images/food.png";
import chefHat from "./images/chef-hat.png";
import createAbout from "./about";

// Setup Navbar
const header = document.querySelector("#header");
const hat = new Image();
hat.src = chefHat;
hat.classList.add("logo");
const navbar = createNavbar({
  logo: hat,
  title: "Rose Kitchen",
  navbarItems: ["Home", "Menu", "Contact", "About"],
});

header.appendChild(navbar);

const content = document.querySelector("#content");
const hamBtn = document.querySelector(".toggle-button");
const navItems = document.querySelectorAll(".nav-item");

function setupHome() {
  const image = new Image();
  image.src = homeImage;
  image.classList.add("home-image");

  const home = createHome();
  home.appendChild(image);
  content.appendChild(home);
}

setupHome();

function markActiveNav(target) {
  navItems.forEach((item) => {
    console.log(item);
    item.classList.remove("active-nav");
    if (item === target) {
      target.classList.add("active-nav");
    }
  });
}

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", (e) => {
  content.style.opacity = 0;
  hamBtn.click();
  markActiveNav(e.target);
  setTimeout(() => {
    content.innerHTML = "";
    setupHome();
    content.style.opacity = 1;
  }, 300);
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", (e) => {
  content.style.opacity = 0;
  hamBtn.click();
  markActiveNav(e.target);
  setTimeout(() => {
    content.innerHTML = "";
    const menu = createMenu();
    content.appendChild(menu);
    content.style.opacity = 1;
  }, 300);
});

const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", (e) => {
  content.style.opacity = 0;
  hamBtn.click();
  markActiveNav(e.target);
  setTimeout(() => {
    content.innerHTML = "";
    const contact = createContact();
    content.appendChild(contact);
    content.style.opacity = 1;
  }, 300);
});

const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", (e) => {
  content.style.opacity = 0;

  hamBtn.click();
  markActiveNav(e.target);
  setTimeout(() => {
    content.innerHTML = "";
    content.appendChild(createAbout());
    content.style.opacity = 1;
  }, 300);
});
