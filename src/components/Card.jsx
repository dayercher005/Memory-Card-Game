import "../styles/Card.css"

export default Card

function Card({image, name, clickHandler}) {

    const PokemonNameReturner = () => {
        clickHandler(name)
    }
    
    return(
        <div className="Card entireCard" onClick = {PokemonNameReturner}>
            <img className="cardPokemonImage entireCard" src={image}/>
            <p className = "cardPokemonName entireCard">{name}</p>
        </div>
    )
}