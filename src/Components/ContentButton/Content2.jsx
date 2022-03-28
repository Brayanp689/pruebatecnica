import React from "react";
import DataUserObj from '/Users/braya/prueba/src/DataUser.json'
import { Button } from "./ContentButton";

const DataUser = Object.values(DataUserObj)[0];

const Content3 = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log((`Number of users in module 2: ${(DataUser["authz.provider_2"])}`))

      }
    return(
        <>
        <Button onClick={handleSubmit}>
            Module 3
        </Button>
         </>
    );
}
export default Content3