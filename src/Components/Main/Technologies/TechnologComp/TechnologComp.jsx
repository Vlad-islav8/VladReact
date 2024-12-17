import styles from './TechnologComp.module.css'

export default function TechnologComp(props) {
    return (
        <div className={styles.techItem} onClick={props.handleActive}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}