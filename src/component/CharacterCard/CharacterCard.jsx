import { Link } from 'react-router-dom'
import styles from './CharacterCard.module.css'
export const CharacterCard = ({character}) => {
    return(
        <article className={styles.card}>
            <img src={character.image} alt="character image" className={styles.image} />
            <div>
            <h3 className={styles.title}>{character.name}</h3>
            <p className={styles.info}>Status: {character.status}</p>
            <Link to={`/character/${character.id}`}>Ver Detalle</Link>
            </div>
        </article>
    )
}


