(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{180:function(e,t,a){e.exports=a(380)},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},197:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(56),i=a.n(s),c=(a(185),a(10)),l=a(151),o=(a(186),a(58)),m=(a(187),function(e){var t=e.onHandleGroupeHelp,a=e.onHandleHalf,s=e.isCompleted,i=e.isCompleted\u0420Half;return Object(n.useEffect)((function(){var e=document.querySelector(".btn-helpGroup");s&&e.setAttribute("disabled","true")}),[s]),Object(n.useEffect)((function(){var e=document.querySelector(".btn-half");i&&e.setAttribute("disabled","true")}),[i]),r.a.createElement("div",{className:"block-button"},r.a.createElement("button",{className:i?"btn-half btn-remove completed":"btn-half btn ",onClick:a}),r.a.createElement("button",{className:s?"btn-helpGroup btn-remove completed":"btn-helpGroup btn",onClick:t}))}),u=function(e){var t=e.onhandleGroupeHelp,a=e.onHandleHalf,n=e.showChartAnswer,s=e.isCompleted,i=e.isCompleted\u0420Half,c=[].concat(Object(l.a)(o));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"block-gain slideInRight"},e.isMobile&&r.a.createElement("button",{onClick:e.togleMenu,type:"button",className:"btn-close"}),r.a.createElement("ul",{className:"gain"},c.sort((function(e,t){return t.price-e.price})).map((function(t){return r.a.createElement("li",{key:t.id,id:"answer"+t.id,className:"gain-item"},r.a.createElement("svg",{className:e.data.includes(t.id)?"svg-gain-change":"svg-gain",viewBox:"0 0 240 40"},r.a.createElement("path",{d:"M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z"})),r.a.createElement("p",null,"$",t.price))}))),r.a.createElement(m,{onHandleGroupeHelp:t,onHandleHalf:a,showChartAnswer:n,isCompleted:s,"isCompleted\u0420Half":i})))},v=(a(188),a(141)),w=a.n(v),d=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(0),a=Object(c.a)(t,2),s=a[0],i=a[1];return r.a.createElement(d.Provider,{value:{prices:s,setWinPrice:function(e){i(e)}}},e.children)},b=a(7),f=(a(197),a(24));function _(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var E,g,h,x=_(0,400);E=x<400?_(0,400-x):0,g=x+E<400?_(0,400-(E+x)):0,h=x+E<400?_(0,400-(E+x+g)):0;var C=function(e){var t=e.active,a=e.label,n=e.answers;return t?r.a.createElement("div",null,r.a.createElement("p",null,function(e){return e===n[0].variant?"A: ".concat(n[0].answer_text):e===n[1].variant?"B: ".concat(n[1].answer_text):e===n[2].variant?"C: ".concat(n[2].answer_text):e===n[3].variant?"D: ".concat(n[3].answer_text):void 0}(a))):null},O=function(e){var t=e.answers,a=e.onClick;Object(n.useEffect)((function(){return window.addEventListener("click",a),function(){return window.removeEventListener("click",a)}}));var s=[{name:t[0].variant,uv:x,pv:2400,amt:2400},{name:t[1].variant,uv:E,pv:2400,amt:2400},{name:t[2].variant,uv:g,pv:2400,amt:2400},{name:t[3].variant,uv:h,pv:2400,amt:2400}],i=r.a.createElement(f.b,{width:450,height:300,data:s},r.a.createElement(f.e,{dataKey:"name",stroke:"#8884d8"}),r.a.createElement(f.f,{domain:[0,400]}),r.a.createElement(f.d,{content:r.a.createElement(C,{answers:t})}),r.a.createElement(f.c,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(f.a,{dataKey:"uv",fill:"#8884d8",barSize:30,label:{fill:"red",fontSize:20}}));return r.a.createElement("div",{className:"backdrop"},r.a.createElement("div",{className:"chart"},i))},N=function(){var e=JSON.parse(JSON.stringify(o)),t=Object(n.useState)(0),a=Object(c.a)(t,2),s=a[0],i=a[1],l=Object(n.useState)(e[s]),m=Object(c.a)(l,2),v=m[0],p=m[1],f=Object(n.useState)(!1),_=Object(c.a)(f,2),E=_[0],g=_[1],h=Object(n.useState)(!1),x=Object(c.a)(h,2),C=x[0],N=x[1],j=Object(n.useState)(!1),k=Object(c.a)(j,2),H=k[0],A=k[1],S=Object(n.useState)([]),B=Object(c.a)(S,2),q=B[0],M=B[1],y=Object(n.useState)(""),D=Object(c.a)(y,2),L=D[0],G=D[1],J=Object(n.useState)(!1),T=Object(c.a)(J,2),W=T[0],z=T[1],P=Object(n.useState)(!1),F=Object(c.a)(P,2),I=F[0],K=F[1],Z=Object(n.useState)(!1),$=Object(c.a)(Z,2),R=$[0],Q=$[1],U=Object(b.f)(),V=Object(n.useContext)(d).setWinPrice,X=Object(n.useState)(0),Y=Object(c.a)(X,2),ee=Y[0],te=Y[1];Object(n.useLayoutEffect)((function(){function e(){te(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){ee<768?(N(!1),g(!0)):ee>767&&ee<1023?(g(!0),N(!1)):(g(!1),N(!0))}),[ee]),Object(n.useEffect)((function(){L===v.rigth_answer?(M((function(e){return e.concat([v.id])})),V(v.price),setTimeout((function(){s===e.length-1?U.push("/gameover"):i((function(e){return e+1}))}),1e3)):""!==L&&setTimeout((function(){U.push("/gameover")}),2e3)}),[L]),Object(n.useEffect)((function(){G(""),p(e[s])}),[s]);var ae=function(e){e.target.className,A(!H)},ne=function(e){z(!0)},re=function(e){Q(!0),se(),se()};var se=function e(){var t,a,n=v.rigth_answer,r=(t=0,a=4,t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t))+t);v.answers[r].variant!==n&&""!==v.answers[r].answer_text?v.answers[r].answer_text="":e()},ie=function(e){var t=e.target.closest("li");G(t.querySelector("p span").innerHTML)};return r.a.createElement(r.a.Fragment,null,W&&r.a.createElement(O,{answers:v.answers,onClick:function(e){"backdrop"===e.target.className&&(z(!1),K(!0))}}),H?r.a.createElement("div",{className:"block-menu-game"},r.a.createElement(u,{data:q,isMobile:E,togleMenu:ae,onhandleGroupeHelp:ne,onHandleHalf:re,showChartAnswer:W,isCompleted:I,"isCompleted\u0420Half":R})):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"game-page "},E&&r.a.createElement("button",{type:"button",onClick:ae,className:H?"btn-close":"menu-btn-open"}),r.a.createElement("div",{className:"wrapp-answers-quest"},r.a.createElement("div",{className:"img-million"}),r.a.createElement("p",{className:"question"},v.question),r.a.createElement("ul",{className:"block-answers"},v.answers.map((function(e){return r.a.createElement("li",{key:w()(),className:"answer",onClick:ie},r.a.createElement("svg",{className:""===L||L!==e.variant?"svg-mob":L===v.rigth_answer?"correct-answer":"invalid",viewBox:"0 0 288 56"},r.a.createElement("path",{d:"M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z"})),r.a.createElement("p",null,r.a.createElement("span",null,e.variant)," ",e.answer_text))})))),C&&r.a.createElement(u,{data:q,isMobile:E,onhandleGroupeHelp:ne,onHandleHalf:re,showChartAnswer:W,isCompleted:I,"isCompleted\u0420Half":R}))))},j=(a(377),function(){var e=Object(n.useContext)(d),t=e.prices,a=e.setWinPrice,s=Object(b.f)();return r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"gameover-page"},r.a.createElement("div",{className:"gameover__img"},r.a.createElement("img",{src:"/image/Group 265.png",alt:"img"})),r.a.createElement("div",{className:"block-gameover"},r.a.createElement("span",{className:"block-gameover__total"},"Total score:"),r.a.createElement("span",{className:"block-gameover__earned"},"$",t," earned"),r.a.createElement("button",{className:"block-gameover__btn",onClick:function(){a(0),s.push("/game")}},"Try again"))))}),k=(a(378),function(){var e=Object(b.f)();return r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"start-page"},r.a.createElement("div",{className:"start-page__img"},r.a.createElement("img",{src:"/image/logo.png",alt:"img"})),r.a.createElement("div",{className:"block-begin"},r.a.createElement("h1",{className:"block-begin__title"},"Who wants to be a\xa0millionaire?"),r.a.createElement("button",{className:"block-begin__btn",type:"button",onClick:function(){e.push("/game")}},"Start"))))}),H=(a(379),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:k}),r.a.createElement(b.a,{path:"/game",component:N}),r.a.createElement(b.a,{path:"/gameover",component:j})))}),A=a(30);i.a.render(r.a.createElement(p,null,r.a.createElement(A.a,null,r.a.createElement(H,null))),document.getElementById("root"))},58:function(e){e.exports=JSON.parse('[{"id":1,"question":"\u041a\u0442\u043e \u0438\u0437 \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u043e\u0432 \u0421\u0428\u0410 \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0440\u0430\u0441\u0441\u043a\u0430\u0437 \u043f\u0440\u043e \u0428\u0435\u0440\u043b\u043e\u043a\u0430 \u0425\u043e\u043b\u043c\u0441\u0430?","answers":[{"variant":"A","answer_text":"\u0414\u0436\u043e\u043d \u041a\u0435\u043d\u043d\u0435\u0434\u0438"},{"variant":"B","answer_text":"\u0424\u0440\u0430\u043d\u043a\u043b\u0438\u043d \u0420\u0443\u0437\u0432\u0435\u043b\u044c\u0442"},{"variant":"C","answer_text":"\u0420\u043e\u043d\u0430\u043b\u044c\u0434 \u0420\u0435\u0439\u0433\u0430\u043d"},{"variant":"D","answer_text":"\u0410\u0432\u0440\u0430\u043c \u041b\u0438\u043d\u043a\u043e\u043b\u044c\u043d"}],"rigth_answer":"B","price":500},{"id":2,"question":"\u041a\u0430\u043a\u043e\u0439 \u0432\u0438\u0434 \u0441\u043f\u043e\u0440\u0442\u0430 \u043d\u0435 \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043f\u044f\u0442\u0438\u0431\u043e\u0440\u044c\u0435?","answers":[{"variant":"A","answer_text":"\u041c\u0435\u0442\u0430\u043d\u0438\u0435 \u043a\u043e\u043f\u044c\u044f"},{"variant":"B","answer_text":"\u0412\u0435\u0440\u0445\u043e\u0432\u0430\u044f \u0435\u0437\u0434\u0430"},{"variant":"C","answer_text":"\u0424\u0435\u0445\u0442\u043e\u0432\u0430\u043d\u0438\u0435"},{"variant":"D","answer_text":"\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435"}],"rigth_answer":"A","price":1000},{"id":3,"question":"\u0422\u0443\u0440\u0438\u0441\u0442\u044b, \u043f\u0440\u0438\u0435\u0437\u0436\u0430\u044e\u0449\u0438\u0435 \u043d\u0430 \u041c\u0430\u0439\u043e\u0440\u043a\u0443, \u043e\u0431\u044f\u0437\u0430\u043d\u044b \u0437\u0430\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043d\u0430\u043b\u043e\u0433\u2026","answers":[{"variant":"A","answer_text":"\u041d\u0430 \u043f\u043b\u0430\u0432\u043a\u0438"},{"variant":"B","answer_text":"\u041d\u0430 \u043f\u0430\u043b\u044c\u043c\u044b"},{"variant":"C","answer_text":"\u041d\u0430 \u0441\u043e\u043b\u043d\u0446\u0435"},{"variant":"D","answer_text":"\u041d\u0430 \u043f\u043b\u044f\u0436"}],"rigth_answer":"C","price":2000},{"id":4,"question":"\u0427\u0442\u043e \u0432 \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0438\u043c\u043f\u0435\u0440\u0438\u0438 \u0431\u044b\u043b\u043e \u0432\u0435\u0449\u0435\u0432\u044b\u043c \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043e\u043c \u0434\u0435\u043d\u0435\u0433?","answers":[{"variant":"A","answer_text":"\u0428\u043a\u0443\u0440\u044b \u043f\u0443\u0448\u043d\u044b\u0445 \u0437\u0432\u0435\u0440\u0435\u0439"},{"variant":"B","answer_text":"\u041a\u0440\u0443\u043f\u043d\u044b\u0439 \u0440\u043e\u0433\u0430\u0442\u044b\u0439 \u0441\u043a\u043e\u0442"},{"variant":"C","answer_text":"\u0422\u0430\u0431\u0430\u043a"},{"variant":"D","answer_text":"\u0416\u0435\u043d\u0441\u043a\u0438\u0435 \u0441\u0435\u0440\u044c\u0433\u0438"}],"rigth_answer":"A","price":4000},{"id":5,"question":"\u0423 \u0438\u043d\u0434\u0435\u0439\u0446\u0435\u0432 \u0438\u0437 \u043d\u0435\u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0432\u0435\u0440\u043e\u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u043f\u043b\u0435\u043c\u0435\u043d\u0438 \u043a\u0432\u0430\u043a\u0438\u0443\u0442\u043b \u0435\u0441\u0442\u044c \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u044f: \u0431\u0435\u0440\u044f \u0434\u0435\u043d\u044c\u0433\u0438 \u0432 \u0434\u043e\u043b\u0433, \u043e\u043d\u0438 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0432 \u0437\u0430\u043b\u043e\u0433\u2026","answers":[{"variant":"A","answer_text":"\u0414\u0443\u0448\u0443"},{"variant":"B","answer_text":"\u0418\u043c\u044f"},{"variant":"C","answer_text":"\u0421\u043a\u0430\u043b\u044c\u043f \u0442\u0435\u0449\u0438"},{"variant":"D","answer_text":"\u0410\u043c\u0443\u043b\u0435\u0442"}],"rigth_answer":"B","price":8000},{"id":6,"question":"\u041a\u0430\u043a \u0438\u043d\u0430\u0447\u0435 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043f\u0438\u0440\u0430\u0442\u0441\u043a\u0438\u0439 \u0444\u043b\u0430\u0433?","answers":[{"variant":"A","answer_text":"\u0412\u0435\u0441\u0451\u043b\u044b\u0439 \u0420\u043e\u0434\u0436\u0435\u0440"},{"variant":"B","answer_text":"\u0413\u0440\u044f\u0437\u043d\u044b\u0439 \u0413\u0430\u0440\u0440\u0438"},{"variant":"C","answer_text":"\u0411\u0435\u0434\u043d\u044b\u0439 \u0419\u043e\u0440\u0438\u043a"},{"variant":"D","answer_text":"\u041b\u0438\u043c\u043e\u043d\u0430\u0434\u043d\u044b\u0439 \u0414\u0436\u043e"}],"rigth_answer":"A","price":16000},{"id":7,"question":"\u041a\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u043e \u0438\u0437 \u0431\u043b\u044e\u0434?","answers":[{"variant":"A","answer_text":"\u041a\u0430\u0448\u0430 \u043f\u043e-\u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u0441\u043a\u0438"},{"variant":"B","answer_text":"\u041a\u0430\u0440\u0442\u043e\u0448\u043a\u0430 \u043f\u043e-\u043c\u0443\u043d\u0434\u0438\u0440\u0441\u043a\u0438"},{"variant":"C","answer_text":"\u041c\u0430\u043a\u0430\u0440\u043e\u043d\u044b \u043f\u043e-\u0444\u043b\u043e\u0442\u0441\u043a\u0438"},{"variant":"D","answer_text":"\u0421\u0435\u043b\u0451\u0434\u043a\u0430 \u043e\u0442-\u043a\u0443\u0442\u044e\u0440"}],"rigth_answer":"C","price":32000},{"id":8,"question":"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u043f\u0443\u0442\u044c \u0432 \u043a\u0430\u043a\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0443 \u0438\u0441\u043a\u0430\u043b\u0430 \u044d\u043a\u0441\u043f\u0435\u0434\u0438\u0446\u0438\u044f \u041a\u043e\u043b\u0443\u043c\u0431\u0430, \u0434\u043e\u043f\u043b\u044b\u0432 \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0434\u043e \u0410\u043c\u0435\u0440\u0438\u043a\u0438?","answers":[{"variant":"A","answer_text":"\u042d\u0444\u0438\u043e\u043f\u0438\u044f"},{"variant":"B","answer_text":"\u042f\u043f\u043e\u043d\u0438\u044f"},{"variant":"C","answer_text":"\u0418\u043d\u0434\u0438\u044f"},{"variant":"D","answer_text":"\u041a\u0438\u0442\u0430\u0439"}],"rigth_answer":"C","price":64000},{"id":9,"question":"\u041a\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0438\u0437 \u0445/\u0444 \u0441 \u0443\u0447\u0430\u0441\u0442\u0438\u0435\u043c \u041c\u0438\u0445\u0430\u0438\u043b\u0430 \u0411\u043e\u044f\u0440\u0441\u043a\u043e\u0433\u043e?","answers":[{"variant":"A","answer_text":"\u041f\u0435\u0442\u0443\u0445 \u043d\u0430 \u043a\u0440\u044b\u0448\u0435"},{"variant":"B","answer_text":"\u0421\u043e\u0431\u0430\u043a\u0430 \u043d\u0430 \u0441\u0435\u043d\u0435"},{"variant":"C","answer_text":"\u0411\u0430\u0440\u0430\u0448\u0435\u043a \u043d\u0430 \u0432\u0435\u0440\u0442\u0435\u043b\u0435"},{"variant":"D","answer_text":"\u0414\u2019\u0410\u0440\u0442\u0430\u043d\u044c\u044f\u043d \u0432 \u0420\u043e\u0441\u0441\u0438\u0438"}],"rigth_answer":"B","price":125000},{"id":10,"question":"\u0427\u0442\u043e, \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u043c\u0443 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044e, \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u0441\u043a\u0430\u0437\u0430\u0432\u0448\u0438\u0439 \xab\u0410\xbb?","answers":[{"variant":"A","answer_text":"\u0414\u043e\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u043e\u0442\u0432\u0435\u0442\u0430"},{"variant":"B","answer_text":"\u0421\u043a\u0430\u0437\u0430\u0442\u044c \xab\u0431\xbb"},{"variant":"C","answer_text":"\u041e\u0446\u0435\u043d\u0438\u0442\u044c \xab\u044f\xbb"},{"variant":"D","answer_text":"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}],"rigth_answer":"B","price":250000},{"id":11,"question":"\u041a\u0430\u043a\u043e\u0435 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e \u0434\u0430\u0440\u0438\u0442 \u041b\u043e\u043d\u0434\u043e\u043d\u0443 \u0451\u043b\u043a\u0443 \u0434\u043b\u044f \u0422\u0440\u0430\u0444\u0430\u043b\u044c\u0433\u0430\u0440\u0441\u043a\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u0438?","answers":[{"variant":"A","answer_text":"\u041d\u043e\u0440\u0432\u0435\u0433\u0438\u044f"},{"variant":"B","answer_text":"\u0424\u0438\u043d\u043b\u044f\u043d\u0434\u0438\u044f"},{"variant":"C","answer_text":" \u0414\u0430\u043d\u0438\u044f"},{"variant":"D","answer_text":"\u0428\u0432\u0435\u0446\u0438\u044f"}],"rigth_answer":"A","price":500000},{"id":12,"question":"\u041d\u0430 \u0441\u0430\u043c\u043e\u043b\u0451\u0442\u0435 \u043a\u0430\u043a\u043e\u0433\u043e \u0430\u0432\u0438\u0430\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0430 \u044d\u043a\u0438\u043f\u0430\u0436 \u0412\u0430\u043b\u0435\u0440\u0438\u044f \u0427\u043a\u0430\u043b\u043e\u0432\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u043b \u043f\u0435\u0440\u0432\u044b\u0439 \u0431\u0435\u0441\u043f\u043e\u0441\u0430\u0434\u043e\u0447\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u043b\u0451\u0442 \u0438\u0437 \u0421\u0421\u0421\u0420 \u0432 \u0421\u0428\u0410?","answers":[{"variant":"A","answer_text":"\u0418\u043b\u044c\u044e\u0448\u0438\u043d\u0430"},{"variant":"B","answer_text":"\u0410\u043d\u0442\u043e\u043d\u043e\u0432\u0430"},{"variant":"C","answer_text":"\u042f\u043a\u043e\u0432\u043b\u0435\u0432\u0430"},{"variant":"D","answer_text":"\u0422\u0443\u043f\u043e\u043b\u0435\u0432\u0430"}],"rigth_answer":"D","price":1000000}]')}},[[180,1,2]]]);
//# sourceMappingURL=main.d699a05e.chunk.js.map