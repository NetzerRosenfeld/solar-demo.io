"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[1841,8236],{

/***/ 98236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_CURRENT_LABEL": function() { return /* binding */ SET_CURRENT_LABEL; },
/* harmony export */   "SET_DATA_LOADED": function() { return /* binding */ SET_DATA_LOADED; },
/* harmony export */   "SET_DISTANCE_FROM_ZERO_POINT": function() { return /* binding */ SET_DISTANCE_FROM_ZERO_POINT; },
/* harmony export */   "SET_GROUP_ID": function() { return /* binding */ SET_GROUP_ID; },
/* harmony export */   "SET_HEIGHT_PARALLEL": function() { return /* binding */ SET_HEIGHT_PARALLEL; },
/* harmony export */   "SET_MODAL_TYPE_TEXT": function() { return /* binding */ SET_MODAL_TYPE_TEXT; },
/* harmony export */   "SET_PANELS_COUNT": function() { return /* binding */ SET_PANELS_COUNT; },
/* harmony export */   "SET_PANELS_TYPE": function() { return /* binding */ SET_PANELS_TYPE; },
/* harmony export */   "SET_ROOF_DATA": function() { return /* binding */ SET_ROOF_DATA; },
/* harmony export */   "SET_TRIANGLE": function() { return /* binding */ SET_TRIANGLE; },
/* harmony export */   "SET_ZERO_POINT": function() { return /* binding */ SET_ZERO_POINT; },
/* harmony export */   "SET_ZERO_POINT_ABSOLUTE": function() { return /* binding */ SET_ZERO_POINT_ABSOLUTE; },
/* harmony export */   "setCurrentLabel": function() { return /* binding */ setCurrentLabel; },
/* harmony export */   "setDataLoaded": function() { return /* binding */ setDataLoaded; },
/* harmony export */   "setDistanceFromZeroPoint": function() { return /* binding */ setDistanceFromZeroPoint; },
/* harmony export */   "setGroupId": function() { return /* binding */ setGroupId; },
/* harmony export */   "setHeightParallel": function() { return /* binding */ setHeightParallel; },
/* harmony export */   "setModalTypeText": function() { return /* binding */ setModalTypeText; },
/* harmony export */   "setPanelsCount": function() { return /* binding */ setPanelsCount; },
/* harmony export */   "setPanelsType": function() { return /* binding */ setPanelsType; },
/* harmony export */   "setRoofData": function() { return /* binding */ setRoofData; },
/* harmony export */   "setTriangle": function() { return /* binding */ setTriangle; },
/* harmony export */   "setZeroPoint": function() { return /* binding */ setZeroPoint; },
/* harmony export */   "setZeroPointAbsolute": function() { return /* binding */ setZeroPointAbsolute; }
/* harmony export */ });
var SET_CURRENT_LABEL='CURRENT_LABEL';var SET_DATA_LOADED='DATA_LOADED';var SET_PANELS_TYPE='PANELS_TYPE';var SET_GROUP_ID='GROUP_ID';var SET_HEIGHT_PARALLEL='HEIGHT_PARALLEL';var SET_MODAL_TYPE_TEXT='MODAL_TYPE_TEXT';var SET_TRIANGLE='TRIANGLE';var SET_PANELS_COUNT='PANELS_COUNT';var SET_ZERO_POINT='ZERO_POINT';var SET_ZERO_POINT_ABSOLUTE='ZERO_POINT_ABSOLUTE';var SET_DISTANCE_FROM_ZERO_POINT='DISTANCE_FROM_ZERO_POINT';var SET_ROOF_DATA='ROOF_DATA';//export const SET_LABEL_TEXT= 'LABEL_TEXT';
var setGroupId=function setGroupId(dispatch,payload){return dispatch({type:SET_GROUP_ID,payload:payload});};var setPanelsType=function setPanelsType(dispatch,payload){return dispatch({type:SET_PANELS_TYPE,payload:payload});};var setCurrentLabel=function setCurrentLabel(dispatch,payload){return dispatch({type:SET_CURRENT_LABEL,payload:payload});};var setDataLoaded=function setDataLoaded(dispatch,payload){return dispatch({type:SET_DATA_LOADED,payload:payload});};var setHeightParallel=function setHeightParallel(dispatch,payload){return dispatch({type:SET_HEIGHT_PARALLEL,payload:payload});};var setModalTypeText=function setModalTypeText(dispatch,payload){return dispatch({type:SET_MODAL_TYPE_TEXT,payload:payload});};var setTriangle=function setTriangle(dispatch,payload){return dispatch({type:SET_TRIANGLE,payload:payload});};var setPanelsCount=function setPanelsCount(dispatch,payload){return dispatch({type:SET_PANELS_COUNT,payload:payload});};var setZeroPoint=function setZeroPoint(dispatch,payload){return dispatch({type:SET_ZERO_POINT,payload:payload});};var setZeroPointAbsolute=function setZeroPointAbsolute(dispatch,payload){return dispatch({type:SET_ZERO_POINT_ABSOLUTE,payload:payload});};var setDistanceFromZeroPoint=function setDistanceFromZeroPoint(dispatch,payload){return dispatch({type:SET_DISTANCE_FROM_ZERO_POINT,payload:payload});};var setRoofData=function setRoofData(dispatch,payload){return dispatch({type:SET_ROOF_DATA,payload:payload});};// export const setLabelText = (dispatch, payload) =>
// dispatch({ type: SET_LABEL_TEXT, payload });

/***/ }),

/***/ 71841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98236);
var initialState={heightParallel:0,modalTypeText:null,triangle:{angle:0,frontLegHeight:0},panelsType:null,panelsCount:{horizontal:1,vertical:1},zeroPoint:{x:0,y:0,direction:'up',maxYRange:0},distanceFromZeroPoint:{dy:0,dx:0},//labelText: '',
currentLabel:'',dataLoaded:false,groupId:0,zeroPointAbsolute:{x:0,y:0,direction:'up',maxYRange:0},roofData:{}};var reducer=function reducer(state,action){var type=action.type,payload=action.payload;switch(type){case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_GROUP_ID:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{groupId:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_CURRENT_LABEL:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{currentLabel:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_DATA_LOADED:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{dataLoaded:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_DISTANCE_FROM_ZERO_POINT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{distanceFromZeroPoint:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_HEIGHT_PARALLEL:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{heightParallel:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_MODAL_TYPE_TEXT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{modalTypeText:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_PANELS_COUNT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{panelsCount:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_PANELS_TYPE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{panelsType:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_TRIANGLE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{triangle:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_ZERO_POINT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{zeroPoint:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_ZERO_POINT_ABSOLUTE:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{zeroPointAbsolute:payload});case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_ROOF_DATA:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},state),{},{roofData:payload});// case SET_LABEL_TEXT:
// return { ...state, labelText: payload };
default:return state;}};

/***/ })

}]);