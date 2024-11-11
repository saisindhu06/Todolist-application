import styles from "./footer.module.css"
export default function Footer({completedTodos,totalTodos})
{
    return <div className={styles.footer}>
        <span className={styles.css}>Completed Todos:{completedTodos}</span>
        <span className={styles.css}>Total Todos:{totalTodos}</span>
    </div>
}