"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Todo from './components/Todo'


export default function Home() {
  const [homeActive, setHomeActive] = useState<boolean>(true);

  function heandleClick() {
    setHomeActive(false);
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span></span>
          <span>Todo List</span>
        </div>

        {homeActive ? (
          <div className={styles.homePage}>
            <div className={styles.imgHomePage}>
              <img src="assets/bg.png" alt="" />
            </div>
            <div className={styles.description}>
              <h3>Welcome to Todo List</h3>
              <p>Lets start!</p>
            </div>
            <div className={styles.startDiv}>
              <button className={styles.startButton} onClick={heandleClick}><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>
        ) : (<Todo />)}
        
      </div>
    </main>
  )
}
