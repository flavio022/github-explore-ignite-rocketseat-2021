import { useState,useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

const repository = {
    name : 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){

    const [respositories, setRepositories] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(respose => respose.json())
        .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {
                    respositories.map(repository =>{
                        return  <RepositoryItem key={repository.name} repository={repository}/>

                    })
                }

            </ul>
        </section>
    )
}
