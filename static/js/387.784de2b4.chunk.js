"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{530:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return o},Tg:function(){return s},Y5:function(){return f},wL:function(){return p}});var r=e(861),a=e(687),u=e.n(a),c=e(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="336a33d599bf6aff6a2e497c94250ac4",s=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(439),u=e(689),c=e(791),i=e(530),s=e(940),o=e(766),f=e(686).Z.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n"]))),p=e(184),l=function(){var n=(0,u.UO)().movieId,t=(0,c.useState)([]),e=(0,a.Z)(t,2),r=e[0],o=e[1],l=(0,c.useState)(!1),h=(0,a.Z)(l,2),d=h[0],v=h[1];return(0,c.useEffect)((function(){v(!0),(0,i.Bt)(n).then((function(n){o(n)})).catch((function(n){console.log(n)})).finally((function(){v(!1)}))}),[n]),(0,p.jsxs)(p.Fragment,{children:[d&&(0,p.jsx)(s.Z,{}),0!==r.length&&(0,p.jsx)("div",{children:(0,p.jsx)(f,{children:r.map((function(n){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h2",{children:["Author: ",n.author]}),(0,p.jsx)("p",{children:n.content})]},n.id)}))})}),0===r.length&&(0,p.jsx)("div",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=387.784de2b4.chunk.js.map