import React from "react";
import { Counter } from "./compontes/Counter";
import { RepositoryList } from "./compontes/RepositoryList";

function App(){
    return (
        <>
            <RepositoryList/>
            <Counter/>
        </>
    )
}

export {App}