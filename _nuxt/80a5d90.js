(window.webpackJsonp=window.webpackJsonp||[]).push([[36,24,25,28],{328:function(t,e,r){"use strict";r.r(e);var o={name:"BreezeInput",methods:{handleInput:function(t){this.$emit("input",t.target.value)}}},l=r(11),component=Object(l.a)(o,(function(){return(0,this._self._c)("input",{staticClass:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",attrs:{type:"text"},on:{input:this.handleInput}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(328).default})},330:function(t,e,r){t.exports=r.p+"img/logo-original.44c9bdb.png"},331:function(t,e,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("4108b625",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";r.r(e);r(42),r(30),r(41),r(58),r(35),r(59);var o=r(23),l=(r(16),r(48));r(7);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"nav-bar",props:{activeMenu:""},components:{},data:function(){return{darkMode:!0,showMenu:!1,show:!0,search:"",results:[],scrollAmount:0}},watch:{search:function(t){var e=this;if(t.length>=2){var r={value:t};this.$axios.get("/search",{params:r}).then((function(t){e.results=t.data}))}}},methods:c(c({scroll_left:function(){document.querySelector(".wrapper-box").scrollLeft-=300},scroll_right:function(){document.querySelector(".wrapper-box").scrollLeft+=300},scrollLeft:function(){console.log("asd"),this.$refs.menu.scrollTo({left:this.scrollAmount+=200,behavior:"smooth"})},scrollRight:function(){this.$refs.menu.scrollTo({left:this.scrollAmount-=200,behavior:"smooth"})},changeTheme:function(){this.darkMode?(localStorage.setItem("theme","light"),this.darkMode=!1,document.documentElement.classList.remove("dark")):(this.darkMode=!0,localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"))},verCarrito:function(){this.toSetOpenCartStorage(!0)},closeCarrito:function(){this.toSetOpenCartStorage(!1)},logOut:function(){this.toSetUserStorage(null),this.$router.push("/").catch((function(){}))}},Object(l.b)("user",["setUser","toSetUserStorage"])),Object(l.b)("cart",["setCart","toSetOpenCartStorage"])),computed:c(c(c(c({},Object(l.c)("user",["user"])),Object(l.c)("cart",["showCart","alertAdd","nameAdd"])),Object(l.c)({items:"cart/items"})),{},{countItems:function(){return this.items.reduce((function(t,i){return t+i.quantity}),0)},categories:function(){return this.$store.getters.categories}}),created:function(){this.$store.dispatch("getCategories")}},C=(r(335),r(11)),component=Object(C.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"shadow-md"},[e("div",{staticClass:"flex h-12 py-3 px-6 items-center justify-between bg-[#000000]"},[e("div",{staticClass:"flex flex-wrap -m-1.5"},[e("div",{staticClass:"w-auto p-1.5"},[e("a",{attrs:{href:"https://www.facebook.com/asisferreteria",target:"_blank"}},[e("div",{staticClass:"flex items-center justify-center w-8 h-8 border border-gray-100 hover:border-gray-200 rounded-full"},[e("svg",{attrs:{width:"8",height:"15",viewbox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.81589 5.30371L5.81589 3.80371C5.81589 3.15371 5.97379 2.80371 7.07905 2.80371H8.44747V0.303711L6.34221 0.303711C3.71063 0.303711 2.658 1.95371 2.658 3.80371V5.30371H0.552734L0.552734 7.80371H2.658L2.658 15.3037H5.81589L5.81589 7.80371H8.13168L8.44747 5.30371H5.81589Z",fill:"#ffffff"}})])])])]),t._v(" "),e("div",{staticClass:"w-auto p-1.5"},[e("a",{attrs:{href:"https://instagram.com/asisferreteria?igshid=MzRlODBiNWFlZA==",target:"_blank"}},[e("div",{staticClass:"flex items-center justify-center w-8 h-8 border border-gray-100 hover:border-gray-200 rounded-full"},[e("svg",{attrs:{width:"16",height:"16",viewbox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.5 0.803711C6.329 0.803711 6.056 0.813711 5.203 0.851711C4.35 0.891711 3.769 1.02571 3.26 1.22371C2.72609 1.42453 2.24249 1.73954 1.843 2.14671C1.43608 2.54641 1.12111 3.02995 0.92 3.56371C0.722 4.07171 0.587 4.65371 0.548 5.50371C0.51 6.35871 0.5 6.63071 0.5 8.80471C0.5 10.9767 0.51 11.2487 0.548 12.1017C0.588 12.9537 0.722 13.5347 0.92 14.0437C1.125 14.5697 1.398 15.0157 1.843 15.4607C2.287 15.9057 2.733 16.1797 3.259 16.3837C3.769 16.5817 4.349 16.7167 5.201 16.7557C6.055 16.7937 6.327 16.8037 8.5 16.8037C10.673 16.8037 10.944 16.7937 11.798 16.7557C12.649 16.7157 13.232 16.5817 13.741 16.3837C14.2746 16.1828 14.7578 15.8678 15.157 15.4607C15.602 15.0157 15.875 14.5697 16.08 14.0437C16.277 13.5347 16.412 12.9537 16.452 12.1017C16.49 11.2487 16.5 10.9767 16.5 8.80371C16.5 6.63071 16.49 6.35871 16.452 5.50471C16.412 4.65371 16.277 4.07171 16.08 3.56371C15.8789 3.02994 15.5639 2.54639 15.157 2.14671C14.7576 1.73939 14.274 1.42436 13.74 1.22371C13.23 1.02571 12.648 0.890711 11.797 0.851711C10.943 0.813711 10.672 0.803711 8.498 0.803711H8.501H8.5ZM7.783 2.24571H8.501C10.637 2.24571 10.89 2.25271 11.733 2.29171C12.513 2.32671 12.937 2.45771 13.219 2.56671C13.592 2.71171 13.859 2.88571 14.139 3.16571C14.419 3.44571 14.592 3.71171 14.737 4.08571C14.847 4.36671 14.977 4.79071 15.012 5.57071C15.051 6.41371 15.059 6.66671 15.059 8.80171C15.059 10.9367 15.051 11.1907 15.012 12.0337C14.977 12.8137 14.846 13.2367 14.737 13.5187C14.6087 13.8661 14.404 14.1801 14.138 14.4377C13.858 14.7177 13.592 14.8907 13.218 15.0357C12.938 15.1457 12.514 15.2757 11.733 15.3117C10.89 15.3497 10.637 15.3587 8.501 15.3587C6.365 15.3587 6.111 15.3497 5.268 15.3117C4.488 15.2757 4.065 15.1457 3.783 15.0357C3.4355 14.9076 3.12113 14.7033 2.863 14.4377C2.59675 14.1797 2.39172 13.8654 2.263 13.5177C2.154 13.2367 2.023 12.8127 1.988 12.0327C1.95 11.1897 1.942 10.9367 1.942 8.79971C1.942 6.66371 1.95 6.41171 1.988 5.56871C2.024 4.78871 2.154 4.36471 2.264 4.08271C2.409 3.70971 2.583 3.44271 2.863 3.16271C3.143 2.88271 3.409 2.70971 3.783 2.56471C4.065 2.45471 4.488 2.32471 5.268 2.28871C6.006 2.25471 6.292 2.24471 7.783 2.24371V2.24571ZM12.771 3.57371C12.6449 3.57371 12.5201 3.59854 12.4036 3.64679C12.2872 3.69503 12.1813 3.76574 12.0922 3.85489C12.003 3.94403 11.9323 4.04986 11.8841 4.16633C11.8358 4.28281 11.811 4.40764 11.811 4.53371C11.811 4.65978 11.8358 4.78461 11.8841 4.90109C11.9323 5.01756 12.003 5.12339 12.0922 5.21253C12.1813 5.30168 12.2872 5.37239 12.4036 5.42064C12.5201 5.46888 12.6449 5.49371 12.771 5.49371C13.0256 5.49371 13.2698 5.39257 13.4498 5.21253C13.6299 5.0325 13.731 4.78832 13.731 4.53371C13.731 4.2791 13.6299 4.03492 13.4498 3.85489C13.2698 3.67485 13.0256 3.57371 12.771 3.57371ZM8.501 4.69571C7.95607 4.68721 7.41489 4.7872 6.90898 4.98985C6.40306 5.19251 5.94251 5.49378 5.55415 5.87613C5.16579 6.25849 4.85736 6.71428 4.64684 7.21697C4.43632 7.71966 4.3279 8.25921 4.3279 8.80421C4.3279 9.34921 4.43632 9.88876 4.64684 10.3915C4.85736 10.8941 5.16579 11.3499 5.55415 11.7323C5.94251 12.1146 6.40306 12.4159 6.90898 12.6186C7.41489 12.8212 7.95607 12.9212 8.501 12.9127C9.57954 12.8959 10.6082 12.4556 11.365 11.687C12.1217 10.9183 12.5459 9.88288 12.5459 8.80421C12.5459 7.72554 12.1217 6.69012 11.365 5.92146C10.6082 5.1528 9.57954 4.71254 8.501 4.69571ZM8.501 6.13671C9.20833 6.13671 9.88669 6.4177 10.3869 6.91786C10.887 7.41802 11.168 8.09638 11.168 8.80371C11.168 9.51104 10.887 10.1894 10.3869 10.6896C9.88669 11.1897 9.20833 11.4707 8.501 11.4707C7.79367 11.4707 7.11531 11.1897 6.61515 10.6896C6.11499 10.1894 5.834 9.51104 5.834 8.80371C5.834 8.09638 6.11499 7.41802 6.61515 6.91786C7.11531 6.4177 7.79367 6.13671 8.501 6.13671Z",fill:"#ffffff"}})])])])])]),t._v(" "),e("div",{staticClass:"w-auto"},[e("a",{staticClass:"inline-flex items-center hover:text-gray-300 text-white",attrs:{href:"mailto:info@asisferreteria.com"}},[e("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"}})]),t._v(" "),e("span",{staticClass:"hidden lg:block ml-2 text-xs font-medium"},[t._v("info@asisferreteria.com")])])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-between h-16 py-3 px-6 bg-white"},[e("NuxtLink",{staticClass:"inline-block text-2xl font-bold mr-10",attrs:{to:"/",href:"#"}},[e("img",{staticClass:"mr-3 w-28 md:w-32",attrs:{src:r(330),alt:"Asis Ferreteria"}})]),t._v(" "),e("ul",{staticClass:"hidden md:flex mx-auto font-base text-sm titleNav font-heading md:space-x-12 space-x-6 items-center text-center justify-center"},[e("li",[e("NuxtLink",{staticClass:"hover-inhaus page-scroll uppercase",attrs:{to:"/la-empresa",href:"#"}},[t._v("LA EMPRESA")])],1),t._v(" "),e("li",{staticClass:"hoverable hover:bg-[#FF4D50] hover:text-white"},[e("a",{staticClass:"relative block lg:p-5 hover:bg-[#FF4D50] hover:text-white",attrs:{href:"#"}},[t._v("PRODUCTOS")]),t._v(" "),e("div",{staticClass:"p-5 mega-menu z-50 mb-16 sm:mb-0 shadow-xl bg-white border-top-1 border-[#FF4D50]"},[e("div",{staticClass:"container mx-auto w-full flex flex-wrap justify-between mx-2"},t._l(t.categories,(function(r,i){return e("ul",{key:i,staticClass:"px-4 text-center w-full sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3"},[e("NuxtLink",{attrs:{to:"/"+r.slag}},[e("h3",{staticClass:"font-bold text-xl text-black text-bold"},[t._v(t._s(r.nombre))]),t._v(" "),e("li",{staticClass:"pt-3"},[e("img",{staticClass:"w-40 mx-auto rounded-2xl object-cover transform group-hover:scale-105 transition ease-in-out duration-1000",attrs:{src:t.$config.url_img+r.imagen,alt:""}})])])],1)})),0)])]),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/presupuesto"}},[t._v("PRESUPUESTO")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/contacto"}},[t._v("CONTACTO")])],1)]),t._v(" "),e("div",{staticClass:"md:flex hidden ml-24"},[e("div",{staticClass:"flex px-4 h-8 mb-4 md:mb-0 max-w-sm items-center border border-gray-400 rounded-lg"},[e("span",{staticClass:"flex-shrink-0"},[e("svg",{attrs:{width:"14",height:"14",viewbox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13.4733 12.5267L10.9999 10.0734C11.96 8.87633 12.4249 7.35692 12.2991 5.82759C12.1733 4.29826 11.4664 2.87525 10.3236 1.85115C9.18085 0.827062 7.68914 0.279732 6.15522 0.321705C4.62129 0.363679 3.16175 0.991766 2.0767 2.07682C0.991644 3.16187 0.363557 4.62142 0.321583 6.15534C0.27961 7.68926 0.82694 9.18097 1.85103 10.3237C2.87512 11.4665 4.29814 12.1735 5.82747 12.2993C7.3568 12.4251 8.87621 11.9601 10.0733 11.0001L12.5266 13.4534C12.5886 13.5159 12.6623 13.5655 12.7436 13.5993C12.8248 13.6332 12.9119 13.6506 12.9999 13.6506C13.0879 13.6506 13.1751 13.6332 13.2563 13.5993C13.3376 13.5655 13.4113 13.5159 13.4733 13.4534C13.5934 13.3291 13.6606 13.163 13.6606 12.9901C13.6606 12.8172 13.5934 12.651 13.4733 12.5267ZM6.33327 11.0001C5.41029 11.0001 4.50804 10.7264 3.74061 10.2136C2.97318 9.7008 2.37504 8.97197 2.02183 8.11925C1.66862 7.26653 1.57621 6.32821 1.75627 5.42297C1.93634 4.51773 2.38079 3.6862 3.03344 3.03356C3.68608 2.38091 4.5176 1.93646 5.42285 1.75639C6.32809 1.57633 7.2664 1.66874 8.11913 2.02195C8.97185 2.37516 9.70068 2.9733 10.2135 3.74073C10.7262 4.50816 10.9999 5.41041 10.9999 6.33339C10.9999 7.57107 10.5083 8.75805 9.6331 9.63322C8.75793 10.5084 7.57095 11.0001 6.33327 11.0001Z",fill:"#3D485B"}})])]),t._v(" "),e("input",{staticClass:"block pl-2 text-sm font-medium text-gray-300 outline-none",attrs:{type:"search",placeholder:"Buscar"}})])]),t._v(" "),e("div",{staticClass:"md:hidden ml-auto"},[e("button",{staticClass:"navbar-burger flex items-center text-black hover:text-[#EFC1B2]",on:{click:function(e){t.showMenu=!0}}},[e("svg",{attrs:{width:"24",height:"24",viewbox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3 18H21",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M3 12H21",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M3 6H21",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"navbar-menu relative z-50"},[e("div",{staticClass:"navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"}),t._v(" "),e("nav",{staticClass:"fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"},[e("div",{staticClass:"flex items-center mb-8"},[e("NuxtLink",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#home",duration:450,easing:"ease-out"},expression:"{ el: '#home', duration: 450, easing: 'ease-out', }"}],staticClass:"mr-auto text-3xl font-bold leading-none font-heading cursor-pointer",attrs:{to:"/"}},[e("img",{staticClass:"md:w-48 w-36",attrs:{alt:"mundar",src:r(330)}})]),t._v(" "),e("button",{staticClass:"navbar-close",on:{click:function(e){t.showMenu=!1}}},[e("svg",{staticClass:"h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])],1),t._v(" "),e("div",[e("ul",[e("li",{staticClass:"mb-1"},[e("NuxtLink",{staticClass:"block p-4 text-base font-semibold text-gray-800 hover:text-[#BB2649] page-scroll navbar-close",class:"la-empresa"===t.activeMenu?"border-b-2 border-b-[#FF4D50] text-[#FF4D50]":"text-black",attrs:{to:"/la-empresa"}},[t._v("LA EMPRESA")])],1),t._v(" "),e("li",{staticClass:"hoverable hover:bg-[#FF4D50] hover:text-white mb-1"},[e("a",{staticClass:"relative block block p-4 text-base font-semibold text-gray-800 hover:text-white page-scroll navbar-close",attrs:{href:"#"}},[t._v("PRODUCTOS")]),t._v(" "),e("div",{staticClass:"p-5 mega-menu z-50 mb-16 sm:mb-0 shadow-xl bg-white border-top-1 border-[#FF4D50]"},[e("div",{staticClass:"container mx-auto w-full flex flex-wrap justify-between mx-2"},t._l(t.categories,(function(r,i){return e("ul",{key:i,staticClass:"px-4 text-center w-1/2 sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3"},[e("NuxtLink",{attrs:{to:"/"+r.slag}},[e("h3",{staticClass:"font-bold text-base text-black text-bold"},[t._v(t._s(r.nombre))]),t._v(" "),e("li",{staticClass:"pt-3"},[e("img",{staticClass:"w-20 mx-auto rounded-2xl object-cover transform group-hover:scale-105 transition ease-in-out duration-1000",attrs:{src:t.$config.url_img+r.imagen,alt:""}})])])],1)})),0)])]),t._v(" "),e("li",{staticClass:"mb-1"},[e("NuxtLink",{staticClass:"block p-4 text-base font-semibold text-gray-800 hover:text-[#BB2649] page-scroll navbar-close",class:"presupuesto"===t.activeMenu?"border-b-2 border-b-[#FF4D50] text-[#FF4D50]":"text-black",attrs:{to:"/presupuesto"}},[t._v("PRESUPUESTO")])],1),t._v(" "),e("li",{staticClass:"mb-1"},[e("NuxtLink",{staticClass:"block p-4 text-base font-semibold text-gray-800 hover:text-[#BB2649] page-scroll navbar-close",class:"presupuesto"===t.activeMenu?"border-b-2 border-b-[#FF4D50] text-[#FF4D50]":"text-black",attrs:{to:"/contacto"}},[t._v("CONTACTO")])],1)])])])]),t._v(" "),t.alertAdd?e("div",{staticClass:"z-50 fixed right-0 top-0 flex w-full p-4 mt-2 origin-bottom-right bg-white rounded-md shadow-lg md:mr-10 md:w-64 white-arrow-top ring-1 ring-black ring-opacity-5"},[e("div",{staticClass:"pr-2"},[e("svg",{staticClass:"w-5 h-5 text-green-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"data-v-e4de269c":"","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})])]),t._v(" "),e("div",[e("div",{staticClass:"pb-2 text-sm text-gray-700"},[t._v("\n            Carrito de Compras\n            ")]),t._v(" "),e("div",{staticClass:"text-sm tracking-tight text-gray-600"},[t._v("\n              Agregamos "),e("strong",[t._v(t._s(t.nameAdd))]),t._v(" al carrito\n              de compras.\n          ")])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(328).default,Button:r(144).default})},333:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this._self._c;return t("a",{staticClass:"float",attrs:{href:"https://api.whatsapp.com/send?phone=5492212260984&text=Hola, quiero más información.",target:"_blank"}},[t("i",{staticClass:"fab fa-whatsapp my-float"})])},function(){var t=this._self._c;return t("a",{staticClass:"mb-8 inline-block",attrs:{href:"#"}},[t("img",{staticClass:"md:w-32 w-20",attrs:{src:r(338),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full sm:w-1/2 md:w-3/12"},[e("ul",[e("li",{staticClass:"mb-5"},[e("a",{staticClass:"hover:underline text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{href:"mailto:info@asisferreteria.com"}},[t._v("info@asisferreteria.com")])]),t._v(" "),e("li",{staticClass:"mb-5"},[e("a",{staticClass:"hover:underline text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{href:"mailto:administracion@asisferreteria.com"}},[t._v("administracion@asisferreteria.com")])]),t._v(" "),e("li",{staticClass:"mb-5"},[e("a",{staticClass:"hover:underline text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{href:"https://api.whatsapp.com/send?phone=5492216056543&text=Hola, quiero saber acerca de",target:"blank"}},[t._v("+54 9 221 6056543\n             ")])]),t._v(" "),e("li",[e("a",{staticClass:"hover:underline text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{href:"https://goo.gl/maps/VGX6bPVeD6X1wtzF9",target:"blank"}},[t._v("Camino General Belgrano y 452\n             ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex mt-4 space-x-6 sm:justify-center sm:mt-0"},[e("span",{staticClass:"text-sm text-white font-base text-center leading-normal"},[t._v("Desarrollado por "),e("a",{staticClass:"hover:underline text-font-semibold text-[#FF4D50]",attrs:{href:"https://mundardigital.com",target:"_blank"}},[t._v("Mundar Digital")])])])}],l={name:"footer-web",props:{},components:{},data:function(){return{anio:(new Date).getFullYear()}},methods:{},computed:{},created:function(){}},n=(r(339),r(11)),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("footer",{staticClass:"relative pt-8 overflow-hidden bg-black"},[e("div",{staticClass:"relative z-10 md:px-6 px-4"},[e("div",{staticClass:"pb-8 border-b border-white"},[e("div",{staticClass:"flex flex-wrap m-2"},[e("div",{staticClass:"w-full sm:w-1/2 lg:w-5/12"},[e("div",{staticClass:"lg:max-w-sm px-4"},[t._m(1),t._v(" "),e("div",{staticClass:"flex flex-wrap -m-1.5"},[e("div",{staticClass:"w-auto p-1.5"},[e("a",{attrs:{href:"https://www.facebook.com/asisferreteria",target:"_blank"}},[e("div",{staticClass:"flex items-center justify-center w-9 h-9 border border-gray-100 hover:border-gray-200 rounded-full"},[e("svg",{attrs:{width:"9",height:"16",viewbox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.81589 5.30371L5.81589 3.80371C5.81589 3.15371 5.97379 2.80371 7.07905 2.80371H8.44747V0.303711L6.34221 0.303711C3.71063 0.303711 2.658 1.95371 2.658 3.80371V5.30371H0.552734L0.552734 7.80371H2.658L2.658 15.3037H5.81589L5.81589 7.80371H8.13168L8.44747 5.30371H5.81589Z",fill:"#ffffff"}})])])])]),t._v(" "),e("div",{staticClass:"w-auto p-1.5"},[e("a",{attrs:{href:"https://instagram.com/asisferreteria?igshid=MzRlODBiNWFlZA==",target:"_blank"}},[e("div",{staticClass:"flex items-center justify-center w-9 h-9 border border-gray-100 hover:border-gray-200 rounded-full"},[e("svg",{attrs:{width:"17",height:"17",viewbox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.5 0.803711C6.329 0.803711 6.056 0.813711 5.203 0.851711C4.35 0.891711 3.769 1.02571 3.26 1.22371C2.72609 1.42453 2.24249 1.73954 1.843 2.14671C1.43608 2.54641 1.12111 3.02995 0.92 3.56371C0.722 4.07171 0.587 4.65371 0.548 5.50371C0.51 6.35871 0.5 6.63071 0.5 8.80471C0.5 10.9767 0.51 11.2487 0.548 12.1017C0.588 12.9537 0.722 13.5347 0.92 14.0437C1.125 14.5697 1.398 15.0157 1.843 15.4607C2.287 15.9057 2.733 16.1797 3.259 16.3837C3.769 16.5817 4.349 16.7167 5.201 16.7557C6.055 16.7937 6.327 16.8037 8.5 16.8037C10.673 16.8037 10.944 16.7937 11.798 16.7557C12.649 16.7157 13.232 16.5817 13.741 16.3837C14.2746 16.1828 14.7578 15.8678 15.157 15.4607C15.602 15.0157 15.875 14.5697 16.08 14.0437C16.277 13.5347 16.412 12.9537 16.452 12.1017C16.49 11.2487 16.5 10.9767 16.5 8.80371C16.5 6.63071 16.49 6.35871 16.452 5.50471C16.412 4.65371 16.277 4.07171 16.08 3.56371C15.8789 3.02994 15.5639 2.54639 15.157 2.14671C14.7576 1.73939 14.274 1.42436 13.74 1.22371C13.23 1.02571 12.648 0.890711 11.797 0.851711C10.943 0.813711 10.672 0.803711 8.498 0.803711H8.501H8.5ZM7.783 2.24571H8.501C10.637 2.24571 10.89 2.25271 11.733 2.29171C12.513 2.32671 12.937 2.45771 13.219 2.56671C13.592 2.71171 13.859 2.88571 14.139 3.16571C14.419 3.44571 14.592 3.71171 14.737 4.08571C14.847 4.36671 14.977 4.79071 15.012 5.57071C15.051 6.41371 15.059 6.66671 15.059 8.80171C15.059 10.9367 15.051 11.1907 15.012 12.0337C14.977 12.8137 14.846 13.2367 14.737 13.5187C14.6087 13.8661 14.404 14.1801 14.138 14.4377C13.858 14.7177 13.592 14.8907 13.218 15.0357C12.938 15.1457 12.514 15.2757 11.733 15.3117C10.89 15.3497 10.637 15.3587 8.501 15.3587C6.365 15.3587 6.111 15.3497 5.268 15.3117C4.488 15.2757 4.065 15.1457 3.783 15.0357C3.4355 14.9076 3.12113 14.7033 2.863 14.4377C2.59675 14.1797 2.39172 13.8654 2.263 13.5177C2.154 13.2367 2.023 12.8127 1.988 12.0327C1.95 11.1897 1.942 10.9367 1.942 8.79971C1.942 6.66371 1.95 6.41171 1.988 5.56871C2.024 4.78871 2.154 4.36471 2.264 4.08271C2.409 3.70971 2.583 3.44271 2.863 3.16271C3.143 2.88271 3.409 2.70971 3.783 2.56471C4.065 2.45471 4.488 2.32471 5.268 2.28871C6.006 2.25471 6.292 2.24471 7.783 2.24371V2.24571ZM12.771 3.57371C12.6449 3.57371 12.5201 3.59854 12.4036 3.64679C12.2872 3.69503 12.1813 3.76574 12.0922 3.85489C12.003 3.94403 11.9323 4.04986 11.8841 4.16633C11.8358 4.28281 11.811 4.40764 11.811 4.53371C11.811 4.65978 11.8358 4.78461 11.8841 4.90109C11.9323 5.01756 12.003 5.12339 12.0922 5.21253C12.1813 5.30168 12.2872 5.37239 12.4036 5.42064C12.5201 5.46888 12.6449 5.49371 12.771 5.49371C13.0256 5.49371 13.2698 5.39257 13.4498 5.21253C13.6299 5.0325 13.731 4.78832 13.731 4.53371C13.731 4.2791 13.6299 4.03492 13.4498 3.85489C13.2698 3.67485 13.0256 3.57371 12.771 3.57371ZM8.501 4.69571C7.95607 4.68721 7.41489 4.7872 6.90898 4.98985C6.40306 5.19251 5.94251 5.49378 5.55415 5.87613C5.16579 6.25849 4.85736 6.71428 4.64684 7.21697C4.43632 7.71966 4.3279 8.25921 4.3279 8.80421C4.3279 9.34921 4.43632 9.88876 4.64684 10.3915C4.85736 10.8941 5.16579 11.3499 5.55415 11.7323C5.94251 12.1146 6.40306 12.4159 6.90898 12.6186C7.41489 12.8212 7.95607 12.9212 8.501 12.9127C9.57954 12.8959 10.6082 12.4556 11.365 11.687C12.1217 10.9183 12.5459 9.88288 12.5459 8.80421C12.5459 7.72554 12.1217 6.69012 11.365 5.92146C10.6082 5.1528 9.57954 4.71254 8.501 4.69571ZM8.501 6.13671C9.20833 6.13671 9.88669 6.4177 10.3869 6.91786C10.887 7.41802 11.168 8.09638 11.168 8.80371C11.168 9.51104 10.887 10.1894 10.3869 10.6896C9.88669 11.1897 9.20833 11.4707 8.501 11.4707C7.79367 11.4707 7.11531 11.1897 6.61515 10.6896C6.11499 10.1894 5.834 9.51104 5.834 8.80371C5.834 8.09638 6.11499 7.41802 6.61515 6.91786C7.11531 6.4177 7.79367 6.13671 8.501 6.13671Z",fill:"#ffffff"}})])])])])])])]),t._v(" "),e("div",{staticClass:"w-full sm:w-1/2 md:w-3/12"},[e("ul",[e("li",{staticClass:"mb-5"},[e("NuxtLink",{staticClass:"text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{to:"/la-empresa"}},[t._v("LA EMPRESA")])],1),t._v(" "),e("li",{staticClass:"mb-5"},[e("NuxtLink",{staticClass:"text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{to:"/productos"}},[t._v("PRODUCTOS")])],1),t._v(" "),e("li",{staticClass:"mb-5"},[e("NuxtLink",{staticClass:"text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{to:"/presupuesto"}},[t._v("PRESUPUESTO")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"text-white hover:text-gray-200 font-base text-xs leading-relaxed",attrs:{to:"/contacto"}},[t._v("CONTACTO")])],1)])]),t._v(" "),t._m(2)])]),t._v(" "),e("div",{staticClass:"sm:flex sm:items-center sm:justify-between py-5"},[e("span",{staticClass:"text-sm text-white font-base text-center leading-normal"},[t._v("Copyright © "+t._s(t.anio)+". Todos los derechos reservados\n            ")]),t._v(" "),t._m(3)])])])])}),o,!1,null,"4f7183a5",null);e.default=component.exports;installComponents(component,{Footer:r(333).default})},334:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("328d8265",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r(331)},336:function(t,e,r){var o=r(27)((function(i){return i[1]}));o.push([t.i,'.arrow{position:absolute;height:100%;flex-direction:row;justify-content:center}.left-arrow{left:0}.right-arrow{right:0}.mega-menu{display:none;left:0;position:absolute;text-align:left;width:100%}.hoverable{position:static}.hoverable:hover .mega-menu{display:block}.toggleable>label:after{content:"\\25BC";font-size:10px;padding-left:6px;position:relative;top:-1px}.toggle-input,.toggle-input:not(checked)~.mega-menu{display:none}.toggle-input:checked~.mega-menu{display:block}.toggle-input:checked+label{color:#fff;background:#2c5282}.toggle-input:checked~label:after{content:"\\25B2";font-size:10px;padding-left:6px;position:relative;top:-1px}',""]),o.locals={},t.exports=o},338:function(t,e,r){t.exports=r.p+"img/logo-white.723e5fb.png"},339:function(t,e,r){"use strict";r(334)},340:function(t,e,r){var o=r(27)((function(i){return i[1]}));o.push([t.i,".float[data-v-4f7183a5]{position:fixed;width:60px;height:60px;bottom:20px;right:30px;background-color:#25d366;color:#fff;border-radius:50px;text-align:center;font-size:30px;box-shadow:1px 1px 2px #999;z-index:30}.my-float[data-v-4f7183a5]{margin-top:15px}",""]),o.locals={},t.exports=o},400:function(t,e,r){"use strict";r.r(e);var o={name:"politicas-cambios",components:{NavBar:r(332).default},props:{},mounted:function(){},data:function(){return{}},methods:{},computed:{},created:function(){}},l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),t._v(" "),t._m(0),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-50"},[e("div",[e("section",{staticClass:"relative pt-24 pb-28 bg-blueGray-50 overflow-hidden"},[e("div",{staticClass:"relative z-10 md:px-20 px-4 mx-auto"},[e("div",{staticClass:"md:max-w-4xl mx-auto"},[e("h2",{staticClass:"mb-7 text-xl md:text-2xl text-center font-semibold"},[t._v("Envíos")]),t._v(" "),e("div",{staticClass:"mb-11 flex flex-wrap -m-1"},[e("div",{staticClass:"w-full p-1"},[e("div",{staticClass:"py-7 px-8 bg-white bg-opacity-60 border border-[#EFC1B2] rounded-2xl shadow-10xl"},[e("div",{staticClass:"flex flex-wrap justify-between -m-2"},[e("div",{staticClass:"flex-1 p-2"},[e("h3",{staticClass:"mb-4 text-md font-semibold leading-normal"},[t._v("Envíos a todo el país")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("Llegamos a cualquier parte de Argentina.")])])])])]),t._v(" "),e("div",{staticClass:"w-full p-1"},[e("div",{staticClass:"py-7 px-8 bg-white bg-opacity-60 border border-[#EFC1B2] rounded-2xl shadow-10xl"},[e("div",{staticClass:"flex flex-wrap justify-between -m-2"},[e("div",{staticClass:"flex-1 p-2"},[e("h3",{staticClass:"text-md font-semibold leading-normal"},[t._v("Envío a domicilio estándar (Las entregas a través de SHIPNOW)")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("Las entregas a través de Shipnow se realizan de lunes a viernes de 9 a 18 hs y los sábados de 9 a 13 hs. A partir de cuándo recibas el email de confirmación de pago, vas a poder hacer el seguimiento de tu pedido a través del código de seguimiento. También podés comunicarte con Shipnow por WhatsApp al +549 11 3618 0418 o mandar un correo con tus datos a CUSTOMER@SHIPNOW.COM.AR.")])])])])]),t._v(" "),e("div",{staticClass:"w-full p-1"},[e("div",{staticClass:"py-7 px-8 bg-white bg-opacity-60 border border-[#EFC1B2] rounded-2xl shadow-10xl"},[e("div",{staticClass:"flex flex-wrap justify-between -m-2"},[e("div",{staticClass:"flex-1 p-2"},[e("h3",{staticClass:"text-md font-semibold leading-normal"},[t._v("Retiros por consultorio.")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("Podrás retirar tu pedido apenas recibas el email de confirmación de pago, y que el pedido se encuentra listo para ser retirado.")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("Consultorio La Plata Calle 11 número 1636 piso 1B, entre 65 y 66.")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("Consultorio Coronel Suárez Calle .... ")])])])])]),t._v(" "),e("div",{staticClass:"w-full p-1"},[e("div",{staticClass:"py-7 px-8 bg-white bg-opacity-60 border border-[#EFC1B2] rounded-2xl shadow-10xl"},[e("div",{staticClass:"flex flex-wrap justify-between -m-2"},[e("div",{staticClass:"flex-1 p-2"},[e("h3",{staticClass:"text-md font-semibold leading-normal"},[t._v("Costos de envíos")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("El costo de envío dependerá de la dirección a donde quieras que te enviemos tu compra, está dividido por zonas.")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("Vas a poder ver el valor del mismo en el chekout colocando tu CP.")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 font-base"},[t._v("El costo del envío es a cargo del cliente. Si tenés alguna duda podés escribirnos por WhatsApp.")])])])])])]),t._v(" "),e("p",{staticClass:"text-gray-600 text-center font-medium"},[e("span",[t._v("¿Tenés alguna otra duda o consulta?")]),t._v(" "),e("a",{staticClass:"font-semibold text-[#EFC1B2] hover:text-[#DBAEA2]",attrs:{href:"https://api.whatsapp.com/send?phone=5492212260984&text=Hola, quiero saber acerca de",target:"blank"}},[t._v("Contactanos")])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:r(332).default,Footer:r(333).default})}}]);