import React, {useState} from 'react';
import Input from './Input';
import TaskList from './TaskList';

let lastId = 0;

const ALL = "ALL";
const ACTIVE = "ACTIVE";
const COMPLETED = "COMPLETED";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(ALL);

  const showAll = () => {
    setFilter(ALL);
  }

  const showActive = () => {
    setFilter(ACTIVE);
  }

  const showCompleted = () => {
    setFilter(COMPLETED);
  }

  const handleTaskAdd = (taskText) => {
    lastId++;
    const newTask = { id: lastId, tittle: taskText, completed: false}
    setTasks([...tasks, newTask]);
  }

  const clearCompleted = () => {
    const newTasksList = tasks.filter(t=> t.completed === false); //filtriraj sve koji nisu completani i stavi ih unutra
    setTasks(newTasksList);

  }

  const deleteTask = (taskId) => {
    const newTasksList = tasks.filter(t=> t.id !== taskId); //filtriraj mi sve koji nisu taskId da ih ostavimo
    setTasks(newTasksList);
  }

  const toggleCompleteTask = (taskId) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.find(t => t.id === taskId); //find će naći samo prvog sa tim id, filter će nać sve sa tim id
    if(task.completed) {
      task.completed = false;
    }else {
      task.completed = true;
    }

    setTasks(tasksCopy);
    //druga dva načina za nap ovo gore
    // task.completed = (task.completed ? false : true)
    // task.completed = !task.completed
  }

  const getFiltered = () => {
    if(filter === ALL) {
      return tasks;
    }

    if(filter === ACTIVE) {
      return tasks.filter(t => t.completed === false); 
    }

    if(filter === COMPLETED) {
      return tasks.filter(t => t.completed);
    }
  }

    return (
      <div>
        <h1>Todo</h1>
        <section>
          <button onClick={showAll}>All</button>
          <button onClick={showActive}>Active</button>
          <button onClick={showCompleted}>Completed</button>
        </section>
        <Input onNewTask={handleTaskAdd} />
        <TaskList taskovi={getFiltered()} onDelete={deleteTask} onCompleteToggle={toggleCompleteTask} />
        <div onClick={clearCompleted}>Clear completed</div>
      </div>
    );
  }

export default App;

// da bi javio appu da je nes izbrisano onda prosljeduje event da tak sazna
//svaka promjena u stateu refresha