import { CharactersGrid } from "../../component/characterGrid/CharactersGrid";
import { Footer } from "../../component/Footer/Footer";
import { Header } from "../../component/Header/Header";

export const HomePage = () =>{
    return(
        <main>
            <Header />
            <CharactersGrid />
            <Footer />
        </main>
    );
};