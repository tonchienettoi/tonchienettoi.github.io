<template>
    <div class="shadow p-2 hidden lg:flex">

    <NuxtLink 
            class="self-center "
            to="/">
    <div class="flex">
    <img
      src="../assets/images/logo.svg"
      class="w-10 h-10 self-center"/> 

      <img class="w-48 self-center  object-contain" src="../assets/images/name_black.png"/> 
    </div>
    </NuxtLink>
        <!-- <NuxtLink to="/"
            class="self-center ml-2"
            v-if="page != 'index'">
          Ton chien et toi
        </NuxtLink>
        <p class="font-bold self-center ml-3" v-if="page == 'index'">Ton chien et toi</p> -->


    <ul class="list-reset flex justify-between flex-1 items-center mx-10">
      <li>
        <NuxtLink 
            class="self-center "
            to="/education"
            v-if="page != 'education'">
          Éducation
        </NuxtLink>
        <p class="font-bold text-blue-700 self-center" v-if="page == 'education'">Éducation</p>
      </li>

        <li>
            <NuxtLink 
                class="self-center "
                to="/comportement"
                v-if="page != 'comportement'">
            Troubles du comportement
            </NuxtLink>
            <p class="font-bold text-blue-700 self-center" v-if="page == 'comportement'">Troubles du comportement</p>     
        </li>

        <li>
            <NuxtLink 
                class="self-center "
                to="/balade"
                v-if="page != 'balade'">
            Promenades
            </NuxtLink>
            <p class="font-bold text-blue-700 self-center" v-if="page == 'balade'">Promenades</p>     
        </li>

      <li>
        <NuxtLink 
            class="self-center "
            to="/about"
            v-if="page != 'about'">
            À propos de moi
        </NuxtLink>
        <p class="font-bold text-blue-700 self-center" v-if="page == 'about'"> À propos de moi</p>     
      </li>

      <li>
        <div class="bg-blue-400 p-2 rounded-full font-semibold cursor-pointer hover:bg-blue-600 text-white">
          Me contacter
        </div>
      </li>
    </ul>
    </div>
</template>
<script>
export default {

    props : ["page"],
    data(){
        return {
        }
    },
    mounted(){
    
    }
}
</script>
