import "../styles/Card.css"

export default Card

function Card({image, name, shuffleFunction}) {
    
    return(
        <div className="Card entireCard" onClick = {shuffleFunction}>
            <img className="cardPokemonImage entireCard" src={image}/>
            <p className = "cardPokemonName entireCard">{name}</p>
        </div>
    )
}