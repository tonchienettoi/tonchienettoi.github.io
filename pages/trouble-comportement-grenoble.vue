<template>
    <div class="px-2">
        <burger></burger>
         <nav-bar
            :page="'comportement'"></nav-bar>
        <h1 class="text-blue-700 font-semibold text-center text-4xl mt-8">Résolution des Troubles du Comportement</h1>
    
    
        <div class="lg:grid-cols-3 lg:grid lg:gap-8  px-5 mt-5">
            <div class="shadow-lg rounded-b-2xl pb-3 "> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Destruction - Anxiété</p>
                <img src="../assets/images/chien_destruction.jpg" class="w-full" alt="chien qui détruit"/>
                <p class="mt-2 px-3">Votre chien <span class="font-semibold">détruit</span>  en votre présence ainsi qu'en votre absence ? Il est souvent  anxieux ? </p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3 mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Propreté</p>
                <img src="../assets/images/chien_sale.jpg" class="w-full" alt="chien qui fait ses besoins à l'interieur"/>
                <p class="mt-2 px-3">Votre chien  <span class="font-semibold">fait ses besoins dans la maison</span> en votre absence et/ou en votre présence et vous ne savez plus quoi faire ? <br/>Vous aimeriez qu’il comprenne enfin que <span class="font-semibold"> faire ses besoins, c’est dehors !</span> Vous aimeriez être conseillé sur l'apprentissage de la propreté de votre chiot ?</p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3  mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Aboiements</p>
                <img src="../assets/images/chien_aboyeur.webp" class="w-full" alt="chien qui aboie"/>
                <p class="mt-2 px-3"> Il <span class="font-semibold">aboie</span> beaucoup à la maison, dans la rue ou quand il est seul ? <br/>Vous aimeriez pouvoir <span class="font-semibold">le laisser seul</span>, partir en toute tranquillité car vous saurez que votre chien reste <span class="font-semibold">sage en votre absence ?</span></p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3 mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Vols</p>
                <img src="../assets/images/chien_vol.jpg" class="w-full" alt="chien qui vole"/>
                <p class="mt-2 px-3">Il vole de la nouriture ou vos affaires ? <br/> Vous aimeriez pouvoir lui faire confiance et le laisser seul ?</p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3  mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Sauts</p>
                <img src="../assets/images/chien_sauteur.png" class="w-full" alt="chien qui saute"/>

                <p class="mt-2 px-3">Il <span class="font-semibold">saute sur vous, vos enfants</span>, les gens en général ? Vous n’osez plus recevoir vos amis, <span class="font-semibold">votre chien vous fait honte ?</span></p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3 mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Fugue</p>
                <img src="../assets/images/chien_fugueur.jpg" class="w-full" alt="chien qui fugue"/>
                <p class="mt-2 px-3">Il <span class="font-semibold"> fugue</span> et vous ne savez pas quoi faire pour stopper cela ? Vous avez peur qu'il se perde et ne puisse pas retrouver le chemin de la maison ? </p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3 mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Hyperactivité</p>
                <img src="../assets/images/chien_hyperactif.jpg" class="w-full" alt="chien hyperactif"/>
                <p class="mt-2 px-3">Il est hyperactif et <span class="font-semibold">vous n'arrivez pas à le canaliser ? </span> Votre chien ne tient pas en place, ne se repose jamais. Il souffre peut être d'hyperactivité et/ou d'hypersensibilité ?</p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3 mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Peur</p>
                <img src="../assets/images/chien_peureux.jpg" class="w-full" alt="chien qui a peur"/>
                <p class="mt-2 px-3">Il a peur des bruits, des gens, des autres chiens ? Votre chien a peur à l'extérieur et vous voudriez qu'il soit plus détendu, <span class="font-semibold">moins craintif du monde qui l'entoure ?</span></p>
            
            </div>

            <div class="shadow-lg rounded-b-2xl pb-3 mt-5 lg:mt-0"> 
                <p class="bg-blue-500 text-center text-white font-semibold rounded-t-2xl text-2xl">Agressivité</p>
                <img src="../assets/images/chien_agressif.png" class="w-full" alt="chien agressif"/>
                <p class="mt-2 px-3"> Il est <span class="font-semibold">agressif envers les autres chiens, les humains, les vélos ?</span> Que ce soit par crainte, par protection ou pour toute autre raison, n'attendez plus, ensemble nous pouvons changer son comportement  </p>
            
            </div>

        </div>

        <p class="text-blue-700  text-center text-4xl mt-8">Aucun cas n'est irrécupérable ! </p>

        <p class="text-blue-700  text-center text-4xl mt-3">il y a des solutions, contactez <span class="company_name text-5xl hidden lg:inline-block">Ton Chien et Toi</span></p>
        <p class="company_name text-5xl mt-2 block lg:hidden text-center text-blue-700">Ton Chien et Toi</p>

        <div class="flex">
        <a 
          class="font-bold  text-4xl text-blue-700 mt-3 mx-auto text-center"
          href="tel:+33660680696">06 60 68 06 96</a>
        </div>
        <footer-site></footer-site>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800;900&display=swap');

html {
  font-family: "Montserrat";
  color: "#2d3748"
}
</style>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    components : {
        Splide, SplideSlide
    },

    data() {
        return {
            options: {
                type: 'loop',
                rewind : true,
                arrows: true,
                autoplay: true,
                margin:0   ,
                	focus    : 'center',
             
	
            },
        }
    },

    head () {
    return {
      title: "Résolution de troubles du comportements - De Grenoble à Chambéry",
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: "Aucun cas n'est irrecupérable ! Il y a des solutions pour tous les troubles du comportement."
        }
      ]
    }
  }
    
    
}
</script>
