(window.webpackJsonp=window.webpackJsonp||[]).push([[45,29],{367:function(t,e,r){"use strict";r.r(e);r(16),r(35);var n={name:"table-pedidos",props:{pedido:{type:Object,required:!0}},mounted:function(){},data:function(){return{}},methods:{},computed:{sumTotal:function(){var t=0;return this.pedido[0].forEach((function(e){t=parseFloat(e.total)+parseFloat(e.total)})),t},fechaPedido:function(){return new Date(this.pedido.createdAt).toLocaleDateString()}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"font-bold"},[t._v(" Fecha: "+t._s(t.fechaPedido))]),t._v(" "),e("table",{staticClass:"min-w-full leading-normal mx-4"},[t._m(0),t._v(" "),e("tbody",[t._l(t.pedido[0],(function(r,i){return e("tr",{key:i},[e("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("div",[e("p",{staticClass:"text-gray-900 whitespace-no-wrap"},[t._v("\n                                                "+t._s(r.nombre)+"\n                                                ")])])]),t._v(" "),e("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("div",[e("p",{staticClass:"text-gray-900 whitespace-no-wrap"},[t._v("\n                                                "+t._s(r.cantidad)+"\n                                                ")])])]),t._v(" "),e("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("p",{staticClass:"text-gray-900 whitespace-no-wrap"},[t._v("\n                                        $"+t._s(r.precio)+"\n                                    ")])]),t._v(" "),e("td",{staticClass:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},[e("p",{staticClass:"text-gray-900 whitespace-no-wrap"},[t._v("\n                                        "+t._s(r.total)+"\n                                    ")])])])})),t._v(" "),e("tr",[e("td",{staticClass:"text-right font-bold",attrs:{colspan:"3"}},[t._v("Total: "+t._s(t.sumTotal))])])],2)])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},[t._v("\n                                    Producto\n                                ")]),t._v(" "),e("th",{staticClass:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},[t._v("\n                                Cantidad\n                                ")]),t._v(" "),e("th",{staticClass:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},[t._v("\n                                Precio\n                                ")]),t._v(" "),e("th",{staticClass:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},[t._v("\n                                Subtotal\n                                    ")])])])}],!1,null,null,null);e.default=component.exports},405:function(t,e,r){"use strict";r.r(e);r(42),r(30),r(41),r(16),r(58),r(35),r(59);var n=r(23),o=r(2),c=(r(31),r(91)),d=r(48);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"PedidosView",components:{TablePedidos:r(367).default},data:function(){return{pedidos:[]}},props:{},mounted:function(){console.log(this.user),this.user?this.getPedidos():this.$router.push("/")},methods:{getPedidos:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user){e.next=6;break}return e.next=3,c.a.getPedidos(t.user.id);case 3:t.pedidos=e.sent,e.next=7;break;case 6:t.$router.push("/");case 7:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)("user",["user"]))},y=f,h=r(11),component=Object(h.a)(y,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",t._l(t.pedidos,(function(t,i){return e("TablePedidos",{key:i,attrs:{pedido:t}})})),1)])}),[function(){var t=this._self._c;return t("div",{},[t("h3",[this._v("Tus Pedidos:")])])}],!1,null,null,null);e.default=component.exports}}]);