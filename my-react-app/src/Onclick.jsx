
function Button(){

    //const handleClick = () => console.log("OUCH"); // this is the arrow function that is called when the button is clicked. as you can see you need to add the onClick to it like in angular

    let count = 0
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times/s`)
        }else 
        {
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClick2 = (name) => console.log(`${name} stop clicking me` )

    const handleClick3 = (e) => e.target.textContent = "OUCH 🤕"; // this changes the event propertie of this button.

    return(<>
    {/* to use the other function on line 1 as a response to a click, replace the function name/ remove the 2
        the function is immediately ran if the click method has parenthesis/takes in arguments. to bypass this and have it act regularely you must add the arrow function before it
        like so: <button onClick={() => handleClick2("bro")}>click me ⚡️</button> 
        there is a double click and a onclick. */ }

<button onDoubleClick={(e) => handleClick3(e)}>click me ⚡️</button> 

    {/* <button onClick={() => handleClick2("bro")}>click me ⚡️</button>  */}
    </>);
}

 export default Button