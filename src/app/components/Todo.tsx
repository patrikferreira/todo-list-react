"use client"
import React, { useState } from 'react'
import styles from '../page.module.css'
import Task from './Task'
import Input from './Input'

type TaskObj = {
    name: string,
    id: number,
}

type Props = {
    sendTodoMsg: (msg: string) => void;
}

export default function Todo({sendTodoMsg}: Props) {
    const [tasks, setTasks] = useState<TaskObj[]>([]);
    const [taskName, setTaskName] = useState<string>('');
    const [id, setId] = useState<number>(1);

    function getInputValue(inputValue: string) {
        setTaskName(inputValue);
    }

    function addTask() {
        if(tasks.length < 8 && taskName != '') {
            const newTask: TaskObj = {
                name: taskName,
                id: id,
            }
            setTasks([...tasks, newTask]);
            setTaskName('');
            setId(id + 1);
            sendTodoMsg('');
            console.log(id);
        } else if(tasks.length <8 && taskName == '') {
            return;
        } else {
            sendTodoMsg('Reached maximum tasks!');
            setTaskName('');
        }
    }

    function deleteTask(id: number) {
        const updateTasks = tasks.filter(task => task.id !== id);
        setTasks(updateTasks);
        sendTodoMsg('');
    }

    return (
        <div className={styles.todoList}>
            <ul className={styles.list}>
                {tasks.map(task => {
                    return <Task name={task.name} key={task.id} deleteTask={() => {
                        deleteTask(task.id);
                    }} />
                })}
            </ul>

            <div className={styles.formDiv}>
                <Input sendInputValue={getInputValue} inputValueText={taskName}/>
                <button onClick={addTask}><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}
