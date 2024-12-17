import styles from './Technologies.module.css'
import cont from '../../../container.module.css'
import TechnologComp from './TechnologComp/TechnologComp'
import data from './data.js'
import Modalinfo from './ModalInfo/ModalIfno.jsx'
import { useState } from 'react'

export default function Technologies() {
    let Stack = data.techIfo.map((el, index) => {
        return (
            <TechnologComp 
                key={index}
                title={el.title} 
                text={el.text} 
                handleActive={() => handleActive(el.title)}
            />
        )
    })

    const [isActive, setisActive] = useState(styles.notactive)
    const [selectedTech, setSelectedTech] = useState(null)
    function handleActive(title) {
        if (isActive === styles.notactive) {
            const techInfo = data.dataInfo.find(item => item.title.toLowerCase() === title.toLowerCase())
            setSelectedTech(techInfo)
            setisActive(styles.active)
        } else {
            setisActive(styles.notactive)
        }
    }
    return (
        <>
            <div className={styles.technologies}>
                <div className={cont.container}>
                    <div className={styles.techHead}>
                        <h2>Мой технологический стек</h2>
                    </div>

                    <div className={styles.techGrid}>
                        {Stack}
                    </div>
                </div>
            </div>
            <Modalinfo 
                handleActive={handleActive} 
                isActive={isActive}
                techInfo={selectedTech}
            />
        </>
    )
}