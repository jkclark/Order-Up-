<script>
    import { UNASSIGNED_SLOT_VALUE } from '../constants.js';

    export let index;
    export let value;
    export let handleClick;
</script>

<span on:click={() => handleClick(index)}>{index + 1}: {value === UNASSIGNED_SLOT_VALUE ? "--" : value}</span>

<style>
    span {
      width: fit-content;
    }
  
    span:hover {
      background-color: gray;
      cursor: pointer;
    }
</style>
