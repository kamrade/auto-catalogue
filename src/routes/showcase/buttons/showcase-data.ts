import { type ICatButtonProps, type IRadioGroupData, type ThemeType, type VariantType, type SizeType, type ShapeType} from "$lib";

export interface IOptionsSet {
  radioThemeData: IRadioGroupData[],
  radioVariantData: IRadioGroupData[],
  radioSizeData: IRadioGroupData[],
  radioShapeData: IRadioGroupData[]
}

export interface IValuesSet {
  themeValue: string,
  variantValue: string,
  sizeValue: string,
  shapeValue: string,
}

export const radioThemeDataDefault: IRadioGroupData[] = [{
  name: 'primary',
  label: 'Primary',
  id: 'primary_radio',
  value: 'Primary',
  checked: true
}, {
  name: 'secondary',
  label: 'Secondary',
  id: 'secondary_radio',
  value: 'Secondary',
  checked: false
}];

export const radioVariantDataDefault: IRadioGroupData[] = [{
  name: 'contained',
  label: 'Contained',
  id: 'contained_radio',
  value: 'Contained',
  checked: true
}, {
  name: 'outlined',
  label: 'Outlined',
  id: 'outlined_radio',
  value: 'Outlined',
  checked: false
}];

export const radioSizeDataDefault: IRadioGroupData[] = [{
  name: 'sm',
  label: 'Sm',
  id: 'sm_radio',
  value: 'Sm',
  checked: false
}, {
  name: 'lg',
  label: 'Lg',
  id: 'lg_radio',
  value: 'Lg',
  checked: true
}];

export const radioShapeDataDefault: IRadioGroupData[] = [{
  name: 'straight',
  label: 'Straight',
  id: 'straight_radio',
  value: 'Straight',
  checked: false
}, {
  name: 'rounded',
  label: 'Rounded',
  id: 'rounded_radio',
  value: 'Rounded',
  checked: true
}];

export const getButtonProps: (th: ThemeType, variant: VariantType, size: SizeType, shape: ShapeType, block: boolean, disabled: boolean) => ICatButtonProps =
  (th, variant, size, shape, block, disabled) => ({
    theme: th,
    variant: variant,
    size: size,
    shape: shape,
    block: block,
    disabled: disabled,
  });
