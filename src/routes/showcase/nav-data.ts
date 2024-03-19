import type { IMainMenuItem } from "$lib"

export let uikitMenuLinks: (IMainMenuItem | string)[] = [
  {
    link: '/showcase/dropdowns',
    label: 'Dropdowns'
  }, {
    link: '/showcase/dropdown-with-search',
    label: 'Dropdown with Search'
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
    link: '/showcase/select',
    label: 'Select'
  }, {
    link: '/showcase/grid',
    label: 'Bootstrap Grid'
  }
];

export let sectionsMenuLinks: (IMainMenuItem | string)[] = [
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
];

export let appMenuLinks: (IMainMenuItem | string)[] = [
  {
    link: '/showcase/catalogue',
    label: 'Catalogue'
  }, {
    link: '/showcase/catalogue2',
    label: 'Catalogue v2'
  }
];