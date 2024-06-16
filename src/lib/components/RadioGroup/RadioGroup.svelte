<script lang="ts">
  import type { MouseEventHandler} from "svelte/elements";
  import { type IRadioGroupData, type RadioGroupDirection, RadioElement} from "$lib";

  export let direction: RadioGroupDirection = 'x';
  export let radioGroupData: IRadioGroupData[];
  export let onChange: (val: string) => void;

  const onClickHandler: MouseEventHandler<HTMLInputElement > = (e) => {
    let val = (e.target as HTMLInputElement).name;
    onChange( val );
  }

</script>


<div class={`RadioGroup RadioGroup-${direction}`}>
  {#each radioGroupData as radioData}
    <RadioElement {radioData} onClick={onClickHandler}></RadioElement>
  {/each}
</div>


<style lang="scss">
  .RadioGroup {
    display: flex;
    gap: 1rem;
    flex-direction: row;

    &.RadioGroup-y {
      flex-direction: column;
      gap: .5rem;
    }
  }
</style>
