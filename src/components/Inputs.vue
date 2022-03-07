<script setup lang="ts">

</script>

<template>
   <section id="inputs">
      <label for="bill">Gastos</label>
      <div>
         <img src="@/assets/imgs/icon-dollar.svg" alt="Dollar" />
         <input type="number" id="bill" placeholder="0" />
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
   background: hsl(189, 41%, 97%);
   padding: 4px 8px;
   border-radius: 8px;

   display: flex;
   align-items: center;
   justify-content: space-between;

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