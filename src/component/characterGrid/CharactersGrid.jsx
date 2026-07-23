import { useFetch } from "../../Hooks/useFetch";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import styles from './CharactersGrid.module.css'

export const CharactersGrid = () =>{
    const {data: characters , loading, error} = useFetch('/character')
    if(loading) return <div>Cargando a los personajes del universo C-137...</div>;
    if(error) return <div>¡ Error !: {error}</div>
     
    return (
        <section className={styles.grid}>
            {characters?.map((c) => (
            <CharacterCard key={c.id} character={c} />
            ))}
        </section>
    )
}