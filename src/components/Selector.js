import {useState, useEffect} from 'react';
export default function Selector(){
    let [selected, setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState("");
    const choice = (e) => {
        setSelected(e.target.value);
    }
    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelected("Java");
            break;
            case "1":
                setValueSelected("PHP");
                break;
            case "2":
                setValueSelected("Typescript");
                break;
            case "3":
                setValueSelected("JavaScript");
                break;
            default:
        }
    }, [selected]);

    return (
        <div>
            <h1>Courses</h1>
            <select onChange={e => {
                choice(e)
            }}>
                <option value="0">Java</option>
                <option value="1">Php</option>
                <option value="2">Typescript</option>
                <option value="3">Javascript</option>
            </select>
            <h2>Your course: {valueSelected}</h2>
        </div>
    )
}