<script setup lang="ts">
import { ref, type Ref, watch } from 'vue';

const billInputStatus: Ref<'focused' | 'error' | null> = ref(null)
const peopleInputStatus: Ref<'focused' | 'error' | null> = ref(null)
const tip: Ref<number> = ref(0)
const tipInput = ref('')

watch(tip, (newValue) => {
   if (newValue == Number(tipInput.value)) return
   tipInput.value = ''
})

watch(tipInput, (newValue) => {
   if (newValue == '') return

   tip.value = Number(newValue)
})

</script>

<template>
   <section id="inputs">
      <label for="bill">Gastos</label>
      <div :class="['type', billInputStatus == 'focused' ? 'isFocused' : '']">
         <img src="@/assets/imgs/icon-dollar.svg" alt="Dollar" />
         <input
            type="number"
            id="bill"
            placeholder="0"
            @focus="billInputStatus = 'focused'"
            @blur="billInputStatus = null"
            @error="billInputStatus = 'error'"
         />
      </div>

      <label>Gorjeta %</label>
      <div class="select">
         <button :class="{ 'selected': tip === 5 }" @click="tip = 5">5%</button>
         <button :class="{ 'selected': tip === 10 }" @click="tip = 10">10%</button>
         <button :class="{ 'selected': tip === 15 }" @click="tip = 15">15%</button>
         <button :class="{ 'selected': tip === 25 }" @click="tip = 25">25%</button>
         <button :class="{ 'selected': tip === 50 }" @click="tip = 50">50%</button>
         <div class="type">
            <input type="number" placeholder="Custom" v-model.trim="tipInput" />
         </div>
      </div>

      <label for="people">Número de Pessoas</label>
      <div :class="['type', peopleInputStatus == 'focused' ? 'isFocused' : '']">
         <img src="@/assets/imgs/icon-person.svg" alt="Person" />
         <input
            type="number"
            id="people"
            placeholder="0"
            @focus="peopleInputStatus = 'focused'"
            @blur="peopleInputStatus = null"
         />
      </div>
   </section>
</template>



<style scoped lang="scss">
label {
   display: inline-block;
   color: #5e7a7d;
   margin-bottom: 4px;
   font-weight: 700;
}

div {
   width: 100%;
   padding: 4px 8px;
   margin-bottom: 32px;
}

div.select {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr;
   gap: 12px;

   .type {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
   }

   .selected {
      background: hsl(172, 67%, 45%);
      color: hsl(183, 100%, 15%);
   }

   input {
      width: 100%;
      height: 100%;
      // border: none;
      // outline: 0;
      // background: transparent;
      font-size: 20px;
      // font-weight: 700;
      // text-align: center;
      // color: hsl(183, 100%, 15%);
      // cursor: pointer;

      &::placeholder {
         color: red;
      }
   }

   button {
      background: hsl(183, 100%, 15%);
      border: none;
      cursor: pointer;
      color: hsl(189, 41%, 97%);
      font-size: 20px;
      font-weight: 700;
      padding: 4px 0;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;

      &:hover {
         background: hsl(172, 61%, 77%);
         color: hsl(183, 100%, 15%);
      }
   }
}

div.type {
   background: hsl(189, 41%, 97%);
   border-radius: 8px;

   display: flex;
   align-items: center;
   justify-content: space-between;
   border: 2px solid transparent;

   transition: border 0.5s;

   &.isFocused {
      border-color: hsl(172, 67%, 45%);
   }

   input {
      border: none;
      outline: 0;
      background: transparent;
      flex: 1;
      text-align: right;
      font-size: 24px;
      color: #00494d;
      font-weight: 600;

      appearance: none;

      &::placeholder {
         color: hsl(185, 41%, 84%);
      }

      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
         -webkit-appearance: none;
         margin: 0;
      }
   }
}
</style>