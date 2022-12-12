<template>
    <div>
        <img src={{image}} alt={{title}}>
        {{name}}
        {{style}}
        {{price}}
        
    </div>
</template>
<script>
import { inject } from "vue";
export default{
    name:'CartApp',
    data(){
        return{
            name : inject('name'),
        }
    }
}
</script>