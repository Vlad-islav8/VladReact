import React, { useState } from "react";
import styles from './Navbar.module.css'
import tgIcon from '../../../img/Header/Navbar/tgIcon.svg'
import vkIcon from '../../../img/Header/Navbar/vkIcon.svg'
import cont from '../../../container.module.css'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbarPos}>
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
                        <a className={`${styles.logoWrapper} ${styles.tgLogo}`} href='https://t.me/Mylitlezummer '
                           target="_blank">
                            <img src={tgIcon} alt='tg'/>
                        </a>
                        <a className={`${styles.logoWrapper} ${styles.vkLogo}`} href='https://vk.com/vlados.fedorov'
                           target="_blank">
                            <img src={vkIcon} alt='vk'/>
                        </a>
                    </div>
                <div className={styles.burgerMenu}>
                    <button className={styles.burgerButton} onClick={toggleMenu}>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </button>
                    <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                        <a href='#'>Кнопка</a>
                    </div>
                </div>
                </div>
            </nav>
        </div>

    )
}