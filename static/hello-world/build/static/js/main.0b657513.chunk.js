(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{68:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(27),r=n.n(s),a=n(12),j=n.n(a),l=n(21),d=n(14),o=Object(c.createContext)(null);function u(){return Object(c.useContext)(o)}var b=n(24),O=(n(68),n(34)),x=n(90),h=n(96),p=n(97),f=n(91),v=n(92),m=n(93),g=n(1);function N(e,t){var n=Object(c.useState)(!1),i=Object(d.a)(n,2),s=i[0],r=i[1];return Object(g.jsx)("div",{children:Object(g.jsxs)(x.a,{isOpen:s,toggle:function(){return r((function(e){return!e}))},children:[Object(g.jsx)(h.a,{tag:"span","data-toggle":"dropdown","aria-expanded":s,children:Object(g.jsx)("div",{className:"dropdwnbtn",children:Object(g.jsx)("b",{children:"Filter \u25b6"})})}),Object(g.jsx)(p.a,{children:e.map((function(n,c){return Object(g.jsx)("div",{className:"dropitem",children:Object(g.jsxs)(f.a,{check:!0,children:[Object(g.jsxs)(v.a,{check:!0,children:[e[c][1],Object(g.jsx)(m.a,{type:"checkbox",defaultChecked:n[n.length-1],onChange:function(n){if(1==n.target.checked){var i=Object(O.a)(e);console.log("BOOLEAN set to: "+n.target.checked),i[c][i[c].length-1]=n.target.checked,t(i),console.log(e[c][i.length-1])}if(0==n.target.checked){var s=Object(O.a)(e);console.log("BOOLEAN set to: "+n.target.checked),s[c][s[c].length-1]=n.target.checked,t(s),console.log(e[c][s.length-1])}}})," "]})," "]})})}))})]})})}function k(){var e=u(),t=e.fixedVersions,n=e.setFixedVersions,c=u();c.initiatives,c.setInitiatives;return Object(g.jsx)("div",{children:N(t,n)})}function y(e,t){var n=[];return e.map((function(e,c){e.issueType==t&&n.push(e)})),console.log(n),n}n(26);var E=n(95),S=n(94);function w(e){return Object(g.jsx)(S.a,{xs:"auto",children:Object(g.jsx)("div",{className:"initiativeBox",children:Object(g.jsx)("div",{className:"intiative",children:e.title})})})}function R(e){return Object(g.jsx)(S.a,{xs:"auto",children:Object(g.jsx)("div",{className:"fixSize",children:Object(g.jsxs)("p",{className:"dateonfix",children:[e.title," -- ",e.start," -"," ",e.end]})})})}function I(e){var t=u(),n=t.epics;t.setEpics;return Object(g.jsxs)("div",{className:"fixedVersion",children:[Object(g.jsx)("p",{className:"fadedTitleCell",children:e.title}),n.map((function(t,n){return Object(g.jsx)("div",{children:function(){if(t.fixVersions==e.id)return Object(g.jsx)("div",{children:t.parents.map((function(n,c){return Object(g.jsx)("div",{children:function(){if(n==e.initKey)return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"epic",children:[Object(g.jsx)("div",{className:"epicName",children:Object(g.jsx)("p",{children:t.name})}),Object(g.jsx)("p",{className:"epicNum",children:t.key})]})})}()})}))})}()})}))]})}function V(){var e=u(),t=e.fixedVersions,n=(e.setFixedVersions,u()),c=n.initiatives,i=(n.setInitiatives,u());i.epics,i.setEpics;return Object(g.jsxs)("div",{className:"tablecont",children:[Object(g.jsx)(E.a,{children:Object(g.jsxs)("div",{className:"ui-cont",children:[Object(g.jsx)(S.a,{xs:"auto",children:Object(g.jsx)("div",{className:"InitiativeSize"})}),Object(g.jsx)("div",{className:"ui-cont",children:t.map((function(e,t){return Object(g.jsx)("div",{children:function(){if(1==e.isSelected)return Object(g.jsx)(R,{title:e.name,start:e.startDate,end:e.releaseDate})}()})}))})]})}),c.map((function(e,n){return Object(g.jsx)("div",{children:function(){if(1==e.isSelected)return Object(g.jsx)(E.a,{className:"initRow",children:Object(g.jsxs)("div",{className:"ui-cont",children:[Object(g.jsx)(w,{title:e.name}),t.map((function(t,n){return Object(g.jsx)(S.a,{xs:"auto",children:function(){if(1==t.isSelected)return Object(g.jsx)(I,{id:t.id,title:t.name,start:t.startDate,end:t.releaseDate,initKey:e.key})}()})}))]})})}()})}))]})}function C(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),r=Object(d.a)(s,2),a=r[0],u=r[1],O=Object(c.useState)([]),x=Object(d.a)(O,2),h=x[0],p=x[1],f=Object(c.useState)([]),v=Object(d.a)(f,2),m=v[0],N=v[1],E=Object(c.useState)([]),S=Object(d.a)(E,2),w=S[0],R=S[1],I=Object(c.useState)(!1),C=Object(d.a)(I,2);C[0],C[1];function D(){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.invoke)("getProgressForEpics",{epicKey:h}).then((function(e){return N(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("API RENDER ERROR: "+e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.view.getContext();case 3:return t=e.sent,n=t.extension.project.key,e.next=7,Object(b.invoke)("getFixedVersions",{projectKey:n}).then((function(e){return i(e)}));case 7:return e.next=9,Object(b.invoke)("getIssues",{projectKey:n}).then((function(e){p(y(e,"Epic")),u(y(e,"Initiative")),R(e),D()}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("API RENDER ERROR: "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n.length>0&&w.length>0?Object(g.jsxs)("div",{children:[Object(g.jsxs)(o.Provider,{value:{fixedVersions:n,setFixedVersions:i,issues:w,setIssues:R,initiatives:a,setInitiatives:u,epics:h,setEpics:p},children:[Object(g.jsx)(k,{}),Object(g.jsx)(V,{})]}),Object(g.jsx)("div",{children:n.map((function(e,t){return Object(g.jsx)("p",{children:Object.keys(e).map((function(t,n){return Object(g.jsxs)("span",{children:[t,": ",e[t]]})}))})}))}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:h.map((function(e,t){return Object(g.jsx)("p",{children:Object.keys(e).map((function(t,n){return Object(g.jsxs)("span",{children:[t,": ",e[t]]})}))})}))}),Object(g.jsx)("br",{}),D().then((function(e){return JSON.stringify(e)})),JSON.stringify(m),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:a.map((function(e,t){return Object(g.jsx)("p",{children:Object.keys(e).map((function(t,n){return Object(g.jsxs)("span",{children:[t,": ",e[t]]})}))})}))})]}):Object(g.jsxs)("div",{className:"lds-ring",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})}n(87),n(88);r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.0b657513.chunk.js.map