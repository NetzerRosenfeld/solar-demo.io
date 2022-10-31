"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[7717,7286],{

/***/ 27286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_LABEL_TEXT": function() { return /* binding */ SET_LABEL_TEXT; },
/* harmony export */   "SET_MODAL_TYPE_TEXT": function() { return /* binding */ SET_MODAL_TYPE_TEXT; },
/* harmony export */   "setLabelText": function() { return /* binding */ setLabelText; },
/* harmony export */   "setModalTypeText": function() { return /* binding */ setModalTypeText; }
/* harmony export */ });
var SET_MODAL_TYPE_TEXT='MODAL_TYPE_TEXT';var SET_LABEL_TEXT='LABEL_TEXT';var setModalTypeText=function setModalTypeText(dispatch,payload){return dispatch({type:SET_MODAL_TYPE_TEXT,payload:payload});};var setLabelText=function setLabelText(dispatch,payload){return dispatch({type:SET_LABEL_TEXT,payload:payload});};

/***/ }),

/***/ 97717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27286);
var initialState={modalTypeText:null,labelText:''};var reducer=function reducer(state,action){var type=action.type,payload=action.payload;switch(type){case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_MODAL_TYPE_TEXT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{modalTypeText:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_LABEL_TEXT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{labelText:payload});default:return state;}};

/***/ })

}]);