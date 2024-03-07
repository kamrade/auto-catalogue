<script lang="ts">
  import { Menu } from '$lib';

  let menuWrapperElementHover: HTMLParagraphElement;
  let menuWrapperElementClick: HTMLParagraphElement;
  let isHoverMenuVisible = false;
  let isClickMenuVisible = false;

  let menuHoverElement: HTMLDivElement;

  const showHoverMenu = () => (isHoverMenuVisible = true);
  const hideHoverMenu = () => (isHoverMenuVisible = false);

  const showClickMenu = () => (isClickMenuVisible = true);
  const hideClickMenu = () => (isClickMenuVisible = false);

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

  const mouseClickHandler = () => {
    if (!isClickMenuVisible) {
      showClickMenu();
    }
  };
</script>

<div class="my-6">
  <h2>Menu on Hover</h2>
  <p
    class={`dropdown-toggler ${isHoverMenuVisible ? 'dropdown-toggler-hover' : ''}`}
    bind:this={menuWrapperElementHover}
    on:mouseleave={mouseLeaveHoverHandler}
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span on:mouseenter={mouseEnterHandler} class="dropdown-toggler-text"> Menu </span>
    <Menu
      bind:menuElement={menuHoverElement}
      appearanceOnHover={true}
      isVisible={isHoverMenuVisible}
      hideMenu={hideHoverMenu}
      parentElement={menuWrapperElementHover}
    >
      <div class="menu">Menu</div>
    </Menu>
  </p>
</div>

<div class="my-6">
  <h2>Menu on Click</h2>
  <p class="dropdown-toggler" bind:this={menuWrapperElementClick}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span on:mouseup={mouseClickHandler} class="dropdown-toggler-text">Menu</span>
    <Menu
      menuGap={12}
      isVisible={isClickMenuVisible}
      hideMenu={hideClickMenu}
      parentElement={menuWrapperElementClick}
    >
      Menu
    </Menu>
  </p>
</div>

<style lang="scss">
  .dropdown-toggler {
    color: var(--text-color-secondary);
    transition: color 0.3s ease-in-out;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: inline-flex;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--text-color-base);
      background-color: var(--bg-control-200);
    }

    &.dropdown-toggler-hover {
      color: var(--text-color-base);
      background-color: var(--bg-control-200);
    }

    .dropdown-toggler-text {
      padding: 0.5rem;
    }
  }

  .menu {
    padding: 1.5rem;
    background-color: #fff;
  }
</style>
