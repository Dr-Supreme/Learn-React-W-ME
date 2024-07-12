//updater function = function passed as an argument to setState
//ex: setYear(year + 1) would be setYear(arrow function)
import React, {useState} from "react"; 


function Counter(){


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        setCount(count + 1); // this is diffferent than count + 2. this will still have count as 1 after clicked once instead of 2 when clicked one
        // this is b/c count never updates before the next setCount

        // in order to do that we should use updater function
        //setCount(prevCount => prevCount + 1); 
        //by changing it to prevCount and passing it as a func. like above then we are changin the pending state (prevcount) instead of the current state (count)
    }

    const decrement = () => {
        setCount(count - 1);
        // to do so here we will do 
        //setCount(prevCount => prevCount - 1)
        //setCount(prevCount => prevCount - 1)
        
    }

    const reset = () => {
        setCount(0); // we dont need to use one here because it has 0;
    }


    return (<>
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}> Decrement </button>
            <button className="counter-button" onClick={reset}> reset </button>
            <button className="counter-button" onClick={increment}> increment </button>
        </div>
    </>);
}

export default Counter