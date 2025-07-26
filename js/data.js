import {
  addAvatar,
  getOfferPrice,
  getOfferType,
  getPositiveInteger,
  getCheckinAndCheckoutTime,
  getFeatures,
  getPhotos,
  getLat,
  getLng,
} from './util.js';

function getData() {
  const DATA = [];
  for (let i = 1; i <= 10; i++) {
    const obj = {
      author: {
        avatar: addAvatar(),
      },
      offer: {
        title: 'Уютная квартира в центре города!',
        address: {
          lat: getLat(),
          lng: getLng(),
        },
        price: getOfferPrice(),
        type: getOfferType(),
        rooms: getPositiveInteger(),
        guests: getPositiveInteger(),
        checkin: getCheckinAndCheckoutTime(),
        checkout: getCheckinAndCheckoutTime(),
        features: getFeatures(),
        description:
          'Прекрасная светлая квартира, оборудованная всем самым необходимым.',
        photos: getPhotos(),
      },
      location: {
        lat: getLat(),
        lng: getLng(),
      },
    };
    DATA.push(obj);
  }
  return DATA;
}

export default getData;
