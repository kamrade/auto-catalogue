<script lang="ts">
  import { Button, RadioGroup, Hr, Checkbox } from "$lib";
  import type { ThemeType, VariantType, SizeType, ShapeType } from "$lib";
  import { radioThemeDataDefault, radioVariantDataDefault, radioSizeDataDefault, radioShapeDataDefault, getButtonProps } from './showcase-data';
  import type { IOptionsSet, IValuesSet, IBooleanValuesSet } from './showcase-data';

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

  const booleanValuesSet: IBooleanValuesSet = {
    isBlock: false,
    isDisabled: false,
    isConvex: false,
    isLoading: false
  }

  const updateButtonProps = () =>
    getButtonProps(
      valuesSet.themeValue as ThemeType,
      valuesSet.variantValue as VariantType,
      valuesSet.sizeValue as SizeType,
      valuesSet.shapeValue as ShapeType,
      booleanValuesSet.isBlock,
      booleanValuesSet.isDisabled,
      booleanValuesSet.isConvex,
      booleanValuesSet.isLoading,
    );

  let buttonProps = updateButtonProps();

  const onChangeGeneric = (val: string, setName: keyof IOptionsSet, valueName: keyof IValuesSet) => {
    valuesSet[valueName] = val;
    optionsSet[setName] = optionsSet[setName].map((data) =>
      data.name === val ? { ...data, checked: true } : { ...data, checked: false });
    buttonProps = updateButtonProps();
  }

  const booleanChangeHandler = (e: Event, name: keyof IBooleanValuesSet) => {
    booleanValuesSet[name] = (e.target as HTMLInputElement).checked;
    buttonProps = updateButtonProps();
  }

</script>

<h1>Button Showcase</h1>

<div class="fieldset">
  <div class="field-wrapper">
    <RadioGroup
      onChange={(val) => onChangeGeneric(val, 'radioThemeData', 'themeValue' )}
      radioGroupData={optionsSet['radioThemeData']} direction="y" /></div>
  <div class="field-wrapper">
    <RadioGroup
      onChange={(val) => onChangeGeneric(val, 'radioVariantData', 'variantValue' )}
      radioGroupData={optionsSet.radioVariantData} direction="y" /></div>
  <div class="field-wrapper">
    <RadioGroup
      onChange={(val) => onChangeGeneric(val, 'radioSizeData', 'sizeValue' )}
      radioGroupData={optionsSet.radioSizeData} direction="y" /></div>
  <div class="field-wrapper">
    <RadioGroup
      onChange={(val) => onChangeGeneric(val, 'radioShapeData', 'shapeValue' )}
      radioGroupData={optionsSet.radioShapeData} direction="y" /></div>
</div>

<Hr />
<div class="checkboxes-fieldset">
  <div class="field-wrapper">
    <Checkbox name="is_block" value={booleanValuesSet.isBlock} onChange={(e) => booleanChangeHandler(e, 'isBlock')}>Block</Checkbox>
  </div>
  <div class="field-wrapper">
    <Checkbox name="is_disabled" value={booleanValuesSet.isDisabled} onChange={(e) => booleanChangeHandler(e, 'isDisabled')}>Disabled</Checkbox>
  </div>
  <div class="field-wrapper">
    <Checkbox name="is_convex" value={booleanValuesSet.isConvex} onChange={(e) => booleanChangeHandler(e, 'isConvex')}>Convex</Checkbox>
  </div>
  <div class="field-wrapper">
    <Checkbox name="is_loading" value={booleanValuesSet.isLoading} onChange={(e) => booleanChangeHandler(e, 'isLoading')}>Loading</Checkbox>
  </div>
</div>
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
  .checkboxes-fieldset {
    display: flex;
    gap: 2rem;
  }
  .field-wrapper {
    min-width: 120px;
  }
</style>
