import { useState } from "react";
function Select (){
    const fruits=["APPLE","BANANA","ORANGE","GRAPS","WATERMELON"]
    const [Select,setSelect]=useState([])
    const handleSelect =(item)=>{
       setSelect( Select.includes(item)
            ? setSelect(Select.filter((i)=>  i !== item))
           : [...Select,item]
           )
      
    }
    return(
        <div>
            <h2> Select Fruits </h2>
            { fruits.map((item)=>  (
                    <div key={item}
                     onClick={()=>handleSelect(item)}
                     style={{
                        padding:"10px 15px",
                        cursor:"pointer",
                        background:Select.includes(item)?" 3px green":" 1px white",
                        color:Select.includes(item)?"white":"black",
                        borderRadius:"5px",
                        userSelect:"none",
                        transition:"border 0.2s",
                     }}
                      >
                        {item}
                        </div>
                ))}
                <h3 style={{marginTop:"20px"}}>
                    Select :{Select.length>0? Select .join(" ,"):"None"}</h3>
        </div>
    )
}
export default Select;