import React, { useState } from 'react';

import Input from './Input';
import TaskList from './TaskList';



// task
// { id: 2, title: 'neki task', completed: false }

let lastId = 0;

// Napravili 3 razlicite varijable da mozemo usporedivati i nemoramo u state to pisat jer nisu potrebne tamo
const ALL = 'ALL';
const ACTIVE = 'ACTIVE';
const COMPLETED = 'COMPLETED';

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
    lastId++; // sluzi za pracenje koji nam je id zadnji
    const newTask = { id: lastId, title: taskText, completed: false };
    setTasks([...tasks, newTask]); // svi taskovi plus novi
  }

  const clearCompleted = () => {
    const newTasksList = tasks.filter(t => t.completed === false);
    setTasks(newTasksList);
  }

  const deleteTask = (taskId) => {
    const newTasksList = tasks.filter(t => t.id !== taskId); // ostavi mi sve koji nisu taj task nacin razmisljanja
    setTasks(newTasksList);
  }

  const toggleCompleteTask = (taskId) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.find(t => t.id === taskId);
    if(task.completed) {
        task.completed = false;
    }else {
      task.completed = true;
    }
    // druga 2 načina za toggle
    // task.completed = (task.completed ? false : true);
    // task.completed = !task.completed; ak je ovo false onda je true, ak je true onda ce ispast false

    setTasks(tasksCopy);
  }

  const getFiltered = () => {
    if(filter === ALL) {
      return tasks;
    }

    if (filter === ACTIVE) {
      return tasks.filter(t => t.completed === false);
    }

    if (filter === COMPLETED) {
      return tasks.filter(t => t.completed);
    }
  }

  const shouldShowCompleted = () => { 
    return tasks.find(t => t.completed);
  }

  const getStyle = (koji) => {
    if(koji === filter) {
      return {backgroundColor: 'green'}
    }
  }

  return (
    <div>
      <h1>T O D O</h1>
      <section>
        <button style={getStyle(ALL)} onClick={showAll}>All</button>
        <button style={getStyle(ACTIVE)} onClick={showActive}>Active</button>
        <button style={getStyle(COMPLETED)} onClick={showCompleted}>Completed</button>
      </section>
      <Input onNewTask={handleTaskAdd} />
      <TaskList taskovi={getFiltered()} onDelete={deleteTask} onCompleteToggle={toggleCompleteTask} />
      {shouldShowCompleted() && (<div onClick={clearCompleted}>Clear completed</div>)}
    </div>
  );
}

export default App;

// kad se getFiltered ide renderirat otic ce do funkcije gore i pozvat ce funkcinju jer sm ostavili ()
// filter ce uvijek vratit listu
// browser je standardni i nema #
// hashrouter ima #, sve poslije ljestvi ko da i ne piše ako se browsera tiče 