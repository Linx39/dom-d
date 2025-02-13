import { openResponseModal } from "./response-modal.js";

const MASK_OPTIONS = {
  mask: '+{7} (000) 000-00-00',
};

const NAME_PATTERN_VALIDATE_MESAGE = 'Некорректное имя ;-)';
const NAME_REQUIRED_VALIDATE_MESAGE = 'Пожалуйста, заполните имя ;-)';
const PHONE_PATTERN_VALIDATE_MESAGE = 'Некорректный номер телефона ;)';
const PHONE_REQUIRED_VALIDATE_MESAGE = 'Пожалуйста, заполните номер телефона ;-)';

const forms = document.querySelectorAll('.js-form');
let pristineArray = [];

const resetAllForms = () => {
  forms.forEach(form => form.reset());
  pristineArray.forEach(pristine => pristine.reset());
}

forms.forEach(form => {
  const inputsText = form.querySelectorAll('input[type="text"]', 'textarea');
  const inputPhone = form.querySelector('input[type="tel"]');

  inputsText.forEach(inputText => {
    inputText.setAttribute('data-pristine-pattern-message', NAME_PATTERN_VALIDATE_MESAGE);
    inputText.setAttribute('data-pristine-required-message', NAME_REQUIRED_VALIDATE_MESAGE);
  })

  inputPhone.setAttribute('data-pristine-pattern-message', PHONE_PATTERN_VALIDATE_MESAGE);
  inputPhone.setAttribute('data-pristine-required-message', PHONE_REQUIRED_VALIDATE_MESAGE);

  const pristineConfig = {
    classTo: 'control',
    errorTextParent: 'control',
    errorTextTag: 'span',
    errorTextClass: 'control__warning',
  };

  const pristine = new Pristine(form, pristineConfig);

  pristineArray.push(pristine);

  const mask = IMask(inputPhone, MASK_OPTIONS);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isFormValid = pristine.validate();

    if(!isFormValid) {
      return;
    }

    openResponseModal();
    resetAllForms();
  })
})
