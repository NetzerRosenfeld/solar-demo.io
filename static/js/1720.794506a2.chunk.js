"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[1720,8236,1841],{

/***/ 18415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ removeCustomEvents; },
/* harmony export */   "q": function() { return /* binding */ addCustomEvents; }
/* harmony export */ });
var addCustomEvents=function addCustomEvents(sketcherPickedEvent){document.addEventListener('sketcherPickedEvent',sketcherPickedEvent,false);};var removeCustomEvents=function removeCustomEvents(sketcherPickedEvent){document.removeEventListener('sketcherPickedEvent',sketcherPickedEvent,false);};

/***/ }),

/***/ 83852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PanelsModel; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43144);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15671);
/* harmony import */ var _utility_ManyKeysMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47609);
var PanelsModel=/*#__PURE__*/(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function PanelsModel(){(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this,PanelsModel);this.heightParallel='';this.modalTypeText=null;this.triangle={angle:'',frontLegHeight:''};this.panelsType=null;this.panelsCount={horizontal:1,vertical:1};this.zeroPoint={x:0,y:0,direction:'up',maxYRange:0};this.distanceFromZeroPoint={dy:0,dx:0};this.currentLabel='';this.dataLoaded=false;this.groupId=0;this.zeroPointAbsolute={x:0,y:0,direction:'up',maxYRange:0};this.roofData={};this.mapMultiKey=new _utility_ManyKeysMap__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();this.groupIdCopy={};}//panelsSize= { horizontal:{height:0,width:0},vertical:{height:0,width:0} };
);

/***/ }),

/***/ 23248:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Step6; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./src/components/steps/StepsContext.js
var StepsContext = __webpack_require__(65958);
// EXTERNAL MODULE: ./src/components/steps/DataManager.js + 1 modules
var DataManager = __webpack_require__(95922);
// EXTERNAL MODULE: ./src/components/steps/step6/store/actions.js
var actions = __webpack_require__(98236);
// EXTERNAL MODULE: ./src/components/steps/step6/store/index.js
var step6_store = __webpack_require__(71841);
// EXTERNAL MODULE: ./node_modules/class-transformer/esm5/index.js + 8 modules
var esm5 = __webpack_require__(65079);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(97890);
// EXTERNAL MODULE: ./src/components/steps/sketcherManager.js
var steps_sketcherManager = __webpack_require__(37810);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 10 modules
var esm = __webpack_require__(22499);
// EXTERNAL MODULE: ./node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(78614);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(74165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(37762);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(16783);
// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(34953);
// EXTERNAL MODULE: ./node_modules/@mui/material/Snackbar/Snackbar.js + 4 modules
var Snackbar = __webpack_require__(51204);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(63849);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(31616);
// EXTERNAL MODULE: ./src/ui-components/select.js + 1 modules
var ui_components_select = __webpack_require__(74686);
// EXTERNAL MODULE: ./src/components/steps/Panel.js + 5 modules
var Panel = __webpack_require__(2018);
// EXTERNAL MODULE: ./src/components/steps/constants.js
var constants = __webpack_require__(92877);
// EXTERNAL MODULE: ./src/utility/ManyKeysMap.js
var ManyKeysMap = __webpack_require__(47609);
// EXTERNAL MODULE: ./src/utility/httpRequest.js + 4 modules
var httpRequest = __webpack_require__(96822);
// EXTERNAL MODULE: ./src/components/steps/Shapes/Panels/Measurement.js
var Measurement = __webpack_require__(35925);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(1550);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(15103);
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
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(17551);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(54750);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ var Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(86983);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(91615);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(38743);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 2 modules
var useThemeProps = __webpack_require__(29394);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(88564);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(32298);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(77430);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Chip/chipClasses.js

function getChipUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiChip', slot);
}
var chipClasses = (0,generateUtilityClasses/* default */.Z)('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorPrimary', 'colorSecondary', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'filledPrimary', 'filledSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'deleteIconFilledColorPrimary', 'deleteIconFilledColorSecondary', 'focusVisible']);
/* harmony default export */ var Chip_chipClasses = (chipClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Chip/Chip.js



var _excluded = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"];
















var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
      disabled = ownerState.disabled,
      size = ownerState.size,
      color = ownerState.color,
      onDelete = ownerState.onDelete,
      clickable = ownerState.clickable,
      variant = ownerState.variant;
  var slots = {
    root: ['root', variant, disabled && 'disabled', "size".concat((0,capitalize/* default */.Z)(size)), "color".concat((0,capitalize/* default */.Z)(color)), clickable && 'clickable', clickable && "clickableColor".concat((0,capitalize/* default */.Z)(color)), onDelete && 'deletable', onDelete && "deletableColor".concat((0,capitalize/* default */.Z)(color)), "".concat(variant).concat((0,capitalize/* default */.Z)(color))],
    label: ['label', "label".concat((0,capitalize/* default */.Z)(size))],
    avatar: ['avatar', "avatar".concat((0,capitalize/* default */.Z)(size)), "avatarColor".concat((0,capitalize/* default */.Z)(color))],
    icon: ['icon', "icon".concat((0,capitalize/* default */.Z)(size)), "iconColor".concat((0,capitalize/* default */.Z)(color))],
    deleteIcon: ['deleteIcon', "deleteIcon".concat((0,capitalize/* default */.Z)(size)), "deleteIconColor".concat((0,capitalize/* default */.Z)(color)), "deleteIcon".concat((0,capitalize/* default */.Z)(variant), "Color").concat((0,capitalize/* default */.Z)(color))]
  };
  return (0,composeClasses/* default */.Z)(slots, getChipUtilityClass, classes);
};

var ChipRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiChip',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    var color = ownerState.color,
        clickable = ownerState.clickable,
        onDelete = ownerState.onDelete,
        size = ownerState.size,
        variant = ownerState.variant;
    return [(0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.avatar), styles.avatar), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.avatar), styles["avatar".concat((0,capitalize/* default */.Z)(size))]), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.avatar), styles["avatarColor".concat((0,capitalize/* default */.Z)(color))]), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.icon), styles.icon), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.icon), styles["icon".concat((0,capitalize/* default */.Z)(size))]), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.icon), styles["iconColor".concat((0,capitalize/* default */.Z)(color))]), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.deleteIcon), styles.deleteIcon), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.deleteIcon), styles["deleteIcon".concat((0,capitalize/* default */.Z)(size))]), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.deleteIcon), styles["deleteIconColor".concat((0,capitalize/* default */.Z)(color))]), (0,defineProperty/* default */.Z)({}, "& .".concat(Chip_chipClasses.deleteIcon), styles["deleteIcon".concat((0,capitalize/* default */.Z)(variant), "Color").concat((0,capitalize/* default */.Z)(color))]), styles.root, styles["size".concat((0,capitalize/* default */.Z)(size))], styles["color".concat((0,capitalize/* default */.Z)(color))], clickable && styles.clickable, clickable && color !== 'default' && styles["clickableColor".concat((0,capitalize/* default */.Z)(color), ")")], onDelete && styles.deletable, onDelete && color !== 'default' && styles["deletableColor".concat((0,capitalize/* default */.Z)(color))], styles[variant], styles["".concat(variant).concat((0,capitalize/* default */.Z)(color))]];
  }
})(function (_ref11) {
  var _extends2;

  var theme = _ref11.theme,
      ownerState = _ref11.ownerState;
  var deleteIconColor = (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26);
  var textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
  return (0,esm_extends/* default */.Z)((_extends2 = {
    maxWidth: '100%',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    // label will inherit this from root, then `clickable` class overrides this for both
    cursor: 'default',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: 'none',
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: 'middle',
    boxSizing: 'border-box'
  }, (0,defineProperty/* default */.Z)(_extends2, "&.".concat(Chip_chipClasses.disabled), {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    pointerEvents: 'none'
  }), (0,defineProperty/* default */.Z)(_extends2, "& .".concat(Chip_chipClasses.avatar), {
    marginLeft: 5,
    marginRight: -6,
    width: 24,
    height: 24,
    color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
    fontSize: theme.typography.pxToRem(12)
  }), (0,defineProperty/* default */.Z)(_extends2, "& .".concat(Chip_chipClasses.avatarColorPrimary), {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.dark
  }), (0,defineProperty/* default */.Z)(_extends2, "& .".concat(Chip_chipClasses.avatarColorSecondary), {
    color: (theme.vars || theme).palette.secondary.contrastText,
    backgroundColor: (theme.vars || theme).palette.secondary.dark
  }), (0,defineProperty/* default */.Z)(_extends2, "& .".concat(Chip_chipClasses.avatarSmall), {
    marginLeft: 4,
    marginRight: -4,
    width: 18,
    height: 18,
    fontSize: theme.typography.pxToRem(10)
  }), (0,defineProperty/* default */.Z)(_extends2, "& .".concat(Chip_chipClasses.icon), (0,esm_extends/* default */.Z)({
    color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor,
    marginLeft: 5,
    marginRight: -6
  }, ownerState.size === 'small' && {
    fontSize: 18,
    marginLeft: 4,
    marginRight: -4
  }, ownerState.color !== 'default' && {
    color: 'inherit'
  })), (0,defineProperty/* default */.Z)(_extends2, "& .".concat(Chip_chipClasses.deleteIcon), (0,esm_extends/* default */.Z)({
    WebkitTapHighlightColor: 'transparent',
    color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.26)") : deleteIconColor,
    fontSize: 22,
    cursor: 'pointer',
    margin: '0 5px 0 -6px',
    '&:hover': {
      color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.4)") : (0,colorManipulator/* alpha */.Fq)(deleteIconColor, 0.4)
    }
  }, ownerState.size === 'small' && {
    fontSize: 16,
    marginRight: 4,
    marginLeft: -4
  }, ownerState.color !== 'default' && {
    color: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].contrastTextChannel, " / 0.7)") : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].contrastText, 0.7),
    '&:hover, &:active': {
      color: (theme.vars || theme).palette[ownerState.color].contrastText
    }
  })), _extends2), ownerState.size === 'small' && {
    height: 24
  }, ownerState.color !== 'default' && {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    color: (theme.vars || theme).palette[ownerState.color].contrastText
  }, ownerState.onDelete && (0,defineProperty/* default */.Z)({}, "&.".concat(Chip_chipClasses.focusVisible), {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity + theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  }), ownerState.onDelete && ownerState.color !== 'default' && (0,defineProperty/* default */.Z)({}, "&.".concat(Chip_chipClasses.focusVisible), {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
  }));
}, function (_ref14) {
  var _ref15;

  var theme = _ref14.theme,
      ownerState = _ref14.ownerState;
  return (0,esm_extends/* default */.Z)({}, ownerState.clickable && (_ref15 = {
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity + theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    }
  }, (0,defineProperty/* default */.Z)(_ref15, "&.".concat(Chip_chipClasses.focusVisible), {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity + theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  }), (0,defineProperty/* default */.Z)(_ref15, '&:active', {
    boxShadow: (theme.vars || theme).shadows[1]
  }), _ref15), ownerState.clickable && ownerState.color !== 'default' && (0,defineProperty/* default */.Z)({}, "&:hover, &.".concat(Chip_chipClasses.focusVisible), {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
  }));
}, function (_ref17) {
  var _ref18, _ref19;

  var theme = _ref17.theme,
      ownerState = _ref17.ownerState;
  return (0,esm_extends/* default */.Z)({}, ownerState.variant === 'outlined' && (_ref18 = {
    backgroundColor: 'transparent',
    border: theme.vars ? "1px solid ".concat(theme.vars.palette.Chip.defaultBorder) : "1px solid ".concat(theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700])
  }, (0,defineProperty/* default */.Z)(_ref18, "&.".concat(Chip_chipClasses.clickable, ":hover"), {
    backgroundColor: (theme.vars || theme).palette.action.hover
  }), (0,defineProperty/* default */.Z)(_ref18, "&.".concat(Chip_chipClasses.focusVisible), {
    backgroundColor: (theme.vars || theme).palette.action.focus
  }), (0,defineProperty/* default */.Z)(_ref18, "& .".concat(Chip_chipClasses.avatar), {
    marginLeft: 4
  }), (0,defineProperty/* default */.Z)(_ref18, "& .".concat(Chip_chipClasses.avatarSmall), {
    marginLeft: 2
  }), (0,defineProperty/* default */.Z)(_ref18, "& .".concat(Chip_chipClasses.icon), {
    marginLeft: 4
  }), (0,defineProperty/* default */.Z)(_ref18, "& .".concat(Chip_chipClasses.iconSmall), {
    marginLeft: 2
  }), (0,defineProperty/* default */.Z)(_ref18, "& .".concat(Chip_chipClasses.deleteIcon), {
    marginRight: 5
  }), (0,defineProperty/* default */.Z)(_ref18, "& .".concat(Chip_chipClasses.deleteIconSmall), {
    marginRight: 3
  }), _ref18), ownerState.variant === 'outlined' && ownerState.color !== 'default' && (_ref19 = {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: "1px solid ".concat(theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.7))
  }, (0,defineProperty/* default */.Z)(_ref19, "&.".concat(Chip_chipClasses.clickable, ":hover"), {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
  }), (0,defineProperty/* default */.Z)(_ref19, "&.".concat(Chip_chipClasses.focusVisible), {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.focusOpacity, ")") : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
  }), (0,defineProperty/* default */.Z)(_ref19, "& .".concat(Chip_chipClasses.deleteIcon), {
    color: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.7),
    '&:hover, &:active': {
      color: (theme.vars || theme).palette[ownerState.color].main
    }
  }), _ref19));
});
var ChipLabel = (0,styled/* default */.ZP)('span', {
  name: 'MuiChip',
  slot: 'Label',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    var size = ownerState.size;
    return [styles.label, styles["label".concat((0,capitalize/* default */.Z)(size))]];
  }
})(function (_ref20) {
  var ownerState = _ref20.ownerState;
  return (0,esm_extends/* default */.Z)({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap'
  }, ownerState.size === 'small' && {
    paddingLeft: 8,
    paddingRight: 8
  });
});

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react.forwardRef(function Chip(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiChip'
  });

  var avatarProp = props.avatar,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'filled' : _props$variant,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var chipRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var component = clickable || onDelete ? ButtonBase/* default */.Z : ComponentProp || 'div';

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component: component,
    disabled: disabled,
    size: size,
    color: color,
    onDelete: !!onDelete,
    clickable: clickable,
    variant: variant
  });

  var classes = useUtilityClasses(ownerState);
  var moreProps = component === ButtonBase/* default */.Z ? (0,esm_extends/* default */.Z)({
    component: ComponentProp || 'div',
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: true
  }) : {};
  var deleteIcon = null;

  if (onDelete) {
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m/* default */.Z)(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Cancel, {
      className: (0,clsx_m/* default */.Z)(classes.deleteIcon),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m/* default */.Z)(classes.avatar, avatarProp.props.className)
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m/* default */.Z)(classes.icon, iconProp.props.className)
    });
  }

  if (false) {}

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ChipRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    disabled: clickable && disabled ? true : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    ownerState: ownerState
  }, moreProps, other, {
    children: [avatar || icon, /*#__PURE__*/(0,jsx_runtime.jsx)(ChipLabel, {
      className: (0,clsx_m/* default */.Z)(classes.label),
      ownerState: ownerState,
      children: label
    }), deleteIcon]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Chip_Chip = (Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 13 modules
var Select = __webpack_require__(99385);
// EXTERNAL MODULE: ./node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 2 modules
var OutlinedInput = __webpack_require__(37843);
;// CONCATENATED MODULE: ./src/ui-components/chipsPanels.js
function ChipsPanels(props){var dataManager=new DataManager/* default */.Z();var _useState=(0,react.useState)({}),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),display=_useState2[0],setDisplay=_useState2[1];//const [chipsData, setChipsData]
var _useState3=(0,react.useState)(),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),chipsData=_useState4[0],setChipsData=_useState4[1];var _useReducer=(0,react.useReducer)(function(x){return x+1;},0),_useReducer2=(0,slicedToArray/* default */.Z)(_useReducer,2),forceUpdate=_useReducer2[1];//hack
(0,react.useEffect)(function(){console.log(props.mapMultiKey);},[chipsData]);var handleDelete=function handleDelete(id,childId,deleteAllChildren){var commandName="delete";var keepGoing=executeCommand(commandName,id,childId,deleteAllChildren);if(keepGoing){props.onChange(id,childId,deleteAllChildren);}forceUpdate();// console.log(props.mapMultiKey);
};var handleClick=function handleClick(id,childId){var commandName="select";var hash=id;if(childId){id=childId;}if(!display[id]){for(var key in display){display[key]=false;}display[id]=true;}else{commandName="unselect";display[id]=false;}setDisplay((0,objectSpread2/* default */.Z)({},display));executeCommand(commandName,hash,childId);props.onSelected(hash,childId);};var executeCommand=function executeCommand(commandName,id,childId,deleteAllChildren){var keepGoing=true;var groupId=null;var layerName="PANELS";if(deleteAllChildren){var response=confirm("ברצונך למחוק את כל השורות?");if(response==true){var data=props.mapMultiKey.get(id);data.parameters.forEach(function(element){groupId=element.Children;if(!groupId){groupId=data.groupId;}dataManager.executeInSketcher(commandName,groupId,layerName);});}else{return false;}}else{if(childId){groupId=childId;}else{var _data=props.mapMultiKey.get(id);groupId=_data.groupId;}}dataManager.executeInSketcher(commandName,groupId,layerName);return keepGoing;};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.mapMultiKey&&(0,toConsumableArray/* default */.Z)(props.mapMultiKey).map(function(entry,indexParent){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.Z,{sx:{m:1,width:300},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.Z,{shrink:true,id:entry[1].label+indexParent,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Chip_Chip,{label:entry[1].label,onDelete:function onDelete(){return handleDelete(entry[0],false,true);}})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Select/* default */.Z,{id:"",labelId:entry[1].label+indexParent,value:chipsData,input:/*#__PURE__*/(0,jsx_runtime.jsx)(OutlinedInput/* default */.Z,{label:"Tag"}),children:[(entry[1].visible=='true'||!entry[1].visible)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Chip_Chip,{variant:display[entry[0]]===true?"":"outlined",label:entry[1].label,onClick:function onClick(){return handleClick(entry[0],false);},onDelete:function onDelete(){return handleDelete(entry[0],false);}}),(0,toConsumableArray/* default */.Z)(entry[1].parameters).map(function(row,childIndex){return(row===null||row===void 0?void 0:row.Children)&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Chip_Chip,{variant:display[row.Children]===true?"":"outlined",label:(row===null||row===void 0?void 0:row.label)+(childIndex+1),onClick:function onClick(){return handleClick(entry[0],row.Children);},onDelete:function onDelete(){return handleDelete(entry[0],row.Children);}})});})]})," "]})});})});}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
;// CONCATENATED MODULE: ./src/components/steps/Label/LabelsManager.js
var LabelsManager=/*#__PURE__*/function(){function LabelsManager(){(0,classCallCheck/* default */.Z)(this,LabelsManager);}(0,createClass/* default */.Z)(LabelsManager,[{key:"getNextAlphabetLabel",value:function(_getNextAlphabetLabel){function getNextAlphabetLabel(_x){return _getNextAlphabetLabel.apply(this,arguments);}getNextAlphabetLabel.toString=function(){return _getNextAlphabetLabel.toString();};return getNextAlphabetLabel;}(// getNextAlphabetLabel(letter) {
//     let result = "";
//     if (!letter) {
//         result = "A";
//     } else {
//         result = letter.substring(0, letter.length - 1) + String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
//     }
//     return result;
// }
function(key){if(!key){return"A";}if(key==='Z'||key==='z'){return String.fromCharCode(key.charCodeAt()-25)+String.fromCharCode(key.charCodeAt()-25);// AA or aa
}else{var lastChar=key.slice(-1);var sub=key.slice(0,-1);if(lastChar==='Z'||lastChar==='z'){// If a string of length > 1 ends in Z/z,
// increment the string (excluding the last Z/z) recursively,
// and append A/a (depending on casing) to it
return getNextAlphabetLabel(sub)+String.fromCharCode(lastChar.charCodeAt()-25);}else{// (take till last char) append with (increment last char)
return sub+String.fromCharCode(lastChar.charCodeAt()+1);}}})},{key:"getLabelsPosition",value:function getLabelsPosition(store){var labelPosition=null;var labelPositionHorizontal=null;if(store.panelsType==constants/* PANEL_TYPES.HORIZANTAL_1 */.jQ.HORIZANTAL_1||store.panelsType==constants/* PANEL_TYPES.VERTICAL_1_HORIZANTAL_1 */.jQ.VERTICAL_1_HORIZANTAL_1||store.panelsType==constants/* PANEL_TYPES.VERTICAL_1_HORIZANTAL_1_VERTICAL_1 */.jQ.VERTICAL_1_HORIZANTAL_1_VERTICAL_1){labelPositionHorizontal=Math.ceil(store.panelsCount.horizontal/2);}else{labelPosition=Math.ceil(store.panelsCount.vertical/2);}if(store.panelsCount.vertical==1){labelPosition=0;}else if(store.panelsCount.horizontal==1){labelPositionHorizontal=0;}// if (store.panelsType == 3) {
//   labelPosition = Math.ceil(store.panelsCount.vertical / 2);
// }
return{labelPosition:labelPosition,labelPositionHorizontal:labelPositionHorizontal};}}]);return LabelsManager;}();
// EXTERNAL MODULE: ./src/components/steps/eventsManager.js
var eventsManager = __webpack_require__(18415);
// EXTERNAL MODULE: ./src/ui-components/direction.js
var direction = __webpack_require__(90553);
// EXTERNAL MODULE: ./src/components/steps/step6/copyPanel.js
var copyPanel = __webpack_require__(36666);
// EXTERNAL MODULE: ./src/components/steps/step6/helper.js
var step6_helper = __webpack_require__(97782);
;// CONCATENATED MODULE: ./src/components/steps/step6/panelsComponent.jsx
//import ChipsPanelsMultiple from '../../../ui-components/chipsPanelsMultiple';
var PanelsComponent=function PanelsComponent(props){var stepContext=(0,react.useContext)(StepsContext["default"]);var panelsCountConfiguration={inputProps:{min:1,type:"number"}};var numberConfiguration={inputProps:{type:"number"}};var dataManager=new DataManager/* default */.Z();var labelManager=new LabelsManager();var httpService=new httpRequest/* default */.Z();var helper=new step6_helper["default"]();var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),displayErrors=_useState2[0],setDisplayErrors=_useState2[1];var _React$useState=react.useState(false),_React$useState2=(0,slicedToArray/* default */.Z)(_React$useState,2),openMessage=_React$useState2[0],setOpenMessage=_React$useState2[1];var _React$useState3=react.useState("שגיאה!"),_React$useState4=(0,slicedToArray/* default */.Z)(_React$useState3,2),errorMessage=_React$useState4[0],setErrorMessage=_React$useState4[1];var _useState3=(0,react.useState)(0),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),totalRequests=_useState4[0],setTotalRequests=_useState4[1];var _useState5=(0,react.useState)(true),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),dataLoaded=_useState6[0],setDataLoaded=_useState6[1];var _useState7=(0,react.useState)(),_useState8=(0,slicedToArray/* default */.Z)(_useState7,2),chipsSelected=_useState8[0],setChipsSelected=_useState8[1];var _useState9=(0,react.useState)([]),_useState10=(0,slicedToArray/* default */.Z)(_useState9,2),chipsData=_useState10[0],setChipsData=_useState10[1];var panelsHorizontalAndVerticalArray=[constants/* PANEL_TYPES.HORIZANTAL_1_VERTICAL_1 */.jQ.HORIZANTAL_1_VERTICAL_1,constants/* PANEL_TYPES.VERTICAL_1_HORIZANTAL_1 */.jQ.VERTICAL_1_HORIZANTAL_1,constants/* PANEL_TYPES.VERTICAL_2_HORIZANTAL_1 */.jQ.VERTICAL_2_HORIZANTAL_1,constants/* PANEL_TYPES.VERTICAL_1_HORIZANTAL_1_VERTICAL_1 */.jQ.VERTICAL_1_HORIZANTAL_1_VERTICAL_1,constants/* PANEL_TYPES.HORIZANTAL_1_VERTICAL_2 */.jQ.HORIZANTAL_1_VERTICAL_2,constants/* PANEL_TYPES.HORIZANTAL_1 */.jQ.HORIZANTAL_1];var panel={};var initialPanel=function initialPanel(panelsSize){if(panelsSize){panel=new Panel/* default */.Z(panelsSize);}};var updateState=function updateState(value,type,globalVariable){props.updateState(value,type,globalVariable);};var deepCopyMapMultiKey=function deepCopyMapMultiKey(data){if(data.panelsMap){var mapMultiKeyFromServer=(0,esm5/* plainToInstance */.yE)(ManyKeysMap/* default */.Z,data.panelsMap);if(!props.state.mapMultiKey){props.state.mapMultiKey=new ManyKeysMap/* default */.Z();}if(!mapMultiKeyFromServer){props.state.currentLabel="";}var counter=0;var _iterator=(0,createForOfIteratorHelper/* default */.Z)(mapMultiKeyFromServer),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _step$value=(0,slicedToArray/* default */.Z)(_step.value,2),key=_step$value[0],value=_step$value[1];props.state.mapMultiKey.set(key,value);counter++;}}catch(err){_iterator.e(err);}finally{_iterator.f();}initChipsArray(counter);//  initChipsArray();
}};var initChipsArray=function initChipsArray(counter){var emptyArray=[];var emptyChildArray=[];for(var index=0;index<counter;index++){emptyChildArray=[];emptyArray.push(emptyChildArray);}if(emptyArray.length>0){setChipsData(emptyArray);}else{emptyArray.push(emptyChildArray);setChipsData(emptyArray);}};(0,react.useEffect)(function(){initialPanel();(0,eventsManager/* addCustomEvents */.q)(sketcherPickedEvent);return function(){(0,eventsManager/* removeCustomEvents */.M)(sketcherPickedEvent);};},[props.state.zeroPoint,props.state]);(0,react.useMemo)(function(){loadStepData();dataManager.unSelectAll();},[]);function loadStepData(){deepCopyMapMultiKey(props.state);updateState(props.state.modalTypeText,"modalTypeText");}var updateZeroPointTriangle=function updateZeroPointTriangle(zeroPoinCalculate,hashCopy){var hash=hashCopy?hashCopy:dataManager.getHash(props.state);var panelsMap=props.state.mapMultiKey.get(hash);if(!panelsMap){console.log("Error while update zero point");};var element=(0,objectSpread2/* default */.Z)({},panelsMap.parameters[panelsMap.parameters.length-1]);element.InitialPositionX=Math.ceil(zeroPoinCalculate.x);element.InitialPositionY=Math.ceil(zeroPoinCalculate.y);panelsMap.parameters[panelsMap.parameters.length-1]=element;};var setPanelsSize=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(){var data,parameters,result,panelSizeResult;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:data=stepContext.stepsData.all;parameters=dataManager.getTriangleParameters(data,props.state,props.roofId);_context.next=4;return httpService.Get("Algorithms/SizePanel",parameters);case 4:result=_context.sent;panelSizeResult=new Measurement/* default */.Z();if(result.panelwidthLaynig&&result.panelLengthLaynig&&result.panelwidthStand&&result.panelLengthStand){panelSizeResult.horizontal={width:result.panelwidthLaynig,height:result.panelLengthLaynig};panelSizeResult.vertical={width:result.panelwidthStand,height:result.panelLengthStand};}return _context.abrupt("return",panelSizeResult);case 8:case"end":return _context.stop();}}},_callee);}));return function setPanelsSize(){return _ref.apply(this,arguments);};}();var createLine=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(event,hash,panelModelCopy,groupIdCopy){var keepGoing,label,panelModel,panelsSize,_setPanelsDataStructu,calculatedLabel,calculatedGroupId,_labelManager$getLabe,labelPosition,labelPositionHorizontal,zeroPoinCalculate,points,j,_points,labelsArr,i,_points2,_labelsArr,layer;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:event.preventDefault();setDataLoaded(false);keepGoing=helper.validateRequiredFields(props.state.modalTypeText,props.state.heightParallel,props.state.triangle);setDisplayErrors(!keepGoing);if(keepGoing){_context2.next=6;break;}return _context2.abrupt("return");case 6:label="";//updateState(groupIdDictionary, "groupIdDictionary");
panelModel=helper.initPanelModel(panelModelCopy,props);_context2.next=10;return setPanelsSize();case 10:panelsSize=_context2.sent;initialPanel(panelsSize);_setPanelsDataStructu=setPanelsDataStructure(hash,groupIdCopy),calculatedLabel=_setPanelsDataStructu.calculatedLabel,calculatedGroupId=_setPanelsDataStructu.calculatedGroupId;_labelManager$getLabe=labelManager.getLabelsPosition(props.state),labelPosition=_labelManager$getLabe.labelPosition,labelPositionHorizontal=_labelManager$getLabe.labelPositionHorizontal;zeroPoinCalculate={x:0,y:0};points=[];if(groupIdCopy){calculatedGroupId=groupIdCopy;}for(j=0;j<panelModel.panelCount.horizontal;j++){_points=panel.drawHorizontal(j,panelModel.panelType,panelModel.zeroPoint,panelModel.distanceFromZeroPoint);points=_points.points;if(zeroPoinCalculate.x==0){zeroPoinCalculate=_points.zeroPointCalculate;}if(labelPositionHorizontal==j){label=calculatedLabel;}else{label="";}labelsArr=[];labelsArr.push(label);dataManager.drawInSketcher(points,"rect",calculatedGroupId,"PANELS",labelsArr);}for(i=0;i<panelModel.panelCount.vertical;i++){_points2=panel.drawVertical(i,panelModel.panelType,panelModel.zeroPoint,panelModel.distanceFromZeroPoint);points=_points2.points;if(zeroPoinCalculate.x==0){zeroPoinCalculate=_points2.zeroPointCalculate;}if(labelPosition==i||props.state.panelsCount.vertical==1){label=calculatedLabel;}else{label="";}_labelsArr=[];_labelsArr.push(label);dataManager.drawInSketcher(points,"rect",calculatedGroupId,"PANELS",_labelsArr);}dataManager.executeInSketcher("refresh",null,null,null);layer="PANELS";dataManager.executeInSketcher("select",calculatedGroupId,layer,null);dataManager.executeInSketcher("lockAll",calculatedGroupId,layer,null);updateZeroPointTriangle(zeroPoinCalculate,hash);setDataLoaded(true);setDisplayErrors(false);case 26:case"end":return _context2.stop();}}},_callee2);}));return function createLine(_x,_x2,_x3,_x4){return _ref2.apply(this,arguments);};}();var setPanelsDataStructure=function setPanelsDataStructure(hashCopy,groupIdCopy){var hash=hashCopy?hashCopy:dataManager.getHash(props.state);var groupId=props.groupId;var calculatedLabel="";var data=stepContext.stepsData.all;var parameters=hashCopy?{}:dataManager.getTriangleParameters(data,props.state,props.roofId);var calculatedGroupId=groupId;if(props.state.mapMultiKey.has(hash)){var dataStructure=props.state.mapMultiKey.get(hash);calculatedLabel=dataStructure.label;parameters=(0,objectSpread2/* default */.Z)({},dataStructure.parameters[dataStructure.rowsCount]);dataStructure.rowsCount++;dataStructure["visible"]="true";parameters["label"]=calculatedLabel;//if (groupIdCopy) {
if(!parameters["Children"]){parameters["Children"]=null;}if(groupIdCopy){parameters["Children"]=groupIdCopy;}else{var groupIdRandom=Math.ceil(Math.random()*1000000000000);calculatedGroupId=groupIdRandom;parameters["Children"]=groupIdRandom;}//}else{
// let groupIdRandom = Math.ceil(Math.random() * 1000000000000);
// if (!parameters["Children"]) {
//   parameters["Children"] = null;
// }
// parameters["Children"] = groupIdRandom;
// calculatedGroupId=groupIdRandom;//updateGroupId(groupIdRandom);
//}
dataStructure.parameters[dataStructure.rowsCount]=parameters;props.state.mapMultiKey.set(hash,dataStructure);setTotalRequests(dataStructure.rowsCount);//lock the roof
}else{calculatedLabel=labelManager.getNextAlphabetLabel(props.state.currentLabel);var rowsCount=0;calculatedGroupId++;updateGroupId(calculatedGroupId);var _dataStructure={label:calculatedLabel,rowsCount:rowsCount,parameters:[],groupId:calculatedGroupId};parameters["label"]=calculatedLabel;_dataStructure.parameters[rowsCount]=parameters;updateState(calculatedLabel,"currentLabel");props.state.mapMultiKey.set(hash,_dataStructure);var current=(0,toConsumableArray/* default */.Z)(chipsData);current.push(new Array());setChipsData((0,toConsumableArray/* default */.Z)(current));}return{calculatedLabel:calculatedLabel,calculatedGroupId:calculatedGroupId};};var sketcherPickedEvent=function sketcherPickedEvent(_ref3){var detail=_ref3.detail;if((detail===null||detail===void 0?void 0:detail.code)==0||(detail===null||detail===void 0?void 0:detail.code)==2){updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.zeroPoint),detail.point),"zeroPoint");setOpenMessage(false);setErrorMessage("");}if((detail===null||detail===void 0?void 0:detail.code)==3){setOpenMessage(true);setErrorMessage(detail===null||detail===void 0?void 0:detail.text);}console.log(detail,"I'm listening on solar pro to sketcher");};var panelsTypeOnChange=function panelsTypeOnChange(data,type){updateState(data,"panelsType");setDisplayErrors(false);if(data==constants/* PANEL_TYPES.HORIZANTAL_1 */.jQ.HORIZANTAL_1){updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.panelsCount),{},{vertical:0}),"panelsCount");}if(!panelsHorizontalAndVerticalArray.includes(data)){updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.panelsCount),{},{horizontal:0}),"panelsCount");}};var chipsUpdated=function chipsUpdated(id,child,deleteAll){if(!props.state.mapMultiKey.has(id)){return;}var value=props.state.mapMultiKey.get(id);var arr=[];if(child){for(var index=0;index<value.parameters.length;index++){var element=value.parameters[index];if((element===null||element===void 0?void 0:element.Children)!=child){arr.push(element);}}props.state.mapMultiKey.get(id).parameters=arr;if(arr.length==0){removeParent(id);}}else{if(value.parameters.length==1||deleteAll){removeParent(id);}else{for(var _index=1;_index<value.parameters.length;_index++){//skip on the parent element
var _element=value.parameters[_index];arr.push(_element);}props.state.mapMultiKey.get(id).parameters=arr;props.state.mapMultiKey.get(id)["visible"]="false";}}};var removeParent=function removeParent(id){props.state.mapMultiKey.delete(id);};var refillParametersOfMap=function refillParametersOfMap(value,id,index){var arr=[];for(var _index2=1;_index2<value.parameters.length;_index2++){var element=value.parameters[_index2];arr.push(element);}props.state.mapMultiKey.get(id).parameters=arr;};var onChipsSelected=function onChipsSelected(id,child){setChipsSelected({id:id,child:child});};var updateGroupId=function updateGroupId(value){//props.updateState(value,"groupId",true)
props.updateGroupId(value);};var onChangeWithValidation=function onChangeWithValidation(value,type){switch(type){case"frontLegHeight":if(value<0||value==0||value>2000){return false;}break;case"angle":if(value<0||value>30){return false;}break;}return true;};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tabs */.mQ,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* TabList */.td,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Tab */.OK,{children:"\u05D9\u05E6\u05D9\u05E8\u05D4"}),/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Tab */.OK,{children:"\u05E2\u05E8\u05D9\u05DB\u05D4"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabPanel */.x4,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{className:"text-center mb-5 pb-5",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"py-3 d-flex flex-row-start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(ui_components_select/* default */.Z,{onChange:function onChange(data,type){return panelsTypeOnChange(data,type);},defaultData:props.state.panelsType,name:"panelsType",dataSource:"LineTypes",lKey:"Id",value:"Value",label:"\u05E1\u05D5\u05D2 \u05E9\u05D5\u05E8\u05D4"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[props.state.panelsType!=constants/* PANEL_TYPES.HORIZANTAL_1 */.jQ.HORIZANTAL_1&&/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{error:props.state.panelsCount.vertical==0,id:"panels-count",label:"\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E4\u05E0\u05DC\u05D9\u05DD \u05D1\u05E2\u05DE\u05D9\u05D3\u05D4",variant:"outlined",InputProps:panelsCountConfiguration,value:props.state.panelsCount.vertical,onChange:function onChange(e){return updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.panelsCount),{},{vertical:e.target.value}),"panelsCount");},sx:{width:150}}),panelsHorizontalAndVerticalArray.includes(props.state.panelsType)&&/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{error:props.state.panelsCount.horizontal==0,id:"panels-count",label:"\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E4\u05E0\u05DC\u05D9\u05DD \u05D1\u05E9\u05DB\u05D9\u05D1\u05D4",variant:"outlined",InputProps:panelsCountConfiguration,value:props.state.panelsCount.horizontal,onChange:function onChange(e){return updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.panelsCount),{},{horizontal:e.target.value}),"panelsCount");},sx:{width:150}}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"py-3 d-flex flex-row-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"panels-count",label:"\u05DE\u05E8\u05D7\u05E7 \u05D0\u05D5\u05E4\u05E7\u05D9 \u05DE\u05E0\u05E7\u05D5\u05D3\u05EA \u05D40",variant:"outlined",value:props.state.distanceFromZeroPoint.dx,onChange:function onChange(e){return updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.distanceFromZeroPoint),{},{dx:e.target.value}),"distanceFromZeroPoint");},sx:{width:150},InputProps:numberConfiguration}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"panels-count",label:"\u05DE\u05E8\u05D7\u05E7 \u05D0\u05E0\u05DB\u05D9 \u05DE\u05E0\u05E7\u05D5\u05D3\u05EA \u05D40",variant:"outlined",value:props.state.distanceFromZeroPoint.dy,onChange:function onChange(e){return updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.distanceFromZeroPoint),{},{dy:e.target.value}),"distanceFromZeroPoint");},sx:{width:150},InputProps:numberConfiguration})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"py-3 d-flex flex-row-start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(direction/* Direction */.N,{id:"draw-panels-direction",up:true,down:true,value:props.state.zeroPoint.direction,setVDirections:function setVDirections(direction){return updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.zeroPoint),{},{direction:direction}),"zeroPoint");}})})]}),['RX','RCA','WX','SX','SXP','KZX'].includes(props.state.modalTypeText)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{className:"text-right",children:"\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05E9\u05D5\u05DC\u05E9:"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"py-3 d-flex flex-row-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{value:props.state.triangle.frontLegHeight,onChange:function onChange(e){onChangeWithValidation(e.currentTarget.value,"frontLegHeight")&&updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.triangle),{},{frontLegHeight:e.currentTarget.value}),"triangle");},error:displayErrors&&props.state.triangle.frontLegHeight==0,id:"front-leg-height",label:"\u05D2\u05D5\u05D1\u05D4 \u05E8\u05D2\u05DC \u05E7\u05D3\u05DE\u05D9\u05EA",type:"number",variant:"outlined",sx:{width:150}}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"triangle-angle",label:"\u05D6\u05D5\u05D9\u05EA \u05DE\u05E9\u05D5\u05DC\u05E9",variant:"outlined",className:"mx-4",type:"number",value:props.state.triangle.angle,sx:{width:150},error:displayErrors&&props.state.triangle.angle==0,onChange:function onChange(e){return onChangeWithValidation(e.currentTarget.value,"angle")&&updateState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props.state.triangle),{},{angle:e.currentTarget.value}),"triangle");}})]})]}),['W0','S0P','S0','KZ0'].includes(props.state.modalTypeText)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{className:"text-right",children:"\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05E7\u05D1\u05D9\u05DC\u05D4"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"py-3 d-flex flex-row-start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z,{id:"height-parallel",label:"\u05DE\u05D9\u05D3\u05EA \u05E2\u05DE\u05D5\u05D3\u05D9 \u05D4\u05D2\u05D1\u05D4\u05D4",variant:"outlined",onChange:function onChange(e){return updateState(e.target.value,"heightParallel");},error:displayErrors&&props.state.heightParallel==0,value:props.state.heightParallel,type:"number"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"\u05D1\u05D7\u05E8 \u05D0\u05EA \u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05D0\u05E4\u05E1 - \u05E9\u05EA\u05D9 \u05E6\u05DC\u05E2\u05D5\u05EA"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:createLine,children:" \u05E6\u05D5\u05E8 \u05E9\u05D5\u05E8\u05D4"})]})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* TabPanel */.x4,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{className:"text-center mb-5 pb-5",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"\u05E4\u05E0\u05DC\u05D9\u05DD \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5:"}),dataLoaded&&/*#__PURE__*/(0,jsx_runtime.jsx)(ChipsPanels,{chipsDataStructure:chipsData,onSelected:function onSelected(data,child){onChipsSelected(data,child);},onChange:function onChange(id,child,deleteAll){return chipsUpdated(id,child,deleteAll);},mapMultiKey:props.state.mapMultiKey,groupIdDictionary:props.state.groupIdDictionary})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(copyPanel["default"],{mapMultiKey:props.state.mapMultiKey,groupIdCopy:props.state.groupIdDictionary,chipsSelected:chipsSelected,zeroPoint:props.state.zeroPoint,onCreateLine:function onCreateLine(e,chipsSelected,panelModelCopy,groupIdReal){return createLine(e,chipsSelected,panelModelCopy,groupIdReal);}})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Snackbar/* default */.Z,{open:openMessage,autoHideDuration:6000,message:"",onClose:function onClose(){return setOpenMessage(false);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Alert/* default */.Z,{severity:"error",children:errorMessage})})]});};/* harmony default export */ var panelsComponent = (PanelsComponent);
// EXTERNAL MODULE: ./src/components/steps/step6/PanelsModel.js
var PanelsModel = __webpack_require__(83852);
;// CONCATENATED MODULE: ./src/components/steps/step6/Step6.js
var step6=function step6(props){var stepContext=(0,react.useContext)(StepsContext["default"]);var dataManager=new DataManager/* default */.Z();var sketcherManager=new steps_sketcherManager/* default */.Z();var _useParams=(0,react_router/* useParams */.UO)(),projectId=_useParams.projectId;var _useState=(0,react.useState)(1),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),groupId=_useState2[0],setGroupId=_useState2[1];var _useState3=(0,react.useState)(),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),plannerId=_useState4[0],setPlannerId=_useState4[1];var _useReducer=(0,react.useReducer)(step6_store.reducer,step6_store.initialState),_useReducer2=(0,slicedToArray/* default */.Z)(_useReducer,2),store=_useReducer2[0],dispatch=_useReducer2[1];var _useState5=(0,react.useState)([]),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),state=_useState6[0],setState=_useState6[1];(0,react.useEffect)(function(){},[]);(0,react.useMemo)(function(){props.displaySketcher(false);loadStepData();dataManager.unSelectAll();},[]);function loadStepData(){var data=stepContext.stepsData.all;loadPanels(data);actions.setModalTypeText(dispatch,data.modalTypeText);if(data.groupId){setGroupId(data.groupId);}setPlannerId(data.UserId);}function loadPanels(data){if(data.panelsDataArr&&data.panelsDataArr.length>0){setState(data.panelsDataArr);}else{var emptyState=(0,toConsumableArray/* default */.Z)(state);if(data.roofTypeDataArr){for(var index=0;index<data.roofTypeDataArr.length;index++){var element=data.roofTypeDataArr[index];var panelModel=new PanelsModel["default"]();panelModel.modalTypeText=element.modalTypeText;emptyState.push(panelModel);}}setState(emptyState);}};var _updateState=function updateState(value,type,id,globalVariable){var tempState=(0,toConsumableArray/* default */.Z)(state);if(globalVariable){tempState[type]=value;}else{tempState[id][type]=value;}setState(tempState);};var handleSubmit=function handleSubmit(event,noNavigation){var parametersSketcher={UserId:plannerId,ProjectId:projectId,panelsDataArr:[]};sketcherManager.saveSkecherDataInServer(parametersSketcher);var parameters=(0,objectSpread2/* default */.Z)({},parametersSketcher);parameters["groupId"]=groupId;state.map(function(panel,index){panel.panelsMap=(0,esm5/* instanceToPlain */.zb)(panel.mapMultiKey);delete panel.mapMultiKey;parameters.panelsDataArr.push((0,objectSpread2/* default */.Z)({},panel));});dataManager.executeInSketcher("refresh",null,null,null);props.OnSubmit(event,parameters,noNavigation);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"py-5 mt-5",children:"\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05E6\u05D1\u05D4 - \u05E4\u05E0\u05DC\u05D9\u05DD"}),/*#__PURE__*/(0,jsx_runtime.jsx)("form",{onSubmit:handleSubmit,id:"step6",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tabs */.mQ,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabList */.td,{children:state&&state.map(function(fetot,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* Tab */.OK,{children:[" \u05D2\u05D2-",index]});})}),state&&state.map(function(panels,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* TabPanel */.x4,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(panelsComponent,{groupId:groupId,updateGroupId:function updateGroupId(value){return setGroupId(value);},roofId:index,updateState:function updateState(value,type,globalVariable){return _updateState(value,type,index,globalVariable);},state:panels,id:index,modalTypeText:store.modalTypeText})});})]})})]});};/* harmony default export */ var Step6 = (step6);

/***/ }),

/***/ 36666:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CopyPanel; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1413);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70885);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16783);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31616);
/* harmony import */ var _ui_components_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90553);
/* harmony import */ var _PanelsModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83852);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46417);
function CopyPanel(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),_useState2=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState,2),enableCopyButton=_useState2[0],setEnableCopyButton=_useState2[1];var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),_useState4=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState3,2),copyDistance=_useState4[0],setCopyDistance=_useState4[1];var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),_useState6=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState5,2),copyDirection=_useState6[0],setCopyDirection=_useState6[1];var _useState7=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),_useState8=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState7,2),copyCount=_useState8[0],setCopyCount=_useState8[1];var numberConfiguration={inputProps:{type:"number"}};var copyHandle=function copyHandle(event){for(var index=0;index<copyCount;index++){var _props$chipsSelected;if(!((_props$chipsSelected=props.chipsSelected)!==null&&_props$chipsSelected!==void 0&&_props$chipsSelected.id)){event.preventDefault();alert("לא נבחר אובייקט להעתקה!");return;}var selectedLabel=props.mapMultiKey.get(props.chipsSelected.id);if(!selectedLabel){return;}var data=selectedLabel.parameters[0];if(selectedLabel.parameters.length>0){var lChild=selectedLabel.parameters.filter(function(x){if(x!==null&&x!==void 0&&x.Children){return(x===null||x===void 0?void 0:x.Children)===props.chipsSelected.child;}});if(lChild.length>0){data=lChild[0];}}var newZeroPoint={x:data.InitialPositionX,y:data.InitialPositionY};var groupIdRandom=Math.ceil(Math.random()*10000000000);var sum=0;sum+=Number(copyDistance);switch(copyDirection){case"right":newZeroPoint.x=newZeroPoint.x+sum*(index+1);break;case"up":newZeroPoint.y=newZeroPoint.y+sum*(index+1);break;default:break;}var calculatedZeroPoint=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({},props.zeroPoint),{},{x:newZeroPoint.x,y:newZeroPoint.y});var distanceFromZeroPoint={dx:0,dy:0};var panelModel=new _PanelsModel__WEBPACK_IMPORTED_MODULE_2__["default"]();panelModel.zeroPoint=calculatedZeroPoint;panelModel.distanceFromZeroPoint=distanceFromZeroPoint;panelModel.panelType=data.TypeOfTriangle;panelModel.panelsCount={horizontal:data.LyingPanels,vertical:data.StandingPanels};props.onCreateLine(event,props.chipsSelected.id,panelModel,groupIdRandom);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{className:"text-center mb-5 pb-5",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:" py-3 d-flex flex-row-start",children:"\u05D4\u05E2\u05EA\u05E7\u05EA \u05E4\u05E0\u05DC\u05D9\u05DD:"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{id:"copy-distance",label:"\u05DE\u05E8\u05D7\u05E7 \u05DE\u05E0\u05E7\u05D5\u05D3\u05EA \u05D40",variant:"outlined",value:copyDistance,onChange:function onChange(e){return setCopyDistance(e.currentTarget.value);},sx:{width:150},InputProps:numberConfiguration}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{className:"text-center mb-5 pb-5",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{id:"panels-copy-count",label:"\u05DB\u05DE\u05D5\u05EA",variant:"outlined",value:copyCount,onChange:function onChange(e){return setCopyCount(e.currentTarget.value);},sx:{width:150},InputProps:numberConfiguration}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_components_direction__WEBPACK_IMPORTED_MODULE_1__/* .Direction */ .N,{id:"copy-direction",value:copyDirection,up:true,right:true,setVDirections:function setVDirections(direction){setCopyDirection(direction);setEnableCopyButton(false);}})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{disabled:enableCopyButton,onClick:copyHandle,children:" \u05D4\u05E2\u05EA\u05E7"})]});}

/***/ }),

/***/ 97782:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Helper; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15671);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43144);
/* harmony import */ var _PanelsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83852);
var Helper=/*#__PURE__*/function(){function Helper(){(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this,Helper);}(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Helper,[{key:"validateRequiredFields",value:function validateRequiredFields(modalTypeText,heightParallel,triangle){var result=true;if(['W0','S0P','S0','KZ0'].includes(modalTypeText)&&heightParallel==0){result=false;}if(['RX','RCA','WX','SX','SXP','KZX'].includes(modalTypeText)&&(triangle.frontLegHeight==0||triangle.angle==0)){result=false;}return result;}},{key:"initPanelModel",value:function initPanelModel(panelModelCopy,props){var panelModel=new _PanelsModel__WEBPACK_IMPORTED_MODULE_0__["default"]();panelModel.zeroPoint=panelModelCopy?panelModelCopy.zeroPoint:props.state.zeroPoint;panelModel.distanceFromZeroPoint=panelModelCopy?panelModelCopy.distanceFromZeroPoint:props.state.distanceFromZeroPoint;panelModel.panelType=panelModelCopy?panelModelCopy.panelType:props.state.panelsType;panelModel.panelCount=panelModelCopy?panelModelCopy.panelsCount:props.state.panelsCount;return panelModel;}},{key:"drawPointsOnSketcher",value:function drawPointsOnSketcher(panelCount,type,labelPositionHorizontal,labelPosition,calculatedLabel,panelModel,calculatedGroupId){//not working good with calculated zero point
var label="";var points=[];var zeroPointCalculate={x:0,y:0};for(var j=0;j<panelCount;j++){var _points=[];switch(type){case"Horizontal":_points=panel.drawHorizontal(j,panelModel.panelType,panelModel.zeroPoint,panelModel.distanceFromZeroPoint);break;case"Vertical":_points=panel.drawVertical(j,panelModel.panelType,panelModel.zeroPoint,panelModel.distanceFromZeroPoint);break;}points=_points.points;if(zeroPoinCalculate.x==0){zeroPointCalculate=_points.zeroPointCalculate;}if(labelPositionHorizontal==j||type=="Vertical"&&labelPosition==j||panelCount==1){label=calculatedLabel;}else{label="";}var labelsArr=[];labelsArr.push(label);var layer="PANELS";dataManager.drawInSketcher(points,"rect",calculatedGroupId,layer,labelsArr);// dataManager.executeInSketcher("lockAll", calculatedGroupId, layer, null);
}return zeroPointCalculate;}}]);return Helper;}();//if (groupIdCopy) {
// zeroPoinCalculate = drawPointsOnSketcher(panelModel.panelCount.horizontal, "Horizontal", labelPositionHorizontal, labelPosition, calculatedLabel, panelModel, groupIdCopyReal);
//  localZeroPointCalculate = drawPointsOnSketcher(panelModel.panelCount.vertical, "Vertical", labelPositionHorizontal, labelPosition, calculatedLabel, panelModel, groupIdCopyReal);
// } else {
//  zeroPoinCalculate = drawPointsOnSketcher(panelModel.panelCount.horizontal, "Horizontal", labelPositionHorizontal, labelPosition, calculatedLabel, panelModel, calculatedGroupId);
//   localZeroPointCalculate = drawPointsOnSketcher(panelModel.panelCount.vertical, "Vertical", labelPositionHorizontal, labelPosition, calculatedLabel, panelModel, calculatedGroupId);
// }
// if (zeroPoinCalculate.x == 0) {
//   zeroPoinCalculate = localZeroPointCalculate;
// }


/***/ }),

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

/***/ }),

/***/ 90553:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ Direction; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70885);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54299);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83929);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74268);
/* harmony import */ var _mui_icons_material_North__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63115);
/* harmony import */ var _mui_icons_material_South__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98700);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14647);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14000);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46417);
var Direction=function Direction(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('right'),_useState2=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_useState,2),directions=_useState2[0],setVDirections=_useState2[1];var handleChange=function handleChange(event){props.setVDirections(event.target.value);event.stopPropagation();};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"arrow-wrapper",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:props.id,"aria-labelledby":"directions-group",name:"directions-group-button",value:props.value||'',onChange:handleChange,children:[props.left&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:"left-arrow arrow",value:"left",label:"",control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{}),checkedIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{})})},'left'),props.up&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:"up-arrow arrow",value:"up",label:"",control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_North__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{}),checkedIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_North__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{})})},'up'),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"rectangle-arrow"}),props.down&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:"down-arrow arrow",value:"down",label:"",control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_South__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{}),checkedIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_South__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{})})},'down'),props.right&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:"right-arrow arrow",value:"right",label:"",control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{}),checkedIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{})})},'right')]})});};

/***/ }),

/***/ 14647:
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
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
}), 'ArrowBack');

exports.Z = _default;

/***/ }),

/***/ 14000:
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
  d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}), 'ArrowForward');

exports.Z = _default;

/***/ }),

/***/ 63115:
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
  d: "m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"
}), 'North');

exports.Z = _default;

/***/ }),

/***/ 98700:
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
  d: "m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"
}), 'South');

exports.Z = _default;

/***/ })

}]);