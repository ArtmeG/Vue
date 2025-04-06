<script setup>
import {ref} from "vue";

const props = defineProps({
    placeholder: String,
});

const emit = defineEmits(['update']);


const inputText = ref('');

const addTask = () => {
    emit('update', {
        title: inputText.value ? inputText.value : 'New task',
        isDone: false
    });
    clearInput();
};

const clearInput = () => {
    inputText.value = '';
};

</script>

<template>
    <input v-model="inputText" :placeholder="props.placeholder" />
    <button @click="addTask">Add item</button>
    <button @click="clearInput">Clean input</button>
</template>

<style scoped>

</style>