<script lang="ts">
  export let placeholder: string = '';

</script>

<div class="TextInput">
  <input {placeholder} class="TextInput-el" type="text" />
</div>

<style lang="scss">
  .TextInput {
    display: block;
    position: relative;
    line-height: 0;
    
    &:focus-within {
      &::after {
        background: #333;
        transform: scaleY(2);
      }  
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      left: 0;
      right: 0;
      background: #ccc;
      transition: all .3s ease-in-out;
      transform-origin: 100% 100%;
    }

    .TextInput-el {
      border: none;
      position: relative;
      height: 100%;
      width: 100%;
      padding: 0.5rem 0;
      font-size: 1rem;
      line-height: 1.5;

      &::placeholder {
        color: var(--text-color-muted);
      }

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
</style>