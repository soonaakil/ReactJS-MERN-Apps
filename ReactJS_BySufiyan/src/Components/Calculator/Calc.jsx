import React, { useState } from "react";
import './calculator.css';

const Calc = () => {
    const [inputVal, setInputVal] = useState("");

    const getValue = (e)=> {
        setInputVal(e.target.value);
        // Concatination
        if(!["AC", "Back", "="].includes(e.target.value)) {
            setInputVal(inputVal.concat(e.target.value));
        }
        // Functionalities
        if(e.target.value === "AC") {
            setInputVal("");
            return;
        } else if(e.target.value === "Back") {
            setInputVal(inputVal.slice(0, -1));
            return;
        } else if(e.target.value === "=") {
            try {
                setInputVal(eval(inputVal).toString());
            } catch {
                setInputVal("Error");
            }
            return;
        }
    }

  return (
    <>
      <div className="cal-container">
        <h3>Calculater | Created by Mohd Aakil</h3>

        <div className="calculation">
          <input type="text" placeholder="0" value={inputVal} />
        </div>
        <div className="buttons">
          <div className="btn btnF1">
            <button className="btnF" onClick={getValue} value="(">(</button>
            <button className="btnF" onClick={getValue} value=")">)</button>
            <button className="btnF" onClick={getValue} value="%">%</button>
            <button className="btnF" onClick={getValue} value="AC">AC</button>
          </div>
          <div className="btn btnF2">
            <button className="btnF" onClick={getValue} value="7">7</button>
            <button className="btnF" onClick={getValue} value="8">8</button>
            <button className="btnF" onClick={getValue} value="9">9</button>
            <button className="btnF" onClick={getValue} value="*">*</button>
          </div>
          <div className="btn btnF3">
            <button className="btnF" onClick={getValue} value="4">4</button>
            <button className="btnF" onClick={getValue} value="5">5</button>
            <button className="btnF" onClick={getValue} value="6">6</button>
            <button className="btnF" onClick={getValue} value="-">-</button>
          </div>
          <div className="btn btnF4">
            <button className="btnF" onClick={getValue} value="1">1</button>
            <button className="btnF" onClick={getValue} value="2">2</button>
            <button className="btnF" onClick={getValue} value="3">3</button>
            <button className="btnF" onClick={getValue} value="+">+</button>
          </div>
          <div className="btn btnF5">
            <button className="btnF" onClick={getValue} value="0">0</button>
            <button className="btnF" onClick={getValue} value="Back">Back</button>
            <button className="btnF" onClick={getValue} value="=">=</button>
            <button className="btnF" onClick={getValue} value="/">/</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;
