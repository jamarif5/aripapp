
import React,{Component} from "react";


export default class Arif extends Component {
constructor(){
super();
this.state =
{
data :'arif'

}
}
apple()
{


this.setState({data: "jam"})
}
    render()
   {
return(

<>

<h1 > { this.state.data}</h1>

<button onClick={()=>this.apple()} >update data</button>

</>



);


   } 
    
}
