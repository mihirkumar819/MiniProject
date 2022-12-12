<template>
    <div class="filter">
        <h2 class="heading_size">Sizes :</h2>
        <ul>
            <li  v-for="(size,key) in sizes" :key="key">
              
              <input @click="$emit('sizes',size)" type="checkbox" :id="key" name="check_2" @change="$emit('filter',key)" value="check_2">
              <label :for="key" @click="$emit('val2')" >{{size}}</label>
            </li>
          </ul>
          <!-- <button @click="reset">reset</button> -->
    </div>
</template>
  
<script>
 import '../css/clothsize.css'
  export default{
    name : 'ClothesSize',
    data(){  
    return {
      sizes : ['XS','S','M','ML','L','XL','XXL','X'],
      selectedSizes:[],
      isActive:false
  }},
  methods:{
    reset(){
      window.location.reload();
    }
  }
  }
</script>
  
<style>
   
   
</style>
