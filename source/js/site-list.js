import { closeSiteMenu } from "./site-menu-modal.js";

const SITE_LIST_SUBLIST_CLOSED_CLASS = 'site-list__sublist--closed';

const siteLists = document.querySelectorAll('.site-list');

siteLists.forEach(list => {
  const submenuBtn = list.querySelector('.js-submenu-btn');
  const submenu = list.querySelector('.js-submenu');

  if (submenuBtn && submenu) {
    submenuBtn.addEventListener('click', () => {
      if (submenu.classList.contains(SITE_LIST_SUBLIST_CLOSED_CLASS)) {
        submenu.classList.remove(SITE_LIST_SUBLIST_CLOSED_CLASS);
        return;
      }

      if (!submenu.classList.contains(SITE_LIST_SUBLIST_CLOSED_CLASS)) {
        submenu.classList.add(SITE_LIST_SUBLIST_CLOSED_CLASS);
      }
    })
  }


  const links = list.querySelectorAll('.js-menu-link');

  links.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeSiteMenu();
      const local = link.getAttribute('href').split('#')[0];
      const anchor = link.getAttribute('href').split('#')[1];

      if (document.getElementById(`${anchor}`)) {
        localStorage.setItem('globalAnchor', '0');
        scroll(anchor);
      } else {
        localStorage.setItem('globalAnchor', anchor);
        window.location.href = local;
      }
  });
  })
})

const scroll = (anchor) => {
  const element = document.getElementById(anchor);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const anchor = localStorage.getItem('globalAnchor');
  if (anchor !== '0' && anchor) {
    scroll(anchor);
    localStorage.setItem('globalAnchor', '0');
  }
});
