(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ags2sld", [], factory);
	else if(typeof exports === 'object')
		exports["ags2sld"] = factory();
	else
		root["ags2sld"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ags2sld": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/static/ags2sld/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors-ags2sld"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Main = __webpack_require__(/*! ./Components/Main */ \"./src/Components/Main.jsx\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _Navbar = __webpack_require__(/*! ./components/Navbar */ \"./src/components/Navbar.jsx\");\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function (_Component) {\n  (0, _inherits3.default)(App, _Component);\n\n  function App() {\n    (0, _classCallCheck3.default)(this, App);\n    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(App, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_Navbar2.default, null),\n        _react2.default.createElement(_Main2.default, { className: \"container\" })\n      );\n    }\n  }]);\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS9zcmMvQXBwLmpzeD80N2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4vQ29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgPE1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7OztBQVJBO0FBQ0E7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.jsx\n");

/***/ }),

/***/ "./src/Components/Main.jsx":
/*!*********************************!*\
  !*** ./src/Components/Main.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _helpers = __webpack_require__(/*! ../helpers/helpers */ \"./src/helpers/helpers.jsx\");\n\nvar _utils = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Main = function (_Component) {\n  (0, _inherits3.default)(Main, _Component);\n\n  function Main(props) {\n    (0, _classCallCheck3.default)(this, Main);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));\n\n    _this.state = {\n      mapUrl: \"https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/FireStations/MapServer/\"\n    };\n    return _this;\n  }\n\n  (0, _createClass3.default)(Main, [{\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      event.preventDefault();\n      console.log({ mapUrl: this.state.mapUrl });\n\n      var data = (0, _stringify2.default)({\n        mapUrl: this.state.mapUrl\n      });\n\n      var url = \"http://localhost:8000/ags2sld/getsld\";\n\n      var res = (0, _utils.doPost)(url, data).then(function (result) {\n        console.log(result);\n      });\n    }\n  }, {\n    key: \"handleClick_GetMap\",\n    value: function handleClick_GetMap(event) {\n      console.log({ mapUrl: this.state.mapUrl });\n\n      var url = \"http://localhost:8000/ags2sld/getmap/?\" + \"mapUrl=\" + this.state.mapUrl;\n\n      var res = (0, _utils.doGet)(url).then(function (result) {\n        console.log(result);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"container\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"input-group input-group-lg\" },\n          _react2.default.createElement(\n            \"form\",\n            { className: \"myform\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"form-group\" },\n              _react2.default.createElement(\"input\", {\n                id: \"mapUrl\",\n                type: \"text\",\n                className: \"form-control\",\n                placeholder: \"Enter Map Url\",\n                value: this.state.mapUrl,\n                onChange: function onChange(e) {\n                  _this2.setState({ mapUrl: e.target.value });\n                }\n              })\n            ),\n            _react2.default.createElement(\n              \"button\",\n              {\n                type: \"submit\",\n                className: \"btn btn-primary\",\n                onClick: function onClick(event) {\n                  _this2.handleClick(event);\n                }\n              },\n              \"Get SLD\"\n            ),\n            _react2.default.createElement(\n              \"button\",\n              {\n                type: \"button\",\n                className: \"btn btn-primary m-2\",\n                onClick: function onClick(event) {\n                  _this2.handleClick_GetMap(event);\n                }\n              },\n              \"Get Map\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n  return Main;\n}(_react.Component);\n\nexports.default = Main;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9NYWluLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS9zcmMvQ29tcG9uZW50cy9NYWluLmpzeD83MjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0Q1JTRlRva2VuIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBkb0dldCwgZG9Qb3N0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWFwVXJsOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9yZXN0LnBhbG1ldHRvZW9jLm5ldC9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9TQ19CYXNlX0RhdGEvRmlyZVN0YXRpb25zL01hcFNlcnZlci9cIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coeyBtYXBVcmw6IHRoaXMuc3RhdGUubWFwVXJsIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG1hcFVybDogdGhpcy5zdGF0ZS5tYXBVcmxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FnczJzbGQvZ2V0c2xkXCI7XHJcblxyXG4gICAgbGV0IHJlcyA9IGRvUG9zdCh1cmwsIGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2tfR2V0TWFwKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyh7IG1hcFVybDogdGhpcy5zdGF0ZS5tYXBVcmwgfSk7XHJcblxyXG4gICAgbGV0IHVybCA9XHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FnczJzbGQvZ2V0bWFwLz9cIiArIFwibWFwVXJsPVwiICsgdGhpcy5zdGF0ZS5tYXBVcmw7XHJcblxyXG4gICAgbGV0IHJlcyA9IGRvR2V0KHVybCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbGdcIj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm15Zm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwibWFwVXJsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1hcCBVcmxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWFwVXJsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwVXJsOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2V0IFNMRFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtLTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tfR2V0TWFwKGV2ZW50KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2V0IE1hcFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBdkJBO0FBREE7QUFEQTtBQXNDQTs7O0FBM0VBO0FBQ0E7QUE2RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Main.jsx\n");

/***/ }),

/***/ "./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NavBar = function (_Component) {\n  (0, _inherits3.default)(NavBar, _Component);\n\n  function NavBar() {\n    (0, _classCallCheck3.default)(this, NavBar);\n    return (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || (0, _getPrototypeOf2.default)(NavBar)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(NavBar, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"nav\",\n        { className: \"navbar navbar-light bg-primary\" },\n        _react2.default.createElement(\n          \"a\",\n          { className: \"navbar-brand\", href: \"#\" },\n          \"Ags2Sld\"\n        )\n      );\n    }\n  }]);\n  return NavBar;\n}(_react.Component);\n\nexports.default = NavBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3g/NzY5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIEFnczJTbGRcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BOzs7QUFUQTtBQUNBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar.jsx\n");

/***/ }),

/***/ "./src/helpers/helpers.jsx":
/*!*********************************!*\
  !*** ./src/helpers/helpers.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCRSFToken = getCRSFToken;\nexports.hasTrailingSlash = hasTrailingSlash;\nexports.removeTrailingSlash = removeTrailingSlash;\n/**\r\n * this function get django csrf token from cookie\r\n * @returns {string} return django csrf token\r\n */\nfunction getCRSFToken() {\n    var csrfToken = void 0,\n        csrfMatch = document.cookie.match(/csrftoken=(\\w+)/);\n    if (csrfMatch && csrfMatch.length > 0) {\n        csrfToken = csrfMatch[1];\n    }\n    return csrfToken;\n}\n/**\r\n * this function check if URL has a slash at the end\r\n * @param {string} str url to check\r\n * @returns {bool} return true if has Trailing Slash, false if not\r\n */\nfunction hasTrailingSlash(str) {\n    return (/.*\\/$/.test(str)\n    );\n}\n/**\r\n * this function check if URL has a slash at the end\r\n * @param {string} str url to remove slash from\r\n * @returns {string}\r\n */\nfunction removeTrailingSlash(str) {\n    return hasTrailingSlash(str) ? str.slice(0, -1) : str;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9oZWxwZXJzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS9zcmMvaGVscGVycy9oZWxwZXJzLmpzeD8zZDY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiB0aGlzIGZ1bmN0aW9uIGdldCBkamFuZ28gY3NyZiB0b2tlbiBmcm9tIGNvb2tpZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm4gZGphbmdvIGNzcmYgdG9rZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDUlNGVG9rZW4oKSB7XHJcbiAgICBsZXQgY3NyZlRva2VuLCBjc3JmTWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goL2NzcmZ0b2tlbj0oXFx3KykvKVxyXG4gICAgaWYgKGNzcmZNYXRjaCAmJiBjc3JmTWF0Y2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNzcmZUb2tlbiA9IGNzcmZNYXRjaFsxXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNzcmZUb2tlblxyXG59XHJcbi8qKlxyXG4gKiB0aGlzIGZ1bmN0aW9uIGNoZWNrIGlmIFVSTCBoYXMgYSBzbGFzaCBhdCB0aGUgZW5kXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgdXJsIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIHtib29sfSByZXR1cm4gdHJ1ZSBpZiBoYXMgVHJhaWxpbmcgU2xhc2gsIGZhbHNlIGlmIG5vdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc1RyYWlsaW5nU2xhc2goc3RyKSB7XHJcbiAgICByZXR1cm4gKC8uKlxcLyQvKS50ZXN0KHN0cilcclxufVxyXG4vKipcclxuICogdGhpcyBmdW5jdGlvbiBjaGVjayBpZiBVUkwgaGFzIGEgc2xhc2ggYXQgdGhlIGVuZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHVybCB0byByZW1vdmUgc2xhc2ggZnJvbVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2goc3RyKSB7XHJcbiAgICByZXR1cm4gaGFzVHJhaWxpbmdTbGFzaChzdHIpID8gc3RyLnNsaWNlKDAsIC0xKSA6IHN0clxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQTtBQVlBO0FBUUE7QUF4QkE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/helpers.jsx\n");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2luZGV4LmNzcz81NWNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.css\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n__webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById(\"app\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcclxuXHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/utils/utils.jsx":
/*!*****************************!*\
  !*** ./src/utils/utils.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ \"./node_modules/babel-runtime/core-js/object/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nexports.doGet = doGet;\nexports.doExternalGet = doExternalGet;\nexports.capitalizeFirstLetter = capitalizeFirstLetter;\nexports.doPost = doPost;\nexports.downloadFile = downloadFile;\nexports.copyToClipboard = copyToClipboard;\nexports.ensureOptsDefaults = ensureOptsDefaults;\n\nvar _fileSaver = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/FileSaver.js\");\n\nvar _fileSaver2 = _interopRequireDefault(_fileSaver);\n\nvar _clipboardCopy = __webpack_require__(/*! clipboard-copy */ \"./node_modules/clipboard-copy/index.js\");\n\nvar _clipboardCopy2 = _interopRequireDefault(_clipboardCopy);\n\nvar _helpers = __webpack_require__(/*! ../helpers/helpers */ \"./src/helpers/helpers.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * send get Request to an URL \r\n * @param {string} url to send request to\r\n * @param {object} [extraHeaders={}] custom headers to add to the request\r\n * @param {string} [type='json'] expected response type to parse\r\n * @returns {Promise} result\r\n */\nfunction doGet(url) {\n    var extraHeaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';\n\n    return fetch(url, {\n        method: 'GET',\n        credentials: 'include',\n        headers: (0, _extends3.default)({\n            \"X-CSRFToken\": (0, _helpers.getCRSFToken)()\n        }, extraHeaders)\n    }).then(function (response) {\n        if (type === 'json') {\n            return response.json();\n        } else if (type === 'xml') {\n            return response.text();\n        }\n    });\n}\n/**\r\n * send get Request to an External URL (i.e not on the same domain)\r\n * @param {string} url to send request to\r\n * @param {object} [extraHeaders={}] custom headers to add to the request\r\n * @param {string} [type='json'] expected response type to parse\r\n * @returns {Promise} result\r\n */\nfunction doExternalGet(url) {\n    var extraHeaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';\n\n    return fetch(url, {\n        method: 'GET',\n        mode: 'cors',\n        headers: (0, _extends3.default)({}, extraHeaders)\n    }).then(function (response) {\n        if (type === 'json') {\n            return response.json();\n        } else if (type === 'xml') {\n            return response.text();\n        }\n    });\n}\n/**\r\n * capitalize First Letter of string\r\n * @param {string} string the word to capitalize\r\n * @returns {string} capitalized word\r\n */\nfunction capitalizeFirstLetter(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n}\n/**\r\n * send post Request to an URL \r\n * @param {string} url to send request to\r\n * @param {object} [extraHeaders={}] custom headers to add to the request\r\n * @param {string} [type='json'] expected response type to parse\r\n * @returns {Promise} result\r\n */\nfunction doPost(url, data) {\n    var extraHeaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';\n\n    return fetch(url, {\n        method: 'POST',\n        mode: 'cors',\n        credentials: 'include',\n        headers: new Headers((0, _extends3.default)({\n            \"X-CSRFToken\": (0, _helpers.getCRSFToken)()\n        }, extraHeaders)),\n        body: data\n    }).then(function (response) {\n        if (type === 'json') {\n            return response.json();\n        } else if (type === 'xml') {\n            return response.text();\n        }\n    });\n}\n/**\r\n * Download binary data as file from the server\r\n * @param {string} url to send request to\r\n * @param {string} fileName the desired name of the file\r\n * @param {string} [data=null] request body if you want to send post request\r\n * @returns {Promise}\r\n */\nfunction downloadFile(url, fileName) {\n    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    var downloadPromise = new _promise2.default(function (resolve, reject) {\n        var mainProps = { method: 'GET' };\n        if (data) {\n            mainProps.method = 'POST';\n            mainProps.body = data;\n        }\n        fetch(url, (0, _extends3.default)({}, mainProps, {\n            credentials: 'include',\n            cache: 'no-cache',\n            mode: 'cors',\n            headers: new Headers({\n                \"X-CSRFToken\": (0, _helpers.getCRSFToken)()\n            })\n        })).then(function (response) {\n            if (response.ok) {\n                return response.blob();\n            }\n            throw Error(\"Error Downloading file\");\n        }).then(function (data) {\n            _fileSaver2.default.saveAs(data, fileName);\n            resolve(true);\n        }).catch(function (err) {\n            reject(err);\n        });\n    });\n    return downloadPromise;\n}\n/**\r\n * Copy data to system Clipboard\r\n * @param {string} [text=''] text you want to copy\r\n * @returns {Promise}\r\n */\nfunction copyToClipboard() {\n    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n    return (0, _clipboardCopy2.default)(text);\n}\n/**\r\n * ensure default paramters\r\n * @param {object} optsParam \r\n * @param {object} defaultOpts\r\n * @returns {object}\r\n */\nfunction ensureOptsDefaults(optsParam, defaultOpts) {\n    var newOpts = (0, _extends3.default)({}, optsParam);\n    (0, _keys2.default)(defaultOpts).forEach(function (key) {\n        if (!newOpts[key]) {\n            newOpts[key] = defaultOpts[key];\n        }\n    }, this);\n    return newOpts;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdXRpbHMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3NyYy91dGlscy91dGlscy5qc3g/ZWNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXHJcbmltcG9ydCBjb3B5IGZyb20gJ2NsaXBib2FyZC1jb3B5J1xyXG5pbXBvcnQgeyBnZXRDUlNGVG9rZW4gfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnXHJcbi8qKlxyXG4gKiBzZW5kIGdldCBSZXF1ZXN0IHRvIGFuIFVSTCBcclxuICogQHBhcmFtIHtzdHJpbmd9IHVybCB0byBzZW5kIHJlcXVlc3QgdG9cclxuICogQHBhcmFtIHtvYmplY3R9IFtleHRyYUhlYWRlcnM9e31dIGN1c3RvbSBoZWFkZXJzIHRvIGFkZCB0byB0aGUgcmVxdWVzdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2pzb24nXSBleHBlY3RlZCByZXNwb25zZSB0eXBlIHRvIHBhcnNlXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfSByZXN1bHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkb0dldCh1cmwsIGV4dHJhSGVhZGVycyA9IHt9LCB0eXBlID0gJ2pzb24nKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLUNTUkZUb2tlblwiOiBnZXRDUlNGVG9rZW4oKSxcclxuICAgICAgICAgICAgLi4uZXh0cmFIZWFkZXJzXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd4bWwnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbi8qKlxyXG4gKiBzZW5kIGdldCBSZXF1ZXN0IHRvIGFuIEV4dGVybmFsIFVSTCAoaS5lIG5vdCBvbiB0aGUgc2FtZSBkb21haW4pXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdG8gc2VuZCByZXF1ZXN0IHRvXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmFIZWFkZXJzPXt9XSBjdXN0b20gaGVhZGVycyB0byBhZGQgdG8gdGhlIHJlcXVlc3RcclxuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlPSdqc29uJ10gZXhwZWN0ZWQgcmVzcG9uc2UgdHlwZSB0byBwYXJzZVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gcmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZG9FeHRlcm5hbEdldCh1cmwsIGV4dHJhSGVhZGVycyA9IHt9LCB0eXBlID0gJ2pzb24nKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAuLi5leHRyYUhlYWRlcnNcclxuICAgICAgICB9XHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnanNvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3htbCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLyoqXHJcbiAqIGNhcGl0YWxpemUgRmlyc3QgTGV0dGVyIG9mIHN0cmluZ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSB3b3JkIHRvIGNhcGl0YWxpemVcclxuICogQHJldHVybnMge3N0cmluZ30gY2FwaXRhbGl6ZWQgd29yZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcclxufVxyXG4vKipcclxuICogc2VuZCBwb3N0IFJlcXVlc3QgdG8gYW4gVVJMIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIHRvIHNlbmQgcmVxdWVzdCB0b1xyXG4gKiBAcGFyYW0ge29iamVjdH0gW2V4dHJhSGVhZGVycz17fV0gY3VzdG9tIGhlYWRlcnMgdG8gYWRkIHRvIHRoZSByZXF1ZXN0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT0nanNvbiddIGV4cGVjdGVkIHJlc3BvbnNlIHR5cGUgdG8gcGFyc2VcclxuICogQHJldHVybnMge1Byb21pc2V9IHJlc3VsdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRvUG9zdCh1cmwsIGRhdGEsIGV4dHJhSGVhZGVycyA9IHt9LCB0eXBlID0gJ2pzb24nKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBcIlgtQ1NSRlRva2VuXCI6IGdldENSU0ZUb2tlbigpLFxyXG4gICAgICAgICAgICAuLi5leHRyYUhlYWRlcnNcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2R5OiBkYXRhXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnanNvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3htbCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLyoqXHJcbiAqIERvd25sb2FkIGJpbmFyeSBkYXRhIGFzIGZpbGUgZnJvbSB0aGUgc2VydmVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdG8gc2VuZCByZXF1ZXN0IHRvXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSB0aGUgZGVzaXJlZCBuYW1lIG9mIHRoZSBmaWxlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGF0YT1udWxsXSByZXF1ZXN0IGJvZHkgaWYgeW91IHdhbnQgdG8gc2VuZCBwb3N0IHJlcXVlc3RcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKHVybCwgZmlsZU5hbWUsIGRhdGEgPSBudWxsKSB7XHJcbiAgICBsZXQgZG93bmxvYWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBtYWluUHJvcHMgPSB7IG1ldGhvZDogJ0dFVCcgfVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIG1haW5Qcm9wcy5tZXRob2QgPSAnUE9TVCdcclxuICAgICAgICAgICAgbWFpblByb3BzLmJvZHkgPSBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAuLi5tYWluUHJvcHMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgICAgIFwiWC1DU1JGVG9rZW5cIjogZ2V0Q1JTRlRva2VuKCksXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkVycm9yIERvd25sb2FkaW5nIGZpbGVcIilcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGRhdGEsIGZpbGVOYW1lKVxyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBkb3dubG9hZFByb21pc2VcclxuXHJcbn1cclxuLyoqXHJcbiAqIENvcHkgZGF0YSB0byBzeXN0ZW0gQ2xpcGJvYXJkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGV4dD0nJ10gdGV4dCB5b3Ugd2FudCB0byBjb3B5XHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCh0ZXh0ID0gJycpIHtcclxuICAgIHJldHVybiBjb3B5KHRleHQpXHJcbn1cclxuLyoqXHJcbiAqIGVuc3VyZSBkZWZhdWx0IHBhcmFtdGVyc1xyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0c1BhcmFtIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdE9wdHNcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVPcHRzRGVmYXVsdHMob3B0c1BhcmFtLCBkZWZhdWx0T3B0cykge1xyXG4gICAgbGV0IG5ld09wdHMgPSB7IC4uLm9wdHNQYXJhbSB9XHJcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0T3B0cykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmICghbmV3T3B0c1trZXldKSB7XHJcbiAgICAgICAgICAgIG5ld09wdHNba2V5XSA9IGRlZmF1bHRPcHRzW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9LCB0aGlzKVxyXG4gICAgcmV0dXJuIG5ld09wdHNcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7QUF1QkE7QUFvQkE7QUFVQTtBQXlCQTtBQW1DQTtBQVNBO0FBQ0E7QUFySUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/utils.jsx\n");

/***/ })

/******/ });
});
//# sourceMappingURL=/static/ags2sld/dist/sourcemaps/../ags2sld.bundle.js.map