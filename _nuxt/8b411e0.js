(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{329:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var o=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=t*e,n=o.toLocaleString("es-ar",{style:"currency",currency:"ARS",minimumFractionDigits:2});return n+" "+r.toUpperCase()}},346:function(t,r,e){"use strict";e.r(r);e(42),e(30),e(41),e(16),e(58),e(35),e(59);var o=e(23),n=e(48),c=e(329);function l(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var f={name:"product-component",props:{producto:{type:Object,required:!0}},mounted:function(){},data:function(){return{cantidad:1}},methods:d(d({formatPrice:c.a},Object(n.b)("cart",["addItem"])),{},{agregarAlCarrito:function(){var t=d(d({},this.producto),{},{cantidad:this.cantidad});this.addItem(t),this.cantidad=1},sumar:function(){this.cantidad++},restar:function(){this.cantidad--,this.cantidad<=0&&(this.cantidad=1)}}),computed:{currencyCode:function(){return this.$store.getters["cart/cartCurrencyCode"]}}},m=e(11),component=Object(m.a)(f,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"group relative block overflow-hidden"},[r("NuxtLink",{attrs:{to:"/productos/"+t.producto.slug}},[r("div",{staticClass:"group flex justify-center items-center relative cursor-pointer text-4xl"},[r("img",{staticClass:"w-full rounded-lg object-cover",attrs:{src:t.$config.url_img+t.producto.imagen,alt:t.producto.articulo}}),t._v(" "),r("div",{staticClass:"absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-gray-200 opacity-40 group-hover:animate-shine"})])]),t._v(" "),r("div",{staticClass:"relative w-full border-t border-gray-100 bg-white p-4"},[r("NuxtLink",{staticClass:"block mb-2",attrs:{to:"/productos/"+t.producto.slug}},[r("h3",{staticClass:"mt-4 text-md font-medium text-gray-800"},[t._v(t._s(t.producto.articulo))])]),t._v(" "),r("div",{staticClass:"flex space-x-2 justify-between"})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this._self._c;return t("form",{staticClass:"mt-4"},[t("button",{staticClass:"block w-full bg-[#FF3D3F] text-white px-4 py-2 text-sm font-based hover:bg-[#F92833] rounded-md",attrs:{type:"button"}},[t("i",{staticClass:"fab fa-whatsapp my-float"}),this._v("\n\n      Consultar\n      ")])])}],!1,null,"73510fba",null);r.default=component.exports;installComponents(component,{Button:e(144).default})}}]);