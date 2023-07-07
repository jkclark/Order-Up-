<script>
  import Slot from "./Slot.svelte";
  import { numberIsValid } from "../utils.js";

  export let number;
  export let numberUsed;
  export let numSlots;
  let slots = Array(numSlots).fill(-1);

  export function resetGame() {
    slots = Array(numSlots).fill(-1);
  }

  // Check if game is lost
  $: if (number) {
    if (!doesValidSlotExist(number, slots)) {
      setTimeout(() => {alert("Game over...")}, 300);
    }
  }

  function doesValidSlotExist(number, slots) {
    // Check open slots for validity of new number

    // If the number is already in the slots (i.e., it was just added),
    // then we're fine
    if (slots.includes(number)) {
      return true;
    }

    for (let i = 0; i < slots.length; i++) {
      if (slots[i] === -1) {
        if (numberIsValid(number, slots, i)) {
          return true;
        }
      }
    }

    return false;
  }

  function handleSlotChange(event) {
    slots[event.detail.index] = event.detail.value;
    slots = slots;
    numberUsed = true;
  }
</script>

<div id="slots">
  {#each [...Array(10).keys()] as index}
    <Slot
      on:change={handleSlotChange}
      {index}
      value={slots[index]}
      potentialValue={number}
      {slots}
      {numberUsed}
    />
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
