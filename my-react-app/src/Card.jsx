import nikePic from './assets/profile.jpeg'
import goku from './assets/goku.jpg'
import big2 from './assets/big2.jpeg'
import nimbus from './assets/nimbus.jpeg'

function Card(){

return(
<>
    <div className="card">
        <img className ="card-image" src={nikePic} alt="profile picture"></img>
        <h2 className="card-title"> Dr Supreme</h2>
        <p className="card-text"> Im learning to code in react</p>
    </div>

    <div className="card">
    <img className ="card-image" src={goku} alt="profile picture"></img>
    <h2 className="card-title"> Dr Supreme</h2>
    <p className="card-text"> Im learning to code in react</p>
    </div>

    <div className="card">
    <img src={big2} alt="profile picture"></img>
    <h2 className="card-title"> Dr Supreme</h2>
    <p className="card-text"> Im learning to code in react</p>
    </div>

    <div className="card">
    <img src={nimbus} alt="profile picture"></img>
    <h2 className="card-title"> Dr Supreme</h2>
    <p className="card-text"> Im learning to code in react</p>
    </div>
    </>
    // the alt in line 7 allows the text to be read outloud in case someone is usinga screenreader
    // the src in line 8 lets you add a pic we imported in line 1. that pic was dropped into the assets component from my camera library.
    // in jsx we use className instead of class to do CSS
    //index.css is where all the css for this will be at.
);
}

export default Card