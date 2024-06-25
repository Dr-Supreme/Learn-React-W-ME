

//if situation to show things
function UserGreeting(props){

    const welcomeMessage = <h2>Welcome {props.username}</h2>
    const loginPrompt = <h2>Please log in to continue</h2>
    // these are different ways to render. it checks the propertie we apsse dand does something for each
    
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);

    if(props.isLoggedIn){
        return (
            welcomeMessage
        );
    }else{
        return(
            loginPrompt
        );
    }
    
}
export default UserGreeting