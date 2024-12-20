import styles from "./footer.module.css";
import cont from "../../container.module.css";
export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={cont.container}>
                <div className={styles.footerContent}>
                    <div className={styles.networkLinks}>
                        <a href="https://t.me/Mylitlezummer" className={styles.link}>
                            <img src="https://img.icons8.com/?size=100&id=98970&format=png&color=b3b3b3" alt="tgLogo" />
                        </a>
                        <a href="https://vk.com/vlados.fedorov" className={styles.link}>
                            <img src="https://img.icons8.com/?size=100&id=Hqa12wegGDjD&format=png&color=b3b3b3" alt="wkLogo" />
                        </a>
                        <a href="https://github.com/Vlad-islav8" className={styles.link}>
                            <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=b3b3b3" alt="githubLogo" />
                        </a>
                    </div>
                    <p>Vlad Islav</p>
                    <h4>Frontend developer</h4>
                    <h2>&copy; 2024 Vlad Islav. Все права защищены.</h2>
                </div>
            </div>
        </div>
    );
}
