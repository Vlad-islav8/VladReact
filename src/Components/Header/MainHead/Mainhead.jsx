import React from "react";
import styles from './Mainhead.module.css'
import cont from '../../../container.module.css'
import reactImg from '../../../img/Header/Mainhead/react.png'
import jsImg from '../../../img/Header/Mainhead/js.svg'
import sassImg from '../../../img/Header/Mainhead/sass.svg'
import htmlImg from '../../../img/Header/Mainhead/html.svg'
import cssImg from '../../../img/Header/Mainhead/css.svg'
import gitImg from '../../../img/Header/Mainhead/git.svg'
import meImage from '../../../img/Header/Mainhead/im.png'

function Mainhead() {
    return (
        <div className={cont.container}>
            <div className={styles.mainhead} id='mainhead'>
                <div className={styles.maininfo}>
                    <div className={styles.reactLogoWrapper}>
                        <img src={reactImg}/>
                        <img src={jsImg}/>
                        <img src={sassImg}/>
                    </div>
                    <div>
                        <h1>Frontend разработчик</h1>
                        <h2>
                            <span className={styles.rowLeft}>&lt;</span>
                            <span className={styles.textInfo}>vlad islav /</span>
                            <span className={styles.rowRight}>&gt;</span></h2>
                        <button>обо мне</button>
                    </div>
                    <div className={styles.reactLogoWrapper}>
                        <img src={htmlImg}/>
                        <img src={cssImg}/>
                        <img src={gitImg}/>
                    </div>
                </div>

                <div className={styles.imgWrapper}>
                    <img src={meImage} alt="Profile Image"/>
                </div>
            </div>

        </div>
    )
}

export default Mainhead