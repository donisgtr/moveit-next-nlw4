import styles from "../styles/componentes/Contdown.module.css"

export function Contdown() {
    return(
        <div className={styles.contdownContainer}>
            <div>
            <span>2</span>
            <span>5</span>
            </div>
            <span>:</span>
            <div>
            <span>0</span>
            <span>0</span>
            </div>
        </div>

    );
}