"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[7805],{

/***/ 47805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Step9; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./src/components/steps/StepsContext.js
var StepsContext = __webpack_require__(65958);
// EXTERNAL MODULE: ./src/components/steps/DataManager.js + 1 modules
var DataManager = __webpack_require__(95922);
// EXTERNAL MODULE: ./src/utility/httpRequest.js
var httpRequest = __webpack_require__(75898);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(97890);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(83061);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(21921);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(91615);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(88564);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 2 modules
var useThemeProps = __webpack_require__(29394);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__(47037);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(86983);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(61113);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(32298);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(77430);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Link/linkClasses.js

function getLinkUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLink', slot);
}
var linkClasses = (0,generateUtilityClasses/* default */.Z)('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
/* harmony default export */ var Link_linkClasses = (linkClasses);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/style.js
var style = __webpack_require__(46428);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(17551);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Link/getTextDecoration.js

var colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

var transformDeprecatedColors = function transformDeprecatedColors(color) {
  return colorTransformations[color] || color;
};

var getTextDecoration = function getTextDecoration(_ref) {
  var theme = _ref.theme,
      ownerState = _ref.ownerState;
  var transformedColor = transformDeprecatedColors(ownerState.color);
  var color = (0,style/* getPath */.D)(theme, "palette.".concat(transformedColor), false) || ownerState.color;
  var channelColor = (0,style/* getPath */.D)(theme, "palette.".concat(transformedColor, "Channel"));

  if ('vars' in theme && channelColor) {
    return "rgba(".concat(channelColor, " / 0.4)");
  }

  return (0,colorManipulator/* alpha */.Fq)(color, 0.4);
};

/* harmony default export */ var Link_getTextDecoration = (getTextDecoration);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Link/Link.js





var _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];















var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
      component = ownerState.component,
      focusVisible = ownerState.focusVisible,
      underline = ownerState.underline;
  var slots = {
    root: ['root', "underline".concat((0,capitalize/* default */.Z)(underline)), component === 'button' && 'button', focusVisible && 'focusVisible']
  };
  return (0,composeClasses/* default */.Z)(slots, getLinkUtilityClass, classes);
};

var LinkRoot = (0,styled/* default */.ZP)(Typography/* default */.Z, {
  name: 'MuiLink',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    return [styles.root, styles["underline".concat((0,capitalize/* default */.Z)(ownerState.underline))], ownerState.component === 'button' && styles.button];
  }
})(function (_ref) {
  var theme = _ref.theme,
      ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.Z)({}, ownerState.underline === 'none' && {
    textDecoration: 'none'
  }, ownerState.underline === 'hover' && {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }, ownerState.underline === 'always' && (0,esm_extends/* default */.Z)({
    textDecoration: 'underline'
  }, ownerState.color !== 'inherit' && {
    textDecorationColor: Link_getTextDecoration({
      theme: theme,
      ownerState: ownerState
    })
  }, {
    '&:hover': {
      textDecorationColor: 'inherit'
    }
  }), ownerState.component === 'button' && (0,defineProperty/* default */.Z)({
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    }
  }, "&.".concat(Link_linkClasses.focusVisible), {
    outline: 'auto'
  }));
});
var Link = /*#__PURE__*/react.forwardRef(function Link(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLink'
  });

  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'a' : _props$component,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      TypographyClasses = props.TypographyClasses,
      _props$underline = props.underline,
      underline = _props$underline === void 0 ? 'always' : _props$underline,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'inherit' : _props$variant,
      sx = props.sx,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var _useIsFocusVisible = (0,useIsFocusVisible/* default */.Z)(),
      isFocusVisibleRef = _useIsFocusVisible.isFocusVisibleRef,
      handleBlurVisible = _useIsFocusVisible.onBlur,
      handleFocusVisible = _useIsFocusVisible.onFocus,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  var handlerRef = (0,useForkRef/* default */.Z)(ref, focusVisibleRef);

  var handleBlur = function handleBlur(event) {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color: color,
    component: component,
    focusVisible: focusVisible,
    underline: underline,
    variant: variant
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LinkRoot, (0,esm_extends/* default */.Z)({
    color: color,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    classes: TypographyClasses,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState: ownerState,
    variant: variant,
    sx: [].concat((0,toConsumableArray/* default */.Z)(!Object.keys(colorTransformations).includes(color) ? [{
      color: color
    }] : []), (0,toConsumableArray/* default */.Z)(Array.isArray(sx) ? sx : [sx]))
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var Link_Link = (Link);
;// CONCATENATED MODULE: ./src/components/steps/Step9.js
var Step8=function Step8(props){var dataManager=new DataManager/* default */.Z();var stepContext=(0,react.useContext)(StepsContext["default"]);var _useState=(0,react.useState)(),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),projectName=_useState2[0],setProjectName=_useState2[1];var httpService=new httpRequest/* default */.Z();var _React$useState=react.useState(false),_React$useState2=(0,slicedToArray/* default */.Z)(_React$useState,2),openMessage=_React$useState2[0],setOpenMessage=_React$useState2[1];var _useParams=(0,react_router/* useParams */.UO)(),projectId=_useParams.projectId;(0,react.useEffect)(function(){props.displaySketcher(true);loadStepData();return function(){};},[]);function loadStepData(){var data=stepContext.stepsData.all;//setProjectName(data.projectName);
var noNavigation=true;var parameters={status:2,ProjectId:projectId};//props.OnSubmit(event, parameters,noNavigation);
}var save=function save(event){var noNavigation=true;var parameters={status:2,ProjectId:projectId};props.OnSubmit(event,parameters,noNavigation);event.preventDefault();};var handleSubmit=function handleSubmit(event){var noNavigation=true;var parameters={status:2,ProjectId:projectId};props.OnSubmit(event,parameters,noNavigation);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"py-5 mt-5",children:"\u05D1\u05E8\u05DB\u05D5\u05EA, \u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8!"}),/*#__PURE__*/(0,jsx_runtime.jsx)("form",{onSubmit:handleSubmit,id:"step9",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link_Link,{to:"/Dashboard",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"btn-lg-2",children:"\u05E0\u05D9\u05D4\u05D5\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD"})})})]});};/* harmony default export */ var Step9 = (Step8);

/***/ })

}]);