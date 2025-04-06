<script setup>
import {ref} from "vue";

const isVisible = ref(true);
const title = 'ToDo List';

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};
</script>

<template>
    <div class="title-form">
        <h2 v-show="isVisible">{{ title }}</h2>
        <button @click="toggleVisibility">{{ isVisible ? 'Hide title' : 'Show title' }}</button>
    </div>

</template>

<style scoped>
h2 {
    margin-right: 10px;
    display: inline-block;
}

button {
    display: inline-block;
}

.title-form {
    width: 50%; margin: 0 auto;
    //display: flex;
}
</style>