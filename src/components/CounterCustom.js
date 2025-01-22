// App.js
import React, { useState } from 'react';

// Custom Hook useIncrement
function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(prevCount => prevCount + addAmount);
    }

    return [count, increase];
}

// Counter 1 Component
function Counter1() {
    const [count, increase] = useIncrement(1);

    return (
        <div>
            <h2>Counter 1 (Tăng 1)</h2>
            <p>Count: {count}</p>
            <button onClick={increase}>
                Tăng
            </button>
        </div>
    );
}

// Counter 2 Component
function Counter2() {
    const [count, increase] = useIncrement(2);

    return (
        <div>
            <h2>Counter 2 (Tăng 2)</h2>
            <p>Count: {count}</p>
            <button onClick={increase}>
                Tăng
            </button>
        </div>
    );
}

// Main App Component
function CounterCustom() {
    return (
        <div>
            <h1>Demo Custom Hook useIncrement</h1>
            <div>
                <Counter1 />
                <Counter2 />
            </div>
        </div>
    );
}

export default CounterCustom;