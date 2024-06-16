<script lang="ts">
  import { Button, RadioGroup, Hr, Checkbox } from "$lib";
  import type { ThemeType, VariantType, SizeType, ShapeType } from "$lib";
  import { radioThemeDataDefault, radioVariantDataDefault, radioSizeDataDefault, radioShapeDataDefault, getButtonProps } from './showcase-data';
  import type { IOptionsSet, IValuesSet } from './showcase-data';

  const optionsSet: IOptionsSet = {
    radioThemeData: radioThemeDataDefault,
    radioVariantData: radioVariantDataDefault,
    radioSizeData: radioSizeDataDefault,
    radioShapeData: radioShapeDataDefault
  }

  const valuesSet: IValuesSet = {
    themeValue: 'primary',
    variantValue: 'contained',
    sizeValue: 'lg',
    shapeValue: 'rounded',
  }

  let isBlock = false;
  let isDisabled = false;

  const updateButtonProps = () =>
    getButtonProps(
      valuesSet.themeValue as ThemeType,
      valuesSet.variantValue as VariantType,
      valuesSet.sizeValue as SizeType,
      valuesSet.shapeValue as ShapeType,
      isBlock,
      isDisabled
    );

  let buttonProps = updateButtonProps();

  const onChangeGeneric = (val: string, setName: keyof IOptionsSet, valueName: keyof IValuesSet) => {
    valuesSet[valueName] = val;
    optionsSet[setName] = optionsSet[setName].map((data) =>
      data.name === val ? { ...data, checked: true } : { ...data, checked: false });
    buttonProps = updateButtonProps();
  }

  const blockChangeHandler = (e: Event) => {
    isBlock = (e.target as HTMLInputElement).checked;
    buttonProps = updateButtonProps();
  }

  const disabledChangeHandler = (e: Event) => {
    isDisabled = (e.target as HTMLInputElement).checked;
    buttonProps = updateButtonProps();
  }

</script>

<h1>Button Showcase</h1>

<div class="fieldset">
  <RadioGroup
    onChange={(val) => onChangeGeneric(val, 'radioThemeData', 'themeValue' )}
    radioGroupData={optionsSet['radioThemeData']} direction="y" />
  <RadioGroup
    onChange={(val) => onChangeGeneric(val, 'radioVariantData', 'variantValue' )}
    radioGroupData={optionsSet.radioVariantData} direction="y" />
  <RadioGroup
    onChange={(val) => onChangeGeneric(val, 'radioSizeData', 'sizeValue' )}
    radioGroupData={optionsSet.radioSizeData} direction="y" />
  <RadioGroup
    onChange={(val) => onChangeGeneric(val, 'radioShapeData', 'shapeValue' )}
    radioGroupData={optionsSet.radioShapeData} direction="y" />
</div>

<Hr />
<Checkbox name="block" value={isBlock} onChange={blockChangeHandler}>Block</Checkbox>
<Checkbox name="block" value={isDisabled} onChange={disabledChangeHandler}>Disabled</Checkbox>
<Hr />

<h4>Value: {valuesSet.themeValue}, {valuesSet.variantValue}, {valuesSet.sizeValue}</h4>

<div class="my-6">
  <Button props={buttonProps}>Primary Button</Button>
</div>

<style lang="scss">
  .fieldset {
    display: flex;
    gap: 2rem;
  }
</style>
