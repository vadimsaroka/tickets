module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  req\n}) => {\n  if (true) {\n    // we are on the server\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n      baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n      headers: req.headers\n    });\n  } else {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsicmVxIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxnRUFBQztBQUFFQTtBQUFGLENBQUQsS0FBYTtBQUN4QixZQUFtQztBQUMvQjtBQUNBLFdBQU9DLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUNoQkMsYUFBTyxFQUFFLGlFQURPO0FBRWhCQyxhQUFPLEVBQUVKLEdBQUcsQ0FBQ0k7QUFGRyxLQUFiLENBQVA7QUFJSCxHQU5ELE1BTU8sRUFLTjtBQUNKLENBYkQiLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyByZXEgfSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIHdlIGFyZSBvbiB0aGUgc2VydmVyXG4gICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgICAgICAgYmFzZVVSTDogXCJodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWxcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2UgYXJlIG9uIHRoZSBicm93c2VyXG4gICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgICAgICAgYmFzZVVSTDogXCJcIlxuICAgICAgICB9KVxuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\nvar _jsxFileName = \"/home/vadim/Documents/microservices/project2/client/pages/index.js\";\n\n\nconst LandingPage = ({\n  currentUser\n}) => {\n  const response = currentUser == null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"You are NOT logged in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 44\n  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"You are logged in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined);\n  return response;\n};\n\nLandingPage.getInitialProps = async context => {\n  const client = Object(_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n  const {\n    data\n  } = await client.get(\"/api/users/currentuser\");\n  return data;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJyZXNwb25zZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJidWlsZENsaWVudCIsImRhdGEiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQjtBQUVyQyxRQUFNQyxRQUFRLEdBQUdELFdBQVcsSUFBSSxJQUFmLGdCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0QixnQkFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0EsU0FBT0MsUUFBUDtBQUVILENBUEQ7O0FBU0FGLFdBQVcsQ0FBQ0csZUFBWixHQUE4QixNQUFPQyxPQUFQLElBQW1CO0FBQzdDLFFBQU1DLE1BQU0sR0FBR0MsaUVBQVcsQ0FBQ0YsT0FBRCxDQUExQjtBQUVBLFFBQU07QUFBRUc7QUFBRixNQUFXLE1BQU1GLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLHdCQUFYLENBQXZCO0FBRUEsU0FBT0QsSUFBUDtBQUNILENBTkQ7O0FBUWVQLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGN1cnJlbnRVc2VyID09IG51bGwgPyA8aDE+WW91IGFyZSBOT1QgbG9nZ2VkIGluPC9oMT4gOlxuICAgICAgICA8aDE+WW91IGFyZSBsb2dnZWQgaW48L2gxPlxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuXG59O1xuXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpXG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCIpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });