<script setup>
import { RouterLink } from 'vue-router'


</script>


<template>
    <header>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </header>
</template>


<style scoped>
    header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 70px;
        width: 100%;
        background-color: whitesmoke;
    }
</style>