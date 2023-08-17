<template>
     <div class="header">
        <h1>{{ headerValue }}</h1>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import "./styles/header-component.scss"
    export default Vue.extend({
        name : "header-component",
        props:{
            headerValue:{
                required: true,
                type : String,
                default : () =>null,
            }
        }
    })
</script>