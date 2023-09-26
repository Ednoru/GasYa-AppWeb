<template>
    <h1>Grifos Asociados</h1>
    <button onclick="mostrar('Contenido del botón 1')">Repsol</button>
    <button onclick="mostrar('Contenido del botón 2')">PetroPeru</button>
    <button onclick="mostrar('Contenido del botón 3')">Primax</button>
    <button onclick="mostrar('Contenido del botón 4')">Pecsa</button>
</template>

<style>
    button {
    text-decoration:none;
    font-weight: 600;
    font-size: 20px;
    color:#333333;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:40px;
    padding-right:40px;
    background-color:#FFD27D;
    border-color: #d8d8d8;
    border-width: 3px;
    border-style: solid;
    border-radius:35px;
    }
</style>


<script>
    export default{
        name: 'grifos-gasya',
        data(){
            return{

            }
        },
        components:{
        }
    }
</script>
