<template>
    <div class="" >
        
        <section id="footer" class="lg:grid lg:grid-cols-3 lg:gap-10 mt-20 pt-5 border-t-2  px-3 items-center">
          
          <div class="w-full lg:inline-block flex">
          <div class="inline-block mx-auto lg:mx-0 flex mb-4 lg:mb-0">
            <a href="https://www.facebook.com/Tonchienettoi"><img src="../assets/images/facebook.svg" class="w-8 h-8 mr-6"/></a>
            <a href="https://www.instagram.com/tonchienettoi/"><img src="../assets/images/instagram.svg" class="w-8 h-8"/></a>
          </div>
          </div>
        <p>© {{year }} <span class="company_name text-lg">Ton chien et toi</span></p>
        <p>Fait avec  ❤  dans les Alpes 🏔</p>
        </section>
        <div class="text-xs mt-3">Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div class="text-xs">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>

</template>
<style>
@font-face { font-family: HighSummit; src: url('../assets/fonts/HighSummit.TTF'); } 
.company_name {
    font-family: HighSummit
}
</style>

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
