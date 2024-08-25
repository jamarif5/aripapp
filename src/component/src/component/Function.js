import React from "react"
import Student from "./Student"

  export const Getdata=()=>{


alert("propes as function ")

  }


export class Hide extends React.Component{

constructor(){

super()
this.state={

show :true


}

}
render(){

return(
<>


{

this.state.show?<Student/>:"remove component"

}
<button onClick={()=>this.setState({show:!this.state.show})}>REMOve component </button>
</>



)


}

}