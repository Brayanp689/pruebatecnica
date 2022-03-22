import React, {useState} from "react";
import Content1 from "./Auth_Content1";
import Content2 from "./Auth_Content2";
import Content3 from "./Auth_Content3";
import Content4 from "./Auth_Content4";
import { ButtonToggle } from "../ContentButton/ContentButton";

const TypesButtons = [ <Content1 />, <Content2 />, <Content3 />, <Content4 />];

function ToggleGroup(){
    const [active, setActive] = useState(TypesButtons[0]);
    return <div>
        {TypesButtons.map(type => (
            <ButtonToggle
            active ={active === type}
            onClick={()=> setActive(type)}
            >
                {type}
            </ButtonToggle>
        ))}
    </div>
}
const AuthButton = () => {
    return(
            <ToggleGroup />
    );
}
export default AuthButton

