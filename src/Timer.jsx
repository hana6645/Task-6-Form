import React,{useState,useRef} from "react"

function Timer(){

const [time,setTime] = useState(0)
const timerRef = useRef(null)

const startTimer = ()=>{

if(timerRef.current) return   // prevent multiple intervals

timerRef.current = setInterval(()=>{
setTime((t)=>t+1)
},1000)

}

const stopTimer = ()=>{
clearInterval(timerRef.current)
timerRef.current = null
}

const resetTimer = ()=>{
clearInterval(timerRef.current)
timerRef.current = null
setTime(0)
}

return(

<div>

<h2>Time : {time}</h2>

<button onClick={startTimer}>
Start
</button>

<button onClick={stopTimer}>
Stop
</button>

<button onClick={resetTimer}>
Reset
</button>

</div>

)

}

export default Timer;