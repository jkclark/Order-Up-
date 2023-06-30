<script>
  import Slots from "../lib/components/Slots.svelte";

  let number;
  let maxNumber = 1000000;
  let numSlots = 10;

  $: console.log(number);
  
  function generateRandomNumber() {
    number = Math.floor(Math.random() * maxNumber) + 1;
  }
</script>

<h1>Number Challenge</h1>
<button>New game</button>

<h3>{number || "--"}</h3>
<button on:click={generateRandomNumber}>Generate Random Number</button>
<Slots {number} {numSlots}/>
