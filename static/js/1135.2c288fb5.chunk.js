"use strict";(self.webpackChunksolar_pro_react=self.webpackChunksolar_pro_react||[]).push([[1135,5381,8068],{1135:function(e,t,n){n.r(t);var r=n(4165),a=n(5861),u=n(885),o=n(7313),s=n(3849),i=n(1616),l=n(6783),c=n(5958),p=n(7890),T=(n(8068),n(6417));t.default=function(e){var t=(0,o.useContext)(c.default),n=(0,p.UO)().stepId,d=(0,o.useState)(),f=(0,u.Z)(d,2),E=f[0],_=f[1],y=(0,o.useState)(),S=(0,u.Z)(y,2),m=S[0],Z=S[1],h=(0,o.useState)(),x=(0,u.Z)(h,2),P=x[0],D=x[1],A=(0,o.useState)(),O=(0,u.Z)(A,2),v=O[0],I=O[1],j=(0,o.useState)(),R=(0,u.Z)(j,2),g=R[0],C=R[1],N=(0,o.useState)(0),b=(0,u.Z)(N,2),Y=b[0],w=b[1],L=(0,o.useState)(0),M=(0,u.Z)(L,2),z=M[0],F=M[1],U=(0,o.useState)(0),k=(0,u.Z)(U,2),W=k[0],H=k[1],G=(0,o.useState)(""),X=(0,u.Z)(G,2),q=X[0];X[1];function Q(){return(Q=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.stepsData.all)&&(_(n.panelsHeight),Z(n.panelsWidth),D(n.panelsThickness),I(n.panelsPower),C(n.panelsAmsl),F(n.maxEdgeSpace),H(n.maxMidSpace));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,o.useEffect)((function(){!function(){Q.apply(this,arguments)}(),e.displaySketcher(!1)}),[]);return(0,T.jsxs)("div",{children:[(0,T.jsx)("h2",{onClick:function(){_(2e3),Z(1e3),D(45),I(450),C(1)},className:"py-5",children:"\u05d4\u05d6\u05e0\u05ea \u05e0\u05ea\u05d5\u05e0\u05d9\u05dd"}),(0,T.jsxs)("form",{onSubmit:function(t){var r={stepIndex:n,isDraft:!0,panelsHeight:E,panelsWidth:m,panelsThickness:P,panelsPower:v,panelsAmsl:g,maxEdgeSpace:z,maxMidSpace:W};e.OnSubmit(t,r)},id:"step4",children:[(0,T.jsx)(s.Z,{className:"",children:(0,T.jsxs)(i.Z,{children:[(0,T.jsx)("h5",{className:"text-center",children:"\u05de\u05d9\u05d3\u05d5\u05ea \u05e4\u05e0\u05dc\u05d9\u05dd"}),(0,T.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:["  ",(0,T.jsx)(l.Z,{id:"panel-height",label:"\u05d0\u05d5\u05e8\u05da (\u05de''\u05de)",type:"number",value:E,onChange:function(e){return _(e.target.value)},autoComplete:"off",color:"primary"})]}),(0,T.jsx)("div",{className:"d-flex justify-content-around mt-2",children:(0,T.jsx)(l.Z,{id:"panel-width",label:"\u05e8\u05d5\u05d7\u05d1 (\u05de''\u05de)",type:"number",value:m,onChange:function(e){return Z(e.target.value)},autoComplete:"off",color:"primary"})}),(0,T.jsx)("div",{className:"d-flex justify-content-around mt-2",children:(0,T.jsx)(l.Z,{id:"panel-thickness",label:"\u05e2\u05d5\u05d1\u05d9 (\u05de''\u05de)",type:"number",value:P,onChange:function(e){return D(e.target.value)},autoComplete:"off",color:"primary"})}),(0,T.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:["  ",(0,T.jsx)(l.Z,{id:"panel-voltage",label:"\u05d4\u05e1\u05e4\u05e7 (\u05d5\u05d0\u05d8)",type:"number",value:v,onChange:function(e){return I(e.target.value)},autoComplete:"off",color:"primary"})]}),(0,T.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[" ",(0,T.jsx)(l.Z,{id:"panel-difficulty",type:"number",label:"\u05e8\u05de\u05ea \u05e6\u05e4\u05d9\u05e4\u05d5\u05ea \u05de\u05e9\u05d5\u05dc\u05e9\u05d9\u05dd",className:"hideme",value:Y,onChange:function(e){return w(e.target.value)},autoComplete:"off",color:"primary",sx:{width:185}})]})]})}),(0,T.jsxs)(i.Z,{className:"pt-3 py-3",children:[(0,T.jsx)("h5",{className:"text-center border-top ",children:"   \u05d2\u05d5\u05d1\u05d4 \u05de\u05e2\u05dc \u05e4\u05e0\u05d9 \u05d4\u05d9\u05dd"}),(0,T.jsx)("div",{className:"d-flex justify-content-around mt-2",children:(0,T.jsx)(l.Z,{id:"amsl",label:"\u05d2\u05d5\u05d1\u05d4 \u05de\u05e2\u05dc \u05e4\u05e0\u05d9 \u05d4\u05d9\u05dd",type:"number",value:g,onChange:function(e){return C(e.target.value)},autoComplete:"off",color:"primary"})}),(0,T.jsx)("h5",{className:"text-center pt-3 border-top ",children:"\u05de\u05e8\u05d7\u05e7 \u05de\u05e7\u05e1\u05d9\u05de\u05dc\u05d9 \u05d1\u05d9\u05df \u05de\u05e9\u05d5\u05dc\u05e9\u05d9\u05dd"}),(0,T.jsx)("div",{className:"d-flex justify-content-around mt-2",children:(0,T.jsx)(l.Z,{id:"triangle-edge",label:"\u05e7\u05e6\u05d4",InputProps:{inputProps:{min:0,type:"number"}},className:"",value:z,onChange:function(e){return F(e.target.value)},autoComplete:"off",color:"primary",error:q,sx:{width:185}})}),(0,T.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[" ",(0,T.jsx)(l.Z,{id:"triangle-center",label:"\u05de\u05e8\u05db\u05d6",type:"number",className:"",InputProps:{inputProps:{min:0,type:"number"}},value:W,onChange:function(e){return H(e.target.value)},autoComplete:"off",color:"primary",sx:{width:185}})]})]})]})]})}},5381:function(e,t,n){n.r(t),n.d(t,{SET_DATA_LOADED:function(){return T},SET_FETA_COUNT:function(){return _},SET_FETOT_DIRECTION:function(){return f},SET_MODAL_TYPE:function(){return u},SET_MODAL_TYPES:function(){return p},SET_MODAL_TYPE_TEXT:function(){return i},SET_REALSPACE:function(){return E},SET_ROOF_TYPE_ID:function(){return a},SET_ROOF_TYPE_TEXT:function(){return r},SET_TRAPEZOID_DISTANCE:function(){return o},SET_TRAPEZOID_TYPES:function(){return s},SET_TRAPEZOID_UPPER_SIZE:function(){return d},SET_WEIGHT_SQUARE:function(){return c},SET_WEIGHT_TYPE:function(){return l},setDataLoaded:function(){return v},setFetotDirection:function(){return j},setModalType:function(){return Z},setModalTypeText:function(){return P},setModalTypes:function(){return O},setRealspace:function(){return y},setRoofTypeId:function(){return m},setRoofTypeText:function(){return S},setTrapezoidDistance:function(){return h},setTrapezoidTypes:function(){return x},setTrapezoidUpperSize:function(){return I},setWeightSquare:function(){return A},setWeightType:function(){return D}});var r="SET_ROOF_TYPE_TEXT",a="SET_ROOF_TYPE_ID",u="SET_MODAL_TYPE",o="SET_TRAPEZOID_DISTANCE",s="SET_TRAPEZOID_TYPES",i="SET_MODAL_TYPE_TEXT",l="SET_WEIGHT_TYPE",c="SET_WEIGHT_SQUARE",p="SET_MODAL_TYPES",T="SET_DATA_LOADED",d="SET_TRAPEZOID_UPPER_SIZE",f="SET_FETOT_DIRECTION",E="SET_REALSPACE",_="SET_FETA_COUNT",y=function(e,t){return e({type:E,payload:t})},S=function(e,t){return e({type:r,payload:t})},m=function(e,t){return e({type:a,payload:t})},Z=function(e,t){return e({type:u,payload:t})},h=function(e,t){return e({type:o,payload:t})},x=function(e,t){return e({type:s,payload:t})},P=function(e,t){return e({type:i,payload:t})},D=function(e,t){return e({type:l,payload:t})},A=function(e,t){return e({type:c,payload:t})},O=function(e,t){return e({type:p,payload:t})},v=function(e,t){return e({type:T,payload:t})},I=function(e,t){return e({type:d,payload:t})},j=function(e,t){return e({type:f,payload:t})}},8068:function(e,t,n){n.r(t),n.d(t,{initialState:function(){return u},reducer:function(){return o}});var r=n(1413),a=(n(7313),n(5381)),u={roofTypeText:null,roofTypeId:null,modalType:null,trapezoidDistance:null,trapezoidTypes:null,modalTypeText:null,weightType:null,weightSquare:null,modalTypes:[],dataLoaded:!1,trapezoidUpperSize:null,fetotDirection:null,realspace:0},o=function(e,t){var n=t.type,u=t.payload;switch(n){case a.SET_ROOF_TYPE_TEXT:return(0,r.Z)((0,r.Z)({},e),{},{roofTypeText:u});case a.SET_ROOF_TYPE_ID:return(0,r.Z)((0,r.Z)({},e),{},{roofTypeId:u});case a.SET_MODAL_TYPE:return(0,r.Z)((0,r.Z)({},e),{},{modalType:u});case a.SET_TRAPEZOID_DISTANCE:return(0,r.Z)((0,r.Z)({},e),{},{trapezoidDistance:u});case a.SET_TRAPEZOID_TYPES:return(0,r.Z)((0,r.Z)({},e),{},{trapezoidTypes:u});case a.SET_MODAL_TYPE_TEXT:return(0,r.Z)((0,r.Z)({},e),{},{modalTypeText:u});case a.SET_WEIGHT_TYPE:return(0,r.Z)((0,r.Z)({},e),{},{weightType:u});case a.SET_WEIGHT_SQUARE:return(0,r.Z)((0,r.Z)({},e),{},{weightSquare:u});case a.SET_MODAL_TYPES:return(0,r.Z)((0,r.Z)({},e),{},{modalTypes:u});case a.SET_DATA_LOADED:return(0,r.Z)((0,r.Z)({},e),{},{dataLoaded:u});case a.SET_TRAPEZOID_UPPER_SIZE:return(0,r.Z)((0,r.Z)({},e),{},{trapezoidUpperSize:u});case a.SET_FETOT_DIRECTION:return(0,r.Z)((0,r.Z)({},e),{},{fetotDirection:u});case a.SET_REALSPACE:return(0,r.Z)((0,r.Z)({},e),{},{realspace:u});default:return e}}},3849:function(e,t,n){var r=n(1413),a=n(5987),u=n(6123),o=n.n(u),s=n(7313),i=n(8524),l=n(6417),c=["bsPrefix","className","as"],p=s.forwardRef((function(e,t){var n=e.bsPrefix,u=e.className,s=e.as,p=void 0===s?"div":s,T=(0,a.Z)(e,c),d=(0,i.vE)(n,"row"),f=(0,i.pi)(),E=(0,i.zG)(),_="".concat(d,"-cols"),y=[];return f.forEach((function(e){var t,n=T[e];delete T[e],t=null!=n&&"object"===typeof n?n.cols:n;var r=e!==E?"-".concat(e):"";null!=t&&y.push("".concat(_).concat(r,"-").concat(t))})),(0,l.jsx)(p,(0,r.Z)((0,r.Z)({ref:t},T),{},{className:o().apply(void 0,[u,d].concat(y))}))}));p.displayName="Row",t.Z=p}}]);