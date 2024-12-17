export default function Techinfo(props) {
    return(
        <div className={styles.techinfo}>
            <div className={styles.image}>
                <img src={props.url} alt="" />
            </div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}