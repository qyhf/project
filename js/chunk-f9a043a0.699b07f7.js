(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9a043a0"],{3711:function(t,s,e){"use strict";var o=e("89eb"),i=e.n(o);i.a},"3e01":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("readContent")],1)},i=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"all"},[e("transition",{attrs:{name:"show_top"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"top"},[e("div",{staticClass:"prev"},[e("span",{on:{click:t.prev}})]),e("div",{staticClass:"title"},[e("p",[t._v("第"+t._s(t.$store.state.books.read_id)+"话")])])])]),e("transition",{attrs:{name:"show_footer"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"footer"},[e("div",{ref:"jump",staticClass:"jump"},[e("span",{staticClass:"prev_chapter",on:{click:t.prev_chapter}}),e("span",{staticClass:"next_chapter",on:{click:t.next_chapter}})])])])],1),e("div",{staticClass:"scroll",on:{click:t.show}},t._l(t.$store.state.books.chapter[t.$store.state.books.read_id-1],(function(t,s){return e("img",{key:s,attrs:{src:t.src,alt:""}})})),0),e("p",{staticClass:"tip"},[t._v("本话已结束.......")])])},r=[],n=e("2b0e"),c=e("d399"),h=e("2241");n["a"].use(h["a"]),n["a"].use(c["a"]);var u={data:function(){return{isshow:!1,timer:null,read_id:1}},watch:{"$store.state.books.read_fina":function(t){1==t&&(Object(c["a"])("已经是最后一话了"),this.$store.commit("books/final"))},"$store.state.books.read_first":function(t){1==t&&(Object(c["a"])("已经是第一话了"),this.$store.commit("books/start"))}},methods:{show:function(){if(1==this.isshow)this.isshow=!1;else{this.isshow=!0,clearInterval(this.timer);var t=this;this.timer=setTimeout((function(){t.isshow=!1}),2e3)}},prev:function(){this.$store.commit("books/init_chapter"),this.$router.go(-1)},next_chapter:function(){var t=this;this.$store.state.user.user[this.$store.state.user.userID].coupons>=10?(this.$store.commit("books/next_chapter"),this.$store.commit("user/next")):h["a"].confirm({title:"提示",message:"您的余额不足，是否去充值"}).then((function(){t.$router.push({path:"/payment"})})).catch((function(){}))},prev_chapter:function(){this.$store.commit("books/prev_chapter"),this.$store.commit("user/prev")}},beforeDestroy:function(){this.$store.commit("user/init")}},l=u,p=(e("3711"),e("2877")),m=Object(p["a"])(l,a,r,!1,null,"7e677eef",null),v=m.exports,f={components:{readContent:v}},d=f,w=Object(p["a"])(d,o,i,!1,null,null,null);s["default"]=w.exports},"89eb":function(t,s,e){}}]);
//# sourceMappingURL=chunk-f9a043a0.699b07f7.js.map