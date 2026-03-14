import React,{act, useReducer} from "react";
const initialState ={
    color:"white"
};
function reducer(state,action){
    switch(action.type){
        case"TOGLE COLOR":
        return{
            color:state.color === "grey"? "green":"grey"
        };
        default : return state;
    }
}
function TogleT(){
    const [state,dispatch]=useReducer(reducer,{color:"grey"});
      return(
        <div
         onClick={()=>dispatch({type:"TOGLE COLOR"})}
         style={{
            width:"120px",
            height:"120px",
            backgroundColor:state.color,
            border:"1px solid black",    
            cursor:"pointer" 
            }}
        >

        </div>
      )

}
export default TogleT