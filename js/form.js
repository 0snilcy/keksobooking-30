const form = document.querySelector('.ad-form');
const priceInput = form.price;
const accomadationInput = form.type;
const checkin = form.querySelector('[name="timein"]');
const checkout = form.querySelector('[name="timeout"]');

const formHeader = document.querySelector('.ad-form-header');
const formElements = document.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFilterElements = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');
const priceSlider = document.querySelector('.ad-form__slider');

export function disableForm() {
  form.classList.toggle('ad-form--disabled', true);
  formHeader.setAttribute('disabled', true);
  formElements.forEach((el) => el.setAttribute('disabled', true));
  priceSlider.setAttribute('disabled', true);
  mapFiltersForm.classList.toggle('ad-form--disabled', true);
  mapFilterElements.forEach((el) => el.setAttribute('disabled', true));
  mapFeatures.setAttribute('disabled', true);
}

disableForm();

export function enableForm() {
  form.classList.toggle('ad-form--disabled', false);
  formHeader.removeAttribute('disabled', false);
  priceSlider.removeAttribute('disabled', false);
  formElements.forEach((el) => el.removeAttribute('disabled', false));
}
enableForm();

export function enableMapFilters() {
  mapFiltersForm.classList.toggle('ad-form--disabled', false);
  mapFilterElements.forEach((el) => el.removeAttribute('disabled', false));
  mapFeatures.removeAttribute('disabled', false);
}
enableMapFilters();

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});


function checkTitleHandler(value) {
  return value.length >= 30 && value.length <= 100;
}
pristine.addValidator(
  form.querySelector('#title'),
  checkTitleHandler,
  ' Заголовок должен быть от 30 знаков до 100'
);

pristine.addValidator(priceInput,checkPriceHandler,'Максимальное значение — 100 000 руб.');

function checkPriceHandler(value) {
  return value <= 100000;
}

pristine.addValidator(accomadationInput, checkAccomodationHandler);
function checkAccomodationHandler() {
  switch (accomadationInput.value) {
    case 'bungalow':priceInput.setAttribute('placeholder','0');
      break;
    case 'flat':priceInput.setAttribute('placeholder','1000');
      break;
    case 'hotel':
      priceInput.setAttribute('placeholder','3000');
      break;
    case 'house': priceInput.setAttribute('placeholder','5000');
      break;
    case 'palace': priceInput.setAttribute('placeholder','10000');
      break;
  }
  return accomadationInput.value;
}

pristine.addValidator(priceInput, priceForNight, 'Цена должна быть не ниже указанной');
function priceForNight() {
  const bungalowPrice = priceInput.value >= 0;
  const flatPrice = priceInput.value >= 1000;
  const hotelPrice = priceInput.value >= 3000;
  const housePrice = priceInput.value >= 5000;
  const palacePrice = priceInput.value >= 10000;
  if (accomadationInput.value === 'bungalow') {
    return bungalowPrice;
  } else if (accomadationInput.value === 'flat') {
    return flatPrice;
  } else if (accomadationInput.value === 'hotel') {
    return hotelPrice;
  } else if (accomadationInput.value === 'house') {
    return housePrice;
  } else if (accomadationInput.value === 'palace') {
    return palacePrice;
  }
}
const rooms = form.rooms;
const guests = form.capacity;
const maxAmount = {
  '1': ['1'],
  '2': ['1','2'],
  '3': ['1','2','3'],
  '100': ['0']
};
function checkinCapacityHandler() {
  const roomsAmount = rooms.value;
  const guestsAmount = guests.value;
  const checkAvailable = maxAmount[roomsAmount];
  return checkAvailable.includes(guestsAmount);
}

pristine.addValidator(rooms,checkinCapacityHandler,'Количество комнат не соответсвует количеству гостей');
pristine.addValidator(guests, checkinCapacityHandler, 'Количество гостей не соответсвует количеству комнат');

function checkinTimeHandler () {
  const checkinValue = checkin.value;
  const checkoutValue = checkout.value;
  return checkinValue === checkoutValue;
}
pristine.addValidator(checkin ,checkinTimeHandler,'Въезд невозможен');
pristine.addValidator(checkout ,checkinTimeHandler,'Выезд невозможен');


function setupFormValidation() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    pristine.validate();
  }
  );
}
export default setupFormValidation;


