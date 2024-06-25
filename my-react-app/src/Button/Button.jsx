import styles from './Button.module.css'
// this is going to be used to learn how to apply styles 
function Button(){
    

    // if we wanted to do inline css styling we would move this component out of this folder
    //then we would remove the import on line 1
    //then add lines 10-16. then in the return add :
    //<button style={styles}> click me </button>
    // const styles = {
   //       background-color: "hsl(200, 100%, 50%)",
   //       color: "white",
   //       padding: "10px, 20px",
   //       border: "none",
   //       cursor: "pointer",
   //    }
    return(
        <button className={styles.button}> click me</button>
    );
    //with modules we dont have to wrory about naming conflicts
    //we imported the styles sheet from our module and used it here
    //if im not mistaken we could have named it whatever
}
export default Button