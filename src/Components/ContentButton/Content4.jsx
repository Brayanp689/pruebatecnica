import React from "react";
import DataUserObj from '/Users/braya/prueba/src/DataUser.json'
import { Button } from "./ContentButton";

const DataUser = Object.values(DataUserObj)[0];

const Content3 = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log((`Number of users in module 4: ${(DataUser["authz.provider_4"])}`))
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