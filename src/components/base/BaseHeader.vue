<template>
  <header class="bg-white border-bottom py-2 px-4">
    <div class="row">
      <div class="col">
        <div class="d-flex">
<!--         <img src="../../../src/assets/img/rtbf-logo-lanterne.svg" height="50px" alt="logo-rtbf-lanterne">
 -->        <h1 class="rtbf-logo-name pl-3">lanterne rtbf</h1>
        </div>
      </div>
      <div class="col-md-content pr-3">
        <slot name="options"></slot>
        <!-- <p> 👩‍🎤 login rtbf, un elements de notif, un bouton de déconnections... des trucs quoi </p> -->
      </div>
    </div>
    <div class="row container">     
      <slot name="nav"></slot>
    </div>
  </header>
  <!-- Ajouter une props qui quand il recoit une info, il change de couleur-->
</template>

<script>

export default {
  name: 'BaseHeader',
  components: {
  }
}
</script>

<style lang="css">
.rtbf-logo-name{
  color: #073670;
  font-size: 2rem;
}
</style>

