<script>
	import { createEventDispatcher } from 'svelte';

  import { NUMBER_NOT_DEFINED, UNASSIGNED_SLOT_VALUE } from '../constants';
  import { number, setNumber } from '../number.js';
  import { incrementScore } from '../score.js';
  import { doesValidSlotExist, numberIsValidInSlot } from "../slotsLogic.js";
  import Slot from './Slot.svelte';

  export let numSlots;
  export let maxNumber;

  let slots;
  resetSlots();

  // Detect game over
	const dispatch = createEventDispatcher();
  // Loss
  $: if (!doesValidSlotExist($number, slots)) {
    setTimeout(() => {
      dispatch('gameover', { won: false });
    }, 400);  // Let the number display update before alerting
  }

  // Win
  $: if (slots.every(slot => slot !== UNASSIGNED_SLOT_VALUE)) {
    setTimeout(() => {
      dispatch('gameover', { won: true });
    }, 400);  // Let the score display update before alerting
  }

  function handleSlotClick(index) {
    if ($number === NUMBER_NOT_DEFINED) {
      alert("No number to place");
    }

    // Do not allow overwriting of non-empty slot values
    else if (slots[index] !== UNASSIGNED_SLOT_VALUE) {
      alert("Cannot overwrite slot with value");
    }

    // Do not allow user to use number more than once
    else if (slots.includes($number)) {
      alert("Cannot use number more than once");
    }

    // Do not allow a number to be placed out of order
    else if (!numberIsValidInSlot($number, slots, index)) {
      alert("Cannot place number out of order");
    }
    
    // We're good
    else {
      slots[index] = $number;
      slots = slots;
      incrementScore();
    }
  }

  export function handleGetNumberClick() {
    if ($number !== NUMBER_NOT_DEFINED && !slots.includes($number)) {
      alert("Number must be placed before getting a new one");
      return;
    }

    setNumber(getNewNumber());
  }

  function getNewNumber() {
    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * maxNumber) + 1;
    } while (slots.includes(newNumber));

    return newNumber;
  }

  export function resetSlots() {
    slots = Array(numSlots).fill(UNASSIGNED_SLOT_VALUE);
  }
</script>

<div id="slots">
  {#each slots as value, index}
    <Slot {index} {value} handleClick={handleSlotClick}/>
  {/each}
</div>

<style>
  #slots {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  flex-direction: column;
  }
</style>
