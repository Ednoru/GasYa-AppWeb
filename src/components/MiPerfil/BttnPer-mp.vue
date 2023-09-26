<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="option-EditarPerfil">
        <div class="option-imageEditarPerfil">
                <i class="pi pi-user-edit"></i>
                <button @click="editarPerfil">Editar Perfil</button>
        </div>
    </div>
</body>
</html>
</template>
<script>
export default{
        name: 'Bttn-Per',

        data(){
            return{
            }
        },
        components:{

        }
    }
</script>
<style>
/* EditarPerfil */ 
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;

    margin: 0;
    padding: 0;
}

.option-EditarPerfil {
    max-width: 4000px;
    margin: 50px auto;

    border-radius: 8px;
    box-shadow:10px 10px 10px 20px black;
    display: flex;
    align-items: right;
    padding: 20px;
}
.option-imageEditarPerfil {
    flex: 1;
    text-align: right;
}

.option-imageEditarPerfil i{
  margin-right: auto; 
}
.option-infoEditarPerfil{
    flex: 2;
    padding-left: 10px;
}
</style>