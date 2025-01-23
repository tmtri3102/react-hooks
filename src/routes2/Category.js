import {useNavigate} from 'react-router-dom';
export default function Category() {
    const navigate = useNavigate();
    const sendData = (e) => {
        navigate(`${e.target.value}`);
    }
    return (
        <>
            <select defaultValue="default" onChange={(e) => sendData(e)}>
                <option value="default" disabled hidden>
                    Choose a product
                </option>
                <option value="1">Toyota</option>
                <option value="2">Honda</option>
            </select>
        </>
    )
}