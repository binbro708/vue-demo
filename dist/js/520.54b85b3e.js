"use strict";(self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[]).push([[520],{4520:function(s,e,t){t.r(e),t.d(e,{default:function(){return w}});var n=t(3396),r=t(9242);const o={class:"container mt-5"},a={class:"col-md-6"},u=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),i={class:"mb-2"},l=(0,n._)("label",{for:"inputEmail",class:"sr-only"},"信箱",-1),c={class:"mb-2"},d=(0,n._)("label",{for:"inputPassword",class:"sr-only"},"密碼",-1),p=(0,n._)("div",{class:"text-end mt-4"},[(0,n._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function m(s,e,t,m,h,b){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,r.iM)(((...s)=>b.signIn&&b.signIn(...s)),["prevent"]))},[(0,n._)("div",a,[u,(0,n._)("div",i,[l,(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"信箱",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[r.nr,h.user.username]])]),(0,n._)("div",c,[d,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"密碼",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[r.nr,h.user.password]])]),p])],32)])}t(7658);var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:t}=s.data;document.cookie=`myToken=${e};expired=${new Date(t)}`,this.$router.push("/dashboard/products")}}))}}},b=t(89);const f=(0,b.Z)(h,[["render",m]]);var w=f}}]);
//# sourceMappingURL=520.54b85b3e.js.map