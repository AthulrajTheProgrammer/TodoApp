import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import ListGroup from "./components/ListGroup";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [pendingTodoList, setPendingTodoList] = useState([]);
    const [ongoingTodoList, setOngoingTodoList] = useState([]);
    const [finishedTodoList, setFinishedTodoList] = useState([]);
    const add = () => {
        setPendingTodoList([...pendingTodoList, { id: Date.now(), name: inputValue, status: "pending" }]);
        setInputValue("");
    };
    const switchTodo = (from, to, todo) => {
        if (from === "pending" && to === "ongoing") {
            pendingTodoList.splice(pendingTodoList.indexOf(todo), 1);
            setPendingTodoList([...pendingTodoList]);
            setOngoingTodoList([...ongoingTodoList, todo]);
        } else {
            ongoingTodoList.splice(ongoingTodoList.indexOf(todo), 1);
            setOngoingTodoList([...ongoingTodoList]);
            setFinishedTodoList([...finishedTodoList, todo]);
        }
        todo.status = to;
    };
    return (
        <div className="App bg-dark">
            <InputArea value={inputValue} onChange={(e) => setInputValue(e.target.value)} onButtonClick={add} />
            <div className="lists">
                <ListGroup title="Pending" items={pendingTodoList} onButtonClick={(todo) => switchTodo("pending", "ongoing", todo)} />
                <ListGroup title="Ongoing" items={ongoingTodoList} onButtonClick={(todo) => switchTodo("ongoing", "finished", todo)} />
                <ListGroup title="Finished" items={finishedTodoList} />
            </div>
        </div>
    );
}

export default App;
