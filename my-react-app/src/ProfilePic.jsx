// this was used to teach click events and event handling. this and onclick components help me learn


function ProfilePicture(){
    
    
    const imageUrl = './src/assets/Naruto.jpg';
    const handleClick = (e) => e.target.style.display = "none"; // this will make the image disappear by clicking it

    return(<>
    <img onClick={(e) => handleClick(e)} src = {imageUrl}></img>
    </>);
}

export default ProfilePicture