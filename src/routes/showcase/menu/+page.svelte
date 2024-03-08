<script lang="ts">
  import { MainMenuSection } from '$lib';
  import type { IMainMenuItem } from '$lib';

  let menuLinks: (IMainMenuItem | string)[] = [
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
  ]

</script>

<h1>Main Menu Section</h1>
<MainMenuSection
  label="UIKit" {menuLinks}
/>