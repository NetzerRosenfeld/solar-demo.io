"use strict";
(self["webpackChunksolar_pro_react"] = self["webpackChunksolar_pro_react"] || []).push([[3852],{

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

/***/ 47609:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ManyKeysMap; }
/* harmony export */ });
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42982);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70885);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37762);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15671);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43144);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82963);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11752);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61120);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60136);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29388);
/* harmony import */ var C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98737);
//https://github.com/fregante/many-keys-map
var nullKey=Symbol('null');// `objectHashes` key for null
var keyCounter=0;var ManyKeysMap=/*#__PURE__*/function(_Map,_Symbol$toStringTag){(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ManyKeysMap,_Map);var _super=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ManyKeysMap);function ManyKeysMap(){var _this;(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this,ManyKeysMap);_this=_super.call(this);_this._objectHashes=new WeakMap();_this._symbolHashes=new Map();// https://github.com/tc39/ecma262/issues/1194
_this._publicKeys=new Map();// eslint-disable-next-line prefer-rest-params
var _arguments=Array.prototype.slice.call(arguments),pairs=_arguments[0];// Map compat
if(pairs===null||pairs===undefined){return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_this);}if(typeof pairs[Symbol.iterator]!=='function'){throw new TypeError(typeof pairs+' is not iterable (cannot read property Symbol(Symbol.iterator))');}var _iterator=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(pairs),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _step$value=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_step.value,2),keys=_step$value[0],value=_step$value[1];_this.set(keys,value);}}catch(err){_iterator.e(err);}finally{_iterator.f();}return _this;}(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(ManyKeysMap,[{key:"_getPublicKeys",value:function _getPublicKeys(keys){var create=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(!Array.isArray(keys)){keys=keys.split(",");if(!Array.isArray(keys)){throw new TypeError('The keys parameter must be an array');}}var privateKey=this._getPrivateKey(keys,create);var publicKey;if(privateKey&&this._publicKeys.has(privateKey)){publicKey=this._publicKeys.get(privateKey);}else if(create){publicKey=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(keys);// Regenerate keys array to avoid external interaction
this._publicKeys.set(privateKey,publicKey);}return{privateKey:privateKey,publicKey:publicKey};}},{key:"_getPrivateKey",value:function _getPrivateKey(keys){var create=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var privateKeys=[];var _iterator2=(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keys),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var key=_step2.value;if(key===null){key=nullKey;}var hashes=typeof key==='object'||typeof key==='function'?'_objectHashes':typeof key==='symbol'?'_symbolHashes':false;if(!hashes){privateKeys.push(key);}else if(this[hashes].has(key)){privateKeys.push(this[hashes].get(key));}else if(create){var privateKey="@@mkm-ref-".concat(keyCounter++,"@@");this[hashes].set(key,privateKey);privateKeys.push(privateKey);}else{return false;}}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}return JSON.stringify(privateKeys);}},{key:"set",value:function set(keys,value){var _this$_getPublicKeys=this._getPublicKeys(keys,true),publicKey=_this$_getPublicKeys.publicKey;return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(ManyKeysMap.prototype),"set",this).call(this,publicKey,value);}},{key:"get",value:function get(keys){var _this$_getPublicKeys2=this._getPublicKeys(keys),publicKey=_this$_getPublicKeys2.publicKey;return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(ManyKeysMap.prototype),"get",this).call(this,publicKey);}},{key:"has",value:function has(keys){var _this$_getPublicKeys3=this._getPublicKeys(keys),publicKey=_this$_getPublicKeys3.publicKey;return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(ManyKeysMap.prototype),"has",this).call(this,publicKey);}},{key:"delete",value:function _delete(keys){var _this$_getPublicKeys4=this._getPublicKeys(keys),publicKey=_this$_getPublicKeys4.publicKey,privateKey=_this$_getPublicKeys4.privateKey;return Boolean(publicKey&&(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(ManyKeysMap.prototype),"delete",this).call(this,publicKey)&&this._publicKeys.delete(privateKey));}},{key:"clear",value:function clear(){(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(ManyKeysMap.prototype),"clear",this).call(this);this._symbolHashes.clear();this._publicKeys.clear();}},{key:_Symbol$toStringTag,get:function get(){return'ManyKeysMap';}},{key:"size",get:function get(){return (0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(ManyKeysMap.prototype),"size",this);}}]);return ManyKeysMap;}(/*#__PURE__*/(0,C_GIT_SolarPro_React_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(Map),Symbol.toStringTag);;

/***/ }),

/***/ 98737:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _wrapNativeSuper; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(89611);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(78814);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if ((0,isNativeReflectConstruct/* default */.Z)()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,setPrototypeOf/* default */.Z)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, (0,getPrototypeOf/* default */.Z)(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,setPrototypeOf/* default */.Z)(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ })

}]);