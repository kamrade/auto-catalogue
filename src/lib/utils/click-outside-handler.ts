// Use className with dot or not?
export const clickOutsideHandler = (event: MouseEvent, className: string, handler: () => void) => {
  if( !((event.target as HTMLElement).closest('.' + className)) ) {
    handler && handler();
  }
}

export const clickOutsideObject = (event: MouseEvent, element: (HTMLElement | null), handler: () => void) => {

  let target = event.target as HTMLElement;

  if ( !(element?.contains(target)) || target.nodeName === 'BODY' ) {
    handler && handler();
  }
}