import React, {useState} from "react";

function ColorPicker(){

    const [color, setcolor] = useState("#FFFFFF");

    function handleColorChange(event){
        setcolor(event.target.value);
    }

return (<div className="color-picker-container"> 
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color:</p>
        </div> {/* with any CSS properties you need to encolse it with {} to make it an object property. if you are embedding javascript then changing css you must do this */}
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange}></input>
</div>);
}
export default ColorPicker