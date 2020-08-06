(this["webpackJsonpno-traps"]=this["webpackJsonpno-traps"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(5),u=a(6),i=a(2),b=a(7),l=a(8),d=a(1),m=(a(14),"https://github.com/mgunsd/NoWeirdStuff/tree/master/src/assets"),g={head:"".concat(m,"/head.svg"),waiting:"".concat(m,"/hand.svg"),stalking:"".concat(m,"/hand-waiting.svg"),grabbing:"".concat(m,"/hand.svg"),grabbed:"".concat(m,"/hand-with-cursor.svg"),shaka:"".concat(m,"/hand-surfs-up.svg")};Object.keys(g).forEach((function(e){(new Image).src=g[e]}));var h=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],c=a[1],s=function(){return c(!0)},o=function(){return c(!1)};return Object(n.useEffect)((function(){return e.current.addEventListener("mouseenter",s),e.current.addEventListener("mouseleave",o),function(){e.current.removeEventListener("mouseenter",s),e.current.removeEventListener("mouseleave",o)}}),[e]),[e,r]},v=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={debug:!1,cursorGrabbed:!1,gameOver:!1},n.handleToggleDebug=n.handleToggleDebug.bind(Object(i.a)(n)),n.handleButtonClicked=n.handleButtonClicked.bind(Object(i.a)(n)),n.handleCursorGrabbed=n.handleCursorGrabbed.bind(Object(i.a)(n)),n}return Object(u.a)(a,[{key:"handleToggleDebug",value:function(){this.setState({debug:!this.state.debug})}},{key:"handleCursorGrabbed",value:function(){var e=this;this.setState({cursorGrabbed:!0}),setTimeout((function(){e.setState({cursorGrabbed:!1})}),2e3)}},{key:"handleButtonClicked",value:function(){var e=this;this.setState({gameOver:!0}),setTimeout((function(){e.setState({gameOver:!1})}),4e3)}},{key:"render",value:function(){var e=this.state,t=e.cursorGrabbed,a=e.gameOver,n=t?{cursor:"none"}:{},c=e.debug?"app app--debug":"app";return r.a.createElement("div",{className:c,style:n},r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"Hello!"),r.a.createElement("h2",null,"Welcome to the internet."),r.a.createElement("p",null,"This is a classic website, no traps or weird stuff!"),r.a.createElement("p",null,"Feel free to browse, relax and, I don't know, click the button down there? Might as well, right?"),r.a.createElement("button",{className:"debug-button",onClick:this.handleToggleDebug},"Debug")),r.a.createElement("button",{className:"trap-button",onClick:this.handleButtonClicked},a&&"Nice one",t&&"Gotcha!",!a&&!t&&"Button!"),r.a.createElement("div",{className:"grab-zone-wrapper"},r.a.createElement(f,{onCursorGrabbed:this.handleCursorGrabbed,cursorGrabbed:t,gameOver:a})))}}]),a}(r.a.Component),f=function(e){var t=e.cursorGrabbed,a=e.gameOver,c=e.onCursorGrabbed,s=h(),o=Object(d.a)(s,2),u=o[0],i=o[1],b=h(),l=Object(d.a)(b,2),m=l[0],g=l[1],v=Object(n.useState)(!1),f=Object(d.a)(v,2),O=f[0],p=f[1],j="waiting";return i&&(j="stalking"),g&&(j="grabbing"),t&&(j="grabbed"),a&&(j="shaka"),Object(n.useEffect)((function(){var e;return"grabbing"===j&&(e=setTimeout((function(){p(!0),e=null}),2e3)),function(){p(!1),e&&clearTimeout(e)}}),[j]),r.a.createElement("div",{className:"grab-zone",ref:u},r.a.createElement("div",{className:"grab-zone__debug"},r.a.createElement("strong",null,"Debug info:"),r.a.createElement("p",null,"Current state: ",j),r.a.createElement("p",null,"Extended arm: ",O?"Yes":"No")),r.a.createElement("div",{className:"grab-zone__danger",ref:m},r.a.createElement(E,{state:j,gameOver:a,extended:O,onCursorGrabbed:c})))},E=function(e){var t=e.state,a=e.gameOver,c=e.extended,s=e.onCursorGrabbed,o=function(){var e=Object(n.useState)({x:0,y:0}),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(e){return r({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),a}(),u=function(){var e=Object(n.useRef)(),t=Object(n.useState)({}),a=Object(d.a)(t,2),r=a[0],c=a[1],s=function(){c(e.current.getBoundingClientRect())};return Object(n.useLayoutEffect)((function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[e.current]),[e,r]}(),i=Object(d.a)(u,2),b=i[0],l=i[1],m=l.left+.5*l.width,h=l.top+.5*l.height,v=a?0:Math.atan2(o.x-m,-(o.y-h))*(180/Math.PI),f=Math.min(Math.max(parseInt(v),-79),79),E="grabber grabber--".concat(t," ").concat(c&&"grabber--extended"),O={transform:"rotate(".concat(f,"deg)")},p=g[t];return r.a.createElement("div",{className:E},r.a.createElement("div",{className:"grabber__body"}),r.a.createElement("img",{className:"grabber__face",src:g.head}),r.a.createElement("div",{className:"grabber__arm-wrapper",ref:b,style:O},r.a.createElement("div",{className:"grabber__arm"},r.a.createElement("img",{className:"grabber__hand",src:p,onMouseEnter:s}))))};s.a.render(r.a.createElement(v,null),document.querySelector("#root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.37f01ce7.chunk.js.map