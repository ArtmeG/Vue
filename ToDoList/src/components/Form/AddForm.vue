<script setup>
import {ref} from "vue";

const props = defineProps({
    placeholder: String,
});

const emit = defineEmits(['update']);


const inputText = ref('');

const addTask = () => {
    if (!inputText.value.trim()) return;

    emit('update', {
        title: inputText.value,
        isDone: false
    });
    clearInput();
};

const clearInput = () => {
    inputText.value = '';
};

</script>

<template>
    <form @submit.prevent="addTask">
        <input v-focus v-model="inputText" :placeholder="props.placeholder" />
    </form>
    <button @click="addTask">Add item</button>
    <button @click="clearInput">Clean input</button>
</template>

<style scoped>

</style>