import "./css/contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const createContact = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("contact-wrapper");

  wrapper.innerHTML = `
  <div class="card contact-card">
    <p class="address"><i class="bi bi-geo-alt"></i>
      Somewhere in India
    </p>
    <p class="hours">
    <i class="bi bi-clock"></i> Opening Hours: 10:00 AM - 10:00 PM
    </p>
    <p class="phone">
    <i class="bi bi-telephone"></i> +91 2873821232
    , +91 1238649453
    </p>
    <p class="email">
    <i class="bi bi-envelope"></i> theroserestaurant@notfake.in
    </p>
    
  </div>
  <div class="card contact-card">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2868555746345!2d80.89479851493353!3d26.798993371428114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfea7ddd372ef%3A0x8ddd02520f3d06bc!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1632597663148!5m2!1sen!2sin" 
    class="map" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
  </iframe></div>
  `;

  return wrapper;
};

export default createContact;
