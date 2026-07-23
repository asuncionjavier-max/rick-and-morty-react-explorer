import styles from "./Header.module.css"
export const Header = () =>{

    return(
        <header className={styles.header}>
            <div>
            <h1 className={styles.title}>Rick & Morty Explorer</h1>

            </div>

        </header>
    )

}