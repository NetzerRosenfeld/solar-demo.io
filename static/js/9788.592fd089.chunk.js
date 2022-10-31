"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[9788],{

/***/ 22499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OK": function() { return /* reexport */ components_Tab; },
  "td": function() { return /* reexport */ components_TabList; },
  "x4": function() { return /* reexport */ components_TabPanel; },
  "mQ": function() { return /* reexport */ components_Tabs; }
});

// UNUSED EXPORTS: resetIdCounter

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/helpers/elementTypes.js
function makeTypeChecker(tabsRole) {
  return function (element) {
    return !!element.type && element.type.tabsRole === tabsRole;
  };
}

var elementTypes_isTab = makeTypeChecker('Tab');
var elementTypes_isTabList = makeTypeChecker('TabList');
var elementTypes_isTabPanel = makeTypeChecker('TabPanel');
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/helpers/childrenDeepMap.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}




function isTabChild(child) {
  return elementTypes_isTab(child) || elementTypes_isTabList(child) || elementTypes_isTabPanel(child);
}

function deepMap(children, callback) {
  return react.Children.map(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (child.props && child.props.children && typeof child.props.children === 'object') {
      // Clone the child that has children and map them too
      return /*#__PURE__*/(0,react.cloneElement)(child, _extends({}, child.props, {
        children: deepMap(child.props.children, callback)
      }));
    }

    return child;
  });
}
function childrenDeepMap_deepForEach(children, callback) {
  return react.Children.forEach(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (elementTypes_isTab(child) || elementTypes_isTabPanel(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === 'object') {
      if (elementTypes_isTabList(child)) callback(child);
      childrenDeepMap_deepForEach(child.props.children, callback);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/helpers/propTypes.js


function childrenPropType(props, propName, componentName) {
  var error;
  var tabsCount = 0;
  var panelsCount = 0;
  var tabListFound = false;
  var listTabs = [];
  var children = props[propName];
  deepForEach(children, function (child) {
    if (isTabList(child)) {
      if (child.props && child.props.children && typeof child.props.children === 'object') {
        deepForEach(child.props.children, function (listChild) {
          return listTabs.push(listChild);
        });
      }

      if (tabListFound) {
        error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
      }

      tabListFound = true;
    }

    if (isTab(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components " + "have to be inside the 'TabList' component.");
      }

      tabsCount++;
    } else if (isTabPanel(child)) {
      panelsCount++;
    }
  });

  if (!error && tabsCount !== panelsCount) {
    error = new Error("There should be an equal number of 'Tab' and 'TabPanel' in `" + componentName + "`. " + ("Received " + tabsCount + " 'Tab' and " + panelsCount + " 'TabPanel'."));
  }

  return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop && typeof prop !== 'function') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied " + ("to `" + componentName + "`, expected `function`."));
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error("The " + location + " `" + name + "` is marked as required in `" + componentName + "`, but " + "its value is `undefined` or `null`.\n" + "`onSelect` is required when `selectedIndex` is also set. Not doing so will " + "make the tabs not do anything, as `selectedIndex` indicates that you want to " + "handle the selected tab yourself.\n" + "If you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.");
  }

  return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop != null && typeof prop !== 'number') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied to " + ("`" + componentName + "`, expected `number`."));
  } else if (props.defaultIndex != null && prop != null) {
    return new Error("The " + location + " `" + name + "` cannot be used together with `defaultIndex` " + ("in `" + componentName + "`.\n") + ("Either remove `" + name + "` to let `" + componentName + "` handle the selected ") + "tab internally or remove `defaultIndex` to handle it yourself.");
  }

  return error;
}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(83061);
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/helpers/uuid.js
// Get a universally unique identifier
var count = 0;
function uuid() {
  return "react-tabs-" + count++;
}
function uuid_reset() {
  count = 0;
}
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/helpers/count.js


function count_getTabsCount(children) {
  var tabCount = 0;
  childrenDeepMap_deepForEach(children, function (child) {
    if (elementTypes_isTab(child)) tabCount++;
  });
  return tabCount;
}
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/components/UncontrolledTabs.js
var _excluded = ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName", "environment", "disableUpDownKeys"];

function UncontrolledTabs_extends() {
  UncontrolledTabs_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UncontrolledTabs_extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}










function isNode(node) {
  return node && 'getAttribute' in node;
} // Determine if a node from event.target is a Tab element


function isTabNode(node) {
  return isNode(node) && node.getAttribute('data-rttab');
} // Determine if a tab node is disabled


function isTabDisabled(node) {
  return isNode(node) && node.getAttribute('aria-disabled') === 'true';
}

var canUseActiveElement;

function determineCanUseActiveElement(environment) {
  var env = environment || (typeof window !== 'undefined' ? window : undefined);

  try {
    canUseActiveElement = !!(typeof env !== 'undefined' && env.document && env.document.activeElement);
  } catch (e) {
    // Work around for IE bug when accessing document.activeElement in an iframe
    // Refer to the following resources:
    // http://stackoverflow.com/a/10982960/369687
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
    // istanbul ignore next
    canUseActiveElement = false;
  }
}

var defaultProps = {
  className: 'react-tabs',
  focus: false
};
var propTypes =  false ? 0 : {};

var UncontrolledTabs = function UncontrolledTabs(props) {
  var tabNodes = (0,react.useRef)([]);
  var tabIds = (0,react.useRef)([]);
  var panelIds = (0,react.useRef)([]);

  var _ref = (0,react.useRef)();

  function setSelected(index, event) {
    // Check index boundary
    if (index < 0 || index >= getTabsCount()) return;
    var onSelect = props.onSelect,
        selectedIndex = props.selectedIndex; // Call change event handler

    onSelect(index, selectedIndex, event);
  }

  function getNextTab(index) {
    var count = getTabsCount(); // Look for non-disabled tab from index to the last tab on the right

    for (var i = index + 1; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from first on left to index


    for (var _i = 0; _i < index; _i++) {
      if (!isTabDisabled(getTab(_i))) {
        return _i;
      }
    } // All tabs are disabled, return index

    /* istanbul ignore next */


    return index;
  }

  function getPrevTab(index) {
    var i = index; // Look for non-disabled tab from index to first tab on the left

    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from last tab on right to index


    i = getTabsCount();

    while (i-- > index) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    } // All tabs are disabled, return index

    /* istanbul ignore next */


    return index;
  }

  function getFirstTab() {
    var count = getTabsCount(); // Look for non disabled tab from the first tab

    for (var i = 0; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    /* istanbul ignore next */


    return null;
  }

  function getLastTab() {
    var i = getTabsCount(); // Look for non disabled tab from the last tab

    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    /* istanbul ignore next */


    return null;
  }

  function getTabsCount() {
    var children = props.children;
    return count_getTabsCount(children);
  }

  function getTab(index) {
    return tabNodes.current["tabs-" + index];
  }

  function getChildren() {
    var index = 0;
    var children = props.children,
        disabledTabClassName = props.disabledTabClassName,
        focus = props.focus,
        forceRenderTabPanel = props.forceRenderTabPanel,
        selectedIndex = props.selectedIndex,
        selectedTabClassName = props.selectedTabClassName,
        selectedTabPanelClassName = props.selectedTabPanelClassName,
        environment = props.environment;
    tabIds.current = tabIds.current || [];
    panelIds.current = panelIds.current || [];
    var diff = tabIds.current.length - getTabsCount(); // Add ids if new tabs have been added
    // Don't bother removing ids, just keep them in case they are added again
    // This is more efficient, and keeps the uuid counter under control

    while (diff++ < 0) {
      tabIds.current.push(uuid());
      panelIds.current.push(uuid());
    } // Map children to dynamically setup refs


    return deepMap(children, function (child) {
      var result = child; // Clone TabList and Tab components to have refs

      if (elementTypes_isTabList(child)) {
        var listIndex = 0; // Figure out if the current focus in the DOM is set on a Tab
        // If it is we should keep the focus on the next selected tab

        var wasTabFocused = false;

        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment);
        }

        var env = environment || (typeof window !== 'undefined' ? window : undefined);

        if (canUseActiveElement && env) {
          wasTabFocused = react.Children.toArray(child.props.children).filter(elementTypes_isTab).some(function (tab, i) {
            return env.document.activeElement === getTab(i);
          });
        }

        result = /*#__PURE__*/(0,react.cloneElement)(child, {
          children: deepMap(child.props.children, function (tab) {
            var key = "tabs-" + listIndex;
            var selected = selectedIndex === listIndex;
            var props = {
              tabRef: function tabRef(node) {
                tabNodes.current[key] = node;
              },
              id: tabIds.current[listIndex],
              panelId: panelIds.current[listIndex],
              selected: selected,
              focus: selected && (focus || wasTabFocused)
            };
            if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
            if (disabledTabClassName) props.disabledClassName = disabledTabClassName;
            listIndex++;
            return /*#__PURE__*/(0,react.cloneElement)(tab, props);
          })
        });
      } else if (elementTypes_isTabPanel(child)) {
        var _props = {
          id: panelIds.current[index],
          tabId: tabIds.current[index],
          selected: selectedIndex === index
        };
        if (forceRenderTabPanel) _props.forceRender = forceRenderTabPanel;
        if (selectedTabPanelClassName) _props.selectedClassName = selectedTabPanelClassName;
        index++;
        result = /*#__PURE__*/(0,react.cloneElement)(child, _props);
      }

      return result;
    });
  }

  function handleKeyDown(e) {
    var direction = props.direction,
        disableUpDownKeys = props.disableUpDownKeys;

    if (isTabFromContainer(e.target)) {
      var index = props.selectedIndex;
      var preventDefault = false;
      var useSelectedIndex = false;

      if (e.code === 'Space' || e.keyCode === 32
      /* space */
      || e.code === 'Enter' || e.keyCode === 13
      /* enter */
      ) {
        preventDefault = true;
        useSelectedIndex = false;
        handleClick(e);
      } // keyCode is deprecated and only used here for IE


      if (e.code === 'ArrowLeft' || e.keyCode === 37
      /* arrow left */
      || !disableUpDownKeys && (e.keyCode === 38 || e.code === 'ArrowUp')
      /* arrow up */
      ) {
        // Select next tab to the left, validate if up arrow is not disabled
        if (direction === 'rtl') {
          index = getNextTab(index);
        } else {
          index = getPrevTab(index);
        }

        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.code === 'ArrowRight' || e.keyCode === 39
      /* arrow right */
      || !disableUpDownKeys && (e.keyCode === 40 || e.code === 'ArrowDown')
      /* arrow down */
      ) {
        // Select next tab to the right, validate if down arrow is not disabled
        if (direction === 'rtl') {
          index = getPrevTab(index);
        } else {
          index = getNextTab(index);
        }

        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 35 || e.code === 'End') {
        // Select last tab (End key)
        index = getLastTab();
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 36 || e.code === 'Home') {
        // Select first tab (Home key)
        index = getFirstTab();
        preventDefault = true;
        useSelectedIndex = true;
      } // This prevents scrollbars from moving around


      if (preventDefault) {
        e.preventDefault();
      } // Only use the selected index in the state if we're not using the tabbed index


      if (useSelectedIndex) {
        setSelected(index, e);
      }
    }
  }

  function handleClick(e) {
    var node = e.target;

    do {
      if (isTabFromContainer(node)) {
        if (isTabDisabled(node)) {
          return;
        }

        var index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);
        setSelected(index, e);
        return;
      }
    } while ((node = node.parentNode) != null);
  }
  /**
   * Determine if a node from event.target is a Tab element for the current Tabs container.
   * If the clicked element is not a Tab, it returns false.
   * If it finds another Tabs container between the Tab and `this`, it returns false.
   */


  function isTabFromContainer(node) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false;
    } // Check if the first occurrence of a Tabs container is `this` one.


    var nodeAncestor = node.parentElement;

    do {
      if (nodeAncestor === _ref.current) return true;
      if (nodeAncestor.getAttribute('data-rttabs')) break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);

    return false;
  }

  var children = props.children,
      className = props.className,
      disabledTabClassName = props.disabledTabClassName,
      domRef = props.domRef,
      focus = props.focus,
      forceRenderTabPanel = props.forceRenderTabPanel,
      onSelect = props.onSelect,
      selectedIndex = props.selectedIndex,
      selectedTabClassName = props.selectedTabClassName,
      selectedTabPanelClassName = props.selectedTabPanelClassName,
      environment = props.environment,
      disableUpDownKeys = props.disableUpDownKeys,
      attributes = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/react.createElement("div", UncontrolledTabs_extends({}, attributes, {
    className: (0,clsx_m/* default */.Z)(className),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: function ref(node) {
      _ref.current = node;
      if (domRef) domRef(node);
    },
    "data-rttabs": true
  }), getChildren());
};

UncontrolledTabs.defaultProps = defaultProps;
UncontrolledTabs.propTypes =  false ? 0 : {};
/* harmony default export */ var components_UncontrolledTabs = (UncontrolledTabs);
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/components/Tabs.js
function Tabs_extends() {
  Tabs_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tabs_extends.apply(this, arguments);
}






var MODE_CONTROLLED = 0;
var MODE_UNCONTROLLED = 1;
var Tabs_propTypes =  false ? 0 : {};
var Tabs_defaultProps = {
  defaultFocus: false,
  focusTabOnClick: true,
  forceRenderTabPanel: false,
  selectedIndex: null,
  defaultIndex: null,
  environment: null,
  disableUpDownKeys: false
};

var getModeFromProps = function getModeFromProps(props) {
  return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
};

var checkForIllegalModeChange = function checkForIllegalModeChange(props, mode) {
  if (false) {}
};
/**
 * State:
 *   mode: Initialized only once from props and never changes
 *   selectedIndex: null if controlled mode, otherwise initialized with prop defaultIndex, changed on selection of tabs, has effect to ensure it never gets out of bound
 *   focus: Because we never remove focus from the Tabs this state is only used to indicate that we should focus the current tab.
 *          It is initialized from the prop defaultFocus, and after the first render it is reset back to false. Later it can become true again when using keys to navigate the tabs.
 */


var Tabs = function Tabs(props) {
  var children = props.children,
      defaultFocus = props.defaultFocus,
      defaultIndex = props.defaultIndex,
      focusTabOnClick = props.focusTabOnClick,
      onSelect = props.onSelect;

  var _useState = (0,react.useState)(defaultFocus),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = (0,react.useState)(getModeFromProps(props)),
      mode = _useState2[0];

  var _useState3 = (0,react.useState)(mode === MODE_UNCONTROLLED ? defaultIndex || 0 : null),
      selectedIndex = _useState3[0],
      setSelectedIndex = _useState3[1];

  (0,react.useEffect)(function () {
    // Reset focus after initial render, see comment above
    setFocus(false);
  }, []);

  if (mode === MODE_UNCONTROLLED) {
    // Ensure that we handle removed tabs and don't let selectedIndex get out of bounds
    var tabsCount = count_getTabsCount(children);
    (0,react.useEffect)(function () {
      if (selectedIndex != null) {
        var maxTabIndex = Math.max(0, tabsCount - 1);
        setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
      }
    }, [tabsCount]);
  }

  checkForIllegalModeChange(props, mode);

  var handleSelected = function handleSelected(index, last, event) {
    // Call change event handler
    if (typeof onSelect === 'function') {
      // Check if the change event handler cancels the tab change
      if (onSelect(index, last, event) === false) return;
    } // Always set focus on tabs unless it is disabled


    if (focusTabOnClick) {
      setFocus(true);
    }

    if (mode === MODE_UNCONTROLLED) {
      // Update selected index
      setSelectedIndex(index);
    }
  };

  var subProps = Tabs_extends({}, props);

  subProps.focus = focus;
  subProps.onSelect = handleSelected;

  if (selectedIndex != null) {
    subProps.selectedIndex = selectedIndex;
  }

  delete subProps.defaultFocus;
  delete subProps.defaultIndex;
  delete subProps.focusTabOnClick;
  return /*#__PURE__*/react.createElement(components_UncontrolledTabs, subProps, children);
};

Tabs.propTypes =  false ? 0 : {};
Tabs.defaultProps = Tabs_defaultProps;
Tabs.tabsRole = 'Tabs';
/* harmony default export */ var components_Tabs = (Tabs);
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/components/TabList.js
var TabList_excluded = ["children", "className"];

function TabList_extends() {
  TabList_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TabList_extends.apply(this, arguments);
}

function TabList_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




var TabList_defaultProps = {
  className: 'react-tabs__tab-list'
};
var TabList_propTypes =  false ? 0 : {};

var TabList = function TabList(props) {
  var children = props.children,
      className = props.className,
      attributes = TabList_objectWithoutPropertiesLoose(props, TabList_excluded);

  return /*#__PURE__*/react.createElement("ul", TabList_extends({}, attributes, {
    className: (0,clsx_m/* default */.Z)(className),
    role: "tablist"
  }), children);
};

TabList.tabsRole = 'TabList';
TabList.propTypes =  false ? 0 : {};
TabList.defaultProps = TabList_defaultProps;
/* harmony default export */ var components_TabList = (TabList);
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/components/Tab.js
var Tab_excluded = ["children", "className", "disabled", "disabledClassName", "focus", "id", "panelId", "selected", "selectedClassName", "tabIndex", "tabRef"];

function Tab_extends() {
  Tab_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tab_extends.apply(this, arguments);
}

function Tab_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




var DEFAULT_CLASS = 'react-tabs__tab';
var DEFAULT_PROPS = {
  className: DEFAULT_CLASS,
  disabledClassName: DEFAULT_CLASS + "--disabled",
  focus: false,
  id: null,
  panelId: null,
  selected: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};
var Tab_propTypes =  false ? 0 : {};

var Tab = function Tab(props) {
  var _cx;

  var nodeRef = (0,react.useRef)();

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      disabledClassName = props.disabledClassName,
      focus = props.focus,
      id = props.id,
      panelId = props.panelId,
      selected = props.selected,
      selectedClassName = props.selectedClassName,
      tabIndex = props.tabIndex,
      tabRef = props.tabRef,
      attributes = Tab_objectWithoutPropertiesLoose(props, Tab_excluded);

  (0,react.useEffect)(function () {
    if (selected && focus) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);
  return /*#__PURE__*/react.createElement("li", Tab_extends({}, attributes, {
    className: (0,clsx_m/* default */.Z)(className, (_cx = {}, _cx[selectedClassName] = selected, _cx[disabledClassName] = disabled, _cx)),
    ref: function ref(node) {
      nodeRef.current = node;
      if (tabRef) tabRef(node);
    },
    role: "tab",
    id: id,
    "aria-selected": selected ? 'true' : 'false',
    "aria-disabled": disabled ? 'true' : 'false',
    "aria-controls": panelId,
    tabIndex: tabIndex || (selected ? '0' : null),
    "data-rttab": true
  }), children);
};

Tab.propTypes =  false ? 0 : {};
Tab.tabsRole = 'Tab';
Tab.defaultProps = DEFAULT_PROPS;
/* harmony default export */ var components_Tab = (Tab);
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/components/TabPanel.js
var TabPanel_excluded = ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"];

function TabPanel_extends() {
  TabPanel_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TabPanel_extends.apply(this, arguments);
}

function TabPanel_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




var TabPanel_DEFAULT_CLASS = 'react-tabs__tab-panel';
var TabPanel_defaultProps = {
  className: TabPanel_DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: TabPanel_DEFAULT_CLASS + "--selected"
};
var TabPanel_propTypes =  false ? 0 : {};

var TabPanel = function TabPanel(props) {
  var _cx;

  var children = props.children,
      className = props.className,
      forceRender = props.forceRender,
      id = props.id,
      selected = props.selected,
      selectedClassName = props.selectedClassName,
      tabId = props.tabId,
      attributes = TabPanel_objectWithoutPropertiesLoose(props, TabPanel_excluded);

  return /*#__PURE__*/react.createElement("div", TabPanel_extends({}, attributes, {
    className: (0,clsx_m/* default */.Z)(className, (_cx = {}, _cx[selectedClassName] = selected, _cx)),
    role: "tabpanel",
    id: id,
    "aria-labelledby": tabId
  }), forceRender || selected ? children : null);
};

TabPanel.tabsRole = 'TabPanel';
TabPanel.propTypes =  false ? 0 : {};
TabPanel.defaultProps = TabPanel_defaultProps;
/* harmony default export */ var components_TabPanel = (TabPanel);
;// CONCATENATED MODULE: ./node_modules/react-tabs/esm/index.js






/***/ }),

/***/ 78614:
/***/ (function() {

// extracted by mini-css-extract-plugin
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ })

}]);