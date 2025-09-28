
import Card from './Card.jsx'
import "../styles/CardContainer.css"

export default function CardContainer({PokemonArray}){

    

    const PokemonCards = PokemonArray.map((pokemon, index) => 
        <Card key={index} name={pokemon.name} image = {pokemon.image}></Card>
    )    

    return (

        <div className="cardContainer">
            {PokemonCards}
        </div>

    )
}