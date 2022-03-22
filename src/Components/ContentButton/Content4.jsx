import React from "react";
import DataUserObj from '/Users/braya/prueba/src/DataUser.json'
import { Button } from "./ContentButton";

const DataUser = Object.values(DataUserObj)[0];

const Content4 = () => {
    function handleSubmit(e) {
        e.preventDefault();
      }
    return(
        <>
        <Button  className="button" onClick={handleSubmit}>
            Module 4
        </Button>
        <p>{(`Number of users in module 4: ${(DataUser["authz.provider_4"])}`)}</p>
        </>
    );
}
export default Content4