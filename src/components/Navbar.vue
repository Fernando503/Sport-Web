<template>
<header class="header">
    <nav class="navbar-main navbar navbar-expand-lg navbar-light bg-light">
       <router-link to="/" class="nav-link"><b>Sport Web</b></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto inline">
          <li class="nav-item">
             <router-link to="/service" class="nav-link">Service</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Acerca de</router-link>
          </li>
        </ul>
          <button class="inline btn btn-outline-info my-2 my-sm-0" type="submit">Log In</button>
      </div>
    </nav>
</header>
</template>
<style>		
.header .navbar {
  background-color: transparent !important;
}
li{
  padding-right: 2em;
}
</style>