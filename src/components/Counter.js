import {useState} from 'react'
export default function Counter() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickTwo = ()=>{
      setCount(count + 2);
  }
  return (
    <div>

      <p>Gia tri</p>
      <span>{count}</span>
      <button onClick={handleClick}>Increase + 1</button>
        <button onClick={handleClickTwo}>Increase + 2</button>
    </div>
  )
}
