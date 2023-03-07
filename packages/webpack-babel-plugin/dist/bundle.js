/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tracker.js":
/*!************************!*\
  !*** ./src/tracker.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _test = _interopRequireDefault(__webpack_require__(/*! ./tracker */ "./src/tracker.js")).default;
function _interopRequireDefault(obj) { _test(); _test(); return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-07 16:57:41
 * @LastEditTime: 2023-03-07 16:57:47
 * @LastEditors: wsy
 */
function track() {
  _test();
  return 1;
}
module.exports = track;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var _test = _interopRequireDefault(__webpack_require__(/*! ./tracker */ "./src/tracker.js")).default;
function _interopRequireDefault(obj) { _test(); _test(); return obj && obj.__esModule ? obj : { default: obj }; }
function a() {
  _test();
  console.log('aaa');
}
class B {
  bb() {
    _test();
    return 'bbb';
  }
}
const c = () => {
  _test();
  return 'ccc';
};
const d = function () {
  _test();
  console.log('ddd');
};
})();

/******/ })()
;