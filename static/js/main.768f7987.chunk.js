(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(14),i=c.n(s),a=c(5),j=c(2),o=c(6),u=c.n(o),b=c(9),d=c(7),O=c(1);var m=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.summary,s=e.genres;return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:c,alt:n}),Object(O.jsx)("h2",{children:Object(O.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(O.jsx)("p",{children:r}),Object(O.jsx)("ul",{children:s.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]})};var l=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],l=i[1],h=Object(j.f)().tomato,x=Object(n.useCallback)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(h));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,l([t.data.movie]),r(!1);case 7:case"end":return e.stop()}}),e)}))),[h]);return Object(n.useEffect)((function(){x()}),[x]),console.log(o),Object(O.jsx)("div",{children:c?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:Object(O.jsx)(a.b,{to:"/",children:"HOME"})}),o.map((function(e){return Object(O.jsx)(m,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.description_intro,genres:e.genres},e.id)}))]})})};var h=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),console.log(a),Object(O.jsx)("div",{children:c?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsx)("div",{children:a.map((function(e){return Object(O.jsx)(m,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var x=function(){return Object(O.jsx)(a.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/movie/:tomato",children:Object(O.jsx)(l,{})}),Object(O.jsx)(j.a,{path:"/",children:Object(O.jsx)(h,{})})]})})};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.768f7987.chunk.js.map