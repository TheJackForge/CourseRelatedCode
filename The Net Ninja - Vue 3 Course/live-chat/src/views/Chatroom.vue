<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: { Navbar },
  setup() {
    
  }

}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }

  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>