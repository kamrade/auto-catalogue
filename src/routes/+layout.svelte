<script lang="ts" context="module">
  import "../styles/global.scss";
  import { Container, Link } from "$lib";
</script>

<div class="App">
  <header class="header-main">
    <Container>
      <div class="header-content">
        <b>
          <Link inverted={true} href="/">Home</Link>
        </b>
        <b>
          <Link inverted={true} href="/showcase">Showcase</Link>
        </b>
      </div>
    </Container>
  </header>

  <slot />
</div>

<style lang="scss">
  // @import "../styles/global.scss";

  .header-main {
    background-color: var(--bg-inverted-100);
    color: var(--text-color-inv);
    .header-content {
      display: flex;
      gap: 2rem;
      padding: 0.5rem;
    }
  }
</style>
