<template>
  <div class="container" >
    <h1 class="product_found">{{this.$store.state.filproducts.length}} product(s) found</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="(user,key) in this.$store.state.filproducts" :key="key">
        <div class="card shadow-sm">
          <div class="img-bck">
            <img class="models" v-bind:src="user.image" alt="image1"/>
            <p v-if="user.isFreeShipping" class="free">free shipping</p>
          </div>
          <div class="card-body">
            <p class="card-text" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center;">
              {{user.style}}</p>
            <p class="line_after" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center; font-weight:bold">
              {{"$"+user.price}}</p>  
            <p class="installments" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center;">
                {{"or "+user.installments + " x" +( user.price/user.installments).toFixed(2)}}</p>
                <b>Available Sizes</b>
                <p class="size"><span v-for="(size,key) in user.availableSizes" :key="key">{{size}} |&nbsp; </span></p>
            <div class="d-flex justify-content-between align-items-center">
            </div>
          </div>
          <button type="button" class="btn btn-dark" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)" @mousedown="$emit('persist',quantity)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../css/products.css'
export default {
  name:"FilteredApp",
data() {
  return {  
    selectedCategory : "",
    quantity:1,
    number:0,
    fills:this.$store.state.filproducts
  };
},
};
</script>
