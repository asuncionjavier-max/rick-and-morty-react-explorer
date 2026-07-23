import styles from './Footer.module.css'
export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <p>  2026 | Javier Asunción | Datos obtenidos de {''}
                <a href="https://rickandmortyapi.com/" target="_blank " rel="noreferrer"
                >The Ricky and Morty API
                </a>
            </p>
        </footer>
    );
};