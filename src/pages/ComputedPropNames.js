import React, { useState } from 'react'

export default function ComputedPropNames() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    console.log({name, age})
    return (
        <div>
            <input onChange={e => setName(e.target.value)}></input>
            <input onChange={e => setAge(e.target.value)}></input>
            <p>콘솔 확인</p>
            <p>ES6+에 있는 계산된 속성명은<br/>콘솔로 보이는 것처럼<br/>속성명이 변수이름으로 자동적으로 지정됨</p>
        </div>
    )
}