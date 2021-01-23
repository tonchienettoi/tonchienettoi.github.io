<template>
  <div class="my-20 lg:my-0">
    <div class="shadow p-2 hidden lg:flex">

    <img
      src="../assets/images/logo.svg"
      class="w-10 h-10"/>  

      <p class="font-semibold self-center text-gray-800 ml-2">Ton chien et toi</p> 

    <ul class="list-reset flex justify-between flex-1 items-center mx-10">
      <li>
        <a>
          Éducation
        </a>
      </li>

      <li>
        <a>Troubles du comportement</a>
      </li>

      <li>
        <a>
          A propos de moi
        </a>
      </li>

      <li>
        <div class="bg-blue-400 p-2 rounded-full font-semibold cursor-pointer hover:bg-blue-600 text-white">
          Me contacter
        </div>
      </li>
    </ul>
    </div>

    <div class="w-full lg:flex -mt-12 lg:mt-0  lg:mt-16 px-6 lg:px-20">
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
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800;900&display=swap');

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  font-family: "Montserrat"
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
