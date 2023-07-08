"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Task from './components/Task';
import Input from './components/Input';

type TaskObj = {
  name: string,
  id: number,
}


export default function Home() {
  const [tasks, setTasks] = useState<TaskObj[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  function insertNewTask(task: TaskObj) {
    setTasks([...tasks, task]);
    setTaskName('');
  }

  function getInputValue(inputValue: string) {
    setTaskName(inputValue);
  }
  
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Todo List</h1>
        </div>
  
        <div className={styles.newTask}>
          <Input sendInputValue={getInputValue} inputValueText={taskName}/>
          <button onClick={() => {
            insertNewTask({name: taskName, id: 1})
          }}>&#43;</button>
        </div>

        <div className={styles.taskList}>
          <ul className={styles.taskListUl}>
            {tasks.map(task => {
              return <Task name={task.name} />
            })}
          </ul>
        </div>

      </div>

      <span className={styles.msg}>{msg}</span>
    </main>
    
  )
}
