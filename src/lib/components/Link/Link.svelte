<script lang="ts">
  export let href: string;
  export let inverted = false;
  export let onClick: (e: MouseEvent) => unknown = (_e) => {};

  import { page } from '$app/stores';
  let currentPath = '';
  let isActive = false;
  $: currentPath = $page.url.pathname;
  $: isActive =
    currentPath === href ||
    (currentPath === '/' && href === '/') ||
    (currentPath !== '/' && href !== '/' && currentPath.includes(href));

  const handleLinkClick = (e: MouseEvent) => {
    onClick && onClick(e);
  };
</script>

<a
  class={`Link ${inverted ? 'Link-inverted' : ''} 
  ${isActive ? 'Link-active' : ''}`}
  {href}
  on:click={handleLinkClick}
>
  <slot />
</a>

<style lang="scss">
  a.Link,
  a:visited.Link,
  a:link.Link {
    text-decoration: none;
    color: var(--text-color-secondary);
    &:hover {
      text-decoration: none;
      color: var(--text-color-base);
    }
    &.Link-inverted {
      color: var(--text-color-inv);

      &:hover {
        color: var(--text-color-inv-primary);
      }
      &.Link-active {
        color: var(--text-color-inv-primary);
      }
    }
    &.Link-active {
      color: var(--text-color-inv-base);
    }
  }
</style>
