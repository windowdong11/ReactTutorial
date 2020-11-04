import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

const SetNameContext = React.createContext(() => { })
const NameContext = React.createContext('')

const AgeContext = React.createContext({ age: 0, setAge: () => { } })

function NameArea() {
    return (
        <SetNameContext.Consumer>
            {
                setName =>
                    <NameContext.Consumer>
                        {
                            name => (
                                <>
                                    <p>{name}</p>
                                    <input onChange={e => setName(e.target.value)} value={name}></input>
                                </>
                            )
                        }
                    </NameContext.Consumer>
            }
        </SetNameContext.Consumer>
    )
}

function AgeArea() {
    return (
        <AgeContext.Consumer>
            {
                ({ age, setAge }) =>
                    <>
                        <p>{age}</p>
                        <input onChange={e => {
                            let value = parseInt(e.target.value)
                            if(isNaN(value))
                                value = 0
                            setAge(value)
                        }} value={age}></input>
                    </>
            }
        </AgeContext.Consumer>
    )
}

function Profile() {
    return (
        <>
            <NameArea></NameArea>
            <AgeArea></AgeArea>
        </>
    )
}

export default function ContextAPI() {
    const [name, setName] = useState('name')
    const [age, setAge] = useState(0)
    const ageContextValue = { age, setAge }
    return (
        <AgeContext.Provider value={ageContextValue}>
            <SetNameContext.Provider value={setName}>
                <NameContext.Provider value={name}>
                    <Profile></Profile>
                </NameContext.Provider>
            </SetNameContext.Provider>
        </AgeContext.Provider>
    )
}