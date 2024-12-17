import styles from './ModalInfo.module.css'
import { useState } from 'react'

export default function Modalinfo(props) {
    const { techInfo } = props;

    return (
        <div className={`${styles.modal} ${props.isActive}`}>
            <div className={styles.exetBar}>
                <button onClick={() => props.handleActive()}>x</button>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.imageBlock}>
                    <img src={techInfo?.url || ''} alt={techInfo?.title || ''} />
                </div>
                <h2>{techInfo?.title || 'Заголовок'}</h2>
                <p>{techInfo?.text || 'Информация'}</p>
                <div className={styles.thankBtn}>
                    <button onClick={() => props.handleActive()}>Спасибо за Информацию</button>
                </div>
            </div>
        </div>
    )
}