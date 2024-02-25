import { mainClassName } from "./Button.js";
import type { ICatButtonProps } from "./Button.js";

export let defaultProps: ICatButtonProps = {
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