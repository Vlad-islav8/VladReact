import React from "react";
import styles from './Navbar.module.css'
import tgIcon from './img/tgIcon.svg'
import vkIcon from './img/vkIcon.svg'
import cont from '../../../container.module.css'

export function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={`${cont.container} ${styles.navbarCont}` }>
                    <div className={styles.logo}>
                        <a href='https://t.me/Mylitledummer' className={styles.logoHref} target="_blank">Vlad
                            Fedorov</a>
                    </div>

                    <div className={styles.navigation}>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                    </div>

                    <div className={styles.contacts}>
                        <a className={`${styles.logoWrapper} ${styles.tgLogo}`} href='https://vk.com/vlados.fedorov'
                           target="_blank">
                            <img src={tgIcon} alt='tg'/>
                        </a>
                        <a className={`${styles.logoWrapper} ${styles.vkLogo}`} href='https://t.me/Mylitlezummer'
                           target="_blank">
                            <img src={vkIcon} alt='vk'/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    )
}