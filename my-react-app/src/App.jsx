import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./assets/Student.jsx";
import nimbus from './assets/nimbus.jpeg'
import UserGreeting from "./UserGreeting.jsx";

//in this case app is the parent and student is the child component. we must add the name of the prop when we pass it
//if you are passing something and its not a string then it must be in curly brackets. we do this for student down below when passing props
function App() {

  return(
  <>
    <Header/>
    <Card/>
    <Student name="Spongebob" age={30} isStudent={true}/>
    {/* <Student title="Dragon ball" text="DBZ" image={nimbus}/> use this for movie card component*/}
    <UserGreeting isLoggedIn={true} username="Supreme"/>
    <Button/>
    <Footer/>
   </> // this allows you to return more than 1 component
   // you can add  <Food/> later;
  );
}

export default App // this allpows you to reuse somewhere else
