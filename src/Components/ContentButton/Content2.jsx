import React from "react";
import DataUserObj from '/Users/braya/prueba/src/DataUser.json'
import { Button } from "./ContentButton";

const DataUser = Object.values(DataUserObj)[0];

const Content2 = () => {
    function handleSubmit(e) {
        e.preventDefault();
        <>
        <p >{(`Number of users in module 2: ${(DataUser["authz.provider_2"])}`)}</p>
        </>
      }
    return(
        <>
        <Button className="button" onClick={handleSubmit}>
            Module 2
        </Button>
        <p >{(`Number of users in module 2: ${(DataUser["authz.provider_2"])}`)}</p>

        </>
    );
}
export default Content2