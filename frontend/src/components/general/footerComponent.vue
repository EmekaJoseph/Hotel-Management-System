<script setup>

</script>


<template>
  <div class="footer container-fluid">
    <footer class="d-flex flex-wrap justify-content-center align-items-center">
      <ul class="nav col-md-12 justify-content-center list-unstyled d-flex">
        <span class="text-mute">&copy; 2022 House34</span>
        <li class="ms-3">
          <a class="text-mute" @click.prevent href>
            <i class="bi bi-twitter"></i>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-mute" @click.prevent href>
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-mute" @click.prevent href>
            <i class="bi bi-facebook"></i>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>



<style scoped>
.footer {
  /* background: rgb(245, 243, 243); */
  width: 100%;
  padding: 45px;
  /* font-weight: bold; */
  font-size: 15px;
  background-color: rgb(221, 219, 219);

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

.text-mute {
  color: #97a84c;
}
</style>