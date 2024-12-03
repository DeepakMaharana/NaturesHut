import React, { useState } from "react";

const Counter = React.forwardRef((props, ref)=>{
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount <30?prevCount + 1:prevCount);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount > 0?prevCount - 1:prevCount);
  };
  return (
    <div>
      <div className="flex gap-2">
        <button onClick={handleDecrement} className="font-bold text-lg px-3 bg-slate-300 hover:bg-slate-400">-</button>
        <input type="number" className="w-6 text-center border-0 outline-none p-0" value={count}  ref={ref} readOnly/>
        <button onClick={handleIncrement} className="font-bold text-lg px-3 bg-slate-300 hover:bg-slate-400" >+</button>
      </div>
    </div>
  );
});

export default Counter;