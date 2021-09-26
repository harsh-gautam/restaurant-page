import "./css/home.css";

const createHome = () => {
  const div = document.createElement("div");
  div.classList.add("home-wrapper");
  const welcomeText = document.createElement("h1");
  welcomeText.textContent = "Welcome to Rose Kitchen";

  const highlightText = document.createElement("p");
  highlightText.classList.add("highlight");
  highlightText.textContent = `Loves Healthy Food`;

  const descText = document.createElement("p");
  descText.classList.add("description");
  descText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consectetur, dolor enim atque numquam non et quos accusantium commodi sint dolore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consectetur, dolor enim atque numquam non et quos accusantium commodi sint dolore?`;

  const btnOrder = document.createElement("button");
  btnOrder.textContent = "Order Online";
  btnOrder.classList.add("btn-order");

  const btnDine = document.createElement("button");
  btnDine.textContent = "Book a table";
  btnDine.classList.add("btn-dine");

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");
  btnGroup.appendChild(btnOrder);
  btnGroup.appendChild(btnDine);

  const section = document.createElement("section");
  section.classList.add("section");
  section.appendChild(welcomeText);
  section.appendChild(highlightText);
  section.appendChild(descText);
  section.appendChild(btnGroup);
  div.appendChild(section);

  return div;
};

export default createHome;
