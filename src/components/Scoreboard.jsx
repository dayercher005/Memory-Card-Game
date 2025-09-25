import Score from './Score.jsx'
import "../styles/ScoreBoard.css"

export default function Scoreboard() {

    return (

        <div class="scoreTextContainer">
            <Score scoreText = "Current Score: "></Score>
            <Score scoreText = "Best Score: "></Score>
        </div>
    )
}