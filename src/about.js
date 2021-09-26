import "./css/extra.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const createAbout = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  wrapper.innerHTML = `
  <div class="card big-card">
    <p class="info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consectetur, dolor enim atque numquam non et quos accusantium commodi sint dolore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consectetur, dolor enim atque numquam non et quos accusantium commodi sint dolore?
    </p>

    <p class="creator">
     Crafted by Harsh | <a target="_blank" href="https://www.github.com/harsh-gautam"><i class="bi bi-github"></i></a>
    </p>
    
  </div>
  `;

  return wrapper;
};

export default createAbout;
