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
                <div className={styles.item}><i className="fa-solid fa-check"></i></div>
                <li>{name}</li>
            </div>

            <div>
                <div className={styles.item}><i className="fa-solid fa-pen-to-square"></i></div>
                <div className={styles.item}><i className="fa-solid fa-trash"></i></div>
            </div>
        </div>
    </>
}