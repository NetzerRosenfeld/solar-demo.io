"use strict";(self.webpackChunksolar_pro_react=self.webpackChunksolar_pro_react||[]).push([[1259],{1259:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var s=t(4165),a=t(5861),r=t(885),l=t(7313),i=t(6429),o=t(3929),c=t(4758),u=t(6783),d=t(1550),h=t(5178),x=t(4299),f=t(4268),p=t(3849),v=t(1616),j=t(5954),m=t(5958),g=t(6417);function Z(e){var n=(0,l.useRef)(e.value);return(0,g.jsx)("span",{contentEditable:!0,onInput:function(n){e.onChange&&e.onChange(n.target.innerHTML)},className:"custom-textarea",dangerouslySetInnerHTML:{__html:n.current}})}var b=function(e){var n=(0,l.useState)(""),t=(0,r.Z)(n,2);t[0],t[1];return(0,l.useEffect)((function(){}),[]),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h4",{className:"font-arial text-orange",children:[e.labelId,"-"]}),(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{children:" ".concat(e.rowsCount," ").concat(" \u05e9\u05d5\u05e8\u05d5\u05ea : ","  ")}),(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:e.panelsText}})]}),["W0","S0P","S0","KZ0"].includes(e.roofType)&&(0,g.jsxs)("div",{children:[" ",(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:["\u05e2\u05de\u05d5\u05d3\u05d9 \u05d4\u05d2\u05d1\u05d4\u05d4 ",e.parallelPoles]})}),(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:["\u05d2\u05d5\u05d1\u05d4 \u05e2\u05de\u05d5\u05d3\u05d9 \u05d4\u05d2\u05d1\u05d4\u05d4 ",e.heightParallel]})})]}),["RX","WX","SX","SXP","KZX"].includes(e.roofType)&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:[e.triangleCount," \u05de\u05e9\u05d5\u05dc\u05e9\u05d9\u05dd ",e.triangleAngle," \u05de\u05e2\u05dc\u05d5\u05ea"]})}),(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:["\u05e2\u05de\u05d5\u05d3\u05d9 \u05d7\u05d9\u05d6\u05d5\u05e7  ",e.poles]})}),e.diagonal>0&&(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:["\u05d3\u05d9\u05d0\u05d2\u05d5\u05e0\u05dc  ",e.diagonal]})})]}),["WX","W0"].includes(e.roofType)&&(0,g.jsxs)("div",{children:[(0,g.jsxs)("span",{children:["\u05e1\u05d5\u05d2 \u05de\u05e9\u05e7\u05d5\u05dc\u05ea ",e.weightType,' \u05e7"\u05d2']}),(0,g.jsxs)("div",{children:["\u05de\u05e1\u05e4\u05e8 \u05d4\u05de\u05e9\u05e7\u05d5\u05dc\u05d5\u05ea \u05d4\u05db\u05d5\u05dc\u05dc ",e.totalWeight]})]}),(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:[" \u05e7\u05d5\u05e9\u05e8\u05d5\u05ea ",e.koshrot,' \u05de"\u05de']})}),["S0P","SXP","WX","W0"].includes(e.roofType)&&(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:[" \u05e4\u05e8\u05d5\u05e4\u05d9\u05dc\u05d9 \u05d1\u05e1\u05d9\u05e1 ",e.profileBasis,' \u05de"\u05de']})})]})},S=t(1413),y=t(5671),k=t(3144),C=t(7987),w=(t(5508),t(5898)),T=function(){function e(){(0,y.Z)(this,e)}return(0,k.Z)(e,[{key:"convertDxfToPdf",value:function(e,n,t,s){var a=new C.Z,r=new w.Z,l=[];try{n&&((l=this.setComments(n))||(l=[]).push(""));var i=a.parseSync(e),o=(0,S.Z)((0,S.Z)({},t),{},{comments:l});console.log(o);var c={dxf:i,pageConfiguration:o,weightDistribution:s};r.Post("PDF/GeneratePDF",c,{},!0).then((function(e){r.downloadBlob(e,"solar_pro.pdf")}))}catch(u){console.error(u.stack)}}},{key:"reverseNumbers",value:function(e){return e.replace(/[0-9]+/gm,(function(e){return Number(e.split("").reverse().join("")).toLocaleString()}))}},{key:"reverseString",value:function(e){return e.split("").reverse().join("")}},{key:"setComments",value:function(e){var n=this,t="";if(""!=e.innerText){var s=e.innerText.split("\n");t="",s.forEach((function(e,s){t+=n.reverseNumbers(n.reverseString(e))+"\n"}))}return t}}]),e}(),P=t(8415),N=t(3121),E=t(5922),D=t(9930),I=t(1204),L=t(1789),M=t(6847),z=t(7890),X=t(2877),B=function(e){var n=new T,t=new E.Z,S=(0,l.useContext)(m.default),y=(0,l.useState)(),k=(0,r.Z)(y,2),C=k[0],B=k[1],A=(0,l.useState)(50),F=(0,r.Z)(A,2),_=F[0],W=F[1],R=(0,l.useState)(0),H=(0,r.Z)(R,2),O=H[0],U=H[1],Y=(0,l.useState)(50),q=(0,r.Z)(Y,2),K=q[0],G=q[1],J=(0,l.useState)([]),Q=(0,r.Z)(J,2),V=Q[0],$=Q[1],ee=(0,l.useState)(50),ne=(0,r.Z)(ee,2),te=ne[0],se=ne[1],ae=(0,l.useState)(!1),re=(0,r.Z)(ae,2),le=re[0],ie=re[1],oe=(0,l.useState)(0),ce=(0,r.Z)(oe,2),ue=ce[0],de=ce[1],he=(0,l.useState)(0),xe=(0,r.Z)(he,2),fe=xe[0],pe=xe[1],ve=(0,l.useState)(0),je=(0,r.Z)(ve,2),me=je[0],ge=je[1],Ze=(0,l.useState)(),be=(0,r.Z)(Ze,2),Se=be[0],ye=be[1],ke=new w.Z,Ce=l.createRef(),we=(0,l.useState)(""),Te=(0,r.Z)(we,2),Pe=Te[0],Ne=Te[1],Ee=(0,l.useState)(""),De=(0,r.Z)(Ee,2),Ie=De[0],Le=De[1],Me=(0,l.useState)(!1),ze=(0,r.Z)(Me,2),Xe=ze[0],Be=ze[1],Ae=(0,l.useState)(!1),Fe=(0,r.Z)(Ae,2),_e=Fe[0],We=Fe[1],Re=l.useState(!1),He=(0,r.Z)(Re,2),Oe=He[0],Ue=He[1],Ye=(0,l.useState)(),qe=(0,r.Z)(Ye,2),Ke=qe[0],Ge=qe[1],Je=(0,z.UO)().projectId;(0,l.useEffect)((function(){return e.displaySketcher(!0),function(){var e=S.stepsData.all;if(Ge(e.weightDistribution),e.labels){var n=Object.keys(e.labels).map((function(n){return e.labels[n]}));$(n)}else;e.labelsEdit&&(Ie||(Le(e.labelsEdit),Be(!0),Ne(e.labelsEdit)));Ue(!1),B(e.projectName)}(),(0,P.q)(Qe),function(){(0,P.M)(Qe)}}),[Ce.current,_e,_,K,te,Ie,ue,fe,me,O,Ke]);var Qe=function(e){var t=e.detail;if(4==(null===t||void 0===t?void 0:t.code)){var s=document.getElementById("pdfLabels");_e&&(s=document.getElementById("pdfLabelsAfterEdit"));var a=S.stepsData.all,r={scaleY:Ve(te),scaleX:Ve(te),projectName:a.projectName,pageOrientation:ue,horizontalDistance:me,verticalDistance:fe,alignLogo:O};le?(r.scaleX=Ve(K),r.scaleY=Ve(_),n.convertDxfToPdf(t.text,s,r,Ke)):n.convertDxfToPdf(t.text,s,r,Ke)}console.log(t,"I'm listening on solar pro to sketcher")},Ve=function(e){var n=0;if(0==(e-=25))n=1;else{var t=e-X.sz.BASE_NUMBER;n=X.sz.BASE_NUMBER-t}return n},$e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t,a,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t={folder:Je},a=new FormData,r=0;r!=n.length;r++)a.append("files",n[r]);return e.next=5,ke.PostFile("Repository/Upload",a,t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{className:"py-5 mt-5",children:"\u05d4\u05e2\u05e8\u05d5\u05ea"}),(0,g.jsxs)("form",{onSubmit:function(n){var t={labelsResult:V,labelsEdit:Ie,status:2,ProjectId:Je};e.OnSubmit(n,t)},id:"step8",children:[(0,g.jsx)(M.kw,{acceptedFiles:["application/pdf"],cancelButtonText:"\u05d1\u05d9\u05d8\u05d5\u05dc",submitButtonText:"\u05d0\u05d9\u05e9\u05d5\u05e8",maxFileSize:5e6,open:Se,onClose:function(){return ye(!1)},onSave:function(e){$e(e),ye(!1)},showPreviews:!0,showFileNamesInPreview:!0}),(0,g.jsxs)(p.Z,{className:"mb-5 pb-5",children:[(0,g.jsxs)(v.Z,{className:"mx-4 px-5",children:["  ",(0,g.jsx)("button",{onClick:function(e){t.executeInSketcher("exportDxf",null,"",null),e.preventDefault()},children:"\u05d9\u05d9\u05e6\u05d5\u05d0 \u05dcpdf - \u05d1\u05d7\u05e8 \u05d2\u05d2 \u05d1\u05de\u05e1\u05da"}),(0,g.jsxs)("div",{className:"border-top",children:[(0,g.jsx)("h4",{children:"\u05d4\u05d2\u05d3\u05e8\u05ea \u05e8\u05d6\u05d5\u05dc\u05d5\u05e6\u05d9\u05d4"}),(0,g.jsx)("h5",{children:" \u05e8\u05d6\u05d5\u05dc\u05d5\u05e6\u05d9\u05d4 = \u05d4\u05e2\u05e8\u05da \u05e9\u05e0\u05d1\u05d7\u05e8 / \u05d0\u05d5\u05e8\u05da \u05d4\u05e2\u05de\u05d5\u05d3"}),(0,g.jsx)(L.ZP,{sx:{width:150},size:"small","aria-label":"Small",valueLabelDisplay:"auto",step:1,disabled:le,value:te,onChange:function(e,n){se(n),W(n),G(n)},marks:!0,min:X.sz.MIN,max:X.sz.MAX}),(0,g.jsx)(i.Z,{children:(0,g.jsx)(o.Z,{onChange:function(e){return ie(e.target.checked)},value:le,control:(0,g.jsx)(c.Z,{}),label:"\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05de\u05ea\u05e7\u05d3\u05de\u05d5\u05ea"})}),le&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"py-3",children:[" \u05e6\u05d9\u05e8 \u05d4Y: \u05e9\u05d9\u05e0\u05d5\u05d9 \u05e4\u05d5\u05e7\u05d5\u05e1 \u05dc\u05de\u05e1\u05de\u05da",(0,g.jsx)(L.ZP,{sx:{width:150},size:"small","aria-label":"Small",valueLabelDisplay:"auto",step:1,value:_,onChange:function(e,n){W(n)},marks:!0,min:X.sz.MIN,max:X.sz.MAX})]}),(0,g.jsxs)("div",{className:"py-3",children:[" \u05e6\u05d9\u05e8 \u05d4X: \u05e9\u05d9\u05e0\u05d5\u05d9 \u05e4\u05d5\u05e7\u05d5\u05e1 \u05dc\u05de\u05e1\u05de\u05da",(0,g.jsx)(L.ZP,{sx:{width:150},size:"small","aria-label":"Small",valueLabelDisplay:"auto",step:1,value:K,onChange:function(e,n){G(n)},marks:!0,min:X.sz.MIN,max:X.sz.MAX}),"  "]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(u.Z,{id:"vertical-distance",label:"\u05de\u05e8\u05d7\u05e7 \u05d0\u05e0\u05db\u05d9 \u05de\u05ea\u05d7\u05ea\u05d9\u05ea \u05d4\u05d3\u05e3",variant:"outlined",value:fe,onChange:function(e){return pe(e.currentTarget.value)}}),(0,g.jsx)(u.Z,{id:"horizontal-distance",label:"\u05de\u05e8\u05d7\u05e7 \u05d0\u05d5\u05e4\u05e7\u05d9 \u05de\u05ea\u05d7\u05ea\u05d9\u05ea \u05d4\u05d3\u05e3",variant:"outlined",value:me,onChange:function(e){return ge(e.currentTarget.value)}})]}),(0,g.jsx)("div",{children:(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(h.Z,{id:"radio-button-logo",children:"\u05d4\u05e6\u05d2 \u05dc\u05d5\u05d2\u05d5"}),(0,g.jsxs)(x.Z,{row:!0,name:"radio-button-logo",value:O,onChange:function(e){return U(e.currentTarget.value)},children:[(0,g.jsx)(o.Z,{value:"0",control:(0,g.jsx)(f.Z,{}),label:"\u05e9\u05de\u05d0\u05dc"}),(0,g.jsx)(o.Z,{value:"1",control:(0,g.jsx)(f.Z,{}),label:"\u05d9\u05de\u05d9\u05df"}),(0,g.jsx)(o.Z,{value:"2",control:(0,g.jsx)(f.Z,{}),label:"\u05dc\u05dc\u05d0"})]})]})})," ",(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(h.Z,{id:"page-orientation",children:"\u05db\u05d9\u05d5\u05d5\u05df \u05d4\u05d3\u05e3"}),(0,g.jsxs)(x.Z,{"aria-labelledby":"",name:"page orientation-group",value:ue,onChange:function(e){return de(e.target.value)},children:[(0,g.jsx)(o.Z,{value:"1",control:(0,g.jsx)(f.Z,{}),label:"\u05dc\u05e8\u05d5\u05d7\u05d1"}),(0,g.jsx)(o.Z,{value:"0",control:(0,g.jsx)(f.Z,{}),label:"\u05e8\u05d2\u05d9\u05dc"})]})]})]})]}),(0,g.jsx)("div",{className:"border-top",children:(0,g.jsx)("button",{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),ye(!0)},children:"\u05d4\u05e2\u05dc\u05d0\u05ea \u05e7\u05d1\u05e6\u05d9\u05dd"})}),(0,g.jsxs)("div",{children:[V.length>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("h1",{children:[" ",C]}),(0,g.jsx)("div",{onClick:function(){Be(!0),Ne(Ce.current.innerHTML)},children:(0,g.jsx)(j.Z,{})})," "]}),(0,g.jsxs)("div",{id:"pdfLabels",ref:Ce,children:[" ",V.length>0&&Object.keys(V).map((function(e,n){return Object.keys(V[e]).map((function(t,s){return(0,g.jsxs)("div",{className:0===s?"border-top font-arial":"font-arial",children:[(0,g.jsxs)("span",{className:"font-arial",children:["  ",0===s?"\u05d2\u05d2 "+n:""]})," ",(0,g.jsx)("div",{children:(0,g.jsx)(b,{roofType:V[e][t].roofTypeText,labelId:V[e][t].labelId,panelsText:V[e][t].panelsText,triangleCount:V[e][t].triangleCount,triangleAngle:V[e][t].triangleAngle,koshrot:V[e][t].koshrot,profileBasis:V[e][t].profileBasis,rowsCount:V[e][t].rowsCount,weightType:V[e][t].weightType,parallelPoles:V[e][t].parallelPoles,diagonal:V[e][t].diagonal,heightParallel:V[e][t].heightParallel,poles:V[e][t].poles,totalWeight:V[e][t].totalWeight})})]})}))}))]})]})]}),(0,g.jsx)(v.Z,{children:(0,g.jsx)(p.Z,{children:Xe&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{onClick:function(){We(!0),Ue(!0);var e=document.getElementById("pdfLabelsAfterEdit");Le(e.innerHTML)},children:(0,g.jsx)(N.Z,{})}),(0,g.jsxs)("span",{onClick:function(e){Be(!1),We(!1)},children:[" ",(0,g.jsx)(D.Z,{})]}),(0,g.jsx)("span",{id:"pdfLabelsAfterEdit",children:(0,g.jsx)(Z,{value:Pe,onChange:function(e){e&&Ne(e)}})})]})})})]}),(0,g.jsx)(I.Z,{open:Oe,autoHideDuration:6e3,message:"\u05d4\u05de\u05d9\u05d3\u05e2 \u05e0\u05e9\u05de\u05e8!",onClose:function(){return Ue(!1)}})]})]})}},8415:function(e,n,t){t.d(n,{M:function(){return a},q:function(){return s}});var s=function(e){document.addEventListener("sketcherPickedEvent",e,!1)},a=function(e){document.removeEventListener("sketcherPickedEvent",e,!1)}}}]);