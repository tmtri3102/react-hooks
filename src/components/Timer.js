import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
       if (timer <= 0) return;
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timer])
    return (
        <div>
            {timer === 0 ? 'Countdown finished!' : 'Counting down...'}<span>
            {timer}</span>
        </div>
    );
};

export default CountdownTimer;