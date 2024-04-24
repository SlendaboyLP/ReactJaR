import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


export default function Greeter (props){
  const [greeting, setGreeting] = useState("")  
  const charsRemaining = props.maxLength - greeting.length;
  const greetingInvalid = greeting.length === 0 || charsRemaining < 0;

  function handleGreetClick() {
    alert(`Hello, ${greeting}`);
  }
  return (
      <div>
        Greeting:
        <input value={greeting} onChange={e => setGreeting(e.target.value)} />
        <span>{charsRemaining}</span>
        <button onClick={handleGreetClick} disabled={greetingInvalid} >
          Greet
        </button>
      </div>
  );
}
ReactDOM.render(<Greeter maxLength={20}/>, document.getElementById('root'))
// ReactDOM.createRoot(document.getElementById('root')).render(<Greeter></Greeter>)

