(this["webpackJsonpcolour-match"]=this["webpackJsonpcolour-match"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),u=n.n(o),c=(n(12),n(1)),s=n(6),i={range:function(e,t,n){return Array.from({length:(t-e)/n+1},(function(t,a){return e+a*n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},shuffle:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t+1),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}},l=function(e){return r.a.createElement("button",{className:"c-number ".concat(e.status),onClick:function(){return e.onClick(e.number,e.status)}},r.a.createElement("span",null,e.number))},g=function(e){return r.a.createElement("button",{onClick:e.onClick},"Play Again")},f=r.a.forwardRef((function(e,t){return r.a.createElement("audio",{autoPlay:!0,preload:"true","data-seq":e.seqState,onEnded:function(){return e.onEnded(e)},src:"".concat("","/assets/audio").concat(e.src),ref:t,type:"audio/ogg"})})),m=function(e){var t=function(){var e=Object(a.useState)(i.shuffle(i.range(0,20,1)).splice(9,9)),t=Object(c.a)(e,1)[0],n=Object(a.useState)(i.shuffle(Object(s.a)(t))),o=Object(c.a)(n,2),u=o[0],l=o[1],g=Object(a.useState)(u[0]),f=Object(c.a)(g,2),m=f[0],d=f[1],b=r.a.createRef(),h=Object(a.useState)("/floyd_and_roly_need_your_help_to_knock.ogg"),p=Object(c.a)(h,2),_=p[0],v=p[1],S=Object(a.useState)(["/prompts/for_this_job_youll_need_to_find.ogg","/prompts/numbers.ogg","/ready.ogg","/prompts/find_the_number.ogg","/numbers/".concat(m,".ogg")]),E=Object(c.a)(S,2);return{availableNumbers:u,playNumbers:t,currentNumber:m,setGameState:function(e){l(e),d(e[0])},audioRef:b,audioState:_,seqState:E[0],setSeqState:E[1],setAudioState:v}}(),n=t.availableNumbers,o=t.playNumbers,u=t.currentNumber,m=t.setGameState,d=t.audioRef,b=t.audioState,h=t.seqState,p=t.setSeqState,_=t.setAudioState,v=function(e){return n.includes(e)?"available":"used"},S=function(e,t){if("used"!==t)if(u===e){var a=n.filter((function(e){return e!==u}));_("/sfx/ca.ogg"),a.length>0?p(["/sfx/lever.ogg","/sfx/airup.ogg","/sfx/punch2.ogg","/prompts/find_the_number.ogg","/numbers/".concat(a[0],".ogg")]):p(["/sfx/lever.ogg","/sfx/airup.ogg","/sfx/punch2.ogg","/building_collapse.ogg","/that_building_is_outta_here.ogg","/sfx/tada.ogg"]);var r=setTimeout((function(){m(a),clearTimeout(r)}),2600)}else _("/sfx/wa.ogg"),p(["/prompts/oops_thats.ogg","/numbers/".concat(e,".ogg"),"/prompts/find_the_number.ogg","/numbers/".concat(u,".ogg")])};return r.a.createElement("div",{className:"c-number-container"},r.a.createElement(f,{onEnded:function(e){var t=d.current.getAttribute("data-seq").split(",");t.length>0&&(_(t[0]),t.splice(0,1),p(t))},ref:d,src:b,seqState:h}),0===n.length?r.a.createElement(g,{onClick:e.startNewGame}):"",r.a.createElement("div",{className:"o-numbers-grid"},o.map((function(e){return r.a.createElement(l,{key:e,number:e,status:v(e),onClick:S})}))))},d=(n(13),function(){var e=Object(a.useState)(1),t=Object(c.a)(e,2),n=t[0],o=t[1];return r.a.createElement(m,{key:n,startNewGame:function(){return o(n+1)}})});var b=function(){return r.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3053624c.chunk.js.map