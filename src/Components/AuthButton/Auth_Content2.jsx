import React from "react";
import DataUserObj from '/Users/braya/prueba/src/DataUser.json'
import { Button } from "../ContentButton/ContentButton";
const DataUser = Object.values(DataUserObj)[1];

const Auth_Content2 = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log((`Number of users in module 2: ${(DataUser["authn.provider_2"])}`))

      }
    return(
        <>
        <Button onClick={handleSubmit}>
            Module 2
        </Button>
        </>

        
    );
}
export default Auth_Content2