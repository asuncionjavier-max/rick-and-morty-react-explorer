import { useParams } from "react-router-dom";
import styles from "./CharacterDetailPage.module.css"
import { Character } from "../../component/CharacterID/CharacterId";

function CharacterDetailPage () {
   const {characterId} = useParams()
    return (
        <main>
            <Character characterId={characterId} />
        </main>
    )
}

export default CharacterDetailPage