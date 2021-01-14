import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    return (
        <div className="todo_list">
            {props.list.map( (item) => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleComplete={props.toggleComplete}
                />
            ))}
            <button className="clear_butn" onClick={props.clearComplete}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
