(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),s=n(19),r=n.n(s),a=(n(60),n(9)),j=(n(61),n(116)),l=n(112),o=n(115),u=n(113),b=function(e){e.socket,e.setPage;var t=e.admin,n=e.startCallback;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{size:"large",color:"primary",variant:"contained",onClick:n,children:"Start Game"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{}),Object(c.jsx)("p",{children:"Waiting for the host to start the game..."})]})]})})})},d=n(114),O=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"Quiz Battle Royal"}),Object(c.jsxs)("p",{children:["Your connection has been refused!",Object(c.jsx)("br",{}),"There's either a game running and/or you have been disqualified!"]})]})})})},h=n(52),x=n.n(h)()(),g=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(null),b=Object(a.a)(r,2),O=b[0],h=b[1],g=Object(i.useState)(!0),m=Object(a.a)(g,2),f=m[0],p=m[1],v=Object(i.useState)(0),k=Object(a.a)(v,2),w=k[0],F=k[1];function C(e){return e=(e=(e=(e=(e=(e=(e=e.replace(/\xe4/g,"&auml;")).replace(/\xf6/g,"&ouml;")).replace(/\xfc/g,"&uuml;")).replace(/\xdf/g,"&szlig;")).replace(/\xc4/g,"&Auml;")).replace(/\xd6/g,"&Ouml;")).replace(/\xdc/g,"&Uuml;")}x.on("question",(function(e){h(e),p(!1),s(setInterval((function(){F(w+1),20==w&&x.emit("timeup")}),1e3))}));var y=function(e){x.emit("answer",e),clearInterval(n),p(!0)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(l.a,{children:f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{}),Object(c.jsx)("p",{children:"Waiting for question..."})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:O.question}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:function(){y(0)},children:C(O.answers[0])})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:function(){y(1)},children:C(O.answers[1])})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:function(){y(2)},children:C(O.answers[2])})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(o.a,{size:"large",variant:"outlined",onClick:function(){y(3)},children:C(O.answers[3])})}),Object(c.jsxs)("p",{children:["Remaining time: ",20-w," seconds"]})]})})})})},m=function(e){e.socket,e.setPage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"You won!"}),Object(c.jsx)("p",{children:"You are the winner!"})]})})})},f=function(e){e.socket,e.setPage;var t=e.place;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("h1",{children:"You lost!"}),Object(c.jsxs)("h4",{children:["You got in ",t,". place"]})]})})})};var p=function(){var e=Object(i.useState)("home"),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(!1),j=Object(a.a)(r,2),l=j[0],o=j[1],u=Object(i.useState)(0),h=Object(a.a)(u,2),p=h[0],v=h[1];return x.on("refused",(function(){s("refused")})),x.on("admin",(function(){o(!0)})),x.on("start",(function(){s("game")})),x.on("wrong",(function(e){v(e),s("lost")})),x.on("won",(function(){s("won")})),x.on("disconnect",(function(){x.removeAllListeners()})),Object(i.useEffect)((function(){console.log(n)}),[n]),Object(c.jsx)(d.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{textAlign:"center",minHeight:"100vh"},children:Object(c.jsxs)(d.a,{children:["home"==n?Object(c.jsx)(b,{admin:l,startCallback:function(){x.emit("start")}}):null,"refused"==n?Object(c.jsx)(O,{}):null,"game"==n?Object(c.jsx)(g,{socket:x}):null,"won"==n?Object(c.jsx)(m,{}):null,"lost"==n?Object(c.jsx)(f,{place:p}):null,Object(c.jsx)("div",{class:"copy",children:Object(c.jsx)("p",{children:"Quiz Battle Royal \xa9 2021 Ruben Kober"})})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(c.jsx)(p,{}),document.getElementById("root")),v()}},[[97,1,2]]]);
//# sourceMappingURL=main.66aac854.chunk.js.map