import './App.css';
import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

function App() {
    return StarRate(5)
}
const Star = ({ selected = false, onSelected = f => f }) =>
    (<FaStar color={selected ? "red" : "gray"} onClick={onSelected} />);
const StarRate = ({ totalStars = 5 }) => {
    const [selected, onSelected] = useState(3);
    return [...Array(totalStars)].map((_, i) =>
        <Star key={i} selected={i < selected} onSelected={() => onSelected(i + 1)} />)
}
export default App;
