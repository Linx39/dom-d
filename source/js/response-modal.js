import { initModal } from "./modal.js";

const response = document.querySelector('.response-modal');

const responseModal = initModal(response);

const openResponseModal = () => responseModal.open();

export {openResponseModal};
