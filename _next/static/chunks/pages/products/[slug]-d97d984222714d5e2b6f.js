_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"/a9y":function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),l=n("7W2i"),a=n("a1gu"),o=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("TqRt");t.__esModule=!0,t.default=void 0;var u=s(n("q1tI")),d=s(n("8Kt/")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){l(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:m.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:m.h1},e):null,u.default.createElement("div",{style:m.desc},u.default.createElement("h2",{style:m.h2},t,"."))))}}]),n}(u.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"2etz":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[slug]",function(){return n("uU/V")}])},eomm:function(e,t,n){e.exports=n("/a9y")},"uU/V":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return p}));var r=n("nKUr"),i=n("q1tI"),l=n("20a2"),a=n("eomm"),o=n.n(a),c=n("wd/R"),s=n.n(c),u=n("RidC"),d=n("8Fkb"),f=n("PE4u"),p=!0;t.default=function(e){var t=e.story,n=e.stories,a=Object(l.useRouter)(),c=Object(i.useState)(null),p=c[0],h=c[1];return Object(i.useEffect)((function(){if(a){var e=a.asPath.split("/");e.includes("asc")&&e.splice(2),e.includes("desc")&&e.splice(2),e.shift();var t=e.map((function(t,n){return{breadcrumb:t,href:"/".concat(e.slice(0,n+1).join("/"))}}));h(t)}}),[a]),p?a.isFallback?Object(r.jsx)("h1",{children:"Loading..."}):a.isFallback||t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.e,{siteTitle:t&&t.content.title,desc:t&&t.content.intro,imgSrc:t.content.feature_product.filename.replace("//a.storyblok.com","//img2.storyblok.com/"),siteUrl:"https://srichandbaby.twinsynergy.co.th/".concat(t.full_slug)}),Object(r.jsxs)(u.a,{children:[void 0!==t?Object(r.jsx)(f.n,{title:"SRICHAND BABY - NEW BORN POWDER",routes:p,published:s()(t.published_at).format("DD/MM/YYYY"),blok:t&&t.content}):"loading",Object(r.jsxs)("div",{className:"container mx-auto px-5 pb-24 md:pb-48",children:[Object(r.jsx)("h2",{className:"text-center uppercase mt-10 mb-20",children:"Related Products"}),Object(r.jsx)(f.k,{blok:n})]})]})]}):Object(r.jsx)(o.a,{statusCode:404}):null}}},[["2etz",0,2,4,6,3,7,8,1,5,9]]]);