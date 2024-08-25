import React, { useEffect, useState } from 'react'


function Hideshow() {
  
const[usererr ,setUsererr] =useState()





  const [email, setEmail] = useState()
  const [name, setName] = useState()
    const [states , setStates]=useState('true')

  useEffect(()=>{






    },[])
  return (
    <div>
        
        {

states?<h3>  Hideshow</h3>:''


        }
      
      <button onClick={()=>setStates(!states)}>Toggle</button>
{/* <button onClick={()=>setStates(false)}>hide</button>
<button onClick={()=>setStates(true)}>show</button> */}

<form style={{display:'flex' ,


flexDirection:'column',

gap:"1em",
border:" 0px solid rgb(222, 214, 214)",
 padding: '1em',
borderRadius:"7px",
minWidth:"25%",

maxWidth: '35%', 
boxShadow:"0px 0px 25px rgb(188, 182, 182)"
,
overflow: 'hidden'
}}     



onSubmit={
  





  (e) => {

    let item=e.target.value;
    
    if (item.length<=3) {
     setUsererr(true)
    }
    
    else if (item.length>3) {
      setUsererr(true)
    }

e.preventDefault()

console.log(email);

console.log(name);

}}>

<h2>Contect us</h2>

<label htmlFor="name">Name ({name})</label>
   
<input className="name"  type='name' placeholder='enter your Name'




/>{usererr?<span>user not valid</span>:"user valid"}



<label htmlFor="name">email</label>
<input className="" type='email'
id='email'
name='email'

onChange={

  (e)=>setEmail(e.target.value)
  
  
  }

/>
<button>sumbit</button>
</form>



    </div>
  )
}

export default Hideshow