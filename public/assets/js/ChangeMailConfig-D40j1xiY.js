import{b as P,r as i,o as U,w as q,e as _,c as k,m as t,k as o,j as E,F,_ as x,x as v,E as V,Y as B,z as I,y as R,I as $,J as z,A as L,B as N,v as j}from"./.pnpm-DQd76FlD.js";import{i as p}from"./index-BlJRWrpm.js";const A=()=>p.get("/admin/config/mail"),D=d=>p.patch("/admin/config/mail",d),J=d=>p.post("/admin/config/mail",d),G=P({__name:"ChangeMailConfig",setup(d){const s=i(!1),l=i({switch:!1,host:"",port:"",username:"",password:"",encryption:"tls",from_address:"",from_name:"",to_address:"",to_name:""}),m=i(null),c={host:[{required:!0,message:"请输入SMTP服务器地址",trigger:"blur"}],port:[{required:!0,message:"请输入SMTP服务器端口",trigger:"blur"}],username:[{required:!0,message:"请输入SMTP服务器账户",trigger:"blur"}],password:[{required:!0,message:"请输入SMTP服务器密码",trigger:"blur"}],encryption:[{required:!0,message:"请选择SMTP服务器加密方式",trigger:"blur"}],from_address:[{required:!0,message:"请输入发件人地址",trigger:"blur"}],from_name:[{required:!0,message:"请输入发件人名称",trigger:"blur"}],to_address:[{required:!0,message:"请输入收件人地址",trigger:"blur"}],to_name:[{required:!0,message:"请输入收件人名称",trigger:"blur"}]},f=async()=>{try{s.value=!0;const u=await A();l.value=u.data}finally{s.value=!1}},b=async u=>{if(!(!u||!await u.validate()))try{s.value=!0,await D(l.value),V.success("保存成功")}finally{s.value=!1,await f()}},w=async u=>{if(!(!u||!await u.validate()))try{s.value=!0,await J(l.value),V.success("发送成功,请检查邮箱是否收到")}finally{s.value=!1}};return U(f),(u,a)=>{const y=B,r=I,n=R,M=$,C=z,g=L,T=N,S=j;return q((_(),k(T,{ref_key:"changeMailConfigFormRef",ref:m,model:l.value,rules:c,"label-width":"auto"},{default:t(()=>[o(r,{label:"是否开启",prop:"switch"},{default:t(()=>[o(y,{modelValue:l.value.switch,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.switch=e),size:"large"},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器地址",prop:"host"},{default:t(()=>[o(n,{modelValue:l.value.host,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.host=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器加密方式",prop:"encryption"},{default:t(()=>[o(C,{modelValue:l.value.encryption,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.encryption=e),placeholder:"选择加密方式"},{default:t(()=>[(_(),E(F,null,x(["tls","ssl"],e=>o(M,{key:e,label:e,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器端口",prop:"port"},{default:t(()=>[o(n,{modelValue:l.value.port,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.port=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器用户名",prop:"username"},{default:t(()=>[o(n,{modelValue:l.value.username,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.username=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器密码",prop:"password"},{default:t(()=>[o(n,{modelValue:l.value.password,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value.password=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"发件人地址",prop:"from_address"},{default:t(()=>[o(n,{modelValue:l.value.from_address,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.from_address=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"发件人名称",prop:"from_name"},{default:t(()=>[o(n,{modelValue:l.value.from_name,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value.from_name=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"收件人名称",prop:"to_name"},{default:t(()=>[o(n,{modelValue:l.value.to_name,"onUpdate:modelValue":a[8]||(a[8]=e=>l.value.to_name=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"收件人地址",prop:"to_address"},{default:t(()=>[o(n,{modelValue:l.value.to_address,"onUpdate:modelValue":a[9]||(a[9]=e=>l.value.to_address=e)},null,8,["modelValue"])]),_:1}),o(r,{label:" "},{default:t(()=>[o(g,{type:"primary",onClick:a[10]||(a[10]=e=>b(m.value))},{default:t(()=>[v("保存")]),_:1}),o(g,{type:"primary",onClick:a[11]||(a[11]=e=>w(m.value))},{default:t(()=>[v(" 发送测试邮件 ")]),_:1})]),_:1})]),_:1},8,["model"])),[[S,s.value]])}}});export{G as default};
