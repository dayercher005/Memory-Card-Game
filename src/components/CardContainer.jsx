
import Card from './Card.jsx'

export default function CardContainer({PokemonArray}){

    

    const PokemonCards = PokemonArray.map((pokemon) => 
        <Card key={pokemon.name} name={pokemon.name} image = {pokemon.image}></Card>
    )    

    return (

        <div className="cardContainer">
            {PokemonCards}
        </div>

    )
}