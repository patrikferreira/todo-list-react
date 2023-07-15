"use client"
import React, { useState } from 'react'
import styles from '../page.module.css'
import Task from './Task'
import Input from './Input'

type TaskObj = {
    name: string,
    id: number,
    isCheck: boolean,
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
                isCheck: false,
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

    function checkTask(id: number) {
        const updateTasks = tasks.map(task => {
            if(task.id === id) {
                return {...task, isCheck: !task.isCheck}
            } else {
                return task;
            }
        })
        setTasks(updateTasks);
    } 
    

    return (
        <div className={styles.todoList}>
            <ul className={styles.list}>
                {tasks.map(task => {
                    const taskStyle = task.isCheck ? styles.completedTask : styles.taskLi;
                    return <Task name={task.name} key={task.id} taskStyle={taskStyle} deleteTask={() => {
                        deleteTask(task.id);
                    }} checkTask={() => {
                        checkTask(task.id);
                    }}  />
                })}
            </ul>

            <div className={styles.formDiv}>
                <Input sendInputValue={getInputValue} inputValueText={taskName}/>
                <button onClick={addTask}><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}
