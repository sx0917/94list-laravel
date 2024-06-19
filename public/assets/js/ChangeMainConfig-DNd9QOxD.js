import{b as x,r as v,o as E,w as M,f as A,c as F,n,l as a,x as b,E as f,y as $,z as k,V as q,W as B,A as z,B as N,v as I}from"./.pnpm-BPJ2h7HZ.js";import{i as _,m as R}from"./index-C4RPeEQy.js";const D=()=>_.get("/admin/config/main"),L=s=>_.patch("/admin/config/main",s),G=s=>_.post("/admin/config/main/testAuth",s),W=x({__name:"ChangeMainConfig",setup(s){const r=v(!1),l=v({front_end_version:"",version:"",sleep:0,max_once:0,password:"",announce:"",user_agent:"",need_inv_code:!1,whitelist_mode:!1,debug:!1,name:"",code:"",main_server:""}),i=v(null),w={sleep:[{required:!0,message:"请输入批量解析时休眠时间(秒)",trigger:"blur"}],max_once:[{required:!0,message:"请输入批量解析时单次最大解析数量",trigger:"blur"}],user_agent:[{required:!0,message:"请输入User_Agent",trigger:"blur"}],code:[{required:!0,message:"请输入授权码",trigger:"blur"}],main_server:[{required:!0,message:"请输入授权服务器地址",trigger:"blur"}]},m=async()=>{try{r.value=!0;const e=(await D()).data;l.value={...e,front_end_version:await R(),announce:e.announce.replaceAll("[NextLine]",`
`)}}finally{r.value=!1}},c=async d=>{if(!(!d||!await d.validate()))try{r.value=!0,await L(l.value),f.success("保存成功")}finally{r.value=!1,await m()}},y=async d=>{if(!(!d||!await d.validate()))try{r.value=!0;const e=await G(l.value);"ip"in e.data?f.error(`未知授权码,当前ip为: ${e.data.ip}`):f.success(`测试通过,有效期至: ${e.data.expired_at}`)}finally{r.value=!1,await m()}};return E(m),(d,e)=>{const u=$,t=k,p=q,g=B,V=z,U=N,C=I;return M((A(),F(U,{ref_key:"changeConfigFormRef",ref:i,model:l.value,rules:w,"label-width":"auto"},{default:n(()=>[a(t,{label:"前端版本号",prop:"front_end_version"},{default:n(()=>[a(u,{disabled:"",modelValue:l.value.front_end_version,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.front_end_version=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"后端版本号",prop:"version"},{default:n(()=>[a(u,{disabled:"",modelValue:l.value.version,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.version=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"DEBUG模式开关",prop:"debug"},{default:n(()=>[a(p,{modelValue:l.value.debug,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.debug=o),size:"large"},null,8,["modelValue"])]),_:1}),a(t,{label:"邀请码开关",prop:"need_inv_code"},{default:n(()=>[a(p,{modelValue:l.value.need_inv_code,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.need_inv_code=o),size:"large"},null,8,["modelValue"])]),_:1}),a(t,{label:"白名单模式开关",prop:"whitelist_mode"},{default:n(()=>[a(p,{modelValue:l.value.whitelist_mode,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.whitelist_mode=o),size:"large"},null,8,["modelValue"])]),_:1}),a(t,{label:"站点名称",prop:"name"},{default:n(()=>[a(u,{modelValue:l.value.name,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.name=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"下载使用的 User_Agent",prop:"user_agent"},{default:n(()=>[a(u,{modelValue:l.value.user_agent,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.user_agent=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"批量解析时休眠时间(秒)",prop:"sleep"},{default:n(()=>[a(g,{modelValue:l.value.sleep,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.sleep=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"批量解析时单次最大解析数量",prop:"max_once"},{default:n(()=>[a(g,{modelValue:l.value.max_once,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value.max_once=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"公告内容",prop:"announce"},{default:n(()=>[a(u,{type:"textarea",modelValue:l.value.announce,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value.announce=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"密码",prop:"password"},{default:n(()=>[a(u,{modelValue:l.value.password,"onUpdate:modelValue":e[10]||(e[10]=o=>l.value.password=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"授权服务器",prop:"main_server"},{default:n(()=>[a(u,{modelValue:l.value.main_server,"onUpdate:modelValue":e[11]||(e[11]=o=>l.value.main_server=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"授权码",prop:"code"},{default:n(()=>[a(u,{modelValue:l.value.code,"onUpdate:modelValue":e[12]||(e[12]=o=>l.value.code=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:" "},{default:n(()=>[a(V,{type:"primary",onClick:e[13]||(e[13]=o=>c(i.value))},{default:n(()=>[b("保存")]),_:1}),a(V,{type:"primary",onClick:e[14]||(e[14]=o=>y(i.value))},{default:n(()=>[b("测试授权")]),_:1})]),_:1})]),_:1},8,["model"])),[[C,r.value]])}}});export{W as default};
