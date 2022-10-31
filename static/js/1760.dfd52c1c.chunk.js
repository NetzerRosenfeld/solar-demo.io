"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[1760],{

/***/ 27261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ steps_Step2; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(63849);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(97890);
// EXTERNAL MODULE: ./src/components/steps/sketcherManager.js
var steps_sketcherManager = __webpack_require__(37810);
// EXTERNAL MODULE: ./src/components/steps/StepsContext.js
var StepsContext = __webpack_require__(65958);
// EXTERNAL MODULE: ./src/utility/ImageWrapper.js
var ImageWrapper = __webpack_require__(7397);
// EXTERNAL MODULE: ./src/components/steps/eventsManager.js
var eventsManager = __webpack_require__(18415);
// EXTERNAL MODULE: ./src/components/steps/constants.js
var constants = __webpack_require__(92877);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(31616);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(1550);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(5178);
// EXTERNAL MODULE: ./node_modules/@mui/material/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(54299);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(83929);
// EXTERNAL MODULE: ./node_modules/@mui/material/Radio/Radio.js + 5 modules
var Radio = __webpack_require__(74268);
// EXTERNAL MODULE: ./src/components/steps/DataManager.js + 1 modules
var DataManager = __webpack_require__(95922);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./src/components/steps/roofComponent.jsx
function RoofComponent(props){var _useState=(0,react.useState)("בחר"),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),absoluteZeroPointText=_useState2[0],setAbsoluteZeroPointText=_useState2[1];var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),zeroPointAbsoluteEnable=_useState4[0],setZeroPointAbsoluteEnable=_useState4[1];var _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),dataLoaded=_useState6[0],setDataLoaded=_useState6[1];var dataManager=new DataManager/* default */.Z();var _useState7=(0,react.useState)(),_useState8=(0,slicedToArray/* default */.Z)(_useState7,2),roofTypeId=_useState8[0],setRoofTypeId=_useState8[1];var _useState9=(0,react.useState)({x:0,y:0,direction:'up',maxYRange:0}),_useState10=(0,slicedToArray/* default */.Z)(_useState9,2),zeroPointAbsolute=_useState10[0],setZeroPointAbsolute=_useState10[1];(0,react.useEffect)(function(){setRoofTypeId(props.state.roofTypeId);if(props.state&&props.state.zeroPointAbsolute){setZeroPointAbsolute(props.state.zeroPointAbsolute);}(0,eventsManager/* addCustomEvents */.q)(sketcherPickedEvent);setDataLoaded(true);return function(){(0,eventsManager/* removeCustomEvents */.M)(sketcherPickedEvent);};},[absoluteZeroPointText,props.state]);var sketcherPickedEvent=function sketcherPickedEvent(_ref){var detail=_ref.detail;if((detail===null||detail===void 0?void 0:detail.code)==0||(detail===null||detail===void 0?void 0:detail.code)==2){if(zeroPointAbsoluteEnable){setZeroPointAbsolute((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},zeroPointAbsolute),detail.point));updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},zeroPointAbsolute),detail.point),"zeroPointAbsolute");}}console.log(detail,"I'm listening on solar pro to sketcher");};var updateState=function updateState(value,type){props.updateState(value,type);};var absoluteZeroPointHandler=function absoluteZeroPointHandler(event){setZeroPointAbsoluteEnable(!zeroPointAbsoluteEnable);if(zeroPointAbsoluteEnable){setAbsoluteZeroPointText("בחר");setRoofLabel();}else{setAbsoluteZeroPointText("אישור");}event.stopPropagation();event.preventDefault();};var setRoofLabel=function setRoofLabel(){var commandNamd="label";var groupId=null;var layer="ROOF";var args={group:{text:'roof '+props.id,labelPositionY:4000}};dataManager.executeInSketcher(commandNamd,groupId,layer,args);//lock the roof
commandNamd="lockAll";dataManager.executeInSketcher(commandNamd,groupId,layer,args);};var updateDirection=function updateDirection(e){updateState(e.currentTarget.value,"direction");if(e.currentTarget.value=="north"){updateState(-Math.abs(props.state.roofAngle),"roofAngle");}else{updateState(Math.abs(props.state.roofAngle),"roofAngle");}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[" ",props.state.roofTypeText]}),props.state&&roofTypeId!=constants/* ROOF_TYPE.FLAT */.Lm.FLAT&&/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ms-3",children:"\u05D6\u05D5\u05D5\u05D9\u05EA \u05D4\u05D2\u05D2 \u05D1\u05D9\u05D7\u05E1 \u05DC\u05E7\u05E8\u05E7\u05E2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{value:props.state.roofAngle,onChange:function onChange(e){return updateState(e.target.value,"roofAngle");},type:"number"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.Z,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FormLabel/* default */.Z,{id:"roof-angle"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(RadioGroup/* default */.Z,{row:true,"aria-labelledby":"roof-angle",className:"step2-images mt-4",name:"roof-angle",value:props.state.direction||'',onChange:function onChange(e){return updateDirection(e);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.Z,{value:"north",label:"\u05D6\u05D5\u05D9\u05EA \u05DC\u05DB\u05D9\u05D5\u05D5\u05DF \u05E6\u05E4\u05D5\u05DF",control:/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{pWidth:"100",pHeight:"100",src:"angle-to-north.jpg"}),checkedIcon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{pWidth:"120",pHeight:"120",class:"img-selected",src:"angle-to-north.jpg"})})},"north"),/*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.Z,{value:"south",label:"\u05D6\u05D5\u05D9\u05EA \u05DC\u05DB\u05D9\u05D5\u05D5\u05DF \u05D3\u05E8\u05D5\u05DD",control:/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{pWidth:"100",pHeight:"100",src:"angle-to-south.jpg"}),checkedIcon:/*#__PURE__*/(0,jsx_runtime.jsx)(ImageWrapper/* default */.Z,{pWidth:"120",pHeight:"120",class:"img-selected",src:"angle-to-south.jpg"})})},"south")]})]})]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"text-center p-3",children:"\u05D0\u05D7\u05E8\u05D9 \u05E1\u05D9\u05D5\u05DD \u05E9\u05E8\u05D8\u05D5\u05D8 \u05D4\u05D2\u05D2 \u05DC\u05D7\u05E5 \u05E2\u05DC \u05D4\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D1\u05D7\u05E8 \u05D5\u05E1\u05DE\u05DF \u05D0\u05EA \u05E8\u05D0\u05E9\u05D9\u05EA \u05D4\u05E6\u05D9\u05E8\u05D9\u05DD \u05E9\u05DC \u05D4\u05D2\u05D2 \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D4\u05E0\u05E7\u05D5\u05D3\u05D4 \u05D4\u05E9\u05DE\u05D0\u05DC\u05D9\u05EA \u05D4\u05EA\u05D7\u05EA\u05D5\u05E0\u05D4. \u05D5\u05D1\u05E1\u05D9\u05D5\u05DD \u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 \u05D0\u05D9\u05E9\u05D5\u05E8."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"d-flex justify-content-around",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["(",Math.ceil(zeroPointAbsolute===null||zeroPointAbsolute===void 0?void 0:zeroPointAbsolute.x),",",Math.ceil(zeroPointAbsolute===null||zeroPointAbsolute===void 0?void 0:zeroPointAbsolute.y),")"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bg-dark text-white",onClick:absoluteZeroPointHandler,children:absoluteZeroPointText})]})]});}
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 10 modules
var esm = __webpack_require__(22499);
// EXTERNAL MODULE: ./node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(78614);
;// CONCATENATED MODULE: ./src/components/steps/Step2.js
var Step2=function Step2(props){var _useParams=(0,react_router/* useParams */.UO)(),projectId=_useParams.projectId,stepId=_useParams.stepId;var dataManager=new DataManager/* default */.Z();var _useState=(0,react.useState)(),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),plannerId=_useState2[0],setPlannerId=_useState2[1];// const [roofTypeId, setRoofTypeId] = useState();
var sketcherManager=new steps_sketcherManager/* default */.Z();var stepContext=(0,react.useContext)(StepsContext["default"]);var _useState3=(0,react.useState)([{direction:'',roofAngle:''}]),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),state=_useState4[0],setState=_useState4[1];var _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),dataLoaded=_useState6[0],setDataLoaded=_useState6[1];(0,react.useEffect)(function(){props.displaySketcher(false);loadStepData();},[]);function loadStepData(){var data=stepContext.stepsData["all"];setPlannerId(data.UserId);//setRoofTypeId(data.roofTypeId);
if(data.roofDataArr&&data.roofDataArr.length>0){setState(data.roofDataArr);}else if(data.roofTypeDataArr&&data.roofTypeDataArr.length>0){var emptyState=[];for(var index=0;index<data.roofTypeDataArr.length;index++){var element=data.roofTypeDataArr[index];emptyState.push({direction:'',roofAngle:'',roofTypeId:element.roofTypeId,roofTypeText:element.roofTypeText});}setState(emptyState);}setDataLoaded(true);}var handleSubmit=function handleSubmit(event){var stopRunning=false;var parameters={ProjectId:projectId,stepIndex:stepId,isDraft:true,UserId:plannerId,roofData:{},roofDataArr:[]};state.map(function(roof,index){if(!roof.zeroPointAbsolute){alert("no zero point was selected");stopRunning=true;console.error("no zero point was selected");}parameters.roofDataArr.push((0,objectSpread2/* default */.Z)({},roof));});sketcherManager.saveSkecherDataInServer(parameters);if(!stopRunning){props.OnSubmit(event,parameters);}else{props.OnSubmit(event,parameters,stopRunning);}};var _updateState=function updateState(value,type,id){var tempState=(0,toConsumableArray/* default */.Z)(state);tempState[id][type]=value;setState(tempState);};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{className:"",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmit,id:"step2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"text-center",children:"\u05E9\u05E8\u05D8\u05D8 \u05D0\u05EA \u05D4\u05D2\u05D2"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tabs */.mQ,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabList */.td,{children:dataLoaded&&state&&state.map(function(roof,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tab */.OK,{children:["\u05D2\u05D2-",index]});})}),dataLoaded&&state&&state.map(function(roof,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabPanel */.x4,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(RoofComponent,{updateState:function updateState(value,type){return _updateState(value,type,index);},state:roof,id:index})});})]})]})})});};/* harmony default export */ var steps_Step2 = (Step2);

/***/ }),

/***/ 18415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ removeCustomEvents; },
/* harmony export */   "q": function() { return /* binding */ addCustomEvents; }
/* harmony export */ });
var addCustomEvents=function addCustomEvents(sketcherPickedEvent){document.addEventListener('sketcherPickedEvent',sketcherPickedEvent,false);};var removeCustomEvents=function removeCustomEvents(sketcherPickedEvent){document.removeEventListener('sketcherPickedEvent',sketcherPickedEvent,false);};

/***/ })

}]);