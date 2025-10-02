import "../styles/Score.css"

export default function BestScore({scoreText, bestScore}){


    return (
        <div>
            <p className="scoreText">{scoreText}{bestScore}</p>
        </div>
    )
}