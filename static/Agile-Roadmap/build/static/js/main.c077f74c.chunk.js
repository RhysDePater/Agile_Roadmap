(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{69:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),i=s(26),r=s.n(i),a=s(10),l=s.n(a),o=s(18),j=s(13),u=Object(n.createContext)(null);function d(){return Object(n.useContext)(u)}var b=s(14),h=(s(69),s(35)),O=s(99),x=s(98),p=s(100),f=s(91),v=s(92),g=s(93),m=s(94),N=s(1);function k(e,t,s){var c=Object(n.useState)(!1),i=Object(j.a)(c,2),r=i[0],a=i[1];return Object(N.jsx)("div",{children:Object(N.jsxs)(O.a,{isOpen:r,toggle:function(){return a((function(e){return!e}))},className:"buttonDrop",children:[Object(N.jsxs)(x.a,{caret:!0,className:"fgh",children:["Filter ",s]}),Object(N.jsx)(p.a,{children:e.map((function(s,n){return Object(N.jsx)(f.a,{toggle:!1,children:Object(N.jsxs)(v.a,{check:!0,children:[Object(N.jsxs)(g.a,{check:!0,children:[e[n].name,Object(N.jsx)(m.a,{type:"checkbox",defaultChecked:s.isSelected,onChange:function(s){if(1==s.target.checked){var c=Object(h.a)(e);console.log("BOOLEAN set to: "+s.target.checked),c[n].isSelected=s.target.checked,t(c),console.log(e[n].isSelected)}if(0==s.target.checked){var i=Object(h.a)(e);console.log("BOOLEAN set to: "+s.target.checked),i[n].isSelected=s.target.checked,t(i),console.log(e[n].isSelected)}}})," "]})," "]})})}))})]})})}function y(){var e=d(),t=e.fixedVersions,s=e.setFixedVersions,n=d(),c=n.initiatives,i=n.setInitiatives;return Object(N.jsxs)("div",{className:"dropItem",children:[k(t,s,"Releases"),k(c,i,"Initiative")]})}function D(e,t){var s=[];return e.map((function(e,n){e.issueType==t&&s.push(e)})),s}function E(e,t){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(l.a.mark((function e(t,s){var n,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,c=0,i=0,t.map((function(e,t){var s=e.fields.status.name;"Done"==s?n+=1:"Backlog"==s||"Selected For Development"==s?i+=1:c+=1})),r={key:s,length:t.length,Done:n,Progress:c,Backlog:i},e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(l.a.mark((function e(t,s){var n,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=100,c=100,i=0,r=[];case 4:if(!(c>=n||c>0)){e.next=9;break}return e.next=7,Object(b.invoke)(s,{Key:t,start:i,max:n}).then((function(e){e.map((function(e){r.push(e)})),c=e.length,console.log(c),i+=c}));case 7:e.next=4;break;case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(23);var w=s(97),B=s(96),I=s(95);function V(e,t,s,n){var c=100/e;return Object(N.jsx)("div",{className:"ProgBar",children:Object(N.jsxs)(I.a,{multi:!0,children:[Object(N.jsxs)(I.a,{bar:!0,className:"progressGreen",color:"success",value:t*c,children:[" ",t]}),Object(N.jsxs)(I.a,{bar:!0,className:"progressBlue",value:s*c,children:[" ",s]}),Object(N.jsxs)(I.a,{bar:!0,className:"progressGrey",value:n*c,children:[" ",n]})]})})}function K(e){var t=d(),s=t.initiativesProgress;t.setInitiativeProgress;return Object(N.jsx)(B.a,{xs:"auto",children:Object(N.jsx)("div",{className:"initiativeBox",children:Object(N.jsxs)("div",{className:"initiative",onClick:function(){return b.router.open("/browse/".concat(e.iKey))},children:[Object(N.jsx)("div",{className:"iniTitle",children:e.title}),Object(N.jsx)("div",{className:"pbar",children:s.map((function(t,s){return Object(N.jsx)("div",{children:function(){if(t.key==e.iKey)return 0==!t.length?Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"initiativeBar",children:V(t.length,t.Done,t.Progress,t.Backlog)}),Object(N.jsx)("span",{className:"storieGreen",children:" Done"}),Object(N.jsx)("span",{children:" / "}),Object(N.jsx)("span",{className:"storieblue",children:" in Progress"}),Object(N.jsx)("span",{children:" / "}),Object(N.jsx)("span",{className:"storieGrey",children:" Backlog"})]}):Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"initiativeBar",children:Object(N.jsx)("div",{className:"ProgBar",children:Object(N.jsx)(I.a,{bar:!0,className:"progressGrey",value:"100",children:"No Epics exist"})})})})}()})}))}),Object(N.jsxs)("div",{className:"InititivetextCont",children:[Object(N.jsx)("div",{className:"initiativeDueDate",children:Object(N.jsx)("p",{className:"initDueDate",children:e.dueDate})}),Object(N.jsx)("div",{className:"initiativeKey",children:Object(N.jsx)("p",{className:"initKey",children:e.iKey})})]})]})})})}function C(e){return Object(N.jsx)(B.a,{xs:"auto",children:Object(N.jsx)("div",{className:"fixSize",children:Object(N.jsxs)("p",{className:"dateonfix",children:[e.title," -- ",e.start," -"," ",e.end]})})})}function F(e){var t=d(),s=t.epics,n=(t.setEpics,d()),c=n.epicsProgress;n.setEpicsProgress;return Object(N.jsxs)("div",{className:"fixedVersion",children:[Object(N.jsx)("p",{className:"fadedTitleCell",children:e.title}),s.map((function(t,s){return Object(N.jsx)("div",{children:t.fixVersions.map((function(s,n){return Object(N.jsx)("div",{onClick:function(){return b.router.open("/browse/".concat(t.key))},children:function(){if(s==e.id)return Object(N.jsx)("div",{children:t.parents.map((function(s,n){return Object(N.jsx)("div",{children:function(){if(s==e.initKey)return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"epic",children:[Object(N.jsx)("div",{className:"epicName",children:Object(N.jsx)("p",{children:t.name})}),c.length>0?Object(N.jsx)("div",{className:"pbar",children:c.map((function(e,s){return Object(N.jsx)("div",{children:function(){if(e.key==t.key)return 0==!e.length?Object(N.jsxs)("div",{children:[Object(N.jsxs)("p",{children:["Number of Stories : ",e.length]}),V(e.length,e.Done,e.Progress,e.Backlog),Object(N.jsx)("span",{className:"storieGreen",children:" Done"}),Object(N.jsx)("span",{children:" / "}),Object(N.jsx)("span",{className:"storieblue",children:" in Progress"}),Object(N.jsx)("span",{children:" / "}),Object(N.jsx)("span",{className:"storieGrey",children:" Backlog"})]}):Object(N.jsx)("div",{children:Object(N.jsxs)("p",{children:["Number of stories : ",e.length]})})}()})}))}):Object(N.jsx)("div",{class:"loader",children:"Loading..."}),Object(N.jsx)("p",{className:"epicNum",children:t.key})]})})}()})}))})}()})}))})}))]})}function G(){var e=d(),t=e.fixedVersions,s=(e.setFixedVersions,d()),n=s.initiatives,c=(s.setInitiatives,d());c.epics,c.setEpics;return Object(N.jsxs)("div",{className:"tablecont",children:[Object(N.jsx)(w.a,{children:Object(N.jsxs)("div",{className:"ui-cont",children:[Object(N.jsx)(B.a,{xs:"auto",children:Object(N.jsx)("div",{className:"InitiativeSize"})}),Object(N.jsx)("div",{className:"ui-cont",children:t.map((function(e,t){return Object(N.jsx)("div",{children:function(){if(1==e.isSelected)return Object(N.jsx)(C,{title:e.name,start:e.startDate,end:e.releaseDate})}()})}))})]})}),n.map((function(e,s){return Object(N.jsx)("div",{children:function(){if(1==e.isSelected)return Object(N.jsx)(w.a,{className:"initRow",children:Object(N.jsxs)("div",{className:"ui-cont",children:[Object(N.jsx)(K,{title:e.name,iKey:e.key,dueDate:e.dueDate}),t.map((function(t,s){return Object(N.jsx)(B.a,{xs:"auto",children:function(){if(1==t.isSelected)return Object(N.jsx)(F,{id:t.id,title:t.name,start:t.startDate,end:t.releaseDate,initKey:e.key})}()})}))]})})}()})}))]})}function A(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)([]),r=Object(j.a)(i,2),a=r[0],d=r[1],h=Object(n.useState)([]),O=Object(j.a)(h,2),x=O[0],p=O[1],f=Object(n.useState)([]),v=Object(j.a)(f,2),g=v[0],m=v[1],k=Object(n.useState)([]),S=Object(j.a)(k,2),R=S[0],w=S[1],B=Object(n.useState)([]),I=Object(j.a)(B,2),V=I[0],K=I[1],C=Object(n.useState)(!1),F=Object(j.a)(C,2);F[0],F[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.view.getContext();case 3:return t=e.sent,s=t.extension.project.key,e.next=7,Object(b.invoke)("getFixedVersions",{projectKey:s}).then((function(e){return c(e)}));case 7:P(s,"getIssues").then((function(e){p(D(e,"Epic")),d(D(e,"Initiative")),K(e)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("API RENDER ERROR: "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){!function(){try{if(a.length>0){var e=a.sort((function(e,t){return new Date(e.dueDate)-new Date(t.dueDate)}));d(e)}}catch(t){console.log("API RENDER ERROR: "+t)}}()}),[a]),Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{x.length>0&&(t=[],x.map((function(e,s){P(e.key,"getStoriesForEpics").then((function(s){E(s,e.key).then((function(e){t.push(e),x.length==t.length&&m(t)}))}))})))}catch(s){console.log("API RENDER ERROR: "+s)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),Object(n.useEffect)((function(){!function(){try{if(a.length>0&&x.length>0&&s.length>0){var e=function(e,t,s){var n=[];return e.map((function(e,c){var i=0,r=0,a=0,l=0;e.childrens.map((function(e,n){t.map((function(t,n){e==t.key&&s.map((function(e,s){t.fixVersions[0]==e.id&&1==e.isSelected&&(console.log(t.fixVersions[0]+"=="+e.id),console.log(e.isSelected),"Done"==t.status?r+=1:"Backlog"==t.status||"Selected For Development"==t.status?l+=1:a+=1,i+=1)}))}))}));var o={key:e.key,length:i,Done:r,Progress:a,Backlog:l};n.push(o)})),console.log(n),n}(a,x,s);w(e)}}catch(t){console.log("API ERROR: "+t)}}()}),[a,x,s]),s.length>0&&V.length>0?Object(N.jsx)("div",{children:Object(N.jsxs)(u.Provider,{value:{fixedVersions:s,setFixedVersions:c,issues:V,setIssues:K,initiatives:a,setInitiatives:d,epics:x,setEpics:p,epicsProgress:g,setEpicsProgress:m,initiativesProgress:R,setInitiativeProgress:w},children:[Object(N.jsx)(y,{}),Object(N.jsx)(G,{})]})}):Object(N.jsxs)("div",{className:"lds-ring",children:[Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{})]})}s(88),s(89);r.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(A,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.c077f74c.chunk.js.map