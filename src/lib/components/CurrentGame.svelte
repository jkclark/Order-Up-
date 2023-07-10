<script>
  import { createEventDispatcher } from 'svelte';

  import { NUMBER_NOT_DEFINED } from '../constants';
  import { score } from '../score.js';
  import Slots from './Slots.svelte';

  // Game parameters
  const numSlots = 10;
  const maxNumber = 1000;

  // Game state
  let number = NUMBER_NOT_DEFINED;
  let slotsChild;

  let dispatch = createEventDispatcher();

  function onKeyUp(event) {
    if (event.code === "Space") {
      slotsChild.handleGetNumberClick();
    }
  }

  function endGame(event) {
    // Alert user that game is over
    if (event.detail.won) {
      alert("Victory!");
    } else {
      alert("Game over...");
    }

    // Forward for updating of career info
    dispatch('gameover', event.detail);
  }
</script>

<div>
  <button on:click={slotsChild.startNewGame}>New Game</button>
  <span>Score: {$score}</span>
  <div>
    <button on:click={slotsChild.handleGetNumberClick}>Get Number</button>
    <span>Number: {number === NUMBER_NOT_DEFINED ? "--" : number}</span>
  </div>
  <!-- This seems like a lot of binds..? -->
  <Slots
    {numSlots}
    {maxNumber}
    bind:number={number}
    bind:this={slotsChild}
    on:gameover={endGame}
  >
  </Slots>
</div>

<svelte:window on:keyup={onKeyUp}/>
