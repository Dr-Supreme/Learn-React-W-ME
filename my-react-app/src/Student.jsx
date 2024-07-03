import propTypes from 'prop-types'

// defaultProps = default values in case nothing is passed
//propTypes = checks if the passed value is of the correct data type
//props = are read only props that are shared between components there is a parent and child component. the parent sends data to child.
// props in this case is a javascript object. hence why we have opening brackets on in the return
// boolens dont display to the DOM but if you use it like we do in isStudent then it works
function Student(props){
    return(
        <>
        <div className="student"> 
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes": "no"}</p>
        </div>
        {/* <div className="card">
            <img className ="card-image" src={props.image} alt="profile picture"></img>
            <p className="card-title">Title: {props.title}</p>
            <p className="card-text">Text: {props.text}</p>
        </div> i used this as an exmple for the movie cards component */}
        </>
    );

}
// this is how we create prop types: first import it like so in line 1
// Student.propTypes = {
//     name: propTypes.string,
//     age: propTypes.number,
//     isStudent: propTypes.bool,
// }
// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false,
// } // this is used to give the fields a default value
export default Student