import {
    useState
} from "react";

const App = () => {
    const [counter, setCounter] = useState(0);

    const artir = () => {
        setCounter(counter + 1);
    }

    const azalt = () => {
        setCounter(counter - 1);
    }

    return <div>
        <button onClick={azalt} style={{
            fontSize: 50
        }}>-</button>
        <div style={{
            fontSize: 50
        }}>
            {counter}
        </div>
        <button onClick={artir} style={{
            fontSize: 50
        }}>+</button>
    </div>;
};
export default App;
