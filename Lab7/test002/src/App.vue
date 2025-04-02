<template>

  <div :class="setBodyBackground">

    <header v-if="!isHome" :class="header_class">

      <h1>{{title}}</h1>
      <img v-if="isHome" src="./assets/img/edit.jpg" class="header_button" alt="edit" @click="editMenu">

    </header>

    <nav :class="nav_class">
      <router-link to="/"><section class="nav_but_1">Main</section></router-link>
      <router-link to="/api1"><section class="nav_but_1">Api 1</section></router-link> 
      <router-link to="/api2"><section class="nav_but_1">Api 2</section></router-link>
      <router-link to="/api3"><section class="nav_but_1">Api 3</section></router-link>
    </nav>
	
    <router-view></router-view>

    
    
  </div>

</template>

<script>
  import { computed} from 'vue';
  // import { onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  // import { funcs } from "@/views/HomeView.vue";
  import { editMenu } from "@/views/HomeView.vue";

  export default{

    setup() {
      const route = useRoute();

      const isHome = computed(() => {
        return route.path === '/';

        // return {editMenu};
      });

      const title = computed(() => {
        switch(route.path)
        {
          case "/":
            return "Лаб 7"
          case "/api1":
            return "Api 1 (Weather Forecast API + Chart.js)"
          case "/api2":
            return "Api 2"
          case "/api3":
            return "Api 3"
        }
        return "AAA"
      });

      const header_class = computed(() => {
        switch(route.path)
        {
          case "/":
            return "home_header_1"
          case "/api1":
            return "body_header_api1"
          case "/api2":
            return "body_header_api2"
          case "/api3":
            return "body_header_api3"
        }
        return "AAA"
      });

      const nav_class = computed(() => {
        switch(route.path)
        {
          case "/":
            return "nav_1_home";
          case "/api1":
            return "nav_1_api1";
          case "/api2":
            return "nav_1_api2";
          case "/api3":
            return "nav_1_api3";
        }
        return "AAA";
      });

      const setBodyBackground = computed(() => {
        switch(route.path)
        {
          case "/":
            return "body_class_home";
          case "/api1":
            return "body_class_api1";
          case "/api2":
            return "body_class_api2";
          case "/api3":
            return "body_class_api3";
        }
        return "AAA";
      });

      // onMounted(() => {
      //   setBodyBackground(route.path);
      // });

      // watch(
      //   () => route.path,
      //   (newPath) => {
      //     setBodyBackground(newPath);
      //   }
      // );

      return { header_class, isHome, nav_class, title, setBodyBackground };
    },
    
  // components: {
  //   editMenu,
  // },

    methods: {
      // openEditMenu: function()
      // {
      //   funcs.editMenu();
      // }

      openMenu: function()
      {
        editMenu();
      },
        
  //       console.log('Ыыы');

    //     }
    },
  }

// const 

</script>

<style>
</style>