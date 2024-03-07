<script lang="ts">
  import { Hr, Container, Link } from '$lib';
</script>

<header class="header">
  <Container>
    <div class="header-content">
      <Link href="/showcase/dropdowns">Dropdowns</Link>
      <Link href="/showcase/links">Links</Link>
      <Link href="/showcase/checkers">Checkers</Link>
      <Link href="/showcase/text-inputs">Text Inputs</Link>
      <Link href="/showcase/payment-form">Payment</Link>
      <Link href="/showcase/filter-select">Filter</Link>
      <Link href="/showcase/dropdown-with-search">With Search</Link>
      <Link href="/showcase/menu">Menu</Link>
    </div>
  </Container>
</header>

<Container>
  <slot />
</Container>

<style lang="scss">
  .header {
    .header-content {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0.5rem;
      border-bottom: 1px solid var(--line-base-100);
    }
  }
</style>
