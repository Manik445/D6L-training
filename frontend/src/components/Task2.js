import { Button } from "@mui/base";
import { useState } from "react"

// definig HOC
const Withdarkmode = (Wrappercomponent) =>{
    return function Withdarkmode(props){
        const [darkmode  , setDarkmode] = useState(false); 

        const toggledarkmode = ()=>{
            setDarkmode(!darkmode); 
        }

// defining background for toggle change 
const backgroundcolor = darkmode ? '#222' : '#fff'; 

// passing toggledark mode and dark mode state as props
return <Wrappercomponent {...props} darkmode={darkmode} toggledarkmode={toggledarkmode} backgroundcolor={backgroundcolor}/>

   }; 
}; 

// custom component for dark mode using
const MyComponent = ({ backgroundcolor, toggledarkmode, darkmode }) => {
    return (
        <div style={{ backgroundColor: backgroundcolor, minHeight: '100vh', color: darkmode ? '#fff' : '#000' }}>
            <h1>Dark Mode Example</h1>
            <Button onClick={toggledarkmode}>Toggle Dark Mode</Button>
        </div>
    );
};

const MyComponentWithDarkMode = Withdarkmode(MyComponent); 

const Task2 = ()=>{
    return <MyComponentWithDarkMode/>
}

export default Task2 ; 