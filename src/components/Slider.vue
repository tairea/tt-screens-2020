<template>
    <div id="app">
        <!-- <img src="./assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <div class="reveal">
            <div class="slides">
                <section>
                    <CreditLeaderboard :students="students"/>
                </section>
                <section>
                    Timetable
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import {db} from './db'
    import Reveal from '../../node_modules/reveal.js/js/reveal'
    import CreditLeaderboard from '@/components/CreditLeaderboard.vue'
    export default {
        name: 'app',
        components: {
            CreditLeaderboard
        },
        data() {
            return {
                students: []
            }
        },
        mounted() {
            Reveal.initialize({
                width: 960,
                height: 700,
            })
            this.$bind( "students", db.collection('students').where("school_year", ">=", 11 ))
        }
    }
</script>

<style>
    @import url('../../node_modules/reveal.js/css/reveal.css');
    @import url('../../node_modules/reveal.js/css/theme/white.css');

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* margin-top: 60px; */
        height: 100vh;
    }
    
</style>