/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/foo */ \"./src/foo.js\");\n/* harmony import */ var _src_foo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_foo__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(_src_foo__WEBPACK_IMPORTED_MODULE_0___default()());\n\n//# sourceURL=webpack://package.json/./index.js?");

/***/ }),

/***/ "./src/foo.js":
/*!********************!*\
  !*** ./src/foo.js ***!
  \********************/
/***/ (() => {

eval("// function sumNumbers (a , b) {\n//     return a + b\n// }\n// export default sumNumbers\n// function mulStr (str) {\n//     let newStr = '';\n//     for (let i = 0; i < 5; i++) {\n//         newStr += str;\n//     }\n//     return newStr\n// }\n// export {mulStr}\n// function mulStr (str) {\n//     let newStr = '';\n//     for (let i = 0; i < 5; i++) {\n//         let a = str[0].toUpperCase() + str.slice(1);\n//         newStr += a;\n//     }\n//     return newStr\n// }\n// export {mulStr}\n// function arraySum(arr){\n//     let newArr = arr.reverse()\n//     return newArr\n// }\n// export {arraySum}\n// let numbers1 = []\n// function sumNumbers (array) {\n//     for (let i = 1; i <= 5; i++) {\n//         if (i % 2 == 0) {\n//             array.push (i)\n//         }\n//         return array\n//     }\n// }\n//     sumNumbers (numbers1)\n//     console.log (numbers1)\n// export {sumNumbers}\n// function mulStr (str) {\n//     let newStr = '';\n//     for (let i = 0; i < 5; i++) {\n//         newStr += str;\n//     }\n//     return newStr\n// }\n// export {mulStr}\n\n//# sourceURL=webpack://package.json/./src/foo.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;