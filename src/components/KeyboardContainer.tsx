import KeyboardRow1 from "./KeyboardRow1";
import KeyboardRow2 from "./KeyboardRow2";
import KeyboardRow3 from "./KeyboardRow3";
import KeyboardRow4 from "./KeyboardRow4";
import KeyboardRow5 from "./KeyboardRow5";
import KeyboardRow6 from "./KeyboardRow6";

function KeyboardContainer() {
  return (
    // 17.24x6.53 -> x60
    <div className="w-[1034px] h-[392px] flex flex-col grid grid-rows-7 border-white border-4">
      <div className="w-full flex justify-center">
        <div className="text-white">GhostKeyboard</div>
      </div>
      <KeyboardRow1/>
      <KeyboardRow2/>
      <KeyboardRow3/>
      <KeyboardRow4/>
      <KeyboardRow5/>
      <KeyboardRow6/>
    </div>
  )
}

export default KeyboardContainer;
