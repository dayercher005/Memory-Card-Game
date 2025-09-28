
import "../styles/Score.css"

export default function Score({scoreText}){

    const score = 0;

    return (
        <div>
            <p className="scoreText">{scoreText}{score}</p>
        </div>
    )
}