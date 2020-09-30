(this.webpackJsonpscore_games_react=this.webpackJsonpscore_games_react||[]).push([[0],{166:function(e,t,a){e.exports=a(209)},171:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=(a(171),a(8)),l=a(149),m=a(244),s=a(24),u=a.n(s),d=a(38),g=a(210),f=a(236),p=a(136),E=a.n(p),h=a(137),v=a.n(h),b=a(256),y=a(237),x=a(55),j=a.n(x);j.a.initializeApp({apiKey:"AIzaSyB2aJwBVVsCSVzX_MnSHAbO5gXgn59CeXs",authDomain:"scoregames-c0233.firebaseapp.com",databaseURL:"https://scoregames-c0233.firebaseio.com",projectId:"scoregames-c0233",storageBucket:"scoregames-c0233.appspot.com",messagingSenderId:"475132375224",appId:"1:475132375224:web:206d8be3fc01e8faa6044d",measurementId:"G-RQT21T265Y"});var O=j.a.database(),S=j.a;var k=function(e){var t=e.game,a=e.onClick,c=Object(n.useState)(new Date(t.date)),i=Object(o.a)(c,1)[0],l=Object(n.useState)(t.name),m=Object(o.a)(l,1)[0],s=Object(n.useState)(t.isFavorite),u=Object(o.a)(s,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){S.database().ref("games/".concat(t.id,"/isFavorite")).on("value",(function(e){p(e.val())}))}),[]),r.a.createElement(g.a,{key:t.id,button:!0,onClick:function(){a(t)}},r.a.createElement(f.a,{primary:m,secondary:i.toDateString()}),r.a.createElement(y.a,null,r.a.createElement(b.a,{edge:"end",checked:d,onChange:function(){var e,a;e=!d,a=t.id,O.ref("games/"+a).update({isFavorite:e},(function(){console.log("Favorite updated")}))},checkedIcon:r.a.createElement(E.a,{style:{color:"#FFDF00"}}),icon:r.a.createElement(v.a,null)})))},C=a(241),w=a(242),I=a(239),N=a(240),T=a(67),A=a(68),P=function(){function e(t,a,n,r){var c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Object(T.a)(this,e),this.id=void 0,this.date=void 0,this.name=void 0,this.teams=void 0,this.isFavorite=void 0,this.id=t,this.date=a,this.name=n,this.teams=r,this.isFavorite=c}return Object(A.a)(e,[{key:"tempGame",value:function(){return new e(this.id,this.date,this.name,this.teams,this.isFavorite)}}]),e}(),R=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new F;Object(T.a)(this,e),this.name=void 0,this.score=void 0,this.history=void 0,this.name=t,this.score=a,this.history=n}return Object(A.a)(e,[{key:"addScore",value:function(e){this.score+=e,e>0?this.history.addScore("+"+String(e)):this.history.addScore(String(e))}},{key:"createTeamForFirebase",value:function(){return new e(this.name,this.score,this.history)}}]),e}(),F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(T.a)(this,e),this.pastScores=void 0,this.pastScores=t}return Object(A.a)(e,[{key:"addScore",value:function(e){this.pastScores.push(e)}},{key:"removeScore",value:function(e){this.pastScores.splice(e,1)}},{key:"editScore",value:function(e,t){this.pastScores[e]=t}},{key:"calcTotalScore",value:function(){var e=0;return this.pastScores.forEach((function(t){var a=Number(t);e+=a})),e}}]),e}(),B=function(){function e(t){Object(T.a)(this,e),this.teams=void 0,this.teams=t}return Object(A.a)(e,[{key:"setValue",value:function(e,t){this.teams[e]=t}},{key:"getValueAtIndex",value:function(e){return this.teams[e]}}]),e}();function W(e){var t=e.val(),a=t.id||"",n=t.date||0,r=t.name||"",c=t.teams||null,i=t.isFavorite||!1;return new P(a,n,r,c,i)}var G=a(138),D=a.n(G),L=a(58),M=S.database(),U=[],q=Object(I.a)((function(e){return Object(N.a)({spinner:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},alignItems:"center",justifyContent:"center",minHeight:"200px"}})}));function H(e){var t,a=e.startGame,c=q(),i=Object(n.useState)(U),l=Object(o.a)(i,2),m=l[0],s=l[1],g=Object(n.useState)(!1),f=Object(o.a)(g,2),p=f[0],E=f[1],h=Object(n.useState)(!1),v=Object(o.a)(h,2),b=v[0],y=v[1],x=M.ref(),j=x.child("/Users/"+(null===(t=S.auth().currentUser)||void 0===t?void 0:t.uid)),O=x.child("/games");return Object(n.useEffect)((function(){j.child("/games").orderByChild("date").on("value",function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.val()){e.next=4;break}return E(!1),y(!0),e.abrupt("return");case 4:a=0,n=[],t.forEach((function(e){O.child("/"+e.key).once("value",(function(r){if(null===r.val())j.child("/games/"+e.key).set(null);else{var c=W(r);n.push(c),(a+=1)===t.numChildren()&&(n.reverse(),s(n),E(!0),y(!1))}}))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement(r.a.Fragment,null,p?r.a.createElement(C.a,{component:"nav"},m.map((function(e,t){return r.a.createElement("div",{key:e.id},0!==t&&r.a.createElement(w.a,null),r.a.createElement(k,{onClick:a,game:e}))}))):b?r.a.createElement(L.a,{variant:"subtitle1",style:{padding:"20px"}},"No games here... You should make one!"):r.a.createElement("div",{className:c.spinner},r.a.createElement(D.a,null)))}var V=a(245),_=a(246),z=a(238),J=a(139),Y=a.n(J),K=a(140),X=a.n(K),Q=a(65),$=a.n(Q),Z=a(150),ee=a(247),te=Object(I.a)((function(e){return Object(N.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),ae=function(e){var t=e.title,a=e.showBackArrow,n=e.onBackArrowClick,c=te(),i=r.a.useState(null),l=Object(o.a)(i,2),m=l[0],s=l[1];return r.a.createElement("div",{className:c.root},r.a.createElement(V.a,null,r.a.createElement(_.a,null,r.a.createElement(z.a,{edge:"start",color:"inherit","aria-label":"menu",className:c.menuButton,onClick:function(){return a?n():void 0}},a?r.a.createElement($.a,null):r.a.createElement(Y.a,null)),r.a.createElement(L.a,{variant:"h6",className:c.title},t),r.a.createElement(z.a,{color:"inherit",edge:"end",onClick:function(e){s(e.currentTarget)}},r.a.createElement(X.a,null)),r.a.createElement(Z.a,{id:"accountMenu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:function(){s(null)}},r.a.createElement(ee.a,{onClick:function(){S.auth().signOut()}},"Sign Out")))),r.a.createElement(_.a,null))},ne=a(252),re=a(42),ce=a(94),ie=a.n(ce),oe=a(95),le=a.n(oe),me=a(142),se=a.n(me),ue=a(251),de=a(255),ge=a(249),fe=a(248),pe=a(215),Ee=a(141),he=a.n(Ee),ve=Object(I.a)((function(e){return Object(N.a)({card:{},text:{}})})),be=function(e){var t=e.team,a=e.onDelete,n=ve();return r.a.createElement(pe.a,{className:n.card,variant:"outlined"},r.a.createElement(fe.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(fe.a,{item:!0,xs:8},r.a.createElement(L.a,{variant:"subtitle1",style:{padding:"5px",paddingTop:"20px",paddingBottom:"20px"}},t.name)),r.a.createElement(fe.a,{item:!0,xs:4},r.a.createElement(z.a,{onClick:function(){return a(t.name)}},r.a.createElement(he.a,null)))))},ye=ie()((function(e){return le()({root:{justifyContent:"center",textAlign:"center",alignItems:"center"},paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(2),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})),xe=[],je=function(e){var t=e.startGame,a=ye(),c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],m=i[1],s=Object(n.useState)(xe),g=Object(o.a)(s,2),f=g[0],p=g[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),v=h[0],b=h[1],y=Object(n.useState)(!1),x=Object(o.a)(y,2),j=x[0],O=x[1],k=Object(n.useState)(""),C=Object(o.a)(k,2),w=C[0],I=C[1],N=Object(n.useState)(!1),T=Object(o.a)(N,2),A=T[0],F=T[1],B=function(){if(""!==v){var e=new R(v);p([].concat(Object(re.a)(f),[e])),b("")}},G=function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(f.length<1)){e.next=5;break}return console.log("Need at least one team to continue"),O(!0),e.abrupt("return");case 5:return r=null===(n=S.auth().currentUser)||void 0===n?void 0:n.uid,e.next=8,S.database().ref("/games").push();case 8:c=e.sent,i=new P(c.key||String(Date.now()),Date.now(),l,f),c.set(i),(o=new Map).set(c.key,!0),S.database().ref("/Users/"+r+"/games").update(Object.fromEntries(o),(function(){t(i)}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){console.log("deleteingTeam");var t=Object(re.a)(f),a=t.findIndex((function(t){return t.name===e}));t.splice(a,1),p(t)};return r.a.createElement("div",{className:a.root},r.a.createElement(se.a,{component:"main",maxWidth:"xs"},r.a.createElement(ge.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(L.a,{component:"h1",variant:"h4"},""!==l?l:"New Game"),r.a.createElement("form",{className:a.form,onSubmit:G},r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Game Name",name:"gameName",value:l,onChange:function(e){m(e.target.value)},autoFocus:!0}),r.a.createElement(fe.a,{container:!0,spacing:2},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(L.a,{component:"p",variant:"h6"},"Teams/Players")),f.map((function(e,t){return r.a.createElement(fe.a,{item:!0,xs:6,key:t+e.name},r.a.createElement(be,{team:e,onDelete:D}))})),r.a.createElement(fe.a,{item:!0,xs:12},0===f.length&&r.a.createElement(L.a,{component:"p",variant:"subtitle2",color:"textSecondary"},"Teams will show up here once added")),r.a.createElement(fe.a,{container:!0,spacing:2},r.a.createElement(fe.a,{item:!0,xs:8},r.a.createElement(de.a,{variant:"outlined",margin:"normal",label:"Team Name",value:v,onChange:function(e){b(e.target.value)},autoComplete:"current-password",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),B())},error:j})),r.a.createElement(fe.a,{item:!0,xs:4},r.a.createElement(ue.a,{fullWidth:!0,variant:"text",color:"secondary",className:a.submit,onClick:B},"Add Team")))),r.a.createElement(ue.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Create Game"),r.a.createElement(fe.a,{container:!0,alignContent:"center",alignItems:"center",justify:"center",spacing:1,style:{marginTop:"10px"}},r.a.createElement(L.a,{style:{width:"100%",marginBottom:"10px"}},"or"),r.a.createElement(L.a,null,"Enter GameCode"),r.a.createElement(de.a,{value:w,onChange:function(e){I(e.target.value)},error:A,style:{margin:"15px"}}),r.a.createElement(ue.a,{onClick:function(){S.database().ref("GameCodes/").orderByChild("code").equalTo(w).once("child_added").then((function(e){if(e.val()){var a;console.log("HERE"),console.log("HERE",e.key),F(!1),S.database().ref("games/"+e.key).once("value").then((function(e){var a=W(e);t(a)}));var n=new Map;n.set(e.key,!0),S.database().ref("/Users/"+(null===(a=S.auth().currentUser)||void 0===a?void 0:a.uid)+"/games").update(Object.fromEntries(n))}else F(!0)}))},variant:"outlined",color:"primary",style:{marginTop:"10px"}},"Add By Code"))))))},Oe=a(148),Se=a.n(Oe),ke=a(54),Ce=a.n(ke),we=a(144),Ie=a.n(we),Ne=a(96),Te=a.n(Ne),Ae=a(145),Pe=a.n(Ae),Re=a(143),Fe=a.n(Re),Be=Object(I.a)((function(e){return Object(N.a)({paper:{marginTop:e.spacing(2),textAlign:"center",padding:"10px"},teamName:{textAlign:"left",marginLeft:e.spacing(2)},history:{padding:"5px",margin:"5px"},editButton:{textAlign:"right"},clearIconContainer:{},clearIcon:{padding:"0",margin:"0"}})})),We=function(e){var t=e.isEditing,a=e.score,n=e.index,c=e.teamIndex,i=e.teamHistory,o=e.teamScore,l=e.gameId,m=Be();return r.a.createElement(pe.a,{variant:"outlined",className:m.history},r.a.createElement(fe.a,{container:!0,justify:"center",alignItems:"center"},t&&r.a.createElement(fe.a,{item:!0,xs:12,className:m.clearIconContainer},r.a.createElement(z.a,{onClick:function(e){e.stopPropagation(),function(){if(t){var e=Object(re.a)(i.pastScores);e.splice(n,1);var r=o-Number(a);console.log("current team history",i),console.log("current team index ",c),S.database().ref("/games/"+l+"/teams/"+c).update({score:r,history:{pastScores:e}},(function(){console.log("history removed")}))}}()},className:m.clearIcon},r.a.createElement(Fe.a,{fontSize:"small",className:m.clearIcon}))),r.a.createElement(fe.a,{item:!0,xs:12},a)))},Ge=Object(I.a)((function(e){return Object(N.a)({paper:{marginTop:e.spacing(2),textAlign:"center",padding:"10px"},teamName:{textAlign:"left",marginLeft:e.spacing(2)},history:{padding:"5px",margin:"5px"},editButton:{textAlign:"right"},clearIconContainer:{},clearIcon:{padding:"0",margin:"0"}})})),De=function(e){var t=e.team,a=e.updatePoints,c=e.index,i=e.gameId,l=Ge(),m=Object(n.useState)(!1),s=Object(o.a)(m,2),u=s[0],d=s[1],g=Object(n.useState)(""),f=Object(o.a)(g,2),p=f[0],E=f[1],h=Object(n.useState)(!1),v=Object(o.a)(h,2),b=v[0],y=v[1],x=function(e){""!==p&&(a(Number(e?p:"-"+p),c),E(""),d(!1))};return r.a.createElement(pe.a,{className:l.paper,variant:"outlined",onClick:function(){d(!u)}},r.a.createElement(fe.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h6",className:l.teamName},t.name)),r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h5"},t.score)),r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(z.a,null,r.a.createElement(Ie.a,null))),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{item:!0,xs:3},r.a.createElement(z.a,{onClick:function(){return x(!1)}},r.a.createElement(Te.a,{color:"secondary"}))),r.a.createElement(fe.a,{item:!0,xs:6},r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"tel",label:"+ or - Score",name:"gameName",value:p,onChange:function(e){isNaN(Number(e.target.value))||E(e.target.value)},autoFocus:!0,inputMode:"numeric",onClick:function(e){return e.stopPropagation()}})),r.a.createElement(fe.a,{item:!0,xs:3},r.a.createElement(z.a,{onClick:function(){return x(!0)}},r.a.createElement(Ce.a,{color:"primary"}))),t.history&&t.history.pastScores.map((function(e,a){return r.a.createElement(We,{key:"indexof"+e+a,isEditing:b,score:e,index:a,teamIndex:c,teamScore:t.score,teamHistory:t.history,gameId:i})})),r.a.createElement(fe.a,{item:!0,xs:12,className:l.editButton},r.a.createElement(z.a,{onClick:function(e){e.stopPropagation(),y(!b)}},r.a.createElement(Pe.a,null))))))},Le=a(146),Me=a.n(Le),Ue=a(147),qe=a.n(Ue),He=function(e){var t=e.round,a=e.game,n=e.backToEdit,c=e.confirmRound;return r.a.createElement(fe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",spacing:2,style:{textAlign:"center",padding:"20px"}},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h5"},"Summary")),a.teams.map((function(e,a){return r.a.createElement(fe.a,{item:!0,xs:4,key:e.name+a},r.a.createElement(pe.a,{variant:"outlined"},r.a.createElement(fe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",spacing:2},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"h6"},e.name)),r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"subtitle1"},t.teams[a])))))})),r.a.createElement(fe.a,{container:!0,style:{paddingTop:"20px"}},r.a.createElement(fe.a,{item:!0,xs:6,style:{textAlign:"left"}},r.a.createElement(ue.a,{variant:"outlined",color:"secondary",onClick:function(){return n()}},"Edit")),r.a.createElement(fe.a,{item:!0,xs:6,style:{textAlign:"right"}},r.a.createElement(ue.a,{variant:"outlined",color:"primary",onClick:function(){return c(t)}},"Confirm"))))},Ve=a(111),_e=a.n(Ve),ze=function(e){var t=e.currentTeamIndex,a=e.onPreviousPlayer,n=e.game,c=e.onNextPlayer,i=e.showSummary,o=e.exitRound;return r.a.createElement(fe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",style:{marginTop:"10px"}},r.a.createElement(fe.a,{item:!0,xs:4},t>0?r.a.createElement(z.a,{style:{paddingLeft:"0",marginLeft:"0"},onClick:function(){return a()}},r.a.createElement($.a,null),r.a.createElement(L.a,{noWrap:!0},n.teams[t-1].name)):r.a.createElement(z.a,{style:{paddingLeft:"0",marginLeft:"0"},onClick:function(){return o()}},r.a.createElement($.a,null),r.a.createElement(L.a,{noWrap:!0},"Back"))),r.a.createElement(fe.a,{item:!0,xs:4,style:{textAlign:"center"}},r.a.createElement(L.a,{variant:"h5"},n.teams[t].name)),r.a.createElement(fe.a,{item:!0,xs:4,style:{textAlign:"right"}},t<n.teams.length-1?r.a.createElement(z.a,{style:{paddingRight:"0",marginRight:"0"},onClick:function(){return c()}},r.a.createElement(L.a,{noWrap:!0},n.teams[t+1].name),r.a.createElement(_e.a,null)):r.a.createElement(z.a,{style:{paddingRight:"0",marginRight:"0"},onClick:function(){return i()}},r.a.createElement(L.a,{noWrap:!0},"Summary"),r.a.createElement(_e.a,null))))},Je=function(e){var t=e.textField,a=e.score,n=e.setScore,c=e.showSummary,i=e.onNextPlayer,o=e.game,l=e.currentTeamIndex;return r.a.createElement(fe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(fe.a,{item:!0,xs:3,style:{textAlign:"right"}},r.a.createElement(z.a,{onClick:function(){l+1===o.teams.length?c(!0):i(!0)}},r.a.createElement(Te.a,{color:"secondary"}))),r.a.createElement(fe.a,{item:!0,xs:6},r.a.createElement(de.a,{inputRef:t,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"tel",label:"Score this Round",value:a,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),l===o.teams.length-1?c():i())}(e)},autoFocus:!0,inputMode:"numeric",onClick:function(e){return e.stopPropagation()}})),r.a.createElement(fe.a,{item:!0,xs:3,style:{textAlign:"left"}},r.a.createElement(z.a,{onClick:l+1===o.teams.length?function(){return c()}:function(){return i()}},r.a.createElement(Ce.a,{color:"primary"}))))},Ye=function(e){var t=e.game,a=e.currentTeamIndex;return r.a.createElement(fe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",style:{paddingLeft:"0",paddingRight:"0",marginLeft:"0",marginRight:"0"},spacing:0},r.a.createElement(fe.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(L.a,{variant:"subtitle1"},"History")),t.teams[a].history&&t.teams[a].history.pastScores.map((function(e,n){return r.a.createElement(We,{key:t.teams[a].name+e+n,isEditing:!1,score:e,index:n,teamIndex:a,teamHistory:t.teams[a].history,teamScore:t.teams[a].score,gameId:t.id})})))},Ke=function(e){var t=e.currentTeamIndex,a=e.onPreviousPlayer,n=e.onNextPlayer,c=e.showSummary,i=e.game,o=e.score,l=e.setScore,m=e.textField,s=e.exitRound;return r.a.createElement(fe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",style:{paddingLeft:"0",paddingRight:"0",marginLeft:"0",marginRight:"0"},spacing:0},r.a.createElement(ze,{currentTeamIndex:t,onPreviousPlayer:a,game:i,onNextPlayer:n,showSummary:c,exitRound:s}),r.a.createElement(Je,{game:i,score:o,currentTeamIndex:t,textField:m,onPreviousPlayer:a,onNextPlayer:n,showSummary:c,setScore:l}),r.a.createElement(Ye,{game:i,currentTeamIndex:t}),r.a.createElement(fe.a,{item:!0,xs:12,style:{textAlign:"right",paddingTop:"40px"}},t<i.teams.length-1?r.a.createElement(ue.a,{variant:"outlined",onClick:function(){return n()}},"Next Player"):r.a.createElement(ue.a,{variant:"outlined",onClick:function(){return c()}},"Summary")))},Xe=function(e){var t=e.game,a=e.applyRound,c=e.exitRound,i=Object(n.useState)(0),l=Object(o.a)(i,2),m=l[0],s=l[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),g=d[0],f=d[1],p=Object(n.useState)(new B([])),E=Object(o.a)(p,2),h=E[0],v=E[1],b=Object(n.useState)(!1),y=Object(o.a)(b,2),x=y[0],j=y[1],O=Object(n.createRef)();return r.a.createElement("div",{style:{paddingLeft:"0",paddingRight:"0",marginLeft:"0",marginRight:"0"}},x?r.a.createElement(He,{round:h,game:t,backToEdit:function(){j((function(){return!1}))},confirmRound:a}):r.a.createElement(Ke,{currentTeamIndex:m,game:t,score:g,textField:O,onPreviousPlayer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];v((function(e){var a="0";return a=t?""!==g?"-"+g:"0":""!==g?g:"0",e.setValue(m,a),s((function(t){return t<=0?t:(f((function(){return e.teams[t-1]?(console.log("We have an item",e.teams[t-1]),e.teams[t-1]):""})),t-1)})),e})),null===(e=O.current)||void 0===e||e.focus()},onNextPlayer:function(){var e,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];v((function(e){var n="0";return n=a?""!==g?"-"+g:"0":""!==g?g:"0",e.setValue(m,n),s((function(a){return a===t.teams.length-1?a:(f((function(){return e.teams[a+1]?(console.log("We have an item",e.teams[a+1]),String(Number(e.teams[a+1]))):""})),a+1)})),e})),null===(e=O.current)||void 0===e||e.focus()},showSummary:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];v((function(t){var a="0";return a=e?""!==g?"-"+g:"0":""!==g?g:"0",t.setValue(m,a),t})),j((function(){return!0}))},setScore:f,exitRound:c}))},Qe=function(e){var t=Object(n.useState)(e.game),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),s=m[0],g=m[1],f=r.a.useState(null),p=Object(o.a)(f,2),E=p[0],h=p[1],v=Object(n.useState)("Loading..."),b=Object(o.a)(v,2),y=b[0],x=b[1],j=Object(n.useState)(!0),O=Object(o.a)(j,2),k=O[0],C=O[1],w=Object(n.useState)(""),I=Object(o.a)(w,2),N=I[0],T=I[1],A=Object(n.useState)(!1),P=Object(o.a)(A,2),R=P[0],F=P[1],B=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(t.target.value),e.next=3,D(t.target.value);case 3:if(!e.sent){e.next=7;break}F(!1),e.next=8;break;case 7:F(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(N)?S.database().ref("/GameCodes/"+c.id).set({code:N}):F(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.database().ref("GameCodes/").orderByChild("code").equalTo(t).once("value");case 2:if(!e.sent.val()){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(t,a){var n=[];c.teams[a].history?n=[].concat(Object(re.a)(c.teams[a].history.pastScores),t>0?["+"+String(t)]:[String(t)]):t>0?n.push("+"+String(t)):n.push(String(t));var r=c.teams[a].score+t;S.database().ref("/games/"+e.game.id+"/teams/"+a).update({score:r,history:{pastScores:n}})};Object(n.useEffect)((function(){var e=S.database();e.ref("/games/"+c.id).on("value",(function(e){i((function(t){return W(e)}))})),e.ref("/GameCodes/"+c.id).on("value",(function(e){e.val()?(console.log("game code "+e.val().code),x((function(t){return e.val().code})),C((function(e){return!0}))):(console.log("no game code"),C((function(e){return!1})))}))}),[]);return r.a.createElement("div",null,!s&&r.a.createElement(fe.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(fe.a,{item:!0,xs:6},r.a.createElement(z.a,{style:{margin:"0",padding:"0"},onClick:function(e){h(e.currentTarget)}},r.a.createElement(Me.a,null)),r.a.createElement(Z.a,{id:"settingsMenu",anchorEl:E,keepMounted:!0,open:Boolean(E),onClose:function(){h(null)}},k?r.a.createElement(ee.a,null,'GameCode is "',y,'"'):r.a.createElement(ee.a,null,r.a.createElement(L.a,null,"Set a gameCode"),r.a.createElement(de.a,{value:N,onChange:B,style:{padding:"5px",marginLeft:"5px",marginRight:"5px"},error:R}),r.a.createElement(ue.a,{variant:"outlined",color:"primary",onClick:G},"Save")))),r.a.createElement(fe.a,{item:!0,xs:6,style:{textAlign:"right"}},r.a.createElement(z.a,{style:{marginRight:"0",paddingRight:"0"},onClick:function(){return g(!0)}},r.a.createElement(L.a,null,"Score Round"),r.a.createElement(qe.a,null)))),s?r.a.createElement(Xe,{game:c,applyRound:function(e){e.teams.forEach((function(e,t){M(Number(e),t)})),g(!1)},exitRound:function(){g((function(e){return!1}))}}):c.teams.map((function(t,a){return r.a.createElement(De,{team:t,key:t.name+a,index:a,updatePoints:M,gameId:e.game.id})})))},$e=ie()((function(e){return le()({root:{},addGameButton:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}})})),Ze=function(e){var t=$e(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],l=c[1],m=Object(n.useState)(!1),s=Object(o.a)(m,2),u=s[0],d=s[1],g=Object(n.useState)(void 0),f=Object(o.a)(g,2),p=f[0],E=f[1],h=function(e){console.log("start game called"),E(e),l(!1),d(!0)};return r.a.createElement("div",{className:t.root},r.a.createElement(ae,{title:i?"Create Game":u?p.name:"My Games",showBackArrow:!(!u&&!i),onBackArrowClick:function(){l(!1),d(!1)}}),r.a.createElement(ne.a,null,i&&r.a.createElement(je,{startGame:h}),u&&r.a.createElement(Qe,{game:p}),!1===i&&!1===u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{startGame:h}),r.a.createElement("div",{className:t.addGameButton},r.a.createElement(Se.a,{color:"secondary",size:"large","aria-label":"add",onClick:function(){l(!0),d(!1)}},r.a.createElement(Ce.a,null))))))},et=a(257),tt=a(253),at=a(254),nt=a(258),rt=a(98),ct=a.n(rt),it=a(250),ot=a(97),lt=a.n(ot);function mt(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"\xa9 Copyright ",(new Date).getFullYear()," | Jordan Burdett")}var st=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(2),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ut(e){var t=e.toggle,a=st(),c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],m=i[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),d=u[0],g=u[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),E=p[0],h=p[1],v=Object(n.useState)(!1),y=Object(o.a)(v,2),x=y[0],j=y[1];return r.a.createElement(ne.a,{component:"main",maxWidth:"xs"},r.a.createElement(ge.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(et.a,{className:a.avatar},r.a.createElement(ct.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),S.auth().signInWithEmailAndPassword(l,d).catch((function(e){var t=e.code;e.message;"auth/wrong-password"===t&&j(!0),console.log(e)}))}},r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:l,onChange:function(e){m(e.target.value.toLowerCase())},autoFocus:!0}),r.a.createElement(de.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:d,onChange:function(e){g(e.target.value)},autoComplete:"current-password"}),x&&r.a.createElement(it.a,{error:!0},"* Incorrect Password"),r.a.createElement(tt.a,{control:r.a.createElement(b.a,{value:"remember",checked:E,color:"primary",onChange:function(){return h(!E)}}),label:"Remember me"}),r.a.createElement(ue.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(fe.a,{container:!0},r.a.createElement(fe.a,{item:!0,xs:!0},r.a.createElement(at.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(fe.a,{item:!0},r.a.createElement(at.a,{onClick:function(){return t()},variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(fe.a,{container:!0},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(lt.a,{onClick:function(){var e=new S.auth.GoogleAuthProvider;S.auth().signInWithPopup(e).then((function(e){console.log(e)})).catch((function(e){e.code,e.message,e.email,e.credential}))},style:{marginTop:"50px"}}))))),r.a.createElement(nt.a,{mt:8},r.a.createElement(mt,null)))}function dt(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"\xa9 Copyright ",(new Date).getFullYear()," | Jordan Burdett")}var gt=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ft(e){var t=e.toggle,a=gt(),c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],m=i[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),d=u[0],g=u[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),E=p[0],h=p[1],v=Object(n.useState)(!1),y=Object(o.a)(v,2),x=y[0],j=y[1],O=Object(n.useState)(""),k=Object(o.a)(O,2),C=k[0],w=k[1];return r.a.createElement(ne.a,{component:"main",maxWidth:"xs"},r.a.createElement(ge.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(et.a,{className:a.avatar},r.a.createElement(ct.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),S.auth().createUserWithEmailAndPassword(l,d).catch((function(e){w(e.message),j(!0)}))}},r.a.createElement(fe.a,{container:!0,spacing:2},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(de.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:l,onChange:function(e){m(e.target.value.toLowerCase())},autoFocus:!0})),r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(de.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){g(e.target.value)}})),r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(tt.a,{control:r.a.createElement(b.a,{value:"keepMeSignedIn",color:"primary",checked:E,onChange:function(){return h(!E)}}),label:"Always remember me on this device?"}),x&&r.a.createElement(it.a,{error:!0},"* ",C))),r.a.createElement(ue.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(fe.a,{container:!0,justify:"flex-end"},r.a.createElement(fe.a,{item:!0},r.a.createElement(at.a,{onClick:function(){return t()},variant:"body2"},"Already have an account? Sign in"))),r.a.createElement(fe.a,{container:!0},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(lt.a,{onClick:function(){var e=new S.auth.GoogleAuthProvider;S.auth().signInWithPopup(e).then((function(e){console.log(e)})).catch((function(e){e.code,e.message,e.email,e.credential}))},style:{marginTop:"50px"}}))))),r.a.createElement(nt.a,{mt:5},r.a.createElement(dt,null)))}var pt=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1],l=function(){i(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement(L.a,{align:"center",variant:"h3",style:{marginTop:"50px"}},"Score Games")),c?r.a.createElement(ft,{toggle:l}):r.a.createElement(ut,{toggle:l}))};var Et=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=(t[1],a?"dark":"light"),i=Object(n.useState)(!1),s=Object(o.a)(i,2),u=s[0],d=s[1],g=Object(l.a)({palette:{type:c}});return Object(n.useEffect)((function(){j.a.auth().onAuthStateChanged((function(e){d(!!e)}))}),[]),r.a.createElement(m.a,{theme:g},u?r.a.createElement(Ze,null):r.a.createElement(pt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.eb7c8f03.chunk.js.map