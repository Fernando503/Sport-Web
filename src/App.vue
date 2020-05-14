<template>
    <div id="app">
        <Navbar/>
        <div>
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
    },
    created: {}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
