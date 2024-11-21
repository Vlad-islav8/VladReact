import React from "react";
import styles from './Mainhead.module.css'
import cont from '../../../../container.module.css'
import reactImg from '../../Mainhead/react.png'
import jsImg from '../../Mainhead/js.svg'
import sassImg from '../../Mainhead/sass.svg'
import htmlImg from '../../Mainhead/html.svg'
import cssImg from '../../Mainhead/css.svg'
import gitImg from '../../Mainhead/git.svg'



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
                    <img src={require('../../Mainhead/im.png')} alt="Profile Image"/>
                </div>
            </div>

        </div>
    )
}

export default Mainhead