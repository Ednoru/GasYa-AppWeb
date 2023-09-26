<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="profile">
        <div class="profile-image">
            <img src="https://frases.top/wp-content/uploads/2021/08/la-mejor-foto-de-perfil-para-whatsapp.jpg" alt="Foto de perfil">
        </div>
        <div class="profile-info">
            <h1>SEBASTIÁN CÓRDOVA VALDIVIA</h1>
            <p>sebastiancordova123@gmail.com</p>
            <p>@sevascv_</p>
            <p>+51 992 401 964</p>
            <p>U202111041@upc.edu.pe</p>
        </div>
    </div>
</body>

</html>

</template>

<script>
export default{
        name: 'img-per',

        data(){
            return{
            }
        },
        components:{

        }
    }
</script>
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;

    margin: 0;
    padding: 0;
}

.profile {
    max-width: 4000px;
    margin: 50px auto;
    box-shadow:10px 10px 10px 20px black;
    border-radius: 8px;
    display: flex;
    align-items: right;
    padding: 20px;
}

.profile-image {
    flex: 1;
    text-align: right;
}

.profile-image img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.profile-info {
    flex: 2;
    padding-left: 20px;
}

.profile-info h1 {
    font-size: 24px;
    margin: 0;
}

.profile-info p {
    font-size: 18px;
    margin: 0;
    color: #555;
}
</style>


