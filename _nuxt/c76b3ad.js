(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{412:function(t,e,r){"use strict";r.r(e);r(41),r(16),r(61),r(42),r(30),r(58),r(35),r(59);var o=r(1),n=r(23),c=(r(357),r(31),r(91)),l=r(48),d=r(346);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"productos-list",components:{NavBar:r(332).default,Producto:d.default},props:{},mounted:function(){},data:function(){return{cantidad:1,products:[],categoria:"",subcategory:{},show:!1,order:"mayor_precio",filter:!1,scrollAmount:0,subcategories:[],filterSubcat:""}},methods:v(v({},Object(l.b)("cart",["toAddToCart"])),{},{agregarAlCarrito:function(){var t=v(v({},this.producto),{},{cantidad:this.cantidad});this.toAddToCart(t),this.$router.push("/"),this.cantidad=1},sumar:function(){this.cantidad++},restar:function(){this.cantidad--,this.cantidad<0&&(this.cantidad=1)},closeDetalle:function(){this.$router.push("/")},getSubcategories:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.getSubcategories(t);case 2:e.subcategories=r.sent,e.categoria=e.$route.params.category,console.log(t);case 5:case"end":return r.stop()}}),r)})))()},getProductsCategory:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.getProductsCategory(t);case 2:e.products=r.sent,console.log(t);case 4:case"end":return r.stop()}}),r)})))()},getProducts:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.getProductos();case 2:e.products=r.sent,console.log(t);case 4:case"end":return r.stop()}}),r)})))()},scroll_left:function(){document.querySelector(".wrapper-box").scrollLeft-=300},scroll_right:function(){document.querySelector(".wrapper-box").scrollLeft+=300},scrollLeft:function(){this.$refs.menu.scrollTo({left:this.scrollAmount+=200,behavior:"smooth"})},scrollRight:function(){this.$refs.menu.scrollTo({left:this.scrollAmount-=200,behavior:"smooth"})},filterAndSortItems:function(){var t=this.filterItems();return this.sortItems(t)},filterItems:function(){if(!this.subcategory.id)return this.products;var t=this.subcategory.id;return this.products.filter((function(e){return e.subcategoria==t}))},sortItems:function(t){return""===this.order?t:"asc"===this.order?t.sort((function(a,b){return a.articulo<b.articulo?-1:a.articulo>b.articulo?1:0})):"desc"===this.order?t.sort((function(a,b){return a.articulo>b.articulo?-1:a.articulo<b.articulo?1:0})):"mas_vendidos"===this.order||"menor_precio"===this.order?t.sort((function(a,b){return a.precio<b.precio?-1:a.precio>b.precio?1:0})):"mayor_precio"===this.order?t.sort((function(a,b){return a.precio>b.precio?-1:a.precio<b.precio?1:0})):"nuevos"===this.order?t.sort((function(a,b){return a.precio<b.precio?-1:a.precio>b.precio?1:0})):void 0}}),computed:v(v({},Object(l.c)("cart",["getCantProd"])),{},{categories:function(){return this.$store.getters.categories},getCategory:function(){var t=this;if(this.categories.length>0){var e=this.categories.filter((function(e){var r=t.categoria;return e.slag===r}));return console.log(e[0]),e[0]}return!1},filteredAndSortedItems:function(){return this.filterAndSortItems()},listProducts:function(){return""===this.order?this.productos:"asc"===this.order?this.products.sort((function(a,b){return a.articulo<b.articulo?-1:a.articulo>b.articulo?1:0})):"desc"===this.order?this.products.sort((function(a,b){return a.articulo>b.articulo?-1:a.articulo<b.articulo?1:0})):"mas_vendidos"===this.order||"menor_precio"===this.order?this.products.sort((function(a,b){return a.precio<b.precio?-1:a.precio>b.precio?1:0})):"mayor_precio"===this.order?this.products.sort((function(a,b){return a.precio>b.precio?-1:a.precio<b.precio?1:0})):"nuevos"===this.order?this.products.sort((function(a,b){return a.precio<b.precio?-1:a.precio>b.precio?1:0})):void 0}}),created:function(){this.$route.params.category&&(this.getSubcategories(this.$route.params.category),this.getProductsCategory(this.$route.params.category),console.log(this.$route.params.category))}},m=r(11),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),t._v(" "),e("div",{staticClass:"bg-gray-50"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"relative"},[e("nav",{ref:"menu",staticClass:"bg-white wrapper-box flex items-center text-gray-100 border-y border-gray-300 px-4 md:overflow-x-hidden overflow-y-hidden overflow-x-auto no-scrollbar shadow-lg"},[e("ul",{staticClass:"flex-shrink-0 p-2 space-x-4 space-y-2 text-center"},t._l(t.subcategories,(function(r,i){return e("li",{key:i,staticClass:"flex-shrink-0 inline-flex items-center px-3 py-1 text-sm cursor-pointer rounded-lg",class:t.subcategory.slag===r.slag?"bg-red-400/40":"",on:{click:function(e){t.subcategory=r}}},[e("div",{staticClass:"relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center",staticStyle:{"min-height":"90px"}},[e("div",{staticClass:"w-14 h-14 bg-white rounded-lg"},[e("img",{staticClass:"w-full h-full rounded-2xl",attrs:{src:t.$config.url_img+r.imagen,alt:r.nombre_subcat}})]),t._v(" "),e("h2",{staticClass:"mt-2 text-gray-600 text-xs font-medium line-clamp-1"},[t._v("\n                          "+t._s(r.nombre_subcat)+"\n                          ")])])])})),0),t._v(" "),e("a",{staticClass:"left-arrow arrow z-10 items-center cursor-pointer bg-gray-600/40 hover:bg-gray-200/30 md:flex hidden",on:{click:t.scrollRight}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"white"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}})])]),t._v(" "),e("a",{staticClass:"right-arrow arrow z-20 items-center cursor-pointer bg-gray-600/40 hover:bg-gray-200/30 md:flex hidden",on:{click:t.scrollLeft}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"white"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}})])])])]),t._v(" "),e("section",{staticClass:"relative bg-gray-50"},[e("div",{staticClass:"py-6 border-t border-gray-200"},[e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex items-center"},[e("NuxtLink",{staticClass:"inline-block text-black",attrs:{to:"/"}},[e("svg",{attrs:{width:"20",height:"20",viewbox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7.51699 2.36667L3.02533 5.86667C2.27533 6.45 1.66699 7.69167 1.66699 8.63334V14.8083C1.66699 16.7417 3.24199 18.325 5.17533 18.325H14.8253C16.7587 18.325 18.3337 16.7417 18.3337 14.8167V8.75C18.3337 7.74167 17.6587 6.45 16.8337 5.875L11.6837 2.26667C10.517 1.45 8.64199 1.49167 7.51699 2.36667Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M10 14.9917V12.4917",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("span",{staticClass:"inline-block mx-4"},[e("svg",{attrs:{width:"7",height:"12",viewbox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.83341 4.23333L2.00841 0.408327C1.85228 0.253118 1.64107 0.166 1.42091 0.166C1.20076 0.166 0.989548 0.253118 0.833413 0.408327C0.755306 0.485797 0.693311 0.577964 0.651003 0.679513C0.608696 0.781063 0.586914 0.889984 0.586914 0.999994C0.586914 1.11 0.608696 1.21893 0.651003 1.32047C0.693311 1.42202 0.755306 1.51419 0.833413 1.59166L4.66675 5.40833C4.74485 5.4858 4.80685 5.57796 4.84916 5.67951C4.89146 5.78106 4.91324 5.88998 4.91324 5.99999C4.91324 6.11 4.89146 6.21893 4.84916 6.32048C4.80685 6.42202 4.74485 6.51419 4.66675 6.59166L0.833413 10.4083C0.676493 10.5641 0.587897 10.7759 0.587116 10.997C0.586335 11.2182 0.673432 11.4306 0.829247 11.5875C0.985061 11.7444 1.19683 11.833 1.41797 11.8338C1.6391 11.8346 1.85149 11.7475 2.00841 11.5917L5.83341 7.76666C6.30158 7.29791 6.56455 6.6625 6.56455 5.99999C6.56455 5.33749 6.30158 4.70208 5.83341 4.23333Z",fill:"black"}})])]),t._v(" "),t.getCategory?e("NuxtLink",{staticClass:"inline-block text-black",attrs:{to:"/"+t.getCategory.slag}},[t._v(t._s(t.getCategory.nombre))]):t._e(),t._v(" "),t.subcategory.slag?e("span",{staticClass:"inline-block mx-4"},[e("svg",{attrs:{width:"7",height:"12",viewbox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.83341 4.23333L2.00841 0.408327C1.85228 0.253118 1.64107 0.166 1.42091 0.166C1.20076 0.166 0.989548 0.253118 0.833413 0.408327C0.755306 0.485797 0.693311 0.577964 0.651003 0.679513C0.608696 0.781063 0.586914 0.889984 0.586914 0.999994C0.586914 1.11 0.608696 1.21893 0.651003 1.32047C0.693311 1.42202 0.755306 1.51419 0.833413 1.59166L4.66675 5.40833C4.74485 5.4858 4.80685 5.57796 4.84916 5.67951C4.89146 5.78106 4.91324 5.88998 4.91324 5.99999C4.91324 6.11 4.89146 6.21893 4.84916 6.32048C4.80685 6.42202 4.74485 6.51419 4.66675 6.59166L0.833413 10.4083C0.676493 10.5641 0.587897 10.7759 0.587116 10.997C0.586335 11.2182 0.673432 11.4306 0.829247 11.5875C0.985061 11.7444 1.19683 11.833 1.41797 11.8338C1.6391 11.8346 1.85149 11.7475 2.00841 11.5917L5.83341 7.76666C6.30158 7.29791 6.56455 6.6625 6.56455 5.99999C6.56455 5.33749 6.30158 4.70208 5.83341 4.23333Z",fill:"black"}})])]):t._e(),t._v(" "),t.subcategory.slag?e("a",{staticClass:"inline-block text-black",attrs:{href:"#"}},[t._v(t._s(t.subcategory.nombre_subcat))]):t._e()],1)])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.filter,expression:"filter"}],staticClass:"relative z-40 lg:hidden",attrs:{role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-25"}),t._v(" "),e("div",{staticClass:"fixed inset-0 z-40 flex"},[e("div",{staticClass:"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"},[e("div",{staticClass:"flex items-center justify-between px-4"},[e("h2",{staticClass:"text-lg font-medium text-gray-900"},[t._v("Filtros")]),t._v(" "),e("button",{staticClass:"-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",attrs:{type:"button"},on:{click:function(e){t.filter=!1}}},[e("span",{staticClass:"sr-only"},[t._v("Close menu")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),e("form",{staticClass:"mt-4 border-t border-gray-200"},[e("h3",{staticClass:"sr-only"},[t._v("Categorías")]),t._v(" "),e("ul",{staticClass:"px-2 py-3 font-medium text-gray-900",attrs:{role:"list"}},[t._m(0),t._v(" "),t._l(t.categories,(function(r,i){return e("li",{key:i},[e("NuxtLink",{staticClass:"block px-2 py-3",class:t.categoria===r.slag?"font-bold text-[#FF4D50]":"",attrs:{to:"/"+r.slag}},[t._v(t._s(r.nombre))])],1)}))],2)])])])]),t._v(" "),e("main",{staticClass:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},[e("div",{staticClass:"flex md:flex-no-wrap flex-wrap items-baseline justify-between border-b border-gray-200 md:pt-10 pt-6 pb-4 space-y-4"},[e("div",[e("h1",{staticClass:"md:text-2xl text-xl font-bold tracking-tight text-gray-900"},[t._v(t._s(t.filteredAndSortedItems.length)+" Productos encontrados ")]),t._v(" "),t.subcategory.id?e("div",{staticClass:"hidden lg:block float-left"},[e("a",{staticClass:"inline-flex px-2 py-1 text-xs text-white rounded-lg bg-[#DC9040] float-right mr-4 cursor-pointer"},[t._v(t._s(t.subcategory.nombre_subcat)+"\n                  "),e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},on:{click:function(e){t.subcategory=""}}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"relative inline-block text-left float-right"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"order"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.order=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"asc"}},[t._v("A - Z")]),t._v(" "),e("option",{attrs:{value:"desc"}},[t._v(" Z - A")]),t._v(" "),e("option",{attrs:{value:"menor_precio"}},[t._v("Menor Precio")]),t._v(" "),e("option",{attrs:{value:"mayor_precio"}},[t._v("Mayor Precio")]),t._v(" "),e("option",{attrs:{value:"mas_vendidos"}},[t._v("Más vendidos")]),t._v(" "),e("option",{attrs:{value:"nuevos"}},[t._v("Nuevos")])])]),t._v(" "),e("button",{staticClass:"-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden float-right",attrs:{type:"button"},on:{click:function(e){t.filter=!0}}},[e("span",{staticClass:"sr-only"},[t._v("Filters")]),t._v(" "),e("svg",{staticClass:"h-5 w-5",attrs:{"aria-hidden":"true",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z","clip-rule":"evenodd"}})])])])]),t._v(" "),e("section",{staticClass:"pt-6 pb-24",attrs:{"aria-labelledby":"products-heading"}},[e("div",{staticClass:"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"},[e("form",{staticClass:"hidden lg:block"},[e("h3",{staticClass:"font-medium text-gray-900 pb-2 text-lg"},[t._v("Categorías")]),t._v(" "),e("ul",{staticClass:"space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900",attrs:{role:"list"}},t._l(t.categories,(function(r,i){return e("li",{key:i},[e("NuxtLink",{staticClass:"font-medium text-gray-900 block px-2 text-sm",class:t.categoria===r.slag?"font-bold text-[#EFC1B2]":"",attrs:{to:"/"+r.slag}},[t._v(t._s(r.nombre))])],1)})),0)]),t._v(" "),e("div",{staticClass:"lg:col-span-3"},[e("div",{staticClass:"grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 px-4"},t._l(t.filteredAndSortedItems,(function(t,i){return e("Producto",{key:i,attrs:{producto:t}})})),1)])])])])])]),t._v(" "),e("Footer")],1)}),[function(){var t=this._self._c;return t("li",[t("a",{staticClass:"block px-2 py-3",attrs:{href:"#"}},[this._v("Todas")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:r(332).default,Button:r(144).default,Footer:r(333).default})}}]);