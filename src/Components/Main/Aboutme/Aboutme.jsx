import React from "react";
import styles from './aboutme.module.css'
import cont from '../../../container.module.css'
import mePhoto1 from '../../../img/Main/me.jpg'
import mePhoto2 from '../../../img/Main/me2.jpg'
import mePhoto3 from '../../../img/Main/me3.jpg'
import mePhoto4 from '../../../img/Main/me4.jpg'
import why from '../../../img/Main/Why.png'
import whyIcons from '../../../img/Main/whyIcon.svg'
import {NavLink, Routes, Route} from "react-router-dom";

export function Aboutme() {
    return (
        <div className={styles.aboutme}>
            <div className={cont.container}>
                <div className={styles.aboutmeHead}>
                    <span>О себе</span>
                </div>

                <div className={styles.aboutmeWrapper}>
                    <div className={styles.imageWrapper}>
                        <Routes>
                            <Route path='' element={<img src={why} alt="MePhoto"/>}/>
                            <Route path='/image1' element={<img src={mePhoto1} alt="MePhoto"/>}/>
                            <Route path='/image2' element={<img src={mePhoto2} alt="MePhoto"/>}/>
                            <Route path='/image3' element={<img src={mePhoto3} alt="MePhoto"/>}/>
                            <Route path='/image4' element={<img src={mePhoto4} alt="MePhoto"/>}/>
                        </Routes>

                    </div>
                    <div className={styles.textWrapper}>
                        <ul className={styles.infoList}>
                            <NavLink to='/image1' className={styles.infoListItem}>
                                <img src={whyIcons}/>
                                <h3>Зовут меня Владислав.</h3>
                            </NavLink>

                            <NavLink to='/image2' className={styles.infoListItem}>
                                <img src={whyIcons} alt="картинка"/>
                                <h3>Я из города Магнитогорск. </h3>
                            </NavLink>
                            <NavLink to='/image3' className={styles.infoListItem}>
                                <img src={whyIcons} alt="картинка"/>
                                <h3>Мне 17 лет</h3>
                            </NavLink>
                            <NavLink to='/image4' className={styles.infoListItem}>
                                <img src={whyIcons} alt="картинка"/>
                                <h3>Фронтендом занимаюсь чуть больше года</h3>
                            </NavLink>
                        </ul>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.contactBtn}><a href="https://t.me/Mylitlezummer">Связаться со
                                мной</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}