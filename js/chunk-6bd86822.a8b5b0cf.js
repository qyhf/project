(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bd86822"],{"19fe":function(t,s,i){},"43c4":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("historyTop"),i("historyContent")],1)},n=[],e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"blank"}),i("van-nav-bar",[i("div",{attrs:{slot:"left"},slot:"left"},[i("span",{on:{click:t.prev}})]),i("div",{attrs:{slot:"title"},slot:"title"},[i("h1",[t._v("阅读历史")])]),i("van-icon",{attrs:{slot:"right"},slot:"right"},[i("i",{on:{click:t.show}}),i("b",{on:{click:t.search}})])],1),i("transition",{attrs:{name:"top"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"application"},[i("ul",[i("li",[i("div",{staticClass:"sort",on:{click:t.sort}},[i("span"),i("p",[t._v("分类")])])]),i("li",[i("div",{staticClass:"index",on:{click:t.index}},[i("span"),i("p",[t._v("首页")])])]),i("li",[i("div",{staticClass:"rank",on:{click:t.rank}},[i("span"),i("p",[t._v("排行榜")])])])]),i("span",{staticClass:"button",on:{click:t.my}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"mask",on:{click:t.show}})],1)},a=[],r={data:function(){return{isshow:!1}},methods:{show:function(){this.isshow?this.isshow=!1:this.isshow=!0},sort:function(){this.$router.push({path:"/sort"})},search:function(){this.$router.push({path:"/search"})},rank:function(){this.$router.push({path:"/rank"})},index:function(){this.$router.push({path:"/index"})},my:function(){1==this.$store.state.user.islogin?this.$router.push({path:"/my"}):this.$router.push({path:"/login"})},prev:function(){this.$router.go(-1)}}},c=r,l=(i("66f0"),i("2877")),h=Object(l["a"])(c,e,a,!1,null,"5fcb76fe",null),u=h.exports,v=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h1",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.books.ishistory,expression:"$store.state.books.ishistory"}]},[t._v("暂无阅读历史")]),i("div",{staticClass:"content"},t._l(t.$store.state.books.history,(function(s,o){return i("div",{key:"collect"+o,staticClass:"collect"},[i("div",{staticClass:"pic",on:{click:function(i){return t.$store.commit("books/details",{item:s})}}},[i("img",{attrs:{src:s.src,alt:""}})]),i("div",{staticClass:"word",on:{click:function(i){return t.$store.commit("books/details",{item:s})}}},[i("strong",[t._v(t._s(s.name))]),i("small",[t._v(t._s(s.num))]),i("small",[t._v(t._s(s.sort))]),i("small",[t._v(t._s(s.details))])])])})),0)])},p=[],d={data:function(){return{checked:!1}},watch:{"$store.state.books.isdetails":function(t){1==t&&this.$router.push({path:"/details"})}},beforeDestroy:function(){this.$store.commit("books/jump_details")}},f=d,m=(i("6cd7"),Object(l["a"])(f,v,p,!1,null,"1c6f7c87",null)),k=m.exports,w={components:{historyTop:u,historyContent:k}},b=w,_=Object(l["a"])(b,o,n,!1,null,null,null);s["default"]=_.exports},"66f0":function(t,s,i){"use strict";var o=i("f8b6"),n=i.n(o);n.a},"6cd7":function(t,s,i){"use strict";var o=i("19fe"),n=i.n(o);n.a},f8b6:function(t,s,i){}}]);
//# sourceMappingURL=chunk-6bd86822.a8b5b0cf.js.map