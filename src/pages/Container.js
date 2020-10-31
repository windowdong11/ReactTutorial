import React, { useState } from 'react'

export default function Container() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
    )
}
