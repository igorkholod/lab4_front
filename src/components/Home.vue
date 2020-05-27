<template>
        <div class="welcome-container">
            <div>
                <p>Welcome.</p>
                <span>Please, provide a drug name in the field below.</span>
                <form id="search_form" action="#"  method="post">
                    <input id="search_field" type="text" name="search_term" v-model="search_term"
                           placeholder="Here, e.g. 'drug'">
                    <router-link :to="{name: 'DrugSearch', params: {search_term: this.search_term}}">
                        <button v-on:click="validate_form()"><i class="fa fa-search"></i></button>
                    </router-link>
                </form>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
            let script = document.createElement('script');
            script.setAttribute('src', 'https://kit.fontawesome.com/0aa1058b8e.js');
            document.head.appendChild(script);
        },
        data() {
            return {
                search_term: null
            }
        },
        methods: {
            validate_form() {
                if (this.search_term === null || this.search_term === '') {
                    const field = document.getElementById('search_field');
                    const color = field.style.backgroundColor;
                    field.style.backgroundColor = 'indianred';
                    setTimeout(() => {
                        field.style.backgroundColor = color;
                    }, 1000);
                }
            }
        }
    }
</script>