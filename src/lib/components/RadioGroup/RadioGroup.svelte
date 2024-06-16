<script lang="ts">
  import type { MouseEventHandler} from "svelte/elements";
  import { type IRadioGroupData, type RadioGroupDirection, RadioElement} from "$lib";

  export let direction: RadioGroupDirection = 'x';
  export let radioGroupData: IRadioGroupData[];

  const onClickHandler: MouseEventHandler<HTMLInputElement > = (e) => {
    let radioName = (e.target as HTMLInputElement).name
    radioGroupData = radioGroupData.map((data) =>
      data.name === radioName ? { ...data, checked: true} : { ...data, checked: false })
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
