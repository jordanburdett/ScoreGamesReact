(this.webpackJsonpscore_games_react=this.webpackJsonpscore_games_react||[]).push([[0],{164:function(e,t,a){e.exports=a(207)},169:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=(a(169),a(8)),o=a(150),m=a(244),s=a(53),u=a.n(s),d=a(83),g=a(208),p=a(236),f=a(137),E=a.n(f),h=a(138),v=a.n(h),b=a(256),y=a(237),j=a(54),x=a.n(j);x.a.initializeApp({apiKey:"AIzaSyB2aJwBVVsCSVzX_MnSHAbO5gXgn59CeXs",authDomain:"scoregames-c0233.firebaseapp.com",databaseURL:"https://scoregames-c0233.firebaseio.com",projectId:"scoregames-c0233",storageBucket:"scoregames-c0233.appspot.com",messagingSenderId:"475132375224",appId:"1:475132375224:web:206d8be3fc01e8faa6044d",measurementId:"G-RQT21T265Y"});var O=x.a.database(),S=x.a;var k=function(e){var t=e.game,a=e.onClick,c=Object(n.useState)(new Date(t.date)),i=Object(l.a)(c,1)[0],o=Object(n.useState)(t.name),m=Object(l.a)(o,1)[0],s=Object(n.useState)(t.isFavorite),u=Object(l.a)(s,2),d=u[0],f=u[1];return Object(n.useEffect)((function(){S.database().ref("games/".concat(t.id,"/isFavorite")).on("value",(function(e){f(e.val())}))}),[]),r.a.createElement(g.a,{key:t.id,button:!0,onClick:function(){a(t)}},r.a.createElement(p.a,{primary:m,secondary:i.toDateString()}),r.a.createElement(y.a,null,r.a.createElement(b.a,{edge:"end",checked:d,onChange:function(){var e,a;e=!d,a=t.id,O.ref("games/"+a).update({isFavorite:e},(function(){console.log("Favorite updated")}))},checkedIcon:r.a.createElement(E.a,{style:{color:"#FFDF00"}}),icon:r.a.createElement(v.a,null)})))},C=a(241),w=a(242),N=a(239),I=a(240),A=a(65),F=a(66),T=function(){function e(t,a,n,r){var c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Object(A.a)(this,e),this.id=void 0,this.date=void 0,this.name=void 0,this.teams=void 0,this.isFavorite=void 0,this.id=t,this.date=a,this.name=n,this.teams=r,this.isFavorite=c}return Object(F.a)(e,[{key:"tempGame",value:function(){return new e(this.id,this.date,this.name,this.teams,this.isFavorite)}}]),e}(),W=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new B;Object(A.a)(this,e),this.name=void 0,this.score=void 0,this.history=void 0,this.name=t,this.score=a,this.history=n}return Object(F.a)(e,[{key:"addScore",value:function(e){this.score+=e,e>0?this.history.addScore("+"+String(e)):this.history.addScore(String(e))}},{key:"createTeamForFirebase",value:function(){return new e(this.name,this.score,this.history)}}]),e}(),B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(A.a)(this,e),this.pastScores=void 0,this.pastScores=t}return Object(F.a)(e,[{key:"addScore",value:function(e){this.pastScores.push(e)}},{key:"removeScore",value:function(e){this.pastScores.splice(e,1)}},{key:"editScore",value:function(e,t){this.pastScores[e]=t}},{key:"calcTotalScore",value:function(){var e=0;return this.pastScores.forEach((function(t){var a=Number(t);e+=a})),e}}]),e}(),R=function(){function e(t){Object(A.a)(this,e),this.teams=void 0,this.teams=t}return Object(F.a)(e,[{key:"setValue",value:function(e,t){this.teams[e]=t}}]),e}();function D(e){var t=e.val(),a=t.id||"",n=t.date||0,r=t.name||"",c=t.teams||null,i=t.isFavorite||!1;return new T(a,n,r,c,i)}var P=a(139),G=a.n(P),L=a(57),M=S.database(),U=[],q=Object(N.a)((function(e){return Object(I.a)({spinner:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},alignItems:"center",justifyContent:"center",minHeight:"200px"}})}));function H(e){var t,a=e.startGame,c=q(),i=Object(n.useState)(U),o=Object(l.a)(i,2),m=o[0],s=o[1],g=Object(n.useState)(!1),p=Object(l.a)(g,2),f=p[0],E=p[1],h=Object(n.useState)(!1),v=Object(l.a)(h,2),b=v[0],y=v[1],j=M.ref(),x=j.child("/Users/"+(null===(t=S.auth().currentUser)||void 0===t?void 0:t.uid)),O=j.child("/games");return Object(n.useEffect)((function(){x.child("/games").orderByChild("date").on("value",function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.val()){e.next=4;break}return E(!1),y(!0),e.abrupt("return");case 4:a=0,n=[],t.forEach((function(e){O.child("/"+e.key).once("value",(function(r){if(null===r.val())x.child("/games/"+e.key).set(null);else{var c=D(r);n.push(c),(a+=1)===t.numChildren()&&(n.reverse(),s(n),E(!0),y(!1))}}))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement(r.a.Fragment,null,f?r.a.createElement(C.a,{component:"nav"},m.map((function(e,t){return r.a.createElement("div",{key:e.id},0!==t&&r.a.createElement(w.a,null),r.a.createElement(k,{onClick:a,game:e}))}))):b?r.a.createElement(L.a,{variant:"subtitle1",style:{padding:"20px"}},"No games here... You should make one!"):r.a.createElement("div",{className:c.spinner},r.a.createElement(G.a,null)))}var z=a(245),J=a(246),V=a(238),_=a(140),Y=a.n(_),K=a(141),X=a.n(K),Q=a(93),$=a.n(Q),Z=a(151),ee=a(247),te=Object(N.a)((function(e){return Object(I.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),ae=function(e){var t=e.title,a=e.showBackArrow,n=e.onBackArrowClick,c=te(),i=r.a.useState(null),o=Object(l.a)(i,2),m=o[0],s=o[1];return r.a.createElement("div",{className:c.root},r.a.createElement(z.a,null,r.a.createElement(J.a,null,r.a.createElement(V.a,{edge:"start",color:"inherit","aria-label":"menu",className:c.menuButton,onClick:function(){return a?n():void 0}},a?r.a.createElement($.a,null):r.a.createElement(Y.a,null)),r.a.createElement(L.a,{variant:"h6",className:c.title},t),r.a.createElement(V.a,{color:"inherit",edge:"end",onClick:function(e){s(e.currentTarget)}},r.a.createElement(X.a,null)),r.a.createElement(Z.a,{id:"accountMenu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:function(){s(null)}},r.a.createElement(ee.a,{onClick:function(){S.auth().signOut()}},"Sign Out")))),r.a.createElement(J.a,null))},ne=a(252),re=a(40),ce=a(95),ie=a.n(ce),le=a(96),oe=a.n(le),me=a(143),se=a.n(me),ue=a(251),de=a(255),ge=a(249),pe=a(248),fe=a(213),Ee=a(142),he=a.n(Ee),ve=Object(N.a)((function(e){return Object(I.a)({card:{},text:{}})})),be=function(e){var t=e.team,a=e.onDelete,n=ve();return r.a.createElement(fe.a,{className:n.card,variant:"outlined"},r.a.createElement(pe.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(pe.a,{item:!0,xs:8},r.a.createElement(L.a,{variant:"subtitle1",style:{padding:"5px",paddingTop:"20px",paddingBottom:"20px"}},t.name)),r.a.createElement(pe.a,{item:!0,xs:4},r.a.createElement(V.a,{onClick:function(){return a(t.name)}},r.a.createElement(he.a,null)))))},ye=ie()((function(e){return oe()({root:{justifyContent:"center",textAlign:"center",alignItems:"center"},paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(2),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})),je=[],xe=function(e){var t=e.startGame,a=ye(),c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],m=i[1],s=Object(n.useState)(je),g=Object(l.a)(s,2),p=g[0],f=g[1],E=Object(n.useState)(""),h=Object(l.a)(E,2),v=h[0],b=h[1],y=Object(n.useState)(!1),j=Object(l.a)(y,2),x=j[0],O=j[1],k=function(){if(""!==v){var e=new W(v);f([].concat(Object(re.a)(p),[e])),b("")}},C=function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r,c,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(p.length<1)){e.next=5;break}return console.log("Need at least one team to continue"),O(!0),e.abrupt("return");case 5:return r=null===(n=S.auth().currentUser)||void 0===n?void 0:n.uid,e.next=8,S.database().ref("/games").push();case 8:c=e.sent,i=new T(c.key||String(Date.now()),Date.now(),o,p),c.set(i),(l=new Map).set(c.key,!0),S.database().ref("/Users/"+r+"/games").update(Object.fromEntries(l),(function(){t(i)}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){console.log("deleteingTeam");var t=Object(re.a)(p),a=t.findIndex((function(t){return t.name===e}));t.splice(a,1),f(t)};return r.a.createElement("div",{className:a.root},r.a.createElement(se.a,{component:"main",maxWidth:"xs"},r.a.createElement(ge.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(L.a,{component:"h1",variant:"h4"},""!==o?o:"New Game"),r.a.createElement("form",{className:a.form,onSubmit:C},r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Game Name",name:"gameName",value:o,onChange:function(e){m(e.target.value)},autoFocus:!0}),r.a.createElement(pe.a,{container:!0,spacing:2},r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(L.a,{component:"p",variant:"h6"},"Teams/Players")),p.map((function(e,t){return r.a.createElement(pe.a,{item:!0,xs:6,key:t+e.name},r.a.createElement(be,{team:e,onDelete:w}))})),r.a.createElement(pe.a,{item:!0,xs:12},0===p.length&&r.a.createElement(L.a,{component:"p",variant:"subtitle2",color:"textSecondary"},"Teams will show up here once added")),r.a.createElement(pe.a,{container:!0,spacing:2},r.a.createElement(pe.a,{item:!0,xs:8},r.a.createElement(de.a,{variant:"outlined",margin:"normal",label:"Team Name",value:v,onChange:function(e){b(e.target.value)},autoComplete:"current-password",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),k())},error:x})),r.a.createElement(pe.a,{item:!0,xs:4},r.a.createElement(ue.a,{fullWidth:!0,variant:"text",color:"secondary",className:a.submit,onClick:k},"Add Team")))),r.a.createElement(ue.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Create Game")))))},Oe=a(149),Se=a.n(Oe),ke=a(52),Ce=a.n(ke),we=a(145),Ne=a.n(we),Ie=a(97),Ae=a.n(Ie),Fe=a(146),Te=a.n(Fe),We=a(144),Be=a.n(We),Re=Object(N.a)((function(e){return Object(I.a)({paper:{marginTop:e.spacing(2),textAlign:"center",padding:"10px"},teamName:{textAlign:"left",marginLeft:e.spacing(2)},history:{padding:"5px",margin:"5px"},editButton:{textAlign:"right"},clearIconContainer:{},clearIcon:{padding:"0",margin:"0"}})})),De=function(e){var t=e.isEditing,a=e.score,n=e.index,c=e.teamIndex,i=e.teamHistory,l=e.teamScore,o=e.gameId,m=Re();return r.a.createElement(fe.a,{variant:"outlined",className:m.history},r.a.createElement(pe.a,{container:!0,justify:"center",alignItems:"center"},t&&r.a.createElement(pe.a,{item:!0,xs:12,className:m.clearIconContainer},r.a.createElement(V.a,{onClick:function(e){e.stopPropagation(),function(){if(t){var e=Object(re.a)(i.pastScores);e.splice(n,1);var r=l-Number(a);console.log("current team history",i),console.log("current team index ",c),S.database().ref("/games/"+o+"/teams/"+c).update({score:r,history:{pastScores:e}},(function(){console.log("history removed")}))}}()},className:m.clearIcon},r.a.createElement(Be.a,{fontSize:"small",className:m.clearIcon}))),r.a.createElement(pe.a,{item:!0,xs:12},a)))},Pe=Object(N.a)((function(e){return Object(I.a)({paper:{marginTop:e.spacing(2),textAlign:"center",padding:"10px"},teamName:{textAlign:"left",marginLeft:e.spacing(2)},history:{padding:"5px",margin:"5px"},editButton:{textAlign:"right"},clearIconContainer:{},clearIcon:{padding:"0",margin:"0"}})})),Ge=function(e){var t=e.team,a=e.updatePoints,c=e.index,i=e.gameId,o=Pe(),m=Object(n.useState)(!1),s=Object(l.a)(m,2),u=s[0],d=s[1],g=Object(n.useState)(""),p=Object(l.a)(g,2),f=p[0],E=p[1],h=Object(n.useState)(!1),v=Object(l.a)(h,2),b=v[0],y=v[1],j=function(e){""!==f&&(a(Number(e?f:"-"+f),c),E(""),d(!1))};return r.a.createElement(fe.a,{className:o.paper,variant:"outlined",onClick:function(){d(!u)}},r.a.createElement(pe.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h6",className:o.teamName},t.name)),r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h5"},t.score)),r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(V.a,null,r.a.createElement(Ne.a,null))),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{item:!0,xs:3},r.a.createElement(V.a,{onClick:function(){return j(!1)}},r.a.createElement(Ae.a,{color:"secondary"}))),r.a.createElement(pe.a,{item:!0,xs:6},r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"tel",label:"+ or - Score",name:"gameName",value:f,onChange:function(e){isNaN(Number(e.target.value))||E(e.target.value)},autoFocus:!0,inputMode:"numeric",onClick:function(e){return e.stopPropagation()}})),r.a.createElement(pe.a,{item:!0,xs:3},r.a.createElement(V.a,{onClick:function(){return j(!0)}},r.a.createElement(Ce.a,{color:"primary"}))),t.history&&t.history.pastScores.map((function(e,a){return r.a.createElement(De,{key:c,isEditing:b,score:e,index:a,teamIndex:c,teamScore:t.score,teamHistory:t.history,gameId:i})})),r.a.createElement(pe.a,{item:!0,xs:12,className:o.editButton},r.a.createElement(V.a,{onClick:function(e){e.stopPropagation(),y(!b)}},r.a.createElement(Te.a,null))))))},Le=a(147),Me=a.n(Le),Ue=a(148),qe=a.n(Ue),He=a(113),ze=a.n(He),Je=function(e){var t=e.game,a=e.applyRound,c=Object(n.useState)(0),i=Object(l.a)(c,2),o=i[0],m=i[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],g=u[1],p=Object(n.useState)(new R([])),f=Object(l.a)(p,2),E=f[0],h=(f[1],Object(n.useState)(!1)),v=Object(l.a)(h,2),b=v[0],y=v[1],j=Object(n.createRef)(),x=function(){var e;O(),E.teams[o+1]&&g(String(Number(E.teams[o+1]))),m(o+1),null===(e=j.current)||void 0===e||e.focus()},O=function(){var e=function(){var e=Number(d);return e>0?"+"+e:d}();new R(E.teams).setValue(o,e),g("")},S=function(){O(),console.log(E),y(!0)};return r.a.createElement("div",{style:{paddingLeft:"0",paddingRight:"0",marginLeft:"0",marginRight:"0"}},b?r.a.createElement(pe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",spacing:2,style:{textAlign:"center",padding:"20px"}},r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h5"},"Summary")),t.teams.map((function(e,t){return r.a.createElement(pe.a,{item:!0,xs:4,key:e.name+t},r.a.createElement(fe.a,{variant:"outlined"},r.a.createElement(pe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",spacing:2},r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h6"},e.name)),r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"subtitle1"},E.teams[t])))))})),r.a.createElement(pe.a,{container:!0,style:{paddingTop:"20px"}},r.a.createElement(pe.a,{item:!0,xs:6,style:{textAlign:"left"}},r.a.createElement(ue.a,{variant:"outlined",color:"secondary",onClick:function(){y(!1),E.teams[o]&&g(String(Number(E.teams[o])))}},"Edit")),r.a.createElement(pe.a,{item:!0,xs:6,style:{textAlign:"right"}},r.a.createElement(ue.a,{variant:"outlined",color:"primary",onClick:function(){return a(E)}},"Confirm")))):r.a.createElement(pe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",style:{paddingLeft:"0",paddingRight:"0",marginLeft:"0",marginRight:"0"},spacing:0},r.a.createElement(pe.a,{item:!0,xs:4},o>0&&r.a.createElement(V.a,{style:{paddingLeft:"0",marginLeft:"0"},onClick:function(){O(),E.teams[o-1]&&g(String(Number(E.teams[o-1]))),m(o-1);var e=j.current;e&&e.focus()}},r.a.createElement($.a,null),r.a.createElement(L.a,{noWrap:!0},t.teams[o-1].name))),r.a.createElement(pe.a,{item:!0,xs:4,style:{textAlign:"center"}},r.a.createElement(L.a,{variant:"h5"},t.teams[o].name)),r.a.createElement(pe.a,{item:!0,xs:4,style:{textAlign:"right"}},o<t.teams.length-1?r.a.createElement(V.a,{style:{paddingRight:"0",marginRight:"0"},onClick:x},r.a.createElement(L.a,{noWrap:!0},t.teams[o+1].name),r.a.createElement(ze.a,null)):r.a.createElement(V.a,{style:{paddingRight:"0",marginRight:"0"},onClick:S},r.a.createElement(L.a,{noWrap:!0},"Summary"),r.a.createElement(ze.a,null))),r.a.createElement(pe.a,{item:!0,xs:3,style:{textAlign:"right"}},r.a.createElement(V.a,{onClick:function(){if(g("-"+d),o+1===t.teams.length)return console.log("last one"),void S();console.log("in make negative",d),x()}},r.a.createElement(Ae.a,{color:"secondary"}))),r.a.createElement(pe.a,{item:!0,xs:6},r.a.createElement(de.a,{inputRef:j,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"tel",label:"Score this Round",value:d,onChange:function(e){g(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),o===t.teams.length-1?S():x())}(e)},autoFocus:!0,inputMode:"numeric",onClick:function(e){return e.stopPropagation()}})),r.a.createElement(pe.a,{item:!0,xs:3,style:{textAlign:"left"}},r.a.createElement(V.a,{onClick:o+1===t.teams.length?S:x},r.a.createElement(Ce.a,{color:"primary"}))),r.a.createElement(pe.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(L.a,{variant:"subtitle1"},"History")),t.teams[o].history&&t.teams[o].history.pastScores.map((function(e,a){return r.a.createElement(De,{key:t.teams[o].name+e+a,isEditing:!1,score:e,index:a,teamIndex:o,teamHistory:t.teams[o].history,teamScore:t.teams[o].score,gameId:t.id})})),r.a.createElement(pe.a,{item:!0,xs:12,style:{textAlign:"right",paddingTop:"40px"}},o<t.teams.length-1?r.a.createElement(ue.a,{variant:"outlined",onClick:x},"Next Player"):r.a.createElement(ue.a,{variant:"outlined",onClick:S},"Summary"))))},Ve=function(e){var t=Object(n.useState)(e.game),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(!1),m=Object(l.a)(o,2),s=m[0],u=m[1],d=function(t,a){var n=[];c.teams[a].history?n=[].concat(Object(re.a)(c.teams[a].history.pastScores),t>0?["+"+String(t)]:[String(t)]):t>0?n.push("+"+String(t)):n.push(String(t));var r=c.teams[a].score+t;S.database().ref("/games/"+e.game.id+"/teams/"+a).update({score:r,history:{pastScores:n}})};return Object(n.useEffect)((function(){S.database().ref("/games/"+c.id).on("value",(function(e){i(D(e))}))}),[]),r.a.createElement("div",null,!s&&r.a.createElement(pe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(pe.a,{item:!0,xs:6},r.a.createElement(V.a,{style:{margin:"0",padding:"0"}},r.a.createElement(Me.a,null))),r.a.createElement(pe.a,{item:!0,xs:6,style:{textAlign:"right"}},r.a.createElement(V.a,{style:{marginRight:"0",paddingRight:"0"},onClick:function(){return u(!0)}},r.a.createElement(L.a,null,"Score Round"),r.a.createElement(qe.a,null)))),s?r.a.createElement(Je,{game:c,applyRound:function(e){e.teams.forEach((function(e,t){d(Number(e),t)})),u(!1)}}):c.teams.map((function(t,a){return r.a.createElement(Ge,{team:t,key:t.name+a,index:a,updatePoints:d,gameId:e.game.id})})))},_e=ie()((function(e){return oe()({root:{},addGameButton:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}})})),Ye=function(e){var t=_e(),a=Object(n.useState)(!1),c=Object(l.a)(a,2),i=c[0],o=c[1],m=Object(n.useState)(!1),s=Object(l.a)(m,2),u=s[0],d=s[1],g=Object(n.useState)(void 0),p=Object(l.a)(g,2),f=p[0],E=p[1],h=function(e){console.log("start game called"),E(e),o(!1),d(!0)};return r.a.createElement("div",{className:t.root},r.a.createElement(ae,{title:i?"Create Game":u?f.name:"My Games",showBackArrow:!(!u&&!i),onBackArrowClick:function(){o(!1),d(!1)}}),r.a.createElement(ne.a,null,i&&r.a.createElement(xe,{startGame:h}),u&&r.a.createElement(Ve,{game:f}),!1===i&&!1===u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{startGame:h}),r.a.createElement("div",{className:t.addGameButton},r.a.createElement(Se.a,{color:"secondary",size:"large","aria-label":"add",onClick:function(){o(!0),d(!1)}},r.a.createElement(Ce.a,null))))))},Ke=a(257),Xe=a(253),Qe=a(254),$e=a(258),Ze=a(99),et=a.n(Ze),tt=a(250),at=a(98),nt=a.n(at);function rt(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"\xa9 Copyright ",(new Date).getFullYear()," | Jordan Burdett")}var ct=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(2),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function it(e){var t=e.toggle,a=ct(),c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],m=i[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],g=u[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),E=f[0],h=f[1],v=Object(n.useState)(!1),y=Object(l.a)(v,2),j=y[0],x=y[1];return r.a.createElement(ne.a,{component:"main",maxWidth:"xs"},r.a.createElement(ge.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(Ke.a,{className:a.avatar},r.a.createElement(et.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),S.auth().signInWithEmailAndPassword(o,d).catch((function(e){var t=e.code;e.message;"auth/wrong-password"===t&&x(!0),console.log(e)}))}},r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:o,onChange:function(e){m(e.target.value.toLowerCase())},autoFocus:!0}),r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:d,onChange:function(e){g(e.target.value)},autoComplete:"current-password"}),j&&r.a.createElement(tt.a,{error:!0},"* Incorrect Password"),r.a.createElement(Xe.a,{control:r.a.createElement(b.a,{value:"remember",checked:E,color:"primary",onChange:function(){return h(!E)}}),label:"Remember me"}),r.a.createElement(ue.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(pe.a,{container:!0},r.a.createElement(pe.a,{item:!0,xs:!0},r.a.createElement(Qe.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(pe.a,{item:!0},r.a.createElement(Qe.a,{onClick:function(){return t()},variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(pe.a,{container:!0},r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(nt.a,{onClick:function(){var e=new S.auth.GoogleAuthProvider;S.auth().signInWithPopup(e).then((function(e){console.log(e)})).catch((function(e){e.code,e.message,e.email,e.credential}))},style:{marginTop:"50px"}}))))),r.a.createElement($e.a,{mt:8},r.a.createElement(rt,null)))}function lt(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"\xa9 Copyright ",(new Date).getFullYear()," | Jordan Burdett")}var ot=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function mt(e){var t=e.toggle,a=ot(),c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],m=i[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),d=u[0],g=u[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),E=f[0],h=f[1],v=Object(n.useState)(!1),y=Object(l.a)(v,2),j=y[0],x=y[1],O=Object(n.useState)(""),k=Object(l.a)(O,2),C=k[0],w=k[1];return r.a.createElement(ne.a,{component:"main",maxWidth:"xs"},r.a.createElement(ge.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(Ke.a,{className:a.avatar},r.a.createElement(et.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),S.auth().createUserWithEmailAndPassword(o,d).catch((function(e){w(e.message),x(!0)}))}},r.a.createElement(pe.a,{container:!0,spacing:2},r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(de.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:o,onChange:function(e){m(e.target.value.toLowerCase())},autoFocus:!0})),r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(de.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){g(e.target.value)}})),r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(Xe.a,{control:r.a.createElement(b.a,{value:"keepMeSignedIn",color:"primary",checked:E,onChange:function(){return h(!E)}}),label:"Always remember me on this device?"}),j&&r.a.createElement(tt.a,{error:!0},"* ",C))),r.a.createElement(ue.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(pe.a,{container:!0,justify:"flex-end"},r.a.createElement(pe.a,{item:!0},r.a.createElement(Qe.a,{onClick:function(){return t()},variant:"body2"},"Already have an account? Sign in"))),r.a.createElement(pe.a,{container:!0},r.a.createElement(pe.a,{item:!0,xs:12},r.a.createElement(nt.a,{onClick:function(){var e=new S.auth.GoogleAuthProvider;S.auth().signInWithPopup(e).then((function(e){console.log(e)})).catch((function(e){e.code,e.message,e.email,e.credential}))},style:{marginTop:"50px"}}))))),r.a.createElement($e.a,{mt:5},r.a.createElement(lt,null)))}var st=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1],o=function(){i(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement(L.a,{align:"center",variant:"h3",style:{marginTop:"50px"}},"Score Games")),c?r.a.createElement(mt,{toggle:o}):r.a.createElement(it,{toggle:o}))};var ut=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=(t[1],a?"dark":"light"),i=Object(n.useState)(!1),s=Object(l.a)(i,2),u=s[0],d=s[1],g=Object(o.a)({palette:{type:c}});return Object(n.useEffect)((function(){x.a.auth().onAuthStateChanged((function(e){d(!!e)}))}),[]),r.a.createElement(m.a,{theme:g},u?r.a.createElement(Ye,null):r.a.createElement(st,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ut,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[164,1,2]]]);
//# sourceMappingURL=main.2a9b11f2.chunk.js.map