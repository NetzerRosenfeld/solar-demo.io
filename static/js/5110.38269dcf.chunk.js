"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[5110,6155,6567,9840],{

/***/ 26155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RoofTypesModel; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43144);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15671);
var RoofTypesModel=/*#__PURE__*/(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function RoofTypesModel(){(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this,RoofTypesModel);this.fetotDirection=null;this.roofTypeId='';this.roofTypes=[];this.realspace=null;this.trapezoidUpperSize=null;this.trapezoidTypes=null;this.dataLoaded=true;this.fetotDirection=null;this.modalTypes=null;this.modalType=null;});

/***/ }),

/***/ 65617:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ step1_Step1; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(74165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(63849);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(31616);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/HighlightOff.js
var HighlightOff = __webpack_require__(3745);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PostAdd.js
var PostAdd = __webpack_require__(25484);
// EXTERNAL MODULE: ./src/ui-components/select.js + 1 modules
var ui_components_select = __webpack_require__(74686);
// EXTERNAL MODULE: ./src/utility/httpRequest.js + 8 modules
var httpRequest = __webpack_require__(55873);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(97890);
// EXTERNAL MODULE: ./src/components/steps/StepsContext.js
var StepsContext = __webpack_require__(65958);
// EXTERNAL MODULE: ./src/components/steps/step1/store/index.js
var step1_store = __webpack_require__(9840);
// EXTERNAL MODULE: ./src/components/steps/constants.js
var constants = __webpack_require__(92877);
// EXTERNAL MODULE: ./src/components/steps/step1/store/actions.js
var actions = __webpack_require__(46567);
// EXTERNAL MODULE: ./src/components/steps/step1/AddCustomer.js + 9 modules
var AddCustomer = __webpack_require__(13792);
// EXTERNAL MODULE: ./node_modules/@mui/material/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(54299);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(83929);
// EXTERNAL MODULE: ./node_modules/@mui/material/Radio/Radio.js + 5 modules
var Radio = __webpack_require__(74268);
// EXTERNAL MODULE: ./src/utility/ImageWrapper.js
var ImageWrapper = __webpack_require__(7397);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(16783);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./src/components/steps/step1/roofTypeComponent.jsx
function RoofTypeComponent(props){var _props$state$roofType,_props$state$fetotDir;var httpService=new httpRequest/* default */.Z();var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),modalTypes=_useState2[0],setModalTypes=_useState2[1];(0,react.useEffect)(function(){loadModalTypes(props.state.roofTypeId,props.state.fetotDirection);},[props.state]);var updateState=function updateState(value,type){props.updateState(value,type);};var onRoofTypeChange=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(e){var roofTypeId,roofTypeText;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:roofTypeId=e.target.value;updateState(roofTypeId,"roofTypeId");if(roofTypeId!=constants/* ROOF_TYPE.FLAT */.Lm.FLAT){updateState("","weightType");updateState("","weightSquare");}if(roofTypeId!=constants/* ROOF_TYPE.KAL_ZIP */.Lm.KAL_ZIP){updateState("","realspace");}if(roofTypeId!=constants/* ROOF_TYPE.ISKURIT */.Lm.ISKURIT){updateState("","trapezoidDistance");updateState("","fetotDirection");updateState("","trapezoidUpperSize");updateState("","trapezoidTypes");}roofTypeText=props.state.roofTypes.find(function(x){return x.Key==roofTypeId;}).Value;updateState(roofTypeText,"roofTypeText");if(!(roofTypeId!=constants/* ROOF_TYPE.ISKURIT */.Lm.ISKURIT)){_context.next=10;break;}_context.next=10;return loadModalTypes(roofTypeId,props.state.fetotDirection);case 10:case"end":return _context.stop();}}},_callee);}));return function onRoofTypeChange(_x){return _ref.apply(this,arguments);};}();var handleChange=function handleChange(e){var currentModaltype=modalTypes.find(function(x){return x.Key==e.currentTarget.value;});updateState(currentModaltype.Value,"modalTypeText");updateState(e.currentTarget.value,"modalType");};function loadModalTypes(_x2,_x3){return _loadModalTypes.apply(this,arguments);}function _loadModalTypes(){_loadModalTypes=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(roofTypeId,fetotDirection){var roofTypeParameter,localParameters,parameters,result;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:roofTypeParameter={'RoofTypeId':roofTypeId,'FetotDirectionId':fetotDirection==""?null:fetotDirection};localParameters=JSON.stringify(roofTypeParameter);parameters={"name":"ModalTypes",parameters:localParameters};_context2.next=5;return httpService.Get("Data/DataSource",parameters);case 5:result=_context2.sent;if(result&&result.Table){setModalTypes(result.Table);}case 7:case"end":return _context2.stop();}}},_callee2);}));return _loadModalTypes.apply(this,arguments);}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(RadioGroup/* default */.Z,{className:"px-5","aria-labelledby":"roofTypes",name:"roofTypes",row:true,value:(_props$state$roofType=props.state.roofTypeId)!==null&&_props$state$roofType!==void 0?_props$state$roofType:'',onChange:onRoofTypeChange,children:Object.keys(props.state.roofTypes).map(function(key){return props.state.roofTypes[key].ImageName&&/*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.Z,{className:"px-5",sx:{mt:1,mr:1},labelPlacement:"start",value:props.state.roofTypes[key].Key,label:props.state.roofTypes[key].Value,control:/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{pWidth:130,src:props.state.roofTypes[key].ImageName}),checkedIcon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{pWidth:130,class:"img-selected",src:props.state.roofTypes[key].ImageName})})},props.state.roofTypes[key].Key);})}),props.state.roofTypeId==constants/* ROOF_TYPE.ISKURIT */.Lm.ISKURIT&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"px-3",children:"    \u05DB\u05D9\u05D5\u05D5\u05DF \u05E4\u05D8\u05D5\u05EA \u05DC\u05E6\u05E4\u05D5\u05DF:"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(RadioGroup/* default */.Z,{className:"px-3",defaultValue:"2",name:"fetot-direction",value:(_props$state$fetotDir=props.state.fetotDirection)!==null&&_props$state$fetotDir!==void 0?_props$state$fetotDir:"",onChange:function onChange(e){updateState(e.target.value,"fetotDirection");loadModalTypes(props.state.roofTypeId,e.target.value);},id:"fetot-direction",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.Z,{value:"1",control:/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* default */.Z,{required:true}),label:"\u05E4\u05D8\u05D5\u05EA \u05DE\u05D0\u05D5\u05E0\u05DB\u05D5\u05EA \u05DC\u05E6\u05E4\u05D5\u05DF"}),/*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.Z,{value:"2",control:/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* default */.Z,{required:true}),label:"\u05E4\u05D8\u05D5\u05EA \u05DE\u05E7\u05D1\u05D9\u05DC\u05D5\u05EA \u05DC\u05E6\u05E4\u05D5\u05DF"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{className:"mb-5 pb-5 border-top",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z,{children:[props.state.roofTypeText&&/*#__PURE__*/(0,jsx_runtime.jsxs)("h3",{className:"text-center py-3",children:["\u05D2\u05D2 ",props.state.roofTypeText]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:modalTypes.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(RadioGroup/* default */.Z,{name:"modalType",row:true,value:props.state.modalType||'',onChange:handleChange,children:Object.keys(modalTypes).map(function(key){return modalTypes[key].ImageName&&/*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.Z,{labelPlacement:"bottom",value:modalTypes[key].Key,label:modalTypes[key].Value,control:/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{pWidth:"150",pHeight:"150",src:modalTypes[key].ImageName}),checkedIcon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{class:"img-selected",pWidth:"160",pHeight:"160",src:modalTypes[key].ImageName})})},modalTypes[key].Key);})})})]})}),props.state.roofTypeId==constants/* ROOF_TYPE.FLAT */.Lm.FLAT&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3 pt-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:"\u05E1\u05D5\u05D2 \u05D4\u05DE\u05E9\u05E7\u05D5\u05DC\u05EA"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z,{children:[" ",props.state.dataLoaded&&/*#__PURE__*/(0,jsx_runtime.jsx)(ui_components_select/* default */.Z,{onChange:function onChange(data,type){return updateState(data,"weightType");},defaultData:props.state.weightType,name:"Weight",dataSource:"WeightTypes",lKey:"Value",value:"Value",label:"\u05DE\u05E9\u05E7\u05DC (\u05E7'\u05D2)"})," "]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3 pt-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:"\u05E7\"\u05D2 \u05DC\u05DE\u05D8\u05E8 \u05E4\u05E0\u05DC \u05DE\u05E8\u05D5\u05D1\u05E2"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"weight-type",label:"\u05D4\u05D6\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E1\u05E4\u05E8",value:props.state.weightSquare,onChange:function onChange(e){return updateState(e.target.value,"weightSquare");},autoComplete:"off",color:"primary",InputProps:{inputProps:{min:0,type:"number"}}})})]})]}),props.state.roofTypeId==constants/* ROOF_TYPE.ISKURIT */.Lm.ISKURIT&&props.state.fetotDirection==constants/* FETOT_DIRECTION.PARALLEL */.T2.PARALLEL&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"\u05DE\u05E8\u05D7\u05E7 \u05D1\u05D9\u05DF \u05D8\u05E8\u05E4\u05D6\u05D9\u05DD"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"trapezoid-distance",label:"\u05DE\u05E8\u05D7\u05E7 (\u05DE''\u05DE)",value:props.state.trapezoidDistance,onChange:function onChange(e){return updateState(e.target.value,"trapezoidDistance");},autoComplete:"off",color:"primary",InputProps:{inputProps:{min:0,type:"number",step:0.01}}})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3 pt-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"",children:"\u05E1\u05D5\u05D2 \u05D8\u05E8\u05E4\u05D6"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:props.state.dataLoaded&&/*#__PURE__*/(0,jsx_runtime.jsx)(ui_components_select/* default */.Z,{onChange:function onChange(data,type){return updateState(data,"trapezoidTypes");},defaultData:props.state.trapezoidTypes,name:"TrapezoidTypes",dataSource:"TrapezoidTypes",lKey:"Key",value:"Value",label:"\u05E1\u05D5\u05D2 \u05D8\u05E8\u05E4\u05D6"})})]}),props.state.trapezoidTypes==constants/* TRAPEZOID_TYPES.TRAPEZOID */.p4.TRAPEZOID&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{className:"py-3",children:"\u05DE\u05D9\u05D3\u05D5\u05EA \u05D8\u05E8\u05E4\u05D6 \u05E2\u05DC\u05D9\u05D5\u05DF"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ui_components_select/* default */.Z,{className:"px-3 pt-3",onChange:function onChange(data,type){return updateState(data,"trapezoidUpperSize");},defaultData:props.state.trapezoidUpperSize,name:"TrapezoidUpperSize",dataSource:"TrapezoidUpperSizeTypes",lKey:"Key",value:"Value",label:"\u05DE\u05D9\u05D3\u05D5\u05EA \u05D8\u05E8\u05E4\u05D6 \u05E2\u05DC\u05D9\u05D5\u05DF"})]})]}),props.state.roofTypeId==constants/* ROOF_TYPE.KAL_ZIP */.Lm.KAL_ZIP&&/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3 pt-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:"\u05DE\u05E8\u05D7\u05E7 \u05D1\u05D9\u05DF \u05E7\u05DC \u05D6\u05D9\u05E4"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"kalzip-distance",label:"\u05DE\u05E8\u05D7\u05E7 (\u05DE''\u05DE)",value:props.state.realspace,onChange:function onChange(e){return updateState(e.target.value,"realspace");},autoComplete:"off",color:"primary",InputProps:{inputProps:{min:0,type:"number"}}})})]})})]})});}
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 10 modules
var esm = __webpack_require__(22499);
// EXTERNAL MODULE: ./node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(78614);
// EXTERNAL MODULE: ./src/components/steps/step1/RoofTypeModel.js
var RoofTypeModel = __webpack_require__(26155);
;// CONCATENATED MODULE: ./src/components/steps/step1/Step1.js
var Step1=function Step1(props){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),state=_useState2[0],setState=_useState2[1];var _useReducer=(0,react.useReducer)(step1_store.reducer,step1_store.initialState),_useReducer2=(0,slicedToArray/* default */.Z)(_useReducer,2),store=_useReducer2[0],dispatch=_useReducer2[1];var _useState3=(0,react.useState)([]),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),projectName=_useState4[0],setProjectName=_useState4[1];var locationData=(0,react_router/* useLocation */.TH)();//console.log(data1.state);
var httpService=new httpRequest/* default */.Z();var _useParams=(0,react_router/* useParams */.UO)(),projectId=_useParams.projectId,_useParams$activeId=_useParams.activeId,activeId=_useParams$activeId===void 0?1:_useParams$activeId;var stepContext=(0,react.useContext)(StepsContext["default"]);(0,react.useEffect)(function(){props.displaySketcher(false);loadStepData();function loadStepData(){return _loadStepData.apply(this,arguments);}function _loadStepData(){_loadStepData=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(){var roofTypesResult,data,_locationData$state,_locationData$state2,projectText;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return loadRoofTypes();case 2:roofTypesResult=_context.sent;data=stepContext.stepsData["all"];console.log(data);actions.setDataLoaded(dispatch,true);if(data&&data.UserId){actions.setPlannerDefault(dispatch,data.UserId);actions.setCustomersDefault(dispatch,data.customerId);actions.setPlanner(dispatch,data.UserId);actions.setCustomers(dispatch,data.customerId);projectText=locationData!==null&&locationData!==void 0&&(_locationData$state=locationData.state)!==null&&_locationData$state!==void 0&&_locationData$state.projectName?locationData===null||locationData===void 0?void 0:(_locationData$state2=locationData.state)===null||_locationData$state2===void 0?void 0:_locationData$state2.projectName:data.projectName;setProjectName(projectText);}loadData(data,roofTypesResult);actions.setDataLoaded(dispatch,true);case 9:case"end":return _context.stop();}}},_callee);}));return _loadStepData.apply(this,arguments);}var loadData=function loadData(data,roofTypesResult){if(data.roofTypeDataArr&&data.roofTypeDataArr.length>0){setState(data.roofTypeDataArr);}else{var emptyState=(0,toConsumableArray/* default */.Z)(state);var model=new RoofTypeModel["default"]();model.roofTypes=roofTypesResult;if(!data.roofTypeDataArr){emptyState.push(model);}else{for(var index=0;index<data.roofTypeDataArr.length;index++){emptyState.push(model);}}setState(emptyState);}};function loadRoofTypes(){return _loadRoofTypes.apply(this,arguments);}function _loadRoofTypes(){_loadRoofTypes=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(){var parameters,result;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:parameters={"name":"RoofTypes"};_context2.next=3;return httpService.Get("Data/DataSource",parameters);case 3:result=_context2.sent;if(!(result&&result.Table)){_context2.next=7;break;}actions.setRoofTypes(dispatch,result.Table);return _context2.abrupt("return",result.Table);case 7:case"end":return _context2.stop();}}},_callee2);}));return _loadRoofTypes.apply(this,arguments);}return function(){actions.setRoofTypes(dispatch,[]);// clean warning in the console
};},[]);var addTab=function addTab(){var model=new RoofTypeModel["default"]();model.roofTypes=store.roofTypes;state.push(model);var temp=(0,toConsumableArray/* default */.Z)(state);setState(temp);};var deleteTab=function deleteTab(index){var allowDelete=confirm("Are you sure?");if(allowDelete){if(index>0){var temp=(0,toConsumableArray/* default */.Z)(state);temp.splice(index,1);setState(temp);}}};var addCustomersHandler=function addCustomersHandler(){actions.setDataLoaded(dispatch,false);actions.setDataLoaded(dispatch,true);};var _updateState=function updateState(value,type,id){var tempState=(0,toConsumableArray/* default */.Z)(state);tempState[id][type]=value;setState(tempState);};var handleSubmit=function handleSubmit(event){event.preventDefault();var stopRunning=false;if(window.debugMode==false&&(store.planner||store.customers)){var parameters={stepIndex:activeId,UserId:store.planner?store.planner:store.plannerDefault,customerId:store.customers?store.customers:store.customersDefault,createBy:"Netser",//TODO
isDraft:true,status:1,projectName:projectName,ProjectId:projectId,roofTypeDataArr:[]};if(projectId){parameters["projectId"]=projectId;}state.map(function(roof){roof.fetotDirection=roof.roofTypeId==constants/* ROOF_TYPE.KAL_ZIP */.Lm.KAL_ZIP?2:roof.fetotDirection;parameters.roofTypeDataArr.push((0,objectSpread2/* default */.Z)({},roof));if(!roof.modalType){alert("בחר סוג התקנה. ");stopRunning=true;}});props.OnSubmit(event,parameters,stopRunning);}else{var _parameters=null;props.OnSubmit(event,_parameters);}};// const forTest=()=>{
// setProjectName("test");
// actions.setPlannerDefault(dispatch, 20);
// actions.setCustomersDefault(dispatch, 20)
// updateState(1,roofTypeId,0);
// }
return/*#__PURE__*/(0,jsx_runtime.jsxs)("form",{className:"",onSubmit:handleSubmit,id:"step".concat(activeId),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"text-center",children:"\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3 py-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{md:4,children:"\u05E9\u05DD \u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z,{children:[" ",/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"outlined-basic",label:"\u05E9\u05DD \u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8",value:projectName,onChange:function onChange(e){return setProjectName(e.target.value);},autoComplete:"off",color:"primary"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3 py-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{md:4,children:"\u05D1\u05D7\u05E8 \u05DE\u05EA\u05DB\u05E0\u05DF"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:store.dataLoaded&&/*#__PURE__*/(0,jsx_runtime.jsx)(ui_components_select/* default */.Z,{onChange:function onChange(data,type){return actions.setPlanner(dispatch,data);},defaultData:store.plannerDefault,name:"Planner",dataSource:"Planners",lKey:"Id",value:"UserName",label:"\u05E9\u05DD \u05DE\u05EA\u05DB\u05E0\u05DF"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"px-3 py-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{md:4,children:"\u05D1\u05D7\u05E8 \u05DC\u05E7\u05D5\u05D7"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:store.dataLoaded&&/*#__PURE__*/(0,jsx_runtime.jsx)(ui_components_select/* default */.Z,{onChange:function onChange(data,type){return actions.setCustomers(dispatch,data);},defaultData:store.customersDefault,name:"Customers",dataSource:"Customers",lKey:"Id",value:"Name",label:"\u05E9\u05DD \u05E1\u05E4\u05E7"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{className:"px-5",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{md:{span:3,offset:3},children:/*#__PURE__*/(0,jsx_runtime.jsx)(AddCustomer["default"],{OnSubmit:addCustomersHandler})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tabs */.mQ,{className:"pt-5",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* TabList */.td,{children:[store.dataLoaded&&state&&state.map(function(single,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tab */.OK,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{id:"remove-tab",className:index>0?'':'hide',onClick:function onClick(){return deleteTab(index);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(HighlightOff/* default */.Z,{})})," \u05D2\u05D2-",index]});}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{id:"add-tab",onClick:addTab,children:/*#__PURE__*/(0,jsx_runtime.jsx)(PostAdd/* default */.Z,{})})]}),store.dataLoaded&&state&&state.map(function(single,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabPanel */.x4,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(RoofTypeComponent,{updateState:function updateState(value,type){return _updateState(value,type,index);},state:single,id:index})});})]})]});};/* harmony default export */ var step1_Step1 = (Step1);

/***/ }),

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

/***/ }),

/***/ 3745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(64836);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(45045));

var _jsxRuntime = __webpack_require__(46417);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'HighlightOff');

exports.Z = _default;

/***/ }),

/***/ 25484:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(64836);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(45045));

var _jsxRuntime = __webpack_require__(46417);

var _default = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"
}, "1")], 'PostAdd');

exports.Z = _default;

/***/ })

}]);