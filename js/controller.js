import { enableForm, setupFormValidation } from './form.js';
import { resetSlider, initSlider } from './priceSlider.js';
import { initMap, resetMapMarker, renderFilteredPins } from './map.js';
import { getAdverts,postAdvert} from './api.js';
import { formReset } from './form.js';
import { addFilterListener } from './mapFilters.js';

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', reset);

export async function init() {
  const adverts = await getAdverts();

  initSlider();
  setupFormValidation(onSuccess);
  initMap(enableForm, adverts);
  addFilterListener(adverts, renderFilteredPins);
}

function reset() {
  resetSlider();
  resetMapMarker();
  formReset();
}

function onSuccess() {
  return postAdvert().then(reset);
}


