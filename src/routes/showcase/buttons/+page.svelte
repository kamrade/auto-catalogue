<script lang="ts">
  import { Button, Checkbox, type ThemeType, type ICatButtonProps } from "$lib";

  let theme: ThemeType = 'primary';
  let primary_checkbox_value = true;
  let secondary_checkbox_value = false;

  const getButtonProps: (th: ThemeType) => ICatButtonProps = (th: ThemeType) => ({
    theme: th,
    variant: 'contained',
    size: 'lg',
    shape: 'rounded',
  });

  let buttonProps = getButtonProps(theme);

  const checkboxClick = (e: MouseEvent) => {
    let th = (e.target as HTMLInputElement).id;

    if (th.includes('primary')) {
      theme = 'primary';
    }
    if (th.includes('secondary')) {
      theme = 'secondary';
    }

    primary_checkbox_value = theme === 'primary';
    secondary_checkbox_value = theme === 'secondary';
    buttonProps = getButtonProps(theme);

  }


</script>


<div>
  <div>
    <label for="theme_primary_checkbox">
      <Checkbox id="theme_primary_checkbox" name="theme_primary_checkbox" value={primary_checkbox_value} onClick={checkboxClick} />
      <span class="pl-1">Primary</span>
    </label>
  </div>
  <div>
    <label for="theme_secondary_checkbox">
      <Checkbox id="theme_secondary_checkbox" name="theme_secondary_checkbox" value={secondary_checkbox_value} onClick={checkboxClick} />
      <span class="pl-1">Secondary</span>
    </label>
  </div>
</div>

<div class="my-6">
  <Button props="{buttonProps}">Primary Button</Button>
</div>

<style lang="scss">

</style>
