<script>
  import CareerInfo from "../lib/components/CareerInfo.svelte";
  import CurrentGame from "../lib/components/CurrentGame.svelte";

  let careerInfoChild;
</script>

<h1>Number Challenge</h1>
<hr>
<CareerInfo bind:this={careerInfoChild}/>
<hr>
<CurrentGame on:gameover={careerInfoChild.updateStats}/>
