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
          <h1>Todo List</h1>
        </div>
  
        <div className={styles.newTask}>
          <input type="text" name="" id="" placeholder='New task' />
          <button>&#43;</button>
        </div>

        <div className={styles.taskList}>
          <ul className={styles.taskListUl}>
            <Task name='Exemplo 01' />
            <Task name='Exemplo 02' />
            <Task name='Exemplo 03' />
            <Task name='Exemplo 04' />
            <Task name='Exemplo 05' />
            <Task name='Exemplo 01' />
            <Task name='Exemplo 02' />
            <Task name='Exemplo 03' />
            <Task name='Exemplo 04' />
            <Task name='Exemplo 05' />
          </ul>
        </div>

      </div>

      <span className={styles.msg}>{msg}</span>
    </main>
    
  )
}
