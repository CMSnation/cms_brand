import{r as s,W as m,j as t,b as i,g}from"./app-2eed7194.js";function v({products:r}){s.useEffect(()=>{console.log(r)},[]);const{data:n,setData:a,post:u,progress:h}=m({name:"",description:"",price:"",image:""});function c(e){const d=e.target.id,l=e.target.value;a(p=>({...p,[d]:l}))}function o(e){e.preventDefault(),console.log(n),g.post("/productconfig",n,{forceFormData:!0})}return t("div",{id:"productconfig",children:["This is Product",t("form",{id:"input-card",action:"",children:[i("input",{onChange:e=>a("name",e.target.value),value:n.name,placeholder:"name",type:"text",name:"name",id:"name"}),i("input",{onChange:c,value:n.description,placeholder:"description",type:"text",name:"description",id:"description"}),i("input",{onChange:c,value:n.price,placeholder:"price",type:"number",name:"price",id:"price"}),i("input",{onChange:e=>a("image",e.target.files[0]),placeholder:"image",type:"file",name:"image",id:"image"}),i("button",{onClick:o,type:"submit",children:"Submit"})]}),i("div",{id:"container-card",children:r.map(e=>t("div",{className:"product-card border-black",children:[i("p",{children:e.name}),i("p",{children:e.description}),i("p",{children:e.price}),i("img",{src:e.image,alt:"gagal di load"})]},e.id))})]})}export{v as default};