<template>
    <div>
        <section id="footer" class="lg:grid lg:grid-cols-3 lg:gap-10 border-t-2 mt-20 pt-5 px-3">
        <p>© {{year }} Ton chien et toi</p>
        <p>Fait avec  ❤  dans les Alpes 🏔</p>
        </section>
        <div class="text-xs mt-3">Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div class="text-xs">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>

</template>
<script>
export default {

  data(){
    return {
      year : 2021
    }
  },
  mounted(){
    var d = new Date()
    this.year = d.getFullYear()
  }
}
</script>
