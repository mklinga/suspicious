(this["webpackJsonpok-json"]=this["webpackJsonpok-json"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),u=(t(11),t(1)),o=function(e){var a=e.data.key,t=e.children,n=r.a.useState(!1),l=Object(u.a)(n,2),c=l[0],o=l[1],i=c?"Ok-closable-button Ok-closable-button-closed":"Ok-closable-button Ok-closable-button-open",s=c?"Ok-value Ok-Array-value closed":"Ok-value Ok-Array-value open";return r.a.createElement("div",{className:"Ok-block Ok-Array-block"},r.a.createElement("div",{className:"Ok-key Ok-Array-key"},r.a.createElement("button",{className:i,type:"button",onClick:function(){return o(!c)}},a)),r.a.createElement("div",{className:s},r.a.createElement("span",{className:"Ok-Array-bracket-open"},"["),c?" ... ":t,r.a.createElement("span",{className:"Ok-Array-bracket-close"},"]")))},i=t(2),s=t(3),v=function(e){return e},k=function e(a,t,n){var r=Array.isArray(n),l=r?[].concat(n):Object(s.a)({},n);if(0===a.length)return l;var c=a[0],u=a.slice(1,a.length);if(a.length>1){if(r){var o=e(u,t,l[c]);return l[c]=o,l}return Object(s.a)({},l,Object(i.a)({},c,e(u,t,l[c])))}return r?(l[c]=t,l):Object(s.a)({},l,Object(i.a)({},c,t))},m=function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{value:""};return null===a?e("null",t):a.toString().toLowerCase().includes(t.value.toLowerCase())},b=function(e,a){var t;return function(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];return t.reduce((function(e,a){return a(e)}),e)}(function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(t.type){case"string":case"boolean":case"number":case"null":return[m(t.value,a)?n:null];case"array":return t.value.flatMap((function(a,t){return e(a,"".concat(n,".").concat(t))}));case"object":return Object.entries(t.value).flatMap((function(a){var t=Object(u.a)(a,2),r=t[0];return e(t[1],"".concat(n,".").concat(r))}));default:return[null]}}(e),(t=v,function(e){return e.filter(t)}),function(e){return function(a){return a.map(e)}}((function(e){return e.replace(/^\./,"")})))},O=function(e){var a=e.data,t=a.key,n=a.value,l=e.filter,c=l.value&&m(n.value,l),u="Ok-value Ok-String-value ".concat(c?"Ok-highlighted-value":"");return r.a.createElement("div",{className:"Ok-block Ok-String-block"},r.a.createElement("div",{className:"Ok-key Ok-String-key"},t),r.a.createElement("div",{className:u},'"',n.value,'"'))},d=function(e){var a=e.data,t=a.key,n=a.value,l=e.filter,c=l.value&&m(n.value,l),u="Ok-value Ok-Null-value ".concat(c?"Ok-highlighted-value":"");return r.a.createElement("div",{className:"Ok-block Ok-Null-block"},r.a.createElement("div",{className:"Ok-key Ok-Null-key"},t),r.a.createElement("div",{className:u},"null"))},f=function(e){var a=e.data,t=a.key,n=a.value,l=e.filter,c=l.value&&m(n.value,l),u="Ok-value Ok-Boolean-value ".concat(c?"Ok-highlighted-value":"");return r.a.createElement("div",{className:"Ok-block Ok-Boolean-block"},r.a.createElement("div",{className:"Ok-key Ok-Boolean-key"},t),r.a.createElement("div",{className:u},n.value.toString()))},y=function(e){var a=e.data,t=a.key,n=a.value,l=e.filter,c=l.value&&m(n.value,l),u="Ok-value Ok-Number-value ".concat(c?"Ok-highlighted-value":"");return r.a.createElement("div",{className:"Ok-block Ok-Number-block"},r.a.createElement("div",{className:"Ok-key Ok-Number-key"},t),r.a.createElement("div",{className:u},n.value))},p=function(e){var a=e.children,t=e.data.key,n=r.a.useState(!1),l=Object(u.a)(n,2),c=l[0],o=l[1],i=c?"Ok-closable-button Ok-closable-button-closed":"Ok-closable-button Ok-closable-button-open",s=c?"Ok-value Ok-Object-value closed":"Ok-value Ok-Object-value open";return r.a.createElement("div",{className:"Ok-block Ok-Object-block"},t?r.a.createElement("div",{className:"Ok-key Ok-Object-key"},r.a.createElement("button",{className:i,type:"button",onClick:function(){return o(!c)}},t)):null,r.a.createElement("div",{className:s},r.a.createElement("span",{className:"Ok-Object-bracket-open"},"{"),c?" ... ":a,r.a.createElement("span",{className:"Ok-Object-bracket-close"},"}")))},E=function e(a){var t=a.data,n=t.key,l=t.value,c=a.filter;return r.a.createElement("div",{className:"Ok-Json-body"},function(){switch(l.type){case"string":return r.a.createElement(O,{key:n,data:{key:n,value:l},filter:c});case"null":return r.a.createElement(d,{key:n,data:{key:n,value:l},filter:c});case"boolean":return r.a.createElement(f,{key:n,data:{key:n,value:l},filter:c});case"number":return r.a.createElement(y,{key:n,data:{key:n,value:l},filter:c});case"array":return r.a.createElement(o,{data:{key:n}},l.value.map((function(a,t){return r.a.createElement(e,{key:t.toString(),filter:c,data:{key:t.toString(),value:a}})})));case"object":return r.a.createElement(p,{data:{key:n}},Object.entries(l.value).map((function(a){var t=Object(u.a)(a,2),n=t[0],l=t[1];return r.a.createElement(e,{key:n,filter:c,data:{key:n,value:l}})})));default:return null}}())},N=(t(12),function(e){var a=e.data,t=e.filter,n=t.value?function(e,a){return a&&a.length?a.map((function(a){for(var t=a.split("."),n=[],r={},l=0;l<t.length;l+=1){var c=l===t.length-1,u=n.reduce((function(e,a){return e.value[a]}),e),o=t[l],s="array"===u.type?[]:{},v=void 0;v=c?{type:u.type,value:"array"===u.type?[u.value[o]]:Object(i.a)({},o,u.value[o])}:{type:u.type,value:s};var m=n.reduce((function(e,a){return e.concat([a,"value"])}),["value"]);n.length&&m.pop(),r=0===l?v:k(m,v,r),n.push(t[l])}return r})):[e]}(a,b(a,t)):[a];return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",{key:Math.random().toString(36).substring(2,15),className:"App-Viewer-body"},r.a.createElement(E,{data:{key:"",value:e},filter:t}))})))}),h=function(e){var a=e.filter,t=e.setFilter;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"filter",onChange:function(e){return t({value:e.target.value})},value:a.value}))},g=function e(a){var t=function(e){return null===e?"null":Array.isArray(e)?"array":"string"===typeof e?"string":Boolean(e)===e?"boolean":Number.isNaN(Number(e))?"object":"number"}(a);return"array"===t?{type:t,value:a.map(e)}:"object"===t?{type:t,value:Object.entries(a).reduce((function(a,t){var n=Object(u.a)(t,2),r=n[0],l=n[1];return Object(s.a)({},a,Object(i.a)({},r,e(l)))}),{})}:{type:t,value:a}};t(13);var j=function(){var e=r.a.useState(null),a=Object(u.a)(e,2),t=a[0],n=a[1],l=r.a.useState(null),c=Object(u.a)(l,2),o=c[0],v=c[1],k=r.a.useState({value:""}),m=Object(u.a)(k,2),b=m[0],O=m[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Feed me JSON!",o?r.a.createElement("span",{className:"App-error"},o):null,r.a.createElement(h,{filter:b,setFilter:O})),r.a.createElement("main",{className:"App-body"},t?r.a.createElement(N,{data:t,filter:b}):r.a.createElement("button",{type:"button",onClick:function(){navigator.clipboard.readText().then((function(e){try{v(null),n(function(e){return{type:"object",value:Object.entries(e).reduce((function(e,a){var t=Object(u.a)(a,2),n=t[0],r=t[1],l=g(r);return Object(s.a)({},e,Object(i.a)({},n,l))}),{})}}(JSON.parse(e)))}catch(a){v("That does not look like json...")}})).catch((function(){return v("You really need to give the permission for this one...")}))}},"Paste from clipboard")))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.eb7d8d64.chunk.js.map