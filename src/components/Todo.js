import React from "react";

const Todo = (props) => {
    const handleClick = () => {
        props.toggleComplete(props.item.id);
    };

    return (
        <div
            onClick={handleClick}
            className={`item${props.item.completed ? " completed" : ""}`}
        >
            <ul>
                <li>{props.item.task}</li>
            </ul>

        </div>
    );
};

export default Todo;