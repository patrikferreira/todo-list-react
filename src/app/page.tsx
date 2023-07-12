"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Todo from './components/Todo';
import User from './components/User';

export default function Home() {
  const [userActive, setUserActive] = useState<boolean>(true);

  function getCheckUser(user: boolean) {
   setUserActive(user);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {userActive ? (<User sendUserActive={getCheckUser} />) : (<Todo sendUserActive={getCheckUser} />)}
      </div>
    </main>
    
  )
}
