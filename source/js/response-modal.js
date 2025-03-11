import { initModal } from "./modal.js";

const response = document.querySelector('#response');

const responseModal = initModal(response);

const openResponseModal = () => responseModal.open();

export {openResponseModal};
