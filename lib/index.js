"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalStorage = exports.getLocalStorage = exports.deleteLocalStorageKey = exports.clearLocalStorage = void 0;
var setLocalStorage = exports.setLocalStorage = function setLocalStorage(key, value) {
  var encryptKey = '';
  var encryptValue = '';
  for (var i = 0; i < key.length; i++) {
    encryptKey += String.fromCharCode(key.charCodeAt(i) + 7);
  }
  for (var _i = 0; _i < value.length; _i++) {
    encryptValue += String.fromCharCode(value.charCodeAt(_i) + 7);
  }
  localStorage.setItem(encryptKey, encryptValue);
};
var getLocalStorage = exports.getLocalStorage = function getLocalStorage(key) {
  var encryptKey = '';
  for (var i = 0; i < key.length; i++) {
    encryptKey += String.fromCharCode(key.charCodeAt(i) + 7);
  }
  var encryptValue = localStorage.getItem(encryptKey);
  if (!encryptValue) return null;
  var plainValue = '';
  for (var _i2 = 0; _i2 < encryptValue.length; _i2++) {
    plainValue += String.fromCharCode(encryptValue.charCodeAt(_i2) - 7);
  }
  return plainValue;
};
var deleteLocalStorageKey = exports.deleteLocalStorageKey = function deleteLocalStorageKey(key) {
  var encryptKey = '';
  for (var i = 0; i < key.length; i++) {
    encryptKey += String.fromCharCode(key.charCodeAt(i) + 7);
  }
  localStorage.removeItem(encryptKey);
};
var clearLocalStorage = exports.clearLocalStorage = function clearLocalStorage() {
  localStorage.clear();
};