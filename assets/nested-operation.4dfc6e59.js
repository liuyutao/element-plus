import{g as e,l as t,_ as i,r as a,o as l,c as n,a as s,w as o,F as r,d as c,h as d,t as u,f as p,b}from"./app.3a2d7ab6.js";const v=e({setup:()=>({visible:t(!1)})}),f=c("Hover to activate"),_=c("Click to activate"),h=c("Focus to activate"),m=c("Manual to activate");var g=i(v,[["render",function(e,t,i,c,d,u){const p=a("el-button"),b=a("el-popover");return l(),n(r,null,[s(b,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content"},{reference:o((()=>[s(p,null,{default:o((()=>[f])),_:1})])),_:1}),s(b,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content"},{reference:o((()=>[s(p,null,{default:o((()=>[_])),_:1})])),_:1}),s(b,{ref:"popover",placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content"},{reference:o((()=>[s(p,null,{default:o((()=>[h])),_:1})])),_:1},512),s(b,{visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.visible=t),placement:"bottom",title:"Title",width:200,trigger:"manual",content:"this is content, this is content, this is content"},{reference:o((()=>[s(p,{onClick:t[0]||(t[0]=t=>e.visible=!e.visible)},{default:o((()=>[m])),_:1})])),_:1},8,["visible"])],64)}]]),k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g});const y=e({setup(){const e=d({gridData:[{date:"2016-05-02",name:"Jack",address:"New York City"},{date:"2016-05-04",name:"Jack",address:"New York City"},{date:"2016-05-01",name:"Jack",address:"New York City"},{date:"2016-05-03",name:"Jack",address:"New York City"}]});return u(e)}}),w=c("Click to activate");var C=i(y,[["render",function(e,t,i,n,r,c){const d=a("el-button"),u=a("el-table-column"),b=a("el-table"),v=a("el-popover");return l(),p(v,{placement:"right",width:400,trigger:"click"},{reference:o((()=>[s(d,null,{default:o((()=>[w])),_:1})])),default:o((()=>[s(b,{data:e.gridData},{default:o((()=>[s(u,{width:"150",property:"date",label:"date"}),s(u,{width:"100",property:"name",label:"name"}),s(u,{width:"300",property:"address",label:"address"})])),_:1},8,["data"])])),_:1})}]]),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const S=e({setup:()=>({visible:t(!1)})}),z=b("p",null,"Are you sure to delete this?",-1),j={style:{"text-align":"right",margin:"0"}},J=c("cancel"),M=c("confirm"),N=c("Delete");var Y=i(S,[["render",function(e,t,i,n,r,c){const d=a("el-button"),u=a("el-popover");return l(),p(u,{visible:e.visible,"onUpdate:visible":t[3]||(t[3]=t=>e.visible=t),placement:"top",width:160},{reference:o((()=>[s(d,{onClick:t[2]||(t[2]=t=>e.visible=!0)},{default:o((()=>[N])),_:1})])),default:o((()=>[z,b("div",j,[s(d,{size:"mini",type:"text",onClick:t[0]||(t[0]=t=>e.visible=!1)},{default:o((()=>[J])),_:1}),s(d,{type:"primary",size:"mini",onClick:t[1]||(t[1]=t=>e.visible=!1)},{default:o((()=>[M])),_:1})])])),_:1},8,["visible"])}]]),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});export{k as _,T as a,x as b};