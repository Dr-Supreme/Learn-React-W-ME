import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";

function App() {

  return(
  <>
    <Header/>
    <Card/>
    <Footer/>
   </> // this allows you to return more than 1 component
   // you can add  <Food/> later;
  );
}

export default App // this allpows you to reuse somewhere else
