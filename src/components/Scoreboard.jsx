import Score from './Score.jsx'
import BestScore from './BestScore.jsx'
import "../styles/ScoreBoard.css"

export default function Scoreboard({currentScore, bestScore}) {

    return (

        <div className="scoreTextContainer">
            <Score currentScore={currentScore} scoreText = "Current Score: "></Score>
            <BestScore bestScore={bestScore} scoreText = "Best Score: "></BestScore>
        </div>
    )
}