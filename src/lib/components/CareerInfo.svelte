<script>
  let [gamesPlayed, gamesWon, highScore, averageScore] = [0, 0, 0, 0];

  export function updateStats(event) {
    // Games played
    gamesPlayed++;

    // Games won
    if (event.detail.won) {
      gamesWon++;
    }

    // High score
    if (event.detail.score > highScore) {
      highScore = event.detail.score;
    }

    // Average score
    averageScore = (averageScore * (gamesPlayed - 1) + event.detail.score) / gamesPlayed;
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
