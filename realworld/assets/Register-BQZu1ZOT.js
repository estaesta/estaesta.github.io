import{d as h,z as p,q as b,u as v,b as n,f as e,e as w,w as x,F as y,x as k,C as U,A as i,B as d,r as V,o as u,h as S,i as f,l as q,m as B,G as C}from"./index-fPpdgeJo.js";const E={class:"auth-page"},L={class:"container page"},N={class:"row"},R={class:"col-md-6 offset-md-3 col-xs-12"},A={class:"text-xs-center"},F={class:"error-messages"},P={class:"form-group"},D={class:"form-group"},M={class:"form-group"},T=["disabled"],H=h({__name:"Register",setup(z){const c=p(null),r=b({username:"",email:"",password:""}),{updateUser:_}=v(),a=p();async function g(){var l,s;if(a.value={},!!((l=c.value)!=null&&l.checkValidity()))try{const o=await q.users.createUser({user:r});_(o.data.user),await B("global-feed")}catch(o){C(o)&&(a.value=(s=o.error)==null?void 0:s.errors)}}return(l,s)=>{const o=V("AppLink");return u(),n("div",E,[e("div",L,[e("div",N,[e("div",R,[s[4]||(s[4]=e("h1",{class:"text-xs-center"}," Sign up ",-1)),e("p",A,[w(o,{name:"login"},{default:x(()=>s[3]||(s[3]=[S(" Have an account? ")])),_:1})]),e("ul",F,[(u(!0),n(y,null,k(a.value,(t,m)=>(u(),n("li",{key:m},f(m)+" "+f(t?t[0]:""),1))),128))]),e("form",{ref_key:"formRef",ref:c,"aria-label":"Registration form",onSubmit:U(g,["prevent"])},[e("fieldset",P,[i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.username=t),"aria-label":"Username",class:"form-control form-control-lg",type:"text",required:"",placeholder:"Your Name"},null,512),[[d,r.username]])]),e("fieldset",D,[i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>r.email=t),"aria-label":"Email",class:"form-control form-control-lg",type:"email",required:"",placeholder:"Email"},null,512),[[d,r.email]])]),e("fieldset",M,[i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>r.password=t),"aria-label":"Password",class:"form-control form-control-lg",type:"password",minLength:8,required:"",placeholder:"Password"},null,512),[[d,r.password]])]),e("button",{type:"submit",class:"btn btn-lg btn-primary pull-xs-right",disabled:!(r.email&&r.username&&r.password)}," Sign up ",8,T)],544)])])])])}}});export{H as default};
