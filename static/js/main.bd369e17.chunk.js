(this.webpackJsonpcamera_app=this.webpackJsonpcamera_app||[]).push([[0],{244:function(e,t,n){},272:function(e,t,n){e.exports=n(308)},277:function(e,t,n){},283:function(e,t){},284:function(e,t){},292:function(e,t){},295:function(e,t){},296:function(e,t){},308:function(e,t,n){"use strict";n.r(t);var r=n(18),a=n.n(r),c=n(203),o=n.n(c),i=(n(277),n(8)),s=n(199),l=n(45),u=n(19),d=n(96),b=function(e,t){switch(t.type){case"ADD_VIDEO":return e.videos.push(Object(d.a)({},t.payload)),Object(d.a)(Object(d.a)({},e),{},{videos:Object(u.a)(e.videos)});default:return Object(d.a)({},e)}},f={videos:[]},m=Object(r.createContext)(f),h=function(e){var t=e.children,n=Object(r.useReducer)(b,f),c=Object(i.a)(n,2),o=c[0],s=c[1];return a.a.createElement(m.Provider,{value:{videos:o.videos,addVideo:function(e){s({type:"ADD_VIDEO",payload:e})}}},t)};var v=function(){var e=Object(r.useContext)(m).videos;return console.log(e),a.a.createElement("div",{className:"row p-3 h-70"},a.a.createElement("h5",{className:"display-6 d-flex justify-content-center",style:{width:"100%"}},"Records:"),a.a.createElement("hr",null),e.length?e.map((function(e){return a.a.createElement("div",{className:"card mt-3 w-100",key:e.title},a.a.createElement("div",{className:"card-body"},a.a.createElement("h6",{className:"card-title"},e.title),a.a.createElement("div",{className:"embed-responsive embed-responsive-21by9 border border-white"},a.a.createElement("video",{className:"embed-responsive-item",controls:!0,src:e.href}))))})):null)},p=n(5),x=n.n(p),g=n(13),y=n(270),w=(n(306),n(244),function(e){var t=e.getContext("2d"),n=window.devicePixelRatio,r=e.width/n,a=e.height/n;return{setWidth:function(t){r=t,e.style.width=t+"px",e.width=t*n},setHeight:function(t){a=t,e.style.height=t+"px",e.height=t*n},width:r,height:a,clearAll:function(){return t.clearRect(0,0,r*n,a*n)},clearRect:function(e,r,a,c){return t.clearRect(e*n,r*n,a*n,c*n)},setFont:function(e){var r=parseInt(e,10)*n,a=e.replace(/^\d+px/,r+"px");t.font=a},setTextBaseLine:function(e){t.textBaseline=e},setStrokeStyle:function(e){t.strokeStyle=e},setLineWidth:function(e){t.lineWidth=e*n},strokeRect:function(e,r,a,c){return t.strokeRect(e*n,r*n,a*n,c*n)},setFillStyle:function(e){t.fillStyle=e},measureText:function(e){var r=t.measureText(e);return{width:r.width/n,actualBoundingBoxLeft:r.actualBoundingBoxLeft/n,actualBoundingBoxRight:r.actualBoundingBoxRight/n,actualBoundingBoxAscent:r.actualBoundingBoxAscent/n,actualBoundingBoxDescent:r.actualBoundingBoxDescent/n}},fillRect:function(e,r,a,c){return t.fillRect(e*n,r*n,a*n,c*n)},fillText:function(e,r,a){return t.fillText(e,r*n,a*n)}}}),E=function(e){var t=(100*e.score).toFixed(1);return"".concat(e.class," ").concat(t,"%")},j=function(e,t){var n="".concat(16,"px 'ibm-plex-sans', Helvetica Neue, Arial, sans-serif");e.setFont(n),e.setTextBaseLine("top");var r=parseInt(n,10);t.forEach((function(t){var n=t.bbox[0],a=t.bbox[1],c=t.bbox[2],o=t.bbox[3],i=E(t);e.setStrokeStyle("#0062ff"),e.setLineWidth(4),e.strokeRect(Math.round(n),Math.round(a),Math.round(c),Math.round(o)),e.setFillStyle("#0062ff");var s=e.measureText(i).width;e.fillRect(Math.round(n-2),Math.round(a-(r+8)-6),Math.round(s+16),Math.round(r+8))})),t.forEach((function(t){var n=t.bbox[0],a=t.bbox[1],c=E(t);e.setFillStyle("#ffffff"),e.fillText(c,Math.round(n-2+8),Math.round(a-(r+8)-6+4))}))};var O=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=Object(r.useRef)(null),o=Object(r.useRef)(null),i=Object(r.useRef)(null),s=Object(r.useRef)([]),l=Object(r.useRef)(null),u=Object(r.useRef)(!1),b=Object(r.useRef)(!1),f=Object(r.useContext)(m).addVideo;function h(){return v.apply(this,arguments)}function v(){return(v=Object(g.a)(x.a.mark((function e(){var r,a,c,o,l,b,f,m,v,g,y,O,R,S;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.current){e.next=3;break}return E(),e.abrupt("return");case 3:return e.next=5,i.current.detect(t.current);case 5:for(r=e.sent,a=!1,c=t.current.offsetWidth,o=t.current.offsetHeight,l=t.current.videoWidth,b=t.current.videoHeight,f=c/l,m=o/b,v=Math.max(f,m),g=(c-l*v)/2,y=(o-b*v)/2,(O=w(n.current)).setWidth(c),O.setHeight(o),O.clearAll(),R=0;R<r.length;R++)"person"==r[R].class&&(console.log(JSON.stringify(r[R])),a=!0);S=r.map((function(e){if("person"==e.class){var t=e.bbox[0]*v+g,n=e.bbox[1]*v+y,r=e.bbox[2]*v,a=e.bbox[3]*v;return Object(d.a)(Object(d.a)({},e),{},{bbox:[t,n,r,a]})}return Object(d.a)(Object(d.a)({},[]),{},{bbox:[0,0,0,0]})})),j(O,S),a?(p(),s.current.push(!0)):s.current.filter(Boolean).length?(p(),s.current.push(!1)):E(),s.current=s.current.slice(Math.max(s.current.length-10,0)),requestAnimationFrame((function(){h()}));case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){b.current||(b.current=!0,console.log("start recording"),e.changeStreamStatus(!0),l.current=new MediaRecorder(window.stream),l.current.ondataavailable=function(e){var t=new Date+"",n=URL.createObjectURL(e.data);f({href:n,title:t})},l.current.start())}function E(){b.current&&(b.current=!1,e.changeStreamStatus(!1),l.current.stop(),console.log("Stopped recording"),s.current=[])}return Object(r.useEffect)((function(){function e(){return(e=Object(g.a)(x.a.mark((function e(){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.current.setAttribute("disabled",!0),o.current.setAttribute("disabled",!0),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e.next=25;break}return document.querySelector("body").style.visibility="hidden",document.querySelector("#loader").style.visibility="visible",e.prev=5,e.next=8,navigator.mediaDevices.getUserMedia({audio:!0,video:{width:{ideal:4096},height:{ideal:2160}}});case 8:return n=e.sent,window.stream=n,t.current.srcObject=n,e.next=13,y.a();case 13:r=e.sent,i.current=r,c.current.removeAttribute("disabled"),document.querySelector("#loader").style.display="none",document.querySelector("body").style.visibility="visible",e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.error(e.t0);case 23:e.next=26;break;case 25:window.alert("No Camera Detected. You must have a camera to run this app");case 26:case"end":return e.stop()}}),e,null,[[5,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a.a.createElement("div",{className:"p-3",style:{maxHeight:"50%"}},a.a.createElement("h6",{className:"d-flex justify-content-center text-info",style:{width:"100%"}},a.a.createElement("b",null,"Surveillance Camera")),a.a.createElement("p",{className:"d-flex justify-content-center",style:{width:"100%"}},"Note: Make sure the lighting is good before you start recording. Once you press start, the application keeps track of movement and stores them as video feeds."),a.a.createElement("div",{id:"videoOutline",className:"embed-responsive embed-responsive-21by9 border border-white"},a.a.createElement("video",{className:"embed-responsive-item",style:{objectFit:"cover"},autoPlay:!0,playsInline:!0,muted:!0,ref:t}),a.a.createElement("canvas",{className:"embed-responsive-item",ref:n})),a.a.createElement("div",{className:"d-flex justify-content-center border border-white"},a.a.createElement("div",{className:"btn-toolbar",role:"toolbar"},a.a.createElement("div",{className:"btn-group m-1",role:"group"},a.a.createElement("button",{className:"btn btn-outline-white btn-block",onClick:function(){u.current=!0,o.current.removeAttribute("disabled"),c.current.setAttribute("disabled",!0),h()},ref:c},"Start")),a.a.createElement("div",{className:"btn-group m-1",role:"group"},a.a.createElement("button",{className:"btn btn-outline-white btn-block",onClick:function(){u.current=!1,c.current.removeAttribute("disabled"),o.current.setAttribute("disabled",!0),E()},ref:o},"Stop")))))},R=n(267),S=n.n(R),k=n(269),N=n.n(k),B=function(){Object(r.useContext)(m).videos;var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];function o(e){c(e)}return a.a.createElement(s.a,{basename:"/"},a.a.createElement(h,null,a.a.createElement("div",null,a.a.createElement("nav",{class:"navbar navbar-expand-sm fixed-bottom navbar-info bg-dark border border-white","data-toggle":"affix"},a.a.createElement("div",{class:"d-flex flex-row justify-content-md-center",style:{width:"100%",display:"flex",justifyContent:"center"}},a.a.createElement(s.b,{class:"nav-link text-white",style:{label:{flexDirection:"column"}},to:"/"},a.a.createElement(S.a,{fontSize:"large"})," Camera"),!n&&a.a.createElement(s.b,{class:"nav-link text-white",style:{label:{flexDirection:"column"}},to:"/detectedRecords"},a.a.createElement(N.a,{fontSize:"large",style:{marginRight:"0px"}})," Records"))),a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(O,Object.assign({},e,{changeStreamStatus:o}))}}),a.a.createElement(l.a,{exact:!0,path:"/detectedRecords",component:v})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[272,1,2]]]);
//# sourceMappingURL=main.bd369e17.chunk.js.map