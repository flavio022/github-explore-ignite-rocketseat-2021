import React from "react";
import { Counter } from "./compontes/Counter";
import { RepositoryList } from "./compontes/RepositoryList";
import './styles/global.scss'

function App(){
    return (
        <>
        <RepositoryList/>
        <Counter/>
        </>
    )
}

export {App}