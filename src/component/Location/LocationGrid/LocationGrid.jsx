import { useFetch } from "../../../Hooks/useFetch";
import { LocationCard } from "../LocationCard/LocationCard";
import styles from "../../CharacterGrid/CharactersGrid.module.css"

export const LocationGrid = () => {
const { data: location, loading, error} = useFetch('/location')
    if(loading) return <div>Cargando ciudades del universo C-137</div>
    if(error) return  <div> ¡ Error !: {error} </div>
    return (
        <section className={styles.grid}>
            {location?.map((l) =>(
                <LocationCard key={l.id} location={l} />
            ))}
        </section>
  )
}
