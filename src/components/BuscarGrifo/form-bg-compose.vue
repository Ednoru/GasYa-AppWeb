<template>
    <div class="m-[50px]">
        <form action="" class="flex flex-row">
            <input type="text" placeholder="Search..." class="bg-white p-[10px]  border-[1px] border-solid border-red-600
            rounded-[20px] w-[400px] h-[30px]">
            <button class="bg-red-600 p-[10px] h-[30px] flex items-center ml-[10px] rounded-[20px] text-white">Buscar</button>
        </form>
        <select class="mt-[20px] border-[1px] border-solid border-red-600 rounded-[20px] p-[5px] hover:cursor-pointer">
            <option value="" disabled selected>Filtrar</option>
            <option value="">Precio</option>
            <option value="">Calificación</option>
            <option value="">Combustible</option>
        </select>
    </div>
</template>

<script>
    export default{
        name: 'form-bg',
        data(){
            return{
                
            }
        }
    }
</script>