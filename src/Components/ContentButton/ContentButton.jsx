import React, {useState} from "react";
import Content1 from "./Content1";
import styled from "styled-components";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

export const Button = styled.button`

  color: white;
  padding: 1px 10px;
  border-radius: 10px;
  outline: 0;
  font-family: Sans-serif;
  cursor: pointer;
  background-color:#9C27B0;
  transition: ease background-color 250ms ;
  border: 3px;
  margin: 10px 5px;

`

export const ButtonToggle = styled(Button)`
${({active}) => active && `
  background-color:#311b92;
  `}
`

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
const ContentButton = () => {
    return(
        
            <ToggleGroup />
        
        
    );
}
export default ContentButton

