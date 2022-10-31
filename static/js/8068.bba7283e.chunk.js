"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[8068,5381],{

/***/ 35381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_DATA_LOADED": function() { return /* binding */ SET_DATA_LOADED; },
/* harmony export */   "SET_FETA_COUNT": function() { return /* binding */ SET_FETA_COUNT; },
/* harmony export */   "SET_FETOT_DIRECTION": function() { return /* binding */ SET_FETOT_DIRECTION; },
/* harmony export */   "SET_MODAL_TYPE": function() { return /* binding */ SET_MODAL_TYPE; },
/* harmony export */   "SET_MODAL_TYPES": function() { return /* binding */ SET_MODAL_TYPES; },
/* harmony export */   "SET_MODAL_TYPE_TEXT": function() { return /* binding */ SET_MODAL_TYPE_TEXT; },
/* harmony export */   "SET_REALSPACE": function() { return /* binding */ SET_REALSPACE; },
/* harmony export */   "SET_ROOF_TYPE_ID": function() { return /* binding */ SET_ROOF_TYPE_ID; },
/* harmony export */   "SET_ROOF_TYPE_TEXT": function() { return /* binding */ SET_ROOF_TYPE_TEXT; },
/* harmony export */   "SET_TRAPEZOID_DISTANCE": function() { return /* binding */ SET_TRAPEZOID_DISTANCE; },
/* harmony export */   "SET_TRAPEZOID_TYPES": function() { return /* binding */ SET_TRAPEZOID_TYPES; },
/* harmony export */   "SET_TRAPEZOID_UPPER_SIZE": function() { return /* binding */ SET_TRAPEZOID_UPPER_SIZE; },
/* harmony export */   "SET_WEIGHT_SQUARE": function() { return /* binding */ SET_WEIGHT_SQUARE; },
/* harmony export */   "SET_WEIGHT_TYPE": function() { return /* binding */ SET_WEIGHT_TYPE; },
/* harmony export */   "setDataLoaded": function() { return /* binding */ setDataLoaded; },
/* harmony export */   "setFetotDirection": function() { return /* binding */ setFetotDirection; },
/* harmony export */   "setModalType": function() { return /* binding */ setModalType; },
/* harmony export */   "setModalTypeText": function() { return /* binding */ setModalTypeText; },
/* harmony export */   "setModalTypes": function() { return /* binding */ setModalTypes; },
/* harmony export */   "setRealspace": function() { return /* binding */ setRealspace; },
/* harmony export */   "setRoofTypeId": function() { return /* binding */ setRoofTypeId; },
/* harmony export */   "setRoofTypeText": function() { return /* binding */ setRoofTypeText; },
/* harmony export */   "setTrapezoidDistance": function() { return /* binding */ setTrapezoidDistance; },
/* harmony export */   "setTrapezoidTypes": function() { return /* binding */ setTrapezoidTypes; },
/* harmony export */   "setTrapezoidUpperSize": function() { return /* binding */ setTrapezoidUpperSize; },
/* harmony export */   "setWeightSquare": function() { return /* binding */ setWeightSquare; },
/* harmony export */   "setWeightType": function() { return /* binding */ setWeightType; }
/* harmony export */ });
var SET_ROOF_TYPE_TEXT='SET_ROOF_TYPE_TEXT';var SET_ROOF_TYPE_ID='SET_ROOF_TYPE_ID';var SET_MODAL_TYPE='SET_MODAL_TYPE';var SET_TRAPEZOID_DISTANCE='SET_TRAPEZOID_DISTANCE';var SET_TRAPEZOID_TYPES='SET_TRAPEZOID_TYPES';var SET_MODAL_TYPE_TEXT='SET_MODAL_TYPE_TEXT';var SET_WEIGHT_TYPE='SET_WEIGHT_TYPE';var SET_WEIGHT_SQUARE='SET_WEIGHT_SQUARE';var SET_MODAL_TYPES='SET_MODAL_TYPES';var SET_DATA_LOADED='SET_DATA_LOADED';var SET_TRAPEZOID_UPPER_SIZE='SET_TRAPEZOID_UPPER_SIZE';var SET_FETOT_DIRECTION='SET_FETOT_DIRECTION';var SET_REALSPACE='SET_REALSPACE';var SET_FETA_COUNT='SET_FETA_COUNT';// export const setFetaCount = (dispatch, payload) =>
//   dispatch({ type: SET_FETA_COUNT, payload });
var setRealspace=function setRealspace(dispatch,payload){return dispatch({type:SET_REALSPACE,payload:payload});};var setRoofTypeText=function setRoofTypeText(dispatch,payload){return dispatch({type:SET_ROOF_TYPE_TEXT,payload:payload});};var setRoofTypeId=function setRoofTypeId(dispatch,payload){return dispatch({type:SET_ROOF_TYPE_ID,payload:payload});};var setModalType=function setModalType(dispatch,payload){return dispatch({type:SET_MODAL_TYPE,payload:payload});};var setTrapezoidDistance=function setTrapezoidDistance(dispatch,payload){return dispatch({type:SET_TRAPEZOID_DISTANCE,payload:payload});};var setTrapezoidTypes=function setTrapezoidTypes(dispatch,payload){return dispatch({type:SET_TRAPEZOID_TYPES,payload:payload});};var setModalTypeText=function setModalTypeText(dispatch,payload){return dispatch({type:SET_MODAL_TYPE_TEXT,payload:payload});};var setWeightType=function setWeightType(dispatch,payload){return dispatch({type:SET_WEIGHT_TYPE,payload:payload});};var setWeightSquare=function setWeightSquare(dispatch,payload){return dispatch({type:SET_WEIGHT_SQUARE,payload:payload});};var setModalTypes=function setModalTypes(dispatch,payload){return dispatch({type:SET_MODAL_TYPES,payload:payload});};var setDataLoaded=function setDataLoaded(dispatch,payload){return dispatch({type:SET_DATA_LOADED,payload:payload});};var setTrapezoidUpperSize=function setTrapezoidUpperSize(dispatch,payload){return dispatch({type:SET_TRAPEZOID_UPPER_SIZE,payload:payload});};var setFetotDirection=function setFetotDirection(dispatch,payload){return dispatch({type:SET_FETOT_DIRECTION,payload:payload});};

/***/ }),

/***/ 18068:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35381);
var initialState={roofTypeText:null,roofTypeId:null,modalType:null,trapezoidDistance:null,trapezoidTypes:null,modalTypeText:null,weightType:null,weightSquare:null,modalTypes:[],dataLoaded:false,trapezoidUpperSize:null,fetotDirection:null,realspace:0//fetaCount:0
};var reducer=function reducer(state,action){var type=action.type,payload=action.payload;switch(type){case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_ROOF_TYPE_TEXT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{roofTypeText:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_ROOF_TYPE_ID:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{roofTypeId:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_MODAL_TYPE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{modalType:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_TRAPEZOID_DISTANCE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{trapezoidDistance:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_TRAPEZOID_TYPES:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{trapezoidTypes:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_MODAL_TYPE_TEXT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{modalTypeText:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_WEIGHT_TYPE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{weightType:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_WEIGHT_SQUARE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{weightSquare:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_MODAL_TYPES:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{modalTypes:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_DATA_LOADED:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{dataLoaded:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_TRAPEZOID_UPPER_SIZE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{trapezoidUpperSize:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_FETOT_DIRECTION:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{fetotDirection:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_REALSPACE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{realspace:payload});// case SET_FETA_COUNT:
//   return { ...state, fetaCount: payload };
default:return state;}};

/***/ })

}]);