import React ,{useReducer} from "react";
const initialState ={
    colors:["green","grey"]
}
function reducer (state,action){
    switch(action.type){
        case"SWAP":
        return{
            colors:[state.colors[1],state.colors[0]]
        }
    
    default:
        return state;
    }
}
function TogleO(){
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
          <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 100px",
        gap: "10px"
      }}
    >

      {state.colors.map((color, index) => (
        <div
          key={index}
          onClick={() =>
            dispatch({ type: "SWAP"})
          }
          style={{
            width: "100px",
            height: "100px",
            backgroundColor:color,
            border: "1px solid black",
            cursor: "pointer"
          }}
        ></div>
      ))}

    </div>
      
       
    )
}
export default TogleO;