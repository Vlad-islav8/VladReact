import React from "react";
import styles from './Header.module.css'
import {Navbar} from "./Navbar/Navbar";
import Mainhead from "./MainHead/Mainhead";
export function Header() {
    return (
        <div className={styles.header}>
            <div  >
                <Navbar />
                <Mainhead />
            </div>
        </div>
    )
}