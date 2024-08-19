import { mainClassName } from "./Button";
import type { ICatButtonProps } from "./Button";

export const defaultProps: ICatButtonProps = {
  className: mainClassName,
  theme: 'secondary',
  variant: 'contained',
  size: 'lg',
  shape: 'straight',
  block: false,
  disabled: false,
  convex: false,
  loading: false
};
