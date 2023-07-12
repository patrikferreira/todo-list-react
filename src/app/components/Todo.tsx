"use client"
import React, { useState } from 'react'
import styles from '../page.module.css'

type Props = {
    sendUserActive: (user: boolean) => void,
}

export default function Todo({sendUserActive}: Props) {
    const [user, setUser] = useState<string>('');

    function heandleClick() {
        sendUserActive(true)
    }

    return (
        <div className={styles.todoList}>
        <div className={styles.header}>
            <button onClick={heandleClick}><i className="fa-solid fa-arrow-left"></i></button>
            <div className={styles.userDiv}>
                <span>{user}</span>
                <span>&#129302;</span>
            </div>
        </div>
        </div>
    )
}
