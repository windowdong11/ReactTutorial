import React, { useState } from 'react'

const NameContext = React.createContext({ name: 'name', setName: () => { } })

function NameArea() {
    return (
        <div>
            <NameContext.Consumer>
                {
                    ({ name, setName }) => (
                        <div>
                            <p>{name}</p>
                            <input onChange={e => setName(e.target.value)} value={name}></input>
                        </div>
                    )
                }
            </NameContext.Consumer>
        </div>
    )
}


const NoReRender = React.memo(() => {
    return (
        <div>
            <p>여기는 다시 렌더링 되지 않는다.<br />
            따라서 성능 최적화 할때 쓰라는 뜻<br />
            React.memo로 만들어지고, 속성값이 없기 때문이라는데,<br />
            "나중에 여기에 내용추가"</p>
            <NameArea></NameArea>
        </div>
    )
})


export default function ReactMemo() {
    const [name, setName] = useState('name')
    return (
        <NameContext.Provider value={{ name, setName }}>
            <NoReRender></NoReRender>
        </NameContext.Provider>
    )
}