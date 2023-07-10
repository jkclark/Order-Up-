<script>
  import { score } from '../score.js';

  let scoreValue;
  score.subscribe(value => {
    scoreValue = value;
  });

  let [gamesPlayed, gamesWon, highScore, averageScore] = [0, 0, 0, 0];

  export function updateStats(event) {
    // Games played
    gamesPlayed++;

    // Games won
    if (event.detail.won) {
      gamesWon++;
    }

    // High score
    if (scoreValue > highScore) {
      highScore = scoreValue;
    }

    // Average score
    averageScore = (averageScore * (gamesPlayed - 1) + scoreValue) / gamesPlayed;
  }
</script>
<div>
    <span><b>Career Stats</b></span>
    <br>
    <span>Games played: {gamesPlayed}</span>
    <br>
    <span>Games won: {gamesWon}</span>
    <br>
    <span>High score: {highScore}</span>
    <br>
    <span>Average score: {averageScore}</span>
</div>
