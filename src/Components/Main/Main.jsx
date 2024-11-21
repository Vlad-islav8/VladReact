import React from "react";
import styles from './Main.module.css'
import {Aboutme} from "./Aboutme/Aboutme";


export function Main() {
    return (
        <div className={styles.main}>
            <Aboutme />
        </div>
    )
}
