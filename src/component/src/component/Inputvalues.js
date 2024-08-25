import React, { useState } from "react"


 
function Inputvalues() {
  
  const [valuejs, setValuejs]  =   useState("arif")
  
    function inputvalues(e) {
       setValuejs(e.target.value)
     
       
    }
  return (
    <div>
<h2 className="">{valuejs}</h2>
<input className="input-value" type='text' style={{height:"50px" , borderRadius:"5px",width:"50%"}} onChange={inputvalues}/>


    </div>
  )
}

export default Inputvalues