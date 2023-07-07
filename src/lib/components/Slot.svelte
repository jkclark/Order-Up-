<script>
  import { createEventDispatcher } from 'svelte';
  import { numberIsValid } from '../utils.js';

  const dispatch = createEventDispatcher()

  export let index;
  export let value;
  export let potentialValue;
  export let slots;
  export let numberUsed;

  function setValue() {
    if (value !== -1) {
      alert("Slot already filled");
    } else if (numberUsed) {
      alert("Number already used")
    } else if (numberIsValid(potentialValue, slots, index)) {
      dispatch("change", {index: index, value: potentialValue})
    } else {
      alert("Invalid slot for value");
    }
  }
</script>

<span on:click={setValue}>{index + 1}: {value === -1 ? "-" : value}</span>

<style>
  span {
    width: fit-content;
  }

  span:hover {
    background-color: gray;
    cursor: pointer;
  }
</style>
