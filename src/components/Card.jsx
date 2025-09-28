export default Card

function Card({image, name, shuffleFunction}) {
    
    return(
        <div className="Card" onClick = {shuffleFunction}>
            <img src={image}/>
            <p>{name}</p>
        </div>
    )
}