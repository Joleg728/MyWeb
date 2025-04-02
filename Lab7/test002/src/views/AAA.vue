<template>
    <div>
      <div v-if="!editEnabled">
        <h2 v-for="(header, index) in headers" :key="index">
          {{ infoHeaderText[index] }}: {{ header }}
        </h2>
        <p v-for="(subText, index) in subTexts" :key="'sub-' + index">
          {{ infoSubText[index] }}: {{ subText }}
        </p>
        <p v-for="(bio, index) in bioTexts" :key="'bio-' + index">
          {{ bioMiniTexts[index] }}: {{ bio }}
        </p>
        <p v-for="(stat, index) in statTexts" :key="'stat-' + index">
          {{ statMiniTexts[index] }}: {{ stat }}
        </p>
        <button @click="editMenu">Редактировать</button>
      </div>
  
      <div v-else>
        <input v-for="(header, index) in headers" :key="'input-' + index" 
               v-model="headers[index]" 
               :placeholder="infoHeaderText[index]" />
        <textarea v-for="(subText, index) in subTexts" :key="'textarea-' + index" 
                  v-model="subTexts[index]" 
                  :placeholder="infoSubText[index]"></textarea>
        <textarea v-for="(bio, index) in bioTexts" :key="'bio-input-' + index" 
                  v-model="bioTexts[index]" 
                  :placeholder="bioMiniTexts[index]"></textarea>
        <input v-for="(stat, index) in statTexts" :key="'stat-input-' + index" 
               v-model="statTexts[index]" 
               :placeholder="statMiniTexts[index]" />
        <button @click="exitEdit">Сохранить</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {

    name: "AAA",

    data() {
      return {
        editEnabled: false,
        headers: ["AAA", "BBB"], // Замените 5 на количество заголовков
        subTexts: Array(5).fill(''), // Замените 5 на количество подзаголовков
        bioTexts: Array(5).fill(''), // Замените 5 на количество биографий
        statTexts: Array(5).fill(''), // Замените 5 на количество статистики
        infoHeaderText: ["Заголовок 1", "Заголовок 2", "Заголовок 3", "Заголовок 4", "Заголовок 5"],
        infoSubText: ["Подзаголовок 1", "Подзаголовок 2", "Подзаголовок 3", "Подзаголовок 4", "Подзаголовок 5"],
        bioMiniTexts: ["Биография 1", "Биография 2", "Биография 3", "Биография 4", "Биография 5"],
        statMiniTexts: ["Статистика 1", "Статистика 2", "Статистика 3", "Статистика 4", "Статистика 5"]
      };
    },
    methods: {
      editMenu() {
        this.editEnabled = true;
      },
      exitEdit() {
        // Проверка на пустые значения
        if (this.headers.some(header => header.length === 0) || 
            this.subTexts.some(subText => subText.length === 0) || 
            this.bioTexts.some(bio => bio.length === 0) || 
            this.statTexts.some(stat => stat.length === 0)) {
          return;
        }
        this.editEnabled = false;
      }
    }
  }
  </script>