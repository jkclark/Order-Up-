<script>
  import CareerInfo from "../lib/components/CareerInfo.svelte";
  import CurrentGame from "../lib/components/CurrentGame.svelte";

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
<hr>
<CareerInfo />
<hr>
<CurrentGame />
