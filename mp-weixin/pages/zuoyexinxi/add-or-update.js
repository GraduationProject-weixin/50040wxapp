(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zuoyexinxi/add-or-update"],{"26d1":function(e,t,n){"use strict";(function(e){n("91a2"),n("921b");i(n("66fd"));var t=i(n("7a11"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"37c5":function(e,t,n){"use strict";n.r(t);var i=n("750c"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},4551:function(e,t,n){},"52e5":function(e,t,n){"use strict";var i=n("4551"),r=n.n(i);r.a},"750c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(i,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){u(a,i,r,o,s,"next",e)}function s(e){u(a,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("828f"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{zuoyebianhao:"",zuoyetimu:"",zuoyeleixing:"",tupian:"",banji:"",zuoyeneirong:"",shijian:"",xuehao:"",xueshengxingming:"",thumbsupnum:"",crazilynum:""},zuoyeleixingOptions:[],zuoyeleixingIndex:0,user:{},ro:{zuoyebianhao:!1,zuoyetimu:!1,zuoyeleixing:!1,tupian:!1,banji:!1,zuoyeneirong:!1,shijian:!1,xuehao:!1,xueshengxingming:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=a(i.default.mark((function t(n){var r,u,a,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:return u=t.sent,this.user=u.data,this.ruleForm.banji=this.user.banji,this.ruleForm.xuehao=this.user.xuehao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,t.next=10,this.$api.option("zuoyeleixing","zuoyeleixing",{});case 10:if(u=t.sent,this.zuoyeleixingOptions=u.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=20;break}return this.ruleForm.id=n.id,t.next=18,this.$api.info("zuoyexinxi",this.ruleForm.id);case 18:u=t.sent,this.ruleForm=u.data;case 20:if(!n.cross){t.next=71;break}a=e.getStorageSync("crossObj"),t.t0=i.default.keys(a);case 23:if((t.t1=t.t0()).done){t.next=71;break}if(o=t.t1.value,"zuoyebianhao"!=o){t.next=29;break}return this.ruleForm.zuoyebianhao=a[o],this.ro.zuoyebianhao=!0,t.abrupt("continue",23);case 29:if("zuoyetimu"!=o){t.next=33;break}return this.ruleForm.zuoyetimu=a[o],this.ro.zuoyetimu=!0,t.abrupt("continue",23);case 33:if("zuoyeleixing"!=o){t.next=37;break}return this.ruleForm.zuoyeleixing=a[o],this.ro.zuoyeleixing=!0,t.abrupt("continue",23);case 37:if("tupian"!=o){t.next=41;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,t.abrupt("continue",23);case 41:if("banji"!=o){t.next=45;break}return this.ruleForm.banji=a[o],this.ro.banji=!0,t.abrupt("continue",23);case 45:if("zuoyeneirong"!=o){t.next=49;break}return this.ruleForm.zuoyeneirong=a[o],this.ro.zuoyeneirong=!0,t.abrupt("continue",23);case 49:if("shijian"!=o){t.next=53;break}return this.ruleForm.shijian=a[o],this.ro.shijian=!0,t.abrupt("continue",23);case 53:if("xuehao"!=o){t.next=57;break}return this.ruleForm.xuehao=a[o],this.ro.xuehao=!0,t.abrupt("continue",23);case 57:if("xueshengxingming"!=o){t.next=61;break}return this.ruleForm.xueshengxingming=a[o],this.ro.xueshengxingming=!0,t.abrupt("continue",23);case 61:if("thumbsupnum"!=o){t.next=65;break}return this.ruleForm.thumbsupnum=a[o],this.ro.thumbsupnum=!0,t.abrupt("continue",23);case 65:if("crazilynum"!=o){t.next=69;break}return this.ruleForm.crazilynum=a[o],this.ro.crazilynum=!0,t.abrupt("continue",23);case 69:t.next=23;break;case 71:this.styleChange();case 72:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shijianChange:function(e){this.ruleForm.shijian=e.target.value,this.$forceUpdate()},zuoyeleixingChange:function(e){this.zuoyeleixingIndex=e.target.value,this.ruleForm.zuoyeleixing=this.zuoyeleixingOptions[this.zuoyeleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zuoyebianhao){e.next=3;break}return this.$utils.msg("作业编号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.zuoyetimu){e.next=6;break}return this.$utils.msg("作业题目不能为空"),e.abrupt("return");case 6:if(this.ruleForm.zuoyeleixing){e.next=9;break}return this.$utils.msg("作业类型不能为空"),e.abrupt("return");case 9:if(this.ruleForm.banji){e.next=12;break}return this.$utils.msg("班级不能为空"),e.abrupt("return");case 12:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=15;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=18;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 18:if(!this.ruleForm.id){e.next=23;break}return e.next=21,this.$api.update("zuoyexinxi",this.ruleForm);case 21:e.next=25;break;case 23:return e.next=25,this.$api.add("zuoyexinxi",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},"7a11":function(e,t,n){"use strict";n.r(t);var i=n("a930"),r=n("37c5");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("52e5");var a,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"466a8ab1",null,!1,i["a"],a);t["default"]=s.exports},a930:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}))}},[["26d1","common/runtime","common/vendor"]]]);