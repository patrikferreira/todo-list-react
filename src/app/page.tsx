"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Task from './components/Task';

type Task = {
  name: string;
}


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.newTask}>
            <input type="text" name="" id="" placeholder='New task'/>
            <button>+</button>
          </div>
        </div>

        <div className={styles.taskList}>
          <ul className={styles.taskListUl}>

          </ul>
        </div>

        <div className={styles.myTasks}>
          <h1>My Tasks</h1>
        </div>
      </div>

      <span className={styles.msg}>{msg}</span>
    </main>
    
  )
}
