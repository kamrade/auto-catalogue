<script lang="ts">
  import { Menu, Link } from '$lib';
  import type { IMainMenuItem } from '$lib';

  export let label = 'Menu Item';
  export let menuLinks: (IMainMenuItem | string)[]

  let menuWrapperElementHover: HTMLDivElement;
  let isHoverMenuVisible = false;
  let menuHoverElement: HTMLDivElement;
  let menu: HTMLDivElement;
  let contentHeight = 0;

  $: contentHeight = menu?.getBoundingClientRect().height || 0;

  const showHoverMenu = () => (isHoverMenuVisible = true);
  const hideHoverMenu = () => (isHoverMenuVisible = false);

  const mouseEnterHandler = () => {
    if (!isHoverMenuVisible) {
      showHoverMenu();
    }
  };

  const mouseLeaveHoverHandler = (e: MouseEvent) => {
    let contains = menuHoverElement?.contains(e.relatedTarget as Node);
    let equal = menuHoverElement === e.relatedTarget;
    if (!contains && !equal) {
      hideHoverMenu();
    }
  };
</script>

<p
  class={`dropdown-toggler ${isHoverMenuVisible ? 'dropdown-toggler-hover' : ''}`}
  bind:this={menuWrapperElementHover}
  on:mouseleave={mouseLeaveHoverHandler}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span on:mouseenter={mouseEnterHandler} class="dropdown-toggler-text">{label}</span>
  <Menu
    bind:menuElement={menuHoverElement}
    appearanceOnHover={true}
    isVisible={isHoverMenuVisible}
    hideMenu={hideHoverMenu}
    parentElement={menuWrapperElementHover}
    minWidth={300}
    {contentHeight}
  >
    <div class="menu" bind:this={menu}>
      {#each menuLinks as menuLink}
        {#if typeof menuLink === 'string'}
          <h3 class="sub-title">{menuLink}</h3>
        {:else}
          <div class="mb-2"><Link onClick={hideHoverMenu} href={menuLink.link}>{menuLink.label}</Link></div>
        {/if}
      {/each}
    </div>
  </Menu>
</p>


<style lang="scss">
  @import './MainMenuSection.scss';
</style>