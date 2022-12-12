<template>
<nav>
   
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
            <div class="cart_hover">
                <header class="cart_in_qty cart_header">
                    <div>
                        <img src="../assets/cart_40px.png" alt=""/>
                        <span class="badge badge-warning cartcapacity">{{propers.length}}</span>
                    </div>
                    <br>
                    <div class="cart_heading">
                        <p>Cart</p>
                    </div>
                </header>
                <hr>
                <div class="cart_products">
                    <div v-if="propers[0]==null">Add some products in the cart</div>
                    <div v-else  v-for="(products,key) in this.$store.state.card" :key="key" class="cart_items">
                        <div> 
                            <img v-bind:src="products.image" alt="">
                        </div>
                        <div class="cart_content">
                            <h2>{{products.style}}</h2>
                            <p>{{products.title}}</p>
                            <p>Quantity:{{this.$store.state.qty[key]}}</p>
                        </div>`
                        <div class="cart_content2">
                            <button><span class="remove" @click="removedata(key)">X</span></button>
                            <p>${{products.price}}</p>
                            <div class="quantity">
                                    <button v-if="number>0" @click="decrement(key)">-</button>
                                    <button @click="increment(key)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="content_bottom">
                        <p>Subtotal</p>
                        <p> ${{prices.price1.toFixed(2)}} </p>
                    </div>
                     <button class="w-100 btn btn-dark btn-lg" type="submit" @click="persist" @mousedown="quantity"> checkout</button>
                </div>
            </div>
        </div>
        <div class="cart_qty" @click="openNav"> 
            <img src="../assets/cart_40px.png" alt=""/>
            <span class="badge badge-warning" id="lblCartCount">{{propers.length}}</span>
        </div>
</nav>
</template>
<script>
import '../css/header.css'
export default{
    name:'HeaderOne',
    data(){
        return{
            propers : this.$store.state.card,
            number:1,
            name:[],
            qnty:[]
        }
    },
    created(){
        if(localStorage.name) 
            this.name = localStorage.name;
        if(localStorage.qnty) 
            this.qnty = localStorage.qnty;
    },
    mutations:{
       updated(){
        this.$store.state.card.commit('removedata') 
       }
    },
    methods:{
        openNav() {
            document.getElementById("mySidenav").style.width = "450px";
            if(screen.width < 667){
                document.getElementById("mySidenav").style.width = "350px";
                document.getElementById("mySidenav").style.fontSize.h1 = "10px";
            }
        },
        closeNav() {

            document.getElementById("mySidenav").style.width = "0";
        },
        persist() {
      localStorage.name = JSON.stringify(this.$store.state.card);   
     
    },
    quantity() {
      localStorage.qnty = JSON.stringify(this.$store.state.qty);   
     
    },
        removedata(key){
                this.$store.state.card.splice(key,1)
                console.log(JSON.stringify(this.$store.state.card)) 
             this.$store.state.qty.splice(key,1) 
             localStorage.name = JSON.stringify(this.$store.state.card)
             localStorage.name = JSON.stringify(this.$store.state.qty)
        },
        increment(key){
           return this.$store.state.qty[key]++
        },
        decrement(key){
            if(this.$store.state.qty[key]>0){

                return this.$store.state.qty[key]-- 
            }
        },
    //     prices : function(){
    //         var price
    //         var qty = this.$store.state.qty
    //     this.$store.state.card.forEach((element,idx) => {
    //         // let item = this.$store.state.filproducts.find( i => i.id === element.id)
    //         price =(element[idx].price*qty[idx])
    //     });
    //     console.log(price)
    //     return{
    //         price1 : price
    //     } 
    // },
    //     persist() {
    //   localStorage.cartItem = this.$store.state.card;
    //   console.log('now pretend I did more stuff...');
    // }
        },
        computed:{
          prices: function(){
            var price=0
            var cards = this.$store.state.card
            var qty = this.$store.state.qty
        for(var i=0;i<cards.length;i++){
            price+=cards[i].price*qty[i]
        }
        return  {
            price1:Number(price)
        }
    }
        },
    }
</script>