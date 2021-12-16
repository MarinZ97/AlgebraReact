import React from 'react';

export default function({task, onCompleteToggle, onDeleteTask}) {

    const removeTask = () => {
        onDeleteTask(task.id);
    }

    const toggleComplete = () => {
        onCompleteToggle(task.id);
    }

        const getStyle = () => {
            if(task.completed) {
                return {textDecoration: "line-through"}
            }
            return {color: 'green'}
        }


    return (<div>
            <input type="checkbox" checked={task.completed} onChange={toggleComplete}></input>
            <span style={getStyle()} onClick={toggleComplete}>{task.title}</span>
            <button onClick={removeTask}>X</button>
        
    </div>)
}
