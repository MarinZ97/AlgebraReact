import React from 'react';
import PropTypes from 'prop-types';

export default function TaskItem({task, onDeleteTask, onCompleteToggle}) {
    const removeTask = () => {
        onDeleteTask(task.id);
    }

    const toggleComplete = () => {
        onCompleteToggle(task.id);
    }

    const getStyle = () => {
        if(task.completed) {
            return {textDecoration: 'line-through'};
        }
    }

    return (<div>
                <input type='checkbox' checked={task.completed} onChange={toggleComplete} />
                <span style={getStyle()} onClick={toggleComplete}>{task.title}</span>
                <button onClick={removeTask}>X</button>
            </div>);
}

// ide do style i dode do funkcije sa pozivom i kaze prvom moram pozvat funkciju da mogu nastavit dalje i sta staviti

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    onCompleteToggle: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
}
