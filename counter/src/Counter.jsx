
import { useState } from 'react'
const Counter = (props) => {


    const [count, setCount] = useState(0)

    return (
        <>
            <h2>
                {props.text}
            </h2>
            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
                <p>{count * 2}</p>
            </div>
        </>

    )
}
export default Counter