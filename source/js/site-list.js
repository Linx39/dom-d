import { closeSiteMenu } from "./site-menu-modal.js";

const siteList = document.querySelectorAll('.site-list');

siteList.forEach(list => {
  const links = list.querySelectorAll('.site-list__link');

  links.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const element = document.querySelector(link.getAttribute('href'));
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      closeSiteMenu();
    });
  })
})
