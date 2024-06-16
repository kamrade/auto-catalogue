<script lang="ts">
  import { Hr, RadioGroup } from '$lib';
  import { radio1Data } from './radio-data';

  let radioData = [ ...radio1Data ];
  let value = '';

  let onChangeHandle = (val: string) => {
    value = val;
    radioData = radioData.map((data) =>
      data.name === val ? { ...data, checked: true} : { ...data, checked: false })
  }

</script>

<h1>Radio Button</h1>

<RadioGroup onChange={onChangeHandle} radioGroupData={radioData} direction="y" />

<Hr/>

<h4><span class="text-muted">Value: </span>{value}</h4>
