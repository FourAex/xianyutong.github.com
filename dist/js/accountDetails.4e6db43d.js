(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["accountDetails"],{6145:function(t,s,a){},b61b:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"account-details"},[a("div",{staticClass:"top"},[t._v("闲鱼通")]),a("div",{staticClass:"account-info"},[a("p",{staticClass:"title"},[t._v("账户余额(元)")]),a("p",{staticClass:"account-number"},[t._v(t._s(t.accountBalance.toLocaleString()))]),a("div",{staticClass:"info"},[a("div",{staticClass:"panel"},[a("p",{staticClass:"text"},[t._v("今日总收益(元)")]),a("p",{staticClass:"count"},[t._v(t._s(t.accountBalance.toLocaleString()))])]),a("div",{staticClass:"panel"},[a("p",{staticClass:"text"},[t._v("累计总收益(元)")]),a("p",{staticClass:"count"},[t._v(t._s(t.accountBalance.toLocaleString()))])])])]),a("p",{staticClass:"deteils-title"},[t._v("收益明细")]),a("ul",{staticClass:"detail-list"},[t._l(t.list,function(s,i){return a("li",{key:i,staticClass:"item panel-item"},[a("p",{staticClass:"title"},[a("span",{staticClass:"left"},[t._v("支付宝账号: 17384057896")]),a("img",{staticClass:"icon",attrs:{src:s.img,alt:""},on:{click:function(s){return t.changeStatus(i)}}})]),a("div",{staticClass:"info clearfloat"},[a("div",{staticClass:"panel"},[a("p",{staticClass:"text"},[t._v("今日收益(元)")]),a("p",{staticClass:"count"},[t._v(t._s(t.accountBalance.toLocaleString()))])]),a("div",{staticClass:"panel"},[a("p",{staticClass:"text"},[t._v("累计收益(元)")]),a("p",{staticClass:"count"},[t._v(t._s(t.accountBalance.toLocaleString()))])])]),a("div",{staticClass:"info clearfloat"},[a("div",{staticClass:"panel"},[a("p",{staticClass:"text"},[t._v("今日收款(元)")]),a("p",{staticClass:"count"},[t._v(t._s(t.accountBalance.toLocaleString()))])]),a("div",{staticClass:"panel"},[a("p",{staticClass:"text"},[t._v("累计收款(元)")]),a("p",{staticClass:"count"},[t._v(t._s(t.accountBalance.toLocaleString()))])])])])}),a("li",{staticClass:"add panel-item"},[a("div",{staticClass:"row"},[a("span",{staticClass:"pull-left"},[t._v("最多可绑定5个支付宝")]),a("span",{staticClass:"pull-right",on:{click:t.goToBinding}},[t._v("继续绑定")])])]),a("li",{staticClass:"add panel-item"},[a("div",{staticClass:"row"},[a("span",{staticClass:"pull-left"},[t._v("您还未绑定支付宝")]),a("span",{staticClass:"pull-right",on:{click:t.goToBinding}},[t._v("马上绑定")])])])],2)])},c=[],l=a("f63d"),n=a("effa"),e={name:"accountDetails",data:function(){return{accountBalance:129e4,list:[{img:l,status:!0},{img:l,status:!0}]}},methods:{changeStatus:function(t){var s=this.list[t],a=s.status;s.status=!a,s.img=a?n:l},goToBinding:function(){this.$router.push("/binding")}}},o=e,u=(a("cc30"),a("2877")),p=Object(u["a"])(o,i,c,!1,null,"55284778",null);s["default"]=p.exports},cc30:function(t,s,a){"use strict";var i=a("6145"),c=a.n(i);c.a},effa:function(t,s,a){t.exports=a.p+"img/sy_guan@3x.4dcab149.png"},f63d:function(t,s,a){t.exports=a.p+"img/sy_kai@3x.84bb1523.png"}}]);
//# sourceMappingURL=accountDetails.4e6db43d.js.map