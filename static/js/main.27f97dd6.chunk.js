(this.webpackJsonpinstagram_react=this.webpackJsonpinstagram_react||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.9e8a2b39.svg"},23:function(e,t,n){e.exports=n.p+"static/media/error.3b8ad90a.png"},24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),s=(n(29),n(16)),i=n.n(s),l=n(12),u=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container h-flex"},r.a.createElement(l.b,{to:"/",className:"logo"},r.a.createElement("img",{src:i.a})),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",className:"menu__links"},"\u041b\u0435\u043d\u0442\u0430")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/profile/",className:"menu__links"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"))))))},m=n(6),f=n(9),d=n(11),p=n(10),h=n(8),v=n.n(h),g=n(14),E=function e(){var t=this;Object(m.a)(this,e),this.getResource=function(){var e=Object(g.a)(v.a.mark((function e(n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n,"; received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPosts=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/posts/");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),this.getAllPhotos=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAllPosts("/");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformPost));case 4:case"end":return e.stop()}}),e)}))),this._transformPost=function(e){return{src:e.src,alt:e.alt}},this._apiBase="http://my-json-server.typicode.com/slavon1265/Insta-Analog"},b=function(e){var t=e.min,n=e.src,a=e.alt,o=e.name;return r.a.createElement("a",{href:"#",className:t?"user min":"user"},r.a.createElement("img",{src:n,alt:a}),r.a.createElement("div",null,o))},w=n(23),k=n.n(w),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:k.a,alt:"error"}))},_=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).InstaService=new E,e.state={posts:[],error:!1},e.onPostsLoaded=function(t){e.setState({posts:t,error:!1})},e.onError=function(t){e.setState({error:!0})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.updatePosts()}},{key:"updatePosts",value:function(){this.InstaService.getAllPosts().then(this.onPostsLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map((function(e){var t=e.name,n=e.altname,a=e.photo,o=e.src,c=e.alt,s=e.descr,i=e.id;return r.a.createElement("div",{key:i,className:"post"},r.a.createElement(b,{src:a,alt:n,name:t,min:"true"}),r.a.createElement("img",{src:o,alt:c}),r.a.createElement("div",{className:"post__name"},t),r.a.createElement("div",{className:"post__descr"},s))}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.posts;if(t)return r.a.createElement(y,null);var a=this.renderItems(n);return r.a.createElement("div",{className:"left"},a)}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).InstaService=new E,e.state={users:[]},e.updateUsers=function(){e.InstaService.getAllPosts().then(e.onUsersLoaded)},e.onUsersLoaded=function(t){e.setState({users:t}),console.log("users: ",t)},e.renderUsers=function(e){return e.map((function(e,t){var n=e.name,a=e.photo,o=e.altname;return r.a.createElement(b,{min:"trues",src:a,alt:o,name:n})}))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.updateUsers()}},{key:"render",value:function(){var e=this.state.users,t=this.renderUsers(e);return r.a.createElement("div",{className:"right"},r.a.createElement(b,{src:"https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg",alt:"profile__photo",name:"John_Doe"}),r.a.createElement("div",{className:"users__block"},t))}}]),n}(a.Component),A=function(){return r.a.createElement("div",{className:"container feed"},r.a.createElement(_,null),r.a.createElement(j,null))},N=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).InstaService=new E,e.state={error:!1,photos:[]},e.onError=function(){e.setState({error:!0})},e.onPhotosLoaded=function(t){e.setState({error:!1,photos:t})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.updatePhotos()}},{key:"updatePhotos",value:function(){this.InstaService.getAllPhotos().then(this.onPhotosLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map((function(e){var t=e.src,n=e.alt;return r.a.createElement("img",{src:t,alt:n})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.photos;if(t)return r.a.createElement(y,null);var a=this.renderItems(n);return r.a.createElement("div",{className:"palette"},a)}}]),n}(a.Component),P=function(){return r.a.createElement("div",{className:"container profile"},r.a.createElement(b,{src:"https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg",alt:"profile__photo",name:"Randoman Intrnatov"}),r.a.createElement(N,null))},O=n(1);var S=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(O.a,{path:"/",component:A,exact:!0}),r.a.createElement(O.a,{path:"/profile",component:P,exact:!0})))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Insta-Analog",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Insta-Analog","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.27f97dd6.chunk.js.map