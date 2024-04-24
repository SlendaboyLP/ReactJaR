import { useState } from "react";

import { CalcButton } from "./CalcButton";

export default function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result + e);
  };

  const calculateResult = () => {
    setResult(eval(result));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-300 rounded-md w-min h-min p-4">
        <textarea
          value={result}
          className="w-48  mb-4 resize-none rounded-md"
        ></textarea>
        <div>
          <CalcButton value="1" onClick={() => handleClick("1")} />
          <CalcButton value="2" onClick={() => handleClick("2")} />
          <CalcButton value="3" onClick={() => handleClick("3")} />
          <CalcButton value="+" onClick={() => handleClick("+")} />
        </div>
        <div>
          <CalcButton value="4" onClick={() => handleClick("4")} />
          <CalcButton value="5" onClick={() => handleClick("5")} />
          <CalcButton value="6" onClick={() => handleClick("6")} />
          <CalcButton value="-" onClick={() => handleClick("-")} />
        </div>
        <div>
          <CalcButton value="7" onClick={() => handleClick("7")} />
          <CalcButton value="8" onClick={() => handleClick("8")} />
          <CalcButton value="9" onClick={() => handleClick("9")} />
          <CalcButton value="*" onClick={() => handleClick("*")} />
        </div>
        <div>
          <CalcButton value="C" onClick={() => setResult("")} />
          <CalcButton value="0" onClick={() => handleClick("0")} />
          <CalcButton value="." onClick={() => handleClick(".")} />
          <CalcButton value="=" onClick={() => calculateResult()} />
        </div>
      </div>
    </div>
  );
}
