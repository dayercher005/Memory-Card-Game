import Title from './components/Title.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import CardContainer from './components/CardContainer.jsx'
import { useState, useEffect } from 'react'
import './App.css'

 function App() {

  const [pokemonArray, setPokemonArray] = useState([])

  useEffect(() => {

    let ignore = false

    async function APICaller() {
      
      try{

        for (let index = 1; index < 13; index++){

          const pokemonScript = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
          const pokemonData = await pokemonScript.json()
          const pokemonName = pokemonData.name
          const pokemonImage = pokemonData.sprites.front_default

          if (!ignore){
            setPokemonArray((array) => [...array, {name: pokemonName, image: pokemonImage}])
          }  

        }
        
      }
       catch(error){
        return 
       }

       
    }

    APICaller()

    return () => {
      ignore = true
    }


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
