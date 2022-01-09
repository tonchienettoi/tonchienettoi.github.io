<template>
    <div>
        <burger
     ></burger>
        <nav-bar
            :page="'balade'"></nav-bar>

        <div class="lg:flex mt-12 px-10">

            <div class="w-full lg:w-2/3 lg:pl-6 lg:pr-10 self-center">
                <div class="inline-flex mx-auto lg:mx-0">
                    <div class="bg-blue-400 w-10 h-1 self-center mr-6"></div>
                    <p class="text-blue-500 font-semibold text-2xl text-center">Balades éducatives</p>
                    <div class="bg-blue-400 w-10 h-1 self-center ml-6"></div>
                </div>

                <p class="italic lg:ml-16 text-lg text-center">Psychologie du bonheur</p>

                <p class="text-lg mt-8 text-justify">Le chien est un animal social, votre compagnon pourra profiter de balades entre copains, idéales pour combler ses besoins de dépenses physiques, de dépenses mentales et de vie sociale. Il apprendra les codes canins et vous aurez ainsi un <span class="font-semibold">chien épanoui !</span></p>

                <p class="font-semibold text-lg text-center lg:text-left  mt-2">Durant la balade, nous ferons quelques exercices d'obéissance.</p>
            </div>
            <img src="../assets/images/balade_educ.jpg" class="w-full lg:w-1/3 mt-3 lg:mt-0"/>


        </div>

        <div class="lg:flex mt-12 px-10">

            <div class="w-full lg:w-2/3 lg:pl-6 lg:pr-10 self-center">
                <div class="inline-flex mx-auto lg:mx-0">
                    <div class="bg-blue-400 w-10 h-1 self-center mr-6"></div>
                    <p class="text-blue-500 font-semibold text-2xl text-center">Balades de votre toutou</p>
                    <div class="bg-blue-400 w-10 h-1 self-center ml-6"></div>
                </div>

                <p class="italic lg:ml-16 text-lg text-center">Dépense physique et amusement</p>

                <p class="text-lg mt-8 text-justify"><span class="font-semibold">Vous vous absentez  dans la journée</span> et vous voulez que votre chien puisse sortir se dégourdir les pattes ?</p>

                <p class="text-lg mt-2">Votre chien ne supporte pas de rester seul quand vous travaillez ?</p>
            </div>
            <img src="../assets/images/balade_toutou.jpg" class="w-full lg:w-1/3 mt-3 lg:mt-0"/>


        </div>

        <p class="text-blue-700  text-center text-4xl mt-10 mx-3">il y a des solutions, contactez <span class="company_name text-5xl hidden lg:inline-block">Ton Chien et Toi</span></p>
        <p class="company_name text-5xl mt-2 block lg:hidden text-center text-blue-700">Ton Chien et Toi</p>

        <div class="flex">
        <a 
          class="font-bold  text-4xl text-blue-700 mt-3 mx-auto text-center"
          href="tel:+33660680696">06 60 68 06 96</a>
        </div>
                
        <footer-site></footer-site>

    </div>
</template>
<script>
export default {
   head () {
        return {
        title: "Ton chien et toi - Promenade - De Grenoble à Chambéry",
        meta: [
            { 
            hid: 'description', 
            name: 'description', 
            content: "Ton Chien et Toi propose des balades éducatives alliant dépense physique, amusement et éducation. Votre chien se sentira bien dans ses papattes"
            }
        ]
        }
    } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800;900&display=swap');

html {
  font-family: "Montserrat";
  color: "#2d3748"
}
</style>