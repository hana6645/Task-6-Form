import React,{act, useReducer} from "react";
const initialState ={
    color:"white"
};
function reducer(state,action){
    switch(action.type){
        case"TURN GREEN":
        return{
            color:"green"
        };
        default : return state;
    }
}
function TogleT(){
    const [state,dispatch]=useReducer(reducer,initialState);
      return(
        <div
         onClick={()=>dispatch({type:"TURN GREEN"})}
         style={{
            width:"120px",
            height:"120px",
            backgroundColor:state.color,
            border:"1px solid black"     
            }}
        >

        </div>
      )

}
export default TogleT