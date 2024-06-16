<script lang="ts">
  import type {MouseEventHandler} from "svelte/elements";
  import { type IRadioGroupData } from '$lib';

  export let radioData: IRadioGroupData;
  export let onClick: MouseEventHandler<HTMLInputElement>;
</script>

<label for={radioData.id} class="RadioGroup-label">
  <input
    type="radio"
    name={radioData.name}
    id={radioData.id}
    value={radioData.value}
    on:click={onClick}
    checked={radioData.checked}
    class="RadioGroup-el"
  >
  <span class={`RadioIndicator RadioIndicator--${radioData.checked ? 'on' : 'off'}`}></span>
  {radioData.label}
</label>

<style lang="scss">
  .RadioGroup-label {
    cursor: pointer;

    &:focus-within {
      .RadioIndicator {
        box-shadow: 0 0 0 3px var(--focus-color);
      }
    }
  }

  .RadioIndicator {
    border-radius: 50%;
    display: inline-block;
    vertical-align: center;
    height: 0.625em;
    width: 0.625em;
    border: 1px solid var(--line-control-100);
    position: relative;


    &::after {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      height: 0.625em;
      width: 0.625em;
      transform-origin: 50% 50%;
      background: var(--text-color-base);
      border: 1px solid var(--text-color-base);
      opacity: 0;
      transform: scale(0);
      border-radius: 50%;
      transition: all .3s ease-in-out;
    }

    &.RadioIndicator--on {
      &::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .RadioGroup-el {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }

</style>
