import{d as h,z as u,q as w,u as b,b as n,f as e,e as v,w as x,F as y,x as k,C as V,A as p,B as m,r as L,o as i,h as S,i as f,l as q,m as B,G as C}from"./index-CjoYhzC6.js";const E={class:"auth-page"},N={class:"container page"},U={class:"row"},A={class:"col-md-6 offset-md-3 col-xs-12"},F={class:"text-xs-center"},P={class:"error-messages"},D={class:"form-group","aria-required":"true"},M={class:"form-group"},R=["disabled"],G=h({__name:"Login",setup(T){const d=u(null),r=w({email:"",password:""}),{updateUser:_}=b(),a=u();async function g(){var l,s;if(a.value={},!!((l=d.value)!=null&&l.checkValidity()))try{const o=await q.users.login({user:r});_(o.data.user),await B("global-feed")}catch(o){if(C(o)){a.value=(s=o.error)==null?void 0:s.errors;return}console.error(o)}}return(l,s)=>{const o=L("AppLink");return i(),n("div",E,[e("div",N,[e("div",U,[e("div",A,[s[3]||(s[3]=e("h1",{class:"text-xs-center"}," Sign in ",-1)),e("p",F,[v(o,{name:"register"},{default:x(()=>s[2]||(s[2]=[S(" Need an account? ")])),_:1})]),e("ul",P,[(i(!0),n(y,null,k(a.value,(t,c)=>(i(),n("li",{key:c},f(c)+" "+f(t?t[0]:""),1))),128))]),e("form",{ref_key:"formRef",ref:d,"aria-label":"Login form",onSubmit:V(g,["prevent"])},[e("fieldset",D,[p(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.email=t),"aria-label":"Email",class:"form-control form-control-lg",type:"email",required:"",placeholder:"Email"},null,512),[[m,r.email]])]),e("fieldset",M,[p(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>r.password=t),"aria-label":"Password",class:"form-control form-control-lg",type:"password",required:"",placeholder:"Password"},null,512),[[m,r.password]])]),e("button",{class:"btn btn-lg btn-primary pull-xs-right",disabled:!r.email||!r.password,type:"submit"}," Sign in ",8,R)],544)])])])])}}});export{G as default};
