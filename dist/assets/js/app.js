/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/* Modal windows */\nconst modalBtn = document.querySelectorAll('[data-modal]');\nconst body = document.body;\nconst modalClose = document.querySelectorAll('.modal__close');\nconst modal = document.querySelectorAll('.modal');\n\nmodalBtn.forEach(item =>{\n         item.addEventListener('click', event=>{\n                  let $this = event.currentTarget;\n\n                  let modalId = $this.getAttribute('data-modal');\n                  let modal = document.querySelector(`#${modalId}`);\n                  let modalContent = modal.querySelector('.modal__content');\n\n                  modalContent.addEventListener('click', event =>{\n                           event.stopPropagation();\n                  });\n\n                  modal.classList.add(\"show\");\n                  body.classList.add('no-scroll');\n\n                  setTimeout(()=>{\n                           modalContent.style.transform = 'none';\n                           modalContent.style.opacity = '1';\n                  }, 2);\n                  \n         });\n});\n\nmodalClose.forEach(item =>{\n         item.addEventListener('click', event=>{\n                  let currentModal = event.target.closest('.modal');\n                  \n                  closeModal(currentModal);\n         });\n});\n\nmodal.forEach(item =>{\n         item.addEventListener('click', event=>{\n                  let currentModal = event.target;\n\n                  closeModal(currentModal);\n         });\n});\n\n\nfunction closeModal(currentModal){\n         let modalContent = currentModal.querySelector('.modal__content');\n         modalContent.removeAttribute('style');\n\n         setTimeout(()=>{\n                  currentModal.classList.remove(\"show\");\n                  body.classList.remove('no-scroll');\n         },200);\n}\n\n\n\n/* Mobile nav */\n\nconst burger = document.querySelector('#sidebarToggle');\nconst sidebar = document.querySelector('#sidebar');\nconst page = document.querySelector('#page');\n\nburger.addEventListener('click', event=>{\n         if(body.classList.contains('show-sidebar')){\n                  closeSidebar();\n         }else{\n                  showSidebar();\n         }\n});\n\nfunction showSidebar(){\n         let mask = document.createElement('div');\n         mask.classList.add('page__mask');\n\n         mask.addEventListener('click', closeSidebar);\n         page.appendChild(mask);\n\n         body.classList.add('show-sidebar');\n}\n\nfunction closeSidebar(){\n         body.classList.remove('show-sidebar');\n         document.querySelector('.page__mask').remove();\n}\n\n/* Textarea */\n\nconst textArea = document.querySelectorAll('[data-autoresize]');\n\ntextArea.forEach(item=>{\n         let textAreaH = item.offsetHeight;\n         item.addEventListener('input', event=>{\n                  let $this = event.target;\n\n                  $this.style.height = textAreaH + 'px';\n                  $this.style.height = $this.scrollHeight + 'px';\n         });\n});\n\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\blog\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! D:\\blog\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });