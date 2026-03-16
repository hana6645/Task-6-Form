import React,{useMemo,useState} from "react"

function Total(){

const [cart,setCart] = useState([
{name:"phone",price:20000,qty:1},
{name:"laptop",price:50000,qty:1}
])

const total = useMemo(()=>{

console.log("total calculation")

return cart.reduce((sum,item)=>{
return sum + item.price * item.qty
},0)

},[cart])

return(

<div>

<h2>Total : {total}</h2>

</div>

)

}

export default Total