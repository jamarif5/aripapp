import React from 'react'

class Student extends React.Component{
constructor(){
super()


}
componentWillUnmount(){

alert("component remove")

}
render(){


return(

<>
<h3 className="">Student Component</h3>



</>


)
}



}

export default Student