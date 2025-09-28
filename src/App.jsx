import Title from './components/Title.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import CardContainer from './components/CardContainer.jsx'
import { useState, useEffect } from 'react'
import './App.css'

 function App() {

  const [pokemonArray, setPokemonArray] = useState([])

  useEffect(() => {

    async function APICaller() {
      
      const pokemonScript = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      const pokemonData = await pokemonScript.json()

      setPokemonArray(pokemonData.results)

    }

    APICaller()


  }, [])

  return (
    <>
      <Title></Title>
      <Scoreboard></Scoreboard>
      <CardContainer PokemonArray={pokemonArray}></CardContainer>
    </>
  )
}

export default App
