import './App.css';
import React, { useState } from "react"
const initialData = [
    { id: 0, taskName: "sample", checked: false }
]
function App() {
    const [itms, setItem] = useState(initialData);
    const [input, setInput] = useState("");
    const [id, setId] = useState(1);
    return <>
        <div>
            <input type="texterea" value={input} onInput={({ target }) => setInput(target.value)}></input>
            <button onClick={() => {
                setItem([...itms, { id: id, taskName: input, checked: false }]);
                setInput("");
                setId(id + 1);
            }}> add </button>
            <button onClick={() => setItem(itms.filter(({ checked }) => !checked))}>delete</button>
        </div>
        {itms.map((itm) => <Item key={itm.id} {...itm} onCheck={() =>
            setItem(itms.map(itm2 => itm2.id === itm.id ? checkItem(itm2) : itm2))} />)}
    </>
}
const checkItem = itm => ({ ...itm, checked: !itm.checked })

const Item = ({ taskName, checked = false, onCheck = f => f }) =>
    <div>
        <input type="checkbox" checked={checked} onChange={onCheck} />
        {taskName}
    </div>

export default App;
