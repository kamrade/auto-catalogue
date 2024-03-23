<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements";
  import { Button, addToast, TextInput } from "$lib";

  let inputEl: HTMLInputElement;

  let currentText = "";
  const onChange: ChangeEventHandler<HTMLInputElement> = (e: Event) => {
    currentText = (e.target as HTMLInputElement).value || "";
  };

  const addNotification = () => {
    addToast({
      text: currentText
    });
  };

  const handleSubmitForm = () => {
    addNotification();
    currentText = "";
    setTimeout(() => inputEl && inputEl.focus(), 50);
  };
</script>

<h1>Notifications</h1>

<form on:submit={handleSubmitForm}>
  <div class="mb-3">
    <TextInput bind:inputEl {onChange} value={currentText} label="Toast title"
    ></TextInput>
  </div>
  <Button type="submit">Add Notification</Button>
</form>
