"use strict";(self.webpackChunksolar_pro_react=self.webpackChunksolar_pro_react||[]).push([[1841,8236],{98236:function(n,t,e){e.r(t),e.d(t,{SET_CURRENT_LABEL:function(){return r},SET_DATA_LOADED:function(){return u},SET_DISTANCE_FROM_ZERO_POINT:function(){return f},SET_GROUP_ID:function(){return a},SET_HEIGHT_PARALLEL:function(){return T},SET_MODAL_TYPE_TEXT:function(){return _},SET_PANELS_COUNT:function(){return i},SET_PANELS_TYPE:function(){return o},SET_ROOF_DATA:function(){return p},SET_TRIANGLE:function(){return E},SET_ZERO_POINT:function(){return c},SET_ZERO_POINT_ABSOLUTE:function(){return l},setCurrentLabel:function(){return O},setDataLoaded:function(){return P},setDistanceFromZeroPoint:function(){return N},setGroupId:function(){return A},setHeightParallel:function(){return L},setModalTypeText:function(){return Z},setPanelsCount:function(){return S},setPanelsType:function(){return s},setRoofData:function(){return D},setTriangle:function(){return d},setZeroPoint:function(){return y},setZeroPointAbsolute:function(){return R}});var r="CURRENT_LABEL",u="DATA_LOADED",o="PANELS_TYPE",a="GROUP_ID",T="HEIGHT_PARALLEL",_="MODAL_TYPE_TEXT",E="TRIANGLE",i="PANELS_COUNT",c="ZERO_POINT",l="ZERO_POINT_ABSOLUTE",f="DISTANCE_FROM_ZERO_POINT",p="ROOF_DATA",A=function(n,t){return n({type:a,payload:t})},s=function(n,t){return n({type:o,payload:t})},O=function(n,t){return n({type:r,payload:t})},P=function(n,t){return n({type:u,payload:t})},L=function(n,t){return n({type:T,payload:t})},Z=function(n,t){return n({type:_,payload:t})},d=function(n,t){return n({type:E,payload:t})},S=function(n,t){return n({type:i,payload:t})},y=function(n,t){return n({type:c,payload:t})},R=function(n,t){return n({type:l,payload:t})},N=function(n,t){return n({type:f,payload:t})},D=function(n,t){return n({type:p,payload:t})}},71841:function(n,t,e){e.r(t),e.d(t,{initialState:function(){return o},reducer:function(){return a}});var r=e(1413),u=(e(47313),e(98236)),o={heightParallel:0,modalTypeText:null,triangle:{angle:0,frontLegHeight:0},panelsType:null,panelsCount:{horizontal:1,vertical:1},zeroPoint:{x:0,y:0,direction:"up",maxYRange:0},distanceFromZeroPoint:{dy:0,dx:0},currentLabel:"",dataLoaded:!1,groupId:0,zeroPointAbsolute:{x:0,y:0,direction:"up",maxYRange:0},roofData:{}},a=function(n,t){var e=t.type,o=t.payload;switch(e){case u.SET_GROUP_ID:return(0,r.Z)((0,r.Z)({},n),{},{groupId:o});case u.SET_CURRENT_LABEL:return(0,r.Z)((0,r.Z)({},n),{},{currentLabel:o});case u.SET_DATA_LOADED:return(0,r.Z)((0,r.Z)({},n),{},{dataLoaded:o});case u.SET_DISTANCE_FROM_ZERO_POINT:return(0,r.Z)((0,r.Z)({},n),{},{distanceFromZeroPoint:o});case u.SET_HEIGHT_PARALLEL:return(0,r.Z)((0,r.Z)({},n),{},{heightParallel:o});case u.SET_MODAL_TYPE_TEXT:return(0,r.Z)((0,r.Z)({},n),{},{modalTypeText:o});case u.SET_PANELS_COUNT:return(0,r.Z)((0,r.Z)({},n),{},{panelsCount:o});case u.SET_PANELS_TYPE:return(0,r.Z)((0,r.Z)({},n),{},{panelsType:o});case u.SET_TRIANGLE:return(0,r.Z)((0,r.Z)({},n),{},{triangle:o});case u.SET_ZERO_POINT:return(0,r.Z)((0,r.Z)({},n),{},{zeroPoint:o});case u.SET_ZERO_POINT_ABSOLUTE:return(0,r.Z)((0,r.Z)({},n),{},{zeroPointAbsolute:o});case u.SET_ROOF_DATA:return(0,r.Z)((0,r.Z)({},n),{},{roofData:o});default:return n}}}}]);