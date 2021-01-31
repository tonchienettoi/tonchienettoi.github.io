<template>
    <Slide
        :closeOnNavigation="true"
        
        right
        class="fixed z-20 block lg:hidden">
      
     
        <NuxtLink 
            class="self-center "
            to="/education"
            v-if="page != 'education'">
          Éducation
        </NuxtLink>
        <p class="font-bold text-blue-700 self-center" v-if="page == 'education'">Éducation</p>

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
    </Slide>
</template>
<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
    components: {
        Slide // Register your component
    }
}
</script>
<style>
 .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 10px;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>

