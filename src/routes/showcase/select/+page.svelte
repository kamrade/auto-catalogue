<script lang="ts">
  import { TextInput, Select, type SelectOption } from "$lib";

  interface IBrandData {
    brand_id: string;
    name: string;
  }

  export let data: { allBrands: IBrandData[] };

  let options: SelectOption[] = data?.allBrands?.map(({ brand_id, name }) => ({
    text: name,
    value: brand_id
  }));

  let transformData = (data: { allBrands: IBrandData[] }) => {
    if (data && data.allBrands) {
      return data.allBrands.map(({ brand_id, name }) => ({
        text: name,
        value: brand_id
      }));
    } else {
      return [];
    }
  };

  $: options = transformData(data);

  let value: SelectOption | null = options ? options[0] : null;

  const onChange = (option: SelectOption) => (value = option);
</script>

<h1>Select</h1>
<Select
  fullWidthDropdown
  label={"Brand"}
  placeholder={"Choose a brand"}
  maxHeight={300}
  {options}
  {value}
  {onChange}
></Select>

<Select
  fullWidthDropdown
  label={"Brand clone"}
  placeholder={"Choose a brand"}
  maxHeight={300}
  {options}
  {value}
  {onChange}
></Select>

<TextInput label="Just text input" />
