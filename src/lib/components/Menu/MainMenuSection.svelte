<script lang="ts">
  import { Menu, Link } from '$lib';

  export let label = 'Menu Item';

  let menuWrapperElementHover: HTMLParagraphElement;
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

<div class="my-6">
  <p
    class={`dropdown-toggler ${isHoverMenuVisible ? 'dropdown-toggler-hover' : ''}`}
    bind:this={menuWrapperElementHover}
    on:mouseleave={mouseLeaveHoverHandler}
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span on:mouseenter={mouseEnterHandler} class="dropdown-toggler-text"> {label} </span>
    <Menu
      bind:menuElement={menuHoverElement}
      appearanceOnHover={true}
      isVisible={isHoverMenuVisible}
      hideMenu={hideHoverMenu}
      parentElement={menuWrapperElementHover}
      width={600}
      {contentHeight}
    >
      <div class="menu" bind:this={menu}>
        <div class="menu-column">
          <h3 class="sub-title">UIKit</h3>
          <div class="mb-2"><Link href="/showcase/dropdowns">Dropdowns</Link></div>
          <div class="mb-2"><Link href="/showcase/links">Links</Link></div>
          <div class="mb-2"><Link href="/showcase/checkers">Checkers</Link></div>
          <div class="mb-2"><Link href="/showcase/text-inputs">Text Inputs</Link></div>
          <div class="mb-2"><Link href="/showcase/payment-form">Payment</Link></div>
          <div class="mb-2"><Link href="/showcase/filter-select">Filter</Link></div>
          <div class="mb-2"><Link href="/showcase/dropdown-with-search">With Search</Link></div>
          <div class="mb-2"><Link href="/showcase/menu">Menu</Link></div>
          
        </div>
        <div class="menu-column">
          <h3 class="sub-title">Pages</h3>
          <div class="mb-2"><Link href="/showcase/payment-form">Payment</Link></div>
          <div class="mb-2"><Link href="/showcase/filter-select">Filter</Link></div>
          <div class="mb-2"><Link href="/showcase/dropdown-with-search">With Search</Link></div>
          <div class="mb-2"><Link href="/showcase/menu">Menu</Link></div>
        </div>
      </div>
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
    }

    &.dropdown-toggler-hover {
      color: var(--text-color-base);
    }

    .dropdown-toggler-text {
      padding: 0.25rem;
    }
  }

  .sub-title {
    padding: 0;
    margin: 0 0 0.5rem 0;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: var(--text-color-muted);
  }

  .menu {
    border: 1px solid var(--line-base-100);
    padding: 1.5rem;
    background-color: var(--bg-control-100);
    display: grid;
    grid-template-columns: repeat(24, 1fr);

    .menu-column {
      grid-column: span 12;
    }

  }
</style>