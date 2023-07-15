"use client"
import React, { useState } from 'react'
import styles from '../page.module.css'

type Props = {
  name: string,
  deleteTask: () => void,
  checkTask: () => void,
  editTask: () => void,
  taskStyle: string,
}

export default function Task({name, deleteTask, checkTask, editTask, taskStyle}: Props) {
  
  return (
    <div className={styles.taskDiv}>
      <div className={styles.itens}>
        <span className={styles.check} onClick={checkTask}><i className="fa-solid fa-check"></i></span>
        <li className={taskStyle}>{name}</li>
      </div>

      <div className={styles.itens}>
        <span className={styles.edit} onClick={editTask}><i className="fa-solid fa-pen-to-square"></i></span>
        <span className={styles.delete} onClick={deleteTask}><i className="fa-solid fa-trash"></i></span>
      </div>
    </div>
  )
}
