import createNavbar from "./navbar";

const header = document.querySelector("#header");
const navbar = createNavbar({
  title: "The Rose Restaurant",
  navbarItems: ["Home", "Menu", "About us", "Contact us"],
});

header.appendChild(navbar);
