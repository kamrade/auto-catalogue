<script lang="ts">
  type Spacing = 1 | 2 | 3 | 4 | 5 | 6;
  export let spacing: Spacing = 3;
</script>

<hr class={`hr`} style={`margin: var(--space-${spacing}) 0;`} />

<style lang="scss">
  .hr {
    border: none;
    border-bottom: 1px solid var(--line-base-100);
  }
</style>
