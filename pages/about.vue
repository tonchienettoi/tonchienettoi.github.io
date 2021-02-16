<template>
    <div>
        <burger></burger>

        <nav-bar
                :page="'about'"></nav-bar>

        <div class="lg:flex lg:mx-10 mt-10">
            <div class="w-2/3 self-center mx-4 lg:mx-0">
                <h1 class="leading-none font-bold text-5xl">Anne <br/>Blauwart</h1>
                <h2 class="font-semibold text-3xl mt-4">Educatrice - Comportementaliste canin</h2>
                <h2 class="font-semibold text-3xl">Passionée</h2>

            </div>

            <img
                src="../assets/images/anne_mer.jpg" class="w-full lg:w-1/3 mt-3 lg:mt-0"/>
        
        </div>
        <p class="text-center mt-12 font-semibold text-lg">Formée par Vincent MARCHAL, méthode EDUC DOG ™</p>

        <p class="mt-5 text-lg px-10 text-justify">Une méthode unique et révolutionnaire pour éduquer tous types de chiens, quel que soit l’âge, la race,   le caractère ou encore le passé du chien et qui permet surtout de résoudre TOUS les troubles du comportement.</p>
        <p class="text-lg px-10 text-justify">Cette méthode positive mais non permissive s’applique dans le respect total du chien et son bien être.</p>
        <p class="text-lg px-10 text-justify">Cette méthode a déjà été testée et approuvée sur des milliers de chiens</p>

         <img
            src="../assets/images/anne_educ_dog.jpg" class="w-full lg:w-1/3 mx-auto  mt-5"/>
        
        <a class="flex mx-4 lg:mx-10 mt-10 px-3 hover:bg-blue-100"
        target="_blank"
            href="https://draaf.auvergne-rhone-alpes.agriculture.gouv.fr/Certificat-de-Capacite-destine-a-l">
           
           <img
            src="../assets/images/france.png" class=" w-12 lg:w-24 object-contain"/>

            <div class="ml-3 lg:ml-8">
                <p class="text-blue-700 text-xl font-semibold">Titulaire de l’ACACED</p>
                <p class="">Diplôme d’état, (Attestation de Connaissances relatives aux activités liées aux Animaux de Compagnie d’Espèces Domestiques).</p>

            </div>
         
        </a>
        
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