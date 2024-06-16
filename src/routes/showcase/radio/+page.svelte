<script lang="ts">
  import { Hr, RadioGroup } from '$lib';
  import { radio1Data, radio2Data } from './radio-data';

</script>

<h1>Radio Button</h1>

<RadioGroup radioGroupData={radio1Data} direction="y" />

<Hr/>

<RadioGroup radioGroupData="{radio2Data}" />
