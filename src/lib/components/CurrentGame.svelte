<script>
  import { NUMBER_NOT_DEFINED, UNASSIGNED_SLOT_VALUE } from '../constants';
  import Slots from './Slots.svelte';

  // Game parameters
  const numSlots = 10;
  const maxNumber = 1000;

  // Game state
  let score = 0;
  let number = NUMBER_NOT_DEFINED;
  let slotsChild;

  function endGame(event) {
    // Alert user that game is over
    if (event.detail.won) {
      alert("Victory!");
    } else {
      alert("Game over...");
    }

    // Update career info
  }
</script>

<div>
  <button on:click={slotsChild.startNewGame}>New Game</button>
  <span>Score: {score}</span>
  <div>
    <button on:click={slotsChild.generateNumber}>Get Number</button>
    <span>Number: {number === NUMBER_NOT_DEFINED ? "--" : number}</span>
  </div>
  <!-- This seems like a lot of binds..? -->
  <Slots
    {numSlots}
    {maxNumber}
    bind:number={number}
    bind:this={slotsChild}
    bind:score={score}
    on:gameover={endGame}
  >
  </Slots>
</div>
