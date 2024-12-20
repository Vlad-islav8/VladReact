import React from "react";
import styles from './Main.module.css'
import {Aboutme} from "./Aboutme/Aboutme";
import Technologies from "./Technologies/Technologies";


export function Main(props) {
    return (
        <div className={styles.main}>
            <Aboutme />
            <Technologies data={props.state.data}/>
        </div>
    )
}
