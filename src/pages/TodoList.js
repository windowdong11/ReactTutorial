import React, { useState } from 'react'

/*
input에서 onChange를 통해 입력값 desc에 저장
추가버튼 onClick를 통해 onAdd에서 desc와 id를 이용해 todoList에 추가, id증가
삭제버튼 data-id(사용자 지정 데이터 특성, custom data attributes)을 통해
e.target.dataset.id로 id를 가져오고, todoList의 filter(false인 값들만 남김)를 통해 해당 id를 필터링함
*/

export default function TodoList() {
    const [desc, setDesc] = useState("")
    const [id, setId] = useState(1)
    const [todoList, setTodoList] = useState([])
    function onAdd() {
        setTodoList([...todoList, {id, desc}])
        setId(id + 1)
    }
    function onDelete(e) {
        console.log(e.target.dataset)
        const id = Number(e.target.dataset.id)
        const newTodoList = todoList.filter(todo => todo.id !== id)
        setTodoList(newTodoList)
    }
    return (
        <div>
            <h3>목록</h3>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={onDelete}>삭제</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={desc} onChange={e => setDesc(e.target.value)}></input>
            <button onClick={onAdd}>추가</button>
        </div>
    )
}