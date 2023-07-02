import { useState } from "react";
import styles from "../page.module.css"

type Props = {
    name: string;
}

export default function Task({name}: Props) {
    const [idTask, setIdTask] = useState<number>(0);

    return <>
        <div className={styles.taskDiv}>
            <div>
                <li>{name}</li>
            </div>
        </div>
    </>
}