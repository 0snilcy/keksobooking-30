const used = [];
function randomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export function addAvatar() {
  for (let i = 1; i < 10; i++) {
    let randomAvatar = Math.floor(Math.random() * (11 - 1) + 1);
    if (!used.includes(randomAvatar)) {
      used.push(randomAvatar);
      if (randomAvatar < 10) {
        randomAvatar = `0${ randomAvatar}`;
      }
      return `img/avatars/user${randomAvatar}.png`;
    }
  }
}
export function getOfferPrice() {
  return Math.floor(Math.random() * (30000 - 2000) + 2000);
}
export function getOfferType() {
  const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  return randomIndex(type);
}
export function getPositiveInteger() {
  return Math.floor(Math.random() * (8 - 1) + 1);
}
export function getCheckinAndCheckoutTime() {
  const time = ['12:00', '13:00', '14:00'];
  return randomIndex(time);
}

export function getFeatures() {
  const features = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];
  return randomIndex(features);
}

export function getPhotos() {
  const photos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];
  return randomIndex(photos);
}

export function getLat() {
  const lat = (Math.random() * (35.7 - 35.65) + 35.65).toFixed(5);
  return Number(lat);
}

export function getLng() {
  const lng = (Math.random() * (139.8 - 139.7) + 139.7).toFixed(5);
  return Number(lng);
}
