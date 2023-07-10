<script>
  import { score } from '../score.js';

  let [gamesPlayed, gamesWon, highScore, averageScore] = [0, 0, 0, 0];
  const ROUND_DIGITS = 2;

  function roundNumToDigits(num, digits) {
    return Math.round(num * 10 ** digits) / 10 ** digits;
  }

  export function updateStats(event) {
    // Games played
    gamesPlayed++;

    // Games won
    if (event.detail.won) {
      gamesWon++;
    }

    // High score
    if ($score > highScore) {
      highScore = $score;
    }

    // Average score
    averageScore = (averageScore * (gamesPlayed - 1) + $score) / gamesPlayed;
  }
</script>
<div>
    <span><b>Career Stats</b></span>
    <br>
    <span>Games played: {gamesPlayed}</span>
    <br>
    <span>Games won: {gamesWon}</span>
    <br>
    <span>Win percent: {gamesPlayed === 0 ? "--" : roundNumToDigits(gamesWon / gamesPlayed * 100, ROUND_DIGITS)}%</span>
    <br>
    <span>High score: {highScore}</span>
    <br>
    <span>Average score: {roundNumToDigits(averageScore, ROUND_DIGITS)}</span>
</div>
