import {useState, useEffect} from 'react';

export default function Car() {

    const carList = ["Toyota", "BMW", "Mercedes"];
    const colorList = ["Black", "White", "Yellow"];

    const [selectedCar, setSelectedCar] = useState({car: "Toyota", color:"Black"});
    const changeCar = (name) =>{
        setSelectedCar(prevState => {return {car: name, color: prevState.color}});
    }
    const changeColor = (color) =>{
        setSelectedCar((prevState)=>{return {car: prevState.car, color: color}});
    }
    return (<>
        <h1>Select car option</h1>
        <p>Select a car</p>
        <select name="car" id="car" onChange={(e) => changeCar(e.target.value)}>
            {carList.map(car => (
                <option key={car} value={car}>{car}</option>
            ))}
        </select>
        <p>Select a color</p>
        <select name="color" id="color" onChange={(e) => changeColor(e.target.value)}>
            {colorList.map(color => (
                <option key={color} value={color}>{color}</option>
            ))}
        </select>
        <p>You selected a {selectedCar.car} with color {selectedCar.color}</p>
    </>)
}