(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactItem:"contacts_contactItem__3BpPU",number:"contacts_number__17XBp",button:"contacts_button__2AQTF"}},26:function(t,e,n){t.exports={input:"filter_input__ySgjp"}},57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(9),u=n.n(o),s=n(5),i=n(10),b=n(4),l=n(6),j=n(7),d=n(2),f=Object(b.b)("contacts/addContactRequest"),m=Object(b.b)("contacts/addContactSuccess"),h=Object(b.b)("contacts/addContactError"),p=Object(b.b)("contacts/filterChange"),O=Object(b.b)("contacts/deleteContact"),v=Object(b.c)([],(a={},Object(j.a)(a,m,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(j.a)(a,O,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),x=Object(b.c)("",Object(j.a)({},p,(function(t,e){return e.payload}))),C=Object(d.b)({contacts:v,filter:x}),_=Object(i.a)(Object(b.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),g=Object(b.a)({reducer:{phonebook:C},middleware:_}),N=n(24),y=n(25),k=n(28),A=n(27),S=n(8),w=n.n(S),z=n(15),I=n.n(z);I.a.defaults.baseURL="http://localhost:4040";var R=function(t,e){return function(n){var a={name:t,number:e};n(f()),I.a.post("/contacts",a).then((function(t){var e=t.data;return n(m(e))})).catch((function(t){return n(h(t))}))}},B=n(1),D=function(t){Object(k.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.number,a=t.state.name;t.props.onSubmit(a,n),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(y.a)(n,[{key:"render",value:function(){return Object(B.jsxs)("form",{onSubmit:this.handleSubmit,className:w.a.form,children:[Object(B.jsxs)("label",{className:w.a.input,children:["Name",Object(B.jsx)("input",{value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(B.jsxs)("label",{className:w.a.input,children:["Number",Object(B.jsx)("input",{value:this.state.number,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(B.jsx)("button",{className:w.a.button,children:"Add contact"})]})}}]),n}(c.Component),U=Object(s.b)(null,(function(t){return{onSubmit:function(e,n){return t(R(e,n))}}}))(D),q=n(11),J=n.n(q),L=n(56),P=Object(s.b)((function(t){var e=t.phonebook;return{contacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.contacts,e.filter)}}),(function(t){return{onDeleteContact:function(e){return t(O(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(B.jsx)("ul",{children:e.map((function(t){return Object(B.jsxs)("li",{className:J.a.contactItem,children:[t.name,":",Object(B.jsx)("span",{className:J.a.number,children:L.format(t.number,"NNN-NN-NN")}),Object(B.jsx)("button",{className:J.a.button,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})),Z=n(26),E=n.n(Z),F=function(t){var e=t.value,n=t.onChange;return Object(B.jsxs)("label",{children:["Find contacts by name",Object(B.jsx)("input",{className:E.a.input,type:"text",value:e,onChange:n})]})},M=Object(s.b)((function(t){return{value:t.phonebook.filter}}),(function(t){return{onChange:function(e){return t(p(e.target.value))}}}))(F);F.defaultProps={value:""};n(57);var Q=function(){return Object(B.jsxs)("div",{className:"containerApp",children:[Object(B.jsx)("h1",{children:"Phonebook"}),Object(B.jsx)(U,{}),Object(B.jsx)("h2",{children:"Contacts"}),Object(B.jsx)(M,{}),Object(B.jsx)(P,{})]})};u.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(s.a,{store:g,children:Object(B.jsx)(Q,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"form_form__36URg",input:"form_input__1fbpu",button:"form_button__29U4I"}}},[[58,1,2]]]);
//# sourceMappingURL=main.93937d3a.chunk.js.map