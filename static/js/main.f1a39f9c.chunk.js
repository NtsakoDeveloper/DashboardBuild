(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{23:function(e,a,t){e.exports=t(36)},28:function(e,a,t){},29:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),s=(t(28),t(29),t(1)),o=t(5),m=t(2),i=t.n(m),u=t(4),b=t(3),p=function(){var e=Object(o.f)();var a=Object(n.useState)(),t=Object(b.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(),m=Object(b.a)(s,2),p=m[0],d=m[1],h=Object(n.useState)(),E=Object(b.a)(h,2),v=E[0],f=E[1],g=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),fetch("https://brave-thin-preface.glitch.me/users/login",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:c,password:p})}).then((function(e){return e.json()})).then(function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:f(t.msg),console.log(t),e.push("/Home");case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error(e),f(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{className:"form-signin",onSubmit:g},r.a.createElement("img",{className:"mb-4",src:"https://i.ibb.co/tPGxBHG/logo.png",alt:"",width:172,height:72}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Sign In"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",id:"inputEmail",onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",id:"inputPassword",onChange:function(e){return d(e.target.value)},className:"form-control",placeholder:"Password"}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("h6",{className:""},v)),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in"),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",onClick:function(){e.push("/Add")}},"Add new Admin"),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2020")))},d=function(){var e=Object(o.f)(),a=Object(n.useState)(),t=Object(b.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(),m=Object(b.a)(s,2),p=m[0],d=m[1],h=Object(n.useState)(),E=Object(b.a)(h,2),v=E[0],f=E[1],g=Object(n.useState)(),N=Object(b.a)(g,2),j=N[0],y=N[1],O=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),fetch("https://brave-thin-preface.glitch.me/users/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:c,email:p,password:v})}).then((function(e){return e.json()})).then(function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(t),y(t.msg),e.push("/");case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{className:"form-signin",onSubmit:O},r.a.createElement("img",{className:"mb-4",src:"https://i.ibb.co/tPGxBHG/logo.png",alt:"",width:172,height:72}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Add Admin"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"User Name"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Username",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",id:"inputEmail",onChange:function(e){return d(e.target.value)},className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",id:"inputPassword",onChange:function(e){return f(e.target.value)},className:"form-control",placeholder:"Password"}),r.a.createElement("div",{className:"checkbox mb-3"}),r.a.createElement("h6",{className:""},j),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Add Admin"),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2020")))},h=t(19),E=t(20),v=t(22),f=t(21),g=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{id:"mu-header"},r.a.createElement("nav",{className:"navbar navbar-default mu-main-navbar",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(s.b,{to:"/",class:"navbar-brand"},r.a.createElement("img",{src:"assets/img/logo.png",alt:"Logo img"}))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("ul",{id:"top-menu",className:"nav navbar-nav navbar-right mu-main-nav"},r.a.createElement("li",{className:"active"},r.a.createElement(s.b,{to:"/Home",class:"navbar-brand"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Tenders"},"Tenders")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Projects"},"Community")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Learnership"},"Learnership"))))))),r.a.createElement("div",{id:"myCarousel",className:"carousel slide"},r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"item active"},r.a.createElement("img",{className:"first-slide",src:"https://previews.123rf.com/images/\r everythingpossible/everythingpossible1809/everythingpossible180900435/107981072-\r intelligence-bi-and-business-analytics-ba-with-key-performance-indicators-kpi-dashboard-concept-busi.jpg",alt:"First slide"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"carousel-caption"}))))))}}]),t}(r.a.Component),N=function(){var e=Object(o.f)(),a=Object(n.useState)(),t=Object(b.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(),p=Object(b.a)(m,2),d=p[0],h=p[1],E=Object(n.useState)(),v=Object(b.a)(E,2),f=v[0],g=v[1],N=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),fetch("https://brave-thin-preface.glitch.me/vacancies/Vacancies",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:c,file:d})}).then((function(e){return e.json()})).then(function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(t),g(t.msg),e.push("/Home");case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),j=Object(n.useState)([]),y=Object(b.a)(j,2),O=y[0],x=y[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://brave-thin-preface.glitch.me/vacancies/Vacancies",e.next=3,fetch("https://brave-thin-preface.glitch.me/vacancies/Vacancies");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,x(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("header",{id:"mu-header"},r.a.createElement("nav",{className:"navbar navbar-default mu-main-navbar",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(s.b,{to:"/",class:"navbar-brand"},r.a.createElement("img",{src:"assets/img/logo.png",alt:"Logo img"}))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("ul",{id:"top-menu",className:"nav navbar-nav navbar-right mu-main-nav"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Home",class:"navbar-brand"},"Home")),r.a.createElement("li",{className:"active"},r.a.createElement(s.b,{to:"/Vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Tenders"},"Tenders")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Projects"},"Community")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Learnership"},"Learnership"))))))),r.a.createElement("form",{className:"form-signin",onSubmit:N},r.a.createElement("img",{className:"mb-4",src:"https://i.ibb.co/tPGxBHG/logo.png",alt:"",width:172,height:72}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Add new Vacancy"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Job Name"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Job Title",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputname",className:"sr-only"},"File URL"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return h(e.target.value)},className:"form-control",placeholder:"File URL",required:!0,autoFocus:!0}),r.a.createElement("div",{className:"checkbox mb-3"}),r.a.createElement("h6",{className:""},f),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Add File"),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2020")),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{color:"black"}},r.a.createElement("b",null,"Open Vacancies")),0===O.length?r.a.createElement("div",null,r.a.createElement("div",{className:"box"},r.a.createElement("h4",null,"No Vacancies Open"))):r.a.createElement("div",null,O.map((function(e){return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"box-col box-80"},r.a.createElement("div",null,r.a.createElement("h4",null,e.name),r.a.createElement("div",{className:"box-col box-20 text-right"},r.a.createElement("a",{class:"button",href:e.file,target:"_blank"},"Download PDF file")))))})))))},j=function(){var e=Object(o.f)(),a=Object(n.useState)(),t=Object(b.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(),p=Object(b.a)(m,2),d=p[0],h=p[1],E=Object(n.useState)(),v=Object(b.a)(E,2),f=v[0],g=v[1],N=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),fetch("https://brave-thin-preface.glitch.me/users/AddFile",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:c,file:d})}).then((function(e){return e.json()})).then(function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(t),g(t.msg),e.push("/Home");case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),j=Object(n.useState)([]),y=Object(b.a)(j,2),O=y[0],x=y[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://brave-thin-preface.glitch.me/learnership/learnership",e.next=3,fetch("https://brave-thin-preface.glitch.me/learnership/learnership");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,x(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("header",{id:"mu-header"},r.a.createElement("nav",{className:"navbar navbar-default mu-main-navbar",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(s.b,{to:"/",class:"navbar-brand"},r.a.createElement("img",{src:"assets/img/logo.png",alt:"Logo img"}))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("ul",{id:"top-menu",className:"nav navbar-nav navbar-right mu-main-nav"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Home",class:"navbar-brand"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Tenders"},"Tenders")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Projects"},"Community")),r.a.createElement("li",{className:"active"},r.a.createElement(s.b,{to:"/Learnership"},"Learnership"))))))),r.a.createElement("form",{className:"form-signin",onSubmit:N},r.a.createElement("img",{className:"mb-4",src:"https://i.ibb.co/tPGxBHG/logo.png",alt:"",width:172,height:72}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Add New Learnership"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Learnership Title"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Job Title",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputname",className:"sr-only"},"File URL"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return h(e.target.value)},className:"form-control",placeholder:"File URL",required:!0,autoFocus:!0}),r.a.createElement("div",{className:"checkbox mb-3"}),r.a.createElement("h6",{className:""},f),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Add File"),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2020")),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{color:"black"}},r.a.createElement("b",null,"Open Learnership")),0===O.length?r.a.createElement("div",null,r.a.createElement("div",{className:"box"},r.a.createElement("h4",null,"No Learnership Open"))):r.a.createElement("div",null,O.map((function(e){return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"box-col box-80"},r.a.createElement("div",null,r.a.createElement("h4",null,e.name),r.a.createElement("div",{className:"box-col box-20 text-right"},r.a.createElement("a",{class:"button",href:e.file,target:"_blank"},"Download PDF file")))))})))))},y=function(){var e=Object(o.f)(),a=Object(n.useState)(),t=Object(b.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(),p=Object(b.a)(m,2),d=p[0],h=p[1],E=Object(n.useState)(),v=Object(b.a)(E,2),f=v[0],g=v[1],N=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),fetch("https://brave-thin-preface.glitch.me/users/AddFile",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:c,file:d})}).then((function(e){return e.json()})).then(function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(t),g(t.msg),e.push("/Home");case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),j=Object(n.useState)([]),y=Object(b.a)(j,2),O=y[0],x=y[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://brave-thin-preface.glitch.me/tenders/Tenders",e.next=3,fetch("https://brave-thin-preface.glitch.me/tenders/Tenders");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,x(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("What is this bro"+O),r.a.createElement("div",null,r.a.createElement("header",{id:"mu-header"},r.a.createElement("nav",{className:"navbar navbar-default mu-main-navbar",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(s.b,{to:"/",class:"navbar-brand"},r.a.createElement("img",{src:"assets/img/logo.png",alt:"Logo img"}))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("ul",{id:"top-menu",className:"nav navbar-nav navbar-right mu-main-nav"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Home",class:"navbar-brand"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Vacancies"},"Vacancies")),r.a.createElement("li",{className:"active"},r.a.createElement(s.b,{to:"/Tenders"},"Tenders")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Projects"},"Community")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Learnership"},"Learnership"))))))),r.a.createElement("form",{className:"form-signin",onSubmit:N},r.a.createElement("img",{className:"mb-4",src:"https://i.ibb.co/tPGxBHG/logo.png",alt:"",width:172,height:72}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Add New Tender"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Tender Title"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Job Title",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputname",className:"sr-only"},"File URL"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return h(e.target.value)},className:"form-control",placeholder:"File URL",required:!0,autoFocus:!0}),r.a.createElement("div",{className:"checkbox mb-3"}),r.a.createElement("h6",{className:""},f),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Add File"),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2020")),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{color:"black"}},r.a.createElement("b",null,"Open Tenders")),0===O.length?r.a.createElement("div",null,r.a.createElement("div",{className:"box"},r.a.createElement("h4",null,"No Tenders Open"))):r.a.createElement("div",null,O.map((function(e){return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"box-col box-80"},r.a.createElement("div",null,r.a.createElement("h4",null,e.name),r.a.createElement("div",{className:"box-col box-20 text-right"},r.a.createElement("a",{class:"button",href:e.file,target:"_blank"},"Download PDF file")))))})))))},O=function(){var e=Object(o.f)(),a=Object(n.useState)(),t=Object(b.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(),p=Object(b.a)(m,2),d=p[0],h=p[1],E=Object(n.useState)(),v=Object(b.a)(E,2),f=v[0],g=v[1],N=Object(n.useState)(),j=Object(b.a)(N,2),y=j[0],O=j[1],x=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),fetch("https://brave-thin-preface.glitch.me/projects/addProjects",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({Description:c,Title:d,image:f})}).then((function(e){return e.json()})).then(function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(t),O(t.msg),e.push("/Home");case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),w=Object(n.useState)([]),k=Object(b.a)(w,2),F=k[0],S=k[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://brave-thin-preface.glitch.me/getProjects",e.next=3,fetch("https://brave-thin-preface.glitch.me/getProjects");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,S(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("header",{id:"mu-header"},r.a.createElement("nav",{className:"navbar navbar-default mu-main-navbar",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(s.b,{to:"/",class:"navbar-brand"},r.a.createElement("img",{src:"assets/img/logo.png",alt:"Logo img"}))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("ul",{id:"top-menu",className:"nav navbar-nav navbar-right mu-main-nav"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Home",class:"navbar-brand"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Tenders"},"Tenders")),r.a.createElement("li",{className:"active"},r.a.createElement(s.b,{to:"/Projects"},"Community")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/Learnership"},"Learnership"))))))),r.a.createElement("form",{className:"form-signin",onSubmit:x},r.a.createElement("img",{className:"mb-4",src:"https://i.ibb.co/tPGxBHG/logo.png",alt:"",width:172,height:72}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Add New Project"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Project Title"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Job Title",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputname",className:"sr-only"},"Description"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return h(e.target.value)},className:"form-control",placeholder:"Description",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputname",className:"sr-only"},"Image (URL)"),r.a.createElement("input",{type:"text",id:"inputname",onChange:function(e){return g(e.target.value)},className:"form-control",placeholder:"Image URL",required:!0,autoFocus:!0}),r.a.createElement("div",{className:"checkbox mb-3"}),r.a.createElement("h6",{className:""},y),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Add File"),r.a.createElement("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2020")),F.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},"\xa0"),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row space-16"},"\xa0"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"thumbnailCom"},r.a.createElement("div",{className:"caption text-center"},r.a.createElement("div",{className:"thumbnail-description smaller"},r.a.createElement("img",{alt:"img",src:e.Image}))))),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"thumbnailCom"},r.a.createElement("div",{className:"caption text-center"},r.a.createElement("div",{className:"thumbnail-description smaller"},r.a.createElement("h3",null,e.Title),r.a.createElement("p",null," ",e.Description))))))),r.a.createElement("div",{className:"col-md-2"},"\xa0"))))})))};var x=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:p}),r.a.createElement(o.a,{exact:!0,path:"/Add",component:d}),r.a.createElement(o.a,{exact:!0,path:"/Home",component:g}),r.a.createElement(o.a,{exact:!0,path:"/Vacancies",component:N}),r.a.createElement(o.a,{exact:!0,path:"/Tenders",component:y}),r.a.createElement(o.a,{exact:!0,path:"/Learnership",component:j}),r.a.createElement(o.a,{exact:!0,path:"/Projects",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f1a39f9c.chunk.js.map