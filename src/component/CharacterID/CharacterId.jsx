import { useFetch } from "../../Hooks/useFetch";
import styles from "./CharacterId.module.css"


export const Character = ({characterId}) =>{
    const {data: character , loading, error} = useFetch(`/character/${characterId}`)
    if(loading) return <div>Cargando personaje del universo C-137...</div>;
    if(error) return <div>¡ Error !: {error}</div>
     
    return (
        <section  key={character.id} character={character}>
            <h3 className={styles.title}>{character.name}</h3>
            <img src={character.image} alt="character image" className={styles.image} />
            <div>
            <p className={styles.info}>Status: {character.status}</p>
            <p className={styles.info}>Specie: {character.species}</p>
            <p className={styles.info}> Origin: {character.origin?.name}</p>
            <p className={styles.info}>Location: {character.location?.name}</p>
            </div>
        </section>
    )
}