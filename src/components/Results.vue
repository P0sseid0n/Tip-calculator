<script setup lang="ts">
import { useStore } from '@/stores'
const store = useStore()
</script>

<template>
   <section id="results">
      <div>
         <h5>Valor da Gorjeta</h5>
         <p>/ pessoa</p>
         <h2>${{ Math.floor(store.tipAmount * 100) / 100 || '0,00' }}</h2>
      </div>
      <div>
         <h5>Total</h5>
         <p>/ pessoa</p>
         <h2>${{ store.total.toFixed(2) || '0,00' }}</h2>
      </div>
      <button @click="store.reset">Reset</button>
   </section>
</template>



<style scoped lang="scss">
section {
   background: hsl(183, 100%, 15%);
   height: 100%;
   border-radius: 16px;

   padding: 48px 32px;
   button {
      padding: 6px 0;
      margin-top: 40px;
      width: 100%;
      background: hsl(172, 67%, 45%);
      color: hsl(183, 100%, 15%);
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;

      border-radius: 4px;
      border: none;
      outline: 0;

      transition: all 0.3s ease-in-out;

      &:hover {
         background: hsl(172, 61%, 77%);
      }
   }

   div {
      margin-bottom: 48px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      grid-template-areas:
         "h5 h2"
         "p h2";
   }

   h5 {
      color: #f4fafa;
      grid-area: h5;
      font-weight: 700;
      font-size: 15px;
   }

   p {
      color: hsl(185, 41%, 84%);
      grid-area: p;
      font-size: 14px;
   }

   h2 {
      color: hsl(172, 67%, 45%);
      font-size: 40px;
      font-weight: 700;
      grid-area: h2;
      justify-self: flex-end;
   }
}
</style>