import data from "./menu.json";
import "./css/menu.css";

const createCard = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  <div class="card-header">
    <img src="${item.imageUrl}"/>
  </div>
  <div class="card-body">
    <p class="card-title">${item.name}</p>
    <p class="card-price">₹ ${item.price}</p>
  </div>
  `;
  return card;
};

const createSection = (menuTitle, menuItems) => {
  const section = document.createElement("section");
  section.classList.add(menuTitle.toLowerCase());

  for (let item of menuItems) {
    let card = createCard(item);
    section.appendChild(card);
  }

  return section;
};

const createMenu = () => {
  const section = document.createElement("div");
  section.classList.add("menu-container");

  for (let menu in data) {
    const title = document.createElement("p");
    title.classList.add("menu-title");
    title.textContent = menu;
    const sectionChild = createSection(menu, data[menu]);
    section.appendChild(title);
    section.appendChild(sectionChild);
  }
  return section;
};

export { createMenu, createSection, createCard };
