<template>
    <div class="w-[100%] h-[50px] items-center justify-center m-[20px]">
        <!--ICONO Y BUTTON-->
       
        <button class="p-[5px] ml-[50px] w-[280px] font-bold text-[20px] bg-red-600 text-white p-[10px] rounded-[10px]"> <i :class="clase"></i>{{ text }}</button>
    </div>
</template>
<script>
export default{
        name: 'Bttn-Per',
        props:{
            text: String,
            clase:String 
        },
        data(){
            return{
            }
        },
        components:{

        }
    }
</script>
