<template>
    <div id="app">
        <Navbar/>
        <div>
            <Principal/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Principal from './pages/Principal.vue'
export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
         Principal
    },
    created: {
       
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
