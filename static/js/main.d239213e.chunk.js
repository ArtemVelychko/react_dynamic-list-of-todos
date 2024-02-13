(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(4),r=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(13),c(14),c(7)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.setTodoId,s=e.todoId;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title;return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-danger":!a},{"has-text-success":a}),children:n})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:s===t?Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(0)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye-slash"})})}):Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(t)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})};!function(e){e[e.All=0]="All",e[e.Active=1]="Active",e[e.Completed=2]="Completed"}(s||(s={}));var m=function(e){var t=e.setFilter,c=e.setSearchQuery,a=e.query;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case"completed":t(s.Completed);break;case"active":t(s.Active);break;default:t(s.All)}},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){c(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")},"aria-label":"delete"})})]})]})},O=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.todoId,c=e.todos,s=e.setTodoId,a=Object(d.useState)(null),n=Object(r.a)(a,2),i=n[0],j=n[1],u=Object(d.useState)(null),h=Object(r.a)(u,2),m=h[0],f=h[1],p=Object(d.useState)(!0),v=Object(r.a)(p,2),N=v[0],y=v[1],g=m||{},k=g.completed,w=g.title,C=function(e){return c.find((function(t){return t.id===e}))||null},S=function(){var e=Object(l.a)(o.a.mark((function e(){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=C(t))){e.next=8;break}return e.next=4,a=c.userId,x("/users/".concat(a));case 4:s=e.sent,f(c),j(s),y(!1);case 8:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){S()}),[t]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),N?Object(b.jsx)(O,{}):Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t]}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(0)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:w}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[k?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===i||void 0===i?void 0:i.name})]})]})]})]})},p=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(0),i=Object(r.a)(n,2),j=i[0],u=i[1],p=Object(d.useState)(!0),v=Object(r.a)(p,2),N=v[0],y=v[1],g=Object(d.useState)(s.All),k=Object(r.a)(g,2),w=k[0],C=k[1],S=Object(d.useState)(""),I=Object(r.a)(S,2),A=I[0],T=I[1],_=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/todos");case 2:t=e.sent,a(t),y(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){_()}),[]);var B=c.filter((function(e){return e.title.toLowerCase().includes(A.toLowerCase())})),E=Object(d.useMemo)((function(){switch(w){case s.Active:return B.filter((function(e){return!e.completed}));case s.Completed:return B.filter((function(e){return e.completed}));default:return B}}),[B,w]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{setFilter:C,query:A,setSearchQuery:T})}),Object(b.jsx)("div",{className:"block",children:N?Object(b.jsx)(O,{}):Object(b.jsx)(h,{todos:E,todoId:j,setTodoId:u})})]})})}),0!==j&&Object(b.jsx)(f,{todoId:j,todos:E,setTodoId:u})]})};n.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d239213e.chunk.js.map