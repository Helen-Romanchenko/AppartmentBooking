'use strict';

var objectsNumber = 8;
var titles = [
  "Большая уютная квартира",
  "Маленькая неуютная квартира",
  "Огромный прекрасный дворец",
  "Маленький ужасный дворец",
  "Красивый гостевой домик",
  "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря",
  "Неуютное бунгало по колено в воде"
];
var types = [
  'palace',
  'flat',
  'house',
  'bungalo'
];
var checkinTime = ['12:00', '13:00', '14:00'];
var checkoutTime = ['12:00', '13:00', '14:00'];
var features = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
];
var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1. jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github .io/assets/images/tokyo/hotel3.jpg'
];

// random number from min to max

var getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

};
