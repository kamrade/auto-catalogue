<script lang="ts">
  import { MainMenuSection, Container, Notification } from "$lib";
  import { uikitMenuLinks, sectionsMenuLinks, appMenuLinks } from "./nav-data";
</script>

<header class="header">
  <Container>
    <div class="header-content">
      <MainMenuSection label="UIKit" menuLinks={uikitMenuLinks} />
      <MainMenuSection label="Sections" menuLinks={sectionsMenuLinks} />
      <MainMenuSection label="Applications" menuLinks={appMenuLinks} />
    </div>
  </Container>
</header>

<Container>
  <slot />
</Container>

<Notification />

<style lang="scss">
  .header {
    margin-bottom: 1rem;
    .header-content {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      border-bottom: 1px solid var(--line-base-100);
    }
  }
</style>
