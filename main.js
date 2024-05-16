/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js


const fields = document.querySelectorAll(".fields");
const img = document.createElement("img");
let number = 0;
img.src = goblin_namespaceObject;
fields[number].append(img);
function demo() {
  function getRandom(max) {
    let randomA = Math.floor(Math.random() * max);
    while (randomA === number) {
      randomA = Math.floor(Math.random() * max);
    }
    number = randomA;
    return number;
  }
  getRandom(16);
  fields[number].append(img);
}
let interval = setInterval(demo, 1000);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;