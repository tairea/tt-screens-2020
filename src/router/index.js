import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '@/components/Login'
import Slider from '@/components/Slider'

Vue.use(Router)

let router = new Router({
    // base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Slider',
            component: Slider,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                requiresGuest: true
            }
        },
    ],
    // mode: "history"
});

//Nav Guards
router.beforeEach((to, from, next) => {
    //check for requiredAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //check if NOT logged in
        if (!firebase.auth().currentUser) {
            // Go the login
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else if (to.matched.some(record => record.meta.requiresGuest)) {
            //check if IS logged in
            if (firebase.auth().currentUser) {
                // Go the login
                next({
                    path: '/',
                    query: {
                        redirect: to.fullPath
                    }
                })
            } else {
                // proceed to the route
                next()
            }
        } else {
            // proceed to the route
            next()
        }
    }
})

export default router;