import Card from './Card.jsx'
import "../styles/CardContainer.css"

export default function CardContainer({PokemonArray, shuffleFunction}){


    const PokemonCards = PokemonArray.map((pokemon, index) => 
        <Card key={index} name={pokemon.name} image={pokemon.image} shuffleFunction={shuffleFunction}></Card>
    )   

    return (

        <div className="cardContainer">
            {PokemonCards}
        </div>

    )
}