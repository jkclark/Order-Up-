<script>
  import { createEventDispatcher } from 'svelte';

  import { NUMBER_NOT_DEFINED } from '../constants.js';
  import { number, resetNumber } from '../number.js';
  import { resetScore, score } from '../score.js';
  import Slots from './Slots.svelte';

  // Game parameters
  const numSlots = 2;
  const maxNumber = 100;

  // Game state
  let gameIsOver = false;
  let slotsChild;

  let dispatch = createEventDispatcher();

  function onKeyUp(event) {
    if (event.code === "Space") {
      slotsChild.handleGetNumberClick();
    }
  }

  function endGame(event) {
    // Update game state
    gameIsOver = true;

    // Alert user that game is over
    if (event.detail.won) {
      alert("Victory!");
    } else {
      alert("Game over...");
    }

    // Forward for updating of career info
    dispatch('gameover', event.detail);
  }

  function startNewGame() {
    gameIsOver = false;
    resetScore();
    resetNumber();
    slotsChild.resetSlots();
  }
</script>

<div>
  <button disabled={!gameIsOver} on:click={startNewGame}>New Game</button>
  <span>Score: {$score}</span>
  <div>
    <button on:click={slotsChild.handleGetNumberClick}>Get Number</button>
    <span>Number: {$number === NUMBER_NOT_DEFINED ? "--" : $number}</span>
  </div>
  <Slots
    {numSlots}
    {maxNumber}
    bind:this={slotsChild}
    on:gameover={endGame}
  >
  </Slots>
</div>

<svelte:window on:keyup={onKeyUp}/>
