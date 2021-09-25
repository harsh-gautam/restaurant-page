import createNavbar from "./navbar";
import createHome from "./home";
import "./css/index.css";
import homeImage from "./images/food.png";
import chefHat from "./images/chef-hat.png";

// Setup Navbar
const header = document.querySelector("#header");
const hat = new Image();
hat.src = chefHat;
hat.classList.add("logo");
const navbar = createNavbar({
  logo: hat,
  title: "Rose Kitchen",
  navbarItems: ["Home", "Menu", "About", "Contact"],
});

header.appendChild(navbar);

const content = document.querySelector("#content");

function setupHome() {
  const image = new Image();
  image.src = homeImage;
  image.classList.add("home-image");

  const home = createHome();
  content.appendChild(home);
  content.appendChild(image);
}

setupHome();

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  content.innerHTML = "";
  setupHome();
});

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  content.innerHTML = "";
});
