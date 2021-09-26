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

function setupHome() {
  const image = new Image();
  image.src = homeImage;
  image.classList.add("home-image");

  const home = createHome();
  home.appendChild(image);
  content.appendChild(home);
}

setupHome();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  setupHome();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  const menu = createMenu();
  content.appendChild(menu);
});

const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  const contact = createContact();
  content.appendChild(contact);
});

const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(createAbout());
});
