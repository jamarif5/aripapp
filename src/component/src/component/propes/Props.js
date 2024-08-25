import React from "react";

function Props(propes) {
 
console.log(propes);

  return (
    <div  style={{backgroundColor:"red", margin:"10px"}}>
      <div>{propes.name}</div>

      <h2>{propes.emmail} </h2>
    <h4>{propes.other.addres}</h4>
    </div>
  );
}

export default Props;
