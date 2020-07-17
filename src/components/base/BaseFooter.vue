<template>
  <footer class="page-footer font-weight-light bg-dark text-white shadow p-3 fixed-bottom">
    <div class="container">
      <div class="row">
        <!-- SLOT -->
        <div class="w-100 text-center p-1 mb-3 border border-light rounded">
          <slot></slot>
        </div>
      </div>
      <div class="row">
        <!-- INFOS -->
        <div class="col-3">
          <h5 class="font-weight-bold text-uppercase pb-1">Infos</h5>
          <p
            v-show="!isCollapsed"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet urna eget sollicitudin lobortis. Nulla vulputate dolor dapibus placerat pellentesque.</p>
        </div>

        <!-- RESEAUX SOCIAUX -->
        <div class="col-3">
          <h5 class="font-weight-bold text-uppercase pb-1">Où nous trouver?</h5>
          <div v-show="!isCollapsed">
            <p class="text-uppercase font-weight-bold mb-0 pb-0">rtbf</p>
            <p>
              <small>Auguste Reyers 52, 1030 Bruxelles</small>
            </p>
            <p>
              <button class="btn btn-outline-light btn-sm mt-3" type="button">Contact</button>
            </p>
          </div>
        </div>

        <!-- SITEMAP -->
        <div class="col-6">
          <h5 class="font-weight-bold text-uppercase pb-1">Sitemap</h5>
          <div v-show="!isCollapsed" class="row">
            <div class="col-sm">
              <h6>Titre 1</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <h6>Titre 2</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT -->
      <div class="footer-copyright text-center pt-3">
        © 2020 Copyright:
        <a href="https://rtbf.be/">rtbf.be</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    isCollapsed: Boolean
  }
};
</script>

<style>
</style>