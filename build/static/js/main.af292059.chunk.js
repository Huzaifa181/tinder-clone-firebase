(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{70:function(e,t,c){},71:function(e,t,c){},82:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(29),i=c.n(n),r=(c(70),c(28)),o=c(11),h=(c.p,c(53)),A=c.n(h),j=c(54),l=c.n(j),d=c(107),m=(c(71),c(52)),p=c.n(m),b=c(4),u=function(e){var t=e.backButton,c=Object(o.f)();return Object(b.jsxs)("div",{className:"header",children:[t?Object(b.jsx)(d.a,{onClick:function(){return c.replace(t)},children:Object(b.jsx)(p.a,{})}):Object(b.jsx)(d.a,{children:Object(b.jsx)(A.a,{className:"header__icon",fontSize:"large"})}),Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{className:"header__logo",src:"https://media-exp1.licdn.com/dms/image/C560BAQHbn-6bAXQP4g/company-logo_200_200/0/1570126074133?e=2159024400&v=beta&t=1c80w5NMsywKLcyRxt7CWJ138x9plCdyLsvVsde_zew",alt:""})}),Object(b.jsx)(r.b,{to:"/chat",children:Object(b.jsx)(d.a,{children:Object(b.jsx)(l.a,{className:"header__icon",fontSize:"large"})})})]})},x=c(36),O=c(55),Q=c.n(O),N=(c(82),c(49)),g=N.a.initializeApp({apiKey:"AIzaSyB7bHojvoVJlQFDVDPT3d6KpfU1EtdQtCU",authDomain:"tinder-clone-96edc.firebaseapp.com",projectId:"tinder-clone-96edc",storageBucket:"tinder-clone-96edc.appspot.com",messagingSenderId:"790180708160",appId:"1:790180708160:web:6ec391956294573d4a44a5"}),E=g.firestore(),y=(g.auth(),new N.a.auth.GoogleAuthProvider,function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){var e;return e=E.collection("people").onSnapshot((function(e){s(e.docs.map((function(e){return e.data()})))})),function(){e()}}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"tinerCards__cardsContainer",children:c.map((function(e){return Object(b.jsx)(Q.a,{className:"swipe",children:Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"card",preventSwipe:["up","down"],children:Object(b.jsx)("h3",{children:e.name})})},e.name)}))})})}),C=c(56),z=c.n(C),V=c(57),f=c.n(V),S=c(58),B=c.n(S),I=c(59),w=c.n(I),W=c(60),k=c.n(W),D=(c(88),function(){return Object(b.jsxs)("div",{className:"swipeButtons",children:[Object(b.jsx)(d.a,{className:"swipeButtons__repeat",children:Object(b.jsx)(z.a,{fontSize:"large"})}),Object(b.jsx)(d.a,{className:"swipeButtons__left",children:Object(b.jsx)(f.a,{fontSize:"large"})}),Object(b.jsx)(d.a,{className:"swipeButtons__star",children:Object(b.jsx)(B.a,{fontSize:"large"})}),Object(b.jsx)(d.a,{className:"swipeButtons__right",children:Object(b.jsx)(w.a,{fontSize:"large"})}),Object(b.jsx)(d.a,{className:"swipeButtons__lightning",children:Object(b.jsx)(k.a,{fontSize:"large"})})]})}),L=(c(89),c(90),c(108)),P=function(e){var t=e.name,c=e.message,a=e.profilePic,s=e.timestamp;return Object(b.jsx)(r.b,{to:"/chat/".concat(t),children:Object(b.jsxs)("div",{className:"chat",children:[Object(b.jsx)(L.a,{className:"chat__image",src:a}),Object(b.jsxs)("div",{className:"chat__details",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:c})]}),Object(b.jsx)("p",{className:"chat__timestamp",children:s})]})})},v=function(){return Object(b.jsx)("div",{className:"chats",children:Object(b.jsx)(P,{name:"Huzaifa",message:"Jd",timestamp:"2:00 pm",profilePic:"data:image/jpeg;base64,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"})})},J=c(61),H=(c(91),function(){var e=Object(a.useState)(),t=Object(x.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([{name:"Huzaifa",image:"https://media-exp1.licdn.com/dms/image/C560BAQHbn-6bAXQP4g/company-logo_200_200/0/1570126074133?e=2159024400&v=beta&t=1c80w5NMsywKLcyRxt7CWJ138x9plCdyLsvVsde_zew",message:"How are you"},{image:"https://media-exp1.licdn.com/dms/image/C560BAQHbn-6bAXQP4g/company-logo_200_200/0/1570126074133?e=2159024400&v=beta&t=1c80w5NMsywKLcyRxt7CWJ138x9plCdyLsvVsde_zew",message:"How are you"}]),i=Object(x.a)(n,2),r=i[0],o=i[1];return Object(b.jsxs)("div",{className:"chatscreen",children:[Object(b.jsx)("p",{className:"chatscreen__timestamp",children:"You matched with Elen"}),Object(b.jsx)("div",{className:"mssg__box",children:r.map((function(e){return e.name?Object(b.jsxs)("div",{className:"chatscreen__message",children:[Object(b.jsx)(L.a,{className:"chatscreen__image",src:e.image}),Object(b.jsx)("p",{className:"chatscreen__text",children:e.message})]}):Object(b.jsx)("div",{className:"chatscreen__message",children:Object(b.jsx)("p",{className:"chatscreen__textUser",children:e.message})})}))}),Object(b.jsxs)("form",{action:"",className:"chatscreen__input",children:[Object(b.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},className:"chatscreen__inputField",placeholder:"Type a message....",type:"text"}),Object(b.jsx)("button",{className:"chatscreen__inputButton",type:"submit",onClick:function(e){e.preventDefault(),o([].concat(Object(J.a)(r),[{message:c}])),s("")},children:"Send"})]})]})});var q=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(r.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsxs)(o.a,{path:"/chat/:person",children:[Object(b.jsx)(u,{backButton:"/chat"}),Object(b.jsx)(H,{})]}),Object(b.jsxs)(o.a,{path:"/chat",children:[Object(b.jsx)(u,{backButton:"/"}),Object(b.jsx)(v,{})]}),Object(b.jsxs)(o.a,{path:"/",children:[Object(b.jsx)(u,{}),Object(b.jsx)(y,{}),Object(b.jsx)(D,{})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[92,1,2]]]);
//# sourceMappingURL=main.af292059.chunk.js.map