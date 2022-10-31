"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[9840,6567],{

/***/ 46567:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_CUSTOMERS": function() { return /* binding */ SET_CUSTOMERS; },
/* harmony export */   "SET_CUSTOMERS_DEFAULT": function() { return /* binding */ SET_CUSTOMERS_DEFAULT; },
/* harmony export */   "SET_DATA_LOADED": function() { return /* binding */ SET_DATA_LOADED; },
/* harmony export */   "SET_FETOT_DIRECTION": function() { return /* binding */ SET_FETOT_DIRECTION; },
/* harmony export */   "SET_PLANNER": function() { return /* binding */ SET_PLANNER; },
/* harmony export */   "SET_PLANNER_DEFAULT": function() { return /* binding */ SET_PLANNER_DEFAULT; },
/* harmony export */   "SET_ROOF_SELECTED": function() { return /* binding */ SET_ROOF_SELECTED; },
/* harmony export */   "SET_ROOF_TYPES": function() { return /* binding */ SET_ROOF_TYPES; },
/* harmony export */   "setCustomers": function() { return /* binding */ setCustomers; },
/* harmony export */   "setCustomersDefault": function() { return /* binding */ setCustomersDefault; },
/* harmony export */   "setDataLoaded": function() { return /* binding */ setDataLoaded; },
/* harmony export */   "setFetotDirection": function() { return /* binding */ setFetotDirection; },
/* harmony export */   "setPlanner": function() { return /* binding */ setPlanner; },
/* harmony export */   "setPlannerDefault": function() { return /* binding */ setPlannerDefault; },
/* harmony export */   "setRoofSelected": function() { return /* binding */ setRoofSelected; },
/* harmony export */   "setRoofTypes": function() { return /* binding */ setRoofTypes; }
/* harmony export */ });
var SET_ROOF_SELECTED='SET_ROOF_SELECTED';var SET_ROOF_TYPES='SET_ROOF_TYPES';var SET_CUSTOMERS='SET_CUSTOMERS';var SET_PLANNER='SET_PLANNER';var SET_FETOT_DIRECTION='SET_FETOT_DIRECTION';var SET_CUSTOMERS_DEFAULT='SET_CUSTOMERS_DEFAULT';var SET_PLANNER_DEFAULT='SET_PLANNER_DEFAULT';var SET_DATA_LOADED='SET_DATA_LOADED';var setRoofSelected=function setRoofSelected(dispatch,payload){return dispatch({type:SET_ROOF_SELECTED,payload:payload});};var setRoofTypes=function setRoofTypes(dispatch,payload){return dispatch({type:SET_ROOF_TYPES,payload:payload});};var setCustomers=function setCustomers(dispatch,payload){return dispatch({type:SET_CUSTOMERS,payload:payload});};var setPlanner=function setPlanner(dispatch,payload){return dispatch({type:SET_PLANNER,payload:payload});};var setFetotDirection=function setFetotDirection(dispatch,payload){return dispatch({type:SET_FETOT_DIRECTION,payload:payload});};var setCustomersDefault=function setCustomersDefault(dispatch,payload){return dispatch({type:SET_CUSTOMERS_DEFAULT,payload:payload});};var setPlannerDefault=function setPlannerDefault(dispatch,payload){return dispatch({type:SET_PLANNER_DEFAULT,payload:payload});};var setDataLoaded=function setDataLoaded(dispatch,payload){return dispatch({type:SET_DATA_LOADED,payload:payload});};

/***/ }),

/***/ 9840:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46567);
var initialState={roofTypeId:null,roofTypes:[],customers:'',planner:'',fetotDirection:null,customersDefault:'',plannerDefault:'',dataLoaded:false};var reducer=function reducer(state,action){var type=action.type,payload=action.payload;switch(type){case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_CUSTOMERS:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{customers:payload});case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_CUSTOMERS_DEFAULT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{customersDefault:payload});case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_FETOT_DIRECTION:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{fetotDirection:payload});case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_PLANNER:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{planner:payload});case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_PLANNER_DEFAULT:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{plannerDefault:payload});case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_ROOF_SELECTED:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{roofTypeId:payload});case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_DATA_LOADED:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{dataLoaded:payload});case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_ROOF_TYPES:return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({},state),{},{roofTypes:payload});default:return state;}};

/***/ })

}]);