"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{89079:function(e,t,n){n.r(t);var i=n(85893),c=n(79547),a=n.n(c),r=n(67294),l=n(983),s=n(13576),o=n(17567),d=n(8694),x=n(38757),m=n(58299),p=n(94959);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,c,a=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(s){l=!0,c=s}finally{try{r||null==n.return||n.return()}finally{if(l)throw c}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b={backgroundColor:m.DM.BLACK,padding:0,margin:"4px"},u=[],f=function(e){var t=e.title,n=e.onChange,c=e.color;return(0,i.jsxs)("div",{className:a().dynamic([["827cac9155147a21",[m.DM.SECONDARY,m.DM.BLACK]]])+" color-picker-container",children:[(0,i.jsx)("div",{className:a().dynamic([["827cac9155147a21",[m.DM.SECONDARY,m.DM.BLACK]]])+" color-picker-header",children:(0,i.jsx)("span",{className:a().dynamic([["827cac9155147a21",[m.DM.SECONDARY,m.DM.BLACK]]])+" capitalize",children:t})}),(0,i.jsx)(x.Z,{color:c,onChange:n,presets:u,style:b},t),(0,i.jsx)(a(),{id:"827cac9155147a21",dynamic:[m.DM.SECONDARY,m.DM.BLACK],children:".color-picker-container.__jsx-style-dynamic-selector{width:218px;border-left:2px solid ".concat(m.DM.SECONDARY,";padding:2px}.color-picker-header.__jsx-style-dynamic-selector{background-color:").concat(m.DM.BLACK,";display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 0}")})]})};t.default=function(e){var t=e.theme,n=e.themes,c=e.highlights,x=e.create,y=e.updateHighlights,b=e.name,u=e.onInputChange,h=D(r.useState(t.id),2),C=h[0],N=h[1],A=D(r.useState(),2),g=A[0],M=A[1];return(0,i.jsxs)(d.Z,{pointerLeft:"15px",style:{display:"flex"},children:[(0,i.jsxs)("div",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" theme-settings",children:[(0,i.jsxs)("div",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" field name-field",children:[(0,i.jsx)("span",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]]),children:"Name"}),(0,i.jsx)(l.Z,{title:"name",name:"name",placeholder:"Custom Theme",value:b,onChange:u,maxLength:"32"})]}),(0,i.jsx)("div",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" theme-select",children:(0,i.jsx)(o.Z,{title:"Preset",items:n,selected:C,onOpen:function(){return M(null)},onChange:function(e){N(e),y(n.find((function(t){return t.id===e})).highlights)},children:function(e){var t=e.name;return(0,i.jsx)("span",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]]),children:t})}})}),(0,i.jsx)("div",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" theme-colors capitalize",children:m.B1.map((function(e){return(0,i.jsx)("div",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" field",children:(0,i.jsx)(s.Z,{padding:"4px 4px 4px 8px",onClick:function(){return M(e)},background:g===e?m.DM.HOVER:m.DM.BLACK,children:(0,i.jsxs)("div",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" row",children:[(0,i.jsx)("span",{className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" capitalize",children:e}),(0,i.jsx)("span",{style:{backgroundColor:c[e],boxShadow:"inset 0px 0px 0px ".concat(g===e?2:1,"px ").concat(m.DM.SECONDARY)},className:a().dynamic([["61c121d0011d349c",[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY]]])+" color-square"})]})})},e)}))}),(0,i.jsx)(s.Z,{center:!0,disabled:!b,className:"create-button",padding:"8px 0",background:m.DM.SECONDARY,hoverBackground:m.DM.SECONDARY,color:m.DM.BLACK,onClick:function(){return x({id:"theme:".concat((0,p.Ox)()),name:b,highlights:c,custom:!0})},children:"Create +"})]}),g&&(0,i.jsx)(f,{title:g,color:c[g],onChange:function(e){return y((t={},n=g,i=(0,p.iS)(e),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t));var t,n,i}}),(0,i.jsx)(a(),{id:"61c121d0011d349c",dynamic:[m.DM.SECONDARY,m.DM.SECONDARY,m.DM.SECONDARY],children:".field.__jsx-style-dynamic-selector{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:solid 1px ".concat(m.DM.SECONDARY,";display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:35px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative}.field.__jsx-style-dynamic-selector:nth-last-child(-n+2){border-width:2px}.row.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.name-field.__jsx-style-dynamic-selector{padding:8px}.theme-select.__jsx-style-dynamic-selector{width:100%}.theme-settings.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:224px}.theme-colors.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;border-top:2px solid ").concat(m.DM.SECONDARY,"}.theme-colors.__jsx-style-dynamic-selector .field.__jsx-style-dynamic-selector{width:50%}.theme-colors.__jsx-style-dynamic-selector .field.__jsx-style-dynamic-selector:nth-child(odd){border-right:1px solid ").concat(m.DM.SECONDARY,"}.color-square.__jsx-style-dynamic-selector{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;padding:12px}")})]})}}}]);