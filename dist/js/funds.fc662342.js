(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["funds"],{"27b8":function(t,s,a){},"49d7":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"funds"},[a("div",{staticClass:"top"},[t._v("资金")]),a("div",{staticClass:"account-info"},[t._m(0),a("div",{staticClass:"btn-list"},[a("router-link",{staticClass:"btn",attrs:{tag:"span",to:"/balanceOut"}},[t._v("转出")]),a("router-link",{staticClass:"btn status",attrs:{tag:"span",to:"/balanceEnter"}},[t._v("转入")])],1)]),a("p",{staticClass:"deteils-title"},[t._v("\n        交易记录\n        "),a("span",{staticClass:"btn-list"},t._l(t.listBtn,function(s,n){return a("span",{key:n,staticClass:"btn",class:s.status?"status":"",on:{click:function(s){return t.handleListBtnClick(n)}}},[t._v(t._s(s.title))])}),0)]),a("ul",{staticClass:"detail-list"},t._l(t.list,function(s,n){return a("li",{key:n,staticClass:"item panel-item"},[a("p",{staticClass:"title"},[a("span",{staticClass:"left"},[a("span",{staticClass:"flag ",class:1===s.status?"status":""},[t._v(t._s(1===s.status?"转入":"转出"))]),t._v("\n                    2019-06-12 12:12\n                ")]),a("span",{staticClass:"right",class:1===s.flag?"success":2===s.flag?"wait":"error"},[t._v(t._s(s.flagText))])]),1===s.status?a("div",{staticClass:"info"},[t._m(1,!0),t._m(2,!0),t._m(3,!0)]):a("div",{staticClass:"info"},[t._m(4,!0),t._m(5,!0),t._m(6,!0),t._m(7,!0)])])}),0)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("span",[t._v("账户余额(元)")]),a("p",{staticClass:"count"},[t._v("12900")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"row"},[a("span",{staticClass:"text"},[t._v("转账时间:")]),t._v(" 2018-05-18")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"row"},[a("span",{staticClass:"text"},[t._v("存款人姓名:")]),t._v(" 张三")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"row"},[a("span",{staticClass:"text"},[t._v("存款金额:")]),t._v(" ￥6000000")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"row"},[a("span",{staticClass:"text"},[t._v("收款银行卡:")]),t._v(" **** **** **** 2222")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"row"},[a("span",{staticClass:"text"},[t._v("开户行:")]),t._v(" 招商银行")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"row"},[a("span",{staticClass:"text"},[t._v("收款人姓名:")]),t._v(" 张三")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"row"},[a("span",{staticClass:"text"},[t._v("捐款金额:")]),t._v(" ￥6000000")])}],i=(a("ac6a"),{name:"funds",data:function(){return{list:[{flag:1,flagText:"已完成",status:1},{flag:2,flagText:"审核中",status:0},{flag:3,flagText:"审核失败",status:1}],listBtn:[{title:"全部",status:!0},{title:"转入",status:!1},{title:"转出",status:!1}]}},methods:{handleListBtnClick:function(t){this.listBtn.forEach(function(s,a){s.status=t===a})}}}),l=i,c=(a("790e"),a("2877")),r=Object(c["a"])(l,n,e,!1,null,"bbb3e148",null);s["default"]=r.exports},"790e":function(t,s,a){"use strict";var n=a("27b8"),e=a.n(n);e.a}}]);
//# sourceMappingURL=funds.fc662342.js.map