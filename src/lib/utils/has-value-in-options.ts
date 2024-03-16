import type { SelectOption } from '$lib';

export const hasValueInOptions = (options: SelectOption[], currentValue: string) => {
  const result = options?.find((opt: SelectOption) => {
    return opt.value === currentValue
  });

  return result ? true : false;
}