(this["webpackJsonpno-traps"]=this["webpackJsonpno-traps"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/hand.9c2bab28.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/head.ddea961c.svg"},function(e,t,a){e.exports=a.p+"static/media/hand-waiting.58d60422.svg"},function(e,t,a){e.exports=a.p+"static/media/hand-with-cursor.1c9461d3.svg"},function(e,t,a){e.exports=a.p+"static/media/hand-surfs-up.40c9faa0.svg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),i=a(6),o=a(7),u=a(2),l=a(12),d=a(13),b=a(1),m=(a(19),a(8)),g=a.n(m),f=a(3),v=a.n(f),h=a(9),p=a.n(h),E=a(10),O=a.n(E),j=a(11),k=a.n(j),w={head:g.a,waiting:v.a,stalking:p.a,grabbing:v.a,grabbed:O.a,shaka:k.a};Object.keys(w).forEach((function(e){(new Image).src=w[e]}));var y=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),r=a[0],c=a[1],s=function(){return c(!0)},i=function(){return c(!1)};return Object(n.useEffect)((function(){return e.current.addEventListener("mouseenter",s),e.current.addEventListener("mouseleave",i),function(){e.current.removeEventListener("mouseenter",s),e.current.removeEventListener("mouseleave",i)}}),[e]),[e,r]},x=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={debug:!1,cursorGrabbed:!1,gameOver:!1},n.handleToggleDebug=n.handleToggleDebug.bind(Object(u.a)(n)),n.handleButtonClicked=n.handleButtonClicked.bind(Object(u.a)(n)),n.handleCursorGrabbed=n.handleCursorGrabbed.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleToggleDebug",value:function(){this.setState({debug:!this.state.debug})}},{key:"handleCursorGrabbed",value:function(){var e=this;this.setState({cursorGrabbed:!0}),setTimeout((function(){e.setState({cursorGrabbed:!1})}),2e3)}},{key:"handleButtonClicked",value:function(){var e=this;this.setState({gameOver:!0}),setTimeout((function(){e.setState({gameOver:!1})}),4e3)}},{key:"render",value:function(){var e=this.state,t=e.cursorGrabbed,a=e.gameOver,n=t?{cursor:"none"}:{},c=e.debug?"app app--debug":"app";return r.a.createElement("div",{className:c,style:n},r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"Hi There!"),r.a.createElement("h2",null,"Welcome to a frontend testing."),r.a.createElement("p",null,"This is a classic website, no traps or weird stuff!"),r.a.createElement("p",null,"Could you do a test to see if everything is working fine here, I don't know, for example the button down there?")),r.a.createElement("button",{className:"trap-button",onClick:this.handleButtonClicked},a&&"Nice one",t&&"Gotcha!",!a&&!t&&"Button!"),r.a.createElement("div",{className:"grab-zone-wrapper"},r.a.createElement(_,{onCursorGrabbed:this.handleCursorGrabbed,cursorGrabbed:t,gameOver:a})))}}]),a}(r.a.Component),_=function(e){var t=e.cursorGrabbed,a=e.gameOver,c=e.onCursorGrabbed,s=y(),i=Object(b.a)(s,2),o=i[0],u=i[1],l=y(),d=Object(b.a)(l,2),m=d[0],g=d[1],f=Object(n.useState)(!1),v=Object(b.a)(f,2),h=v[0],p=v[1],E="waiting";return u&&(E="stalking"),g&&(E="grabbing"),t&&(E="grabbed"),a&&(E="shaka"),Object(n.useEffect)((function(){var e;return"grabbing"===E&&(e=setTimeout((function(){p(!0),e=null}),2e3)),function(){p(!1),e&&clearTimeout(e)}}),[E]),r.a.createElement("div",{className:"grab-zone",ref:o},r.a.createElement("div",{className:"grab-zone__debug"},r.a.createElement("strong",null,"Debug info:"),r.a.createElement("p",null,"Current state: ",E),r.a.createElement("p",null,"Extended arm: ",h?"Yes":"No")),r.a.createElement("div",{className:"grab-zone__danger",ref:m},r.a.createElement(C,{state:E,gameOver:a,extended:h,onCursorGrabbed:c})))},C=function(e){var t=e.state,a=e.gameOver,c=e.extended,s=e.onCursorGrabbed,i=function(){var e=Object(n.useState)({x:0,y:0}),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(e){return r({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),a}(),o=function(){var e=Object(n.useRef)(),t=Object(n.useState)({}),a=Object(b.a)(t,2),r=a[0],c=a[1],s=function(){c(e.current.getBoundingClientRect())};return Object(n.useLayoutEffect)((function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[e.current]),[e,r]}(),u=Object(b.a)(o,2),l=u[0],d=u[1],m=d.left+.5*d.width,g=d.top+.5*d.height,f=a?0:Math.atan2(i.x-m,-(i.y-g))*(180/Math.PI),v=Math.min(Math.max(parseInt(f),-79),79),h="grabber grabber--".concat(t," ").concat(c&&"grabber--extended"),p={transform:"rotate(".concat(v,"deg)")},E=w[t];return r.a.createElement("div",{className:h},r.a.createElement("div",{className:"grabber__body"}),r.a.createElement("img",{className:"grabber__face",src:w.head}),r.a.createElement("div",{className:"grabber__arm-wrapper",ref:l,style:p},r.a.createElement("div",{className:"grabber__arm"},r.a.createElement("img",{className:"grabber__hand",src:E,onMouseEnter:s}))))},N=function(){return r.a.createElement("div",{style:G.div},r.a.createElement(x,null),r.a.createElement("div",{style:G.indiv},r.a.createElement("a",{href:"https://codepen.io/bnhovde/pen/OJLYGKx",target:"_blank",style:G.link},r.a.createElement("p",{className:"footer_link_text"},"Credit: Bard Hovde")),r.a.createElement("a",{href:"https://github.com/mgunsd/NoWeirdStuff",target:"_blank",style:G.link},r.a.createElement("p",{className:"footer_link_text"},"Repo"))))},G={div:{minHeight:"100vh"},link:{},indiv:{display:"flex",flexDirection:"row",marginRight:"3vh",marginLeft:"3vh",marginTop:"-2vh",marginBottom:"0",justifyContent:"space-between"}};s.a.render(r.a.createElement(N,null),document.querySelector("#root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.2181ee01.chunk.js.map