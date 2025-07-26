import getData from './data.js';
const map = document.querySelector('.map__canvas');
const article = document.createElement('article');
const data = getData();
export function createAvatar() {
  const cardDiv = document.createElement('div');
  map.append(cardDiv);
  article.classList.add('popup');
  cardDiv.append(article);
  const avatar = document.createElement('img');
  avatar.classList.add('popup__avatar');
  const avatarImg = data.find((el) => el.author);
  const offerAvatar = avatarImg.author.avatar;
  avatar.setAttribute('src', offerAvatar);
  article.append(avatar);
}
export function createTitle() {
  const title = document.createElement('h3');
  const offerTitle = data.find((el) => el.author);
  const current = offerTitle.offer.title;
  title.textContent = current;
  title.classList.add('popup__title');
  article.append(title);
}

export function createAddress() {
  const addressText = document.createElement('p');
  const address = data.find((el) => el.offer);
  const Offeraddress = address.offer.address;
  const lat = Offeraddress.lat;
  const lng = Offeraddress.lng;
  addressText.textContent = `Широта: ${lat}, долгота: ${lng}`;
  addressText.classList.add('popup__text');
  article.append(addressText);
}

export function createPrice() {
  const priceText = document.createElement('p');
  const price = data.find((el) => el.offer);
  const getOfferPrice = price.offer.price;
  priceText.textContent = `${getOfferPrice}₽/ночь`;
  priceText.classList.add('popup__text--price');
  article.append(priceText);
}

export function createType() {
  const typeTitle = document.createElement('h4');
  const type = data.find((el) => el.offer);
  const getOfferType = type.offer.type;
  typeTitle.textContent = getOfferType;
  switch (getOfferType) {
    case 'flat':
      typeTitle.textContent = 'Квартира';
      break;
    case 'bungalow':
      typeTitle.textContent = 'Бунгало';
      break;
    case 'house':
      typeTitle.textContent = 'Дом';
      break;
    case 'palace':
      typeTitle.textContent = 'Дворец';
      break;
    case 'hotel':
      typeTitle.textContent = 'Отель';
      break;
  }
  typeTitle.classList.add('popup__type');
  article.append(typeTitle);
}

export function createRoomsAndGuests() {
  const roomsText = document.createElement('p');
  const guests = data.find((el) => el.offer);
  const rooms = data.find((el) => el.offer);
  const offerRooms = rooms.offer.rooms;
  const offerGuests = guests.offer.guests;
  roomsText.textContent = `${offerRooms} комнаты для ${offerGuests} гостей`;
  roomsText.classList.add('popup__text--capacity');
  article.append(roomsText);
}

export function getCheckinAndCheckoutTime() {
  const time = document.createElement('p');
  const checkin = data.find((el) => el.offer);
  const checkout = data.find((el) => el.offer);
  const offerCheckin = checkin.offer.checkin;
  const offerCheckout = checkout.offer.checkout;
  time.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
  time.classList.add('popup__text--time');
  article.append(time);
}

export function createFeatures() {
  const featuresList = document.createElement('ul');
  const featuresItems = document.createElement('li');
  const features = data.find((el) => el.offer);
  const offerFeatures = features.offer.features;
  featuresItems.textContent = offerFeatures;
  featuresList.classList.add('popup__features');
  featuresList.append(featuresItems);
  article.append(featuresList);
}

export function createDescription() {
  const descriptionText = document.createElement('p');
  const description = data.find((el) => el.offer);
  const offerDescription = description.offer.description;
  descriptionText.textContent = offerDescription;
  descriptionText.classList.add('popup__description');
  if (!offerDescription) {
    descriptionText.display = 'none';
  } else {
    article.append(descriptionText);
  }
}

export function createApartmentPhoto() {
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('popup__photos');
  const img = document.createElement('img');
  img.classList.add('popup__photo');
  const photos = data.find((el) => el.offer);
  const offerPhotos = photos.offer.photos;
  img.setAttribute('src', offerPhotos);
  photoDiv.append(img);
  article.append(photoDiv);
}
