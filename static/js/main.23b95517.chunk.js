(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(11),r=n.n(i),o=(n(17),n(12)),s=n(2),u=n(7),l=n.n(u),m=(n(26),n(3)),b=n.n(m),d=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(s.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,r]},j=n(0);var f=function(e){var t=e.onSubmit,n=d("stateName",""),a=Object(s.a)(n,2),c=a[0],i=a[1],r=d("number",""),o=Object(s.a)(r,2),u=o[0],l=o[1],m=function(){i(""),l("")},f=function(e){var t=e.target,n=t.name,a=t.value;"name"===n?i(a):"number"===n&&l(a)};return Object(j.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),t({stateName:c,number:u}),m()},children:[Object(j.jsxs)("label",{className:b.a.label,children:["Name",Object(j.jsx)("input",{className:b.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:f})]}),Object(j.jsxs)("label",{className:b.a.label,children:["Number",Object(j.jsx)("input",{className:b.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:f})]}),Object(j.jsx)("button",{className:b.a.button,type:"submit",onSubmit:m,children:"Add contact"})]})},p=n(8),h=n.n(p);function _(e){var t=e.date,n=e.onDelete;return Object(j.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.name,a=e.number;return Object(j.jsxs)("li",{className:h.a.item,children:[t," : ",a," ",Object(j.jsx)("button",{className:h.a.button,type:"button",onClick:function(){return n(t)},children:"Delete"})]},l.a.generate())}))})}var O=n(9),v=n.n(O),x=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("div",{className:v.a.wrap,children:[Object(j.jsx)("p",{className:v.a.title,children:"Find contacts by name"}),Object(j.jsx)("input",{className:v.a.input,type:"text",name:"filter",value:t,onChange:n})]})};var g=function(){var e=d("contacts",[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=d("filter",""),i=Object(s.a)(c,2),r=i[0],u=i[1],m=0===r.length?n:function(){var e=r.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)("section",{className:"mainSection",children:[Object(j.jsxs)("h1",{className:"mainTitle",children:[Object(j.jsx)("span",{className:"logo",children:"P"}),"honebook"]}),Object(j.jsx)(f,{onSubmit:function(e){var t=e.stateName,c=e.number,i={id:l.a.generate(),name:t,number:c};n.find((function(e){return e.name.includes(t)}))?alert("its contact already added"):a([i].concat(Object(o.a)(n)))}}),Object(j.jsx)("h2",{className:"mainTitle",children:"Contacts"}),Object(j.jsx)(x,{value:r,onChange:function(e){var t=e.currentTarget.value;u(t)}}),Object(j.jsx)(_,{date:m,onDelete:function(e){a(n.filter((function(t){return t.name!==e})))}})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),C()},3:function(e,t,n){e.exports={form:"ContactForm_form__2deif",label:"ContactForm_label__1-Jfp",input:"ContactForm_input__24UZ6",button:"ContactForm_button__37cM_"}},8:function(e,t,n){e.exports={list:"ContactList_list__2E7j8",item:"ContactList_item__11v-_",button:"ContactList_button__2nhjn"}},9:function(e,t,n){e.exports={title:"Filter_title__2qF8R",wrap:"Filter_wrap__20gHf",input:"Filter_input__2lYVH"}}},[[28,1,2]]]);
//# sourceMappingURL=main.23b95517.chunk.js.map