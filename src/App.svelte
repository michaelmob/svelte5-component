<script>
  let value = $state(0);
</script>

<div>
  <div>
    <input type="number" bind:value />
    <button onclick={() => value++}>+</button>
    <button onclick={() => value--}>-</button>
  </div>
</div>
