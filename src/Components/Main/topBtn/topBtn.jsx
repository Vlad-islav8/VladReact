import styles from './topBtn.module.css'
import arrow from '../../../img/Main/topArrow.svg'
import {useEffect, useState} from "react";

export default function TopBtn() {
    const [active, setactive] = useState(styles.notActive)
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 400) {
                setactive(styles.topBtn)
            } else {
                setactive(styles.notActive)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={active}>
            <a href="#mainhead">
                <img src={arrow} alt="Вверх"/>
            </a>
        </div>
    )
}