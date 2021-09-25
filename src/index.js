import createNavbar from "./navbar";
import createHome from "./home";
import "./css/index.css";
import homeImage from "./images/food.png";
import chefHat from "./images/chef-hat.png";

const header = document.querySelector("#header");

const hat = new Image();
hat.src = chefHat;
hat.classList.add("logo");
const navbar = createNavbar({
  logo: hat,
  title: "Rose Kitchen",
  navbarItems: ["Home", "Menu", "About", "Contact"],
});

const image = new Image();
image.src = homeImage;
image.width = 200;
image.height = 400;
image.classList.add("home-image");

const content = document.querySelector("#content");
const home = createHome();
content.appendChild(home);
content.appendChild(image);

header.appendChild(navbar);
