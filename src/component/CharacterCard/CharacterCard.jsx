import styles from './CharacterCard.module.css'
export const CharacterCard = ({character}) => {
    return(
        <article className={styles.card}>
            <img src={character.image} alt="character image" className={styles.image} />
            <div>
            <h3 className={styles.title}>{character.name}</h3>
            <p className={styles.info}>Status: {character.status}</p>
            <p className={styles.info}>Specie:{character.species}</p>
            <p className={styles.info}> Origin: {character.origin?.name}</p>
            <p className={styles.info}>Location: {character.location.name}</p>
            </div>
        </article>
    )
}


