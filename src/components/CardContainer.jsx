import Card from './Card.jsx'
import "../styles/CardContainer.css"

export default function CardContainer({PokemonArray, shuffleFunction}){


    const PokemonCards = PokemonArray.map((pokemon) => 
        <Card key={pokemon.name} name={pokemon.name} image={pokemon.image} shuffleFunction={shuffleFunction}></Card>
    )

    
    return (

        <div className="cardContainer">
            {PokemonCards}
        </div>

    )
}