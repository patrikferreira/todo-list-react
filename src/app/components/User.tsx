"use client"
import { useState } from 'react'
import React from 'react'
import styles from '../page.module.css'

type Props = {
    sendUserActive: (user: boolean) => void,
}

export default function User({sendUserActive}: Props) {
    const [user, setUser] = useState<string>('');
    const [name, setName] = useState<string>('');

    function heandleClick() {
        setUser(name);
        sendUserActive(false);
    }

    return (
        <div className={styles.user}>
            <div className={styles.userForm}>
                <input type="text" placeholder='Username' onChange={(e) => {
                setName(e.target.value);
                }} />
                <button onClick={heandleClick}>Lets go!</button>
            </div>
        
        </div>
    )
}
