import "../styles/Score.css"

export default function Score({scoreText, currentScore}){


    return (
        <div>
            <p className="scoreText">{scoreText}{currentScore}</p>
        </div>
    )
}