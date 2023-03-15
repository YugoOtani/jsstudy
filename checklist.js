import './App.css';
import React, { useState } from "react"

function App() {
    const [itms, setItem] = useState([{ item: "sample", checked: false }]);
    const [input, setInput] = useState("")
    return <>
        <div>
            <input type="texterea" value={input} onInput={({ target }) => setInput(target.value)}></input>
            <button onClick={() => { setItem([...itms, { item: input, checked: false }]); setInput(""); }}>add</button>
            <button onClick={() => setItem(itms.filter(({ checked }) => !checked))}>delete</button>
        </div>
        {itms.map(({ item, checked }, i) =>
            <div key={i}>
                <input type="checkbox" checked={checked} onChange={() => {
                    let itms2 = [...itms];
                    itms2[i].checked = !checked;
                    setItem(itms2);
                }} />
                {item}
            </div>)
        }

    </>
}



export default App;
