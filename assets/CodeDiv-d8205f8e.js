import{_ as r,o as i,c as a,g as d,b as l}from"./app-eb84a32d.js";const p={methods:{copyText(){let t="";this.$slots.default().forEach(e=>{e.children&&(t+=e.children)}),["GET","POST","PUT","PATCH","DELETE"].forEach(e=>t=t.replace(e,"")),navigator.clipboard.writeText(t.trim()).then(()=>{const e=this.$el.querySelector(".copyButton"),c=e.innerText;e.innerText="URL copied!",setTimeout(()=>{e.innerText=c},1e3)}).catch(e=>{console.error("Error in copying text: ",e)})}}},_={class:"code-div"};function u(t,o,e,c,T,s){return i(),a("div",_,[d(t.$slots,"default",{},void 0,!0),l("button",{class:"copyButton",onClick:o[0]||(o[0]=(...n)=>s.copyText&&s.copyText(...n))},"Copy URL")])}const x=r(p,[["render",u],["__scopeId","data-v-c21333f5"],["__file","CodeDiv.vue"]]);export{x as default};
