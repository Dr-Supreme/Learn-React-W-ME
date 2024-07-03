// this is used to teach me about hooks and how to use them
import React, {useState} from "react" // you can usedestructuring to import certain things from a library instead of the whole library


function MyComponent(){

    const [name, setName] = useState("this is the initial state"); // the useState returns a variable and a setter function. we will use setState to set name from now on
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        
       // name = "supreme" // this will not update it on the dom only in the console if you log it. 
        setName("supreme"); // by using the set we change the name to supreme both in the console and the dom 
        console.log(name);
    }

    const incrementAge = () => {
        setAge(age + 1); {/* incrmenets the age*/}
    }
    
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<>
    <div> 
        <p>Name: {name}</p> {/* this displays the name*/}
        <button onClick={updateName}>Set Name</button> {/* this sets the name*/}

        <p>Age: {age}</p>{/* this displays the age*/}
        <button onClick={incrementAge}>Increment Age</button> {/* this sets the age*/}

        <p>Is employed: {isEmployed ? "yes" : "no"}</p>{/* this displays the boolean*/}
        <button onClick={toggleEmployedStatus}>Toggle Status</button> {/* this toggles the status */}
    </div>
            </>)
}
export default MyComponent