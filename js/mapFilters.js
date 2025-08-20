export function addFilterListener(adverts, onChange) {
  const accommodationTypeSelector = document.querySelector('#housing-type');
  const accommodationPriceSelector = document.querySelector('#housing-price');
  const accommodationRoomsSelector = document.querySelector('#housing-rooms');
  const accommodationGuestsSelector = document.querySelector('#housing-guests');
  const accommodationFilter = document.querySelector('.map__filters');

  accommodationFilter.addEventListener('change', accommodationChangeHandler);

  function accommodationChangeHandler() {
    let filteredAdverts = adverts.slice(0);
    const featuresArray = [...document.querySelectorAll('.map__checkbox:checked')];

    filteredAdverts = filteredAdverts.filter((el) => {
      if (accommodationTypeSelector.value === 'any') {
        return true;
      }

      return accommodationTypeSelector.value === el.offer.type;
    });

    switch (accommodationPriceSelector.value) {
      case 'middle': filteredAdverts = filteredAdverts = filteredAdverts.filter((el) => el.offer.price >= 10000 && el.offer.price < 50000);
        break;
      case 'low': filteredAdverts = filteredAdverts.filter((el) => el.offer.price < 10000);
        break;
      case 'high': filteredAdverts = filteredAdverts.filter((el) => el.offer.price >= 50000);
        break;
    }

    filteredAdverts = filteredAdverts.filter((el) => {
      if (accommodationRoomsSelector.value === 'any') {
        return true;
      }

      return Number(accommodationRoomsSelector.value) === el.offer.rooms;
    });

    filteredAdverts = filteredAdverts.filter((el) => {
      if (accommodationGuestsSelector.value === 'any') {
        return true;
      }

      return Number(accommodationGuestsSelector.value) === el.offer.guests;
    });

    if (featuresArray.length >= 1) {
      const featuresStringArr = featuresArray.map((featureInput) => featureInput.value);

      filteredAdverts = filteredAdverts.filter((advert) => {
        if (!advert.offer.features) {
          return false;
        }

        return featuresStringArr.every((featuresString) => advert.offer.features.includes(featuresString));
      });
    }

    onChange(filteredAdverts);
  }
}


