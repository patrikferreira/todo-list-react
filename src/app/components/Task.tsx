"use client"
import React, { useState } from 'react'
import styles from '../page.module.css'

type Props = {
  name: string,
  deleteTask: () => void;
}

export default function Task({name, deleteTask}: Props) {
  

  return (
    <div className={styles.taskDiv}>
      <div className={styles.itens}>
        <span className={styles.check}><i className="fa-solid fa-check"></i></span>
        <li>{name}</li>
      </div>

      <div className={styles.itens}>
        <span className={styles.edit}><i className="fa-solid fa-pen-to-square"></i></span>
        <span className={styles.delete} onClick={deleteTask}><i className="fa-solid fa-trash"></i></span>
      </div>
    </div>
  )
}
