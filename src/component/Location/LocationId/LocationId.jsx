import { useFetch } from "../../../Hooks/useFetch"

export const Location = ({locationId}) =>{
    const {data:location, loading, error} = useFetch(`location/${locationId}`)
        if(loading) return <div>Cargando planeta del universo C-137...</div>;
        if(error) return <div>¡ Error !: {error}</div>

        return (
            <section key={locationId} location={location}>
                <h3>{location.name}</h3>
                <h4>{location.type}</h4>
                <p>{location.dimension}</p>
                <p>Residentes conocidos: {location.residents?.length || 0}</p>


            </section>
        )
}