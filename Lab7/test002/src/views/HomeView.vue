<template>

  <section style="background-color: transparent;">

    <header class="home_header_1">

      <h1>Лаб 7</h1>
      <img v-if="!isEdit" src="../assets/img/edit.jpg" class="header_button" alt="edit" @click="editMenu">

    </header>

    <main v-if="!isEdit">
      <section id="head_sect" class="sect_head" :style="{width: masterWight}">
        <section class="sub_sect_01">
          <h2 class="header_01">{{"Имя: " + info.name}}</h2>
          <p class="inner_sub_type_01" id="inner01">{{"История: " + info.hist}}</p>
          <section class="sub_sect_02">
            <p class="inner_type_02">{{"Пол: " + info.sex}}</p>
            <p class="inner_type_02">{{"Вес: " + info.weight}}</p>
            <p class="inner_type_02">{{"Рост: " + info.height}}</p>
          </section>
          <section class="sub_sect_02">
            <p class="inner_type_02">{{"Профессия: " + info.prof}}</p>
            <p class="inner_type_02">{{"Злой дух: " + info.stand}}</p>
            <p class="inner_type_02">{{"Зажигалка: " + info.lighter}}</p>
          </section>
        </section>
        <img src="@/assets/img/xto.png" alt="photo" class="main_img"><!--  "../assets/img/xto.png" -->
      </section>
      
      <section class="sect_bio" :style="{width: masterWight}">
        <h2>Биография</h2>
        <p class="inner_type_01" id="inner02">{{ bio }}</p>
      </section>

      <section class="sect_char" :style="{width: masterWight}">
        <h2>Характеристики</h2>
        <section style="display: grid; grid-template-columns: 1fr 1fr;">
          <section class="sub_sect_03">
            <p class="inner_type_03" style="text-align: center;">{{"Сила: " + chars.pwr}}</p>
            <p class="inner_type_03" style="text-align: center;">{{"Дальность: " + chars.rng}}</p>
            <p class="inner_type_03" style="text-align: center;">{{"Точность: " + chars.prc}}</p>
          </section>
          <section class="sub_sect_03">
            <p class="inner_type_03" style="text-align: center;">{{"Скорость: "  + chars.spd}}</p>
            <p class="inner_type_03" style="text-align: center;">{{"Защита: " + chars.drb}}</p>
            <p class="inner_type_03" style="text-align: center;">{{"Потенциал: " + chars.ptn}}</p>
          </section>
        </section>
      </section>
      
    </main>

    <main v-if="isEdit">
      <section id="head_sect" class="sect_head" :style="{width: masterWight}">

        <section class="sub_sect_01">

          <input type="text" class="input_changed_header" placeholder="Имя" title="Имя" style="min-height: 62px;" v-model="info.name">
          <textarea class="textarea_sub_changed" title="История" placeholder="История" style="min-height: 50px;" v-model="info.hist"></textarea>
          
          <section class="sub_sect_02">
            
            <input type="text" placeholder="Пол" title="Пол" class="bio_input_changed_mini" style="min-height: 32px;" v-model="info.sex">
            <input type="text" placeholder="Вес" title="Вес" class="bio_input_changed_mini" style="min-height: 32px;" v-model="info.weight">
            <input type="text" placeholder="Рост" title="Рост" class="bio_input_changed_mini" style="min-height: 32px;" v-model="info.height">

          </section>

          <section class="sub_sect_02">

            <input type="text" placeholder="Профессия" title="Профессия" class="bio_input_changed_mini" style="min-height: 32px;" v-model="info.prof">
            <input type="text" placeholder="Злой дух" title="Злой дух" class="bio_input_changed_mini" style="min-height: 32px;" v-model="info.stand">
            <input type="text" placeholder="Зажигалка" title="Зажигалка" class="bio_input_changed_mini" style="min-height: 32px;" v-model="info.lighter">

          </section>

        </section>
        
        <img src="@/assets/img/xto.png" alt="photo" class="main_img">
        
      </section>

      <section class="sect_bio" :style="{width: masterWight}">

        <h2>Биография</h2>
        <textarea v-model="bio" class="textarea_changed" style="min-height: 386px;" placeholder="Биография"></textarea>

      </section>

      <section class="sect_char" :style="{width: masterWight}">

        <h2>Характеристики</h2>

        <section style="display: grid; grid-template-columns: 1fr 1fr;">

          <section class="sub_sect_03">

            <input type="text" class="char_input_changed_mini" placeholder="Сила" title="Сила" style="min-height: 50px;"  v-model="chars.pwr">
            <input type="text" class="char_input_changed_mini" placeholder="Дальность" title="Дальность" style="min-height: 50px;" v-model="chars.rng">
            <input type="text" class="char_input_changed_mini" placeholder="Точность" title="Точность" style="min-height: 50px;" v-model="chars.prc">

          </section><section class="sub_sect_03">

            <input type="text" class="char_input_changed_mini" placeholder="Скорость" title="Скорость" style="min-height: 50px;" v-model="chars.spd">
            <input type="text" class="char_input_changed_mini" placeholder="Защита" title="Защита" style="min-height: 50px;" v-model="chars.drb">
            <input type="text" class="char_input_changed_mini" placeholder="Потенциал" title="Потенциал" style="min-height: 50px;" v-model="chars.ptn">

          </section>
        </section>
      </section>
    </main>
    

    <aside v-if="isEdit" @click="exitEdit">Сохранить</aside>

  </section>

</template>

<script>

function isZero(obj)
{
  let ans = false;

  for (const vals of Object.entries(obj))
  {
    if (vals[1].length === 0)
    {
      ans = true;
      break;
    }
  }
  
  return ans;
}

  export default{

    data()
    {
      return {

      isEdit: false,

      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tortor sed neque iaculis, vel egestas elit interdum. Vestibulum ultrices purus vitae diam eleifend, eget efficitur risus ullamcorper. Praesent nec tellus ligula. Aenean tempus ac dui id tristique. Vivamus ut velit a augue mattis eleifend. In convallis imperdiet eros sit amet convallis. Morbi ultricies sodales lorem, malesuada interdum dolor aliquam viverra. In ut erat et nulla placerat efficitur ut eu risus. In feugiat ac mi quis malesuada.\nNullam metus nisl, rhoncus nec aliquet in, sagittis in sapien. Aliquam mattis a velit vel interdum. Maecenas vulputate neque tempor cursus luctus. Curabitur blandit porta consequat. Donec nunc lacus, tempus sit amet eleifend ac, egestas ac arcu. Aliquam at semper ligula, ac gravida tortor. Cras pellentesque turpis non orci commodo tempus. Nulla convallis nulla sed ante lobortis, at molestie orci euismod. Nam diam felis, feugiat sit amet leo sed, volutpat dignissim mauris.",

      masterWight: "1000px",

      info:
      {
        name: "Джотаро Токийский",
        hist: "Ищет Джоске",
        sex: "Пивной",
        weight: "120кг",
        height: "195см",
        prof: "Рыбнадзор",
        stand: "Рассосался",
        lighter: "Козырная",
      },

      chars:
      {
        pwr: "B",
        spd: "B",
        rng: "D",
        drb: "B",
        prc: "B",
        ptn: "B",
      }

      };
    },

    methods:
    {
      editMenu: function()
      {
        this.isEdit = true;
      },
      exitEdit: function()
      {
        isZero(this.info);

        if (isZero(this.info) || isZero(this.chars) || this.bio.length === 0)
        {
          return;
        }

        this.isEdit = false;
      }
    },
  };
</script>
<style src="../css/index.css"></style>