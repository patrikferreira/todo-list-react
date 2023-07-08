import { useState } from "react";
import styles from "../page.module.css"

type Props = {
    name: string,
}

export default function Task({name}: Props) {
    const [idTask, setIdTask] = useState<number>(0);

    return <>
        <div className={styles.taskDiv}>
            <div>
                <div className={styles.item}>&#10003;</div>
                <li>{name}</li>
            </div>

            <div>
                <div className={styles.item}>&#9998;</div>
                <div className={styles.item}>&#128465;</div>
            </div>
        </div>
    </>
}