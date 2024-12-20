import styles from './Technologies.module.css'
import cont from '../../../container.module.css'
import TechnologComp from './TechnologComp/TechnologComp'
import Modalinfo from './ModalInfo/ModalIfno.jsx'
import { useState } from 'react'
import Slider from './Slider/slider.jsx'


export default function Technologies(props) {
    const [isActive, setisActive] = useState(styles.notactive)
    const [selectedTech, setSelectedTech] = useState(null)
    const Stack = props.data.techIfo.map((el, index) => {
        return (
            <TechnologComp
                key={index}
                title={el.title}
                text={el.text}
                handleActive={() => handleActive(el.title)}
            />
        )
    })
    function handleActive(title) {
        if (isActive === styles.notactive) {
            const techInfo = props.data.dataInfo.find(item => item.title.toLowerCase() === title.toLowerCase())
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
                    
                    <Slider data={props.data} />
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