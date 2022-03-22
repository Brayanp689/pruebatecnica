import React from "react";
import DataUserObj from '/Users/braya/prueba/src/DataUser.json'
import { Button } from "./ContentButton";

const DataUser = Object.values(DataUserObj)[0];

const Content3 = () => {
    function handleSubmit(e) {
        e.preventDefault();
      }
    return(
        <>
        <Button onClick={handleSubmit}>
            Module 3
        </Button>
         <p >{(`Number of users in module 3: ${(DataUser["authz.provider_3"])}`)}</p>
         </>
    );
}
export default Content3