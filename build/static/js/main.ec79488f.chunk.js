(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(16),c=n.n(r),o=n(3),s=n(2),a=(n(21),n(4)),u=n.n(a),i="/api/persons";var l={getAll:function(){return u.a.get(i).then((function(e){return e.data}))},create:function(e){return u.a.post(i,e).then((function(e){return e.data}))},update:function(e,t){return u.a.put("".concat(i,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){return u.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data}))}},d=n(0),b=function(e){var t=e.state,n=t.search,r=t.setSearch;return Object(d.jsxs)("div",{children:["Search: ",Object(d.jsx)("input",{onChange:function(e){r(e.target.value)},value:n})]})};var m=function(e){var t=e.state,n=t.newName,r=t.setNewName,c=t.newNumber,o=t.setNewNumber,s=t.persons,a=t.setPersons,u=t.setMessage;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.slice(),i=t.find((function(e){return e.name.toLowerCase()===n.trim().toLowerCase()}));if(i)return i.number===c.trim()?(alert("There is already an entry for ".concat(n," with the same number.")),null):window.confirm("There is already an entry for ".concat(i.name,". Update number?"))?(i.number=c.trim(),l.update(i.id,i).then((function(){a(t),u({text:"Updated ".concat(i.name,"'s phone number."),type:"success"}),setTimeout((function(){return u({text:null})}),3e3)})),!0):null;var d={name:n.trim(),number:c.trim()};l.create(d).then((function(e){a(s.concat(e)),r(""),o(""),u({text:"Added ".concat(n," to phonebook."),type:"success"}),setTimeout((function(){return u({text:null})}),3e3)}))},children:[Object(d.jsxs)("div",{children:["Name: ",Object(d.jsx)("input",{onChange:function(e){r(e.target.value)},value:n}),"Number: ",Object(d.jsx)("input",{onChange:function(e){o(e.target.value)},value:c})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add / edit"})})]})};function f(e){var t=e.info,n=e.deletePerson;return Object(d.jsxs)("p",{children:[t.name," - ",t.number," -",Object(d.jsx)("button",{onClick:n,value:t.id,children:"delete"})]})}var j=function(e){var t=e.foundPersons,n=e.allPersons,r=e.setPersons,c=e.setMessage;function o(e){var t=Number(e.target.value),o=n.find((function(e){return e.id===t}));window.confirm("Delete ".concat(o.name," from phonebook?"))&&l.remove(t).then((function(){c({text:"Deleted ".concat(o.name," from phonebook."),type:"success"}),setTimeout((function(){return c({text:null})}),3e3),r(n.filter((function(e){return e.id!==t})))})).catch((function(e){c({text:"".concat(o.name,"'s information was already deleted from server."),type:"error"}),setTimeout((function(){return c({text:null})}),5e3),r(n.filter((function(e){return e.id!==t})))}))}return t.length>0?Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(f,{info:e,deletePerson:o},e.id)}))}):Object(d.jsx)("p",{children:"No name or number contains the search term."})};var h=function(e){var t=e.message;return null===t.text?null:Object(d.jsx)("div",{className:t.type,children:t.text})};var p=function(){var e,t,n=Object(s.useState)([]),r=Object(o.a)(n,2),c=r[0],a=r[1],u=Object(s.useState)(""),i=Object(o.a)(u,2),f=i[0],p=i[1],v=Object(s.useState)(""),x=Object(o.a)(v,2),O=x[0],w=x[1],g=Object(s.useState)(""),N=Object(o.a)(g,2),y=N[0],P=N[1],k=Object(s.useState)({text:null,type:"success"}),S=Object(o.a)(k,2),C=S[0],T=S[1];return Object(s.useEffect)((function(){l.getAll().then((function(e){a(e)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(h,{message:C}),Object(d.jsx)(b,{state:{search:y,setSearch:P}}),Object(d.jsx)("h2",{children:"Add person or edit number"}),Object(d.jsx)(m,{state:{newName:f,setNewName:p,newNumber:O,setNewNumber:w,persons:c,setPersons:a,setMessage:T}}),Object(d.jsx)("h2",{children:"People"}),Object(d.jsx)(j,{foundPersons:(e=c,t=y,t=t.toLowerCase(),e.filter((function(e){var n;return e.name.toLowerCase().includes(t)||(null===(n=e.number)||void 0===n?void 0:n.includes(t))}))),allPersons:c,setPersons:a,setMessage:T})]})};c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ec79488f.chunk.js.map