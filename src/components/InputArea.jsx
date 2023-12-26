import React from "react";
import "./InputArea.css";

function InputArea({value,onChange,onButtonClick}) {
    return (
        <div>
            <input type="text" name="name" id="name" placeholder="Enter name of Todo" value={value} onChange={onChange} onKeyDown={(e)=>(e.key === 'Enter') && onButtonClick()} />
            <button className="btn-add" onClick={onButtonClick}>Add</button>
        </div>
    );
}

export default InputArea;
