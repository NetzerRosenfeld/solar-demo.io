"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[1391,7286,7717],{

/***/ 50956:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Step7; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(74165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(37762);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(63849);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(31616);
// EXTERNAL MODULE: ./src/components/steps/StepsContext.js
var StepsContext = __webpack_require__(65958);
// EXTERNAL MODULE: ./src/components/steps/DataManager.js + 1 modules
var DataManager = __webpack_require__(95922);
// EXTERNAL MODULE: ./src/utility/httpRequest.js + 8 modules
var httpRequest = __webpack_require__(55873);
// EXTERNAL MODULE: ./src/components/steps/constants.js
var constants = __webpack_require__(92877);
// EXTERNAL MODULE: ./src/components/steps/step7/store/index.js
var step7_store = __webpack_require__(97717);
// EXTERNAL MODULE: ./src/components/steps/step7/store/actions.js
var actions = __webpack_require__(27286);
// EXTERNAL MODULE: ./src/utility/ManyKeysMap.js
var ManyKeysMap = __webpack_require__(47609);
// EXTERNAL MODULE: ./node_modules/class-transformer/esm5/index.js + 8 modules
var esm5 = __webpack_require__(65079);
// EXTERNAL MODULE: ./src/components/steps/Panel.js + 5 modules
var Panel = __webpack_require__(2018);
// EXTERNAL MODULE: ./src/components/steps/sketcherManager.js
var steps_sketcherManager = __webpack_require__(37810);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(97890);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(83061);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(21921);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(30686);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(91615);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 2 modules
var useThemeProps = __webpack_require__(29394);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(88564);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(32298);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(77430);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CircularProgress/circularProgressClasses.js

function getCircularProgressUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCircularProgress', slot);
}
var circularProgressClasses = (0,generateUtilityClasses/* default */.Z)('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);
/* harmony default export */ var CircularProgress_circularProgressClasses = ((/* unused pure expression or super */ null && (circularProgressClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CircularProgress/CircularProgress.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4;



var _excluded = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];

var _ = function _(t) {
  return t;
},
    _t,
    _t2,
    _t3,
    _t4;












var SIZE = 44;
var circularRotateKeyframe = (0,emotion_react_browser_esm/* keyframes */.F4)(_t || (_t = _(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))));
var circularDashKeyframe = (0,emotion_react_browser_esm/* keyframes */.F4)(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))));

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
      variant = ownerState.variant,
      color = ownerState.color,
      disableShrink = ownerState.disableShrink;
  var slots = {
    root: ['root', variant, "color".concat((0,capitalize/* default */.Z)(color))],
    svg: ['svg'],
    circle: ['circle', "circle".concat((0,capitalize/* default */.Z)(variant)), disableShrink && 'circleDisableShrink']
  };
  return (0,composeClasses/* default */.Z)(slots, getCircularProgressUtilityClass, classes);
};

var CircularProgressRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiCircularProgress',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    return [styles.root, styles[ownerState.variant], styles["color".concat((0,capitalize/* default */.Z)(ownerState.color))]];
  }
})(function (_ref) {
  var ownerState = _ref.ownerState,
      theme = _ref.theme;
  return (0,esm_extends/* default */.Z)({
    display: 'inline-block'
  }, ownerState.variant === 'determinate' && {
    transition: theme.transitions.create('transform')
  }, ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].main
  });
}, function (_ref2) {
  var ownerState = _ref2.ownerState;
  return ownerState.variant === 'indeterminate' && (0,emotion_react_browser_esm/* css */.iv)(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = (0,taggedTemplateLiteral/* default */.Z)(["\n      animation: ", " 1.4s linear infinite;\n    "])), 0)), circularRotateKeyframe);
});
var CircularProgressSVG = (0,styled/* default */.ZP)('svg', {
  name: 'MuiCircularProgress',
  slot: 'Svg',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.svg;
  }
})({
  display: 'block' // Keeps the progress centered

});
var CircularProgressCircle = (0,styled/* default */.ZP)('circle', {
  name: 'MuiCircularProgress',
  slot: 'Circle',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    return [styles.circle, styles["circle".concat((0,capitalize/* default */.Z)(ownerState.variant))], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(function (_ref3) {
  var ownerState = _ref3.ownerState,
      theme = _ref3.theme;
  return (0,esm_extends/* default */.Z)({
    stroke: 'currentColor'
  }, ownerState.variant === 'determinate' && {
    transition: theme.transitions.create('stroke-dashoffset')
  }, ownerState.variant === 'indeterminate' && {
    // Some default value that looks fine waiting for the animation to kicks in.
    strokeDasharray: '80px, 200px',
    strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.

  });
}, function (_ref4) {
  var ownerState = _ref4.ownerState;
  return ownerState.variant === 'indeterminate' && !ownerState.disableShrink && (0,emotion_react_browser_esm/* css */.iv)(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = (0,taggedTemplateLiteral/* default */.Z)(["\n      animation: ", " 1.4s ease-in-out infinite;\n    "])), 0)), circularDashKeyframe);
});
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var CircularProgress = /*#__PURE__*/react.forwardRef(function CircularProgress(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCircularProgress'
  });

  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$disableShrink = props.disableShrink,
      disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
      _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      style = props.style,
      _props$thickness = props.thickness,
      thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color: color,
    disableShrink: disableShrink,
    size: size,
    thickness: thickness,
    value: value,
    variant: variant
  });

  var classes = useUtilityClasses(ownerState);
  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate') {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
    rootStyle.transform = 'rotate(-90deg)';
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    style: (0,esm_extends/* default */.Z)({
      width: size,
      height: size
    }, rootStyle, style),
    ownerState: ownerState,
    ref: ref,
    role: "progressbar"
  }, rootProps, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressSVG, {
      className: classes.svg,
      ownerState: ownerState,
      viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState: ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var CircularProgress_CircularProgress = (CircularProgress);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(61113);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(9506);
;// CONCATENATED MODULE: ./src/ui-components/CircularProgressWithLabel.js
function CircularProgressWithLabel(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Box/* default */.Z,{sx:{position:'relative',display:'inline-flex'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress_CircularProgress,(0,objectSpread2/* default */.Z)({variant:"determinate"},props)),/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z,{sx:{top:0,left:0,bottom:0,right:0,position:'absolute',display:'flex',alignItems:'center',justifyContent:'center'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(props.value),"%")})})]});}function CircularStatic(){var _React$useState=react.useState(10),_React$useState2=(0,slicedToArray/* default */.Z)(_React$useState,2),progress=_React$useState2[0],setProgress=_React$useState2[1];react.useEffect(function(){var timer=setInterval(function(){setProgress(function(prevProgress){return prevProgress>=100?100:prevProgress+10;});},800);return function(){clearInterval(timer);};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressWithLabel,{value:progress});}
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(1550);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 13 modules
var Select = __webpack_require__(99385);
// EXTERNAL MODULE: ./node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 2 modules
var OutlinedInput = __webpack_require__(37843);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 4 modules
var MenuItem = __webpack_require__(47903);
// EXTERNAL MODULE: ./node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(44758);
;// CONCATENATED MODULE: ./src/ui-components/chipsPanelsMultiple.js
function ChipsPanelsMultiple(props){var dataManager=new DataManager/* default */.Z();var _useState=(0,react.useState)(props.chipsDataStructure),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),chipsData=_useState2[0],setChipsData=_useState2[1];var _useState3=(0,react.useState)(props.chipsDataStructure),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),chipsDataEnable=_useState4[0],setChipsDataEnable=_useState4[1];var _useState5=(0,react.useState)([]),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),fabar=_useState6[0],setFabar=_useState6[1];var _useState7=(0,react.useState)([]),_useState8=(0,slicedToArray/* default */.Z)(_useState7,2),fabarList=_useState8[0],setFabarList=_useState8[1];var httpService=new httpRequest/* default */.Z();(0,react.useMemo)(function(){dataManager.unSelectAll();},[]);(0,react.useEffect)(function(){},[chipsData]);var handleChange=function handleChange(value,row,checked,parentIndex,childIndex,id){value+=childIndex>0?childIndex:'';var l_chipsData=(0,toConsumableArray/* default */.Z)(chipsData);if(checked){l_chipsData[parentIndex][childIndex]=value;}else{l_chipsData[parentIndex][childIndex]=undefined;}setChipsData((0,toConsumableArray/* default */.Z)(l_chipsData));handleClick(id,row.Children,checked,row);};var handleClick=function handleClick(id,childId,checked,row){var commandName="select";var hash=id;var args={};if(childId){id=childId;}if(checked){args["unSelectDisable"]="true";}else{commandName="unselect";args["singleUnSelect"]="true";}executeCommand(commandName,hash,childId,args,row,checked);props.onSelected(hash,childId);};var executeCommand=function executeCommand(commandName,id,childId,args,row,checked){var groupId=null;var layerName="PANELS";if(childId){groupId=childId;}else{var data=props.mapMultiKey.get(id);groupId=data.groupId;}collectFabarData(groupId,checked);dataManager.executeInSketcher(commandName,groupId,layerName,args);};var collectFabarData=function collectFabarData(groupId,checked){var fabarArr=new Array();fabarArr=(0,toConsumableArray/* default */.Z)(fabar);console.log(fabarArr);if(checked){fabarArr.push(groupId);setChipsDataEnable(chipsDataEnable.push(groupId));}else{fabarArr=fabarArr.filter(function(value){return value!=groupId;});}setFabar(fabarArr);console.log(fabarArr);};var validate=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(event){var l_fabarList;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:event.preventDefault();l_fabarList=(0,toConsumableArray/* default */.Z)(fabarList);l_fabarList.push((0,toConsumableArray/* default */.Z)(fabar));updateState(l_fabarList,"fabar");setFabarList(l_fabarList);debugger;setChipsDataEnable(l_fabarList.flat());console.log(chipsDataEnable);setFabar([]);clearAllChips();case 10:case"end":return _context.stop();}}},_callee);}));return function validate(_x){return _ref.apply(this,arguments);};}();var updateState=function updateState(value,type){props.updateState(value,type);};var clearAllChips=function clearAllChips(){for(var index=0;index<chipsData.length;index++){for(var j=0;j<chipsData[index].length;j++){chipsData[index][j]=undefined;}dataManager.unSelectAll();}};var isChecked=function isChecked(id){debugger;console.log(id);return true;};return/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.Z,{sx:{m:1,width:300},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(fabarList)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:validate,children:" \u05E6\u05D5\u05E8 \u05E4\u05E8\u05D5\u05E4\u05D9\u05DC \u05D1\u05E1\u05D9\u05E1 \u05E8\u05E6\u05D9\u05E3"}),props.mapMultiKey&&(0,toConsumableArray/* default */.Z)(props.mapMultiKey).map(function(entry,indexParent){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z,{sx:{m:1,width:300},id:"",labelId:indexParent,multiple:true,value:chipsData[indexParent],input:/*#__PURE__*/(0,jsx_runtime.jsx)(OutlinedInput/* default */.Z,{label:"Tag"}),renderValue:function renderValue(selected){return selected.join(', ');},children:(0,toConsumableArray/* default */.Z)(entry[1].parameters).map(function(row,childIndex){return(row===null||row===void 0?void 0:row.label)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.Z,{value:(row===null||row===void 0?void 0:row.label)+childIndex,children:[row===null||row===void 0?void 0:row.label,childIndex>0?childIndex:'',/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* default */.Z,{disabled:false,onChange:function onChange(e){return handleChange(row===null||row===void 0?void 0:row.label,row,e.currentTarget.checked,indexParent,childIndex,entry[0]);},value:row.Children}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{})]},row.Children);})})});})]});}
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 10 modules
var esm = __webpack_require__(22499);
// EXTERNAL MODULE: ./node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(78614);
;// CONCATENATED MODULE: ./src/components/steps/step7/Step7.js
var step7=function step7(props){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),state=_useState2[0],setState=_useState2[1];var _useState3=(0,react.useState)([]),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),fabar=_useState4[0],setFabar=_useState4[1];var stepContext=(0,react.useContext)(StepsContext["default"]);var _useState5=(0,react.useState)([]),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),chipsData=_useState6[0],setChipsData=_useState6[1];var panels=new Panel/* default */.Z();var httpService=new httpRequest/* default */.Z();var dataManager=new DataManager/* default */.Z();var sketcherManager=new steps_sketcherManager/* default */.Z();var _useReducer=(0,react.useReducer)(step7_store.reducer,step7_store.initialState),_useReducer2=(0,slicedToArray/* default */.Z)(_useReducer,2),store=_useReducer2[0],dispatch=_useReducer2[1];var _useState7=(0,react.useState)(""),_useState8=(0,slicedToArray/* default */.Z)(_useState7,2),txtComments=_useState8[0],setTxtComments=_useState8[1];var _useState9=(0,react.useState)([]),_useState10=(0,slicedToArray/* default */.Z)(_useState9,2),weightDistribution=_useState10[0],setWeightDistribution=_useState10[1];var _useState11=(0,react.useState)(0),_useState12=(0,slicedToArray/* default */.Z)(_useState11,2),progress=_useState12[0],setProgress=_useState12[1];var _useParams=(0,react_router/* useParams */.UO)(),projectId=_useParams.projectId;var _useState13=(0,react.useState)(false),_useState14=(0,slicedToArray/* default */.Z)(_useState13,2),dataLoaded=_useState14[0],setDataLoaded=_useState14[1];var _useState15=(0,react.useState)([]),_useState16=(0,slicedToArray/* default */.Z)(_useState15,2),labels=_useState16[0],setLabels=_useState16[1];var _useState17=(0,react.useState)([]),_useState18=(0,slicedToArray/* default */.Z)(_useState17,2),errors=_useState18[0],setErrors=_useState18[1];var _useState19=(0,react.useState)(),_useState20=(0,slicedToArray/* default */.Z)(_useState19,2),plannerId=_useState20[0],setPlannerId=_useState20[1];var _useState21=(0,react.useState)(),_useState22=(0,slicedToArray/* default */.Z)(_useState21,2),chipsSelected=_useState22[0],setChipsSelected=_useState22[1];(0,react.useEffect)(function(){props.displaySketcher(false);loadStepData();},[weightDistribution]);function loadStepData(){var stepData=stepContext.stepsData.all;actions.setModalTypeText(dispatch,stepData.modalTypeText);setPlannerId(stepData.UserId);var emptyState=[];var arrParent=new Array();for(var index=0;index<stepData.panelsDataArr.length;index++){var data=stepData.panelsDataArr[index];var currentPanelsMap=(0,esm5/* plainToInstance */.yE)(ManyKeysMap/* default */.Z,data.panelsMap);if(currentPanelsMap){var currentChipsChild=initChipsChildren(arrParent,currentPanelsMap.size);arrParent=(0,toConsumableArray/* default */.Z)(currentChipsChild);emptyState.push(currentPanelsMap);}}setChipsData(arrParent);setState(emptyState);}var initChipsChildren=function initChipsChildren(arr,counter){var chips=(0,toConsumableArray/* default */.Z)(arr);var emptyArray=[];for(var i=0;i<counter;i++){emptyArray.push(new Array());}chips.push(emptyArray);return chips;};var drawConstructions=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(event){var WeightDistributionArr,stepsData,triangleResultList,index,data,mapMultiKey,_iterator,_step,_step$value,keys,value,j,element,result,points,pointsWeight,pointsProfile,spacesData,validationErrors,pointsWeightSketch,resultKoshrot,resultLabels,koshrotLength,panelsText,label,groupId,_dataManager$extractP,pointsKoshrot,triangleData,_dataManager$extractZ,zeroPointData;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:event.preventDefault();WeightDistributionArr=[];stepsData=stepContext.stepsData.all;triangleResultList={};if(stepsData.panelsDataArr){_context.next=7;break;}zeroPanelsError();return _context.abrupt("return");case 7:index=0;case 8:if(!(index<stepsData.panelsDataArr.length)){_context.next=82;break;}data=stepsData.panelsDataArr[index];mapMultiKey=(0,esm5/* plainToInstance */.yE)(ManyKeysMap/* default */.Z,data.panelsMap);if(!(mapMultiKey.size==0)){_context.next=14;break;}zeroPanelsError();return _context.abrupt("break",82);case 14:setProgress(progress+10);setDataLoaded(true);_iterator=(0,createForOfIteratorHelper/* default */.Z)(mapMultiKey);_context.prev=17;_iterator.s();case 19:if((_step=_iterator.n()).done){_context.next=70;break;}_step$value=(0,slicedToArray/* default */.Z)(_step.value,2),keys=_step$value[0],value=_step$value[1];j=0;case 22:if(!(j<value.parameters.length)){_context.next=68;break;}element=value.parameters[j];if(!element){_context.next=65;break;}_context.prev=25;setProgress(progress+10);_context.next=29;return httpService.Get("Algorithms/Triangle",element);case 29:result=_context.sent;points=dataManager.extractPoints(result);pointsWeight=points.pointsWeight,pointsProfile=points.pointsProfile,spacesData=points.spacesData,validationErrors=points.validationErrors,pointsWeightSketch=points.pointsWeightSketch;//check if type is sandals or weight
if(!(validationErrors.length>0)){_context.next=35;break;}setErrors(validationErrors);return _context.abrupt("return");case 35:_context.next=37;return httpService.Get("Algorithms/Koshrot",element);case 37:resultKoshrot=_context.sent;_context.next=40;return httpService.Get("Algorithms/Labels",element);case 40:resultLabels=_context.sent;koshrotLength=resultKoshrot.length;panelsText=panels.panelToHebrewString(element.TypeOfTriangle,element.StandingPanels,element.LyingPanels);label={labelId:value.label,panelsText:panelsText,triangleCount:result.length,triangleAngle:element.Angle,koshrot:koshrotLength,profileBasis:result[0].deltaY,rowsCount:value.rowsCount+1,roofType:element.TypeRoof,roofTypeText:element.TypeRoofText,parallelPoles:resultLabels===null||resultLabels===void 0?void 0:resultLabels.parallelPoles,diagonal:resultLabels.diagonal,poles:resultLabels.poles,weightType:element.WeightType,heightParallel:element.HeightParallel,totalWeight:result[0].NumOfWeights};if(!labels[index]){labels[index]={};}labels[index][element.label]=label;setLabels((0,toConsumableArray/* default */.Z)(labels));setTxtComments(panelsText);groupId=value.groupId;if(element.Children){groupId=element.Children;}triangleResultList[groupId]=result;dataManager.drawInSketcher(pointsProfile,"line",groupId,"PROFILLBASIS",null);if(element.roofTypeId==constants/* ROOF_TYPE.FLAT */.Lm.FLAT){dataManager.drawInSketcher(pointsWeight,"circle",groupId,"WEIGHTS",null);//dataManager.drawInSketcher(pointsWeightSketch.weight, "circle", groupId, "WEIGHTS", null);
//dataManager.drawInSketcher(pointsWeightSketch.totalWeightDistance, "measureVDistance", groupId, "WEIGHTS", null);
//dataManager.drawInSketcher(pointsWeightSketch.deltaY, "line", groupId, "WEIGHTS", null);
WeightDistributionArr.push(pointsWeightSketch);}else{dataManager.drawInSketcher(pointsWeight,"circle",groupId,"SANDALSAND",null);}dataManager.drawInSketcher(spacesData.pointsSpaces,"line",groupId,"PROFILLBASEPOSITION",spacesData.labelTexts);_dataManager$extractP=dataManager.extractPointsKoshrot(resultKoshrot,element.ZeroPointAbsolute,element.TypeRoof),pointsKoshrot=_dataManager$extractP.pointsKoshrot,triangleData=_dataManager$extractP.triangleData;dataManager.drawInSketcher(triangleData.pointsTriangle,"line",groupId,"TRIANGLE",triangleData.labelTexts);//kzo
if(element.ZeroPointAbsolute){_dataManager$extractZ=dataManager.extractZeroPoints(element.ZeroPointAbsolute),zeroPointData=_dataManager$extractZ.zeroPointData;dataManager.drawInSketcher(zeroPointData.pointsTriangle,"line",null,"TRIANGLE",zeroPointData.labelTexts);}dataManager.drawInSketcher(pointsKoshrot,"line",groupId,"KOSHROT",null);dataManager.executeInSketcher("select",groupId,null,null);dataManager.executeInSketcher("lockAll",groupId,null,null);_context.next=65;break;case 62:_context.prev=62;_context.t0=_context["catch"](25);console.error("",_context.t0);case 65:j++;_context.next=22;break;case 68:_context.next=19;break;case 70:_context.next=75;break;case 72:_context.prev=72;_context.t1=_context["catch"](17);_iterator.e(_context.t1);case 75:_context.prev=75;_iterator.f();return _context.finish(75);case 78:dataManager.executeInSketcher("refresh",null,null,null);case 79:index++;_context.next=8;break;case 82:setWeightDistribution(WeightDistributionArr);dataManager.executeInSketcher("refresh",null,null,null);setProgress(100);getFabarData(fabar,triangleResultList);case 86:case"end":return _context.stop();}}},_callee,null,[[17,72,75,78],[25,62]]);}));return function drawConstructions(_x){return _ref.apply(this,arguments);};}();var getFabarData=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(fabar,triangleResultList){var arr,i,elementFabar,index,element5,xPointList,_i,xPointArray,triangle,j,element,k,h,parmetersOfResponse,bodyParams,result;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:arr=[];i=0;case 2:if(!(i<fabar.length)){_context2.next=18;break;}if(arr.length>0){arr=[];}elementFabar=fabar[i];for(index=0;index<elementFabar.length;index++){element5=elementFabar[index];if(triangleResultList[element5]){arr.push(triangleResultList[element5]);}}xPointList=[];//validate
for(_i=0;_i<arr.length;_i++){xPointArray=[];triangle=arr[_i];for(j=0;j<triangle.length;j++){element=triangle[j];xPointArray.push(element.x0);}xPointList.push(xPointArray);}for(k=0;k<xPointList[0].length;k++){for(h=1;h<xPointList.length;h++){if(xPointList[h][k]!=xPointList[h-1][k]){console.log("in");}}}if(!(arr.length>0)){_context2.next=15;break;}parmetersOfResponse=arr.flat();bodyParams={fabar:parmetersOfResponse};_context2.next=14;return httpService.Post("Algorithms/Fabar",bodyParams);case 14:result=_context2.sent;case 15:i++;_context2.next=2;break;case 18:case"end":return _context2.stop();}}},_callee2);}));return function getFabarData(_x2,_x3){return _ref2.apply(this,arguments);};}();var zeroPanelsError=function zeroPanelsError(){var noData=new Array();noData.push({description:"לא נבחר שום פנל"});setErrors(noData);};var handleSubmit=function handleSubmit(event){var parameters={modalTypeText:store.modalTypeText,txtComments:txtComments,weightDistribution:weightDistribution,UserId:plannerId,ProjectId:projectId};if(labels.length>0){parameters["labels"]=labels;}sketcherManager.saveSkecherDataInServer(parameters);props.OnSubmit(event,parameters);};var onChipsSelected=function onChipsSelected(id,child){setChipsSelected({id:id,child:child});};var chipsUpdated=function chipsUpdated(id,child,deleteAll){if(!props.state.mapMultiKey.has(id)){return;}var value=props.state.mapMultiKey.get(id);var arr=[];if(child){for(var index=0;index<value.parameters.length;index++){var element=value.parameters[index];if((element===null||element===void 0?void 0:element.Children)!=child){arr.push(element);}}props.state.mapMultiKey.get(id).parameters=arr;if(arr.length==0){removeParent(id);}}else{if(value.parameters.length==1||deleteAll){removeParent(id);}else{for(var _index=1;_index<value.parameters.length;_index++){//skip on the parent element
var _element=value.parameters[_index];arr.push(_element);}props.state.mapMultiKey.get(id).parameters=arr;props.state.mapMultiKey.get(id)["visible"]="false";}}};var _updateState=function updateState(value,type,id){var tempState=(0,toConsumableArray/* default */.Z)(fabar);//tempState[id][type] = value;
//tempState = [...tempState, ...value]
tempState=(0,toConsumableArray/* default */.Z)(value);setFabar(tempState);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"py-5 mt-5",children:"\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05E8\u05DB\u05D1\u05D4 - \u05E7\u05D5\u05E0\u05E1\u05D8\u05E8\u05D5\u05E7\u05E6\u05D9\u05D4"}),dataLoaded&&/*#__PURE__*/(0,jsx_runtime.jsx)(CircularStatic,{value:progress}),/*#__PURE__*/(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmit,id:"step7",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(fabar)})}),state&&/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tabs */.mQ,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabList */.td,{children:state&&state.map(function(fetot,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tab */.OK,{children:[" \u05D2\u05D2-",index]});})}),state&&state.map(function(panels,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabPanel */.x4,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ChipsPanelsMultiple,{updateState:function updateState(value,type){return _updateState(value,type,index);},chipsDataStructure:chipsData[index],onSelected:function onSelected(data,child){onChipsSelected(data,child);},onChange:function onChange(id,child){return chipsUpdated(id,child);},mapMultiKey:panels})});})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z,{className:"text-center mb-5 pb-5",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:drawConstructions,children:" \u05E6\u05D5\u05E8 \u05E7\u05D5\u05E0\u05E1\u05D8\u05E8\u05D5\u05E7\u05E6\u05D9\u05D4"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{className:"text-center mb-5 pb-5",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z,{children:[errors&&errors.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("h5",{children:" \u05E9\u05D2\u05D9\u05D0\u05D5\u05EA:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("ol",{children:errors&&errors.map(function(validationErrors){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:validationErrors.description});})})]})})]})]});};/* harmony default export */ var Step7 = (step7);

/***/ }),

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

/***/ }),

/***/ 44758:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Checkbox_Checkbox; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(21921);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(17551);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/SwitchBase.js + 1 modules
var SwitchBase = __webpack_require__(97423);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(54750);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/CheckBoxOutlineBlank.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ var CheckBoxOutlineBlank = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/CheckBox.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ var CheckBox = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/IndeterminateCheckBox.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ var IndeterminateCheckBox = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(91615);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 2 modules
var useThemeProps = __webpack_require__(29394);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(88564);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(32298);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(77430);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Checkbox/checkboxClasses.js

function getCheckboxUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCheckbox', slot);
}
var checkboxClasses = (0,generateUtilityClasses/* default */.Z)('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
/* harmony default export */ var Checkbox_checkboxClasses = (checkboxClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Checkbox/Checkbox.js



var _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"];















var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
      indeterminate = ownerState.indeterminate,
      color = ownerState.color;
  var slots = {
    root: ['root', indeterminate && 'indeterminate', "color".concat((0,capitalize/* default */.Z)(color))]
  };
  var composedClasses = (0,composeClasses/* default */.Z)(slots, getCheckboxUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};

var CheckboxRoot = (0,styled/* default */.ZP)(SwitchBase/* default */.Z, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return (0,styled/* rootShouldForwardProp */.FO)(prop) || prop === 'classes';
  },
  name: 'MuiCheckbox',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.Z)(ownerState.color))]];
  }
})(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.Z)({
    color: (theme.vars || theme).palette.text.secondary
  }, !ownerState.disableRipple && {
    '&:hover': {
      backgroundColor: theme.vars ? "rgba(".concat(ownerState.color === 'default' ? theme.vars.palette.action.activeChannel : theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.Fq)(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, ownerState.color !== 'default' && (_ref2 = {}, (0,defineProperty/* default */.Z)(_ref2, "&.".concat(Checkbox_checkboxClasses.checked, ", &.").concat(Checkbox_checkboxClasses.indeterminate), {
    color: (theme.vars || theme).palette[ownerState.color].main
  }), (0,defineProperty/* default */.Z)(_ref2, "&.".concat(Checkbox_checkboxClasses.disabled), {
    color: (theme.vars || theme).palette.action.disabled
  }), _ref2));
});

var defaultCheckedIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(CheckBox, {});

var defaultIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(CheckBoxOutlineBlank, {});

var defaultIndeterminateIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(IndeterminateCheckBox, {});

var Checkbox = /*#__PURE__*/react.forwardRef(function Checkbox(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;

  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCheckbox'
  });

  var _props$checkedIcon = props.checkedIcon,
      checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$icon = props.icon,
      iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      _props$indeterminateI = props.indeterminateIcon,
      indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
      inputProps = props.inputProps,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var icon = indeterminate ? indeterminateIconProp : iconProp;
  var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color: color,
    indeterminate: indeterminate,
    size: size
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxRoot, (0,esm_extends/* default */.Z)({
    type: "checkbox",
    inputProps: (0,esm_extends/* default */.Z)({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/react.cloneElement(icon, {
      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /*#__PURE__*/react.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState: ownerState,
    ref: ref
  }, other, {
    classes: classes
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Checkbox_Checkbox = (Checkbox);

/***/ })

}]);