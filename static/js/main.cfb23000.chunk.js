(this["webpackJsonpreact-covid-19-data-analysis"]=this["webpackJsonpreact-covid-19-data-analysis"]||[]).push([[0],{54:function(e,t,a){e.exports=a(67)},59:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(59),a(24)),i=a(27),s=a.n(i),u=a(33),m=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://covid19.mathdro.id/api",e.next=3,fetch("https://covid19.mathdro.id/api");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,console.log(a.confirmed.value,"fetchering"),e.next=10,fetch(a.countries).then((function(e){return e.json()}));case 10:return n=e.sent,e.abrupt("return",{confirmed:a.confirmed.value,deaths:a.deaths.value,recovered:a.recovered.value,countries:n.countries});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://covid19.mathdro.id/api/countries/".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=a(101),f=a(46),b=a(113),v=a(109),h=a(110),E=a(104),x=a(107),g=a(106),y=a(19),j=a.n(y);var O=function(e){var t=e.confirmed,a=e.deaths,n=e.recovered,c=Object(p.a)((function(e){return{paper:{padding:e.spacing(2),color:e.palette.text.secondary,boxShadow:"4px 4px 31px 2px rgba(0, 0, 0, 0.10)",backgroundColor:"#fff"},confirmed:{color:"#FAC651"},deaths:{color:"#F55661"},recovered:{color:"#02D463"}}}))();return r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:12,md:4,lg:4},r.a.createElement(g.a,{className:c.paper},r.a.createElement(x.a,{component:"body1",variant:"subtitle1"},"Confirmed"),r.a.createElement("br",null),r.a.createElement(x.a,{component:"body1",variant:"h4"},r.a.createElement(j.a,{start:0,end:t,duration:1.5,separator:",",className:c.confirmed})))),r.a.createElement(E.a,{item:!0,xs:12,sm:12,md:4,lg:4},r.a.createElement(g.a,{className:c.paper},r.a.createElement(x.a,{component:"body1",variant:"subtitle1"},"Deaths"),r.a.createElement("br",null),r.a.createElement(x.a,{component:"body1",variant:"h4"},r.a.createElement(j.a,{start:0,end:a,duration:1.5,separator:",",className:c.deaths})))),r.a.createElement(E.a,{item:!0,xs:12,sm:12,md:4,lg:4},r.a.createElement(g.a,{className:c.paper},r.a.createElement(x.a,{component:"body1",variant:"subtitle1"},"Recovered"),r.a.createElement("br",null),r.a.createElement(x.a,{component:"body1",variant:"h4"},r.a.createElement(j.a,{start:0,end:n,duration:1.5,separator:",",className:c.recovered})))))},S=a(47),w=a(111),C=a(112);var k=function(e){var t=e.countries,a=Object(p.a)((function(e){return{paper:{padding:e.spacing(2),color:e.palette.text.secondary,boxShadow:"4px 4px 31px 2px rgba(0, 0, 0, 0.10)",backgroundColor:"#fff"},input:{backgroundColor:"#fff","&:hover":{backgroundColor:"#fff"},"&::placeholder":{textOverflow:"ellipsis !important",color:"blue"},boxShadow:"4px 4px 31px 2px rgba(0, 0, 0, 0.10)"}}}))(),c=Object(n.useState)(""),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)({}),m=Object(l.a)(u,2),f=m[0],b=m[1],v=f.confirmed,h=void 0===v?0:v,y=f.deaths,O=void 0===y?0:y,k=f.recovered,N=void 0===k?0:k,I=Object(n.useState)(!1),D=Object(l.a)(I,2),F=(D[0],D[1]);return Object(n.useEffect)((function(){console.log(i,"search is"),i&&""!==i.trim&&(F(!0),setTimeout((function(){d(i.iso3).then((function(e){console.log({data:e}),b(e)})).finally(F(!1))}),100))}),[i]),Object(n.useEffect)((function(){console.log({country:f})}),[f]),r.a.createElement(E.a,null,r.a.createElement(E.a,null,r.a.createElement(C.a,{autoSelect:!0,getOptionLabel:function(e){return e.name},getOptionSelected:function(e){return e.name},options:t,value:i,onChange:function(e,t){return function(e){console.log({value:e},"selected country"),s(e)}(t)},renderInput:function(e){return r.a.createElement(w.a,Object.assign({},e,{variant:"outlined",label:"Search",fullWidth:!0,hiddenLabel:!0,onClose:function(){return console.log("close")},style:{backgroundColor:"white"},InputProps:Object(S.a)({},e.InputProps,{className:a.input,disableUnderline:!0})}))}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{className:a.paper},r.a.createElement(E.a,{container:!0,spacing:2,xs:12},r.a.createElement(E.a,{item:!0,xs:4},r.a.createElement(x.a,{component:"body1",variant:"subtitle1"},"Confirmed"),r.a.createElement("br",null),r.a.createElement(x.a,{component:"body1",variant:"h4"},h&&h.value?r.a.createElement(j.a,{start:0,end:h&&h.value,duration:1.5,separator:","}):"0")),r.a.createElement(E.a,{item:!0,xs:4},r.a.createElement(x.a,{component:"body1",variant:"subtitle1"},"Deaths"),r.a.createElement("br",null),r.a.createElement(x.a,{component:"body1",variant:"h4"},O&&O.value?r.a.createElement(j.a,{start:0,end:O&&O.value,duration:1.5,separator:","}):"0")),r.a.createElement(E.a,{item:!0,xs:4},r.a.createElement(x.a,{component:"body1",variant:"subtitle1"},"Recovered"),r.a.createElement("br",null),r.a.createElement(x.a,{component:"body1",variant:"h4"},N&&N.value?r.a.createElement(j.a,{start:0,end:N&&N.value,duration:1.5,separator:","}):"0")))))};var N=function(){return r.a.createElement(x.a,{variant:"h1",component:"h2",style:{fontSize:"72px",color:"#404040"}},"COVID-19")},I=function(){var e=Object(n.useState)({confirmed:0,deaths:0,recovered:0,countries:[]}),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){m().then((function(e){var t=e.confirmed,a=e.deaths,n=e.recovered,r=e.countries;c({confirmed:t,deaths:a,recovered:n,countries:r})}))}),[]);var o=Object(p.a)((function(e){return{container:{height:"100vh"},title:{fontSize:"72px",color:"#404040"}}}))(),i=Object(f.a)({typography:{fontFamily:"Spartan, sans-serif"},palette:{primary:{main:"#fff"}}});return i=Object(b.a)(i),r.a.createElement(v.a,{theme:i},r.a.createElement(h.a,{maxWidth:"lg",className:o.container},r.a.createElement(E.a,{container:!0,spacing:0,direction:"column",justify:"center",style:{minHeight:"100vh",fontFamily:"Jost"}},r.a.createElement(N,null),r.a.createElement("br",null),r.a.createElement(O,a),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k,a))))};o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.cfb23000.chunk.js.map