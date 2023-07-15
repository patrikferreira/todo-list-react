"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Todo from './components/Todo'


export default function Home() {
  const [homeActive, setHomeActive] = useState<boolean>(true);
  const [msg, setMsg] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  function heandleClick() {
    setHomeActive(false);
  }

  function handleTodoMsg(todoMsg: string) {
    setMsg(todoMsg);
  }

  function count(amount: number) {
    setAmount(amount);
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          {homeActive === false ? (<span className={styles.amount}><i className="fa-solid fa-thumbtack"></i>{amount + '/8'}</span>) : (<span></span>)}
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
        ) : (<Todo sendTodoMsg={handleTodoMsg} count={count}/>)}
        
      </div>
      <div className={styles.msg}>
        <p>{msg}</p>
      </div>
    </main>
  )
}
