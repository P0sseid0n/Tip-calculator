<script setup lang="ts">
import Inputs from './components/Inputs.vue';
import Results from './components/Results.vue';
</script>

<template>
   <h1>
      Spli
      <br />tter
   </h1>
   <main>
      <Inputs />
      <Results />
   </main>
</template>

<style lang="scss">
@import "../node_modules/reset-css/sass/reset";
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");

* {
   box-sizing: border-box;
   font-family: "Space Mono", monospace !important;
}

#app {
   height: 100vh;
   width: 100%;

   gap: 32px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   background-color: #c5e4e7;

   h1 {
      text-transform: uppercase;
      font-size: 24px;
      letter-spacing: 6px;
      font-weight: 700;
      color: hsl(183, 100%, 15%);
      line-height: 28px;
   }
}

main {
   background-color: white;

   height: 400px;
   width: 90%;
   max-width: 900px;

   border-radius: 32px;

   padding: 32px;

   display: flex;
   flex-direction: row;
   gap: 32px;

   #inputs {
      // width: 40%;
      // flex: 4;
   }

   > section {
      // width: 100%;
      flex: 5;
      min-width: 260px;
   }
}

@media screen and (max-width: 700px) {
   #app {
      height: initial;
      gap: 0;

      h1 {
         margin-top: 40px;
      }
   }

   main {
      width: 100%;
      flex-direction: column;
      height: inherit;
      margin-top: 40px;
      margin-bottom: 32px;
      gap: 0;
   }
}
</style>
