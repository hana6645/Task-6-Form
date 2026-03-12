import React,{useState,useCallback} from "react";
 function Count(){
    const[count,setCount]=useState(0)
     const handleClick =useCallback(()=>{
        console.log("Button Click")
     },[])
     return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count +1)}>Add</button>
        <button onClick={handleClick}>Click</button>
        </>
     )
    
 }
 export default Count