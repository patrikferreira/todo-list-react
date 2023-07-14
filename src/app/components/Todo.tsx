"use client"
import React, { useState } from 'react'
import styles from '../page.module.css'
import Task from './Task'
import Input from './Input'

type TaskObj = {
    name: string,
    id: number,
}

export default function Todo() {
    const [tasks, setTasks] = useState<TaskObj[]>([]);
    const [taskName, setTaskName] = useState<string>('');
    const [id, setId] = useState<number>(1);

    function getInputValue(inputValue: string) {
        setTaskName(inputValue);
    }

    function addTask() {
        const newTask: TaskObj = {
            name: taskName,
            id: id,
        }
        setTasks([...tasks, newTask]);
        setTaskName('');
        setId(id + 1);
        console.log(id)
    }

    return (
        <div className={styles.todoList}>
            <ul className={styles.list}>
                {tasks.map(task => {
                    return <Task name={task.name} key={task.id}/>
                })}
            </ul>

            <div className={styles.formDiv}>
                <Input sendInputValue={getInputValue} inputValueText={taskName}/>
                <button onClick={addTask}><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}
