import { Link } from 'react-router-dom'
import styles from "../../CharacterCard/CharacterCard.module.css"
export const LocationCard = ({location}) => {
    return(
        <article className={styles.card}>
            <div>
            <h3 className={styles.title}>{location.dimension}</h3>
            <h4 className={styles.title}>{location.name}</h4>
            <p className={styles.info}>{location.type}</p>
            <p>Nº de residentes {location.residents.length}</p>
             <Link to={`/location/${location.id}`}>Ver Detalle</Link>
            </div>
        </article>
    )
}
