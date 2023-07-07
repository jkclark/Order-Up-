<script>
  import Slots from "../lib/components/Slots.svelte";

  let number;
  let maxNumber = 1000000;
  let numSlots = 10;
  let slotsChild;
  let numberUsed = false;

  function generateRandomNumber() {
    number = Math.floor(Math.random() * maxNumber) + 1;
    numberUsed = false;
  }
</script>

<h1>Number Challenge</h1>
<button on:click={() => {slotsChild.resetGame(); number = undefined;}}>New game</button>

<h3>{number || "--"}</h3>
<button disabled={number && !numberUsed} on:click={generateRandomNumber}>Generate Random Number</button>
<Slots {number} {numSlots} bind:numberUsed={numberUsed} bind:this={slotsChild}/>
