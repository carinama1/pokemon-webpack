(self.webpackChunkpokemon_webpack=self.webpackChunkpokemon_webpack||[]).push([[956],{5318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},862:(e,t,n)=>{var r=n(8);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}},8:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},9480:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>r.Z,createChainedFunction:()=>o,createSvgIcon:()=>m,debounce:()=>p,deprecatedPropType:()=>d,isMuiElement:()=>y,ownerDocument:()=>v,ownerWindow:()=>h,requirePropFactory:()=>b,setRef:()=>w.Z,unstable_useId:()=>Z,unsupportedProp:()=>k,useControlled:()=>g,useEventCallback:()=>S.Z,useForkRef:()=>P.Z,useIsFocusVisible:()=>O.Z});var r=n(3871);function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),(function(){}))}var i=n(2122),a=n(7294),u=n(1253),c=(n(5697),n(6010)),l=n(4670),s=a.forwardRef((function(e,t){var n=e.children,o=e.classes,l=e.className,s=e.color,f=void 0===s?"inherit":s,m=e.component,p=void 0===m?"svg":m,d=e.fontSize,y=void 0===d?"default":d,v=e.htmlColor,h=e.titleAccess,b=e.viewBox,w=void 0===b?"0 0 24 24":b,k=(0,u.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.createElement(p,(0,i.Z)({className:(0,c.Z)(o.root,l,"inherit"!==f&&o["color".concat((0,r.Z)(f))],"default"!==y&&o["fontSize".concat((0,r.Z)(y))]),focusable:"false",viewBox:w,color:v,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:t},k),n,h?a.createElement("title",null,h):null)}));s.muiName="SvgIcon";const f=(0,l.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s);function m(e,t){var n=function(t,n){return a.createElement(f,(0,i.Z)({ref:n},t),e)};return n.muiName=f.muiName,a.memo(a.forwardRef(n))}function p(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=this,u=function(){e.apply(a,o)};clearTimeout(t),t=setTimeout(u,n)}return r.clear=function(){clearTimeout(t)},r}function d(e,t){return function(){return null}}function y(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function v(e){return e&&e.ownerDocument||document}function h(e){return v(e).defaultView||window}function b(e){return function(){return null}}var w=n(4236);function k(e,t,n,r,o){return null}function g(e){var t=e.controlled,n=e.default,r=(e.name,e.state,a.useRef(void 0!==t).current),o=a.useState(n),i=o[0],u=o[1];return[r?t:i,a.useCallback((function(e){r||u(e)}),[])]}var S=n(5192),P=n(3834);function Z(e){var t=a.useState(e),n=t[0],r=t[1],o=e||n;return a.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}var O=n(4896)},9826:(e,t,n)=>{"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(2108)).default)(i.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=a},4540:(e,t,n)=>{"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(2108)).default)(i.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.Z=a},2108:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(9480)},8911:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(7294),o=n(6974),i=n(6010),a=n(5697),u=n.n(a),c=n(1120),l=n(8568),s=n(8358),f=n(7748),m=n(9826);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=(0,c.Z)({root:{},toolbar:{height:32,boxShadow:"0 1px 6px 0 rgba(49, 53, 59, 0.4)"}}),y=function(e){var t=e.className,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["className"]),a=d(),u=(0,o.s0)();return r.createElement(l.Z,p({className:(0,i.Z)(a.root,t),elevation:0},n),r.createElement(s.Z,{className:a.toolbar},r.createElement(f.Z,{style:{width:"100%",height:"100%"},display:"flex",alignItems:"center",justifyContent:"space-between"},r.createElement("div",{style:{cursor:"pointer"},onClick:function(){return u("/")}},r.createElement(m.Z,{fontSize:"medium"})))))};y.propTypes={className:u().string};const v=y},6673:(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{s:()=>i});var o=new(n(9642).Z)("PokemonsDexie");o.version(2).stores({pokemon:"++id, &uniqueName"});var i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"getMyPokemons",value:function(){return new Promise((function(e){e(o.pokemon.toArray())}))}},{key:"getMyPokemonByName",value:function(e){return new Promise((function(t){t(o.pokemon.where("uniqueName").equals(e).first())}))}},{key:"getMyPokemonById",value:function(e){return new Promise((function(t){t(o.pokemon.where("id").equals(e).first())}))}},{key:"updatePokemonNameById",value:function(e,t){return new Promise((function(n){n(o.pokemon.where("id").equals(e).modify({uniqueName:t}))}))}},{key:"releasePokemon",value:function(e){return new Promise((function(t){t(o.pokemon.where("id").equals(e).delete())}))}},{key:"catchPokemon",value:function(e){return new Promise((function(t){t(o.pokemon.add(e))}))}}])&&r(t.prototype,n),e}())}}]);