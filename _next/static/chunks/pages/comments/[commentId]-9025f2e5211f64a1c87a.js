(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{8809:function(e,n,t){"use strict";t.d(n,{Ar:function(){return j},cD:function(){return u},OL:function(){return f}});var r=t(5893),i=t(5675),s=function(e){var n=e.src,t=e.size,s=e.alt;return(0,r.jsx)(i.default,{alt:s,height:t,priority:!0,src:n,width:t})},c=t(9008),a=t(9551),o=t(1163),l=t(7294),u=function(e){var n=e.href,t=e.children,i=(0,o.useRouter)(),s=(0,l.useCallback)((function(e){e.preventDefault(),i.push(n)}),[n,i]);return(0,r.jsx)("button",{onClick:s,type:"submit",children:t})},d=t(1664),f=function(e){var n=e.href,t=e.children;return(0,r.jsx)(d.default,{href:n,children:(0,r.jsx)("a",{children:t})})},h=t(2738),m=t.n(h),x=(new Date).getFullYear(),j=function(e){var n=e.children;return(0,r.jsxs)("div",{className:m().container,children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("link",{href:"/favicon.ico",rel:"icon"}),(0,r.jsx)("meta",{content:"Learn how to build a personal website using Next.js",name:"description"}),(0,r.jsx)("meta",{content:"https://og-image.vercel.app/".concat(encodeURI(a.g.siteTitle),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),property:"og:image"}),(0,r.jsx)("meta",{content:a.g.siteTitle,name:"og:title"}),(0,r.jsx)("meta",{content:"summary_large_image",name:"twitter:card"})]}),(0,r.jsx)("header",{className:m().header,children:(0,r.jsxs)("nav",{className:m().nav,children:[(0,r.jsx)("div",{className:m().div,children:(0,r.jsx)(f,{href:"/",children:(0,r.jsxs)("div",{className:m().row,children:[(0,r.jsx)(s,{alt:"logo",size:40,src:"/images/profile.webp"}),(0,r.jsx)("p",{children:"example"})]})})}),(0,r.jsxs)("ul",{className:m().row,children:[(0,r.jsx)("li",{className:m().li,children:(0,r.jsx)(f,{href:"/",children:(0,r.jsx)("p",{children:"link"})})}),(0,r.jsx)("li",{className:m().li,children:(0,r.jsx)(f,{href:"/",children:(0,r.jsx)("p",{children:"link"})})}),(0,r.jsx)("li",{className:m().li,children:(0,r.jsx)(u,{href:"/",children:(0,r.jsx)("p",{children:"action"})})})]})]})}),(0,r.jsx)("main",{children:n}),(0,r.jsx)("footer",{className:m().footer,children:(0,r.jsxs)("p",{children:["example ",x]})})]})}},5271:function(e,n,t){"use strict";t.d(n,{v:function(){return d}});var r=t(5893),i=t(9008),s=t(1163),c=t(8809),a=t(5723),o=t(9551),l=t(4919),u=function(){var e=(0,s.useRouter)().query.commentId,n="".concat(o.g.baseUrl,"/comments/").concat(e),t=(0,a.ZP)(n,o.r),i=t.data;if(t.error)return(0,r.jsx)("div",{children:"failed to load"});if(!i)return(0,r.jsx)("div",{children:"loading..."});if(!(0,l.C)(i))return(0,r.jsx)("div",{children:"invalid data"});var c=i.id,u=i.postId,d=i.name,f=i.email,h=i.body;return(0,r.jsxs)("div",{children:[c," ",u," ",d," ",f," ",h]})},d=function(){var e=(0,s.useRouter)().query.commentId;return(0,r.jsxs)(c.Ar,{children:[(0,r.jsx)(i.default,{children:(0,r.jsxs)("title",{children:["Comment ",e]})}),(0,r.jsxs)("h1",{children:["Comment ",e]}),(0,r.jsx)(u,{})]})}},4919:function(e,n,t){"use strict";t.d(n,{C:function(){return r},j:function(){return i}});var r=function(e){return"object"===typeof e&&"number"===typeof e.id&&"number"===typeof e.postId&&"string"===typeof e.name&&"string"===typeof e.email&&"string"===typeof e.body},i=function(e){return Array.isArray(e)&&e.every(r)}},7850:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(5271);n.default=function(){return(0,r.jsx)(i.v,{})}},9551:function(e,n,t){"use strict";t.d(n,{g:function(){return r},r:function(){return i}});var r={fontFamily:"https://fonts.googleapis.com/css2?family=Open+Sans",baseUrl:"https://jsonplaceholder.typicode.com",siteTitle:"Example Web Template"},i=function(e){return fetch(e).then((function(e){return e.json()}))}},6700:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comments/[commentId]",function(){return t(7850)}])},2738:function(e){e.exports={container:"Layout_container__1_Y9X",footer:"Layout_footer__TuZxx",row:"Layout_row__4bKvN","nav-link":"Layout_nav-link__up-hr",div:"Layout_div__28QQt",nav:"Layout_nav__2sVcb",li:"Layout_li__1PKJ5"}}},function(e){e.O(0,[675,723,774,888,179],(function(){return n=6700,e(e.s=n);var n}));var n=e.O();_N_E=n}]);