
// we learn how to render a list. we have an array of fruits and can return it as a list
function List(){

    const fruits = [{id: 1, name: "apple", calories: 95},
        {id: 2, name: "Orange", calories: 45}, 
        {id: 3, name: "coconut", calories: 159}, 
        {id: 4, name: "Pear", calories: 37}, 
        {id: 5, name: "Mango", calories: 105}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //this is to sort in alphebtical order
    // fruits.sort((a, b) => b.name.localeCompare(b.name)); //this is to sort in reverse order
    //fruits.sort((a,b) => a.calories - b.calories); // sort in numeric order
    //fruits.sort((a,b) => b.calories - a.calories); // sort in reverse numeric order

    //how to filter objects by criteria
    //const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

        //switch lowcal fruit with highcalfruit or just fruit to filter out the methods
    // const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.name}>
    //     {lowCalFruit.name}: &nbsp; 
    //     <b>{lowCalFruit.calories}</b></li>);

    const listItems = fruits.map(fruit => <li key={fruit.name}>
        {fruit.name}: &nbsp; 
        <b>{fruit.calories}</b></li>);

    return (<>
        <ol>{listItems}</ol>
    </>)
}
export default List