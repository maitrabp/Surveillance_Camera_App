(this.webpackJsonpcamera_app=this.webpackJsonpcamera_app||[]).push([[0],{244:function(e,t,n){},272:function(e,t,n){e.exports=n(308)},277:function(e,t,n){},283:function(e,t){},284:function(e,t){},292:function(e,t){},295:function(e,t){},296:function(e,t){},308:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n.n(a),c=n(203),o=n.n(c),i=(n(277),n(8)),s=n(199),l=n(45),u=n(19),d=n(96),b=function(e,t){switch(t.type){case"ADD_VIDEO":return e.videos.push(Object(d.a)({},t.payload)),Object(d.a)(Object(d.a)({},e),{},{videos:Object(u.a)(e.videos)});default:return Object(d.a)({},e)}},f={videos:[]},m=Object(a.createContext)(f),h=function(e){var t=e.children,n=Object(a.useReducer)(b,f),c=Object(i.a)(n,2),o=c[0],s=c[1];return r.a.createElement(m.Provider,{value:{videos:o.videos,addVideo:function(e){s({type:"ADD_VIDEO",payload:e})}}},t)};var v=function(){var e=Object(a.useContext)(m).videos;return console.log(e),r.a.createElement("div",{className:"row p-3 h-70"},r.a.createElement("h5",{className:"display-6 d-flex justify-content-center",style:{width:"100%"}},"Records:"),r.a.createElement("hr",null),e.length?e.map((function(e){return r.a.createElement("div",{className:"card mt-3 w-100",key:e.title},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},e.title),r.a.createElement("div",{className:"embed-responsive embed-responsive-21by9 border border-white"},r.a.createElement("video",{className:"embed-responsive-item",controls:!0,src:e.href}))))})):null)},p=n(5),x=n.n(p),g=n(13),y=n(270),w=(n(306),n(244),function(e){var t=e.getContext("2d"),n=window.devicePixelRatio,a=e.width/n,r=e.height/n;return{setWidth:function(t){a=t,e.style.width=t+"px",e.width=t*n},setHeight:function(t){r=t,e.style.height=t+"px",e.height=t*n},width:a,height:r,clearAll:function(){return t.clearRect(0,0,a*n,r*n)},clearRect:function(e,a,r,c){return t.clearRect(e*n,a*n,r*n,c*n)},setFont:function(e){var a=parseInt(e,10)*n,r=e.replace(/^\d+px/,a+"px");t.font=r},setTextBaseLine:function(e){t.textBaseline=e},setStrokeStyle:function(e){t.strokeStyle=e},setLineWidth:function(e){t.lineWidth=e*n},strokeRect:function(e,a,r,c){return t.strokeRect(e*n,a*n,r*n,c*n)},setFillStyle:function(e){t.fillStyle=e},measureText:function(e){var a=t.measureText(e);return{width:a.width/n,actualBoundingBoxLeft:a.actualBoundingBoxLeft/n,actualBoundingBoxRight:a.actualBoundingBoxRight/n,actualBoundingBoxAscent:a.actualBoundingBoxAscent/n,actualBoundingBoxDescent:a.actualBoundingBoxDescent/n}},fillRect:function(e,a,r,c){return t.fillRect(e*n,a*n,r*n,c*n)},fillText:function(e,a,r){return t.fillText(e,a*n,r*n)}}}),E=function(e){var t=(100*e.score).toFixed(1);return"".concat(e.class," ").concat(t,"%")},j=function(e,t){var n="".concat(16,"px 'ibm-plex-sans', Helvetica Neue, Arial, sans-serif");e.setFont(n),e.setTextBaseLine("top");var a=parseInt(n,10);t.forEach((function(t){var n=t.bbox[0],r=t.bbox[1],c=t.bbox[2],o=t.bbox[3],i=E(t);e.setStrokeStyle("#0062ff"),e.setLineWidth(4),e.strokeRect(Math.round(n),Math.round(r),Math.round(c),Math.round(o)),e.setFillStyle("#0062ff");var s=e.measureText(i).width;e.fillRect(Math.round(n-2),Math.round(r-(a+8)-6),Math.round(s+16),Math.round(a+8))})),t.forEach((function(t){var n=t.bbox[0],r=t.bbox[1],c=E(t);e.setFillStyle("#ffffff"),e.fillText(c,Math.round(n-2+8),Math.round(r-(a+8)-6+4))}))};var O=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useRef)(null),o=Object(a.useRef)(null),i=Object(a.useRef)(null),s=Object(a.useRef)([]),l=Object(a.useRef)(null),u=Object(a.useRef)(!1),b=Object(a.useRef)(!1),f=Object(a.useContext)(m).addVideo;function h(){return v.apply(this,arguments)}function v(){return(v=Object(g.a)(x.a.mark((function e(){var a,r,c,o,l,b,f,m,v,g,y,O,R,S;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.current){e.next=3;break}return E(),e.abrupt("return");case 3:return e.next=5,i.current.detect(t.current);case 5:for(a=e.sent,r=!1,c=t.current.offsetWidth,o=t.current.offsetHeight,l=t.current.videoWidth,b=t.current.videoHeight,f=c/l,m=o/b,v=Math.max(f,m),g=(c-l*v)/2,y=(o-b*v)/2,(O=w(n.current)).setWidth(c),O.setHeight(o),O.clearAll(),R=0;R<a.length;R++)"person"==a[R].class&&(console.log(JSON.stringify(a[R])),r=!0);S=a.map((function(e){if("person"==e.class){var t=e.bbox[0]*v+g,n=e.bbox[1]*v+y,a=e.bbox[2]*v,r=e.bbox[3]*v;return Object(d.a)(Object(d.a)({},e),{},{bbox:[t,n,a,r]})}return Object(d.a)(Object(d.a)({},[]),{},{bbox:[0,0,0,0]})})),j(O,S),r?(p(),s.current.push(!0)):s.current.filter(Boolean).length?(p(),s.current.push(!1)):E(),s.current=s.current.slice(Math.max(s.current.length-10,0)),requestAnimationFrame((function(){h()}));case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){b.current||(b.current=!0,console.log("start recording"),e.changeStreamStatus(!0),l.current=new MediaRecorder(window.stream),l.current.ondataavailable=function(e){var t=new Date+"",n=URL.createObjectURL(e.data);f({href:n,title:t})},l.current.start())}function E(){b.current&&(b.current=!1,e.changeStreamStatus(!1),l.current.stop(),console.log("Stopped recording"),s.current=[])}return Object(a.useEffect)((function(){function e(){return(e=Object(g.a)(x.a.mark((function e(){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.current.setAttribute("disabled",!0),o.current.setAttribute("disabled",!0),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e.next=26;break}return document.querySelector("body").style.visibility="hidden",document.querySelector("#loader").style.visibility="visible",e.prev=5,e.next=8,navigator.mediaDevices.getUserMedia({audio:!0,video:{width:{ideal:4096},height:{ideal:2160}}});case 8:return n=e.sent,window.stream=n,t.current.srcObject=n,e.next=13,y.a();case 13:a=e.sent,i.current=a,c.current.removeAttribute("disabled"),document.querySelector("#loader").style.display="none",document.querySelector("body").style.visibility="visible",e.next=24;break;case 20:e.prev=20,e.t0=e.catch(5),console.error(e.t0),window.alert("No Camera Detected. You must have a camera to run this app");case 24:e.next=27;break;case 26:window.alert("No Camera Detected. You must have a camera to run this app");case 27:case"end":return e.stop()}}),e,null,[[5,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"p-3",style:{maxHeight:"50%"}},r.a.createElement("h6",{className:"d-flex justify-content-center text-info",style:{width:"100%"}},r.a.createElement("b",null,"Surveillance Camera")),r.a.createElement("p",{className:"d-flex justify-content-center",style:{width:"100%"}},"Note: Make sure the lighting is good before you start recording. Once you press start, the application keeps track of movement and stores them as video feeds."),r.a.createElement("div",{id:"videoOutline",className:"embed-responsive embed-responsive-21by9 border border-white"},r.a.createElement("video",{className:"embed-responsive-item",style:{objectFit:"cover"},autoPlay:!0,playsInline:!0,muted:!0,ref:t}),r.a.createElement("canvas",{className:"embed-responsive-item",ref:n})),r.a.createElement("div",{className:"d-flex justify-content-center border border-white"},r.a.createElement("div",{className:"btn-toolbar",role:"toolbar"},r.a.createElement("div",{className:"btn-group m-1",role:"group"},r.a.createElement("button",{className:"btn btn-outline-white btn-block",onClick:function(){u.current=!0,o.current.removeAttribute("disabled"),c.current.setAttribute("disabled",!0),h()},ref:c},"Start")),r.a.createElement("div",{className:"btn-group m-1",role:"group"},r.a.createElement("button",{className:"btn btn-outline-white btn-block",onClick:function(){u.current=!1,c.current.removeAttribute("disabled"),o.current.setAttribute("disabled",!0),E()},ref:o},"Stop")))))},R=n(267),S=n.n(R),k=n(269),N=n.n(k),B=function(){Object(a.useContext)(m).videos;var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];function o(e){c(e)}return r.a.createElement(s.a,{basename:"/"},r.a.createElement(h,null,r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-sm fixed-bottom navbar-info bg-dark border border-white","data-toggle":"affix"},r.a.createElement("div",{class:"d-flex flex-row justify-content-md-center",style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(s.b,{class:"nav-link text-white",style:{label:{flexDirection:"column"}},to:"/"},r.a.createElement(S.a,{fontSize:"large"})," Camera"),!n&&r.a.createElement(s.b,{class:"nav-link text-white",style:{label:{flexDirection:"column"}},to:"/detectedRecords"},r.a.createElement(N.a,{fontSize:"large",style:{marginRight:"0px"}})," Records"))),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(O,Object.assign({},e,{changeStreamStatus:o}))}}),r.a.createElement(l.a,{exact:!0,path:"/detectedRecords",component:v})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[272,1,2]]]);
//# sourceMappingURL=main.0266194f.chunk.js.map