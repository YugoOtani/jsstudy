import './App.css';
import React, { useState } from "react"
import { FaStar, FaTrash } from "react-icons/fa"

let data = [
    {
        "id": 1,
        "title": "rust",
        "color": "#00c4e2",
        "rating": 5
    },
    {
        "id": 2,
        "title": "scala",
        "color": "#26ac56",
        "rating": 3
    },
    {
        "id": 3,
        "title": "swift",
        "color": "#ff0000",
        "rating": 2
    }
]

export default function App() {
    const [colors, setColors] = useState(data);
    return <ColorList
        colors={colors}
        onRemove={(id) => setColors(colors.filter(c => c.id !== id))}
        onClickStar={(id, rating) => {
            setColors(colors.map(c => c.id === id ? { ...c, rating } : c));
        }
        }
    />
}
const ColorList = ({ colors = [], onRemove = f => f, onClickStar = f => f }) => {
    if (colors.length === 0) return <div>no color</div>
    else return <div>{
        colors.map(c => <Color key={c.id} {...c} onRemove={onRemove} onClickStar={onClickStar} />)
    }</div>
}
const Color = ({ id, title, color, rating, onRemove = f => f, onClickStar = f => f }) => {
    return <section>
        <h1>{title}</h1>
        <button onClick={() => onRemove(id)} ><FaTrash /></button>
        <div style={{ height: 50, backgroundColor: color }}></div>
        <StarRating selected={rating} onClickStar={rating => onClickStar(id, rating)}></StarRating>
    </section>
}
const StarRating = ({ selected = 0, all = 5, onClickStar = f => f }) => {
    return <>
        {[...Array(all)].map((n, i) => (<Star key={i} selected={i < selected} onSelect={() => onClickStar(i + 1)} />))}
        <p>{selected} of {all} stars</p>
    </>
}
const Star = ({ selected = false, onSelect = f => f }) =>
    (<FaStar color={selected ? "red" : "gray"} onClick={onSelect} />);
