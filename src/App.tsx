// import { useState } from 'react'
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0)
  function handleKeyDown(e: { keyCode: number } ) {
    console.log(e)
    // console.log(e.keyCode);
  }
  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1}>
      <Header/>
    </div>
  )
}

export default App;
