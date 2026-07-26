import { CharactersGrid } from "../../component/characterGrid/CharactersGrid";
import { Footer } from "../../component/Footer/Footer";
import { Header } from "../../component/Header/Header";
import { LocationGrid } from "../../component/Location/LocationGrid/LocationGrid";

export const HomePage = () =>{
    return(
        <main>
            <CharactersGrid />
            <LocationGrid />
        </main>
    );
};