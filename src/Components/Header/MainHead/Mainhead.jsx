import React from "react";
import styles from './Mainhead.module.css'
import cont from '../../../container.module.css'

function Mainhead() {
    return (
        <div className={cont.container}>
            <div className={styles.mainhead}>
                <div className={styles.maininfo}>
                    <h1>Frontend разработчик</h1>
                    <h2>
                        <span className={styles.rowLeft}>&lt;</span>
                        <span className={styles.textInfo}>vlad islav /</span>
                        <span className={styles.rowRight}>&gt;</span></h2>
                    <button>обо мне</button>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={require('./img/im.png')} alt="Profile Image"/>
                </div>
            </div>

        </div>
    )
}

export default Mainhead