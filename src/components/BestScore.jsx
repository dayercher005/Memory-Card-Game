import "../styles/Score.css"

export default function BestScore({scoreText, score}){


    return (
        <div>
            <p className="scoreText">{scoreText}{score}</p>
        </div>
    )
}