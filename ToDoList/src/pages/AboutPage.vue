<script setup>

import About from "@/components/About.vue";
</script>

<template>
    <About>
        <template #header>
            <h3>Hello! It's about me!</h3>
        </template>
        <p>
            I am a software developer passionate about Vue.
        </p>
        <template #footer>
            <h3>Vue ToDo list Footer</h3>
        </template>

    </About>
</template>

<style scoped>

</style>