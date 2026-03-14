import React,{useState,useMemo} from "react";
 function ProductSer(){
    const [search,setSearch]=useState("")
    const products =[
        "iphone",
        "samsung",
        " laptop",
        "camera",
        "tablet"
    ]
    const filteredProducts=useMemo(()=>{
        console.log("filter run")
        return products.filter((item)=>
        item.toLowerCase().includes(search.toLowerCase()))
    },[search])
    return(
        <div>
            <input 
            placeholder="search product"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>

            {filteredProducts.map((item,index)=>(
                <p key={index}>{item}</p>
            ))}
        </div>
    )

 }
 export default ProductSer