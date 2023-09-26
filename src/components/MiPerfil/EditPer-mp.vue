<template>
    <div class="flex flex-row w-[500px] h-[150px] mt-[10px] items-center justify-center">
            <img  class="rounded-[50%] mr-[5px] w-[100px] h-[100px]" src="https://frases.top/wp-content/uploads/2021/08/la-mejor-foto-de-perfil-para-whatsapp.jpg" alt="Foto de perfil">
        <div class="flex flex-col ml-[20px]">
            <h1 class="font-bold">SEBASTIÁN CÓRDOVA VALDIVIA</h1>
            <p>sebastiancordova123@gmail.com</p>
            <p>@sevascv_</p>
            <p>+51 992 401 964</p>
            <p>U202111041@upc.edu.pe</p>
        </div>
    </div>

</template>
<script>
    export default{
        name: 'grifos-gasya',

        data(){
            return{
                botonActivo:null
                
            }
        },

        methods: {
            mostrar(idDiv) {
                this.botonActivo = idDiv;
                let todosLosDivs = ['divRepsol', 
                 'divPetroPeru', 'divPrimax',
                  'divPecsa'];
                
                todosLosDivs.forEach(id => {
                    let div = document.getElementById(id);
                    if (div) {
                        div.style.display = "none";
                    }
                });

                let div = document.getElementById(idDiv);
                if (div) div.style.display = "block"; 
            }
            
            
        },
        components:{
        }
    }
</script>