<template>
    <div>
        <burger></burger>

        <nav-bar
            :page="'education'"></nav-bar>

        <h1 class="text-blue-700 font-semibold text-center text-5xl mt-4 px-4">Éduquez votre chien</h1>

        <div class="lg:grid lg:grid-cols-2 lg:gap-6 px-4 lg:px-20 mt-4">

            <div class="shadow-md rounded-2xl">
          
                <img
                    src="../assets/images/chien_tire.jpg" class="w-full rounded-t-2xl" />

                <div class="flex p-3 ">
                    <img src="../assets/images/dog_educ.svg" class="w-12 mr-3" />
                    
                    <div >
                        <p class="text-xl text-blue-500 font-semibold">Il tire en laisse</p>
                        <p class=" text-gray-900">Vos balades sont un vrai calvaire, vous aimeriez enfin profiter de belles promenades calmes et sereines.</p>
                    </div>
                </div>

            </div>
            
            <div class="shadow-md rounded-2xl pb-2 mt-6 lg:mt-0">
          
                <img
                    src="../assets/images/chien_couche.jpg" class="w-full rounded-t-2xl" />

                <div class="flex p-3 ">
                    <img src="../assets/images/dog_play.svg" class="w-12 mr-3" />
                    
                    <div >
                        <p class="text-xl text-blue-500 font-semibold">Il n'obéit pas</p>
                        <p class=" text-gray-900">Vous aimeriez qu'il réponde rapidement aux ordres de base pour sa sécurité et votre tranquillité, l'amener partout avec vous et qu'il se comporte correctement.</p>
                    </div>
                </div>
                <div class="w-full flex">
                <div class="inline-flex mx-auto flex-wrap justify-center">
                    <p class="bg-blue-200 text-blue-700 px-2 rounded-2xl mr-3 my-1 lg:my-0">Assis</p>
                    <p class="bg-blue-200 text-blue-700 px-2 rounded-2xl mr-3 my-1 lg:my-0">Couché</p>
                    <p class="bg-blue-200 text-blue-700 px-2 rounded-2xl mr-3 my-1 lg:my-0 ">Stop</p>
                    <p class="bg-blue-200 text-blue-700 px-2 rounded-2xl mr-3 my-1 lg:my-0">Pas bougé</p>
                </div>
                </div>

            </div>

            <div class="shadow-md rounded-2xl mt-6 lg:mt-0">
          
                <img
                    src="../assets/images/chien_rappel.jpg" class="w-full rounded-t-2xl" />

                <div class="flex p-3 ">
                    <img src="../assets/images/dog.svg" class="w-12 mr-3" />
                    
                    <div >
                        <p class="text-xl text-blue-500 font-semibold">Il ne revient pas au rappel</p>
                        <p class=" text-gray-900">Promener son chien sans laisse, sans le stress de savoir s’il va revenir au rappel. Le laisser courir et jouer sans être attaché.</p>
                    </div>
                </div>

            </div>

            <div class="shadow-md rounded-2xl mt-6 lg:mt-0">
          
                <img
                    src="../assets/images/chiots.jpg" class="w-full rounded-t-2xl" />

                <div class="flex p-3 ">
                    <img src="../assets/images/dog.svg" class="w-12 mr-3" />
                    
                    <div >
                        <p class="text-xl text-blue-500 font-semibold">Vous avez un chiot qui a tout à apprendre</p>
                        <p class=" text-gray-900">Être bien conseillé pour réussir son intégration au sein de la famille,  mettre en place le plus tôt possible les règles de vie qui en feront un chien équilibré et heureux.</p>
                    </div>
                </div>

            </div>

        </div>

        <div class="mt-6">

            <p class="text-center  text-4xl text-blue-700">Rassurez-vous, il y a des solutions ! </p> 
            <p class="text-center text-4xl text-blue-700">Contactez <span class="company_name text-5xl hidden lg:inline-block">Ton Chien et Toi</span></p> 
            <p class="company_name text-5xl mt-2 block lg:hidden text-center text-blue-700">Ton Chien et Toi</p>

              <a 
                class="font-semibold  text-center w-full text-4xl text-blue-700 mt-5"
                href="tel:+33660680696"><p>06 60 68 06 96</p></a>

        </div>

        <footer-site></footer-site>
    </div>

</template>

<script>
export default {
    head () {
    return {
      title: "Éducation avec la méthode positive - De Grenoble à Chambéry",
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Éducation canine utilisant la Méthode positive non permissive' 
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800;900&display=swap');
@font-face { font-family: HighSummit; src: url('../assets/fonts/HighSummit.TTF'); } 
.company_name {
    font-family: HighSummit
}
html {
  font-family: "Montserrat";
  color: "#2d3748"
}
</style>

