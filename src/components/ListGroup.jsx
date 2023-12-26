import React from "react";
import "./ListGroup.css";

function ListGroup({ title, items, onButtonClick }) {
    return (
        <div>
            <h5 className={"title " + title.toLowerCase()}>{title}</h5>
            <ul className="list-group">
                {items.map((todo) => {
                    return (
                        <li className={"list-group-item " + todo.status} key={todo.id}>
                            {todo.name}
                            {todo.status === "pending" && (
                                <button className="todo-btns next" onClick={()=>onButtonClick(todo)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="rgb(118, 209, 255)">
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </button>
                            )}
                            {todo.status === "ongoing" && (
                                <button className="todo-btns finish" onClick={()=>onButtonClick(todo)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="rgb(255, 201, 93)">
                                        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListGroup;
