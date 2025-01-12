<script>
  import { PersistedState } from "runed";
  const hitCounter = new PersistedState("hit-counter", 0);
  hitCounter.current++;

  let value = $state(0);
</script>

<div>
  <div>{hitCounter.current} hits</div>
  <div>
    <input type="number" bind:value />
    <button onclick={() => value++}>+</button>
    <button onclick={() => value--}>-</button>
  </div>
</div>
