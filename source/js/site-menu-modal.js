import { initModal } from "./modal.js";

const siteMenu = document.querySelector('.main-nav__site-menu-modal');

const siteMenuModal = initModal(siteMenu);

const closeSiteMenu = () => siteMenuModal.close();

export {closeSiteMenu};
