<script lang="ts">
  import { Button, Modal, ModalDialog, Hr, ModalGallery, type IGalleryPhoto } from "$lib";

  let isModalShowed = [false];
  const showModal = (index: number) => (isModalShowed[index] = true);
  const hideModal = (index: number) => (isModalShowed[index] = false);

  let mazdaPath = "https://media-assets.mazda.eu/image/upload/c_fill,w_1800,h_851,q_auto,f_auto/mazdahr/globalassets/cars/2023-mazda6-wagon";
  let mazda: IGalleryPhoto[] =  [{
    path: "221103_1800_851_gallery_sdn_item_2-1-1.jpg",
  }];

  let intPath = "https://i0.wp.com/www.car-revs-daily.com/wp-content/uploads/2014/11";
  let interior = [{
    path: "2016-Mazda6-Interior-4.jpg"
  }];
</script>

<h1>Modal</h1>

<div class="mb-3">
  <Button props={{ onClick: () => showModal(0) }}>Show Modal (0)</Button>
  <Button props={{ onClick: () => showModal(1) }}>Show Modal (1)</Button>
  <Button props={{ onClick: () => showModal(2) }}>Show Modal Gallery (2)</Button>
  <Button props={{ onClick: () => showModal(3) }}>Show Modal Gallery (3)</Button>
</div>

{#if isModalShowed[3]}
  <Modal
    isVisible={isModalShowed[3]}
    hideModal={() => hideModal(3)}
    blackout={true}
    closeOnBackdrop={true}
    showCloseButton={true}
    hideOnEscape={true}
  >
    <ModalGallery images={mazda} imagesPath={mazdaPath} thumbnailsPath={mazdaPath} currentImage={0}>
    </ModalGallery>
  </Modal>
{/if}

{#if isModalShowed[2]}
  <Modal
    isVisible={isModalShowed[2]}
    hideModal={() => hideModal(2)}
    blackout={true}
    closeOnBackdrop={true}
    showCloseButton={true}
    hideOnEscape={true}
  >
  <ModalGallery images={interior} imagesPath={intPath} thumbnailsPath={intPath} currentImage={0}>
    </ModalGallery>
  </Modal>
{/if}

{#if isModalShowed[1]}
  <Modal isVisible={isModalShowed[1]} hideModal={() => hideModal(1)} showCloseButton={true} hideOnEscape={true}>
    <ModalDialog>
      <h1 class="mb-0">Lorem ipsum dolor sit amet</h1>
      <Hr />
      <p class="mb-0 pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam maximus condimentum. Maecenas pharetra
        accumsan euismod. Nulla sed augue iaculis, congue justo eu, tincidunt diam. Nulla scelerisque est in magna
        posuere aliquam. Fusce non ex lacinia, imperdiet sapien non, consequat felis. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Donec pretium erat mi, in ullamcorper libero venenatis ut. Praesent rhoncus eu
        erat eget feugiat. Mauris quis cursus ex. Fusce lacinia eros sed accumsan efficitur. Donec sed sagittis enim.
        Nulla suscipit rutrum libero, ut venenatis tellus gravida et. Mauris et nunc vehicula, commodo est ut, laoreet
        nibh. Pellentesque efficitur in augue sit amet suscipit. Duis in felis tempor purus egestas accumsan vel eu
        lorem. Praesent vitae arcu turpis.
      </p>
    </ModalDialog>
  </Modal>
{/if}

{#if isModalShowed[0]}
  <Modal isVisible={isModalShowed[0]} hideModal={() => hideModal(0)} showCloseButton={true} hideOnEscape={true}>
    <ModalDialog>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam maximus condimentum. Maecenas pharetra
        accumsan euismod. Nulla sed augue iaculis, congue justo eu, tincidunt diam. Nulla scelerisque est in magna
        posuere aliquam. Fusce non ex lacinia, imperdiet sapien non, consequat felis. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Donec pretium erat mi, in ullamcorper libero venenatis ut. Praesent rhoncus eu
        erat eget feugiat. Mauris quis cursus ex. Fusce lacinia eros sed accumsan efficitur. Donec sed sagittis enim.
        Nulla suscipit rutrum libero, ut venenatis tellus gravida et. Mauris et nunc vehicula, commodo est ut, laoreet
        nibh. Pellentesque efficitur in augue sit amet suscipit. Duis in felis tempor purus egestas accumsan vel eu
        lorem. Praesent vitae arcu turpis. Nam imperdiet orci est, et mattis risus aliquet sit amet. Donec ante dui,
        euismod sed lacus sagittis, iaculis vestibulum mi. Sed eleifend purus vel euismod ultrices. Donec ut orci eros.
        Etiam at lorem hendrerit, convallis felis in, lobortis ante. Quisque vitae tempus dolor, eu placerat augue.
        Proin pretium pretium nunc vel venenatis. Nunc porttitor ipsum vitae tortor luctus sollicitudin. Donec vulputate
        facilisis lacus vel placerat. Proin eleifend libero eget elementum aliquet. Duis pellentesque turpis eu quam
        lobortis, nec sollicitudin felis venenatis. Nulla facilisi. Aliquam vehicula pellentesque felis, vel faucibus
        nisi tristique in. Aliquam eu vestibulum dui. Pellentesque sit amet sem metus. Vestibulum id orci et augue
        cursus tempus. Proin ut mauris non elit consequat sagittis. Etiam sit amet varius neque, ac laoreet erat.
        Pellentesque congue libero massa, eget viverra sapien hendrerit sed. Duis ligula tellus, pharetra quis nibh id,
        condimentum iaculis augue. Duis at maximus purus. Donec at mollis libero. Duis eu rutrum leo. Quisque auctor
        pretium ex, mattis consectetur lectus tincidunt in. Vivamus malesuada diam sit amet convallis varius. Mauris
        arcu leo, fermentum imperdiet est vel, luctus tristique ante. Duis in dui quam. Proin gravida lorem vitae
        tincidunt scelerisque. Suspendisse efficitur egestas lorem, vitae accumsan eros rutrum at. Maecenas aliquet
        lobortis nunc sed egestas. Cras quis tempus lacus, et facilisis ex. Mauris quis lacus dolor. Aliquam massa
        nulla, sollicitudin a iaculis et, iaculis in turpis. Vivamus varius sed orci nec aliquam. Nam pulvinar risus
        eget quam aliquam tristique. Aliquam varius velit fermentum eros mattis pulvinar. Curabitur eros libero, porta
        ac leo id, vestibulum iaculis nibh. Vestibulum faucibus congue feugiat. Suspendisse vehicula lectus eu mauris
        eleifend, vel feugiat orci vestibulum. Vestibulum nisl nulla, ornare in vulputate vel, feugiat nec neque. Donec
        sed accumsan lectus. Aenean semper efficitur aliquam. Praesent iaculis arcu dolor, vitae lobortis arcu ultrices
        at. Cras porta justo in elit interdum volutpat. Aliquam eget risus mollis, hendrerit quam eu, venenatis ante.
        Cras laoreet risus eu bibendum varius. Vivamus dui libero, dignissim et diam viverra, pharetra consequat velit.
        Aliquam at luctus erat. Nulla dapibus consequat lacus, id iaculis sem porta ac. Nullam blandit tellus non
        consequat mollis. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        aliquam maximus condimentum. Maecenas pharetra accumsan euismod. Nulla sed augue iaculis, congue justo eu,
        tincidunt diam. Nulla scelerisque est in magna posuere aliquam. Fusce non ex lacinia, imperdiet sapien non,
        consequat felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pretium erat mi, in
        ullamcorper libero venenatis ut. Praesent rhoncus eu erat eget feugiat. Mauris quis cursus ex. Fusce lacinia
        eros sed accumsan efficitur. Donec sed sagittis enim. Nulla suscipit rutrum libero, ut venenatis tellus gravida
        et. Mauris et nunc vehicula, commodo est ut, laoreet nibh. Pellentesque efficitur in augue sit amet suscipit.
        Duis in felis tempor purus egestas accumsan vel eu lorem. Praesent vitae arcu turpis. Nam imperdiet orci est, et
        mattis risus aliquet sit amet. Donec ante dui, euismod sed lacus sagittis, iaculis vestibulum mi. Sed eleifend
        purus vel euismod ultrices. Donec ut orci eros. Etiam at lorem hendrerit, convallis felis in, lobortis ante.
        Quisque vitae tempus dolor, eu placerat augue. Proin pretium pretium nunc vel venenatis. Nunc porttitor ipsum
        vitae tortor luctus sollicitudin. Donec vulputate facilisis lacus vel placerat. Proin eleifend libero eget
        elementum aliquet. Duis pellentesque turpis eu quam lobortis, nec sollicitudin felis venenatis. Nulla facilisi.
        Aliquam vehicula pellentesque felis, vel faucibus nisi tristique in. Aliquam eu vestibulum dui. Pellentesque sit
        amet sem metus. Vestibulum id orci et augue cursus tempus. Proin ut mauris non elit consequat sagittis. Etiam
        sit amet varius neque, ac laoreet erat. Pellentesque congue libero massa, eget viverra sapien hendrerit sed.
        Duis ligula tellus, pharetra quis nibh id, condimentum iaculis augue. Duis at maximus purus. Donec at mollis
        libero. Duis eu rutrum leo. Quisque auctor pretium ex, mattis consectetur lectus tincidunt in. Vivamus malesuada
        diam sit amet convallis varius. Mauris arcu leo, fermentum imperdiet est vel, luctus tristique ante. Duis in dui
        quam. Proin gravida lorem vitae tincidunt scelerisque. Suspendisse efficitur egestas lorem, vitae accumsan eros
        rutrum at. Maecenas aliquet lobortis nunc sed egestas. Cras quis tempus lacus, et facilisis ex. Mauris quis
        lacus dolor. Aliquam massa nulla, sollicitudin a iaculis et, iaculis in turpis. Vivamus varius sed orci nec
        aliquam. Nam pulvinar risus eget quam aliquam tristique. Aliquam varius velit fermentum eros mattis pulvinar.
        Curabitur eros libero, porta ac leo id, vestibulum iaculis nibh. Vestibulum faucibus congue feugiat. Suspendisse
        vehicula lectus eu mauris eleifend, vel feugiat orci vestibulum. Vestibulum nisl nulla, ornare in vulputate vel,
        feugiat nec neque. Donec sed accumsan lectus. Aenean semper efficitur aliquam. Praesent iaculis arcu dolor,
        vitae lobortis arcu ultrices at. Cras porta justo in elit interdum volutpat. Aliquam eget risus mollis,
        hendrerit quam eu, venenatis ante. Cras laoreet risus eu bibendum varius. Vivamus dui libero, dignissim et diam
        viverra, pharetra consequat velit. Aliquam at luctus erat. Nulla dapibus consequat lacus, id iaculis sem porta
        ac. Nullam blandit tellus non consequat mollis. Aliquam erat volutpat.
      </p>
    </ModalDialog>
  </Modal>
{/if}

<style lang="scss">
  .image-wrapper {
    max-width: 100%;
    height: 90%;
    position: relative;
    text-align: center;
  }
  .modal-gallery-image {
    max-width: 100%;
    max-height: 100%;
  }
</style>
