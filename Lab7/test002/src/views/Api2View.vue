<template>
<main @load="fetchCatImage">
  <section class="cat_zone" id="cat_box" @load="fetchCatImage">
    <h3>Случайное изображение котиков (≽ↀωↀ≼)</h3>
    <section v-if="loading" class="loading" id="load">Загрузка...</section>
    <img v-if="!loading & catImgUrl" :src="catImgUrl" alt="cat_img" class="cat_img" @load="onImageLoad" @error="onImageError" />
    <section class="loading" v-if="errorMessage">{{ errorMessage }}</section>
    <button @click="fetchCatImage" class="cat_button">Получить котика</button>
  </section>
</main>

  <!-- <main>
    < id="cat_box" class="cat_zone">
      <h3>Случайное изображение котиков (≽ↀωↀ≼)</h3>
      <section v-if="loading" class="loading" ref="load" id="load">Загрузка...</section>
      <img v-if="catImgUrl" class="cat_img" ref="cat_img" id="cat_img" alt="cat_img" >
      <img v-if="catImgUrl" style="width: 800px; height: 200px;" :src="catImgUrl" alt="cat_img" id="cat_img" class="cat_img" @load="onImageLoad" @error="onImageError" />
      <section class="loading" v-if="errorMessage">{{ errorMessage }}</section>
    </section>
  </main> -->
</template>

<style src="../css/indexApi2.css"></style>

<script>

  export default {
    data() {
      return {
        catImgUrl: null,
        loading: false,
        errorMessage: null,
        timeoutId: null,
      };
    },
    methods: {
      async fetchCatImage() {
        this.loading = true;
        this.errorMessage = null;
        try
        {
          const resp = await fetch("https://api.thecatapi.com/v1/images/search");
          if (!resp.ok)
          {
            throw new Error(`Ошибка: ${resp.status}`);
          }

          const cat = await resp.json();
          this.catImgUrl = cat[0].url;
          alert(this.catImgUrl);

          this.timeoutId = setTimeout(() => {
          this.loading = false;
          this.errorMessage = "Время ожидания истекло. Попробуйте снова.";}, 30000);
        }
        catch (error)
        {
          alert("Произошла ошибка при получении котика");
          console.error(error.message || "Произошла ошибка при получении котика");
          this.errorMessage = "Произошла ошибка при получении котика";
          clearTimeout(this.timeoutId);
        }
        // finally
        // {
        //   this.loading = false;
        //   clearTimeout(this.timeoutId);
        // }
      },
      onImageLoad() {
        this.loading = false;
        clearTimeout(this.timeoutId);
      },
      onImageError() {
        this.errorMessage = "Произошла ошибка при загрузке котика";
        this.catImgUrl = null;
        clearTimeout(this.timeoutId);
      },
    },
  };

  // export default {
  //   data() {
  //     return {
  //       loading: true,
  //       isErr: false,
  //       // error: null,
  //       loadingText: "Загрузка...",
  //     };
  //   },
  //   // mounted() {
  //   //   this.getWeatherReport();
  //   // },
  //   methods:
  //   {
  //     async getWeatherReport() {
  //       try {
  //         const resp = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m&forecast_days=3");
  
  //         if(!resp.ok)
  //         {
  //           alert("Ошибка " + resp.status);
  //           this.loading = false;
  //           this.loadingText = "Произошла ошибка";
  //           throw new Error(`Ошибка: ${resp.status}`);
  //         }
  //         const cat = await resp.json();

  //         let catImg = this.$refs.cat_img;

  //         catImg.src = cat[0].url;

  //         catImg.onload = function()
  //         {
  //           catImg.style.width = "";
  //           catImg.style.height = "";
  //           this.loading = false;
  //         }

  //         catImg.onerror = function()
  //         {
  //           // alert("Произошла ошибка при загрузке котика");
            
  //           this.loadingText = "Произошла ошибка";

  //           this.loading = false;
  //           this.isErr = true;
  //         }
  //       } catch
  //       {
  //         this.loadingText = "Произошла ошибка";
  //         this.isErr = true;
  //         this.loading = false;
  //       }
  //     },
      
  //   }
  // };
</script>