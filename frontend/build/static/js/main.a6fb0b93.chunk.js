(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{158:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(44),i=c.n(n),r=c(9),o=c(11),l=c(63),d=c(118),u=c(1),j=["component","user"],m=function(e){var t=e.component,c=e.user,s=Object(d.a)(e,j);return Object(u.jsx)(o.b,Object(l.a)(Object(l.a)({},s),{},{render:function(e){return c?Object(u.jsx)(t,Object(l.a)(Object(l.a)({},s),e)):Object(u.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},b=c(177),h=c(114),g=c(27),O=c.n(g),p=function e(){var t=this;Object(h.a)(this,e),this.config={headers:{"Content-Type":"text/plain"}},this.baseUrl="https://swim-spots.herokuapp.com/",this.createSpot=function(e,c){return O.a.post(t.baseUrl+e,c,t.config)},this.deleteSpot=function(e){return O.a.delete(t.baseUrl+e,t.config)},this.createLogin=function(e,c){return O.a.post(t.baseUrl+e,c,t.config)},this.createRegister=function(e,c){return O.a.post(t.baseUrl+e,c,t.config)},this.getSpots=function(e){return O.a.get(t.baseUrl+e,t.config)},this.getFavourites=function(e){return O.a.get(t.baseUrl+e,t.config)},this.getUserFavourites=function(e){return O.a.get(t.baseUrl+e,t.config)}},f=Object(b.a)({centeredForm:{margin:"0 auto",width:"70%"}}),x=function(e){var t=f(),c=Object(s.useState)(""),a=Object(r.a)(c,2),n=a[0],i=a[1],o=Object(s.useState)(""),l=Object(r.a)(o,2),d=l[0],j=l[1],m=new p;return Object(u.jsx)("div",{className:"ui middle aligned center aligned grid",children:Object(u.jsxs)("div",{className:"column",children:[Object(u.jsxs)("h2",{className:"ui teal image header",children:[Object(u.jsx)("img",{alt:"Swim Spots Logo",src:"assets/images/wave.png",className:"image"}),Object(u.jsx)("div",{className:"content",children:"Login to Swim Spots"})]}),Object(u.jsxs)("form",{className:"ui large form ".concat(t.centeredForm),onSubmit:function(t){t.preventDefault();var c=document.getElementById("login-error-msg");""===n||""===d?c.style.display="block":m.createLogin("users/login",{user_name:n,password:d}).then((function(t){console.log(t),console.log(t.data),e.handleLogin(t.data.user_name)})).catch((function(e){console.log(e),document.getElementById("login-error-msg").style.display="block"}))},children:[Object(u.jsxs)("div",{className:"ui stacked segment",children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("i",{className:"user icon"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"Username",onChange:function(e){i(e.target.value)},"data-testid":"loginField",required:!0})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("i",{className:"lock icon"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:function(e){j(e.target.value)},"data-testid":"loginField",required:!0})]})}),Object(u.jsx)("input",{type:"submit",value:"Login",className:"ui fluid large teal submit button","data-testid":"loginBtn"})]}),Object(u.jsx)("div",{id:"login-error-msg",className:"ui error message",children:"Sorry - that user doesn't exist"})]})]})})},v=c(15),N=Object(v.a)(),S=c(32),y=Object(b.a)({centeredForm:{margin:"0 auto",width:"70%"}}),w=function(){var e=y(),t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),o=Object(r.a)(i,2),l=o[0],d=o[1],j=Object(s.useState)(""),m=Object(r.a)(j,2),b=m[0],h=m[1],g=Object(s.useState)(""),O=Object(r.a)(g,2),f=O[0],x=O[1],v=Object(s.useState)(""),w=Object(r.a)(v,2),C=w[0],k=w[1],F=new p;return Object(u.jsx)("div",{className:"ui middle aligned center aligned grid",children:Object(u.jsxs)("div",{className:"column",children:[Object(u.jsxs)("h2",{className:"ui teal image header",children:[Object(u.jsx)("img",{alt:"Swim Spots Logo",src:"assets/images/wave.png",className:"image"}),Object(u.jsx)("div",{className:"content",children:"Register for Swim Spots"})]}),Object(u.jsxs)("form",{className:"ui large form ".concat(e.centeredForm),onSubmit:function(e){e.preventDefault();var t=document.getElementById("register-error-msg");""===a||""===l||""===b||""===f||""===C?t.style.display="block":F.createRegister("users/register",{user_name:a,first_name:l,last_name:b,email:f,password:C}).then((function(e){console.log(e),console.log(e.data),N.push("/login")})).catch((function(e){console.log(e),document.getElementById("register-error-msg").style.display="block"}))},children:[Object(u.jsxs)("div",{className:"ui stacked segment",children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("i",{className:"user icon"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"Username",onChange:function(e){n(e.target.value)},"data-testid":"registerField",required:!0})]}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("i",{className:"user icon"}),Object(u.jsx)("input",{type:"text",name:"first-name",placeholder:"First Name",onChange:function(e){d(e.target.value)},"data-testid":"registerField",required:!0})]}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("i",{className:"user icon"}),Object(u.jsx)("input",{type:"text",name:"last-name",placeholder:"Last Name",onChange:function(e){h(e.target.value)},"data-testid":"registerField",required:!0})]}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("i",{className:"mail icon"}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Email",onChange:function(e){x(e.target.value)},"data-testid":"registerField",required:!0})]})]}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("i",{className:"lock icon"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:function(e){k(e.target.value)},"data-testid":"registerField",required:!0})]})}),Object(u.jsx)("input",{type:"submit",value:"Register",className:"ui fluid large teal submit button","data-testid":"registerBtn"}),Object(u.jsxs)("p",{style:{marginTop:"40px"},children:["if you already have an account you can"," ",Object(u.jsx)(S.a,{to:"/login",children:"Login here"})]})]}),Object(u.jsx)("div",{id:"register-error-msg",className:"ui error message",children:"Sorry - please fill out all fields"})]})]})})},C=c(91),k=c.n(C),F=c(115);var U=function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(c,s){return(c[e]<s[e]?-1:c[e]>s[e]?1:0)*t}},L=Object(b.a)({logout:{cursor:"pointer",color:"#4183c4"}}),B=function(e){var t=L();return Object(u.jsxs)("div",{className:"ui small message",children:[Object(u.jsxs)("p",{children:["Logged in as: ",Object(u.jsx)("b",{children:e.currentUser})]}),Object(u.jsx)("div",{onClick:e.handleLogout,className:t.logout,children:"Logout"})]})},I=function(e){return Object(u.jsx)("div",{className:"item",style:{marginBottom:"20px"},children:Object(u.jsxs)("div",{className:"ui search",children:[Object(u.jsxs)("div",{className:"ui icon input",style:{width:"100%"},children:[Object(u.jsx)("input",{className:"prompt",type:"text",name:"searchBy",placeholder:"Search by ".concat(e.searchBy),onChange:function(t){return e.handleSearch(t)}}),Object(u.jsx)("i",{className:"search icon"})]}),Object(u.jsx)("div",{className:"results"})]})})},_=function(e){return Object(u.jsxs)("div",{className:"item",style:{marginBottom:"40px"},children:[Object(u.jsx)("p",{children:"Order Alphabetically"}),Object(u.jsxs)("div",{className:"ui toggle checkbox",children:[Object(u.jsx)("input",{type:"checkbox",name:"public",onChange:e.toggleOrder}),Object(u.jsx)("label",{children:"".concat(e.order?"Currently: Descending":"Currently: Ascending")})]})]})},E=c(178),q=c(179),D=Object(b.a)({delete:{float:"right",cursor:"pointer","&:hover":{color:"red"}}}),P=function(e){var t=Object(s.useState)(!1),c=Object(r.a)(t,2),a=c[0],n=c[1],i=new p,o=D();return Object(u.jsxs)(E.a,{trigger:Object(u.jsx)("i",{className:"trash alternate outline icon ".concat(o.delete),"data-testid":"deleteBtn"}),onClose:function(){return n(!1)},onOpen:function(){return n(!0)},open:a,"data-testid":"deleteModal",children:[Object(u.jsx)(E.a.Header,{children:"Delete Swim Spot"}),Object(u.jsx)(E.a.Description,{children:Object(u.jsx)(E.a.Content,{children:"Are you sure you want to delete this swim spot?"})}),Object(u.jsxs)(E.a.Actions,{children:[Object(u.jsx)(q.a,{color:"black",onClick:function(){return n(!1)},children:"Cancel"}),Object(u.jsx)(q.a,{content:"Delete",labelPosition:"right",icon:"checkmark",onClick:function(){i.deleteSpot("spots/delete/".concat(e.id)).then((function(t){console.log("Deleting Spot"),console.log(t.data),console.log("Resetting SwimSpots"),n(!1),e.resetSwimSpots(t.data)})).catch((function(e){console.log(e)}))},"data-testid":"deleteBtn",positive:!0})]})]})},A=Object(b.a)({highlight:{color:"pink"}}),R=function(e){var t=A(),c=Object(s.useState)(0),a=Object(r.a)(c,2),n=a[0],i=a[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),d=l[0],j=l[1],m=Object(s.useState)(!1),b=Object(r.a)(m,2),h=b[0],g=b[1];Object(s.useEffect)((function(){i(e.faves.filter((function(t){return Object.values(t).includes(e.name)})).length)}),[e.faves,e.name]),Object(s.useEffect)((function(){var t=e.userFaves.some((function(t){return t.user_name===e.currentUser&&t.swim_spot_name===e.name}));j(t)}),[e.currentUser,e.userFaves,e.name]),Object(s.useEffect)((function(){g(e.username===e.currentUser)}),[e.currentUser,e.username]);return Object(u.jsx)("div",{className:"item",style:{width:"60%"},children:Object(u.jsxs)("div",{className:"content",children:[h&&Object(u.jsx)(P,{resetSwimSpots:e.resetSwimSpots,id:e.id}),Object(u.jsx)("a",{className:"header",href:"https://www.google.com/maps/search/?api=1&query=".concat(e.coordinates),target:"_blank",rel:"noreferrer",children:e.name}),Object(u.jsx)("div",{className:"meta",children:Object(u.jsx)("span",{children:e.county})}),Object(u.jsx)("div",{className:"description",children:Object(u.jsx)("p",{children:e.desc})}),Object(u.jsx)("div",{className:"extra",children:Object(u.jsx)("a",{href:"https://www.google.com/maps/search/?api=1&query=".concat(e.coordinates),target:"_blank",rel:"noreferrer",children:"Find on map"})}),Object(u.jsxs)("div",{className:"extra",children:[Object(u.jsxs)("span",{onClick:function(){d||O.a.post("http://localhost:8090/api/favourites/create",{user_name:e.currentUser,swim_spot_name:e.name}).then((function(e){console.log("Creating Spot"),console.log(e.data),i(n+1),j(!0)})).catch((function(e){console.log(e)}))},style:{cursor:"pointer"},className:d?t.highlight:void 0,children:[Object(u.jsx)("i",{className:"heart icon"}),"".concat(n," favourites")]})," | Posted by ".concat(e.username)]})]})})},T=Object(b.a)({top:{marginTop:"60px"}}),J=function(e){var t=T(),c=Object(s.useState)([]),a=Object(r.a)(c,2),n=a[0],i=a[1],o=Object(s.useState)(n),l=Object(r.a)(o,2),d=l[0],j=l[1],m=Object(s.useState)(!0),b=Object(r.a)(m,2),h=b[0],g=b[1],O=Object(s.useState)([]),f=Object(r.a)(O,2),x=f[0],v=f[1],N=Object(s.useState)([]),y=Object(r.a)(N,2),w=y[0],C=y[1],L=new p;Object(s.useEffect)((function(){L.getSpots("spots").then((function(e){console.log("Fetching SwimSpots"),console.log(e.data),i(e.data),j(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(s.useEffect)((function(){L.getFavourites("favourites").then((function(e){console.log("Fetching Faves"),console.log(e.data),v(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(s.useEffect)((function(){L.getUserFavourites("favourites/".concat(e.user)).then((function(e){console.log("Fetching UserFaves"),console.log(e.data),C(e.data)})).catch((function(e){console.log(e)}))}),[e.user]),Object(s.useEffect)((function(){E()}),[d]);var E=function(){g((function(e){return!e})),h?d.sort(U("name")):d.sort(U("-name"))},q=function(){var e=Object(F.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:j(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"ui grid container",children:[Object(u.jsx)("div",{className:"sixteen wide column ".concat(t.top),children:Object(u.jsx)("h1",{className:"ui dividing header",children:"Welcome to Swim Spots"})}),Object(u.jsx)("div",{className:"ten wide column",children:Object(u.jsx)("div",{className:"ui items",children:d.map((function(t){return Object(u.jsx)(R,{id:t.id,name:t.name,desc:t.description,coordinates:t.coordinates.replace(/\s/g,""),county:t.county,username:t.user_name,faves:x,userFaves:w,currentUser:e.user,resetSwimSpots:q},t.name)}))})}),Object(u.jsxs)("div",{className:"six wide column",children:[Object(u.jsx)(B,{currentUser:e.user,handleLogout:e.handleLogout}),Object(u.jsx)(I,{handleSearch:function(e){var t,c=e.target.value.toLowerCase();t=n.filter((function(e){return-1!==e.name.toLowerCase().search(c)})),j(t)},searchBy:"Name"}),Object(u.jsx)(I,{handleSearch:function(e){var t,c=e.target.value.toLowerCase();t=n.filter((function(e){return-1!==e.county.toLowerCase().search(c)})),j(t)},searchBy:"County"}),Object(u.jsx)(_,{order:h,toggleOrder:E}),Object(u.jsx)(S.a,{to:"/create",children:Object(u.jsxs)("button",{className:"ui primary button",children:[Object(u.jsx)("i",{className:"add icon"}),"Add a New Swim Spot"]})})]})]})},M=Object(b.a)({top:{marginTop:"60px"}}),H=function(e){var t=M(),c=Object(s.useState)(""),a=Object(r.a)(c,2),n=a[0],i=a[1],o=Object(s.useState)(""),l=Object(r.a)(o,2),d=l[0],j=l[1],m=Object(s.useState)(""),b=Object(r.a)(m,2),h=b[0],g=b[1],O=Object(s.useState)(""),f=Object(r.a)(O,2),x=f[0],v=f[1],y=new p;return Object(u.jsxs)("div",{className:"ui grid container",children:[Object(u.jsx)("div",{className:"sixteen wide column ".concat(t.top),children:Object(u.jsx)("h1",{className:"ui dividing header",children:"Post a Spot"})}),Object(u.jsxs)("div",{className:"ten wide column",children:[Object(u.jsxs)("form",{className:"ui large form",onSubmit:function(t){t.preventDefault();var c=document.getElementById("create-error-msg");""===n||""===d||""===h||""===x?c.style.display="block":y.createSpot("spots/create",{user_name:e.user,name:n,description:d,county:h,coordinates:x}).then((function(e){console.log("Creating Spot"),console.log(e.data),N.push("/feed")})).catch((function(e){console.log(e),c.style.display="block"}))},children:[Object(u.jsxs)("div",{className:"ui stacked segment",children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui left icon input",children:Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){i(e.target.value)},"data-testid":"createField",required:!0})})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui left icon input",children:Object(u.jsx)("input",{type:"text",name:"description",placeholder:"Description",onChange:function(e){j(e.target.value)},"data-testid":"createField",required:!0})})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui left icon input",children:Object(u.jsx)("input",{type:"text",name:"county",placeholder:"County",onChange:function(e){g(e.target.value)},"data-testid":"createField",required:!0})})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui left icon input",children:Object(u.jsx)("input",{type:"text",name:"coordinates",placeholder:"Coordinates",onChange:function(e){v(e.target.value)},"data-testid":"createField",required:!0})})}),Object(u.jsx)("input",{type:"submit","data-testid":"createBtn",value:"Create",className:"ui fluid large teal submit button"})]}),Object(u.jsx)("div",{id:"create-error-msg",className:"ui error message",children:"Please fill out all the information."})]}),Object(u.jsx)("p",{children:"To get the coordinates visit your spot on google maps, drop a pin and right click to copy the coordinates. Just paste them as is in the field above."}),Object(u.jsx)(S.a,{to:"/feed",children:Object(u.jsxs)("button",{className:"ui labeled icon button",children:[Object(u.jsx)("i",{className:"left chevron icon"}),"Back"]})})]}),Object(u.jsx)("div",{className:"six wide column",children:Object(u.jsx)("img",{alt:"Swim Spot Ireland",src:"assets/images/swim-spot.jpeg",className:"image"})})]})},W=function(){var e=Object(s.useState)(localStorage.getItem("loggedIn")),t=Object(r.a)(e,2),c=t[0],a=t[1],n=function(e){localStorage.setItem("loggedIn",e),a(localStorage.getItem("loggedIn")),N.push("/feed")},i=function(){a(null),N.push("/login"),localStorage.removeItem("loggedIn")};return Object(u.jsx)("div",{className:"main ui container",children:Object(u.jsx)(o.c,{history:N,children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",children:c?Object(u.jsx)(o.a,{to:"/feed"}):Object(u.jsx)(o.a,{to:"/register"})}),Object(u.jsx)(m,{exact:!0,path:"/feed",user:c,component:function(){return Object(u.jsx)(J,{user:c,handleLogout:i})}}),Object(u.jsx)(o.b,{exact:!0,path:"/login",render:function(){return Object(u.jsx)(x,{handleLogin:n})}}),Object(u.jsx)(o.b,{exact:!0,path:"/register",render:function(){return Object(u.jsx)(w,{})}}),Object(u.jsx)(o.b,{exact:!0,path:"/create",render:function(){return Object(u.jsx)(H,{user:c})}})]})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.a6fb0b93.chunk.js.map