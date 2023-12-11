import { useState } from "react";

const Hello = () => {
    const [text, setText] = useState("")
    
    const textChanger = (event) => {
        console.log(event.target.value)
        setText(text => event.target.value);
    }


    const changer = (event) => {
        
        console.log(event.target);
    }

    const textSetter = text == ""? "enter text":{text};
    return (
        <>
        {text}
        <br></br>
        <input type="text" placeholder="text" onChange={textChanger}/>
        <br />
        <button onClick={changer}>{textSetter}</button>
        </>
    );
}
 
export default Hello;