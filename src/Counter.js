import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log('Count on state', count);
    return (
        <div> 
            <p>You clicked {count} time </p>
            <button onClick={() => setCount(count +1)}>
                Click to increment counter
            </button>
        </div>
    )
}

export default Counter