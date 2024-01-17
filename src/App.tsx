import {Grid, GridItem, Show} from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./components/hooks/useGenres.ts";

function App() {

     const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

    return (
        <>
            <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, //1024 px
            }}
            templateColumns={{
                base:'1fr', // 1 fraction
                lg: '200px 1fr'
            }}
            >
                <GridItem area={'nav'}>
                    <NavBar />
                </GridItem>

                <Show above={'lg'}>
                    <GridItem area={'aside'} paddingX={5}>
                        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
                    </GridItem>
                </Show>
                <GridItem area={'main'}>
                    <GameGrid selectedGenre={selectedGenre}/>
                </GridItem>

            </Grid>

        </>
    )
}

export default App
