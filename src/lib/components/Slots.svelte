<script>
	import { createEventDispatcher } from 'svelte';

	import { NUMBER_NOT_DEFINED, UNASSIGNED_SLOT_VALUE } from '../constants';
	import { incrementScore } from '../score';
	import Slot from './Slot.svelte';

  export let numSlots;
  export let maxNumber;
  export let number;

  let slots;
  resetSlots();

  // TODO: There is too much going on in this file.
  //       Break it up into smaller modules.

  // Detect game over
	const dispatch = createEventDispatcher();
  // Loss
  $: if (!doesValidSlotExist(number, slots)) {
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

  function doesValidSlotExist(number, slots) {
    // Check open slots for validity of new number

    // If the number is already in the slots (i.e., it was just added),
    // then we're fine
    if (slots.includes(number)) {
      return true;
    }

    for (let i = 0; i < slots.length; i++) {
      if (slots[i] === UNASSIGNED_SLOT_VALUE) {
        if (numberIsValidInSlot(i)) {
          return true;
        }
      }
    }

    return false;
  }

  function handleSlotClick(index) {
    if (number === NUMBER_NOT_DEFINED) {
      alert("No number to place");
    }

    // Do not allow overwriting of non-empty slot values
    else if (slots[index] !== UNASSIGNED_SLOT_VALUE) {
      alert("Cannot overwrite slot with value");
    }

    // Do not allow user to use number more than once
    else if (slots.includes(number)) {
      alert("Cannot use number more than once");
    }

    // Do not allow a number to be placed out of order
    else if (!numberIsValidInSlot(index)) {
      alert("Cannot place number out of order");
    }
    
    // We're good
    else {
      slots[index] = number;
      slots = slots;
      incrementScore();
    }
  }

  function numberIsValidInSlot(index) {
    // Check previous slots for validity
    for (let checkIndex = index - 1; checkIndex >= 0; checkIndex--) {
      if (slots[checkIndex] != -1 && number < slots[checkIndex]) {
        return false;
      }
    }

    // Check next slots for validity
    for (let checkIndex = index + 1; checkIndex < slots.length; checkIndex++) {
      if (slots[checkIndex] != -1 && number > slots[checkIndex]) {
        return false;
      }
    }

    return true;
  }

  export function handleGetNumberClick() {
    if (number !== NUMBER_NOT_DEFINED && !slots.includes(number)) {
      alert("Number must be placed before getting a new one");
      return;
    }

    generateNumber();
  }

  function generateNumber() {
    do {
      number = Math.floor(Math.random(maxNumber) * 100) + 1;
    } while (slots.includes(number));
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
