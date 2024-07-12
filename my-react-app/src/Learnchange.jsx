// the on change event handler triggers a function
//(in this case its the function called handleNameChange) 
//every time the value of the input changes
//we use <slect> <input> <textarea
import React, {useState} from 'react';

function Learnchange(){

const [name, setName] = useState("this is the initial value");
const [quantity, setQuantity] = useState(1);
const [comment, setComment] = useState("");
const [payment, setPayment] = useState("Visa");
const [shipping, setShipping] = useState("Delievery");

function handleNameChange(event){
    setName(event.target.value)
}

function handleQuantityChange(event){
    setQuantity(event.target.value);
}

function handleCommentChange(event){
    setComment(event.target.value); // 
}

function hanldePaymentChange(event){
    setPayment(event.target.value);
}

function handleShippingChange(event){
    setShipping(event.target.value);
}

    return(<div>
        <input value={name} onChange={handleNameChange}/> {/*  this will show the name and update the name in real time as the user types*/}
        <p>Name: {name}</p> 

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="GiftCard">GiftCard</option>
            <option value="MasterCard">MasterCard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" 
            checked={shipping === "Pick Up"}
            onChanges = {handleShippingChange}/>
            Pick up
        </label><br/>
        <label>
        <input type="radio" value="Delivery" 
            checked={shipping === "Delivery"}
            onChanges = {handleShippingChange}/>
           Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>);
}
export default Learnchange