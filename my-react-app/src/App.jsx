import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import DBZ from './assets/DBZ.jpg'
import Code from './assets/Code.jpg'
import FMB from './assets/FMB.jpg'
import Naruto from './assets/Naruto.jpg'
import Onepiece from './assets/Onepiece.jpg'
// import UserGreeting from "./UserGreeting.jsx";


//in this case app is the parent and student is the child component. we must add the name of the prop when we pass it
//if you are passing something and its not a string then it must be in curly brackets. we do this for student down below when passing props
function App() {
// i am adding cards for movies
  return(
  <>
    <Header/>
    {/* <UserGreeting isLoggedIn={true} username="Supreme"/> */}
    <Card title="Code Geass" text="5" image={Code}/>
    <Card title="Full Metal Alchemist" text="4" image={FMB}/>
    <Card title="One Piece" text="3" image={Onepiece}/>
    <Card title="Naruto" text="2" image={Naruto}/>
    <Card title="Dragon ball" text="1" image={DBZ}/>
    <Student name="Spongebob" age={30} isStudent={true}/>
    {/* <div>is this working?</div> */}
    <Button/>
    <Footer/>
   </> // this allows you to return more than 1 component
   // you can add  <Food/> later;
  );
}

export default App // this allpows you to reuse somewhere else
