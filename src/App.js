import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => {
        setKeyword(event.target.value);
    };

    useEffect(() => {
        console.log("Calling the API...");
    }, []);
    useEffect(() => {
        if (keyword !== "") {
            console.log("I run when 'keyword' changes");
        }
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes");
    }, [counter]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
            <h1>{counter}</h1>
            <button onClick={onClick}>Click Me!</button>
        </div>
    );
}

export default App;
