import React from "react";
import styles from './Header.module.css'
import {Navbar} from "./Navbar/Navbar";
import cont from '../../container.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={cont.container} >
                <Navbar />
            </div>
        </div>
    )
}