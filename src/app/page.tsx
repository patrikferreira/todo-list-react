"use client"
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>&#9633;</span>
          <span>Todo List</span>
        </div>
      </div>
    </main>
  )
}
