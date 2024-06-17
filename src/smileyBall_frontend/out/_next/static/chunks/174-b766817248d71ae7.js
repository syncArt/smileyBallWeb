"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{8174:function(t,e,n){n.d(e,{k:function(){return f}});var r=n(2265);class i{constructor(t){this.letter=t.letter,this.builder=t.builder,this.defaultOptions=t.defaultOptions,this.resolution=t.resolution,this.data=t.data,Object.preventExtensions(this)}}let a=()=>{let[t,e]=(0,r.useState)();return[t,e]},l=()=>{let[t,e]=(0,r.useState)(null);return[{...t,initializePalette:t=>{e(t)}},(t,n)=>{switch(t){case"main":e(t=>({...t,main:n}));break;case"background":e(t=>({...t,background:n}));break;case"border":e(t=>({...t,border:n}));break;case"outline":e(t=>({...t,outline:n}));break;default:throw Error("changeEmoji is fucked up")}}]};var o=n(1333);let u=(t,e,n)=>{let r={};Object.keys(t).forEach(n=>{let a=t[n](e.initialVal.main,e.initialVal.background),l={y:e.initialVal.outline?a.length+2:a.length,x:(e.initialVal.outline,a[0].length)},u=[(0,o.fr)(a[0].length,e.initialVal.background),...a,(0,o.fr)(a[0].length,e.initialVal.background)],c=new i({letter:n,builder:t[n],defaultOptions:e.options,data:e.initialVal.outline?u:a,resolution:l});r={...r,[n]:c}}),n({lib:r,texture:e})},c=async(t,e,r)=>{let i=Promise.resolve().then(n.bind(n,1607)).then(e=>e[t]),a=Promise.resolve().then(n.bind(n,7418)).then(t=>t[e]);try{await Promise.all([i,a]).then(t=>{let[e,n]=t;u(e,n,r)})}catch(t){console.error("THERE WAS AN ERROR BUILDING LIB. check LettersLib")}},s=(t,e,n)=>{let r={},i={...e,...n};return Object.keys(t).forEach(e=>{var n;let a=null===(n=t[e])||void 0===n?void 0:n.builder(i.main,i.background),l=[(0,o.fr)(a[0].length,i.background),...a,(0,o.fr)(a[0].length,i.background)];r[e]={...t[e],data:i.outline?l:a}}),r},d=(t,e)=>{let[n,i]=(0,r.useState)(null),[o,u]=a(),[{initializePalette:d,...h},b]=l();(0,r.useEffect)(()=>{c(t,e,t=>{let{lib:e,texture:n}=t;i(e),u(n.options),d(n.initialVal)})},[]);let f=(0,r.useCallback)((t,e)=>{h&&Object.values(h).length>0?(i(n=>s(n,h,{[t]:e})),b(t,e)):console.error("[custom] palette is empty!!!!")},[h]);return[n,{palette:h,letterOptions:o,changeEmoji:f,setLetterOptions:u}]},h=(t,e)=>t.map(t=>e(t)),b=(t,e)=>Array.from({length:null==t?void 0:t.reduce((t,e)=>t>e.resolution.y?t:e.resolution.y,0)},(t,e)=>e).map(n=>t.reduce((r,i,a)=>{if(i.data[n])return t.length-1===a?"".concat(r).concat(i.data[n]):"".concat(r).concat(i.data[n],",").concat(e.background,",");{let t=Array.from({length:i.resolution.x},(t,n)=>e.background);return"".concat(r).concat(t.flat())}},"")),f=(t,e)=>{let[n,i]=(0,r.useState)(""),[a,l]=(0,r.useState)({x:0,y:0}),[o,{palette:u,letterOptions:c,changeEmoji:s}]=d(e,t),f=(0,r.useCallback)(()=>(null==o?void 0:o.a)&&n?n.split("\n").filter(t=>!!t).map(t=>t.split("").map(t=>o[t])):[],[o,n])();return console.log("textGrid",f),[{textGrid:h(f,t=>(console.log("word",t),t.reduce((t,e)=>t+e.resolution.x,0),t.length,b(t,u))),inputText:n,palette:u,lib:o,letterOptions:c},{setText:i,changeEmoji:s}]}},1333:function(t,e,n){n.d(e,{fr:function(){return r}});let r=(t,e)=>Array.from({length:t},()=>e);e.Z={a:(t,e)=>[[e,...r(2,t)],[t,e,t],r(3,t),[t,e,t]],b:(t,e)=>[[t,...r(2,e)],r(3,t),[t,e,t],r(3,t)],c:(t,e)=>[r(3,t),[t,...r(2,e)],[t,...r(2,e)],r(3,t)],d:(t,e)=>[[...r(2,t),e],[t,e,t],[t,e,t],[...r(2,t),e]],e:(t,e)=>[r(3,t),[t,...r(2,e)],[...r(2,t),e],r(3,t)],f:(t,e)=>[r(3,t),[t,...r(2,e)],[...r(2,t),e],[t,...r(2,e)]],g:(t,e)=>[r(3,t),[t,...r(2,e)],[t,e,t],r(3,t)],h:(t,e)=>[[t,e,t],[t,e,t],r(3,t),[t,e,t]],i:(t,e)=>[[t],[t],[t],[t]],j:(t,e)=>[[...r(2,e),t],[...r(2,e),t],[t,e,t],r(3,t)],k:(t,e)=>[[t,e,t],[...r(2,t),e],[t,e,t],[t,e,t]],l:(t,e)=>[[t,...r(2,e)],[t,...r(2,e)],[t,...r(2,e)],r(3,t)],m:(t,e)=>[[...r(2,t),e,...r(2,t)],[t,e,t,e,t],[t,e,t,e,t],[t,...r(3,e),t]],n:(t,e)=>[[t,...r(2,e),t],[...r(2,t),e,t],[t,e,...r(2,t)],[t,...r(2,e),t]],o:(t,e)=>[r(3,t),[t,e,t],[t,e,t],r(3,t)],p:(t,e)=>[r(3,t),[t,e,t],r(3,t),[t,...r(2,e)]],r:(t,e)=>[r(3,t),[t,e,t],[...r(2,t),e],[t,e,t]],s:(t,e)=>[r(2,t),[t,e],[e,t],r(2,t)],t:(t,e)=>[r(3,t),[e,t,e],[e,t,e],[e,t,e]],u:(t,e)=>[[t,e,t],[t,e,t],[t,e,t],r(3,t)],w:(t,e)=>[[t,e,t,e,t],[t,e,t,e,t],[t,e,t,e,t],[e,t,e,t,e]],z:(t,e)=>[r(2,t),[e,t],[t,e],r(2,t)],x:(t,e)=>[[t,e,t],[e,t,e],[t,e,t],[t,e,t]],y:(t,e)=>[[t,e,t],r(3,t),[e,t,e],[e,t,e]],q:(t,e)=>[r(3,t),[t,e,t],r(3,t),[...r(2,e),t]],v:(t,e)=>[[t,e,t],[t,e,t],[t,e,t],[e,t,e]],0:(t,e)=>[[t,t,t],[t,e,t],[t,e,t],[t,t,t]],1:(t,e)=>[[t,t,e],[e,t,e],[e,t,e],[t,t,t]],2:(t,e)=>[[t,t,t],[e,e,t],[t,t,e],[t,t,t]],3:(t,e)=>[[t,t,t],[e,t,e],[e,e,t],[t,t,t]],4:(t,e)=>[[t,e,t],[t,e,t],[t,t,t],[e,e,t]],5:(t,e)=>[[t,t,t],[t,e,e],[e,t,t],[t,t,t]],6:(t,e)=>[[t,t,t],[t,e,e],[t,t,t],[t,t,t]],7:(t,e)=>[[t,t,t],[e,e,t],[e,t,e],[e,t,e]],8:(t,e)=>[[t,t,t],[t,e,t],[t,t,t],[t,t,t]],9:(t,e)=>[[t,t,t],[t,e,t],[t,t,t],[e,e,t]],":":(t,e)=>[[e],[t],[e],[t]],"!":(t,e)=>[[t],[t],[e],[t]],")":(t,e)=>[[t,e],[e,t],[e,t],[t,e]],"(":(t,e)=>[[e,t],[t,e],[t,e],[e,t]],".":(t,e)=>[[e],[e],[e],[t]],"?":(t,e)=>[[t,t,t,t],[e,e,e,t],[e,t,t,e],[e,t,e,e]]," ":(t,e)=>[[e],[e],[e],[e]]}},1607:function(t,e,n){n.r(e),n.d(e,{ASCII_3x4:function(){return a.Z},LIB_TYPES:function(){return i},PIXELMOJIS:function(){return o}});var r,i,a=n(1333);let l=(t,e)=>Array.from({length:t},()=>e);var o={1:(t,e,n)=>[[l(5,n),l(5,e),l(5,n)],[l(3,n),l(2,e),l(5,t),l(2,e),l(3,n)],[l(2,n),l(1,e),l(9,t),l(1,e),l(2,n)],[l(1,n),l(1,e),l(11,t),l(1,e),l(1,n)],[l(1,n),l(1,e),l(3,t),l(1,e),l(3,t),l(1,e),l(3,t),l(1,e),l(1,n)],[l(1,e),l(4,t),l(1,e),l(3,t),l(1,e),l(4,t),l(1,e)],[l(1,e),l(4,t),l(1,e),l(3,t),l(1,e),l(4,t),l(1,e)],[l(1,e),l(13,t),l(1,e)],[l(1,e),l(2,t),l(1,e),l(7,t),l(1,e),l(2,t),l(1,e)],[l(1,e),l(2,t),l(1,e),l(7,t),l(1,e),l(2,t),l(1,e)],[l(1,n),l(1,e),l(2,t),l(1,e),l(5,t),l(1,e),l(2,t),l(1,e),l(1,n)],[l(1,n),l(1,e),l(3,t),l(5,e),l(3,t),l(1,e),l(1,n)],[l(2,n),l(1,e),l(9,t),l(1,e),l(2,n)],[l(3,n),l(2,e),l(5,t),l(2,e),l(3,n)],[l(5,n),l(5,e),l(5,n)]],2:(t,e,n)=>[[l(5,n),l(5,e),l(5,n)],[l(3,n),l(2,e),l(5,t),l(2,e),l(3,n)],[l(2,n),l(1,e),l(9,t),l(1,e),l(2,n)],[l(1,n),l(1,e),l(2,t),l(1,e),l(5,t),l(1,e),l(2,t),l(1,e),l(1,n)],[l(1,n),l(1,e),l(3,t),l(1,e),l(3,t),l(1,e),l(3,t),l(1,e),l(1,n)],[l(2,e),l(1,t),l(4,e),l(1,t),l(4,e),l(1,t),l(2,e)],[l(1,e),l(13,t),l(1,e)],[l(1,e),l(1,t),l(11,e),l(1,t),l(1,e)],[l(1,e),l(1,t),l(1,e),l(9,n),l(1,e),l(1,t),l(1,e)],[l(1,e),l(1,t),l(11,e),l(1,t),l(1,e)],[l(1,n),l(1,e),l(1,t),l(9,e),l(1,t),l(1,e),l(1,n)],[l(1,n),l(1,e),l(2,t),l(1,e),l(5,n),l(1,e),l(2,t),l(1,e),l(1,n)],[l(2,n),l(1,e),l(2,t),l(5,e),l(2,t),l(1,e),l(2,n)],[l(3,n),l(2,e),l(5,t),l(2,e),l(3,n)],[l(5,n),l(5,e),l(5,n)]],3:(t,e,n)=>[[l(1,n),l(1,e),l(11,n),l(1,e),l(1,n)],[l(1,e),l(1,t),l(1,e),l(2,n),l(5,e),l(2,n),l(1,e),l(1,t),l(1,e)],[l(1,e),l(2,t),l(2,e),l(5,t),l(2,e),l(2,t),l(1,e)],[l(1,e),l(1,t),l(1,e),l(9,t),l(1,e),l(1,t),l(1,e)],[l(1,n),l(1,e),l(11,t),l(1,e),l(1,n)],[l(1,n),l(1,e),l(11,t),l(1,e),l(1,n)],[l(1,e),l(13,t),l(1,e)],[l(1,e),l(13,t),l(1,e)],[l(1,e),l(2,t),l(2,e),l(5,t),l(2,e),l(2,t),l(1,e)],[l(1,e),l(3,t),l(1,n),l(1,e),l(3,t),l(1,e),l(1,n),l(3,t),l(1,e)],[l(1,n),l(1,e),l(11,t),l(1,e),l(1,n)],[l(1,n),l(1,e),l(3,t),l(1,e),l(3,t),l(1,e),l(3,t),l(1,e),l(1,n)],[l(2,n),l(1,e),l(3,t),l(3,e),l(3,t),l(1,e),l(2,n)],[l(3,n),l(2,e),l(5,t),l(2,e),l(3,n)],[l(5,n),l(5,e),l(5,n)]]};(r=i||(i={})).ASCII_3x4="ASCII_3x4",r.PIXELMOJIS="PIXELMOJIS"},7418:function(t,e,n){n.r(e),n.d(e,{EMOJI_MART:function(){return l},SMILEY_BALL:function(){return o},TEXTURE_TYPES:function(){return a}});class r{constructor(t){this.main=t.main,this.background=t.background,this.border=t.border,this.outline=t.outline,Object.preventExtensions(this)}}var i,a,l={options:{skin:"1",size:"2em",set:"native",fallback:":shrug:"},initialVal:new r({main:"\uD83C\uDF15",background:"\uD83C\uDF11",border:"\uD83D\uDE80",outline:!1})},o={options:{skin:"1",size:"16px",set:"twitter",fallback:":shrug:"},initialVal:new r({main:"\uD83D\uDE42",background:"♾️",border:"\uD83D\uDE80",outline:!1})};(i=a||(a={})).EMOJI_MART="EMOJI_MART",i.SMILEY_BALL="SMILEY_BALL"}}]);