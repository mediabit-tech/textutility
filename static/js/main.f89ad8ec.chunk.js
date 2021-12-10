(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(15),n=a.n(r),l=(a(21),a(10)),o=(a(22),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#1a253a",backgroundColor:"dark"===e.mode?"#1a253a":"white"};return Object(o.jsxs)("div",{className:"container my-3",style:t,children:[Object(o.jsx)("h1",{children:"About us"}),Object(o.jsxs)("div",{className:"accordion",id:"accordionExample",style:t,children:[Object(o.jsxs)("div",{className:"accordion-item",children:[Object(o.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(o.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t,children:Object(o.jsx)("strong",{children:"Analyze your text"})})}),Object(o.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(o.jsx)("div",{className:"accordion-body",style:t,children:"TextUtility gives you a way to analyze your text quickly and efficiently. Be it word count, character count and assume reading time of whole paragraph."})})]}),Object(o.jsxs)("div",{className:"accordion-item",children:[Object(o.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(o.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t,children:Object(o.jsx)("strong",{children:"Free to use"})})}),Object(o.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(o.jsx)("div",{className:"accordion-body",style:t,children:"TextUtility is a free character counter that provides instant character count and word count statistics for a given text. TextUtility reports the number of words and characters. Thus it is suitable for writing text with word or character limit."})})]}),Object(o.jsxs)("div",{className:"accordion-item",children:[Object(o.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(o.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t,children:Object(o.jsx)("strong",{children:"Browser compatible"})})}),Object(o.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(o.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such a Chrome, Firefox, Internet Explorer, Microsoft Edge, Safari, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc."})})]})]})]})}var d=a(7);function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input me-2",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",onChange:function(e){r(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#1a253a",color:"light"===e.mode?"black":"white"},value:s,id:"myBox",rows:"6"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toUpperCase();r(t),e.showAlert("Converted to Uppercase!","success")},children:"Convert to Upercase"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();r(t),e.showAlert("Converted to Lowercase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){r(""),e.showAlert("Textbox is cleared!","success")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(t){var a=document.getElementById("myBox");navigator.clipboard.writeText(a.value),e.showAlert("Copy to clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);r(t.join(" ")),e.showAlert("All extra spaces are removed!","success")},children:"Remove Extra Space"})]})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h3",{children:"Your text summery:"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:s.split(/\s+/).filter((function(e){return 0!==e.length})).length})," words and ",Object(o.jsx)("b",{children:s.length})," charactors, ",Object(o.jsx)("b",{children:.008*s.split(" ").filter((function(e){return 0!==e.length})).length})," minuets take to read below paragraph."]}),Object(o.jsx)("h3",{children:"Preview:"}),Object(o.jsx)("p",{children:s.length>0?s:"Nothing to preview."})]})]})}b.defaultProps={title:"Set title here",aboutText:"About text here"};var j=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(null),n=Object(l.a)(r,2),u=n[0],x=n[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),2e3)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{title:"TextUtility",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#1a253a",p("Dark mode has been enabled.","success")):(s("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled.","success"))}}),Object(o.jsx)(j,{alert:u}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{exact:!0,path:"/about",children:Object(o.jsx)(i,{mode:a})},"about"),Object(o.jsx)(m.a,{exact:!0,path:"/",children:Object(o.jsx)(h,{showAlert:p,heading:"TextUtility - word counter, character counter, remove extra spaces:",mode:a})},"textform")]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d.a,{children:Object(o.jsx)(u,{})})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.f89ad8ec.chunk.js.map