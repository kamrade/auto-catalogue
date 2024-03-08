import type { IMainMenuItem } from "$lib"

export let uikitMenuLinks: (IMainMenuItem | string)[] = [
  'UIKit',
  {
    link: '/showcase/dropdowns',
    label: 'Dropdowns'
  }, {
    link: '/showcase/links',
    label: 'Links'
  }, {
    link: '/showcase/checkers',
    label: 'Checkers'
  }, {
    link: '/showcase/text-inputs',
    label: 'Text Inputs'
  }, {
    link: '/showcase/dropdown-with-search',
    label: 'Dropdown with Search'
  }
];

export let sectionsMenuLinks: (IMainMenuItem | string)[] = [
  'UIKit',
  {
    link: '/showcase/payment-form',
    label: 'Payment Form'
  }, {
    link: '/showcase/filter-select',
    label: 'Filter Select'
  }, {
    link: '/showcase/menu',
    label: 'Menu'
  }
]