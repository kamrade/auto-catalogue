<script lang="ts">
  import { Container, Link } from '$lib';
</script>

<header class="header">
  <Container>
    <div class="header-content">
      <b><Link inverted={true} href="/">Home</Link></b>
      <b><Link inverted={true} href="/showcase">Showcase</Link></b>
    </div>
  </Container>
</header>

<slot />

<style lang="scss">
  @import '../styles/variables.scss';
  .header {
    background-color: #000;
    color: #fff;
    .header-content {
      display: flex;
      gap: 1rem;
      padding: 0.5rem;
    }
  }
</style>
