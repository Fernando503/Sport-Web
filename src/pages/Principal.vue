<template>
    <div class="container">
       <div class="left-container-princ">
           <h2 class="title">Bienvenido a Sport Web</h2>
           <h3 class="subMenu">Sub-menu</h3>
           <p class="bodyPrin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button type="button" class="btn btn-outline-primary">Registrate</button>
       </div>
       <div class="right-container">
           <img src="../assets/vectorPrincipal.png" alt="400" width="400">
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.container{
    padding-top: 3em;
    padding-bottom: 2em;
}
.left-container-princ{
    width: 60%;
   float: left;
}

.title{
    font-weight: bold;
    color: indigo;
}
.bodyPrin{
    padding-right: 5em;
}

</style>