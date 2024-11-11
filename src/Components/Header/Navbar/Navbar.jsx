import React from "react";
import styles from  './Navbar.module.css'
import tglogo from './img/tgIcon.png'
import wklogo from  './img/wkIcon.png'
export function Navbar() {
    return (
    <div>
        <nav className={styles.navbar}>
            <div className={styles.logo} >
                <a href='https://t.me/Mylitledummer' className={styles.logoHref}>Vlad Fedorov</a>
            </div>

            <div className={styles.navigation}>
                <a href='#'>Кнопка</a>
                <a href='#'>Кнопка</a>
                <a href='#'>Кнопка</a>
                <a href='#'>Кнопка</a>
                <a href='#'>Кнопка</a>
            </div>

            <div className={styles.contacts}>
                <div className={styles.aWrapper}>
                    <a href='https://t.me/Mylitledummer'>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z"
                              fill="#ffffff"></path>
                    </a>
                </div>
                <div className={styles.aWrapper}>
                    <a href='https://t.me/Mylitledummer'><img src={wklogo} alt='tg'/></a>
                </div>
            </div>
        </nav>
    </div>

    )
}