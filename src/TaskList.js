import React from 'react';
import TaskItem from './TaskItem';


export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { taskovi, onCompleteToggle, onDelete } = this.props
        return (<div>
                {taskovi.map(t => <TaskItem key={t.id}
                                                 onCompleteToggle={onCompleteToggle}
                                                onDeleteTask={onDelete} // ide u app , ali dolazi iz taskitema
                                                       task={t} />)} 
        </div>)
    }
}

// šaljemo cijeli task u taskItem komponentu