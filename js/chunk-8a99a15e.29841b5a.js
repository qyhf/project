(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a99a15e"],{"47d9":function(t,s,e){},"58cc":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("detailsTop"),e("detailsCover"),e("detailsContent"),e("detailsFooter")],1)},o=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"blank"}),e("van-nav-bar",[e("div",{attrs:{slot:"left"},slot:"left"},[e("span",{on:{click:t.prev}})]),e("div",{attrs:{slot:"title"},slot:"title"},[e("h1",[t._v(t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.name))])]),e("van-icon",{attrs:{slot:"right"},slot:"right"},[e("i",{on:{click:t.show}}),e("b",{on:{click:t.search}})])],1),e("transition",{attrs:{name:"top"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"application"},[e("ul",[e("li",[e("div",{staticClass:"sort",on:{click:t.sort}},[e("span"),e("p",[t._v("分类")])])]),e("li",[e("div",{staticClass:"index",on:{click:t.index}},[e("span"),e("p",[t._v("首页")])])]),e("li",[e("div",{staticClass:"rank",on:{click:t.rank}},[e("span"),e("p",[t._v("排行榜")])])])]),e("span",{staticClass:"button",on:{click:t.my}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"mask",on:{click:t.show}})],1)},r=[],n={data:function(){return{isshow:!1}},methods:{show:function(){this.isshow?this.isshow=!1:this.isshow=!0},sort:function(){this.$router.push({path:"/sort"})},search:function(){this.$router.push({path:"/search"})},rank:function(){this.$router.push({path:"/rank"})},index:function(){this.$router.push({path:"/index"})},my:function(){1==this.$store.state.user.islogin?this.$router.push({path:"/my"}):this.$router.push({path:"/login"})},prev:function(){this.$store.commit("books/clear_details"),this.$router.go(-1)}}},c=n,l=(e("b7c5"),e("2877")),d=Object(l["a"])(c,a,r,!1,null,"310e685b",null),h=d.exports,u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cover"},[e("svg",[e("defs",[e("filter",{attrs:{id:"svg_vague",x:"0",y:"0"}},[e("feImage",{attrs:{"xlink:href":t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.src,x:"0",y:"0",preserveAspectRatio:"xMidYMid slice"}}),e("feGaussianBlur",{attrs:{stdDeviation:"30"}})],1)]),e("rect",{attrs:{x:"0",y:"0",filter:"url(#svg_vague)"}})]),e("div",{staticClass:"message"},[e("div",{staticClass:"pic"},[e("img",{attrs:{src:t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.src,alt:""}})]),e("div",{staticClass:"describe"},[e("div",{staticClass:"describe-name"},[e("h1",[t._v(t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.name))]),e("span",[t._v(t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.score))])]),e("p",[t._v("标签："+t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.sort))]),e("p",[t._v("作者："+t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.writer))]),e("p",[t._v("人气："),e("span",[t._v(t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.popular))])]),e("p",[t._v("月票："),e("span",[t._v(t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.ticket))])])])])])},v=[],p={},b=p,_=(e("6bf9"),Object(l["a"])(b,u,v,!1,null,"67610333",null)),$=_.exports,k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dateils"},[e("van-tabs",[e("van-tab",{attrs:{title:"详情"}},[e("div",{staticClass:"content"},[e("span"),e("p",[t._v(t._s(t.$store.state.books.details_view[t.$store.state.books.details_id].obj.item.details))])])]),e("van-tab",{attrs:{title:"目录"}},[e("div",{staticClass:"catalog"},[e("ul",[e("li",{on:{click:t.read}},[t._v("1")]),e("li",{on:{click:t.second}},[t._v("2 "),e("span",[t._v("(付费)")])]),e("li",{on:{click:t.third}},[t._v("3 "),e("span",[t._v("(付费)")])])])])])],1)],1)},m=[],f=e("2b0e"),w=e("2241");f["a"].use(w["a"]);var g={watch:{"$store.state.books.read_id":function(){this.$router.push({path:"/read"})}},methods:{read:function(){1==this.$store.state.user.islogin?this.$router.push({path:"/read"}):this.$router.push({path:"/login"})},second:function(){var t=this;console.log(this.$store.state.books.details_view[this.$store.state.books.details_id].obj.item.second),1==this.$store.state.user.islogin?0==this.$store.state.books.details_view[this.$store.state.books.details_id].obj.item.second?this.$store.state.user.user[this.$store.state.user.userID].coupons>=10?(this.$store.commit("books/seconds_chapter"),this.$store.commit("user/second_payment")):w["a"].confirm({title:"提示",message:"您的余额不足，是否去充值"}).then((function(){t.$router.push({path:"/payment"})})).catch((function(){w["a"].close()})):this.$store.commit("books/seconds_chapter"):this.$router.push({path:"/login"})},third:function(){var t=this;1==this.$store.state.user.islogin?0==this.$store.state.books.details_view[this.$store.state.books.details_id].obj.item.third?this.$store.state.user.user[this.$store.state.user.userID].coupons>=10?(this.$store.commit("books/third_chapter"),this.$store.commit("user/third_payment")):w["a"].confirm({title:"提示",message:"您的余额不足，是否去充值"}).then((function(){t.$router.push({path:"/payment"})})).catch((function(){w["a"].close()})):this.$store.commit("books/third_chapter"):this.$router.push({path:"/login"})}}},C=g,j=(e("c792"),Object(l["a"])(C,k,m,!1,null,"7ce48683",null)),x=j.exports,y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"blank"}),e("div",{staticClass:"footer"},[e("div",{staticClass:"bookroom",on:{click:t.bookroom}},[e("span"),e("p",[t._v("前往书库")])]),e("div",{staticClass:"collection",on:{click:t.collection}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.books.details_view[t.$store.state.books.details_id].iscollection,expression:"$store.state.books.details_view[$store.state.books.details_id].iscollection"}]},[t._v("收藏")]),e("p",{staticClass:"active"},[t._v("已收藏")])]),e("div",{staticClass:"read",on:{click:t.read}},[e("span",[t._v("开始阅读")])])])])},O=[],E=e("d399");f["a"].use(E["a"]);var D={data:function(){return{}},methods:{collection:function(){1==this.$store.state.user.islogin?1==this.$store.state.books.details_view[this.$store.state.books.details_id].iscollection?(Object(E["a"])("漫画已收藏"),this.$store.commit("books/isadd")):(this.$store.commit("books/isadd"),Object(E["a"])("漫画已取消收藏")):this.$router.push({path:"/login"})},bookroom:function(){this.$router.push({path:"/index"})},read:function(){1==this.$store.state.user.islogin?(this.$store.commit("books/read"),this.$router.push({path:"/read"})):this.$router.push({path:"/login"})}}},I=D,N=(e("8af7"),Object(l["a"])(I,y,O,!1,null,"4cc22783",null)),F=N.exports,J={components:{detailsTop:h,detailsCover:$,detailsContent:x,detailsFooter:F}},M=J,T=Object(l["a"])(M,i,o,!1,null,null,null);s["default"]=T.exports},"6bf9":function(t,s,e){"use strict";var i=e("72d9"),o=e.n(i);o.a},"72ad":function(t,s,e){},"72d9":function(t,s,e){},"8af7":function(t,s,e){"use strict";var i=e("aa8a"),o=e.n(i);o.a},aa8a:function(t,s,e){},b7c5:function(t,s,e){"use strict";var i=e("47d9"),o=e.n(i);o.a},c792:function(t,s,e){"use strict";var i=e("72ad"),o=e.n(i);o.a}}]);
//# sourceMappingURL=chunk-8a99a15e.29841b5a.js.map