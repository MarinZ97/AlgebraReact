import React from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

export default class TaskList extends React.Component {
    render() {
        const { taskovi, onCompleteToggle, onDelete } = this.props;
        return (<div>
                    {taskovi.map(t => <TaskItem key={t.id} 
                                                onCompleteToggle={onCompleteToggle} 
                                                onDeleteTask={onDelete}
                                                task={t} />)}
                </div>);
    }
}

TaskList.propTypes = {
    taskovi: PropTypes.array.isRequired,
    onCompleteToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

// isRequired da nam je sve potrebno u ovom slučaju sve nam treba 