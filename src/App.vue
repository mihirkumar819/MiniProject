<template>
  <div>
    <HeaderOne/>
    <div class="row section_2 container">
      <!-- <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-3 col-sm-1"><ClothesSize v-on:sizes="sizes($event)" v-on:filter="this.filters" v-on:val2="keysArray($event)"/></div> -->
      <!-- <div v-if="!!this.$store.state.filproducts.length" class="col-xxl-9 col-xl-10 col-lg-10 col-md-9 col-sm-11"><FilteredApp v-on:addtocart="products($event)" v-on:qty="qty($event)" v-on:persist="persist"/></div> -->
      <div><ProductsVue :selected="selectedSizes" :product="product" v-on:addtocart="products($event)" v-on:qty="qty($event)"/></div>
    </div>
  </div>
</template>
<script>
import HeaderOne from './components/HeaderOne.vue'
// import ClothesSize from './components/ClothesSize.vue'
import ProductsVue from './components/ProductsVue.vue';
// import FilteredApp from './components/filtered.vue';

export default {
  name: 'NameApp',
  created(){
    this.$store.dispatch('getProductsAction')
    if(localStorage.name) 
    this.name = localStorage.name;
    if(localStorage.qnty) 
    this.qnty = localStorage.qnty;
    this.product = this.$store.state.products
  },
  mutations:{
       updated(){
       this.$store.commit('products')
       }
    },
    inject:['filters'],
  data(){
    return{
      size : [],
      qtys: this.qty,
      name:[],
      selectedSizes:[],
      product : this.$store.state.products,
      keySize:[],
      filters:this.filters
    }
  },
  components: {
    HeaderOne,
    // ClothesSize,
    ProductsVue,
    // FilteredApp
  },
  methods:{
    persist() {
      localStorage.name = JSON.stringify(this.$store.state.card);   
    },
    quantity() {
      localStorage.qnty = JSON.stringify(this.$store.state.qty);    
    },
    products(person){
      let item = this.$store.state.card.find( i => i.id === person.id)
      if(item){
        return this.$store.state.qty
      }else{
        return this.$store.state.card.push(person)
      }
      
    },
    keysArray(key){
      if(this.keySize.length<=this.selectedSizes.length){
        if(this.keySize.find(i=>i==key)){
          this.keySize.splice(this.keySize.indexOf(key),1)
        }
        console.log(this.keySize)
        return this.keySize.push(key)
      }
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
      // selectedSize.map((size1,idx)=>{
      //   if(size===size1){
      //     // let s = this.selectedSizes.indexOf(size)
      //     return this.selectedSizes.splice(idx)
      //   }
      // })
      // return this.selectedSizes.push(size)
    },
    filtering(val){
      const filteredProducts=this.$store.state.products
      filteredProducts.forEach((product) => {
         product.availableSizes.forEach((size)=>{ 
           if(val===size){
             let item = filteredProducts.find( i => i.id === product.id)
             if(item){ 
                this.$store.state.filproducts.map((prod,idx1)=>{
                  // console.log(prod.availableSizes)
                  prod.availableSizes.map((prods)=>{
                    console.log(prods)
                    if(val===prods){
                      return this.$store.state.filproducts.splice(idx1,1)
                    }
                  })
                })
              }else{
                return this.$store.state.filproducts.push(product)
              }
          }
          })
        });
        // console.log(this.$store.state.filproducts)
    },
    qty(qnty){   
      if( this.$store.state.qty.length<=this.$store.state.card.length ){
         this.$store.state.qty.push(qnty)
      }else{
        return this.$store.state.qty
      }     
    }
  }
}
</script>
<style>
  .section_2{
    margin: 50px auto;
  }

  @media screen and (max-width : 820px) {
    
  }
</style>
