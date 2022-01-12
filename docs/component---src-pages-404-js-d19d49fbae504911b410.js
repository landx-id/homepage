"use strict";(self.webpackChunklandx=self.webpackChunklandx||[]).push([[883],{6968:function(e,o,t){t.d(o,{Z:function(){return k}});var a=t(4942),n=t(3366),i=t(7462),r=t(7294),l=t(5505),c=t(6193),d=t(9408),s=t(7663),p=t(8348),u=t(2371),m=t(8807),h=t(9240),v=t(8416);function b(e){return(0,v.Z)("MuiButton",e)}var g=(0,t(2194).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=r.createContext({}),f=t(5893),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],z=function(e){return(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},y=(0,p.ZP)(m.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,h.Z)(t.color))],o["size".concat((0,h.Z)(t.size))],o["".concat(t.variant,"Size").concat((0,h.Z)(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((function(e){var o,t=e.theme,n=e.ownerState;return(0,i.Z)({},t.typography.button,(o={minWidth:64,padding:"6px 16px",borderRadius:t.shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,s.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:(0,s.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:"1px solid ".concat(t.palette[n.color].main),backgroundColor:(0,s.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:t.palette.grey.A100,boxShadow:t.shadows[4],"@media (hover: none)":{boxShadow:t.shadows[2],backgroundColor:t.palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:t.palette[n.color].dark,"@media (hover: none)":{backgroundColor:t.palette[n.color].main}}),"&:active":(0,i.Z)({},"contained"===n.variant&&{boxShadow:t.shadows[8]})},(0,a.Z)(o,"&.".concat(g.focusVisible),(0,i.Z)({},"contained"===n.variant&&{boxShadow:t.shadows[6]})),(0,a.Z)(o,"&.".concat(g.disabled),(0,i.Z)({color:t.palette.action.disabled},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.action.disabledBackground)},"outlined"===n.variant&&"secondary"===n.color&&{border:"1px solid ".concat(t.palette.action.disabled)},"contained"===n.variant&&{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground})),o),"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].main,border:"1px solid ".concat((0,s.Fq)(t.palette[n.color].main,.5))},"contained"===n.variant&&{color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],boxShadow:t.shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})}),(function(e){var o;return e.ownerState.disableElevation&&(o={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(o,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,a.Z)(o,"&:active",{boxShadow:"none"}),(0,a.Z)(o,"&.".concat(g.disabled),{boxShadow:"none"}),o)})),Z=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.startIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},z(o))})),w=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.endIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},z(o))})),k=r.forwardRef((function(e,o){var t=r.useContext(x),a=(0,c.Z)(t,e),s=(0,u.Z)({props:a,name:"MuiButton"}),p=s.children,m=s.color,v=void 0===m?"primary":m,g=s.component,z=void 0===g?"button":g,k=s.className,C=s.disabled,I=void 0!==C&&C,R=s.disableElevation,E=void 0!==R&&R,M=s.disableFocusRipple,N=void 0!==M&&M,W=s.endIcon,B=s.focusVisibleClassName,F=s.fullWidth,P=void 0!==F&&F,T=s.size,L=void 0===T?"medium":T,V=s.startIcon,O=s.type,q=s.variant,j=void 0===q?"text":q,D=(0,n.Z)(s,S),A=(0,i.Z)({},s,{color:v,component:z,disabled:I,disableElevation:E,disableFocusRipple:N,fullWidth:P,size:L,type:O,variant:j}),H=function(e){var o=e.color,t=e.disableElevation,a=e.fullWidth,n=e.size,r=e.variant,l=e.classes,c={root:["root",r,"".concat(r).concat((0,h.Z)(o)),"size".concat((0,h.Z)(n)),"".concat(r,"Size").concat((0,h.Z)(n)),"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(n))],endIcon:["endIcon","iconSize".concat((0,h.Z)(n))]},s=(0,d.Z)(c,b,l);return(0,i.Z)({},l,s)}(A),G=V&&(0,f.jsx)(Z,{className:H.startIcon,ownerState:A,children:V}),J=W&&(0,f.jsx)(w,{className:H.endIcon,ownerState:A,children:W});return(0,f.jsxs)(y,(0,i.Z)({ownerState:A,className:(0,l.Z)(k,t.className),component:z,disabled:I,focusRipple:!N,focusVisibleClassName:(0,l.Z)(H.focusVisible,B),ref:o,type:O},D,{classes:H,children:[G,p,J]}))}))},9616:function(e,o,t){t.r(o);var a=t(7294),n=t(5668),i=t(5616),r=t(9211),l=t(4320),c=t(9308),d=t(6968),s=t(4033),p=t(5444),u=t(8769),m=s.p;o.default=function(){return a.createElement(n.Z,{theme:m},a.createElement(u.Z,{title:"404: Not found"}),a.createElement(i.Z,null,a.createElement(r.Z,{style:{height:"100vh",display:"flex"}},a.createElement(l.ZP,{item:!0,xs:12,md:12,align:"center",style:{margin:"auto auto"}},a.createElement("img",{src:"/images/404.webp",alt:"Page Not found"}),a.createElement(c.Z,{variant:"h6",color:"secondary",style:{fontWeight:"700"}},"Oops, Halaman Tidak Ditemukan"),a.createElement(c.Z,{color:"secondary",style:{marginBottom:"1rem"}},"Maaf, sepertinya kami tidak dapat menemukan halaman yang anda cari."),a.createElement(d.Z,{onClick:function(){(0,p.navigate)("/")}},"kembali ke beranda")))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-d19d49fbae504911b410.js.map