<script>
  import { Button, Modal } from "$lib";
  let isShowModal = false;
  const showModal = () => (isShowModal = true);
  const hideModal = () => (isShowModal = false);
  const toggleModal = () => (isShowModal = !isShowModal);
</script>

<h1>Modal Dialog</h1>

<Button props={{ onClick: toggleModal }}>Open Modal Dialog</Button>

<Modal
  {hideModal}
  isVisible={isShowModal}>Modal Content</Modal
>
