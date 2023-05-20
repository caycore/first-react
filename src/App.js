import React, {
    useEffect,
    useState
} from "react";
import {
    Button
} from "./components";



const App = () => {
    const [test, setTest] = useCustomHook(0);

    const artir = () => {
        setTest(test + 1);
    }

    const azalt = () => {
        setTest(test - 1);
    }

    return <div>
        <Button
                title="0"
                color="#f0f0f0"
                titleColor="#000"
                onClick={() => {
                    alert("coo");
                }}
                icon={<img
                    src="https://www.freeiconspng.com/uploads/home-icon-png-31.png"
                    style={{
                        objectFit: "cover",
                        height: 20,
                        width: 20
                    }}
                />}
            />
            {
                test > 5 ?
                    <Button
                        variant="outline"
                        color="red"
                        title="1"
                    />
                :
                    null
            }
            <Button
                title="2"
                icon={<img
                    src="https://www.freeiconspng.com/uploads/home-icon-png-31.png"
                    style={{
                        objectFit: "cover",
                        height: 20,
                        width: 20
                    }}
                />}
            />
            <Button
                variant="ghost"
                color="red"
                title="3"
            />
            <Button
                title="4"
            />
            <Button
                title="5"
            />
        <button onClick={azalt} style={{
            fontSize: 50
        }}>-</button>
        <div style={{
            fontSize: 50
        }}>
            {test}
        </div>
        <button onClick={artir} style={{
            fontSize: 50
        }}>+</button>
    </div>;
};
export default App;
