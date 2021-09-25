import createNavbar from "./navbar";
import createHome from "./home";
import "./css/index.css";

const header = document.querySelector("#header");
const navbar = createNavbar({
  title: "Rose",
  navbarItems: ["Home", "Menu", "About", "Contact"],
});

const content = document.querySelector("#content");
const home = createHome();
content.appendChild(home);

header.appendChild(navbar);
