<template>
  <div class="bg-white relative" id="app">
    
    <burger
     ></burger>
    <nav-bar
      :page="'index'"></nav-bar>

    <div class="relative z-0 bg-white">
      <img
              src="../assets/images/first_mobile.jpg"
              class="self-center w-full md:hidden"/>
     <img
              src="../assets/images/first.jpg"
              class="self-center w-full hidden md:block"/>

      <div class="absolute top-0 mt-16 lg:mt-24 ml-8">
        <div class="flex">
          <div class="bg-blue-400 w-8 h-1 self-center mr-3"/>
          <img class="h-10 self-center  object-contain" src="../assets/images/name_white.png"/> 

        </div>
        <h1 class="text-4xl lg:text-5xl text-gray-200 font-semibold">Education canine <br/> Troubles du comportement</h1>
        
      </div>

      <section class=" z-50 lg:grid px-2 lg:px-4 lg:grid-cols-3 lg:gap-10  mt-4 lg:-mt-16" id="education canine services">
        <div class="bg-white shadow lg:shadow-lg hover:bg-blue-100 flex px-2 py-3 rounded-xl">
          <NuxtLink to="/education" class="flex">
            <img src="../assets/images/dog_play.svg" alt="chien joue" class="w-16 h-16 self-center mr-3 bg-blue-200 p-2 rounded-full"/>
            <div>
              <p class="text-blue-500 text-lg font-semibold mb-2">Éducation</p>
              <p class="text-justify">Etre conseillé pour réussir son intégration au sein de la famille</p>

            </div>
          </NuxtLink>
        </div>
        <div class="bg-white shadow lg:shadow-lg hover:bg-blue-100 flex px-2 py-3 rounded-xl mt-4 lg:mt-0">
          <NuxtLink to="/comportement" class="flex">
            <img src="../assets/images/dog_comportement.svg" alt="chien comportement" class="w-16 h-16 self-center mr-3 bg-blue-200 p-2 rounded-full"/>
            <div>
              <p class="text-blue-500 text-lg font-semibold mb-2">Trouble du comportement</p>
              <p class="text-justify">Ton chien et toi s'adapte à chaque chien et ses troubles ainsi qu’ à vos besoins.</p>

            </div>
          </NuxtLink>
        </div>


        <div class="bg-white shadow lg:shadow-lg hover:bg-blue-100 flex px-2 py-3 rounded-xl mt-4 lg:mt-0">
          <NuxtLink to="/balade" class="flex">
            <img src="../assets/images/dog_educ.svg" alt="chien education" class="w-16 h-16 self-center mr-3 bg-blue-200 p-2 rounded-full"/>
            <div>
              <p class="text-blue-500 text-lg font-semibold mb-2">Balade</p>
              <p class="">Dépense physique et amusement</p>

            </div>
          </NuxtLink>
        </div>
      </section>
    </div>

    <section id="methodes" class="relative lg:flex items-center px-4 mt-10">
      <img
          src="../assets/images/chien_toutes_races.jpg"
          class="self-center rounded-2xl"
          style="width: 350px"/>

      <div class="lg:absolute flex bg-blue-500 rounded-xl mt-4 lg:mt-0 mx-auto lg:ml-64 my-auto self-center object-center p-3 w-64">
        <img
          src="../assets/images/corgi.svg"
          class="self-center rounded-full w-12 h-12 p-2 bg-blue-100 mr-5 "
          />
        <p class="text-white text-lg ">Chiens de toutes races et de tout âge</p>
      </div>
      <div class="lg:mx-48 w-full mt-4 lg:mt-0">
        <div class="w-full flex">
          <div class="inline-flex mx-auto lg:mx-0">
            <div class="bg-blue-400 w-10 h-1 self-center mr-6"></div>
            <p class="text-blue-500 font-semibold text-xl">Ma méthode</p>
            <div class="bg-blue-400 w-10 h-1 self-center ml-6"></div>
          </div>
        </div>
        <p class="text-5xl font-semibold mt-3 text-blue-700">Méthode positive non permissive</p>
      
        <p class="mt-3 text-justify">Basée sur la méthode <span class="font-semibold"> <a href="https://educ-dog.com/">Educ Dog™</a></span>. Celle-ci a fait ses preuves sur des milliers de chiens quelque soit leur âge, leur caractère, leur race et leur passé.</p>

      
      </div>
    </section>

    <p class="text-center mt-10 mx-3 text-3xl font-bold">3 piliers fondamentaux</p> 

    <div class=" lg:grid lg:grid-cols-3 lg:mt-3 mx-4 lg:mx-20  "> 
      <div class="mt-8 lg:mt-0 p-0 lg:p-4  pb-2 bg-blue-500 text-white rounded-t-2xl lg:rounded-t-none">
        <h3 class="font-bold text-2xl lg:text-3xl px-3 lg:px-0">Renforcement positif</h3>
        <p class="text-lg mt-2 px-3 lg:px-0">Votre chien apprendra par <span class="font-semibold">plaisir</span>, il sera récompensé lorsqu’il se comportera bien et pourra associer que le bon comportement est agréable. Il saura alors comment agir et réagir</p>   
      </div>
      <img src="../assets/images/chien_jeu.jpg" />

      <div class="mt-8 lg:mt-0 p-0 lg:p-4  pb-2  rounded-t-2xl lg:rounded-t-none bg-yellow-500 text-white">
        <h3 class="font-bold text-2xl lg:text-3xl px-3 lg:px-0">Hiérarchie</h3>
        <p class="text-lg mt-2 px-3 lg:px-0">En aucun cas il s’agira de dominer mais simplement de mettre en place des règles de vie, des limites, bref un cadre qui permettra de diriger <span class="font-semibold">en douceur</span> et vivre en harmonie avec votre chien.</p>
      </div>
      
      <img src="../assets/images/chien_complicite.jpg" class="mt-3 lg:mt-0 hidden lg:block" />
      <img src="../assets/images/chien_regle.png" class="block lg:hidden" />

      <div class="mt-8 lg:mt-0 p-0 lg:p-3 pb-2 lg:pb-0  rounded-t-2xl lg:rounded-t-none  bg-red-500 text-white">
        <h3 class="font-bold text-2xl lg:text-3xl px-3 ">Psychologie canine</h3>
        <p class="text-lg mt-6 px-4  text-justify">Partager une relation pleine de <span class="font-semibold">complicité</span>, mieux communiquer, permettront de mieux se comprendre, de prévoir les réactions et les comportements. Les Instincts du chien et motivations seront utilisés pour l'apprentissage</p>
      </div>

      <img src="../assets/images/chien_regle.png" class="mt-3 lg:mt-0 hidden lg:block" />
      <img src="../assets/images/chien_complicite.jpg" class="block lg:hidden" />

    </div>

    <div id="education canine fonctionnement" class="w-full">

      <div class="w-full flex mt-8">
        <div class="inline-flex mx-auto self-center">
          <div class="bg-blue-700 h-1 w-8 lg:w-12 mr-3 self-center"></div>
          <h2 class="font-semibold text-3xl text-blue-700">Fonctionnement</h2>
          <div class="bg-blue-700 h-1 w-8 lg:w-12 ml-3 self-center"></div>
        </div>
      </div>

      <div class="lg:grid lg:grid-cols-3 lg:gap-6 px-4 lg:px-0  mx-10 mt-3">
        
        <div class="bg-white rounded-2xl shadow-md">
          
          <img src="../assets/images/etude_comportement.jpg" class="w-full rounded-t-2xl" />

          <div class="flex p-3 ">
            <img src="../assets/images/exam.svg" class="w-12 mr-3" />
            
            <div >
              <p class="text-lg text-blue-500 font-semibold">Étude de comportement</p>
              <p class=" text-gray-900">Questionnaire permettant de comprendre votre chien, son mode de fonctionnement et le vôtre.</p>
            </div>
          </div>

        </div>

        <div class="bg-white rounded-2xl shadow-md mt-6 lg:mt-0">
          
          <img src="../assets/images/first_pattes.jpg" class="w-full rounded-t-2xl" />

          <div class="flex p-3 ">
            <img src="../assets/images/dog_play.svg" class="w-12 mr-3" />
            
            <div >
              <p class="text-lg text-blue-500 font-semibold">Séance première patte</p>
              <p class=" text-gray-900">Explications sur les différentes règles de vie. Découverte d’une méthodologie de sanction du mauvais comportement.</p>
            </div>
          </div>

        </div>

        <div class="bg-white rounded-2xl shadow-md mt-6 lg:mt-0">
          
          <img src="../assets/images/programme.jpg" class="w-full rounded-t-2xl" />

          <div class="flex p-3">
            <img src="../assets/images/chien.svg" class="w-12 mr-3 " />
            
            <div class=" rounded-b-2xl">
              <p class="text-lg text-blue-500 font-semibold">Mise en place d'un programme</p>
              <p>Grâce à un coaching personnalisé, je vous accompagnerai jusqu'à la prise d'autonomie</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="education canine objectif" class="w-full">

      <div class="w-full flex mt-8">
        <div class="inline-flex mx-auto self-center">
          <div class="bg-blue-700 h-1 w-8 lg:w-12 mr-3 self-center"></div>
          <h2 class="font-semibold text-3xl text-blue-700">Objectifs</h2>
          <div class="bg-blue-700 h-1 w-8 lg:w-12 ml-3 self-center"></div>
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-3 lg:gap-4 mt-3  px-4 lg:px-10">

        <div>
          <div class="flex">
            <img src="../assets/images/harmony.svg" class="w-10 mr-2 " />
            <p class="to-gray-900 font-semibold self-center text-lg">Harmonie</p>
          </div>
          <p class="ml-12 -mt-1">Pas de tracas au quotidien</p>
        </div>

        <div>
          <div class="flex">
            <img src="../assets/images/complicity.svg" class="w-10 mr-2 " />
            <p class="to-gray-900 font-semibold self-center text-lg">Complicité</p>
          </div>
          <p class="ml-12 -mt-1">Faire de votre chien votre meilleur ami</p>
        </div>
        
        <div>
          <div class="flex">
            <img src="../assets/images/confiance.svg" class="w-10 mr-2 " />
            <p class="to-gray-900 font-semibold self-center text-lg">Confiance</p>
          </div>
          <p class="ml-12 -mt-1">Construire une relation basée sur la confiance</p>
        </div>

      </div>

      <div class="bg-white shadow mx-4 lg:mx-10 lg:pr-6 lg:flex rounded-2xl mt-3">
        <img src="../assets/images/chien_bisous.jpg" class=" w-full lg:block lg:w-1/4 lg:mr-6 rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl " />
        <div class="self-center p-3 lg:p-0">
          <p class="font-semibold text-lg text-gray-900 text-center lg:text-left">Chiens et maîtres bien dans leurs papattes</p>
          <p class="text-gray-900 mt-2">Apprendre à traduire les messages canins pour comprendre pourquoi il fait des bêtises, pourquoi il n’obéit pas, pourquoi il a développé des troubles du comportement. Vous saurez alors comment y remédier !</p>
        </div>
      </div>

      <div class="bg-white shadow mx-4 lg:mx-10 lg:pr-6 lg:flex rounded-2xl mt-8">
        <img src="../assets/images/chien_sauver.jpg" class=" w-full lg:block lg:w-1/4 lg:mr-6 rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl " />
        <div class="self-center p-3 lg:p-0">
          <p class="font-semibold text-lg text-gray-900 text-center lg:text-left">Combat pour sauver les chiens</p>
          <p class="text-gray-900 mt-2">Les sauver de l'abandon, de la maltraitance et de l'euthanasie, en formant les maîtres. Ils n’ont pas toujours le bon « mode d’emploi » et se retrouvent parfois totalement démunis face à certains comportements et choisissent malheureusement des solutions radicales</p>
        </div>
      </div>
    </div>

    <section id="contact" class="lg:flex mx-10 mt-12">
      <div class="self-center">
        <p class="text-4xl text-blue-700 text-center lg:text-left mr-3">Envie de partager de super moments avec votre ami à 4 pattes ? <br/>Alors faites appel à <span class="font-bold">ton chien et toi</span></p>
          <a 
          class="font-bold text-5xl text-blue-700 mt-5"
          href="tel:+33660680696">06 60 68 06 96</a>
      </div>
      <img
          src="../assets/images/anne.jpg"
          class="mx-auto lg:ml-auto lg:mr-0 self-center"
          style="height:350px"/>
    </section>

    <section id="horraire" class="mx-10 mt-5">
      <div class="flex">  
        <img
          src="../assets/images/calendar.svg"
          class="w-12 h-12"/>
        <p class="text-2xl ml-5 self-center">A votre écoute du lundi au samedi de 9h à 19h</p>
      </div>

      <div class="flex mt-4">  
        <img
          src="../assets/images/house.svg"
          class="w-12 h-12"/>
        <p class="text-2xl ml-5 self-center">Séances à domicile (sur RDV)</p>
      </div>

      <div class="flex mt-4">  
        <img
          src="../assets/images/map.svg"
          class="w-12 h-12"/>
        <p class="text-2xl ml-5 self-center">De Grenoble  à Chambéry, vallée du Grésivaudan</p>
      </div>
    </section>

    <div class="w-full flex mt-8">
      <div class="inline-flex mx-auto self-center">
        <div class="bg-blue-700 h-1 w-8 lg:w-12 mr-3 self-center"></div>
        <h2 class="font-semibold text-3xl text-blue-700">Avis clients</h2>
        <div class="bg-blue-700 h-1 w-8 lg:w-12 ml-3 self-center"></div>
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 lg:gap-4 px-3 lg:px-10 mt-3">
        <div class="bg-white shadow rounded-lg py-3 px-8">
            
            <p class="text-center text-lg font-semibold text-blue-700">Alison &amp; Roky</p>

            <img
              src="../assets/images/quotes.svg"
              class="w-6 h-6 mx-auto my-2"/>
            <p class="text-gray-600 italic text-center">Super merci ! La balade hier soir avec Roky était trés plaisante, il a été au top! Merci beaucoup je me sens plus sereine et Roky aussi.</p>
        </div>
    </div>

  <footer-site></footer-site>
   
<!--    
   
     <div class="w-full lg:flex mt-12 lg:mt-0  lg:mt-16 px-6 lg:px-20">
      <div class="mx-auto w-full lg:w-2/3 pb-4 text-center lg:text-left">
        <h1 class="text-gray-800 font-bold text-6xl mx-auto inline-block leading-none">Anne <br/> Blauwart</h1>
        <h2 class="text-gray-800 font-medium mt-6 text-3xl">Education cannine <br/> Troubles du comportement </h2>
      
        <div class="mt-5 invisible lg:visible w-full flex content-start">
            <img
            src="../assets/images/map.svg"
            class="self-center w-12"/>
          <p class="self-center ml-6 text-2xl">Région de Crolles et les alentours</p>
        </div>
      </div>

      <div class="lg:w-1/3 -mt-20 lg:mt-0 content-center lg:content-end self-center">
        <img
          src="../assets/images/anne.jpg"
          class="mx-auto lg:ml-auto lg:mr-0 self-center"
          style="height:350px"/>
      </div>

      <div class="self-center mx-auto mt-3 content-center md:content-start  inline-flex lg:hidden">
                <img
                src="../assets/images/map.svg"
                class="w-12"/>
              <p class="self-center ml-6 text-2xl">Région de Crolles et les alentours</p>
          </div>

    </div>

  <div class="mt-5 lg:mt-20 text-center px-3 lg:px-16">
        <p class="font-bold text-4xl lg:text-5xl text-gray-800">Pourquoi faire appel à moi ?</p>

         <div class="lg:flex mt-6" style=" justify-content: space-between">
            <div class="lg:w-1/4 p-3 rounded-2xl" style="background: linear-gradient(#BEE3F8, #90CDF4);" v-scroll-to="'#probleme_comportement_chien'">
              <div class="bg-white flex p-2 text-center rounded-2xl h-48 hover:bg-blue-100 cursor-pointer">
                <div class="self-center mx-auto">
                  <img
                    class="w-10 h-10 mx-auto object-contain"
                    alt="dog_icon"
                    src="../assets/images/dog.svg"/>
                
                  <p class="self-center text-xl text-gray-800 font-bold mt-3">Votre chien a des problèmes de comportement ?</p>
                
                </div>
              </div>
            </div>

            <div class="lg:w-1/4 p-3 mt-6 lg:mt-0 rounded-2xl" style="background: linear-gradient(#BEE3F8, #90CDF4);" v-scroll-to="'#eduquez_votre_chien'">
              <div class="bg-white flex p-2 text-center rounded-2xl h-48 hover:bg-blue-100 cursor-pointer">
                <div class="self-center mx-auto">
                  <img
                    class="w-10 h-10 mx-auto object-contain"
                    alt="dog_education"
                    src="../assets/images/dog_educ.svg"/>
                
                  <p class="self-center text-xl text-gray-800 font-bold mt-3">Vous souhaitez parfaire son éducation</p>
                
                </div>
              </div>
            </div>

            <div class="lg:w-1/4 p-3 mt-6 lg:mt-0 rounded-2xl" style="background: linear-gradient(#BEE3F8, #90CDF4);">
              <div class="bg-white flex p-2 text-center rounded-2xl h-48 hover:bg-blue-100 cursor-pointer">
                <div class="self-center mx-auto">
                  <img
                    class="w-10 h-10 mx-auto object-contain"
                    alt="dog_icon"
                    src="../assets/images/dog_play.svg"/>
                
                  <p class="self-center text-xl text-gray-800 font-bold mt-3">Vous voulez vivre une relation en harmonie avec votre chien ? </p>
                
                </div>
              </div>
            </div>
        </div>
        
        <p class="font-bold text-4xl lg:text-4xl mt-6 text-gray-800">Je suis là pour vous aider</p>

        <div class="mt-4">
          <p class="text-3xl">Chiens de <span class="text-blue-700 font-bold">tous ages</span> (chiots, adultes, seniors) et de <span class="text-blue-700 font-bold"> races</span></p>
        </div> 

      </div>

      <section class="mt-12 bg-gray-100 text-left px-3 lg:px-16 py-12 rounded-t-3xl" id="methodes_education_cannine">
          <h2 class="text-blue-500 text-5xl font-semibold text-center lg:text-left">Mes méthodes</h2>

          <p class="text-lg mt-3 px-3 lg:px-0">Méthode <span class="font-semibold">positive non permissive</span>, basée sur la méthode <span class="font-semibold"><a href="https://educ-dog.com/welcome" target="_blank">Educ Dog</a></span>  qui a fait ses preuves sur des milliers de chiens quelque soit leur âge ,leur race , leur passé, leur caractère….</p>
        
          <p class="text-lg px-3 lg:px-0">Pas de violence ni d’outil coercitif, tout est basé sur la douceur, la compréhension, la complicité  et la bienveillance.</p>

         
         
         
          
           <div class="mt-10 lg:flex">
            <div class="self-center">
              <h3 class="font-bold text-2xl px-3 lg:px-0">Renforcement positif :</h3>
              <p class="text-lg mt-2 px-3 lg:px-0">Votre chien apprendra par <span class="font-semibold">plaisir</span>, il sera récompensé lorsqu’il se comportera bien et pourra associer que le bon comportement est agréable. Il saura alors comment agir et réagir</p>
            </div>

            <img src="../assets/images/dog_pilar_1.jpg" style="width:400px" class="mt-3 lg:mt-0 rounded-2xl ml-12" />
          </div>

          <div class="mt-10 lg:flex">
            <div class="self-center">
              <h3 class="font-bold text-2xl px-3 lg:px-0">Hiérarchie  :</h3>
              <p class="text-lg mt-2 px-3 lg:px-0">En aucun cas il s’agira de dominer mais simplement de mettre en place des règles de vie, des limites, bref un cadre qui permettra de diriger <span class="font-semibold">en douceur</span> et vivre en harmonie avec votre chien.</p>
            </div>

            <img src="../assets/images/dog_pilar_1.jpg" class="mt-3 lg:mt-0 w-64 rounded-2xl ml-12" />
          </div>

          <div class="mt-10 lg:flex">
            <div class="self-center">
              <h3 class="font-bold text-2xl px-3 lg:px-0">Psychologie canine :</h3>
              <p class="text-lg mt-2 px-3 lg:px-0">En aucun cas il s’agira de dominer mais simplement de mettre en place des règles de vie, des limites, bref un cadre qui permettra de diriger <span class="font-semibold">en douceur</span> et vivre en harmonie avec votre chien.</p>
            </div>

            <img src="../assets/images/dog_pilar_1.jpg" class="mt-3 lg:mt-0 w-64 rounded-2xl ml-12" />
          </div>
        </section>

        <section class="mt-3 px-3 py-3 lg:px-16 text-center" id="comprendre votre chien">
          <p class="text-xl"><span class="font-semibold">COMPRENDRE</span> votre chien et l’éduquer sans violence,  sans s'énerver ni crier</p>
          <p class="text-xl"><span class="font-semibold">TRAVAILLER</span> avec une éducatrice-comportementaliste canin  à votre écoute</p>
          <p class="text-xl"><span class="font-semibold">S’ADAPTER</span> à votre chien chien et à vos besoins</p>
          <p class="text-xl"><span class="font-semibold">AIDER</span> et non juger</p>
        </section>

        <section class="bg-gray-200 mt-6 px-3 py-4 lg:px-16" id="fonctionnement">
            <h3 class="font-bold text-center text-3xl">Fonctionnement</h3>
            
            <div class="bg-white flex p-4 rounded-2xl lg:mx-12 mt-3">
              <img src="../assets/images/exam.svg" alt="chien fonctionnement" class="h-12 w-12 self-center mr-4 hidden lg:block" />

              <div>
                <div class="flex">
                  <div class="bg-blue-400 text-white rounded-full px-2 font-semibold mr-2 inline-block h-5">1</div>
                  <p class="font-semibold text-lg">Etude de Comportement</p>
                </div>

                <p class="text-justify mt-2 text-lg">Questionnaire permettant de comprendre votre chien, son mode de fonctionnement et le vôtre.</p>
              </div>
              
            </div>

            <div class="bg-white flex p-4 rounded-2xl lg:mx-12 mt-3">
              <img src="../assets/images/chien.svg" alt="chien fonctionnement" class="h-12 w-12 self-center mr-4 hidden lg:block" />

              <div>
                <div class="flex">
                  <p class="bg-blue-400 text-white rounded-full px-2 font-semibold mr-2 h-5">2</p>
                  <p class="font-semibold text-lg">Mise en place d'un programme personnalisé</p>
                </div>

                <p class="text-justify mt-2 text-lg">J'interviens à votre domicile ou en extérieur et m'adapte à chaque individu. Grâce à un coaching personnalisé, je vous accompagnerai  jusqu'à la prise d'autonomie</p>
              </div> 
            </div>

            <p class="text-justify mt-5 text-lg mx-3 lg:mx-0">Avec <span class="font-semibold">TON CHIEN ET TOI</span>,  vous apprendrez à comprendre votre chien et pourrez travailler avec lui pour parfaire son éducation. Vous comprendrez sa psychologie, vous pourrez alors lui offrir la vie qu'il mérite pleine de complicité de bons moments et d’harmonie.</p>

        </section> -->
  </div>

</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800;900&display=swap');

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  font-family: "Montserrat";
  color: "#2d3748"
  
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
