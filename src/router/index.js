import Vue from 'vue'
import VueRouter from 'vue-router'

import DrugSearch from "@/components/DrugSearch";
import Home from "@/components/Home";
import DrugInfo from "@/components/DrugInfo";
import PharmacySearch from "@/components/PharmacySearch";
import About from "@/components/About";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search/:search_term',
            name: 'DrugSearch',
            component: DrugSearch,
            props: true
        },
        {
            path: '/drug/:id',
            name: 'DrugInfo',
            component: DrugInfo
        },
        {
            path: '/pharmacy_search/:id',
            name: 'PharmacySearch',
            component: PharmacySearch
        },
        {
            path: '/about/',
            name: 'About',
            component: About
        }
    ]
})