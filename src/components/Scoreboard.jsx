import Score from './Score.jsx'
import BestScore from './BestScore.jsx'
import "../styles/ScoreBoard.css"

export default function Scoreboard() {

    return (

        <div className="scoreTextContainer">
            <Score scoreText = "Current Score: "></Score>
            <BestScore scoreText = "Best Score: "></BestScore>
        </div>
    )
}