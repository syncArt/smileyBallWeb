(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6092:function(t,e,a){Promise.resolve().then(a.bind(a,1841))},1841:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return B}});var n=a(7437),i=a(9671),l=a.n(i),r=a(972),o=a(8171),s=a(2265),u=a(7418);let c=()=>{let[t,e]=(0,s.useState)(!1),[a,n]=(0,s.useState)(!1),[i,l]=(0,s.useState)(!1);return[{isColumn:t,isBorder:a,isSquare:i},{switchGrid:e,setBorder:n,setSquare:l}]};class d{constructor(t){this.letter=t.letter,this.builder=t.builder,this.defaultOptions=t.defaultOptions,this.resolution=t.resolution,this.data=t.data,Object.preventExtensions(this)}}let m=()=>{let[t,e]=(0,s.useState)();return[t,e]},h=()=>{let[t,e]=(0,s.useState)(null);return[{...t,initializePalette:t=>{e(t)}},(t,a)=>{switch(t){case"main":e(t=>({...t,main:a}));break;case"background":e(t=>({...t,background:a}));break;case"border":e(t=>({...t,border:a}));break;case"outline":e(t=>({...t,outline:a}));break;default:throw Error("changeEmoji is fucked up")}}]};var g=a(1333);let p=(t,e,a)=>{let n={};Object.keys(t).forEach(a=>{let i=t[a](e.initialVal.main,e.initialVal.background),l={y:e.initialVal.outline?i.length+2:i.length,x:(e.initialVal.outline,i[0].length)},r=[(0,g.fr)(i[0].length,e.initialVal.background),...i,(0,g.fr)(i[0].length,e.initialVal.background)],o=new d({letter:a,builder:t[a],defaultOptions:e.options,data:e.initialVal.outline?r:i,resolution:l});n={...n,[a]:o}}),a({lib:n,texture:e})},_=async(t,e,n)=>{let i=Promise.resolve().then(a.bind(a,1607)).then(e=>e[t]),l=Promise.resolve().then(a.bind(a,7418)).then(t=>t[e]);try{await Promise.all([i,l]).then(t=>{let[e,a]=t;p(e,a,n)})}catch(t){console.error("THERE WAS AN ERROR BUILDING LIB. check LettersLib")}},E=(t,e,a)=>{let n={},i={...e,...a};return Object.keys(t).forEach(e=>{var a;let l=null===(a=t[e])||void 0===a?void 0:a.builder(i.main,i.background),r=[(0,g.fr)(l[0].length,i.background),...l,(0,g.fr)(l[0].length,i.background)];n[e]={...t[e],data:i.outline?r:l}}),n},f=(t,e)=>{let[a,n]=(0,s.useState)(null),[i,l]=m(),[{initializePalette:r,...o},u]=h();return(0,s.useEffect)(()=>{_(t,e,t=>{let{lib:e,texture:a}=t;n(e),l(a.options),r(a.initialVal)})},[]),console.log("lib",a),[a,{palette:o,letterOptions:i,changeEmoji:(t,e)=>{n(a=>E(a,o,{[t]:e})),u(t,e)},setLetterOptions:l}]},b=(t,e)=>t.map(t=>e(t)),x=(t,e)=>Array.from({length:null==t?void 0:t.reduce((t,e)=>t>e.resolution.y?t:e.resolution.y,0)},(t,e)=>e).map(a=>t.reduce((n,i,l)=>{if(i.data[a])return t.length-1===l?"".concat(n).concat(i.data[a]):"".concat(n).concat(i.data[a],",").concat(e.background,",");{let t=Array.from({length:i.resolution.x},(t,a)=>e.background);return"".concat(n).concat(t.flat())}},"")),j=(t,e)=>{let[a,n]=(0,s.useState)(""),[i,l]=(0,s.useState)({x:0,y:0}),[r,{palette:o,letterOptions:u,changeEmoji:c}]=f(e,t),d=(0,s.useCallback)(()=>(null==r?void 0:r.a)&&a?a.split("\n").filter(t=>!!t).map(t=>t.split("").map(t=>r[t])):[],[r,a])();return console.log("textGrid",d),[{textGrid:b(d,t=>(console.log("word",t),t.reduce((t,e)=>t+e.resolution.x,0),t.length,x(t,o))),inputText:a,palette:o,lib:r,letterOptions:u},{setText:n,changeEmoji:c}]};var v=a(6648),k=a(1607);function B(){var t;let e=u.TEXTURE_TYPES.EMOJI_MART,a=u.TEXTURE_TYPES.SMILEY_BALL,i=k.LIB_TYPES.ASCII_3x4,r=k.LIB_TYPES.PIXELMOJIS,o=j(e,i),[{lib:d},m]=j(a,r),[{textGrid:h,inputText:g,palette:p,letterOptions:_,lib:E},{changeEmoji:f,setText:b}]=o,[{isColumn:x,isBorder:B,isSquare:S},{switchGrid:I,setBorder:y,setSquare:N}]=c(),[w,L]=(0,s.useState)(""),[D,O]=(0,s.useState)(!1);return(0,s.useRef)(null),(0,n.jsx)("main",{className:l().main,children:(0,n.jsxs)("div",{className:l().contentWrapper,children:[(0,n.jsx)("div",{className:l().topBar,children:(0,n.jsxs)("div",{className:l().topBarSmiley,children:[(0,n.jsx)(v.default,{alt:"logo",src:"/logo.svg",width:"200",height:"50"}),(0,n.jsx)("span",{className:l().smilingEmoji,children:"\uD83D\uDE42"})]})}),(0,n.jsx)("div",{className:l().smilingEmojiBox,children:d&&Object.values(d).length>0?null===(t=Object.values(d)[0].data)||void 0===t?void 0:t.map((t,e)=>(0,n.jsx)("div",{className:l().smilingEmojiBoxRow,children:null==t?void 0:t.map((t,e)=>(0,n.jsx)("span",{className:l().smilingEmojiBoxEmoji,children:t},"singleChar-".concat(e)))},"row-".concat(e))):null}),(0,n.jsx)("div",{className:l().happyNfts,children:(0,n.jsx)(v.default,{alt:"happyNfts",src:"/happyNfts.svg",width:"300",height:"50"})}),(0,n.jsxs)("div",{className:l().bottomBar,children:[(0,n.jsx)("div",{className:l().bottomElement,children:(0,n.jsx)("a",{href:"https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=e45g2-taaaa-aaaan-qmn5q-cai",children:(0,n.jsx)(v.default,{alt:"coin",src:"/coin.svg",width:"150",height:"50"})})}),(0,n.jsx)("div",{className:l().bottomElement,children:(0,n.jsx)("a",{href:"/SmileyBall.pdf",children:(0,n.jsx)(v.default,{alt:"watwat",src:"/watwat.svg",width:"150",height:"50"})})})]})]})})}(0,r.S1)({data:o})},1333:function(t,e,a){"use strict";a.d(e,{fr:function(){return n}});let n=(t,e)=>Array.from({length:t},()=>e);e.Z={a:(t,e)=>[[e,...n(2,t)],[t,e,t],n(3,t),[t,e,t]],b:(t,e)=>[[t,...n(2,e)],n(3,t),[t,e,t],n(3,t)],c:(t,e)=>[n(3,t),[t,...n(2,e)],[t,...n(2,e)],n(3,t)],d:(t,e)=>[[...n(2,t),e],[t,e,t],[t,e,t],[...n(2,t),e]],e:(t,e)=>[n(3,t),[t,...n(2,e)],[...n(2,t),e],n(3,t)],f:(t,e)=>[n(3,t),[t,...n(2,e)],[...n(2,t),e],[t,...n(2,e)]],g:(t,e)=>[n(3,t),[t,...n(2,e)],[t,e,t],n(3,t)],h:(t,e)=>[[t,e,t],[t,e,t],n(3,t),[t,e,t]],i:(t,e)=>[[t],[t],[t],[t]],j:(t,e)=>[[...n(2,e),t],[...n(2,e),t],[t,e,t],n(3,t)],k:(t,e)=>[[t,e,t],[...n(2,t),e],[t,e,t],[t,e,t]],l:(t,e)=>[[t,...n(2,e)],[t,...n(2,e)],[t,...n(2,e)],n(3,t)],m:(t,e)=>[[...n(2,t),e,...n(2,t)],[t,e,t,e,t],[t,e,t,e,t],[t,...n(3,e),t]],n:(t,e)=>[[t,...n(2,e),t],[...n(2,t),e,t],[t,e,...n(2,t)],[t,...n(2,e),t]],o:(t,e)=>[n(3,t),[t,e,t],[t,e,t],n(3,t)],p:(t,e)=>[n(3,t),[t,e,t],n(3,t),[t,...n(2,e)]],r:(t,e)=>[n(3,t),[t,e,t],[...n(2,t),e],[t,e,t]],s:(t,e)=>[n(2,t),[t,e],[e,t],n(2,t)],t:(t,e)=>[n(3,t),[e,t,e],[e,t,e],[e,t,e]],u:(t,e)=>[[t,e,t],[t,e,t],[t,e,t],n(3,t)],w:(t,e)=>[[t,e,t,e,t],[t,e,t,e,t],[t,e,t,e,t],[e,t,e,t,e]],z:(t,e)=>[n(2,t),[e,t],[t,e],n(2,t)],x:(t,e)=>[[t,e,t],[e,t,e],[t,e,t],[t,e,t]],y:(t,e)=>[[t,e,t],n(3,t),[e,t,e],[e,t,e]],q:(t,e)=>[n(3,t),[t,e,t],n(3,t),[...n(2,e),t]],v:(t,e)=>[[t,e,t],[t,e,t],[t,e,t],[e,t,e]],0:(t,e)=>[[t,t,t],[t,e,t],[t,e,t],[t,t,t]],1:(t,e)=>[[t,t,e],[e,t,e],[e,t,e],[t,t,t]],2:(t,e)=>[[t,t,t],[e,e,t],[t,t,e],[t,t,t]],3:(t,e)=>[[t,t,t],[e,t,e],[e,e,t],[t,t,t]],4:(t,e)=>[[t,e,t],[t,e,t],[t,t,t],[e,e,t]],5:(t,e)=>[[t,t,t],[t,e,e],[e,t,t],[t,t,t]],6:(t,e)=>[[t,t,t],[t,e,e],[t,t,t],[t,t,t]],7:(t,e)=>[[t,t,t],[e,e,t],[e,t,e],[e,t,e]],8:(t,e)=>[[t,t,t],[t,e,t],[t,t,t],[t,t,t]],9:(t,e)=>[[t,t,t],[t,e,t],[t,t,t],[e,e,t]],":":(t,e)=>[[e],[t],[e],[t]],"!":(t,e)=>[[t],[t],[e],[t]],")":(t,e)=>[[t,e],[e,t],[e,t],[t,e]],"(":(t,e)=>[[e,t],[t,e],[t,e],[e,t]],".":(t,e)=>[[e],[e],[e],[t]],"?":(t,e)=>[[t,t,t,t],[e,e,e,t],[e,t,t,e],[e,t,e,e]]," ":(t,e)=>[[e],[e],[e],[e]]}},1607:function(t,e,a){"use strict";a.r(e),a.d(e,{ASCII_3x4:function(){return l.Z},LIB_TYPES:function(){return i},PIXELMOJIS:function(){return o}});var n,i,l=a(1333);let r=(t,e)=>Array.from({length:t},()=>e);var o={1:(t,e,a)=>[[r(5,a),r(5,e),r(5,a)],[r(3,a),r(2,e),r(5,t),r(2,e),r(5,a)],[r(2,a),r(1,e),r(9,t),r(1,e),r(2,a)],[r(1,a),r(1,e),r(11,t),r(1,e),r(1,a)],[r(1,a),r(1,e),r(3,t),r(1,e),r(3,t),r(1,e),r(3,t),r(1,e),r(1,a)],[r(1,e),r(4,t),r(1,e),r(3,t),r(1,e),r(4,t),r(1,e)],[r(1,e),r(4,t),r(1,e),r(3,t),r(1,e),r(4,t),r(1,e)],[r(1,e),r(13,t),r(1,e)],[r(1,e),r(2,t),r(1,e),r(7,t),r(1,e),r(2,t),r(1,e)],[r(1,e),r(2,t),r(1,e),r(7,t),r(1,e),r(2,t),r(1,e)],[r(1,a),r(1,e),r(2,t),r(1,e),r(5,t),r(1,e),r(2,t),r(1,e),r(1,a)],[r(1,a),r(1,e),r(3,t),r(5,e),r(3,t),r(1,e),r(1,a)],[r(2,a),r(1,e),r(9,t),r(1,e),r(2,a)],[r(3,a),r(2,e),r(5,t),r(2,e),r(5,a)],[r(5,a),r(5,e),r(5,a)]]};(n=i||(i={})).ASCII_3x4="ASCII_3x4",n.PIXELMOJIS="PIXELMOJIS"},7418:function(t,e,a){"use strict";a.r(e),a.d(e,{EMOJI_MART:function(){return r},SMILEY_BALL:function(){return o},TEXTURE_TYPES:function(){return l}});class n{constructor(t){this.main=t.main,this.background=t.background,this.border=t.border,this.outline=t.outline,Object.preventExtensions(this)}}var i,l,r={options:{skin:"1",size:"2em",set:"apple",fallback:":shrug:"},initialVal:new n({main:"\uD83C\uDF15",background:"\uD83C\uDF11",border:"\uD83D\uDE80",outline:!1})},o={options:{skin:"1",size:"2em",set:"apple",fallback:":shrug:"},initialVal:new n({main:"\uD83D\uDE42",background:"\uD83C\uDF11",border:"\uD83D\uDE80",outline:!1})};(i=l||(l={})).EMOJI_MART="EMOJI_MART",i.SMILEY_BALL="SMILEY_BALL"},9671:function(t){t.exports={main:"page_main__GlU4n",contentWrapper:"page_contentWrapper__YBAIW",topBar:"page_topBar__N6Ucl",smilingEmoji:"page_smilingEmoji__n723t",rotateY:"page_rotateY__YFyT4",navBar:"page_navBar__YFHxz",navBarElement:"page_navBarElement__OnCcD",smilingEmojiBox:"page_smilingEmojiBox__BfEq2",gradient:"page_gradient__Jz1Xx",topBarSmiley:"page_topBarSmiley__gUApQ",bottomBar:"page_bottomBar__NkeZm",bottomElement:"page_bottomElement__d8koz",smilingEmojiBoxRow:"page_smilingEmojiBoxRow__G6iDl",smilingEmojiBoxEmoji:"page_smilingEmojiBoxEmoji__WWsyz",happyNfts:"page_happyNfts__Htn2c"}}},function(t){t.O(0,[967,744,10,648,971,23,560],function(){return t(t.s=6092)}),_N_E=t.O()}]);