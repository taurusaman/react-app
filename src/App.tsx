/*import ListGroup from './components/ListGroup';
import Message from './components/ListGroup'

//Rendering List All these content i studied from React.dev(Accha document kiya gya hai), Mosh
function App(){

  return <div><ListGroup /></div>;
}

export default App;

//Another example of rendering



//Responding to events state manage ka beginner exapmle
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
    <h1>ClicK this button and see how much time you have clicked</h1>
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
    </>
  );
}

export default MyButton;




//jsx me {state} curly braces (JSX, interpolation) ke andar hi state ko carry karo
//React will react when data or state will be changed directly ham <h1> <h1/> tag ke andar jakar nahi karenge qk ye to react.create ham state ko change kar dene and react will update the same in ui


import React, { useState } from 'react'
import Products from './components/products';

function App() {
  //usestate is like a variable in React which we can set any value array,int,string, objects etc etc...
  //Destructuring -- a me value rahega aur b update karne ke liye variable ya fn. rahega  
  var[a,b] = useState(10);

  return (
    <>
    <h1>{a}</h1>
    <button onClick={()=> b(a+1)} className='color'>Click Me Man i am  a button in react</button>
    
    <Products age = "25"/>
    </>
  )
}

export default App

//Ek aur chhota sa counter  app (increment and decrement both are here)
import React, { useState } from 'react'

function App() {
//const[a,b] = useState(0); same like this
const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <button onClick={()=>setCounter((prevCount)=> prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=> prevCount+1)}>+</button>
      
      </div>
  )
}

export default App

*/

//API KEY omdb movie app wala --d2b8169c  --> http://www.omdbapi.com/?i=tt3896198&apikey=d2b8169c

import React from 'react'

const App =  ()=> {
  return (
    <div>App</div>
  )
}

export default App