## Components

- [x] Component:Checkbox.Check/uncheck animations
- [x] Component:Checkbox. Add name or ID
- [x] Component:Dropdown. Custom width
- [x] Component:Dropdown. Max height
- [x] Component:Dropdown. Options with Icon
- [x] Component:Dropdown. Highlight current selected value.
- [x] Component:Checkbox. Single Checkbox.
- [x] Component:Checkbox. Disabled, ID, Autofocus.

<!-- Current -->

- COMPONENT:SELECT:
- [x] with button
- [x] Global scss

- [x] COMPONENT:TYPOGRAPHY: class text-muted
- [x] COMPONENT:SPACERS: spacers classes

- COMPONENT:TEXTINPUT:
- [x] disabled
- [x] readonly
- [x] label
- [x] Suffix label
- [x] Prefix icon
- [x] Suffix icon
- [x] Buttons confirm / cancel (as a part of the suffix)
- [x] On focus – show dropdown

- COMPONENT:AUTOCOMPLETE:
- [x] Show/hide on Esc
- [x] Select value on enter

- COMPONENT:DROPDOWN:
- [x] Navigation with keyboard
- [x] Scroll when navigate with keyboard
- [x] Inner search
- [x] Toggle on Escape

- COMPONENT:TEXTINPUT:
- [x] Sizes - sm | md
- [~] Variant - borderless | contained | outlined | underlined

- [x] COMPONENT:MENU: header navigation
- [x] Combine components: MENU & DROPDOWN

- SYSTEM
- [x] Docker configuration
- [x] Build adapter to upload to the server

- COMPONENT: SELECT
- [x] Select with TextField and Search in the Dropdown

- [x] Provide types for a data
- [x] Route validations

- [x] Component:Menu
- [x] Show Menu on:hover

- [x] Global scss

- [x] DROPDOWN: Force focus
- [x] DROPDOWN: Scroll to current value
- [x] DROPDOWN: Shadow search
- [x] GRID: Responivity.
- [x] TEXTINPUT: Force focus
- [x] Default values for route
- [x] SELECT: Select with Button: hide Dropdown on blur

- [ ] DROPDOWN appearing animation
- [ ] MODAL
- [ ] GALLERY MODAL
- [ ] IMAGE: with preview
- [ ] DROPDOWN: Dropdown option as a link
- [ ] DROPDOWN: Dropdown option as a handler
- [ ] SELECT: Select with Button: hide dropdown when value changed
- [ ] DROPDOWN: case - when the user entered in Search value which doesn't match any of the option and the the user clicks EnterG

<!-- Backlog -->

- [ ] TEXTINPUT: Variant - borderless | contained | outlined | underlined
- [ ] MAINMENU: Animations like Stripe
- [ ] DROPDOWN: Multiselection with checkboxes
- [ ] DROPDOWN: Appearing animation
- [ ] DROPDOWN: Position in the DOM. Now it goes to the end of the body element. Is it ok or not...
- [ ] HR: Update spacing
- [ ] CONTAINER: Responsive Container
- [ ] TEXTAREA
- [ ] MULTISELECT
- [ ] TABS
- [ ] DRAWER
- [ ] ICON: Now I am using the Remixicon font. It would be better to use the Component approach.

## Features

## User Story

- the user navigated to `/catalogue` link
  -- he will be redirected to the page with empty filters
- the user navigated to `/catalogue/<correct_id>` with correct information
  -- he will see corresponding car brand, model, generation
- the user navigated to `/catalogue/<INCORRECT_ID>` with invalid ids
  -- he will be redirected to page with empty filters, error message should be shown
- the user navigated to `/catalogue/0000000000`
  -- random car will be shown

## Links

- Toast notification system[https://svelte.dev/repl/0091c8b604b74ed88bb7b6d174504f50?version=3.35.0]
