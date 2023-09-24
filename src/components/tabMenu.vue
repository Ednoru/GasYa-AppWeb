<template>
    <div class="w-[100%] h-[75px] flex flex-row bg-red-600 text-white font-bold items-center">
        <div class="flex flex-row mr-auto ml-[10px]">
            <img src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" class="w-[40px] h-[40px]" alt="">
            <h1 class="font-bold text-[30px]">GasYa!</h1>
        </div>
        
        <ul class="flex flex-row justify-end">
            <Router-Link to="/" class="m-[10px]">
              Buscar Grifo
            </Router-Link>
            <Router-Link to="/grifos" class="m-[10px]">
              Grifos
            </Router-Link>
            <Router-Link to="/faq" class="m-[10px]">
              Preguntas Frecuentes
            </Router-Link>
            <Router-Link to="/problem" class="m-[10px]">
              Reportar un problema
            </Router-Link>
            <Router-Link to="/perfil" class="m-[10px]">
              Mi Perfil
            </Router-Link>
        </ul>
    </div>
</template>

<script>
    export default {
    name: 'PerfilComponent',
  }
</script>