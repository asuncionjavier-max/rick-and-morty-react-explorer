import styles from "./Header.module.css"
import { Link } from "react-router-dom"
export const Header = () =>{

    return(
        <header className={styles.header}>
            <div>
            <h1 className={styles.title}>Rick & Morty Explorer</h1>
            </div>
            <nav>
            <Link to={"/"} >Inicio</Link>
            </nav>

        </header>
    )

}