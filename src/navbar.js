import "./css/navbar.css";

const createNavbar = ({ logo, title, navbarItems }) => {
  const nav = document.createElement("nav");
  nav.id = "navbar";

  // Title
  const homeTitle = document.createElement("div");
  homeTitle.classList.add("home-title");
  let h1 = document.createElement("h1");
  h1.textContent = title;
  homeTitle.appendChild(logo);
  homeTitle.appendChild(h1);

  // Navbar items
  const navItems = document.createElement("div");
  navItems.classList.add("nav-items");
  // create items
  for (let item of navbarItems) {
    let itemSpan = document.createElement("span");
    itemSpan.classList.add("nav-item");
    itemSpan.textContent = item;
    itemSpan.id = item.split(" ").join("-").toLowerCase();
    navItems.appendChild(itemSpan);
  }

  nav.appendChild(homeTitle);
  nav.appendChild(navItems);
  return nav;
};

export default createNavbar;
