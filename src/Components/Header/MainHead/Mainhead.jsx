import React from "react";
import styles from './Mainhead.module.css'
import cont from '../../../container.module.css'
import reactImg from './img/react.png'
import jsImg from './img/js.svg'
import sassImg from './img/sass.svg'
import htmlImg from './img/html.svg'
import cssImg from './img/css.svg'
import gitImg from './img/git.svg'



function Mainhead() {
    return (
        <div className={cont.container}>
            <div className={styles.mainhead}>
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
                    <img src={require('./img/im.png')} alt="Profile Image"/>
                </div>
            </div>

        </div>
    )
}

export default Mainhead