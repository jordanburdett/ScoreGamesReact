(this.webpackJsonpscore_games_react=this.webpackJsonpscore_games_react||[]).push([[0],{55:function(e,t,a){e.exports=a(76)},60:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(60),a(16)),l=a(50),s=a(109),u=a(113),m=a(102),d=a(46),h=a.n(d),v=a(47),f=a.n(v),g=a(110),b=a(100),E=a(111),p=a(103),j=a(34),O=a.n(j);O.a.initializeApp({apiKey:"AIzaSyB2aJwBVVsCSVzX_MnSHAbO5gXgn59CeXs",authDomain:"scoregames-c0233.firebaseapp.com",databaseURL:"https://scoregames-c0233.firebaseio.com",projectId:"scoregames-c0233",storageBucket:"scoregames-c0233.appspot.com",messagingSenderId:"475132375224",appId:"1:475132375224:web:206d8be3fc01e8faa6044d",measurementId:"G-RQT21T265Y"});var w=O.a.database(),y=O.a;var k=Object(b.a)((function(e){return Object(E.a)({arrow:{minWidth:"0"}})})),F=function(e){var t=e.game,a=(k(),Object(n.useState)(new Date(t.date))),c=Object(i.a)(a,2),o=c[0],l=(c[1],Object(n.useState)(t.name)),s=Object(i.a)(l,2),d=s[0],v=(s[1],Object(n.useState)(t.isFavorite)),b=Object(i.a)(v,2),E=b[0],j=b[1];return Object(n.useEffect)((function(){y.database().ref("games/".concat(t.id,"/isFavorite")).on("value",(function(e){j(e.val())}))}),[]),r.a.createElement(u.a,{key:t.id,button:!0,onClick:function(e){console.log("Play "+d)}},r.a.createElement(m.a,{primary:d,secondary:o.toDateString()}),r.a.createElement(p.a,null,r.a.createElement(g.a,{edge:"end",checked:E,onChange:function(){var e,a;e=!E,a=t.id,w.ref("games/"+a).update({isFavorite:e},(function(){console.log("Favorite updated")}))},checkedIcon:r.a.createElement(h.a,{style:{color:"#FFDF00"}}),icon:r.a.createElement(f.a,null)})))},S=a(105),B=a(106),I=a(38),C=function e(t,a,n,r,c){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];Object(I.a)(this,e),this.id=void 0,this.date=void 0,this.name=void 0,this.teams=void 0,this.isFavorite=void 0,this.history=void 0,this.id=t,this.date=a,this.name=n,this.teams=r,this.isFavorite=o,this.history=c};function G(e){var t=[];return e.forEach((function(e){var a=function(e){var t=e.val(),a=t.id||"",n=t.date||0,r=t.name||"",c=t.teams||null,o=t.isFavorite||!1,i=t.history||null;return new C(a,n,r,c,i,o)}(e);t.push(a)})),t}var _=Object(b.a)((function(e){return Object(E.a)({root:{}})})),D=y.database(),N=[];function x(){var e=_(),t=Object(n.useState)(N),a=Object(i.a)(t,2),c=a[0],o=a[1],l=D.ref(),s=(l.child("/Users"),l.child("/games"));l.child("/GameCodes");return Object(n.useEffect)((function(){s.on("value",(function(e){console.log("update called"),o(G(e))}))}),[]),r.a.createElement(S.a,{component:"nav",className:e.root},c.map((function(e,t){return r.a.createElement("div",{key:e.id},0!==t&&r.a.createElement(B.a,null),r.a.createElement(F,{game:e}))})))}var z=a(112),A=a(107),J=a(104),M=a(48),R=a.n(M),V=a(35),W=a(49),X=a.n(W),T=Object(b.a)((function(e){return Object(E.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),U=function(e){var t=e.title,a=T();return r.a.createElement("div",{className:a.root},r.a.createElement(z.a,null,r.a.createElement(A.a,null,r.a.createElement(J.a,{edge:"start",color:"inherit","aria-label":"menu",className:a.menuButton},r.a.createElement(R.a,null)),r.a.createElement(V.a,{variant:"h6",className:a.title},t),r.a.createElement(J.a,{color:"inherit",edge:"end"},r.a.createElement(X.a,null)))),r.a.createElement(A.a,null))},H=a(108),K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{title:"My Games"}),r.a.createElement(H.a,null,r.a.createElement(x,null)))};var L=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=(t[1],a?"dark":"light"),o=Object(l.a)({palette:{type:c}});return r.a.createElement(s.a,{theme:o},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.de16e57c.chunk.js.map