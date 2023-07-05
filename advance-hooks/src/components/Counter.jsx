import { useState, useMemo } from 'react'

export default function Counter({ themeStyles }) {

    const [count, setCount] = useState(0);
    const double = useMemo(()=>getDouble(count),[count])

    //render

    return (
        <>
            <h2>Counter</h2>
            <div>

                <input style={themeStyles?.input} type="number" value={count} readOnly />
                <div>
                    <button onClick={() => setCount(count + 1)}>Agregar</button>
                </div>
                <div>
                    Double Counter: {double}
                </div>
            </div>
        </>
    )
}
const getDouble = (count) => {
    console.log('getdouble')
    for (let i = 0; i < 1000000000; i++) { }
    return count * 2
}