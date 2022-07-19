import { useState } from "react"

export function Counter(){

    const [counter, setCount] = useState(0); 

    function increment(){
        setCount(counter+1);
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}