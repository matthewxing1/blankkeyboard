// import { useState } from 'react'
import Header from "./components/Header";
import KeyboardContainer from "./components/KeyboardContainer";

function App() {
  // const [count, setCount] = useState(0)
  function handleKeyDown(e: { keyCode: number } ) {
    console.log(e)
    // console.log(e.keyCode);
  }
  return (
    <div className="flex flex-col" onKeyDown={handleKeyDown} tabIndex={-1}>
      <Header/>
      <KeyboardContainer/>
    </div>
  )
}

export default App;
