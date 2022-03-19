import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setTodoList((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    console.log(todoList);
    return (
        <div>
            <h1>My To-Do List ({todoList.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your 'To-Do'..."
                />
                <button>Add to the list</button>
            </form>
        </div>
    );
}

export default App;
