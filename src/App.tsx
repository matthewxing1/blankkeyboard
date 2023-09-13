import Header from "./components/Header";
import KeyboardContainer from "./components/KeyboardContainer";

function App() {
  function handleKeyDown(e: { keyCode: number } ) {
    console.log(e)
    // console.log(e.keyCode);
  }
  return (
    <div className="flex flex-col" onKeyDown={handleKeyDown} tabIndex={-1}>
      <Header/>
      <div className="w-screen flex justify-center">
        <KeyboardContainer/>
      </div>
      
    </div>
  )
}

export default App;
