(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{69:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(26),r=n.n(s),a=n(11),j=n.n(a),o=n(20),l=n(14),u=n(49),d=Object(c.createContext)(null);function b(){return Object(c.useContext)(d)}var O=n(21),h=(n(69),n(34)),x=n(99),f=n(97),p=n(98),v=n(91),m=n(92),g=n(93),k=n(94),y=n(2);function N(e,t,n){var i=Object(c.useState)(!1),s=Object(l.a)(i,2),r=s[0],a=s[1];return console.log(e),Object(y.jsx)("div",{children:Object(y.jsxs)(x.a,{isOpen:r,toggle:function(){return a((function(e){return!e}))},className:"buttonDrop",children:[Object(y.jsxs)(f.a,{caret:!0,className:"fgh",children:["Filter ",n]}),Object(y.jsx)(p.a,{children:e.map((function(n,c){return Object(y.jsx)(v.a,{toggle:!1,children:Object(y.jsxs)(m.a,{check:!0,children:[Object(y.jsxs)(g.a,{check:!0,children:[e[c].name,Object(y.jsx)(k.a,{type:"checkbox",defaultChecked:n.isSelected,onChange:function(n){if(1==n.target.checked){var i=Object(h.a)(e);console.log("BOOLEAN set to: "+n.target.checked),i[c].isSelected=n.target.checked,t(i),console.log(e[c].isSelected)}if(0==n.target.checked){var s=Object(h.a)(e);console.log("BOOLEAN set to: "+n.target.checked),s[c].isSelected=n.target.checked,t(s),console.log(e[c].isSelected)}}})," "]})," "]})})}))})]})})}function E(){var e=b(),t=e.fixedVersions,n=e.setFixedVersions,c=b(),i=c.initiatives,s=c.setInitiatives;return Object(y.jsxs)("div",{className:"dropItem",children:[N(t,n,"Realises"),N(i,s,"Initiative")]})}function S(e,t){var n=[];return e.map((function(e,c){e.issueType==t&&n.push(e)})),console.log(n),n}function R(e,t){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(j.a.mark((function e(t,n){var c,i,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=0,i=0,s=0,t.map((function(e,t){var n=e.fields.status.name;"Done"==n?c+=1:"Backlog"==n||"Selected For Development"==n?s+=1:i+=1})),r={key:n,length:t.length,Done:c,Progress:i,Backlog:s},e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(25);var w=n(96),I=n(95);function V(e){return Object(y.jsx)(I.a,{xs:"auto",children:Object(y.jsx)("div",{className:"initiativeBox",children:Object(y.jsx)("div",{className:"intiative",children:e.title})})})}function F(e){return Object(y.jsx)(I.a,{xs:"auto",children:Object(y.jsx)("div",{className:"fixSize",children:Object(y.jsxs)("p",{className:"dateonfix",children:[e.title," -- ",e.start," -"," ",e.end]})})})}function B(e){var t=b(),n=t.epics;t.setEpics;return Object(y.jsxs)("div",{className:"fixedVersion",children:[Object(y.jsx)("p",{className:"fadedTitleCell",children:e.title}),n.map((function(t,n){return Object(y.jsx)("div",{children:function(){if(t.fixVersions==e.id)return Object(y.jsx)("div",{children:t.parents.map((function(n,c){return Object(y.jsx)("div",{children:function(){if(n==e.initKey)return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"epic",children:[Object(y.jsx)("div",{className:"epicName",children:Object(y.jsx)("p",{children:t.name})}),Object(y.jsx)("p",{className:"epicNum",children:t.key})]})})}()})}))})}()})}))]})}function C(){var e=b(),t=e.fixedVersions,n=(e.setFixedVersions,b()),c=n.initiatives,i=(n.setInitiatives,b());i.epics,i.setEpics;return Object(y.jsxs)("div",{className:"tablecont",children:[Object(y.jsx)(w.a,{children:Object(y.jsxs)("div",{className:"ui-cont",children:[Object(y.jsx)(I.a,{xs:"auto",children:Object(y.jsx)("div",{className:"InitiativeSize"})}),Object(y.jsx)("div",{className:"ui-cont",children:t.map((function(e,t){return Object(y.jsx)("div",{children:function(){if(1==e.isSelected)return Object(y.jsx)(F,{title:e.name,start:e.startDate,end:e.releaseDate})}()})}))})]})}),c.map((function(e,n){return Object(y.jsx)("div",{children:function(){if(1==e.isSelected)return Object(y.jsx)(w.a,{className:"initRow",children:Object(y.jsxs)("div",{className:"ui-cont",children:[Object(y.jsx)(V,{title:e.name}),t.map((function(t,n){return Object(y.jsx)(I.a,{xs:"auto",children:function(){if(1==t.isSelected)return Object(y.jsx)(B,{id:t.id,title:t.name,start:t.startDate,end:t.releaseDate,initKey:e.key})}()})}))]})})}()})}))]})}function A(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),a=r[0],b=r[1],h=Object(c.useState)([]),x=Object(l.a)(h,2),f=x[0],p=x[1],v=Object(c.useState)([]),m=Object(l.a)(v,2),g=m[0],k=m[1],N=Object(c.useState)([]),D=Object(l.a)(N,2),w=D[0],I=D[1],V=Object(c.useState)(!1),F=Object(l.a)(V,2);F[0],F[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.view.getContext();case 3:return t=e.sent,n=t.extension.project.key,e.next=7,Object(O.invoke)("getFixedVersions",{projectKey:n}).then((function(e){return i(e)}));case 7:return e.next=9,Object(O.invoke)("getIssues",{projectKey:n}).then((function(e){p(S(e,"Epic")),b(S(e,"Initiative")),I(e)}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("API RENDER ERROR: "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){!function(){try{a.length>0&&(a.sort((function(e,t){return new Date(e.dueDate)-new Date(t.dueDate)})),Object(u.a)("initiatives"))}catch(e){console.log("API RENDER ERROR: "+e)}}()}),[a]),Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{f.length>0&&(t=[],f.map((function(e,n){Object(O.invoke)("getStoriesForEpics",{epicKey:e.key}).then((function(n){R(n,e.key).then((function(e){t.push(e),f.length==t.length&&k(t)}))}))})))}catch(n){console.log("API RENDER ERROR: "+n)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),n.length>0&&w.length>0&&g.length>0?Object(y.jsxs)("div",{children:[Object(y.jsxs)(d.Provider,{value:{fixedVersions:n,setFixedVersions:i,issues:w,setIssues:I,initiatives:a,setInitiatives:b,epics:f,setEpics:p},children:[Object(y.jsx)(E,{}),Object(y.jsx)(C,{})]}),Object(y.jsx)("div",{children:n.map((function(e,t){return Object(y.jsx)("p",{children:Object.keys(e).map((function(t,n){return Object(y.jsxs)("span",{children:[t,": ",e[t]]})}))})}))}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{children:f.map((function(e,t){return Object(y.jsx)("p",{children:Object.keys(e).map((function(t,n){return Object(y.jsxs)("span",{children:[t,": ",e[t]]})}))})}))}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{children:g.map((function(e,t){return Object(y.jsx)("p",{children:Object.keys(e).map((function(t,n){return Object(y.jsxs)("span",{children:[t,": ",e[t]]})}))})}))}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{children:a.map((function(e,t){return Object(y.jsx)("p",{children:Object.keys(e).map((function(t,n){return Object(y.jsxs)("span",{children:[t,": ",e[t]]})}))})}))})]}):Object(y.jsxs)("div",{className:"lds-ring",children:[Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{})]})}n(88),n(89);r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(A,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.b1422a0b.chunk.js.map