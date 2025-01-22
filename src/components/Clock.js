import useClock from "./useClock";
export default function Clock(){
    const [time, ampm] = useClock();
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{time}:<span>{ampm}</span></h1>

        </div>
    )
}