"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[1204],{

/***/ 51204:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Snackbar_Snackbar; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(83061);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(21921);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useForkRef.js
var useForkRef = __webpack_require__(47472);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEventCallback.js
var useEventCallback = __webpack_require__(42780);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerDocument.js
var ownerDocument = __webpack_require__(49081);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js


 // TODO: return `EventHandlerName extends `on${infer EventName}` ? Lowercase<EventName> : never` once generatePropTypes runs with TS 4.1



function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click away listener](https://mui.com/base/react-click-away-listener/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/base/api/click-away-listener/)
 */


function ClickAwayListener(props) {
  var children = props.children,
      _props$disableReactTr = props.disableReactTree,
      disableReactTree = _props$disableReactTr === void 0 ? false : _props$disableReactTr,
      _props$mouseEvent = props.mouseEvent,
      mouseEvent = _props$mouseEvent === void 0 ? 'onClick' : _props$mouseEvent,
      onClickAway = props.onClickAway,
      _props$touchEvent = props.touchEvent,
      touchEvent = _props$touchEvent === void 0 ? 'onTouchEnd' : _props$touchEvent;
  var movedRef = react.useRef(false);
  var nodeRef = react.useRef(null);
  var activatedRef = react.useRef(false);
  var syntheticEventRef = react.useRef(false);
  react.useEffect(function () {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(function () {
      activatedRef.current = true;
    }, 0);
    return function () {
      activatedRef.current = false;
    };
  }, []);
  var handleRef = (0,useForkRef/* default */.Z)( // @ts-expect-error TODO upstream fix
  children.ref, nodeRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  var handleClickAway = (0,useEventCallback/* default */.Z)(function (event) {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    var insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    var doc = (0,ownerDocument/* default */.Z)(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    var insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target) || nodeRef.current.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  var createHandleSynthetic = function createHandleSynthetic(handlerName) {
    return function (event) {
      syntheticEventRef.current = true;
      var childrenPropsHandler = children.props[handlerName];

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
  };

  var childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  react.useEffect(function () {
    if (touchEvent !== false) {
      var mappedTouchEvent = mapEventPropToEvent(touchEvent);
      var doc = (0,ownerDocument/* default */.Z)(nodeRef.current);

      var handleTouchMove = function handleTouchMove() {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return function () {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  react.useEffect(function () {
    if (mouseEvent !== false) {
      var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      var doc = (0,ownerDocument/* default */.Z)(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return function () {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: /*#__PURE__*/react.cloneElement(children, childrenProps)
  });
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ var ClickAwayListener_ClickAwayListener = (ClickAwayListener);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(88564);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(19860);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 2 modules
var useThemeProps = __webpack_require__(29394);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEventCallback.js
var utils_useEventCallback = __webpack_require__(73236);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(91615);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(73365);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(17551);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(82295);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(32298);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(77430);
;// CONCATENATED MODULE: ./node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js

function getSnackbarContentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSnackbarContent', slot);
}
var snackbarContentClasses = (0,generateUtilityClasses/* default */.Z)('MuiSnackbarContent', ['root', 'message', 'action']);
/* harmony default export */ var SnackbarContent_snackbarContentClasses = ((/* unused pure expression or super */ null && (snackbarContentClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/SnackbarContent/SnackbarContent.js



var _excluded = ["action", "className", "message", "role"];












var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root'],
    action: ['action'],
    message: ['message']
  };
  return (0,composeClasses/* default */.Z)(slots, getSnackbarContentUtilityClass, classes);
};

var SnackbarContentRoot = (0,styled/* default */.ZP)(Paper/* default */.Z, {
  name: 'MuiSnackbarContent',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})(function (_ref) {
  var theme = _ref.theme;
  var emphasis = theme.palette.mode === 'light' ? 0.8 : 0.98;
  var backgroundColor = (0,colorManipulator/* emphasize */._4)(theme.palette.background.default, emphasis);
  return (0,esm_extends/* default */.Z)({}, theme.typography.body2, (0,defineProperty/* default */.Z)({
    color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor),
    backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '6px 16px',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    flexGrow: 1
  }, theme.breakpoints.up('sm'), {
    flexGrow: 'initial',
    minWidth: 288
  }));
});
var SnackbarContentMessage = (0,styled/* default */.ZP)('div', {
  name: 'MuiSnackbarContent',
  slot: 'Message',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.message;
  }
})({
  padding: '8px 0'
});
var SnackbarContentAction = (0,styled/* default */.ZP)('div', {
  name: 'MuiSnackbarContent',
  slot: 'Action',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.action;
  }
})({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  paddingLeft: 16,
  marginRight: -8
});
var SnackbarContent = /*#__PURE__*/react.forwardRef(function SnackbarContent(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSnackbarContent'
  });

  var action = props.action,
      className = props.className,
      message = props.message,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SnackbarContentRoot, (0,esm_extends/* default */.Z)({
    role: role,
    square: true,
    elevation: 6,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarContentMessage, {
      className: classes.message,
      ownerState: ownerState,
      children: message
    }), action ? /*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarContentAction, {
      className: classes.action,
      ownerState: ownerState,
      children: action
    }) : null]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var SnackbarContent_SnackbarContent = (SnackbarContent);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Snackbar/snackbarClasses.js

function getSnackbarUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSnackbar', slot);
}
var snackbarClasses = (0,generateUtilityClasses/* default */.Z)('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);
/* harmony default export */ var Snackbar_snackbarClasses = ((/* unused pure expression or super */ null && (snackbarClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/Snackbar/Snackbar.js




var Snackbar_excluded = ["onEnter", "onExited"],
    _excluded2 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"];















var Snackbar_useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
      anchorOrigin = ownerState.anchorOrigin;
  var slots = {
    root: ['root', "anchorOrigin".concat((0,capitalize/* default */.Z)(anchorOrigin.vertical)).concat((0,capitalize/* default */.Z)(anchorOrigin.horizontal))]
  };
  return (0,composeClasses/* default */.Z)(slots, getSnackbarUtilityClass, classes);
};

var SnackbarRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiSnackbar',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    return [styles.root, styles["anchorOrigin".concat((0,capitalize/* default */.Z)(ownerState.anchorOrigin.vertical)).concat((0,capitalize/* default */.Z)(ownerState.anchorOrigin.horizontal))]];
  }
})(function (_ref) {
  var theme = _ref.theme,
      ownerState = _ref.ownerState;
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };
  return (0,esm_extends/* default */.Z)({
    zIndex: (theme.vars || theme).zIndex.snackbar,
    position: 'fixed',
    display: 'flex',
    left: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }, ownerState.anchorOrigin.vertical === 'top' ? {
    top: 8
  } : {
    bottom: 8
  }, ownerState.anchorOrigin.horizontal === 'left' && {
    justifyContent: 'flex-start'
  }, ownerState.anchorOrigin.horizontal === 'right' && {
    justifyContent: 'flex-end'
  }, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({}, ownerState.anchorOrigin.vertical === 'top' ? {
    top: 24
  } : {
    bottom: 24
  }, ownerState.anchorOrigin.horizontal === 'center' && center, ownerState.anchorOrigin.horizontal === 'left' && {
    left: 24,
    right: 'auto'
  }, ownerState.anchorOrigin.horizontal === 'right' && {
    right: 24,
    left: 'auto'
  })));
});
var Snackbar = /*#__PURE__*/react.forwardRef(function Snackbar(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSnackbar'
  });
  var theme = (0,useTheme/* default */.Z)();
  var defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  var action = props.action,
      _props$anchorOrigin = props.anchorOrigin;
  _props$anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'bottom',
    horizontal: 'left'
  } : _props$anchorOrigin;
  var vertical = _props$anchorOrigin.vertical,
      horizontal = _props$anchorOrigin.horizontal,
      _props$autoHideDurati = props.autoHideDuration,
      autoHideDuration = _props$autoHideDurati === void 0 ? null : _props$autoHideDurati,
      children = props.children,
      className = props.className,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      ContentProps = props.ContentProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      message = props.message,
      onBlur = props.onBlur,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Grow/* default */.Z : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps;
  _props$TransitionProp = _props$TransitionProp === void 0 ? {} : _props$TransitionProp;

  var onEnter = _props$TransitionProp.onEnter,
      onExited = _props$TransitionProp.onExited,
      TransitionProps = (0,objectWithoutPropertiesLoose/* default */.Z)(props.TransitionProps, Snackbar_excluded),
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded2);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    anchorOrigin: {
      vertical: vertical,
      horizontal: horizontal
    }
  });

  var classes = Snackbar_useUtilityClasses(ownerState);
  var timerAutoHide = react.useRef();

  var _React$useState = react.useState(true),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      exited = _React$useState2[0],
      setExited = _React$useState2[1];

  var handleClose = (0,utils_useEventCallback/* default */.Z)(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = (0,utils_useEventCallback/* default */.Z)(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  });
  react.useEffect(function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]); // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  }; // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.


  var handleResume = react.useCallback(function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    handlePause();
  };

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    handleResume();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, 'clickaway');
    }
  };

  var handleExited = function handleExited(node) {
    setExited(true);

    if (onExited) {
      onExited(node);
    }
  };

  var handleEnter = function handleEnter(node, isAppearing) {
    setExited(false);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  react.useEffect(function () {
    // TODO: window global should be refactored here
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]);
  react.useEffect(function () {
    if (!open) {
      return undefined;
    }
    /**
     * @param {KeyboardEvent} nativeEvent
     */


    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          // not calling `preventDefault` since we don't know if people may ignore this event e.g. a permanently open snackbar
          if (onClose) {
            onClose(nativeEvent, 'escapeKeyDown');
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [exited, open, onClose]); // So we only render active snackbars.

  if (!open && exited) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ClickAwayListener_ClickAwayListener, (0,esm_extends/* default */.Z)({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarRoot, (0,esm_extends/* default */.Z)({
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      onBlur: handleBlur,
      onFocus: handleFocus,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ownerState: ownerState,
      ref: ref // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      ,
      role: "presentation"
    }, other, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.Z)({
        appear: true,
        in: open,
        timeout: transitionDuration,
        direction: vertical === 'top' ? 'down' : 'up',
        onEnter: handleEnter,
        onExited: handleExited
      }, TransitionProps, {
        children: children || /*#__PURE__*/(0,jsx_runtime.jsx)(SnackbarContent_SnackbarContent, (0,esm_extends/* default */.Z)({
          message: message,
          action: action
        }, ContentProps))
      }))
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Snackbar_Snackbar = (Snackbar);

/***/ })

}]);