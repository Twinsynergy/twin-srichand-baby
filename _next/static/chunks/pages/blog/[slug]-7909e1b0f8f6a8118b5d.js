_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/a9y":function(t,e,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),a=n("7W2i"),o=n("a1gu"),l=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}var c=n("TqRt");e.__esModule=!0,e.default=void 0;var u=c(n("q1tI")),d=c(n("8Kt/")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function m(t){var e=t.res,n=t.err;return{statusCode:e&&e.statusCode?e.statusCode:n?n.statusCode:404}}var p=function(t){a(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"render",value:function(){var t=this.props.statusCode,e=this.props.title||f[t]||"An unexpected error has occurred";return u.default.createElement("div",{style:b.error},u.default.createElement(d.default,null,u.default.createElement("title",null,t,": ",e)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),t?u.default.createElement("h1",{style:b.h1},t):null,u.default.createElement("div",{style:b.desc},u.default.createElement("h2",{style:b.h2},e,"."))))}}]),n}(u.default.Component);e.default=p,p.displayName="ErrorPage",p.getInitialProps=m,p.origGetInitialProps=m;var b={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},KTQB:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return m}));var r=n("nKUr"),i=n("q1tI"),a=n("20a2"),o=n("eomm"),l=n.n(o),s=n("wd/R"),c=n.n(s),u=n("RidC"),d=n("8Fkb"),f=n("PE4u"),m=!0;e.default=function(t){var e=t.story,n=Object(a.useRouter)(),o=Object(i.useState)(null),s=o[0],m=o[1];return Object(i.useEffect)((function(){if(n){var t=n.asPath.split("/");t.includes("asc")&&t.splice(2),t.includes("desc")&&t.splice(2),t.shift();var e=t.map((function(e,n){return{breadcrumb:e,href:"/".concat(t.slice(0,n+1).join("/"))}}));m(e)}}),[n]),s?n.isFallback?Object(r.jsx)("h1",{children:"Loading..."}):n.isFallback||e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.e,{siteTitle:e&&e.content.title,desc:e&&e.content.intro,imgSrc:e.content.image.replace("//a.storyblok.com","//img2.storyblok.com/0x500/"),siteUrl:"https://srichandbaby.twinsynergy.co.th/".concat(e.full_slug)}),Object(r.jsxs)(u.a,{children:[Object(r.jsx)(d.g,{hasBreadcrumbs:!1,className:"pt-40 md:pt-44"}),Object(r.jsx)("div",{className:"container mx-auto -mt-40 px-5 pt-5 md:pt-0 tourmaster-tour-booking-bar-wrap tourmaster-item-mglr",id:"tourmaster-tour-booking-bar-wrap",children:Object(r.jsxs)("div",{className:"tourmaster-tour-booking-bar-outer",children:[s&&Object(r.jsx)(d.a,{routes:s}),Object(r.jsx)("div",{className:"tourmaster-tour-booking-bar-inner bg-white",children:Object(r.jsxs)("figure",{children:[Object(r.jsx)("img",{className:"w-full my-10",src:e&&e.content.image.replace("//a.storyblok.com","//img2.storyblok.com/0x500/filters:quality(80):format(webp)"),alt:e&&e.content.title}),Object(r.jsx)("figcaption",{className:"hidden",children:e&&e.content.title})]})})]})}),void 0!==e?Object(r.jsx)(f.m,{published:c()(e.published_at).format("DD/MM/YYYY"),blok:e&&e.content}):"loading",Object(r.jsx)(f.l,{slug:e&&e.content.slug,title:e&&e.content.title})]})]}):Object(r.jsx)(l.a,{statusCode:404}):null}},MTnK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n("KTQB")}])},eomm:function(t,e,n){t.exports=n("/a9y")}},[["MTnK",0,2,4,6,3,7,8,1,5,9]]]);