import React from "react";
import DataUserObj from '/Users/braya/prueba/src/DataUser.json'
import { Button } from "../ContentButton/ContentButton";
const DataUser = Object.values(DataUserObj)[1];
const Auth_Content1 = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log((`Number of users in module 1: ${(DataUser["authn.provider_1"])}`))

      }
    return(
        <>
        <Button onClick={handleSubmit}>
            Module 1
        </Button>
        </>

    );
}
export default Auth_Content1