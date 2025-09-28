
import Card from './Card.jsx'

export default function CardContainer({PokemonArray}){

    const PokemonCards = PokemonArray.map((pokemon) => 
        <Card name={pokemon.name} image = {pokemon.url.sprites}></Card>
    )

    return (

        <div className="cardContainer">
            {PokemonCards}
        </div>

    )
}