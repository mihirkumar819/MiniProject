<template>
  <div>
  <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-3 col-sm-1 sizediv">
    <ClothesSize v-on:sizes="sizes($event)" v-on:filter="filters"/>
  </div>
  <!-- <button @click="filter">clickme</button> -->
  <div v-if="prods.length==0" class="col-xxl-9 col-xl-10 col-lg-10 col-md-9 col-sm-11 container">
    <h1 class="product_found">{{this.products.length}} product(s) found</h1>
    <div v-if="prods.length==0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="user in products" :key="user.id">
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
                
            <div class="d-flex justify-content-between align-items-center">
            </div>
          </div>
          <button type="button" class="btn btn-dark" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)" @mousedown="$emit('persist',quantity)" @mouseleave="$emit('quantity',quantity)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
    <div v-else class="col-xxl-9 col-xl-10 col-lg-10 col-md-9 col-sm-11 container" >
      <h1 class="product_found">{{this.prods.length}} product(s) found</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="user in prods" :key="user.id">
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
                  
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
            <button type="button" class="btn btn-dark" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)" @mousedown="$emit('persist',quantity)" @mouseleave="$emit('quantity',quantity)">Add to Cart</button>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import '../css/products.css'
import ClothesSize from './ClothesSize.vue';
export default {
  name:"ProductsApp",
  // mounted(){
  //   if(this.selectedSizes.length!=0){
  //     this.filter
  //   }
  // },
  provide(){
    return {
      filters:this.filter
    }
  },
data() {
  return {  
    selectedCategory : "",
    quantity:1,
    products : this.product,
    // selects : this.selected,
    prods:[],
    selectedSizes:[],
    filters:this.filter

  };
},
props: ['product'],
components:{
  ClothesSize
},
methods:{
  filter(){
    // const products1 = this.products
    let temp =[]
    console.log(temp)
    this.prods=temp
    this.products.filter((val)=>{
        val.availableSizes.forEach((sizes)=>{
           this.selectedSizes.forEach(selsize=>{
                        if(selsize===sizes){
                          temp.forEach((val1,idx)=>{
                            if(val.id===val1.id){
                              temp.splice(idx,1)
                            }
                          })
                          temp.push(val)
                        }
                      })
          })
    })
  },
  sizes(size){
      // this.selectedSizes.push(size)
      console.log(this.selectedSizes,"hello")
      for(let i=0;i<this.selectedSizes.length;i++)
      {
          if(this.selectedSizes[i]===size){
            return this.selectedSizes.splice(i,1)
          }
      }
      this.selectedSizes.push(size)
    },
}
};
</script>
