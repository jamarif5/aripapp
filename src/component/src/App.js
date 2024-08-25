import logo from './logo.svg';
import Practice from './component';
import './App.css';
import User from './User';
import State from './component/State';
import Arif from './component/Classcomonent';
import Props from './component/propes/Props';
import Inputvalues from './component/Inputvalues';
import Hideshow from './component/Hideshow'
import { Getdata , Hide} from './component/Function';
import User1 from './component/User1';

import React from 'react';
import Student from './component/Student';



function App() {
  const[name ,setName]= React.useState('arif')
  return (
    <>
    <Hideshow/>
    <Inputvalues/>



 <logo  />



<User/>
<Hide/>
<User1 />
</>
  );
}


export default App;
