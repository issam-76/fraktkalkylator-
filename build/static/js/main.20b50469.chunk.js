(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{label:"Bor\xe5s",value:"1"},{label:"G\xf6teborg",value:"2"},{label:"Stockholm",value:"3"},{label:"J\xf6nk\xf6ping",value:"4"},{label:"Kinna",value:"5"},{label:"Skene",value:"6"},{label:"Varberg",value:"7"},{label:"Malm\xf6",value:"8"},{label:"Helsingborg",value:"9"}]},,function(e){e.exports=[{label:"=> 50 kg ",value:"1"},{label:"50 kg <> 60 kg",value:"2"},{label:"60 kg <> 70 kg",value:"3"},{label:"70 kg <> 80 kg",value:"4"},{label:"80 kg <> 90 kg",value:"5"},{label:"90 kg <> 100 kg",value:"6"},{label:" > 100 kg",value:"7"}]},function(e){e.exports=[{label:"Palle",value:"1"},{label:"Paket",value:"2"}]},,,,function(e){e.exports=[{label:"Bor\xe5s",value:"1"},{label:"G\xf6teborg",value:"2"},{label:"Stockholm",value:"3"},{label:"J\xf6nk\xf6ping",value:"4"},{label:"Kinna",value:"5"},{label:"Skene",value:"6"},{label:"Varberg",value:"7"},{label:"Malm\xf6",value:"8"},{label:"Helsingborg",value:"9"}]},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(8),s=a.n(c),u=(a(15),a(6)),r=a(3),o=a(1),m=(a(16),a(2)),i=a(9),b=a(4),v=a(5);a(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);s.a.render(n.a.createElement(function(){var e=Object(l.useState)(0),t=Object(o.a)(e,2),a=(t[0],t[1],Object(l.useState)([])),c=Object(o.a)(a,2),s=c[0],d=c[1],E=Object(l.useState)([]),g=Object(o.a)(E,2),f=g[0],p=g[1],j=Object(l.useState)([]),O=Object(o.a)(j,2),k=O[0],x=O[1],h=Object(l.useState)([]),w=Object(o.a)(h,2),S=w[0],y=w[1],C=Object(l.useState)(""),M=Object(o.a)(C,2),B=M[0],J=M[1],K=Object(l.useState)(""),V=Object(o.a)(K,2),L=(V[0],V[1],Object(l.useState)("")),P=Object(o.a)(L,2),F=P[0],G=P[1],H=Object(l.useState)(""),R=Object(o.a)(H,2),U=R[0],W=R[1],A=Object(l.useState)(""),D=Object(o.a)(A,2),I=D[0],T=D[1],X=Object(l.useState)(""),$=Object(o.a)(X,2),q=$[0],z=$[1],N=Object(l.useState)(""),Q=Object(o.a)(N,2),Y=Q[0],Z=Q[1],_=Object(l.useState)(""),ee=Object(o.a)(_,2),te=ee[0],ae=ee[1],le=Object(l.useState)(""),ne=Object(o.a)(le,2),ce=ne[0],se=ne[1],ue=Object(l.useState)(""),re=Object(o.a)(ue,2),oe=re[0],me=re[1],ie=n.a.useState({}),be=Object(o.a)(ie,2),ve=be[0],de=be[1],Ee=ve.elem1,ge=ve.elem2,fe=ve.elem3,pe=(ve.elem4,ve.elem5),je=U,Oe=I,ke=q,xe=Y;return n.a.createElement(n.a.Fragment,null,n.a.createElement("body",{class:"bg-light"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"rowg"},n.a.createElement("div",{class:"rowh text-center"},n.a.createElement("small",{class:"text-muted"},n.a.createElement("h2",null,"R\xe4kna ut fraktkostnad Expressbud")),n.a.createElement("small",{class:"text-muted"},"Fyll i information om din s\xe4ndning inklusive destination, ursprung, s\xe4ndningsdatum och vikt."))),n.a.createElement("div",{class:"rowx"},n.a.createElement("div",{class:"col-md-3 mb-3"},n.a.createElement("label",{for:"country"},"Upph\xe4mtningsadress"),n.a.createElement("select",{class:"custom-select d-block w-100",onChange:function(e){var t=e.target.value,a=m.find(function(e){return e.value===t});s=m.filter(function(e){return m.value===e}),d([].concat(Object(u.a)(s),[a])),G(a.label),W(a.value),J(a.value);var l=e.target.value;de(Object(r.a)({},ve,{elem1:l})),e.target.value=F},value:je},n.a.createElement("option",{disabled:!0,value:""},"select an option"),m.map(function(e,t){return n.a.createElement("option",{key:e.value,value:e.value,label:e.label,text:e.label})})),n.a.createElement("hr",null),n.a.createElement("label",{for:"state"},"Leverans typ"),n.a.createElement("select",{class:"custom-select d-block w-100",onChange:function(e){var t=e.target.value,a=v.find(function(e){return e.value===t});k=v.filter(function(e){return v.value===t}),x([].concat(Object(u.a)(k),[a])),se(a.label),z(a.value);var l=e.target.value;de(Object(r.a)({},ve,{elem3:l}))},value:ke},n.a.createElement("option",{disabled:!0,value:""},"select an option"),v.map(function(e,t){return n.a.createElement("option",{key:e.value,value:e.value,label:e.label,text:e.label})})),n.a.createElement("hr",null)),n.a.createElement("div",{class:"col-md-3 mb-3"},n.a.createElement("label",{for:"state"},"Mottagare"),n.a.createElement("select",{class:"custom-select d-block w-100",onChange:function(e){var t=e.target.value,a=m.find(function(e){return e.value===t});f=m.filter(function(e){return m.value===t}),p([].concat(Object(u.a)(f),[a])),ae(a.label),T(a.value);var l=e.target.value;de(Object(r.a)({},ve,{elem2:l}))},value:Oe},n.a.createElement("option",{disabled:!0,value:""},"select an option"),i.map(function(e,t){return n.a.createElement("option",{key:e.value,value:e.value,label:e.label,text:e.label})})),n.a.createElement("hr",null),n.a.createElement("label",{for:"state"},"Vikt"),n.a.createElement("select",{class:"custom-select d-block w-100",onChange:function(e){var t=e.target.value,a=b.find(function(e){return e.value===t});S=b.filter(function(e){return b.value===t}),y([].concat(Object(u.a)(S),[a])),me(a.label),Z(a.value);var l=e.target.value;de(Object(r.a)({},ve,{elem4:l})),"1"===Ee&&"1"===ge&&"2"===fe&&"1"===l&&de(Object(r.a)({},ve,{elem5:"99"})),"1"===Ee&&"2"===ge&&"2"===fe&&"1"===l&&de(Object(r.a)({},ve,{elem5:"199"}))},value:xe},n.a.createElement("option",{disabled:!0,value:""},"select an option"),b.map(function(e,t){return n.a.createElement("option",{key:e.value,value:e.value,label:e.label,text:e.label})})),n.a.createElement("hr",null)),n.a.createElement("div",{class:"col-md-6 mb-3"},n.a.createElement("h4",{class:"d-flex justify-content-between align-items-center mb-3"},n.a.createElement("span",{class:"text-muted"},"Resultat:"),n.a.createElement("span",{class:"badge badge-secondary badge-pill"},pe)),n.a.createElement("ul",{class:"list-group mb-3"},n.a.createElement("li",{class:"list-group-item d-flex justify-content-between lh-condensed"},n.a.createElement("div",null,n.a.createElement("small",{class:"text-muted"},"Upph\xe4mtningsadress")),n.a.createElement("small",{class:"text-muted"},F),n.a.createElement("input",{type:"hidden",name:"from",value:B,onChange:function(e){var t=e.target.value;de(Object(r.a)({},ve,{elem1:t}))}})),n.a.createElement("li",{class:"list-group-item d-flex justify-content-between lh-condensed"},n.a.createElement("div",null,n.a.createElement("small",{class:"text-muted"},"Mottagare")),n.a.createElement("small",{class:"text-muted"},te)),n.a.createElement("li",{class:"list-group-item d-flex justify-content-between lh-condensed"},n.a.createElement("div",null,n.a.createElement("small",{class:"text-muted"},"Leverans typ")),n.a.createElement("small",{class:"text-muted"},ce)),n.a.createElement("li",{class:"list-group-item d-flex justify-content-between lh-condensed"},n.a.createElement("div",null,n.a.createElement("small",{class:"text-muted"},"Vikt")),n.a.createElement("small",{class:"text-muted"},oe)),n.a.createElement("li",{class:"list-group-item d-flex justify-content-between bg-light"},n.a.createElement("div",{class:"text-success"},n.a.createElement("small",null,"EXAMPLECODE")),n.a.createElement("span",{class:"text-success"},pe," Kr")),n.a.createElement("li",{class:"list-group-item d-flex justify-content-between"},n.a.createElement("span",null,"Total (SEK)"),n.a.createElement("strong",null,void 0))))))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.20b50469.chunk.js.map